<?php

namespace App\Console\Commands;

use App\Models\Company;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class SeedTenantByDomain extends Command
{
    protected $signature = 'tenant:seed
                            {domain : Tenant domain, e.g. vipawaworks.localhost}
                            {--class=Database\\Seeders\\SiteSettingSeeder : Seeder class to run}';

    protected $description = 'Seed a tenant database by resolving tenant from domain';

    public function handle(): int
    {
        $domain = $this->argument('domain');
        $seederClass = $this->option('class');

        // Find tenant/company in central database
        $company = Company::where('domain', $domain)->first();

        if (! $company) {
            $this->error("No company found for domain: {$domain}");
            return self::FAILURE;
        }

        if (empty($company->database)) {
            $this->error("Company found, but database is empty for domain: {$domain}");
            return self::FAILURE;
        }

        // Dynamically set tenant DB
        Config::set('database.connections.tenant.database', $company->database);

        // Optional if host/username/password are also tenant-specific:
        // Config::set('database.connections.tenant.host', $company->db_host);
        // Config::set('database.connections.tenant.port', $company->db_port);
        // Config::set('database.connections.tenant.username', $company->db_username);
        // Config::set('database.connections.tenant.password', $company->db_password);

        DB::purge('tenant');
        DB::reconnect('tenant');

        // Test connection
        DB::connection('tenant')->getPdo();

        $this->info("Connected tenant domain: {$domain}");
        $this->info("Using tenant database: {$company->database}");
        $this->info("Running seeder: {$seederClass}");

        Artisan::call('db:seed', [
            '--class' => $seederClass,
            '--force' => true,
        ], $this->output);

        return self::SUCCESS;
    }
}
