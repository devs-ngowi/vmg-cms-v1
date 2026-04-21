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
    $host = $request->getHost(); 

    return Company::where('domain', $host)
        ->where('status', 'active')
        ->first();
}
}
