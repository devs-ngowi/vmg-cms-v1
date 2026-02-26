<?php

namespace Database\Seeders;

use App\Models\SiteSetting;
use Illuminate\Database\Seeder;

class SiteSettingSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            // ── General ───────────────────────────────────────────────────────
            ['key' => 'site_name',           'value' => 'My Company',          'type' => 'string',  'group' => 'general'],
            ['key' => 'site_tagline',        'value' => 'Building the future', 'type' => 'string',  'group' => 'general'],
            ['key' => 'site_logo_url',       'value' => '',                    'type' => 'string',  'group' => 'general'],
            ['key' => 'favicon_url',         'value' => '',                    'type' => 'string',  'group' => 'general'],
            ['key' => 'maintenance_mode',    'value' => 'false',               'type' => 'boolean', 'group' => 'general'],
            ['key' => 'copyright_text',      'value' => '© 2025 My Company. All rights reserved.', 'type' => 'string', 'group' => 'general'],

            // ── Contact ───────────────────────────────────────────────────────
            ['key' => 'contact_email',       'value' => 'info@example.com',    'type' => 'string',  'group' => 'contact'],
            ['key' => 'contact_phone',       'value' => '+1 (555) 000-0000',   'type' => 'string',  'group' => 'contact'],
            ['key' => 'contact_address',     'value' => '123 Main Street, City, Country', 'type' => 'text', 'group' => 'contact'],
            ['key' => 'maps_embed_url',      'value' => '',                    'type' => 'string',  'group' => 'contact'],
            ['key' => 'whatsapp_number',     'value' => '',                    'type' => 'string',  'group' => 'contact'],

            // ── Social ────────────────────────────────────────────────────────
            ['key' => 'social_facebook',     'value' => '',                    'type' => 'string',  'group' => 'social'],
            ['key' => 'social_twitter',      'value' => '',                    'type' => 'string',  'group' => 'social'],
            ['key' => 'social_instagram',    'value' => '',                    'type' => 'string',  'group' => 'social'],
            ['key' => 'social_linkedin',     'value' => '',                    'type' => 'string',  'group' => 'social'],
            ['key' => 'social_youtube',      'value' => '',                    'type' => 'string',  'group' => 'social'],
            ['key' => 'social_tiktok',       'value' => '',                    'type' => 'string',  'group' => 'social'],

            // ── SEO ───────────────────────────────────────────────────────────
            ['key' => 'meta_title',          'value' => '',                    'type' => 'string',  'group' => 'seo'],
            ['key' => 'meta_description',    'value' => '',                    'type' => 'text',    'group' => 'seo'],
            ['key' => 'meta_keywords',       'value' => '',                    'type' => 'string',  'group' => 'seo'],
            ['key' => 'og_image_url',        'value' => '',                    'type' => 'string',  'group' => 'seo'],
            ['key' => 'google_analytics_id', 'value' => '',                    'type' => 'string',  'group' => 'seo'],
            ['key' => 'google_tag_manager',  'value' => '',                    'type' => 'string',  'group' => 'seo'],

            // ── Advanced ──────────────────────────────────────────────────────
            ['key' => 'robots_txt',          'value' => "User-agent: *\nAllow: /", 'type' => 'text', 'group' => 'advanced'],
            ['key' => 'custom_css',          'value' => '',                    'type' => 'text',    'group' => 'advanced'],
            ['key' => 'custom_js',           'value' => '',                    'type' => 'text',    'group' => 'advanced'],
            ['key' => 'cookie_notice',       'value' => 'true',                'type' => 'boolean', 'group' => 'advanced'],
            ['key' => 'cookie_notice_text',  'value' => 'We use cookies to enhance your experience.', 'type' => 'string', 'group' => 'advanced'],
        ];

        foreach ($settings as $setting) {
            SiteSetting::firstOrCreate(
                ['key' => $setting['key']],
                array_merge($setting, ['updated_by' => null]),
            );
        }
    }
}
