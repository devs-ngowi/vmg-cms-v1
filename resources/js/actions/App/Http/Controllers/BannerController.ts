import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/api/v1/banners'
*/
const indexab66c113f866f9633c4b9798bc9067c5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexab66c113f866f9633c4b9798bc9067c5.url(options),
    method: 'get',
})

indexab66c113f866f9633c4b9798bc9067c5.definition = {
    methods: ["get","head"],
    url: '/api/v1/banners',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/api/v1/banners'
*/
indexab66c113f866f9633c4b9798bc9067c5.url = (options?: RouteQueryOptions) => {
    return indexab66c113f866f9633c4b9798bc9067c5.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/api/v1/banners'
*/
indexab66c113f866f9633c4b9798bc9067c5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexab66c113f866f9633c4b9798bc9067c5.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/api/v1/banners'
*/
indexab66c113f866f9633c4b9798bc9067c5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexab66c113f866f9633c4b9798bc9067c5.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/api/v1/banners'
*/
const indexab66c113f866f9633c4b9798bc9067c5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexab66c113f866f9633c4b9798bc9067c5.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/api/v1/banners'
*/
indexab66c113f866f9633c4b9798bc9067c5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexab66c113f866f9633c4b9798bc9067c5.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/api/v1/banners'
*/
indexab66c113f866f9633c4b9798bc9067c5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexab66c113f866f9633c4b9798bc9067c5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexab66c113f866f9633c4b9798bc9067c5.form = indexab66c113f866f9633c4b9798bc9067c5Form
/**
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/banners'
*/
const indexabd85f3d50b786005113deb987d86c23 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexabd85f3d50b786005113deb987d86c23.url(options),
    method: 'get',
})

indexabd85f3d50b786005113deb987d86c23.definition = {
    methods: ["get","head"],
    url: '/banners',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/banners'
*/
indexabd85f3d50b786005113deb987d86c23.url = (options?: RouteQueryOptions) => {
    return indexabd85f3d50b786005113deb987d86c23.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/banners'
*/
indexabd85f3d50b786005113deb987d86c23.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexabd85f3d50b786005113deb987d86c23.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/banners'
*/
indexabd85f3d50b786005113deb987d86c23.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexabd85f3d50b786005113deb987d86c23.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/banners'
*/
const indexabd85f3d50b786005113deb987d86c23Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexabd85f3d50b786005113deb987d86c23.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/banners'
*/
indexabd85f3d50b786005113deb987d86c23Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexabd85f3d50b786005113deb987d86c23.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/banners'
*/
indexabd85f3d50b786005113deb987d86c23Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexabd85f3d50b786005113deb987d86c23.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexabd85f3d50b786005113deb987d86c23.form = indexabd85f3d50b786005113deb987d86c23Form

export const index = {
    '/api/v1/banners': indexab66c113f866f9633c4b9798bc9067c5,
    '/banners': indexabd85f3d50b786005113deb987d86c23,
}

/**
* @see \App\Http\Controllers\BannerController::store
* @see app/Http/Controllers/BannerController.php:70
* @route '/api/v1/banners'
*/
const storeab66c113f866f9633c4b9798bc9067c5 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeab66c113f866f9633c4b9798bc9067c5.url(options),
    method: 'post',
})

storeab66c113f866f9633c4b9798bc9067c5.definition = {
    methods: ["post"],
    url: '/api/v1/banners',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BannerController::store
* @see app/Http/Controllers/BannerController.php:70
* @route '/api/v1/banners'
*/
storeab66c113f866f9633c4b9798bc9067c5.url = (options?: RouteQueryOptions) => {
    return storeab66c113f866f9633c4b9798bc9067c5.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::store
* @see app/Http/Controllers/BannerController.php:70
* @route '/api/v1/banners'
*/
storeab66c113f866f9633c4b9798bc9067c5.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeab66c113f866f9633c4b9798bc9067c5.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BannerController::store
* @see app/Http/Controllers/BannerController.php:70
* @route '/api/v1/banners'
*/
const storeab66c113f866f9633c4b9798bc9067c5Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeab66c113f866f9633c4b9798bc9067c5.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BannerController::store
* @see app/Http/Controllers/BannerController.php:70
* @route '/api/v1/banners'
*/
storeab66c113f866f9633c4b9798bc9067c5Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeab66c113f866f9633c4b9798bc9067c5.url(options),
    method: 'post',
})

