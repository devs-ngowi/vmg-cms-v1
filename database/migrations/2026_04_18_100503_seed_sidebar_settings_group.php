<?php
// database/migrations/xxxx_seed_sidebar_settings_group.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    // Run on the TENANT connection — called once per tenant via artisan
    protected $connection = 'tenant';

    public function up(): void
    {
        $defaults = [
            [
                'key'   => 'sidebar_logo',
                'value' => '',
                'type'  => 'string',
                'group' => 'sidebar',
            ],
            [
                'key'   => 'sidebar_company_name',
                'value' => '',
                'type'  => 'string',
                'group' => 'sidebar',
            ],
            [
                'key'   => 'sidebar_brand_color',
                'value' => '#1e40af',
                'type'  => 'string',
                'group' => 'sidebar',
            ],
            [
                'key'   => 'sidebar_enabled_modules',
                'value' => json_encode([
                    'Dashboard', 'Users', 'Roles', 'Pages', 'Blog',
                    'Projects', 'Services', 'Industries', 'Media',
                    'Forms', 'Submissions', 'Workflow', 'Hero Slides',
                    'Client Logos', 'Testimonials', 'Settings',
                    'SEO', 'Menus', 'Analytics',
                ]),
                'type'  => 'json',
                'group' => 'sidebar',
            ],
            [
                'key'   => 'sidebar_show_group_labels',
                'value' => 'true',
                'type'  => 'boolean',
                'group' => 'sidebar',
            ],
        ];

        foreach ($defaults as $row) {
            DB::connection('tenant')
                ->table('site_settings')
                ->updateOrInsert(['key' => $row['key']], array_merge($row, [
                    'created_at' => now(),
                    'updated_at' => now(),
                ]));
        }
    }

    public function down(): void
    {
        DB::connection('tenant')
            ->table('site_settings')
            ->where('group', 'sidebar')
            ->delete();
    }
};
