<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TenantSiteSettingsSeeder extends Seeder
{
    public function run(): void
    {
        DB::connection('tenant')->table('site_settings')->updateOrInsert(
            ['key' => 'company_name'],
            [
                'value' => 'Default Company',
                'type' => 'string',
                'group' => 'company',
                'updated_by' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        );

        DB::connection('tenant')->table('site_settings')->updateOrInsert(
            ['key' => 'company_domain'],
            [
                'value' => '',
                'type' => 'string',
                'group' => 'company',
                'updated_by' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        );

        DB::connection('tenant')->table('site_settings')->updateOrInsert(
            ['key' => 'company_plan'],
            [
                'value' => 'basic',
                'type' => 'string',
                'group' => 'company',
                'updated_by' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        );
    }
}
