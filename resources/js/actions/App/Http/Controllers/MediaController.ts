import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MediaController::index
* @see app/Http/Controllers/MediaController.php:63
* @route '/api/v1/media'
*/
const index46c6282de3c06ba451eff0ce018051d9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index46c6282de3c06ba451eff0ce018051d9.url(options),
    method: 'get',
})

index46c6282de3c06ba451eff0ce018051d9.definition = {
    methods: ["get","head"],
    url: '/api/v1/media',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MediaController::index
* @see app/Http/Controllers/MediaController.php:63
* @route '/api/v1/media'
*/
index46c6282de3c06ba451eff0ce018051d9.url = (options?: RouteQueryOptions) => {
    return index46c6282de3c06ba451eff0ce018051d9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::index
* @see app/Http/Controllers/MediaController.php:63
* @route '/api/v1/media'
*/
index46c6282de3c06ba451eff0ce018051d9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index46c6282de3c06ba451eff0ce018051d9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MediaController::index
* @see app/Http/Controllers/MediaController.php:63
* @route '/api/v1/media'
*/
index46c6282de3c06ba451eff0ce018051d9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index46c6282de3c06ba451eff0ce018051d9.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MediaController::index
* @see app/Http/Controllers/MediaController.php:63
* @route '/api/v1/media'
*/
const index46c6282de3c06ba451eff0ce018051d9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index46c6282de3c06ba451eff0ce018051d9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MediaController::index
* @see app/Http/Controllers/MediaController.php:63
* @route '/api/v1/media'
*/
index46c6282de3c06ba451eff0ce018051d9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index46c6282de3c06ba451eff0ce018051d9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MediaController::index
* @see app/Http/Controllers/MediaController.php:63
* @route '/api/v1/media'
*/
index46c6282de3c06ba451eff0ce018051d9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index46c6282de3c06ba451eff0ce018051d9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index46c6282de3c06ba451eff0ce018051d9.form = index46c6282de3c06ba451eff0ce018051d9Form
/**
* @see \App\Http\Controllers\MediaController::index
* @see app/Http/Controllers/MediaController.php:63
* @route '/media'
*/
const indexb6e246e27f8af7b9881470f6aa5d44b9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexb6e246e27f8af7b9881470f6aa5d44b9.url(options),
    method: 'get',
})

indexb6e246e27f8af7b9881470f6aa5d44b9.definition = {
    methods: ["get","head"],
    url: '/media',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MediaController::index
* @see app/Http/Controllers/MediaController.php:63
* @route '/media'
*/
indexb6e246e27f8af7b9881470f6aa5d44b9.url = (options?: RouteQueryOptions) => {
    return indexb6e246e27f8af7b9881470f6aa5d44b9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::index
* @see app/Http/Controllers/MediaController.php:63
* @route '/media'
*/
indexb6e246e27f8af7b9881470f6aa5d44b9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexb6e246e27f8af7b9881470f6aa5d44b9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MediaController::index
* @see app/Http/Controllers/MediaController.php:63
* @route '/media'
*/
indexb6e246e27f8af7b9881470f6aa5d44b9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexb6e246e27f8af7b9881470f6aa5d44b9.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MediaController::index
* @see app/Http/Controllers/MediaController.php:63
* @route '/media'
*/
const indexb6e246e27f8af7b9881470f6aa5d44b9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexb6e246e27f8af7b9881470f6aa5d44b9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MediaController::index
* @see app/Http/Controllers/MediaController.php:63
* @route '/media'
*/
indexb6e246e27f8af7b9881470f6aa5d44b9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexb6e246e27f8af7b9881470f6aa5d44b9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MediaController::index
* @see app/Http/Controllers/MediaController.php:63
* @route '/media'
*/
indexb6e246e27f8af7b9881470f6aa5d44b9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexb6e246e27f8af7b9881470f6aa5d44b9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexb6e246e27f8af7b9881470f6aa5d44b9.form = indexb6e246e27f8af7b9881470f6aa5d44b9Form

export const index = {
    '/api/v1/media': index46c6282de3c06ba451eff0ce018051d9,
    '/media': indexb6e246e27f8af7b9881470f6aa5d44b9,
}

/**
* @see \App\Http\Controllers\MediaController::store
* @see app/Http/Controllers/MediaController.php:83
* @route '/api/v1/media'
*/
const store46c6282de3c06ba451eff0ce018051d9 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store46c6282de3c06ba451eff0ce018051d9.url(options),
    method: 'post',
})

