<?php
namespace App\Http\Middleware;
use Illuminate\Http\Request;
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
        $user = $request->user();
        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'auth' => [
                'user'        => $user,
                'is_admin'    => $user?->isAdmin() ?? false,  // ← add this
                'permissions' => $user
                    ? $user->role?->permissions()
                           ->get(['module','can_view','can_create','can_edit','can_delete','can_publish'])
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
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
            'flash' => [
                'status' => session('status'),
                'error'  => session('error'),
            ],
        ];
    }
}
