<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(): Response
    {
        $users = User::with('role')
            ->latest()
            ->get()
            ->map(fn (User $user) => [
                'id'         => $user->id,
                'username'   => $user->username,
                'full_name'  => $user->full_name,
                'email'      => $user->email,
                'role'       => $user->role?->name ?? '—',
                'status'     => $user->status,
                'last_login' => $user->last_login?->diffForHumans(),
                'created_at' => $user->created_at->format('Y-m-d'),
            ]);

        return Inertia::render('users/index', [
            'users' => $users,
        ]);
    }

    // ── Create ────────────────────────────────────────────────────────────────

    public function create(): Response
    {
        return Inertia::render('users/create', [
            'roles' => Role::orderBy('name')->get(['id', 'name']),
        ]);
    }

    // ── Store ─────────────────────────────────────────────────────────────────

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'username'  => ['required', 'string', 'max:100', 'unique:users,username'],
            'full_name' => ['required', 'string', 'max:191'],
            'email'     => ['required', 'email', 'max:191', 'unique:users,email'],
            'password'  => ['required', 'confirmed', Password::defaults()],
            'role_id'   => ['required', 'exists:roles,id'],
            'status'    => ['required', Rule::in(['active', 'inactive', 'pending'])],
        ]);

        User::create([
            ...$data,
            'password' => Hash::make($data['password']),
        ]);

        return redirect()->route('users.index')
            ->with('success', 'User created successfully.');
    }

    // ── Edit ──────────────────────────────────────────────────────────────────

    public function edit(User $user): Response
    {
        return Inertia::render('users/edit', [
            'user'  => [
                'id'        => $user->id,
                'username'  => $user->username,
                'full_name' => $user->full_name,
                'email'     => $user->email,
                'role_id'   => $user->role_id,
                'status'    => $user->status,
            ],
            'roles' => Role::orderBy('name')->get(['id', 'name']),
        ]);
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, User $user): RedirectResponse
    {
        $data = $request->validate([
            'username'  => ['required', 'string', 'max:100', Rule::unique('users', 'username')->ignore($user->id)],
            'full_name' => ['required', 'string', 'max:191'],
            'email'     => ['required', 'email', 'max:191', Rule::unique('users', 'email')->ignore($user->id)],
            'password'  => ['nullable', 'confirmed', Password::defaults()],
            'role_id'   => ['required', 'exists:roles,id'],
            'status'    => ['required', Rule::in(['active', 'inactive', 'pending'])],
        ]);

        if (filled($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        } else {
            unset($data['password']);
        }

        $user->update($data);

        return redirect()->route('users.index')
            ->with('success', 'User updated successfully.');
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(User $user): RedirectResponse
    {
        $user->delete();

        return redirect()->route('users.index')
            ->with('success', 'User deleted successfully.');
    }
}
