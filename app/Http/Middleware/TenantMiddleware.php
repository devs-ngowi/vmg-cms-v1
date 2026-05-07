<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Company;
use Symfony\Component\HttpFoundation\Response;

class TenantMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        $tenant = Company::findByDomain($request->getHost());

        if (! $tenant) {
            abort(404, 'Tenant not found for this domain.');
        }

        if ($tenant->status !== 'active') {
            abort(403, 'This account is suspended.');
        }

        $tenant->makeCurrent();   // Spatie switches DB connection here

        return $next($request);
    }
}
