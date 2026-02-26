<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        $request->validate([
            'email'    => ['required', 'email'],
            'password' => ['required', 'string'],
            'remember' => ['sometimes', 'boolean'],
        ]);

        $credentials = $request->only('email', 'password');
        $remember    = $request->boolean('remember');

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

        // ── API Response (no session) ────────────────────────────────────────
        if ($request->expectsJson()) {
            $token = $user->createToken('api-token')->plainTextToken;

            return response()->json([
                'success' => true,
                'message' => 'Welcome back, ' . $user->full_name . '!',
                'data'    => [
                    'user'  => $user,
                    'token' => $token,
                ],
            ], 200);
        }

        if ($request->hasSession()) {
        $request->session()->regenerate();
}

        if ($request->expectsJson()) {
        return response()->json(['message' => 'Logged in'], 200);
        }

        return redirect()->intended(route('dashboard'))
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

        return redirect()->route('login')
            ->with('status', 'Registration successful! Please log in, ' . $user->full_name . '.');
    }

    public function logout(Request $request)
    {
        if ($request->expectsJson()) {
            /** @var \App\Models\User $user */
            $user = Auth::user();
            $user->currentAccessToken()->delete();

            return response()->json([
                'success' => true,
                'message' => 'You have been logged out successfully.',
            ], 200);
        }

        // ── Web Response (session required) ─────────────────────────────────
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login')
            ->with('status', 'You have been logged out successfully.');
    }
}
