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

    public function execute(array $data): Company
    {
        $baseSlug = Str::slug($data['name']);
        $slug = $baseSlug;
        $counter = 2;

        while (Company::where('slug', $slug)->exists()) {
            $slug = $baseSlug . '-' . $counter++;
        }

        $dbName = 'tenant_' . $slug;

        DB::connection('landlord')->statement(
            "CREATE DATABASE IF NOT EXISTS `{$dbName}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci"
        );

        $company = Company::create([
            'name'     => $data['name'],
            'slug'     => $slug,
            'domain'   => $data['domain'],
            'database' => $dbName,
            'status'   => 'active',
            'plan'     => $data['plan'] ?? 'basic',
            'logo'     => $data['logo'] ?? null,
            'settings' => $data['settings'] ?? [],
        ]);

        try {
            $company->makeCurrent();
            DB::purge('tenant');
            DB::reconnect('tenant');

            $exitCode = Artisan::call('migrate', [
                '--database' => 'tenant',
                '--path'     => 'database/migrations/tenant',
                '--force'    => true,
            ]);

            if ($exitCode !== 0) {
                throw new \RuntimeException(
                    'Tenant migration command failed (exit code ' . $exitCode . '). Check laravel.log for details.'
                );
            }

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

            // ── Run default tenant settings seeder automatically ────────────
            $seedExitCode = Artisan::call('db:seed', [
                '--class' => SiteSettingSeeder::class,
                '--force' => true,
            ]);

            if ($seedExitCode !== 0) {
                throw new \RuntimeException(
                    'Tenant site settings seeder failed (exit code ' . $seedExitCode . '). Check laravel.log for details.'
                );
            }

            // ── Optional: override some seeded defaults with tenant-specific values
            DB::connection('tenant')->table('site_settings')
                ->updateOrInsert(
                    ['key' => 'site_name'],
                    [
                        'value' => $data['name'],
                        'type' => 'string',
                        'group' => 'general',
                        'updated_by' => null,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]
                );

            DB::connection('tenant')->table('site_settings')
                ->updateOrInsert(
                    ['key' => 'contact_email'],
                    [
                        'value' => $data['admin']['email'] ?? 'info@example.com',
                        'type' => 'string',
                        'group' => 'contact',
                        'updated_by' => null,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]
                );

            // Optional company metadata rows if you still want them
            DB::connection('tenant')->table('site_settings')->updateOrInsert(
                ['key' => 'company_name'],
                [
                    'value'      => $data['name'],
                    'type'       => 'string',
                    'group'      => 'company',
                    'updated_by' => null,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]
            );

            DB::connection('tenant')->table('site_settings')->updateOrInsert(
                ['key' => 'company_domain'],
                [
                    'value'      => $data['domain'],
                    'type'       => 'string',
                    'group'      => 'company',
                    'updated_by' => null,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]
            );

            DB::connection('tenant')->table('site_settings')->updateOrInsert(
                ['key' => 'company_plan'],
                [
                    'value'      => $data['plan'] ?? 'basic',
                    'type'       => 'string',
                    'group'      => 'company',
                    'updated_by' => null,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]
            );

            Log::info("Tenant provisioned successfully: {$dbName}");

            return $company;
        } catch (\Throwable $e) {
            Log::error("Tenant provisioning failed for {$dbName}: " . $e->getMessage());

            try {
                DB::connection('landlord')->statement("DROP DATABASE IF EXISTS `{$dbName}`");
                $company->delete();
            } catch (\Throwable $cleanup) {
                Log::error("Cleanup also failed: " . $cleanup->getMessage());
            }

            throw $e;
        } finally {
            Company::forgetCurrent();
            DB::purge('tenant');
        }
    }
}
