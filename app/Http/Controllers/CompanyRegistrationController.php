<?php
namespace App\Http\Controllers;

use App\Actions\CreateTenant;
use Illuminate\Http\Request;
use Illuminate\Support\Str;          // ← add this
use Illuminate\Validation\Rule;
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
                // Validate the derived slug so the error surfaces early & cleanly
                function (string $attribute, mixed $value, \Closure $fail) {
                    $slug = Str::slug($value);
                    if (\App\Models\Company::where('slug', $slug)->exists()) {
                        $fail('A company with this name (or a very similar one) is already registered.');
                    }
                },
            ],
            'domain'           => ['required', 'string', 'max:255', 'unique:companies,domain'],
            'plan'             => ['nullable', 'string', 'max:50'],
            'admin_full_name'  => ['required', 'string', 'max:255'],
            'admin_username'   => ['required', 'string', 'max:255'],
            'admin_email'      => ['required', 'email', 'max:255'],
            'admin_password'   => ['required', 'string', 'min:8', 'confirmed'],
            'company_logo'     => ['nullable', 'string', 'max:255'],
            'company_settings' => ['nullable', 'array'],
        ]);

        $company = $createTenant->execute([
            'name'     => $data['company_name'],
            'domain'   => $data['domain'],
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

        return redirect('/login')
            ->with('status', 'Company registered successfully. You can now log in.');
    }
}