storeab66c113f866f9633c4b9798bc9067c5.form = storeab66c113f866f9633c4b9798bc9067c5Form
/**
* @see \App\Http\Controllers\BannerController::store
* @see app/Http/Controllers/BannerController.php:70
* @route '/banners'
*/
const storeabd85f3d50b786005113deb987d86c23 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeabd85f3d50b786005113deb987d86c23.url(options),
    method: 'post',
})

storeabd85f3d50b786005113deb987d86c23.definition = {
    methods: ["post"],
    url: '/banners',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BannerController::store
* @see app/Http/Controllers/BannerController.php:70
* @route '/banners'
*/
storeabd85f3d50b786005113deb987d86c23.url = (options?: RouteQueryOptions) => {
    return storeabd85f3d50b786005113deb987d86c23.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::store
* @see app/Http/Controllers/BannerController.php:70
* @route '/banners'
*/
storeabd85f3d50b786005113deb987d86c23.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeabd85f3d50b786005113deb987d86c23.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BannerController::store
* @see app/Http/Controllers/BannerController.php:70
* @route '/banners'
*/
const storeabd85f3d50b786005113deb987d86c23Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeabd85f3d50b786005113deb987d86c23.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BannerController::store
* @see app/Http/Controllers/BannerController.php:70
* @route '/banners'
*/
storeabd85f3d50b786005113deb987d86c23Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeabd85f3d50b786005113deb987d86c23.url(options),
    method: 'post',
})

storeabd85f3d50b786005113deb987d86c23.form = storeabd85f3d50b786005113deb987d86c23Form

export const store = {
    '/api/v1/banners': storeab66c113f866f9633c4b9798bc9067c5,
    '/banners': storeabd85f3d50b786005113deb987d86c23,
}

/**
* @see \App\Http\Controllers\BannerController::update
* @see app/Http/Controllers/BannerController.php:119
* @route '/api/v1/banners/{banner}'
*/
const update839d79fbf2c2808b5756bd6ae5976b49 = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update839d79fbf2c2808b5756bd6ae5976b49.url(args, options),
    method: 'put',
})

update839d79fbf2c2808b5756bd6ae5976b49.definition = {
    methods: ["put"],
    url: '/api/v1/banners/{banner}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\BannerController::update
* @see app/Http/Controllers/BannerController.php:119
* @route '/api/v1/banners/{banner}'
*/
update839d79fbf2c2808b5756bd6ae5976b49.url = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { banner: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            banner: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner: typeof args.banner === 'object'
        ? args.banner.id
        : args.banner,
    }

    return update839d79fbf2c2808b5756bd6ae5976b49.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::update
* @see app/Http/Controllers/BannerController.php:119
* @route '/api/v1/banners/{banner}'
*/
update839d79fbf2c2808b5756bd6ae5976b49.put = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update839d79fbf2c2808b5756bd6ae5976b49.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\BannerController::update
* @see app/Http/Controllers/BannerController.php:119
* @route '/api/v1/banners/{banner}'
*/
const update839d79fbf2c2808b5756bd6ae5976b49Form = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update839d79fbf2c2808b5756bd6ae5976b49.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BannerController::update
* @see app/Http/Controllers/BannerController.php:119
* @route '/api/v1/banners/{banner}'
*/
update839d79fbf2c2808b5756bd6ae5976b49Form.put = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update839d79fbf2c2808b5756bd6ae5976b49.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update839d79fbf2c2808b5756bd6ae5976b49.form = update839d79fbf2c2808b5756bd6ae5976b49Form
/**
* @see \App\Http\Controllers\BannerController::update
* @see app/Http/Controllers/BannerController.php:119
* @route '/banners/{banner}'
*/
const updatea9dfbd47f11de858efb050d8d8d0a4ea = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatea9dfbd47f11de858efb050d8d8d0a4ea.url(args, options),
    method: 'put',
})

