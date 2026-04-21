<?php

namespace App\Console\Commands;

use App\Models\Company;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;

class MigrateTenant extends Command
{
    protected $signature = 'tenant:migrate {slug} {--fresh}';
    protected $description = 'Run migrations for a specific tenant';

    public function handle(): int
    {
        $company = Company::where('slug', $this->argument('slug'))->first();

        if (! $company) {
            $this->error('Tenant not found.');
            return self::FAILURE;
        }

        $company->makeCurrent();

        DB::purge('tenant');
        DB::reconnect('tenant');

        $command = $this->option('fresh') ? 'migrate:fresh' : 'migrate';

        Artisan::call($command, [
            '--database' => 'tenant',
            '--path' => 'database/migrations/tenant',
            '--force' => true,
        ]);

        $this->line(Artisan::output());

        Company::forgetCurrent();
        DB::purge('tenant');

        return self::SUCCESS;
    }
}
