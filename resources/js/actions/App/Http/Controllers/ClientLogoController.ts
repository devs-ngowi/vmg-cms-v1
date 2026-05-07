import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/api/v1/client-logos'
*/
const index313f3c79f121bc6a2d94009a86d2d41d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index313f3c79f121bc6a2d94009a86d2d41d.url(options),
    method: 'get',
})

index313f3c79f121bc6a2d94009a86d2d41d.definition = {
    methods: ["get","head"],
    url: '/api/v1/client-logos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/api/v1/client-logos'
*/
index313f3c79f121bc6a2d94009a86d2d41d.url = (options?: RouteQueryOptions) => {




    return index313f3c79f121bc6a2d94009a86d2d41d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/api/v1/client-logos'
*/
index313f3c79f121bc6a2d94009a86d2d41d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index313f3c79f121bc6a2d94009a86d2d41d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/api/v1/client-logos'
*/
index313f3c79f121bc6a2d94009a86d2d41d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index313f3c79f121bc6a2d94009a86d2d41d.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/api/v1/client-logos'
*/
const index313f3c79f121bc6a2d94009a86d2d41dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index313f3c79f121bc6a2d94009a86d2d41d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/api/v1/client-logos'
*/
index313f3c79f121bc6a2d94009a86d2d41dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index313f3c79f121bc6a2d94009a86d2d41d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/api/v1/client-logos'
*/
index313f3c79f121bc6a2d94009a86d2d41dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index313f3c79f121bc6a2d94009a86d2d41d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index313f3c79f121bc6a2d94009a86d2d41d.form = index313f3c79f121bc6a2d94009a86d2d41dForm
/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/client-logos'
*/
const index3da54a50374e5943277716f8ccded4fb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index3da54a50374e5943277716f8ccded4fb.url(options),
    method: 'get',
})

index3da54a50374e5943277716f8ccded4fb.definition = {
    methods: ["get","head"],
    url: '/client-logos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/client-logos'
*/
index3da54a50374e5943277716f8ccded4fb.url = (options?: RouteQueryOptions) => {




    return index3da54a50374e5943277716f8ccded4fb.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/client-logos'
*/
index3da54a50374e5943277716f8ccded4fb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index3da54a50374e5943277716f8ccded4fb.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/client-logos'
*/
index3da54a50374e5943277716f8ccded4fb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index3da54a50374e5943277716f8ccded4fb.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/client-logos'
*/
const index3da54a50374e5943277716f8ccded4fbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index3da54a50374e5943277716f8ccded4fb.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/client-logos'
*/
index3da54a50374e5943277716f8ccded4fbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index3da54a50374e5943277716f8ccded4fb.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ClientLogoController::index
* @see app/Http/Controllers/ClientLogoController.php:67
* @route '/client-logos'
*/
index3da54a50374e5943277716f8ccded4fbForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index3da54a50374e5943277716f8ccded4fb.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index3da54a50374e5943277716f8ccded4fb.form = index3da54a50374e5943277716f8ccded4fbForm

export const index = {
    '/api/v1/client-logos': index313f3c79f121bc6a2d94009a86d2d41d,
    '/client-logos': index3da54a50374e5943277716f8ccded4fb,
}


/**
* @see \App\Http\Controllers\ClientLogoController::store
* @see app/Http/Controllers/ClientLogoController.php:90
* @route '/api/v1/client-logos'
*/
const store313f3c79f121bc6a2d94009a86d2d41d = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store313f3c79f121bc6a2d94009a86d2d41d.url(options),
    method: 'post',
})

store313f3c79f121bc6a2d94009a86d2d41d.definition = {
    methods: ["post"],
    url: '/api/v1/client-logos',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ClientLogoController::store
* @see app/Http/Controllers/ClientLogoController.php:90
* @route '/api/v1/client-logos'
*/
store313f3c79f121bc6a2d94009a86d2d41d.url = (options?: RouteQueryOptions) => {




    return store313f3c79f121bc6a2d94009a86d2d41d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientLogoController::store
* @see app/Http/Controllers/ClientLogoController.php:90
* @route '/api/v1/client-logos'
*/
store313f3c79f121bc6a2d94009a86d2d41d.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store313f3c79f121bc6a2d94009a86d2d41d.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientLogoController::store
* @see app/Http/Controllers/ClientLogoController.php:90
* @route '/api/v1/client-logos'
*/
const store313f3c79f121bc6a2d94009a86d2d41dForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store313f3c79f121bc6a2d94009a86d2d41d.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientLogoController::store
* @see app/Http/Controllers/ClientLogoController.php:90
* @route '/api/v1/client-logos'
*/
store313f3c79f121bc6a2d94009a86d2d41dForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store313f3c79f121bc6a2d94009a86d2d41d.url(options),
    method: 'post',
})

