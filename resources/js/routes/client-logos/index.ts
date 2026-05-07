import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/client-logos'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/client-logos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/client-logos'
*/
index.url = (options?: RouteQueryOptions) => {




    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/client-logos'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/client-logos'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/client-logos'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/client-logos'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/client-logos'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\ClientLogoController::store
* @see app/Http/Controllers/ClientLogoController.php:90
* @route '/client-logos'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/client-logos',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ClientLogoController::store
* @see app/Http/Controllers/ClientLogoController.php:90
* @route '/client-logos'
*/
store.url = (options?: RouteQueryOptions) => {




    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientLogoController::store
* @see app/Http/Controllers/ClientLogoController.php:90
* @route '/client-logos'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientLogoController::store
* @see app/Http/Controllers/ClientLogoController.php:90
* @route '/client-logos'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientLogoController::store
* @see app/Http/Controllers/ClientLogoController.php:90
* @route '/client-logos'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\ClientLogoController::reorder
* @see app/Http/Controllers/ClientLogoController.php:149
* @route '/client-logos/reorder'
*/
export const reorder = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/client-logos/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ClientLogoController::reorder
* @see app/Http/Controllers/ClientLogoController.php:149
* @route '/client-logos/reorder'
*/
reorder.url = (options?: RouteQueryOptions) => {




    return reorder.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientLogoController::reorder
* @see app/Http/Controllers/ClientLogoController.php:149
* @route '/client-logos/reorder'
*/
reorder.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientLogoController::reorder
* @see app/Http/Controllers/ClientLogoController.php:149
* @route '/client-logos/reorder'
*/
const reorderForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientLogoController::reorder
* @see app/Http/Controllers/ClientLogoController.php:149
* @route '/client-logos/reorder'
*/
reorderForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(options),
    method: 'post',
})

reorder.form = reorderForm

/**
* @see \App\Http\Controllers\ClientLogoController::update
* @see app/Http/Controllers/ClientLogoController.php:113
* @route '/client-logos/{clientLogo}'
*/
export const update = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/client-logos/{clientLogo}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\ClientLogoController::update
* @see app/Http/Controllers/ClientLogoController.php:113
* @route '/client-logos/{clientLogo}'
*/
update.url = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { clientLogo: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { clientLogo: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            clientLogo: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        clientLogo: typeof args.clientLogo === 'object'
        ? args.clientLogo.id
        : args.clientLogo,
    }

    return update.definition.url
            .replace('{clientLogo}', parsedArgs.clientLogo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientLogoController::update
* @see app/Http/Controllers/ClientLogoController.php:113
* @route '/client-logos/{clientLogo}'
*/
update.patch = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\ClientLogoController::update
* @see app/Http/Controllers/ClientLogoController.php:113
* @route '/client-logos/{clientLogo}'
*/
const updateForm = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientLogoController::update
* @see app/Http/Controllers/ClientLogoController.php:113
* @route '/client-logos/{clientLogo}'
*/
updateForm.patch = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\ClientLogoController::toggle
* @see app/Http/Controllers/ClientLogoController.php:132
* @route '/client-logos/{clientLogo}/toggle'
*/
export const toggle = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle.url(args, options),
    method: 'patch',
})

toggle.definition = {
    methods: ["patch"],
    url: '/client-logos/{clientLogo}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\ClientLogoController::toggle
* @see app/Http/Controllers/ClientLogoController.php:132
* @route '/client-logos/{clientLogo}/toggle'
*/
toggle.url = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { clientLogo: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { clientLogo: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            clientLogo: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        clientLogo: typeof args.clientLogo === 'object'
        ? args.clientLogo.id
        : args.clientLogo,
    }

    return toggle.definition.url
            .replace('{clientLogo}', parsedArgs.clientLogo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientLogoController::toggle
* @see app/Http/Controllers/ClientLogoController.php:132
* @route '/client-logos/{clientLogo}/toggle'
*/
toggle.patch = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\ClientLogoController::toggle
* @see app/Http/Controllers/ClientLogoController.php:132
* @route '/client-logos/{clientLogo}/toggle'
*/
const toggleForm = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientLogoController::toggle
* @see app/Http/Controllers/ClientLogoController.php:132
* @route '/client-logos/{clientLogo}/toggle'
*/
toggleForm.patch = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggle.form = toggleForm

/**
* @see \App\Http\Controllers\ClientLogoController::destroy
* @see app/Http/Controllers/ClientLogoController.php:172
* @route '/client-logos/{clientLogo}'
*/
export const destroy = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/client-logos/{clientLogo}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ClientLogoController::destroy
* @see app/Http/Controllers/ClientLogoController.php:172
* @route '/client-logos/{clientLogo}'
*/
destroy.url = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { clientLogo: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { clientLogo: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            clientLogo: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        clientLogo: typeof args.clientLogo === 'object'
        ? args.clientLogo.id
        : args.clientLogo,
    }

    return destroy.definition.url
            .replace('{clientLogo}', parsedArgs.clientLogo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientLogoController::destroy
* @see app/Http/Controllers/ClientLogoController.php:172
* @route '/client-logos/{clientLogo}'
*/
destroy.delete = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ClientLogoController::destroy
* @see app/Http/Controllers/ClientLogoController.php:172
* @route '/client-logos/{clientLogo}'
*/
const destroyForm = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientLogoController::destroy
* @see app/Http/Controllers/ClientLogoController.php:172
* @route '/client-logos/{clientLogo}'
*/
destroyForm.delete = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm



const clientLogos = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    reorder: Object.assign(reorder, reorder),
    update: Object.assign(update, update),
    toggle: Object.assign(toggle, toggle),
    destroy: Object.assign(destroy, destroy),
}

export default clientLogos