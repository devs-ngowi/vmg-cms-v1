<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class RoleController extends Controller
{
    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(): Response
    {
        $roles = Role::withCount('users')
            ->with('permissions')
            ->latest()
            ->get()
            ->map(fn (Role $role) => [
                'id'          => $role->id,
                'name'        => $role->name,
                'description' => $role->description,
                'users_count' => $role->users_count,
                'created_at'  => $role->created_at->format('Y-m-d'),
            ]);

        return Inertia::render('roles/index', [
            'roles' => $roles,
        ]);
    }

    // ── Create ────────────────────────────────────────────────────────────────

    public function create(): Response
    {
        return Inertia::render('roles/create');
    }

    // ── Store ─────────────────────────────────────────────────────────────────

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'name'        => ['required', 'string', 'max:100', 'unique:roles,name'],
            'description' => ['nullable', 'string', 'max:500'],
            'permissions' => ['array'],
            'permissions.*.module'     => ['required', 'string'],
            'permissions.*.can_view'   => ['boolean'],
            'permissions.*.can_create' => ['boolean'],
            'permissions.*.can_edit'   => ['boolean'],
            'permissions.*.can_delete' => ['boolean'],
        ]);

        $role = Role::create([
            'name'        => $data['name'],
            'description' => $data['description'] ?? null,
        ]);

        if (!empty($data['permissions'])) {
            $role->permissions()->createMany($data['permissions']);
        }

        return redirect()->route('roles.index')
            ->with('success', 'Role created successfully.');
    }

    // ── Edit ──────────────────────────────────────────────────────────────────

    public function edit(Role $role): Response
    {
        return Inertia::render('roles/edit', [
            'role' => [
                'id'          => $role->id,
                'name'        => $role->name,
                'description' => $role->description,
                'permissions' => $role->permissions()->get(['module', 'can_view', 'can_create', 'can_edit', 'can_delete']),
            ],
        ]);
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, Role $role): RedirectResponse
    {
        $data = $request->validate([
            'name'        => ['required', 'string', 'max:100', Rule::unique('roles', 'name')->ignore($role->id)],
            'description' => ['nullable', 'string', 'max:500'],
            'permissions' => ['array'],
            'permissions.*.module'     => ['required', 'string'],
            'permissions.*.can_view'   => ['boolean'],
            'permissions.*.can_create' => ['boolean'],
            'permissions.*.can_edit'   => ['boolean'],
            'permissions.*.can_delete' => ['boolean'],
        ]);

        $role->update([
            'name'        => $data['name'],
            'description' => $data['description'] ?? null,
        ]);

        // Sync permissions — delete old, insert fresh
        $role->permissions()->delete();
        if (!empty($data['permissions'])) {
            $role->permissions()->createMany($data['permissions']);
        }

        return redirect()->route('roles.index')
            ->with('success', 'Role updated successfully.');
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(Role $role): RedirectResponse
    {
        if ($role->users()->exists()) {
            return back()->with('error', 'Cannot delete a role that has assigned users.');
        }

        $role->permissions()->delete();
        $role->delete();

        return redirect()->route('roles.index')
            ->with('success', 'Role deleted successfully.');
    }
}
