<?php

namespace App\Http\Controllers;

use App\Models\SiteSetting;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SiteSettingController extends Controller
{
    // ── Group definitions (order + labels) ───────────────────────────────────
    private const GROUPS = [
        'general'  => 'General',
        'contact'  => 'Contact',
        'social'   => 'Social Media',
        'seo'      => 'SEO & Meta',
        'advanced' => 'Advanced',
    ];

    // ✅ NEW: API endpoint - Get all settings as JSON
    public function apiIndex(Request $request)
    {
        $settings = SiteSetting::all()->map(fn (SiteSetting $s) => [
            'id'    => $s->id,
            'key'   => $s->key,
            'value' => $s->value,
            'type'  => $s->type,
            'group' => $s->group,
        ])->values();

        // If request expects JSON, return JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'data'    => $settings,
            ]);
        }

        // Otherwise return Inertia view
        return $this->index();
    }

    // ✅ NEW: API endpoint - Get settings by group
    public function apiByGroup(Request $request, string $group)
    {
        $settings = SiteSetting::where('group', $group)
            ->get()
            ->map(fn (SiteSetting $s) => [
                'id'    => $s->id,
                'key'   => $s->key,
                'value' => $s->value,
                'type'  => $s->type,
                'group' => $s->group,
            ])
            ->values();

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'group'   => $group,
                'data'    => $settings,
            ]);
        }

        return redirect()->route('settings.index');
    }

    // ✅ NEW: API endpoint - Get specific setting by key
    public function apiGetSetting(Request $request, string $key)
    {
        $setting = SiteSetting::where('key', $key)->first();

        if (!$setting) {
            return response()->json([
                'success' => false,
                'message' => 'Setting not found',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'key'     => $setting->key,
            'value'   => $setting->value,
            'type'    => $setting->type,
        ]);
    }

    // ── Index - Admin view ────────────────────────────────────────────────────
    public function index(): Response
    {
        $settings = SiteSetting::with('updater:id,full_name')
            ->orderBy('group')
            ->orderBy('key')
            ->get()
            ->groupBy('group')
            ->map(fn ($group) => $group->map(fn (SiteSetting $s) => [
                'id'          => $s->id,
                'key'         => $s->key,
                'value'       => $s->value,
                'type'        => $s->type,
                'group'       => $s->group,
                'updated_by'  => $s->updater?->name,
                'updated_at'  => $s->updated_at?->diffForHumans(),
            ])->values());

        return Inertia::render('settings/index', [
            'settings' => $settings,
            'groups'   => self::GROUPS,
        ]);
    }

    // ── Save one group at a time ──────────────────────────────────────────────
    public function update(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'group'          => ['required', 'string'],
            'settings'       => ['required', 'array'],
            'settings.*.id'  => ['required', 'exists:site_settings,id'],
            'settings.*.value' => ['nullable'],
        ]);

        foreach ($data['settings'] as $item) {
            $setting = SiteSetting::find($item['id']);
            if (!$setting) continue;

            // Coerce value by type before storing
            $value = match ($setting->type) {
                'boolean' => ($item['value'] === true || $item['value'] === 'true' || $item['value'] === '1' || $item['value'] === 1)
                    ? 'true' : 'false',
                'integer' => (string)(int)($item['value'] ?? 0),
                'json', 'array' => is_array($item['value'])
                    ? json_encode($item['value'])
                    : ($item['value'] ?? '[]'),
                default => (string)($item['value'] ?? ''),
            };

            $setting->update([
                'value'      => $value,
                'updated_by' => auth()->id(),
            ]);
        }

        return back()->with('success', ucfirst($data['group']) . ' settings saved.');
    }
}
