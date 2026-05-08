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
        $storedDomain = $data['domain'];
        $bareHost     = self::stripScheme($storedDomain);
        $rootDomain   = env('APP_ROOT_DOMAIN', 'cms.tick.co.tz');
        $subdomain    = self::extractSubdomain($bareHost, $rootDomain);

        // ── 3. Provision database ─────────────────────────────────────────────
        //
        // We check for cPanel CREDENTIALS, not APP_ENV.
        // APP_ENV can be wrong due to a stale config cache (config:cache run
        // with a different .env). Credentials are always read from the live
        // .env at runtime via env(), so they cannot be stale.
        //
        if ($this->hasCpanelCredentials()) {
            Log::info("cPanel credentials found — using cPanel provisioning for '{$dbName}'.");
            $this->provisionCpanelDatabase($dbName);
            $this->provisionCpanelSubdomain($subdomain, $rootDomain);
        } else {
            Log::info("No cPanel credentials — using local MySQL provisioning for '{$dbName}'.");
            $this->provisionLocalDatabase($dbName);
        }

        // ── 4. Create the Company record in the landlord DB ───────────────────
        $company = Company::create([
            'name'     => $data['name'],
            'slug'     => $slug,
            'domain'   => $storedDomain,
            'database' => $dbName,
            'status'   => 'active',
            'plan'     => $data['plan'] ?? 'basic',
            'logo'     => $data['logo'] ?? null,
            'settings' => $data['settings'] ?? [],
        ]);

        try {
            // ── 5. Configure + activate the tenant connection ─────────────────
            //
            // ORDER MATTERS:
            //   a) config() first — before makeCurrent(), which may internally
            //      call DB::purge() and reset the resolved connection.
            //   b) makeCurrent() second — sets the tenant context.
            //   c) DB::purge() — clears the resolver so the next DB access
            //      builds a fresh connection from the config we just wrote.
            //   d) No DB::reconnect() — it can reuse a stale resolver.
            //
            $this->configureTenantConnection($dbName);
            $company->makeCurrent();
            DB::purge('tenant');

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
                'may need to be removed manually if you are not retrying.'
            );

            throw $e;

        } finally {
            Company::forgetCurrent();
            DB::purge('tenant');
        }
    }

    // -------------------------------------------------------------------------
    // Provisioning switch helper
    // -------------------------------------------------------------------------

    /**
     * Returns true only when both CPANEL_USER and CPANEL_API_TOKEN are present
     * in the live environment. We use this instead of app()->environment() to
     * avoid false positives caused by a stale config cache.
     */
    private function hasCpanelCredentials(): bool
    {
        return ! empty(env('CPANEL_USER')) && ! empty(env('CPANEL_API_TOKEN'));
    }

    // -------------------------------------------------------------------------
    // Local database provisioning (no cPanel)
    // -------------------------------------------------------------------------

    /**
     * Creates the tenant database using a raw PDO connection to MySQL
     * (no database selected). After creation, immediately verifies access
     * by switching into the new database — same connection, no caching.
     *
     * This is intentionally NOT using DB::statement() or any Laravel facade.
     * Laravel's connection resolver can cache socket/pipe parameters that
     * differ from a fresh PDO connection, causing "Unknown database" errors
     * even when the DB was genuinely created.
     */
    private function provisionLocalDatabase(string $dbName): void
    {
        $host     = env('DB_HOST', '127.0.0.1');
        $port     = env('DB_PORT', '3306');
        $username = env('DB_USERNAME', 'root');
        $password = env('DB_PASSWORD', '');

        Log::info("provisionLocalDatabase: connecting to {$host}:{$port} as '{$username}'");

        // Step A — connect to MySQL without selecting any database
        try {
            $pdo = new \PDO(
                "mysql:host={$host};port={$port};charset=utf8mb4",
                $username,
                $password,
                [
                    \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
                    \PDO::ATTR_TIMEOUT => 5,
                ]
            );
        } catch (\PDOException $e) {
            throw new \RuntimeException(
                "Cannot connect to MySQL server at {$host}:{$port} as '{$username}'. " .
                "PDO error: " . $e->getMessage() . ". " .
                "Check DB_HOST, DB_PORT, DB_USERNAME and DB_PASSWORD in your .env."
            );
        }

        // Step B — create the database
        try {
            $pdo->exec(
                "CREATE DATABASE IF NOT EXISTS `{$dbName}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci"
            );
        } catch (\PDOException $e) {
            throw new \RuntimeException(
                "CREATE DATABASE failed for '{$dbName}'. " .
                "PDO error: " . $e->getMessage() . ". " .
                "Check that the MySQL user has the CREATE privilege."
            );
        }

        Log::info("provisionLocalDatabase: CREATE DATABASE `{$dbName}` executed.");

        // Step C — verify by switching into the new database on the same connection
        try {
            $pdo->exec("USE `{$dbName}`");
        } catch (\PDOException $e) {
            throw new \RuntimeException(
                "Database '{$dbName}' was created but cannot be selected. " .
                "PDO error: " . $e->getMessage() . ". " .
                "Check MySQL user privileges: GRANT ALL PRIVILEGES ON `{$dbName}`.* TO '{$username}'@'localhost';"
            );
        }

        Log::info("provisionLocalDatabase: `{$dbName}` selected — provisioning verified.");
    }

    // -------------------------------------------------------------------------
    // Tenant connection helpers
    // -------------------------------------------------------------------------

    /**
     * Write all tenant connection parameters into Laravel's runtime config.
     * Called BEFORE makeCurrent() so any internal purge inside makeCurrent()
     * does not overwrite the values we need.
     */
    private function configureTenantConnection(string $dbName): void
    {
        config([
            'database.connections.tenant.driver'    => 'mysql',
            'database.connections.tenant.host'      => env('DB_HOST', '127.0.0.1'),
            'database.connections.tenant.port'      => env('DB_PORT', '3306'),
            'database.connections.tenant.database'  => $dbName,
            'database.connections.tenant.username'  => env('DB_USERNAME', 'root'),
            'database.connections.tenant.password'  => env('DB_PASSWORD', ''),
            'database.connections.tenant.charset'   => 'utf8mb4',
            'database.connections.tenant.collation' => 'utf8mb4_unicode_ci',
            'database.connections.tenant.prefix'    => '',
            'database.connections.tenant.strict'    => true,
            'database.connections.tenant.engine'    => null,
        ]);

        Log::info("configureTenantConnection: tenant connection set to '{$dbName}'.");
    }

    // -------------------------------------------------------------------------
    // Domain helpers
    // -------------------------------------------------------------------------

    /**
     * Strip http:// or https:// and any trailing slash.
     *
     *   "https://winstlaw.cms.tick.co.tz/"  →  "winstlaw.cms.tick.co.tz"
     */
    private static function stripScheme(string $domain): string
    {
        return rtrim(preg_replace('#^https?://#i', '', trim($domain)), '/');
    }

    /**
     * Extract the subdomain label from a bare host.
     *
     *   bareHost   = "winstlaw.cms.tick.co.tz"
     *   rootDomain = "cms.tick.co.tz"
     *   →            "winstlaw"
     */
    private static function extractSubdomain(string $bareHost, string $rootDomain): string
    {
        $suffix = '.' . ltrim($rootDomain, '.');

        if (str_ends_with($bareHost, $suffix)) {
            return substr($bareHost, 0, strlen($bareHost) - strlen($suffix));
        }

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

    private function provisionCpanelSubdomain(string $subdomain, string $rootDomain): void
    {
        $cpanelUser  = env('CPANEL_USER');
        $cpanelToken = env('CPANEL_API_TOKEN');
        $cpanelHost  = env('CPANEL_HOST', 'localhost');

        if (empty($subdomain) || $subdomain === $rootDomain) {
            Log::warning("Subdomain provisioning skipped — could not derive subdomain from domain.");
            return;
        }

        if (str_contains($subdomain, '://')) {
            throw new \InvalidArgumentException(
                "provisionCpanelSubdomain() received a URL instead of a bare subdomain label: '{$subdomain}'."
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
                'domain'     => $subdomain,
                'rootdomain' => $rootDomain,
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
            ['key' => 'site_name',      'value' => $data['name'],                                 'group' => 'general'],
            ['key' => 'contact_email',  'value' => $data['admin']['email'] ?? 'info@example.com', 'group' => 'contact'],
            ['key' => 'company_name',   'value' => $data['name'],                                 'group' => 'company'],
            ['key' => 'company_domain', 'value' => $data['domain'],                               'group' => 'company'],
            ['key' => 'company_plan',   'value' => $data['plan'] ?? 'basic',                      'group' => 'company'],
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
