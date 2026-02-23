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
            return back()
                ->withErrors(['email' => 'These credentials do not match our records.'])
                ->onlyInput('email');
        }

        $request->session()->regenerate();

        /** @var \App\Models\User $user */
        $user = Auth::user();
        $user->update(['last_login' => now()]);

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

        return redirect()->route('login')
            ->with('status', 'Registration successful! Please log in, ' . $user->full_name . '.');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login')
            ->with('status', 'You have been logged out successfully.');
    }
}