updatea9dfbd47f11de858efb050d8d8d0a4ea.definition = {
    methods: ["put"],
    url: '/banners/{banner}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\BannerController::update
* @see app/Http/Controllers/BannerController.php:119
* @route '/banners/{banner}'
*/
updatea9dfbd47f11de858efb050d8d8d0a4ea.url = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { banner: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            banner: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner: typeof args.banner === 'object'
        ? args.banner.id
        : args.banner,
    }

    return updatea9dfbd47f11de858efb050d8d8d0a4ea.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::update
* @see app/Http/Controllers/BannerController.php:119
* @route '/banners/{banner}'
*/
updatea9dfbd47f11de858efb050d8d8d0a4ea.put = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatea9dfbd47f11de858efb050d8d8d0a4ea.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\BannerController::update
* @see app/Http/Controllers/BannerController.php:119
* @route '/banners/{banner}'
*/
const updatea9dfbd47f11de858efb050d8d8d0a4eaForm = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatea9dfbd47f11de858efb050d8d8d0a4ea.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BannerController::update
* @see app/Http/Controllers/BannerController.php:119
* @route '/banners/{banner}'
*/
updatea9dfbd47f11de858efb050d8d8d0a4eaForm.put = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatea9dfbd47f11de858efb050d8d8d0a4ea.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatea9dfbd47f11de858efb050d8d8d0a4ea.form = updatea9dfbd47f11de858efb050d8d8d0a4eaForm
/**
* @see \App\Http\Controllers\BannerController::update
* @see app/Http/Controllers/BannerController.php:119
* @route '/banners/{banner}'
*/
const updatea9dfbd47f11de858efb050d8d8d0a4ea = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatea9dfbd47f11de858efb050d8d8d0a4ea.url(args, options),
    method: 'patch',
})

updatea9dfbd47f11de858efb050d8d8d0a4ea.definition = {
    methods: ["patch"],
    url: '/banners/{banner}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\BannerController::update
* @see app/Http/Controllers/BannerController.php:119
* @route '/banners/{banner}'
*/
updatea9dfbd47f11de858efb050d8d8d0a4ea.url = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { banner: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            banner: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner: typeof args.banner === 'object'
        ? args.banner.id
        : args.banner,
    }

    return updatea9dfbd47f11de858efb050d8d8d0a4ea.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::update
* @see app/Http/Controllers/BannerController.php:119
* @route '/banners/{banner}'
*/
updatea9dfbd47f11de858efb050d8d8d0a4ea.patch = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatea9dfbd47f11de858efb050d8d8d0a4ea.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\BannerController::update
* @see app/Http/Controllers/BannerController.php:119
* @route '/banners/{banner}'
*/
const updatea9dfbd47f11de858efb050d8d8d0a4eaForm = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatea9dfbd47f11de858efb050d8d8d0a4ea.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BannerController::update
* @see app/Http/Controllers/BannerController.php:119
* @route '/banners/{banner}'
*/
updatea9dfbd47f11de858efb050d8d8d0a4eaForm.patch = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatea9dfbd47f11de858efb050d8d8d0a4ea.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatea9dfbd47f11de858efb050d8d8d0a4ea.form = updatea9dfbd47f11de858efb050d8d8d0a4eaForm

export const update = {
    '/api/v1/banners/{banner}': update839d79fbf2c2808b5756bd6ae5976b49,
    '/banners/{banner}': updatea9dfbd47f11de858efb050d8d8d0a4ea,
    '/banners/{banner}': updatea9dfbd47f11de858efb050d8d8d0a4ea,
}

/**
* @see \App\Http\Controllers\BannerController::toggle
* @see app/Http/Controllers/BannerController.php:147
* @route '/api/v1/banners/{banner}/toggle'
*/
const togglec4113741637d66ff37ff6f02b311d1b2 = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: togglec4113741637d66ff37ff6f02b311d1b2.url(args, options),
    method: 'patch',
})

togglec4113741637d66ff37ff6f02b311d1b2.definition = {
    methods: ["patch"],
    url: '/api/v1/banners/{banner}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\BannerController::toggle
* @see app/Http/Controllers/BannerController.php:147
* @route '/api/v1/banners/{banner}/toggle'
*/
togglec4113741637d66ff37ff6f02b311d1b2.url = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { banner: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            banner: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner: typeof args.banner === 'object'
        ? args.banner.id
        : args.banner,
    }

    return togglec4113741637d66ff37ff6f02b311d1b2.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::toggle
* @see app/Http/Controllers/BannerController.php:147
* @route '/api/v1/banners/{banner}/toggle'
*/
togglec4113741637d66ff37ff6f02b311d1b2.patch = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: togglec4113741637d66ff37ff6f02b311d1b2.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\BannerController::toggle
* @see app/Http/Controllers/BannerController.php:147
* @route '/api/v1/banners/{banner}/toggle'
*/
const togglec4113741637d66ff37ff6f02b311d1b2Form = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: togglec4113741637d66ff37ff6f02b311d1b2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BannerController::toggle
* @see app/Http/Controllers/BannerController.php:147
* @route '/api/v1/banners/{banner}/toggle'
*/
togglec4113741637d66ff37ff6f02b311d1b2Form.patch = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: togglec4113741637d66ff37ff6f02b311d1b2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

togglec4113741637d66ff37ff6f02b311d1b2.form = togglec4113741637d66ff37ff6f02b311d1b2Form
/**
* @see \App\Http\Controllers\BannerController::toggle
* @see app/Http/Controllers/BannerController.php:147
* @route '/banners/{banner}/toggle'
*/
const toggle4f611a407f372ef96e06b6d608b1ecf6 = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle4f611a407f372ef96e06b6d608b1ecf6.url(args, options),
    method: 'patch',
})