store313f3c79f121bc6a2d94009a86d2d41d.form = store313f3c79f121bc6a2d94009a86d2d41dForm
/**
* @see \App\Http\Controllers\ClientLogoController::store
* @see app/Http/Controllers/ClientLogoController.php:90
* @route '/client-logos'
*/
const store3da54a50374e5943277716f8ccded4fb = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store3da54a50374e5943277716f8ccded4fb.url(options),
    method: 'post',
})

store3da54a50374e5943277716f8ccded4fb.definition = {
    methods: ["post"],
    url: '/client-logos',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ClientLogoController::store
* @see app/Http/Controllers/ClientLogoController.php:90
* @route '/client-logos'
*/
store3da54a50374e5943277716f8ccded4fb.url = (options?: RouteQueryOptions) => {




    return store3da54a50374e5943277716f8ccded4fb.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientLogoController::store
* @see app/Http/Controllers/ClientLogoController.php:90
* @route '/client-logos'
*/
store3da54a50374e5943277716f8ccded4fb.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store3da54a50374e5943277716f8ccded4fb.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientLogoController::store
* @see app/Http/Controllers/ClientLogoController.php:90
* @route '/client-logos'
*/
const store3da54a50374e5943277716f8ccded4fbForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store3da54a50374e5943277716f8ccded4fb.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientLogoController::store
* @see app/Http/Controllers/ClientLogoController.php:90
* @route '/client-logos'
*/
store3da54a50374e5943277716f8ccded4fbForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store3da54a50374e5943277716f8ccded4fb.url(options),
    method: 'post',
})

store3da54a50374e5943277716f8ccded4fb.form = store3da54a50374e5943277716f8ccded4fbForm

export const store = {
    '/api/v1/client-logos': store313f3c79f121bc6a2d94009a86d2d41d,
    '/client-logos': store3da54a50374e5943277716f8ccded4fb,
}


/**
* @see \App\Http\Controllers\ClientLogoController::update
* @see app/Http/Controllers/ClientLogoController.php:113
* @route '/api/v1/client-logos/{clientLogo}'
*/
const updatea74895d377fe8878b7cecec8de1f8250 = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatea74895d377fe8878b7cecec8de1f8250.url(args, options),
    method: 'put',
})

updatea74895d377fe8878b7cecec8de1f8250.definition = {
    methods: ["put"],
    url: '/api/v1/client-logos/{clientLogo}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ClientLogoController::update
* @see app/Http/Controllers/ClientLogoController.php:113
* @route '/api/v1/client-logos/{clientLogo}'
*/
updatea74895d377fe8878b7cecec8de1f8250.url = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return updatea74895d377fe8878b7cecec8de1f8250.definition.url
            .replace('{clientLogo}', parsedArgs.clientLogo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientLogoController::update
* @see app/Http/Controllers/ClientLogoController.php:113
* @route '/api/v1/client-logos/{clientLogo}'
*/
updatea74895d377fe8878b7cecec8de1f8250.put = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatea74895d377fe8878b7cecec8de1f8250.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ClientLogoController::update
* @see app/Http/Controllers/ClientLogoController.php:113
* @route '/api/v1/client-logos/{clientLogo}'
*/
const updatea74895d377fe8878b7cecec8de1f8250Form = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatea74895d377fe8878b7cecec8de1f8250.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientLogoController::update
* @see app/Http/Controllers/ClientLogoController.php:113
* @route '/api/v1/client-logos/{clientLogo}'
*/
updatea74895d377fe8878b7cecec8de1f8250Form.put = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatea74895d377fe8878b7cecec8de1f8250.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatea74895d377fe8878b7cecec8de1f8250.form = updatea74895d377fe8878b7cecec8de1f8250Form
/**
* @see \App\Http\Controllers\ClientLogoController::update
* @see app/Http/Controllers/ClientLogoController.php:113
* @route '/client-logos/{clientLogo}'
*/
const update304d9e9143a442329e88a926de7fe4cf = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update304d9e9143a442329e88a926de7fe4cf.url(args, options),
    method: 'patch',
})

