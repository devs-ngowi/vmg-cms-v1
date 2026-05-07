<?php

namespace App\Actions;

use App\Models\Company;
use App\Models\Role;
use App\Models\User;
use Database\Seeders\SiteSettingSeeder;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class CreateTenant
{
    private const REQUIRED_TABLES = [
        'cache',
        'cache_locks',
        'failed_jobs',
        'jobs',
        'job_batches',
        'sessions',
        'password_reset_tokens',
        'personal_access_tokens',
        'users',
        'roles',
        'permissions',
        'site_settings',
        'media',
        'seo_settings',
        'tags',
        'taggables',
        'categories',
        'content_categories',
        'content_media',
        'content_tags',
        'audit_logs',
        'workflow',
        'workflows',
        'authors',
        'blog_posts',
        'menus',
        'menu_items',
        'pages',
        'page_views',
        'hero_slides',
        'banners',
        'client_logos',
        'industries',
        'industry_media',
        'forms',
        'form_fields',
        'form_submissions',
        'form_responses',
        'services',
        'service_packages',
        'service_sub_packages',
        'projects',
        'testimonials',
        'vacancies',
        'knowledge_articles',
        'knowledge_article_media',
        'knowledge_categories',
    ];

    // -------------------------------------------------------------------------
    // Main entry point
    // -------------------------------------------------------------------------

    public function execute(array $data): Company
    {
        // ── 1. Generate a unique slug ─────────────────────────────────────────
        $baseSlug = Str::slug($data['name']);
        $slug     = $baseSlug;
        $counter  = 2;

        while (Company::where('slug', $slug)->exists()) {
            $slug = $baseSlug . '-' . $counter++;
        }

        // cPanel-safe DB naming: hyphens → underscores
        $safeSlug = str_replace('-', '_', $slug);
        $dbName   = 'tickads_tenant_' . $safeSlug;

        // ── 2. Normalise domain ───────────────────────────────────────────────
        // storedDomain  = full URL kept in DB,  e.g. "https://winstlaw.cms.tick.co.tz"
        // bareHost      = no scheme/slash,       e.g. "winstlaw.cms.tick.co.tz"
        // subdomain     = first label only,      e.g. "winstlaw"
        // rootDomain    = everything after that, e.g. "cms.tick.co.tz"
        $storedDomain = $data['domain'];                                    // already normalised by controller
        $bareHost     = self::stripScheme($storedDomain);                   // winstlaw.cms.tick.co.tz
        $rootDomain   = env('APP_ROOT_DOMAIN', 'cms.tick.co.tz');
        $subdomain    = self::extractSubdomain($bareHost, $rootDomain);     // winstlaw

        // ── 3. Provision DB + subdomain via cPanel UAPI ───────────────────────
        $this->provisionCpanelDatabase($dbName);
        $this->provisionCpanelSubdomain($subdomain, $rootDomain);

        // ── 4. Create the Company record in the landlord DB ───────────────────
        $company = Company::create([
            'name'     => $data['name'],
            'slug'     => $slug,
            'domain'   => $storedDomain,   // full URL — used by tenantUrl() on welcome page
            'database' => $dbName,
            'status'   => 'active',
            'plan'     => $data['plan'] ?? 'basic',
            'logo'     => $data['logo'] ?? null,
            'settings' => $data['settings'] ?? [],
        ]);

        try {
            // ── 5. Switch to the tenant connection ────────────────────────────
            $company->makeCurrent();

            DB::purge('tenant');
            DB::reconnect('tenant');

            // Verify the tenant DB is actually reachable before proceeding
            DB::connection('tenant')->getPdo();

            // ── 6. Run tenant migrations ──────────────────────────────────────
            $exitCode = Artisan::call('migrate', [
                '--database' => 'tenant',
                '--path'     => 'database/migrations/tenant',
                '--force'    => true,
            ]);

            if ($exitCode !== 0) {
                throw new \RuntimeException(
                    'Tenant migration failed (exit code ' . $exitCode . '). Check laravel.log for details.'
                );
            }

            // ── 7. Verify all expected tables exist ───────────────────────────
            $missing = [];
            foreach (self::REQUIRED_TABLES as $table) {
                if (! Schema::connection('tenant')->hasTable($table)) {
                    $missing[] = $table;
                }
            }

            if (! empty($missing)) {
                throw new \RuntimeException(
                    'Tenant migration incomplete. Missing tables: ' . implode(', ', $missing) . '. ' .
                    'Ensure a migration file in database/migrations/tenant creates each of these tables.'
                );
            }

            // ── 8. Create the admin role & user ───────────────────────────────
            $adminRole = Role::on('tenant')->create([
                'name'  => 'admin',
                'label' => 'Administrator',
            ]);

            User::on('tenant')->create([
                'username'  => $data['admin']['username'],
                'full_name' => $data['admin']['full_name'],
                'email'     => $data['admin']['email'],
                'password'  => Hash::make($data['admin']['password']),
                'role_id'   => $adminRole->id,
                'status'    => 'active',
            ]);

            // ── 9. Seed default site settings ─────────────────────────────────
            $seedExitCode = Artisan::call('db:seed', [
                '--class'    => SiteSettingSeeder::class,
                '--database' => 'tenant',
                '--force'    => true,
            ]);

            if ($seedExitCode !== 0) {
                throw new \RuntimeException(
                    'SiteSettingSeeder failed (exit code ' . $seedExitCode . '). Check laravel.log for details.'
                );
            }

            // ── 10. Override seeded defaults with tenant-specific values ──────
            $this->seedTenantSettings($data);

            Log::info("Tenant provisioned successfully: {$dbName} / {$storedDomain}");

            return $company;

        } catch (\Throwable $e) {
            Log::error("Tenant provisioning failed for {$dbName}: " . $e->getMessage());

            optional($company)->delete();

            Log::warning(
                "Cleanup needed: DB '{$dbName}' and subdomain '{$subdomain}.{$rootDomain}' " .
                'may need to be removed manually from cPanel if you are not retrying.'
            );

            throw $e;

        } finally {
            Company::forgetCurrent();
            DB::purge('tenant');
        }
    }

    // -------------------------------------------------------------------------
    // Domain helpers
    // -------------------------------------------------------------------------

    /**
     * Strip http:// or https:// and any trailing slash.
     *
     *   "https://winstlaw.cms.tick.co.tz/"  →  "winstlaw.cms.tick.co.tz"
     *   "winstlaw.cms.tick.co.tz"           →  "winstlaw.cms.tick.co.tz"
     */
    private static function stripScheme(string $domain): string
    {
        return rtrim(preg_replace('#^https?://#i', '', trim($domain)), '/');
    }

    /**
     * Extract the subdomain label (first segment) from a bare host.
     *
     *   bareHost   = "winstlaw.cms.tick.co.tz"
     *   rootDomain = "cms.tick.co.tz"
     *   →            "winstlaw"
     *
     * Falls back to the first dot-segment if the rootDomain suffix is not found.
     */
    private static function extractSubdomain(string $bareHost, string $rootDomain): string
    {
        // Remove the root domain suffix (and the separating dot) if present
        $suffix = '.' . ltrim($rootDomain, '.');

        if (str_ends_with($bareHost, $suffix)) {
            return substr($bareHost, 0, strlen($bareHost) - strlen($suffix));
        }

        // Fallback: take the first label before the first dot
        return explode('.', $bareHost)[0];
    }

    // -------------------------------------------------------------------------
    // cPanel UAPI — database provisioning
    // -------------------------------------------------------------------------

    private function provisionCpanelDatabase(string $dbName): void
    {
        $cpanelUser  = env('CPANEL_USER');
        $cpanelToken = env('CPANEL_API_TOKEN');
        $cpanelHost  = env('CPANEL_HOST', 'localhost');
        $dbUser      = env('DB_USERNAME', 'developer');

        if (empty($cpanelUser) || empty($cpanelToken)) {
            Log::info("CPANEL credentials not set — skipping DB provisioning for '{$dbName}'.");
            return;
        }

        $base    = "https://{$cpanelHost}:2083/execute";
        $headers = [
            "Authorization: cpanel {$cpanelUser}:{$cpanelToken}",
            "Content-Type: application/x-www-form-urlencoded",
        ];

        $this->cpanelUapiCall(
            "{$base}/Mysql/create_database",
            ['name' => $dbName],
            $headers,
            "create database '{$dbName}'"
        );

        Log::info("cPanel: database '{$dbName}' created.");

        $this->cpanelUapiCall(
            "{$base}/Mysql/set_privileges_on_database",
            [
                'user'       => $dbUser,
                'database'   => $dbName,
                'privileges' => 'ALL PRIVILEGES',
            ],
            $headers,
            "grant privileges on '{$dbName}' to '{$dbUser}'"
        );

        Log::info("cPanel: privileges granted on '{$dbName}' to '{$dbUser}'.");
    }

    // -------------------------------------------------------------------------
    // cPanel UAPI — subdomain provisioning
    // -------------------------------------------------------------------------

    /**
     * Create a subdomain in cPanel pointing to the same document root as the
     * main app so all tenant subdomains are served by the same Laravel install.
     *
     * cPanel's SubDomain/addsubdomain API expects:
     *   domain     = the subdomain label ONLY  (e.g. "winstlaw")
     *   rootdomain = the parent domain         (e.g. "cms.tick.co.tz")
     *
     * It must NEVER receive a scheme (http/https) in the domain parameter.
     */
    private function provisionCpanelSubdomain(string $subdomain, string $rootDomain): void
    {
        $cpanelUser  = env('CPANEL_USER');
        $cpanelToken = env('CPANEL_API_TOKEN');
        $cpanelHost  = env('CPANEL_HOST', 'localhost');

        if (empty($cpanelUser) || empty($cpanelToken)) {
            Log::info("CPANEL credentials not set — skipping subdomain provisioning for '{$subdomain}'.");
            return;
        }

        if (empty($subdomain) || $subdomain === $rootDomain) {
            Log::warning("Subdomain provisioning skipped — could not derive subdomain from domain.");
            return;
        }

        // Guard: ensure no scheme slipped through (belt-and-suspenders)
        if (str_contains($subdomain, '://')) {
            throw new \InvalidArgumentException(
                "provisionCpanelSubdomain() received a URL instead of a bare subdomain label: '{$subdomain}'. " .
                "Strip the scheme before calling this method."
            );
        }

        $docRoot = env('CPANEL_APP_DOCROOT', "/home/{$cpanelUser}/cms.tick.co.tz/public");

        $base    = "https://{$cpanelHost}:2083/execute";
        $headers = [
            "Authorization: cpanel {$cpanelUser}:{$cpanelToken}",
            "Content-Type: application/x-www-form-urlencoded",
        ];

        $this->cpanelUapiCall(
            "{$base}/SubDomain/addsubdomain",
            [
                'domain'     => $subdomain,   // ✅ bare label only: "winstlaw"
                'rootdomain' => $rootDomain,  // e.g. "cms.tick.co.tz"
                'dir'        => $docRoot,
            ],
            $headers,
            "create subdomain '{$subdomain}.{$rootDomain}'"
        );

        Log::info("cPanel: subdomain '{$subdomain}.{$rootDomain}' created → {$docRoot}");
    }

    // -------------------------------------------------------------------------
    // Shared cPanel UAPI HTTP caller
    // -------------------------------------------------------------------------

    private function cpanelUapiCall(string $url, array $params, array $headers, string $action): void
    {
        $cpanelHost = env('CPANEL_HOST', 'localhost');

        $ch = curl_init($url);

        curl_setopt_array($ch, [
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => http_build_query($params),
            CURLOPT_HTTPHEADER     => $headers,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => 30,
            CURLOPT_SSL_VERIFYPEER => ($cpanelHost !== 'localhost'),
            CURLOPT_SSL_VERIFYHOST => ($cpanelHost !== 'localhost') ? 2 : 0,
        ]);

        $response = curl_exec($ch);
        $curlErr  = curl_error($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($curlErr) {
            throw new \RuntimeException("cPanel UAPI curl error while trying to {$action}: {$curlErr}");
        }

        if ($httpCode !== 200) {
            throw new \RuntimeException(
                "cPanel UAPI returned HTTP {$httpCode} while trying to {$action}."
            );
        }

        $result = json_decode($response, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new \RuntimeException(
                "cPanel UAPI returned non-JSON response while trying to {$action}."
            );
        }

        if (($result['status'] ?? 0) !== 1) {
            $reason = $result['errors'][0] ?? $result['messages'][0] ?? 'Unknown cPanel error';
            throw new \RuntimeException("cPanel UAPI failed to {$action}: {$reason}");
        }
    }

    // -------------------------------------------------------------------------
    // Tenant site_settings seeding
    // -------------------------------------------------------------------------

    private function seedTenantSettings(array $data): void
    {
        $rows = [
            ['key' => 'site_name',      'value' => $data['name'],                                  'group' => 'general'],
            ['key' => 'contact_email',  'value' => $data['admin']['email'] ?? 'info@example.com',  'group' => 'contact'],
            ['key' => 'company_name',   'value' => $data['name'],                                  'group' => 'company'],
            ['key' => 'company_domain', 'value' => $data['domain'],                                'group' => 'company'],
            ['key' => 'company_plan',   'value' => $data['plan'] ?? 'basic',                       'group' => 'company'],
        ];

        foreach ($rows as $row) {
            DB::connection('tenant')->table('site_settings')->updateOrInsert(
                ['key' => $row['key']],
                [
                    'value'      => $row['value'],
                    'type'       => 'string',
                    'group'      => $row['group'],
                    'updated_by' => null,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]
            );
        }
    }
}