toggle4f611a407f372ef96e06b6d608b1ecf6.definition = {
    methods: ["patch"],
    url: '/banners/{banner}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\BannerController::toggle
* @see app/Http/Controllers/BannerController.php:147
* @route '/banners/{banner}/toggle'
*/
toggle4f611a407f372ef96e06b6d608b1ecf6.url = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { banner: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            banner: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner: typeof args.banner === 'object'
        ? args.banner.id
        : args.banner,
    }

    return toggle4f611a407f372ef96e06b6d608b1ecf6.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::toggle
* @see app/Http/Controllers/BannerController.php:147
* @route '/banners/{banner}/toggle'
*/
toggle4f611a407f372ef96e06b6d608b1ecf6.patch = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle4f611a407f372ef96e06b6d608b1ecf6.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\BannerController::toggle
* @see app/Http/Controllers/BannerController.php:147
* @route '/banners/{banner}/toggle'
*/
const toggle4f611a407f372ef96e06b6d608b1ecf6Form = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle4f611a407f372ef96e06b6d608b1ecf6.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BannerController::toggle
* @see app/Http/Controllers/BannerController.php:147
* @route '/banners/{banner}/toggle'
*/
toggle4f611a407f372ef96e06b6d608b1ecf6Form.patch = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle4f611a407f372ef96e06b6d608b1ecf6.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggle4f611a407f372ef96e06b6d608b1ecf6.form = toggle4f611a407f372ef96e06b6d608b1ecf6Form

export const toggle = {
    '/api/v1/banners/{banner}/toggle': togglec4113741637d66ff37ff6f02b311d1b2,
    '/banners/{banner}/toggle': toggle4f611a407f372ef96e06b6d608b1ecf6,
}

/**
* @see \App\Http\Controllers\BannerController::destroy
* @see app/Http/Controllers/BannerController.php:162
* @route '/api/v1/banners/{banner}'
*/
const destroy839d79fbf2c2808b5756bd6ae5976b49 = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy839d79fbf2c2808b5756bd6ae5976b49.url(args, options),
    method: 'delete',
})

destroy839d79fbf2c2808b5756bd6ae5976b49.definition = {
    methods: ["delete"],
    url: '/api/v1/banners/{banner}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BannerController::destroy
* @see app/Http/Controllers/BannerController.php:162
* @route '/api/v1/banners/{banner}'
*/
destroy839d79fbf2c2808b5756bd6ae5976b49.url = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { banner: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            banner: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner: typeof args.banner === 'object'
        ? args.banner.id
        : args.banner,
    }

    return destroy839d79fbf2c2808b5756bd6ae5976b49.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::destroy
* @see app/Http/Controllers/BannerController.php:162
* @route '/api/v1/banners/{banner}'
*/
destroy839d79fbf2c2808b5756bd6ae5976b49.delete = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy839d79fbf2c2808b5756bd6ae5976b49.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\BannerController::destroy
* @see app/Http/Controllers/BannerController.php:162
* @route '/api/v1/banners/{banner}'
*/
const destroy839d79fbf2c2808b5756bd6ae5976b49Form = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy839d79fbf2c2808b5756bd6ae5976b49.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BannerController::destroy
* @see app/Http/Controllers/BannerController.php:162
* @route '/api/v1/banners/{banner}'
*/
destroy839d79fbf2c2808b5756bd6ae5976b49Form.delete = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy839d79fbf2c2808b5756bd6ae5976b49.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy839d79fbf2c2808b5756bd6ae5976b49.form = destroy839d79fbf2c2808b5756bd6ae5976b49Form
/**
* @see \App\Http\Controllers\BannerController::destroy
* @see app/Http/Controllers/BannerController.php:162
* @route '/banners/{banner}'
*/
const destroya9dfbd47f11de858efb050d8d8d0a4ea = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroya9dfbd47f11de858efb050d8d8d0a4ea.url(args, options),
    method: 'delete',
})