update304d9e9143a442329e88a926de7fe4cf.definition = {
    methods: ["patch"],
    url: '/client-logos/{clientLogo}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\ClientLogoController::update
* @see app/Http/Controllers/ClientLogoController.php:113
* @route '/client-logos/{clientLogo}'
*/
update304d9e9143a442329e88a926de7fe4cf.url = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return update304d9e9143a442329e88a926de7fe4cf.definition.url
            .replace('{clientLogo}', parsedArgs.clientLogo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientLogoController::update
* @see app/Http/Controllers/ClientLogoController.php:113
* @route '/client-logos/{clientLogo}'
*/
update304d9e9143a442329e88a926de7fe4cf.patch = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update304d9e9143a442329e88a926de7fe4cf.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\ClientLogoController::update
* @see app/Http/Controllers/ClientLogoController.php:113
* @route '/client-logos/{clientLogo}'
*/
const update304d9e9143a442329e88a926de7fe4cfForm = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update304d9e9143a442329e88a926de7fe4cf.url(args, {
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
update304d9e9143a442329e88a926de7fe4cfForm.patch = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update304d9e9143a442329e88a926de7fe4cf.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update304d9e9143a442329e88a926de7fe4cf.form = update304d9e9143a442329e88a926de7fe4cfForm

export const update = {
    '/api/v1/client-logos/{clientLogo}': updatea74895d377fe8878b7cecec8de1f8250,
    '/client-logos/{clientLogo}': update304d9e9143a442329e88a926de7fe4cf,
}


/**
* @see \App\Http\Controllers\ClientLogoController::destroy
* @see app/Http/Controllers/ClientLogoController.php:172
* @route '/api/v1/client-logos/{clientLogo}'
*/
const destroya74895d377fe8878b7cecec8de1f8250 = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroya74895d377fe8878b7cecec8de1f8250.url(args, options),
    method: 'delete',
})

destroya74895d377fe8878b7cecec8de1f8250.definition = {
    methods: ["delete"],
    url: '/api/v1/client-logos/{clientLogo}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ClientLogoController::destroy
* @see app/Http/Controllers/ClientLogoController.php:172
* @route '/api/v1/client-logos/{clientLogo}'
*/
destroya74895d377fe8878b7cecec8de1f8250.url = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return destroya74895d377fe8878b7cecec8de1f8250.definition.url
            .replace('{clientLogo}', parsedArgs.clientLogo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientLogoController::destroy
* @see app/Http/Controllers/ClientLogoController.php:172
* @route '/api/v1/client-logos/{clientLogo}'
*/
destroya74895d377fe8878b7cecec8de1f8250.delete = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroya74895d377fe8878b7cecec8de1f8250.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ClientLogoController::destroy
* @see app/Http/Controllers/ClientLogoController.php:172
* @route '/api/v1/client-logos/{clientLogo}'
*/
const destroya74895d377fe8878b7cecec8de1f8250Form = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroya74895d377fe8878b7cecec8de1f8250.url(args, {
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
* @route '/api/v1/client-logos/{clientLogo}'
*/
destroya74895d377fe8878b7cecec8de1f8250Form.delete = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroya74895d377fe8878b7cecec8de1f8250.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroya74895d377fe8878b7cecec8de1f8250.form = destroya74895d377fe8878b7cecec8de1f8250Form
/**
* @see \App\Http\Controllers\ClientLogoController::destroy
* @see app/Http/Controllers/ClientLogoController.php:172
* @route '/client-logos/{clientLogo}'
*/
const destroy304d9e9143a442329e88a926de7fe4cf = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy304d9e9143a442329e88a926de7fe4cf.url(args, options),
    method: 'delete',
})

destroy304d9e9143a442329e88a926de7fe4cf.definition = {
    methods: ["delete"],
    url: '/client-logos/{clientLogo}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ClientLogoController::destroy
* @see app/Http/Controllers/ClientLogoController.php:172
* @route '/client-logos/{clientLogo}'
*/
destroy304d9e9143a442329e88a926de7fe4cf.url = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return destroy304d9e9143a442329e88a926de7fe4cf.definition.url
            .replace('{clientLogo}', parsedArgs.clientLogo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientLogoController::destroy
* @see app/Http/Controllers/ClientLogoController.php:172
* @route '/client-logos/{clientLogo}'
*/
destroy304d9e9143a442329e88a926de7fe4cf.delete = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy304d9e9143a442329e88a926de7fe4cf.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ClientLogoController::destroy
* @see app/Http/Controllers/ClientLogoController.php:172
* @route '/client-logos/{clientLogo}'
*/
const destroy304d9e9143a442329e88a926de7fe4cfForm = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy304d9e9143a442329e88a926de7fe4cf.url(args, {
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
destroy304d9e9143a442329e88a926de7fe4cfForm.delete = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy304d9e9143a442329e88a926de7fe4cf.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy304d9e9143a442329e88a926de7fe4cf.form = destroy304d9e9143a442329e88a926de7fe4cfForm

export const destroy = {
    '/api/v1/client-logos/{clientLogo}': destroya74895d377fe8878b7cecec8de1f8250,
    '/client-logos/{clientLogo}': destroy304d9e9143a442329e88a926de7fe4cf,
}


/**
* @see \App\Http\Controllers\ClientLogoController::toggle
* @see app/Http/Controllers/ClientLogoController.php:132
* @route '/api/v1/client-logos/{clientLogo}/toggle'
*/
const togglea3b354c0a8de6e1f5968c6a6625b6b95 = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: togglea3b354c0a8de6e1f5968c6a6625b6b95.url(args, options),
    method: 'patch',
})

togglea3b354c0a8de6e1f5968c6a6625b6b95.definition = {
    methods: ["patch"],
    url: '/api/v1/client-logos/{clientLogo}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\ClientLogoController::toggle
* @see app/Http/Controllers/ClientLogoController.php:132
* @route '/api/v1/client-logos/{clientLogo}/toggle'
*/
togglea3b354c0a8de6e1f5968c6a6625b6b95.url = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return togglea3b354c0a8de6e1f5968c6a6625b6b95.definition.url
            .replace('{clientLogo}', parsedArgs.clientLogo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientLogoController::toggle
* @see app/Http/Controllers/ClientLogoController.php:132
* @route '/api/v1/client-logos/{clientLogo}/toggle'
*/
togglea3b354c0a8de6e1f5968c6a6625b6b95.patch = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: togglea3b354c0a8de6e1f5968c6a6625b6b95.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\ClientLogoController::toggle
* @see app/Http/Controllers/ClientLogoController.php:132
* @route '/api/v1/client-logos/{clientLogo}/toggle'
*/
const togglea3b354c0a8de6e1f5968c6a6625b6b95Form = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: togglea3b354c0a8de6e1f5968c6a6625b6b95.url(args, {
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
* @route '/api/v1/client-logos/{clientLogo}/toggle'
*/
togglea3b354c0a8de6e1f5968c6a6625b6b95Form.patch = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: togglea3b354c0a8de6e1f5968c6a6625b6b95.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

togglea3b354c0a8de6e1f5968c6a6625b6b95.form = togglea3b354c0a8de6e1f5968c6a6625b6b95Form
/**
* @see \App\Http\Controllers\ClientLogoController::toggle
* @see app/Http/Controllers/ClientLogoController.php:132
* @route '/client-logos/{clientLogo}/toggle'
*/
const toggle21281aa0a9cee3590d02b744b6fdef49 = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle21281aa0a9cee3590d02b744b6fdef49.url(args, options),
    method: 'patch',
})

toggle21281aa0a9cee3590d02b744b6fdef49.definition = {
    methods: ["patch"],
    url: '/client-logos/{clientLogo}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\ClientLogoController::toggle
* @see app/Http/Controllers/ClientLogoController.php:132
* @route '/client-logos/{clientLogo}/toggle'
*/
toggle21281aa0a9cee3590d02b744b6fdef49.url = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return toggle21281aa0a9cee3590d02b744b6fdef49.definition.url
            .replace('{clientLogo}', parsedArgs.clientLogo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientLogoController::toggle
* @see app/Http/Controllers/ClientLogoController.php:132
* @route '/client-logos/{clientLogo}/toggle'
*/
toggle21281aa0a9cee3590d02b744b6fdef49.patch = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle21281aa0a9cee3590d02b744b6fdef49.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\ClientLogoController::toggle
* @see app/Http/Controllers/ClientLogoController.php:132
* @route '/client-logos/{clientLogo}/toggle'
*/
const toggle21281aa0a9cee3590d02b744b6fdef49Form = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle21281aa0a9cee3590d02b744b6fdef49.url(args, {
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
toggle21281aa0a9cee3590d02b744b6fdef49Form.patch = (args: { clientLogo: string | number | { id: string | number } } | [clientLogo: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle21281aa0a9cee3590d02b744b6fdef49.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggle21281aa0a9cee3590d02b744b6fdef49.form = toggle21281aa0a9cee3590d02b744b6fdef49Form

export const toggle = {
    '/api/v1/client-logos/{clientLogo}/toggle': togglea3b354c0a8de6e1f5968c6a6625b6b95,
    '/client-logos/{clientLogo}/toggle': toggle21281aa0a9cee3590d02b744b6fdef49,
}


/**
* @see \App\Http\Controllers\ClientLogoController::reorder
* @see app/Http/Controllers/ClientLogoController.php:149
* @route '/api/v1/client-logos/reorder'
*/
const reorder402da3abe85f43a599aaba0f459a9728 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder402da3abe85f43a599aaba0f459a9728.url(options),
    method: 'post',
})

reorder402da3abe85f43a599aaba0f459a9728.definition = {
    methods: ["post"],
    url: '/api/v1/client-logos/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ClientLogoController::reorder
* @see app/Http/Controllers/ClientLogoController.php:149
* @route '/api/v1/client-logos/reorder'
*/
reorder402da3abe85f43a599aaba0f459a9728.url = (options?: RouteQueryOptions) => {




    return reorder402da3abe85f43a599aaba0f459a9728.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientLogoController::reorder
* @see app/Http/Controllers/ClientLogoController.php:149
* @route '/api/v1/client-logos/reorder'
*/
reorder402da3abe85f43a599aaba0f459a9728.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder402da3abe85f43a599aaba0f459a9728.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientLogoController::reorder
* @see app/Http/Controllers/ClientLogoController.php:149
* @route '/api/v1/client-logos/reorder'
*/
const reorder402da3abe85f43a599aaba0f459a9728Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder402da3abe85f43a599aaba0f459a9728.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientLogoController::reorder
* @see app/Http/Controllers/ClientLogoController.php:149
* @route '/api/v1/client-logos/reorder'
*/
reorder402da3abe85f43a599aaba0f459a9728Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder402da3abe85f43a599aaba0f459a9728.url(options),
    method: 'post',
})

reorder402da3abe85f43a599aaba0f459a9728.form = reorder402da3abe85f43a599aaba0f459a9728Form
/**
* @see \App\Http\Controllers\ClientLogoController::reorder
* @see app/Http/Controllers/ClientLogoController.php:149
* @route '/client-logos/reorder'
*/
const reorder6a02582c5cd281d84fa8bd28e19d16f7 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder6a02582c5cd281d84fa8bd28e19d16f7.url(options),
    method: 'post',
})

reorder6a02582c5cd281d84fa8bd28e19d16f7.definition = {
    methods: ["post"],
    url: '/client-logos/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ClientLogoController::reorder
* @see app/Http/Controllers/ClientLogoController.php:149
* @route '/client-logos/reorder'
*/
reorder6a02582c5cd281d84fa8bd28e19d16f7.url = (options?: RouteQueryOptions) => {




    return reorder6a02582c5cd281d84fa8bd28e19d16f7.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClientLogoController::reorder
* @see app/Http/Controllers/ClientLogoController.php:149
* @route '/client-logos/reorder'
*/
reorder6a02582c5cd281d84fa8bd28e19d16f7.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder6a02582c5cd281d84fa8bd28e19d16f7.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientLogoController::reorder
* @see app/Http/Controllers/ClientLogoController.php:149
* @route '/client-logos/reorder'
*/
const reorder6a02582c5cd281d84fa8bd28e19d16f7Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder6a02582c5cd281d84fa8bd28e19d16f7.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ClientLogoController::reorder
* @see app/Http/Controllers/ClientLogoController.php:149
* @route '/client-logos/reorder'
*/
reorder6a02582c5cd281d84fa8bd28e19d16f7Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder6a02582c5cd281d84fa8bd28e19d16f7.url(options),
    method: 'post',
})

reorder6a02582c5cd281d84fa8bd28e19d16f7.form = reorder6a02582c5cd281d84fa8bd28e19d16f7Form

export const reorder = {
    '/api/v1/client-logos/reorder': reorder402da3abe85f43a599aaba0f459a9728,
    '/client-logos/reorder': reorder6a02582c5cd281d84fa8bd28e19d16f7,
}


const ClientLogoController = { index, store, update, destroy, toggle, reorder }

export default ClientLogoController