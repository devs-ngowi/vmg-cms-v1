<?php
namespace App\Multitenancy;

use Illuminate\Http\Request;
use Spatie\Multitenancy\Contracts\IsTenant;
use Spatie\Multitenancy\TenantFinder\TenantFinder;
use App\Models\Company;

class DomainTenantFinder extends TenantFinder
{
    public function findForRequest(Request $request): ?IsTenant
{
    $host = $request->getHost(); // returns: test.localhost

    return Company::where('status', 'active')
        ->get()
        ->first(function ($company) use ($host) {
            // Strip protocol and port from stored domain
            $stored = parse_url($company->domain, PHP_URL_HOST)
                      ?? $company->domain;
            return $stored === $host;
        });
}
}