destroya9dfbd47f11de858efb050d8d8d0a4ea.definition = {
    methods: ["delete"],
    url: '/banners/{banner}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BannerController::destroy
* @see app/Http/Controllers/BannerController.php:162
* @route '/banners/{banner}'
*/
destroya9dfbd47f11de858efb050d8d8d0a4ea.url = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { banner: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            banner: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner: typeof args.banner === 'object'
        ? args.banner.id
        : args.banner,
    }

    return destroya9dfbd47f11de858efb050d8d8d0a4ea.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::destroy
* @see app/Http/Controllers/BannerController.php:162
* @route '/banners/{banner}'
*/
destroya9dfbd47f11de858efb050d8d8d0a4ea.delete = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroya9dfbd47f11de858efb050d8d8d0a4ea.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\BannerController::destroy
* @see app/Http/Controllers/BannerController.php:162
* @route '/banners/{banner}'
*/
const destroya9dfbd47f11de858efb050d8d8d0a4eaForm = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroya9dfbd47f11de858efb050d8d8d0a4ea.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BannerController::destroy
* @see app/Http/Controllers/BannerController.php:162
* @route '/banners/{banner}'
*/
destroya9dfbd47f11de858efb050d8d8d0a4eaForm.delete = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroya9dfbd47f11de858efb050d8d8d0a4ea.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroya9dfbd47f11de858efb050d8d8d0a4ea.form = destroya9dfbd47f11de858efb050d8d8d0a4eaForm

export const destroy = {
    '/api/v1/banners/{banner}': destroy839d79fbf2c2808b5756bd6ae5976b49,
    '/banners/{banner}': destroya9dfbd47f11de858efb050d8d8d0a4ea,
}

/**
* @see \App\Http\Controllers\BannerController::create
* @see app/Http/Controllers/BannerController.php:63
* @route '/banners/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/banners/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BannerController::create
* @see app/Http/Controllers/BannerController.php:63
* @route '/banners/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::create
* @see app/Http/Controllers/BannerController.php:63
* @route '/banners/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::create
* @see app/Http/Controllers/BannerController.php:63
* @route '/banners/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BannerController::create
* @see app/Http/Controllers/BannerController.php:63
* @route '/banners/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::create
* @see app/Http/Controllers/BannerController.php:63
* @route '/banners/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::create
* @see app/Http/Controllers/BannerController.php:63
* @route '/banners/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\BannerController::edit
* @see app/Http/Controllers/BannerController.php:111
* @route '/banners/{banner}/edit'
*/
export const edit = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/banners/{banner}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BannerController::edit
* @see app/Http/Controllers/BannerController.php:111
* @route '/banners/{banner}/edit'
*/
edit.url = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { banner: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            banner: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner: typeof args.banner === 'object'
        ? args.banner.id
        : args.banner,
    }

    return edit.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::edit
* @see app/Http/Controllers/BannerController.php:111
* @route '/banners/{banner}/edit'
*/
edit.get = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::edit
* @see app/Http/Controllers/BannerController.php:111
* @route '/banners/{banner}/edit'
*/
edit.head = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BannerController::edit
* @see app/Http/Controllers/BannerController.php:111
* @route '/banners/{banner}/edit'
*/
const editForm = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::edit
* @see app/Http/Controllers/BannerController.php:111
* @route '/banners/{banner}/edit'
*/
editForm.get = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::edit
* @see app/Http/Controllers/BannerController.php:111
* @route '/banners/{banner}/edit'
*/
editForm.head = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\BannerController::show
* @see app/Http/Controllers/BannerController.php:98
* @route '/banners/{banner}'
*/
export const show = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/banners/{banner}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BannerController::show
* @see app/Http/Controllers/BannerController.php:98
* @route '/banners/{banner}'
*/
show.url = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { banner: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            banner: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner: typeof args.banner === 'object'
        ? args.banner.id
        : args.banner,
    }

    return show.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::show
* @see app/Http/Controllers/BannerController.php:98
* @route '/banners/{banner}'
*/
show.get = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::show
* @see app/Http/Controllers/BannerController.php:98
* @route '/banners/{banner}'
*/
show.head = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BannerController::show
* @see app/Http/Controllers/BannerController.php:98
* @route '/banners/{banner}'
*/
const showForm = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::show
* @see app/Http/Controllers/BannerController.php:98
* @route '/banners/{banner}'
*/
showForm.get = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::show
* @see app/Http/Controllers/BannerController.php:98
* @route '/banners/{banner}'
*/
showForm.head = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const BannerController = { index, store, update, toggle, destroy, create, edit, show }

export default BannerController