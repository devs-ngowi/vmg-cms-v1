<?php

namespace App\Http\Middleware;

use App\Models\SiteSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        // ── 1. Resolve company ────────────────────────────────────────────────
        $tenant         = function_exists('tenant') ? tenant() : null;
        $sessionCompany = $request->session()->get('company');
        $rawCookie      = $request->cookie('tenant_company');

        $companyData = null;

        if ($tenant) {
            $companyData = [
                'id'       => $tenant->id,
                'name'     => $tenant->name     ?? '',
                'slug'     => $tenant->slug     ?? '',
                'domain'   => $tenant->domain   ?? '',
                'database' => $tenant->database ?? '',
                'logo'     => $tenant->logo     ?? null,
                'plan'     => $tenant->plan     ?? null,
                'status'   => $tenant->status   ?? null,
            ];
        } elseif (is_array($sessionCompany) && ! empty($sessionCompany)) {
            $companyData = $sessionCompany;
        } elseif ($rawCookie) {
            $parsed      = json_decode(urldecode($rawCookie), true);
            $companyData = is_array($parsed) && ! empty($parsed) ? $parsed : null;
        }

        // ── 2. Resolve sidebar config from tenant site_settings ───────────────
        // Only available when tenant DB is active
        $tenantDb      = config('database.connections.tenant.database');
        $sidebarConfig = null;

        if ($tenantDb) {
            try {
                $sidebarConfig = SiteSetting::getSidebarConfig();

                // Merge company branding: site_settings logo overrides company logo
                // but fall back to company logo if sidebar_logo is empty
                if (empty($sidebarConfig['logo']) && $companyData) {
                    $sidebarConfig['logo'] = $companyData['logo'] ?? '';
                }
                if (empty($sidebarConfig['company_name']) && $companyData) {
                    $sidebarConfig['company_name'] = $companyData['name'] ?? '';
                }
            } catch (\Throwable $e) {
                Log::debug('HandleInertiaRequests: could not load sidebar config', [
                    'error' => $e->getMessage(),
                ]);
            }
        }

        // ── 3. Auth user ──────────────────────────────────────────────────────
        $user = $tenantDb ? $request->user() : null;

        return [
            ...parent::share($request),

            'name'          => config('app.name'),
            'company'       => $companyData,
            'sidebar_config' => $sidebarConfig,   // ← per-tenant sidebar settings

            'auth' => [
                'user'        => $user,
                'is_admin'    => $user?->isAdmin() ?? false,
                'permissions' => $user
                    ? $user->role?->permissions()
                        ->get(['module', 'can_view', 'can_create', 'can_edit', 'can_delete', 'can_publish'])
                        ->map(fn ($p) => [
                            'module'      => $p->module,
                            'can_view'    => (bool) $p->can_view,
                            'can_create'  => (bool) $p->can_create,
                            'can_edit'    => (bool) $p->can_edit,
                            'can_delete'  => (bool) $p->can_delete,
                            'can_publish' => (bool) $p->can_publish,
                        ])
                        ->toArray()
                    : [],
            ],

            'sidebarOpen' => ! $request->hasCookie('sidebar_state')
                || $request->cookie('sidebar_state') === 'true',

            'flash' => [
                'status' => session('status'),
                'error'  => session('error'),
            ],
        ];
    }
}
