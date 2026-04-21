<?php

namespace App\Http\Controllers;

use App\Models\SiteSetting;
use Database\Seeders\SiteSettingSeeder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class SiteSettingController extends Controller
{
    private const GROUPS = [
        'general'  => 'General',
        'contact'  => 'Contact',
        'social'   => 'Social Media',
        'seo'      => 'SEO & Meta',
        'sidebar'  => 'Sidebar & Branding',
        'advanced' => 'Advanced',
    ];

    public function index(): Response
    {
        $settings = SiteSetting::on('tenant')
            ->with('updater:id,full_name')
            ->orderBy('group')
            ->orderBy('key')
            ->get()
            ->groupBy('group')
            ->map(fn ($group) => $group->map(fn (SiteSetting $setting) => [
                'id'         => $setting->id,
                'key'        => $setting->key,
                'value'      => $setting->value,
                'type'       => $setting->type,
                'group'      => $setting->group,
                'updated_by' => $setting->updater?->full_name,
                'updated_at' => $setting->updated_at?->diffForHumans(),
            ])->values());

        return Inertia::render('settings/index', [
            'settings' => $settings,
            'groups' => self::GROUPS,
            'sidebar_config' => SiteSetting::getSidebarConfig(),
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'group' => ['required', 'string', Rule::in(array_keys(self::GROUPS))],
            'settings' => ['required', 'array'],
            'settings.*.id' => ['required', Rule::exists('tenant.site_settings', 'id')],
            'settings.*.value' => ['nullable'],
        ]);

        foreach ($data['settings'] as $item) {
            $setting = SiteSetting::on('tenant')->find($item['id']);

            if (! $setting) {
                continue;
            }

            $value = match ($setting->type) {
                'boolean' => in_array($item['value'], [true, 'true', '1', 1], true) ? 'true' : 'false',
                'integer' => (string) ((int) ($item['value'] ?? 0)),
                'json', 'array' => is_array($item['value'])
                    ? json_encode(array_values($item['value']))
                    : (string) ($item['value'] ?? '[]'),
                default => (string) ($item['value'] ?? ''),
            };

            if ($setting->key === 'sidebar_visible_modules') {
                $decoded = json_decode($value, true);
                $decoded = is_array($decoded) ? $decoded : [];

                if (! in_array('site_settings', $decoded, true)) {
                    $decoded[] = 'site_settings';
                }

                $value = json_encode(array_values(array_unique($decoded)));
            }

            $setting->forceFill([
                'value' => $value,
                'updated_by' => auth()->id(),
            ])->save();
        }

        return back()->with('success', ucfirst($data['group']) . ' settings saved.');
    }

    public function seedDefaults(): RedirectResponse
    {
        $exitCode = Artisan::call('db:seed', [
            '--class' => SiteSettingSeeder::class,
            '--force' => true,
        ]);

        if ($exitCode !== 0) {
            return back()->with('error', 'Default settings seeder failed.');
        }

        // Keep site_settings always enabled after reseed
        $sidebarSetting = SiteSetting::on('tenant')->where('key', 'sidebar_visible_modules')->first();

        if ($sidebarSetting) {
            $decoded = json_decode($sidebarSetting->value ?? '[]', true);
            $decoded = is_array($decoded) ? $decoded : [];

            if (! in_array('site_settings', $decoded, true)) {
                $decoded[] = 'site_settings';
            }

            $sidebarSetting->update([
                'value' => json_encode(array_values(array_unique($decoded))),
                'updated_by' => auth()->id(),
            ]);
        }

        return back()->with('success', 'Default settings seeded successfully.');
    }
}
