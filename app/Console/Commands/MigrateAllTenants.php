<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Artisan;

class MigrateAllTenants extends Command
{
    protected $signature = 'tenants:migrate';
    protected $description = 'Run tenant migrations on all tenant databases';

    public function handle()
    {
        $tenants = DB::connection('mysql')->select(
            "SHOW DATABASES LIKE 'tickads_tenant_%'"
        );

        foreach ($tenants as $row) {
            $db = array_values((array) $row)[0];

            $this->info("=== Migrating: {$db} ===");

            config(['database.connections.tenant.database' => $db]);
            DB::purge('tenant');
            DB::reconnect('tenant');

            Artisan::call('migrate', [
                '--database' => 'tenant',
                '--path'     => 'database/migrations/tenant',
                '--force'    => true,
            ]);

            $this->line(Artisan::output());
        }

        $this->info('All tenants migrated.');
    }
}
