<?php

use App\Models\Company;
use App\Multitenancy\DomainTenantFinder;
use Spatie\Multitenancy\Tasks\SwitchTenantDatabaseTask;

return [
    'tenant_model' => Company::class,

    'current_tenant_container_key' => 'currentTenant',

    'tenant_finder' => DomainTenantFinder::class,

    'tenant_database_connection_name' => 'tenant',

    'landlord_database_connection_name' => 'landlord',

    'tenant_artisan_search_fields' => [
        'domain',
        'slug',
    ],

    'switch_tenant_tasks' => [
        SwitchTenantDatabaseTask::class,
    ],

    'queues_are_tenant_aware' => true,

    'cache' => [
        'tag' => 'tenant',
    ],

    'migrations_paths' => [
        database_path('migrations/tenant'),
    ],
];
