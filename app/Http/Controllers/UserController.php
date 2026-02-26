<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class UserController extends Controller
{
    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(Request $request)
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

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Users retrieved successfully.',
                'data'    => $users,
            ], 200);
        }

        return Inertia::render('users/index', [
            'users' => $users,
        ]);
    }

    // ── Create (Web only — form page) ─────────────────────────────────────────

    public function create()
    {
        return Inertia::render('users/create', [
            'roles' => Role::orderBy('name')->get(['id', 'name']),
        ]);
    }

    // ── Store ─────────────────────────────────────────────────────────────────

    public function store(Request $request)
    {
        $data = $request->validate([
            'username'  => ['required', 'string', 'max:100', 'unique:users,username'],
            'full_name' => ['required', 'string', 'max:191'],
            'email'     => ['required', 'email', 'max:191', 'unique:users,email'],
            'password'  => ['required', 'confirmed', Password::defaults()],
            'role_id'   => ['required', 'exists:roles,id'],
            'status'    => ['required', Rule::in(['active', 'inactive', 'pending'])],
        ]);

        $user = User::create([
            ...$data,
            'password' => Hash::make($data['password']),
        ]);

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'User created successfully.',
                'data'    => $user->load('role'),
            ], 201);
        }

        return redirect()->route('users.index')
            ->with('success', 'User created successfully.');
    }

    // ── Show (API only) ───────────────────────────────────────────────────────

    public function show(User $user)
    {
        return response()->json([
            'success' => true,
            'message' => 'User retrieved successfully.',
            'data'    => $user->load('role'),
        ], 200);
    }

    // ── Edit (Web only — form page) ───────────────────────────────────────────

    public function edit(User $user)
    {
        return Inertia::render('users/edit', [
            'user' => [
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

    public function update(Request $request, User $user)
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

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'User updated successfully.',
                'data'    => $user->fresh('role'),
            ], 200);
        }

        return redirect()->route('users.index')
            ->with('success', 'User updated successfully.');
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(Request $request, User $user)
    {
        $user->delete();

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'User deleted successfully.',
                'data'    => null,
            ], 200);
        }

        return redirect()->route('users.index')
            ->with('success', 'User deleted successfully.');
    }
}
