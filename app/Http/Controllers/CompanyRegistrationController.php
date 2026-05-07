<?php

namespace App\Http\Controllers;

use App\Actions\CreateTenant;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CompanyRegistrationController extends Controller
{
    public function create()
    {
        return Inertia::render('auth/register-company');
    }

    public function store(Request $request, CreateTenant $createTenant)
    {
        $data = $request->validate([
            'company_name' => [
                'required',
                'string',
                'max:255',
                function (string $attribute, mixed $value, \Closure $fail) {
                    if (\App\Models\Company::where('slug', Str::slug($value))->exists()) {
                        $fail('A company with this name (or a very similar one) is already registered.');
                    }
                },
            ],
            'domain' => [
                'required',
                'string',
                'max:255',
                function (string $attribute, mixed $value, \Closure $fail) {
                    $normalised = self::normaliseDomain($value);

                    if (empty($normalised)) {
                        $fail('The domain field is invalid.');
                        return;
                    }

                    if (\App\Models\Company::where('domain', $normalised)->exists()) {
                        $fail('This domain is already registered.');
                    }
                },
            ],
            'plan'             => ['nullable', 'string', 'max:50'],
            'admin_full_name'  => ['required', 'string', 'max:255'],
            'admin_username'   => ['required', 'string', 'max:255'],
            'admin_email'      => ['required', 'email', 'max:255'],
            'admin_password'   => ['required', 'string', 'min:8', 'confirmed'],
            'company_logo'     => ['nullable', 'string', 'max:255'],
            'company_settings' => ['nullable', 'array'],
        ]);

        // Normalise once here; CreateTenant receives a clean, consistent value
        $data['domain'] = self::normaliseDomain($data['domain']);

        $company = $createTenant->execute([
            'name'     => $data['company_name'],
            'domain'   => $data['domain'],          // e.g. "https://winstlaw.cms.tick.co.tz"
            'plan'     => $data['plan'] ?? 'basic',
            'logo'     => $data['company_logo'] ?? null,
            'settings' => $data['company_settings'] ?? [],
            'admin'    => [
                'full_name' => $data['admin_full_name'],
                'username'  => $data['admin_username'],
                'email'     => $data['admin_email'],
                'password'  => $data['admin_password'],
            ],
        ]);

        return redirect('/')
            ->with('status', "Company \"{$company->name}\" registered successfully.");
    }

    /**
     * Normalise whatever the user typed into a consistent stored form.
     *
     *   "winstlaw.cms.tick.co.tz"           → "https://winstlaw.cms.tick.co.tz"
     *   "https://winstlaw.cms.tick.co.tz/"  → "https://winstlaw.cms.tick.co.tz"
     *   "http://winstlaw.cms.tick.co.tz"    → "http://winstlaw.cms.tick.co.tz"
     *   "localhost"                         → "http://localhost"
     *   "localhost:8000"                    → "http://localhost:8000"
     */
    private static function normaliseDomain(string $value): string
    {
        $value = rtrim(trim($value), '/');

        if (str_starts_with($value, 'http://') || str_starts_with($value, 'https://')) {
            return $value;
        }

        $isLocal = str_starts_with($value, 'localhost') || str_starts_with($value, '127.');

        return ($isLocal ? 'http' : 'https') . '://' . $value;
    }
}