store46c6282de3c06ba451eff0ce018051d9.definition = {
    methods: ["post"],
    url: '/api/v1/media',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MediaController::store
* @see app/Http/Controllers/MediaController.php:83
* @route '/api/v1/media'
*/
store46c6282de3c06ba451eff0ce018051d9.url = (options?: RouteQueryOptions) => {
    return store46c6282de3c06ba451eff0ce018051d9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::store
* @see app/Http/Controllers/MediaController.php:83
* @route '/api/v1/media'
*/
store46c6282de3c06ba451eff0ce018051d9.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store46c6282de3c06ba451eff0ce018051d9.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MediaController::store
* @see app/Http/Controllers/MediaController.php:83
* @route '/api/v1/media'
*/
const store46c6282de3c06ba451eff0ce018051d9Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store46c6282de3c06ba451eff0ce018051d9.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MediaController::store
* @see app/Http/Controllers/MediaController.php:83
* @route '/api/v1/media'
*/
store46c6282de3c06ba451eff0ce018051d9Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store46c6282de3c06ba451eff0ce018051d9.url(options),
    method: 'post',
})

store46c6282de3c06ba451eff0ce018051d9.form = store46c6282de3c06ba451eff0ce018051d9Form
/**
* @see \App\Http\Controllers\MediaController::store
* @see app/Http/Controllers/MediaController.php:83
* @route '/media'
*/
const storeb6e246e27f8af7b9881470f6aa5d44b9 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeb6e246e27f8af7b9881470f6aa5d44b9.url(options),
    method: 'post',
})

storeb6e246e27f8af7b9881470f6aa5d44b9.definition = {
    methods: ["post"],
    url: '/media',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MediaController::store
* @see app/Http/Controllers/MediaController.php:83
* @route '/media'
*/
storeb6e246e27f8af7b9881470f6aa5d44b9.url = (options?: RouteQueryOptions) => {
    return storeb6e246e27f8af7b9881470f6aa5d44b9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::store
* @see app/Http/Controllers/MediaController.php:83
* @route '/media'
*/
storeb6e246e27f8af7b9881470f6aa5d44b9.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeb6e246e27f8af7b9881470f6aa5d44b9.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MediaController::store
* @see app/Http/Controllers/MediaController.php:83
* @route '/media'
*/
const storeb6e246e27f8af7b9881470f6aa5d44b9Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeb6e246e27f8af7b9881470f6aa5d44b9.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MediaController::store
* @see app/Http/Controllers/MediaController.php:83
* @route '/media'
*/
storeb6e246e27f8af7b9881470f6aa5d44b9Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeb6e246e27f8af7b9881470f6aa5d44b9.url(options),
    method: 'post',
})

storeb6e246e27f8af7b9881470f6aa5d44b9.form = storeb6e246e27f8af7b9881470f6aa5d44b9Form

export const store = {
    '/api/v1/media': store46c6282de3c06ba451eff0ce018051d9,
    '/media': storeb6e246e27f8af7b9881470f6aa5d44b9,
}

/**
* @see \App\Http\Controllers\MediaController::update
* @see app/Http/Controllers/MediaController.php:232
* @route '/api/v1/media/{media}'
*/
const update6850d2fb3d47745f79163e8790170c24 = (args: { media: string | number | { id: string | number } } | [media: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update6850d2fb3d47745f79163e8790170c24.url(args, options),
    method: 'put',
})

