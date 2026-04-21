<?php

namespace App\Http\Middleware;

use App\Multitenancy\DomainTenantFinder;
use App\Models\Company;
use Closure;
use Illuminate\Http\Request;

class InitializeTenant
{
    public function handle(Request $request, Closure $next)
    {
        $tenant = app(DomainTenantFinder::class)->findForRequest($request);

        if ($tenant) {
            $tenant->makeCurrent();
        } else {
            Company::forgetCurrent();
        }

        return $next($request);
    }
}
