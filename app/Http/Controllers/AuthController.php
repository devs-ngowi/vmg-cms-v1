<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function showLogin()
    {
        return Inertia::render('auth/login');
    }

    public function login(Request $request)
    {
        // ── 1. Resolve tenant ─────────────────────────────────────────────
        $tenant = app(\App\Multitenancy\DomainTenantFinder::class)->findForRequest($request);

        if (! $tenant) {
            if ($request->expectsJson()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Tenant could not be identified for this domain.',
                    'errors'  => ['email' => 'Tenant could not be identified for this domain.'],
                ], 422);
            }

            return back()
                ->withErrors(['email' => 'Tenant could not be identified for this domain.'])
                ->onlyInput('email');
        }

        $tenant->makeCurrent();

        // ── 2. Validate input ─────────────────────────────────────────────
        $request->validate([
            'email'    => ['required', 'email'],
            'password' => ['required', 'string'],
            'remember' => ['sometimes', 'boolean'],
        ]);

        $credentials = $request->only('email', 'password');
        $remember    = $request->boolean('remember');

        // ── 3. Attempt authentication ─────────────────────────────────────
        if (! Auth::attempt($credentials, $remember)) {
            if ($request->expectsJson()) {
                return response()->json([
                    'success' => false,
                    'message' => 'These credentials do not match our records.',
                    'errors'  => ['email' => 'These credentials do not match our records.'],
                ], 401);
            }

            return back()
                ->withErrors(['email' => 'These credentials do not match our records.'])
                ->onlyInput('email');
        }

        /** @var \App\Models\User $user */
        $user = Auth::user();
        $user->update(['last_login' => now()]);

        // ── 4. Build company payload (always from resolved tenant) ────────
        $companyPayload = [
            'id'       => $tenant->id,
            'name'     => $tenant->name     ?? '',
            'slug'     => $tenant->slug     ?? '',
            'domain'   => $tenant->domain   ?? '',
            'database' => $tenant->database ?? '',
            'logo'     => $tenant->logo     ?? null,
            'plan'     => $tenant->plan     ?? null,
            'status'   => $tenant->status   ?? null,
        ];

        // ── 5. Persist to session + cookie (web & JSON share same session) ─
        if ($request->hasSession()) {
            $request->session()->regenerate();
            $request->session()->put('company', $companyPayload);
        }

        Cookie::queue(
            'tenant_company',
            json_encode($companyPayload),
            60 * 24 * 7,    // 7 days
            '/',
            null,
            false,           // secure: set true in production (HTTPS)
            false            // httpOnly: false so JS can read it
        );

        // ── 6. JSON response ──────────────────────────────────────────────
        if ($request->expectsJson()) {
            $user->tokens()->delete();
            $token = $user->createToken('web-session')->plainTextToken;

            return response()->json([
                'success' => true,
                'message' => 'Welcome back, ' . $user->full_name . '!',
                'data'    => [
                    'user' => [
                        'id'        => $user->id,
                        'full_name' => $user->full_name,
                        'username'  => $user->username,
                        'email'     => $user->email,
                        'role_id'   => $user->role_id,
                        'status'    => $user->status,
                    ],
                    'company'  => $companyPayload,
                    'token'    => $token,
                    'redirect' => route('dashboard'),
                ],
            ], 200);
        }

        // ── 7. Inertia / Browser redirect ─────────────────────────────────
        return redirect()->route('dashboard', [], 303)
            ->with('status', 'Welcome back, ' . $user->full_name . '!');
    }

    public function showRegister()
    {
        return Inertia::render('auth/register');
    }

    public function register(Request $request)
    {
        $validated = $request->validate([
            'username'  => ['required', 'string', 'max:255', 'unique:users,username'],
            'full_name' => ['required', 'string', 'max:255'],
            'email'     => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password'  => ['required', 'confirmed', Password::defaults()],
        ]);

        $user = User::create([
            'username'  => $validated['username'],
            'full_name' => $validated['full_name'],
            'email'     => $validated['email'],
            'password'  => $validated['password'],
            'role_id'   => 2,
            'status'    => 'active',
        ]);

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Registration successful! Please log in, ' . $user->full_name . '.',
                'data'    => [
                    'user'     => $user,
                    'redirect' => route('login'),
                ],
            ], 201);
        }

        return redirect()->route('login', [], 303)
            ->with('status', 'Registration successful! Please log in, ' . $user->full_name . '.');
    }

    public function logout(Request $request)
    {
        /** @var \App\Models\User|null $user */
        $user = Auth::user();

        // ── 1. Revoke all Sanctum tokens ──────────────────────────────────
        if ($user) {
            $user->tokens()->delete();
        }

        // ── 2. Log out of web session ─────────────────────────────────────
        Auth::logout();

        // ── 3. Destroy session & forget company ───────────────────────────
        if ($request->hasSession()) {
            $request->session()->forget('company');
            $request->session()->invalidate();
            $request->session()->regenerateToken();
        }

        // ── 4. Clear tenant cookie ────────────────────────────────────────
        Cookie::queue(Cookie::forget('tenant_company'));

        // ── 5. Response ───────────────────────────────────────────────────
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'You have been logged out successfully.',
            ], 200);
        }

        return redirect()->route('login', [], 303)
            ->with('status', 'You have been logged out successfully.');
    }
}