update6850d2fb3d47745f79163e8790170c24.definition = {
    methods: ["put"],
    url: '/api/v1/media/{media}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\MediaController::update
* @see app/Http/Controllers/MediaController.php:232
* @route '/api/v1/media/{media}'
*/
update6850d2fb3d47745f79163e8790170c24.url = (args: { media: string | number | { id: string | number } } | [media: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { media: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { media: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            media: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        media: typeof args.media === 'object'
        ? args.media.id
        : args.media,
    }

    return update6850d2fb3d47745f79163e8790170c24.definition.url
            .replace('{media}', parsedArgs.media.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::update
* @see app/Http/Controllers/MediaController.php:232
* @route '/api/v1/media/{media}'
*/
update6850d2fb3d47745f79163e8790170c24.put = (args: { media: string | number | { id: string | number } } | [media: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update6850d2fb3d47745f79163e8790170c24.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\MediaController::update
* @see app/Http/Controllers/MediaController.php:232
* @route '/api/v1/media/{media}'
*/
const update6850d2fb3d47745f79163e8790170c24Form = (args: { media: string | number | { id: string | number } } | [media: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update6850d2fb3d47745f79163e8790170c24.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MediaController::update
* @see app/Http/Controllers/MediaController.php:232
* @route '/api/v1/media/{media}'
*/
update6850d2fb3d47745f79163e8790170c24Form.put = (args: { media: string | number | { id: string | number } } | [media: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update6850d2fb3d47745f79163e8790170c24.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update6850d2fb3d47745f79163e8790170c24.form = update6850d2fb3d47745f79163e8790170c24Form
/**
* @see \App\Http\Controllers\MediaController::update
* @see app/Http/Controllers/MediaController.php:232
* @route '/media/{media}'
*/
const update6f9bac910898eb7282dee656264b59d3 = (args: { media: string | number | { id: string | number } } | [media: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update6f9bac910898eb7282dee656264b59d3.url(args, options),
    method: 'patch',
})

update6f9bac910898eb7282dee656264b59d3.definition = {
    methods: ["patch"],
    url: '/media/{media}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MediaController::update
* @see app/Http/Controllers/MediaController.php:232
* @route '/media/{media}'
*/
update6f9bac910898eb7282dee656264b59d3.url = (args: { media: string | number | { id: string | number } } | [media: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { media: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { media: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            media: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        media: typeof args.media === 'object'
        ? args.media.id
        : args.media,
    }

    return update6f9bac910898eb7282dee656264b59d3.definition.url
            .replace('{media}', parsedArgs.media.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::update
* @see app/Http/Controllers/MediaController.php:232
* @route '/media/{media}'
*/
update6f9bac910898eb7282dee656264b59d3.patch = (args: { media: string | number | { id: string | number } } | [media: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update6f9bac910898eb7282dee656264b59d3.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\MediaController::update
* @see app/Http/Controllers/MediaController.php:232
* @route '/media/{media}'
*/
const update6f9bac910898eb7282dee656264b59d3Form = (args: { media: string | number | { id: string | number } } | [media: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update6f9bac910898eb7282dee656264b59d3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MediaController::update
* @see app/Http/Controllers/MediaController.php:232
* @route '/media/{media}'
*/
update6f9bac910898eb7282dee656264b59d3Form.patch = (args: { media: string | number | { id: string | number } } | [media: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update6f9bac910898eb7282dee656264b59d3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update6f9bac910898eb7282dee656264b59d3.form = update6f9bac910898eb7282dee656264b59d3Form

export const update = {
    '/api/v1/media/{media}': update6850d2fb3d47745f79163e8790170c24,
    '/media/{media}': update6f9bac910898eb7282dee656264b59d3,
}

/**
* @see \App\Http\Controllers\MediaController::destroy
* @see app/Http/Controllers/MediaController.php:256
* @route '/api/v1/media/{media}'
*/
const destroy6850d2fb3d47745f79163e8790170c24 = (args: { media: string | number | { id: string | number } } | [media: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy6850d2fb3d47745f79163e8790170c24.url(args, options),
    method: 'delete',
})

destroy6850d2fb3d47745f79163e8790170c24.definition = {
    methods: ["delete"],
    url: '/api/v1/media/{media}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MediaController::destroy
* @see app/Http/Controllers/MediaController.php:256
* @route '/api/v1/media/{media}'
*/
destroy6850d2fb3d47745f79163e8790170c24.url = (args: { media: string | number | { id: string | number } } | [media: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { media: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { media: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            media: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        media: typeof args.media === 'object'
        ? args.media.id
        : args.media,
    }

    return destroy6850d2fb3d47745f79163e8790170c24.definition.url
            .replace('{media}', parsedArgs.media.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::destroy
* @see app/Http/Controllers/MediaController.php:256
* @route '/api/v1/media/{media}'
*/
destroy6850d2fb3d47745f79163e8790170c24.delete = (args: { media: string | number | { id: string | number } } | [media: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy6850d2fb3d47745f79163e8790170c24.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\MediaController::destroy
* @see app/Http/Controllers/MediaController.php:256
* @route '/api/v1/media/{media}'
*/
const destroy6850d2fb3d47745f79163e8790170c24Form = (args: { media: string | number | { id: string | number } } | [media: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy6850d2fb3d47745f79163e8790170c24.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MediaController::destroy
* @see app/Http/Controllers/MediaController.php:256
* @route '/api/v1/media/{media}'
*/
destroy6850d2fb3d47745f79163e8790170c24Form.delete = (args: { media: string | number | { id: string | number } } | [media: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy6850d2fb3d47745f79163e8790170c24.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy6850d2fb3d47745f79163e8790170c24.form = destroy6850d2fb3d47745f79163e8790170c24Form
/**
* @see \App\Http\Controllers\MediaController::destroy
* @see app/Http/Controllers/MediaController.php:256
* @route '/media/{media}'
*/
const destroy6f9bac910898eb7282dee656264b59d3 = (args: { media: string | number | { id: string | number } } | [media: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy6f9bac910898eb7282dee656264b59d3.url(args, options),
    method: 'delete',
})

destroy6f9bac910898eb7282dee656264b59d3.definition = {
    methods: ["delete"],
    url: '/media/{media}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MediaController::destroy
* @see app/Http/Controllers/MediaController.php:256
* @route '/media/{media}'
*/
destroy6f9bac910898eb7282dee656264b59d3.url = (args: { media: string | number | { id: string | number } } | [media: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { media: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { media: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            media: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        media: typeof args.media === 'object'
        ? args.media.id
        : args.media,
    }

    return destroy6f9bac910898eb7282dee656264b59d3.definition.url
            .replace('{media}', parsedArgs.media.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaController::destroy
* @see app/Http/Controllers/MediaController.php:256
* @route '/media/{media}'
*/
destroy6f9bac910898eb7282dee656264b59d3.delete = (args: { media: string | number | { id: string | number } } | [media: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy6f9bac910898eb7282dee656264b59d3.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\MediaController::destroy
* @see app/Http/Controllers/MediaController.php:256
* @route '/media/{media}'
*/
const destroy6f9bac910898eb7282dee656264b59d3Form = (args: { media: string | number | { id: string | number } } | [media: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy6f9bac910898eb7282dee656264b59d3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MediaController::destroy
* @see app/Http/Controllers/MediaController.php:256
* @route '/media/{media}'
*/
destroy6f9bac910898eb7282dee656264b59d3Form.delete = (args: { media: string | number | { id: string | number } } | [media: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy6f9bac910898eb7282dee656264b59d3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy6f9bac910898eb7282dee656264b59d3.form = destroy6f9bac910898eb7282dee656264b59d3Form

export const destroy = {
    '/api/v1/media/{media}': destroy6850d2fb3d47745f79163e8790170c24,
    '/media/{media}': destroy6f9bac910898eb7282dee656264b59d3,
}

const MediaController = { index, store, update, destroy }

export default MediaController