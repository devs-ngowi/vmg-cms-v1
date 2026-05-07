<?php
// app/Http/Controllers/WelcomeController.php

namespace App\Http\Controllers;

use App\Models\Company;
use Inertia\Inertia;

class WelcomeController extends Controller
{
   public function index()
{
    $companies = Company::query()
        ->where('status', 'active')
        ->orderBy('name')
        ->get(['id', 'name', 'slug', 'domain', 'logo', 'plan', 'status']);

    return Inertia::render('welcome', [
        'companies' => $companies,
        'appName'   => config('app.name', 'CMS Platform'),
        // pass the flash so the React page can show a success toast
        'flash'     => ['success' => session('success')],
    ]);
}
}