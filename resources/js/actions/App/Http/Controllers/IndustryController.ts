import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/api/v1/industries'
*/
const indexdf3d0e76d7b81a519142716a8c54b2f4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexdf3d0e76d7b81a519142716a8c54b2f4.url(options),
    method: 'get',
})

indexdf3d0e76d7b81a519142716a8c54b2f4.definition = {
    methods: ["get","head"],
    url: '/api/v1/industries',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/api/v1/industries'
*/
indexdf3d0e76d7b81a519142716a8c54b2f4.url = (options?: RouteQueryOptions) => {
    return indexdf3d0e76d7b81a519142716a8c54b2f4.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/api/v1/industries'
*/
indexdf3d0e76d7b81a519142716a8c54b2f4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexdf3d0e76d7b81a519142716a8c54b2f4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/api/v1/industries'
*/
indexdf3d0e76d7b81a519142716a8c54b2f4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexdf3d0e76d7b81a519142716a8c54b2f4.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/api/v1/industries'
*/
const indexdf3d0e76d7b81a519142716a8c54b2f4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexdf3d0e76d7b81a519142716a8c54b2f4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/api/v1/industries'
*/
indexdf3d0e76d7b81a519142716a8c54b2f4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexdf3d0e76d7b81a519142716a8c54b2f4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/api/v1/industries'
*/
indexdf3d0e76d7b81a519142716a8c54b2f4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexdf3d0e76d7b81a519142716a8c54b2f4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexdf3d0e76d7b81a519142716a8c54b2f4.form = indexdf3d0e76d7b81a519142716a8c54b2f4Form
/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/industries'
*/
const indexc2d9d607010913bd1c9d1949d5a8e648 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc2d9d607010913bd1c9d1949d5a8e648.url(options),
    method: 'get',
})

indexc2d9d607010913bd1c9d1949d5a8e648.definition = {
    methods: ["get","head"],
    url: '/industries',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/industries'
*/
indexc2d9d607010913bd1c9d1949d5a8e648.url = (options?: RouteQueryOptions) => {
    return indexc2d9d607010913bd1c9d1949d5a8e648.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/industries'
*/
indexc2d9d607010913bd1c9d1949d5a8e648.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc2d9d607010913bd1c9d1949d5a8e648.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/industries'
*/
indexc2d9d607010913bd1c9d1949d5a8e648.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexc2d9d607010913bd1c9d1949d5a8e648.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/industries'
*/
const indexc2d9d607010913bd1c9d1949d5a8e648Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexc2d9d607010913bd1c9d1949d5a8e648.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/industries'
*/
indexc2d9d607010913bd1c9d1949d5a8e648Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexc2d9d607010913bd1c9d1949d5a8e648.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/industries'
*/
indexc2d9d607010913bd1c9d1949d5a8e648Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexc2d9d607010913bd1c9d1949d5a8e648.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexc2d9d607010913bd1c9d1949d5a8e648.form = indexc2d9d607010913bd1c9d1949d5a8e648Form

export const index = {
    '/api/v1/industries': indexdf3d0e76d7b81a519142716a8c54b2f4,
    '/industries': indexc2d9d607010913bd1c9d1949d5a8e648,
}

/**
* @see \App\Http\Controllers\IndustryController::show
* @see app/Http/Controllers/IndustryController.php:116
* @route '/api/v1/industries/{slug}'
*/
export const show = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/industries/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\IndustryController::show
* @see app/Http/Controllers/IndustryController.php:116
* @route '/api/v1/industries/{slug}'
*/
show.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    if (Array.isArray(args)) {
        args = {
            slug: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        slug: args.slug,
    }

    return show.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::show
* @see app/Http/Controllers/IndustryController.php:116
* @route '/api/v1/industries/{slug}'
*/
show.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::show
* @see app/Http/Controllers/IndustryController.php:116
* @route '/api/v1/industries/{slug}'
*/
show.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\IndustryController::show
* @see app/Http/Controllers/IndustryController.php:116
* @route '/api/v1/industries/{slug}'
*/
const showForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::show
* @see app/Http/Controllers/IndustryController.php:116
* @route '/api/v1/industries/{slug}'
*/
showForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::show
* @see app/Http/Controllers/IndustryController.php:116
* @route '/api/v1/industries/{slug}'
*/
showForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/api/v1/industries/create'
*/
const create3b4b9d272fd516875eaaae2ef017d433 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create3b4b9d272fd516875eaaae2ef017d433.url(options),
    method: 'get',
})

create3b4b9d272fd516875eaaae2ef017d433.definition = {
    methods: ["get","head"],
    url: '/api/v1/industries/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/api/v1/industries/create'
*/
create3b4b9d272fd516875eaaae2ef017d433.url = (options?: RouteQueryOptions) => {
    return create3b4b9d272fd516875eaaae2ef017d433.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/api/v1/industries/create'
*/
create3b4b9d272fd516875eaaae2ef017d433.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create3b4b9d272fd516875eaaae2ef017d433.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/api/v1/industries/create'
*/
create3b4b9d272fd516875eaaae2ef017d433.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create3b4b9d272fd516875eaaae2ef017d433.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/api/v1/industries/create'
*/
const create3b4b9d272fd516875eaaae2ef017d433Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create3b4b9d272fd516875eaaae2ef017d433.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/api/v1/industries/create'
*/
create3b4b9d272fd516875eaaae2ef017d433Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create3b4b9d272fd516875eaaae2ef017d433.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/api/v1/industries/create'
*/
create3b4b9d272fd516875eaaae2ef017d433Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create3b4b9d272fd516875eaaae2ef017d433.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create3b4b9d272fd516875eaaae2ef017d433.form = create3b4b9d272fd516875eaaae2ef017d433Form
/**
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/industries/create'
*/
const createe02796827cdddd14f29471c6dcbc7022 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createe02796827cdddd14f29471c6dcbc7022.url(options),
    method: 'get',
})

createe02796827cdddd14f29471c6dcbc7022.definition = {
    methods: ["get","head"],
    url: '/industries/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/industries/create'
*/
createe02796827cdddd14f29471c6dcbc7022.url = (options?: RouteQueryOptions) => {
    return createe02796827cdddd14f29471c6dcbc7022.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/industries/create'
*/
createe02796827cdddd14f29471c6dcbc7022.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createe02796827cdddd14f29471c6dcbc7022.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/industries/create'
*/
createe02796827cdddd14f29471c6dcbc7022.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: createe02796827cdddd14f29471c6dcbc7022.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/industries/create'
*/
const createe02796827cdddd14f29471c6dcbc7022Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createe02796827cdddd14f29471c6dcbc7022.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/industries/create'
*/
createe02796827cdddd14f29471c6dcbc7022Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createe02796827cdddd14f29471c6dcbc7022.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/industries/create'
*/
createe02796827cdddd14f29471c6dcbc7022Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createe02796827cdddd14f29471c6dcbc7022.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

createe02796827cdddd14f29471c6dcbc7022.form = createe02796827cdddd14f29471c6dcbc7022Form

export const create = {
    '/api/v1/industries/create': create3b4b9d272fd516875eaaae2ef017d433,
    '/industries/create': createe02796827cdddd14f29471c6dcbc7022,
}

/**
* @see \App\Http\Controllers\IndustryController::store
* @see app/Http/Controllers/IndustryController.php:149
* @route '/api/v1/industries'
*/
const storedf3d0e76d7b81a519142716a8c54b2f4 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storedf3d0e76d7b81a519142716a8c54b2f4.url(options),
    method: 'post',
})

storedf3d0e76d7b81a519142716a8c54b2f4.definition = {
    methods: ["post"],
    url: '/api/v1/industries',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\IndustryController::store
* @see app/Http/Controllers/IndustryController.php:149
* @route '/api/v1/industries'
*/
storedf3d0e76d7b81a519142716a8c54b2f4.url = (options?: RouteQueryOptions) => {
    return storedf3d0e76d7b81a519142716a8c54b2f4.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::store
* @see app/Http/Controllers/IndustryController.php:149
* @route '/api/v1/industries'
*/
storedf3d0e76d7b81a519142716a8c54b2f4.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storedf3d0e76d7b81a519142716a8c54b2f4.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\IndustryController::store
* @see app/Http/Controllers/IndustryController.php:149
* @route '/api/v1/industries'
*/
const storedf3d0e76d7b81a519142716a8c54b2f4Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storedf3d0e76d7b81a519142716a8c54b2f4.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\IndustryController::store
* @see app/Http/Controllers/IndustryController.php:149
* @route '/api/v1/industries'
*/
storedf3d0e76d7b81a519142716a8c54b2f4Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storedf3d0e76d7b81a519142716a8c54b2f4.url(options),
    method: 'post',
})

storedf3d0e76d7b81a519142716a8c54b2f4.form = storedf3d0e76d7b81a519142716a8c54b2f4Form
/**
* @see \App\Http\Controllers\IndustryController::store
* @see app/Http/Controllers/IndustryController.php:149
* @route '/industries'
*/
const storec2d9d607010913bd1c9d1949d5a8e648 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storec2d9d607010913bd1c9d1949d5a8e648.url(options),
    method: 'post',
})

storec2d9d607010913bd1c9d1949d5a8e648.definition = {
    methods: ["post"],
    url: '/industries',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\IndustryController::store
* @see app/Http/Controllers/IndustryController.php:149
* @route '/industries'
*/
storec2d9d607010913bd1c9d1949d5a8e648.url = (options?: RouteQueryOptions) => {
    return storec2d9d607010913bd1c9d1949d5a8e648.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::store
* @see app/Http/Controllers/IndustryController.php:149
* @route '/industries'
*/
storec2d9d607010913bd1c9d1949d5a8e648.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storec2d9d607010913bd1c9d1949d5a8e648.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\IndustryController::store
* @see app/Http/Controllers/IndustryController.php:149
* @route '/industries'
*/
const storec2d9d607010913bd1c9d1949d5a8e648Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storec2d9d607010913bd1c9d1949d5a8e648.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\IndustryController::store
* @see app/Http/Controllers/IndustryController.php:149
* @route '/industries'
*/
storec2d9d607010913bd1c9d1949d5a8e648Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storec2d9d607010913bd1c9d1949d5a8e648.url(options),
    method: 'post',
})

storec2d9d607010913bd1c9d1949d5a8e648.form = storec2d9d607010913bd1c9d1949d5a8e648Form

export const store = {
    '/api/v1/industries': storedf3d0e76d7b81a519142716a8c54b2f4,
    '/industries': storec2d9d607010913bd1c9d1949d5a8e648,
}

/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/api/v1/industries/{industry}'
*/
const edit9bd3d82745171e78704558e463487061 = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit9bd3d82745171e78704558e463487061.url(args, options),
    method: 'get',
})

edit9bd3d82745171e78704558e463487061.definition = {
    methods: ["get","head"],
    url: '/api/v1/industries/{industry}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/api/v1/industries/{industry}'
*/
edit9bd3d82745171e78704558e463487061.url = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { industry: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { industry: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            industry: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        industry: typeof args.industry === 'object'
        ? args.industry.id
        : args.industry,
    }

    return edit9bd3d82745171e78704558e463487061.definition.url
            .replace('{industry}', parsedArgs.industry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/api/v1/industries/{industry}'
*/
edit9bd3d82745171e78704558e463487061.get = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit9bd3d82745171e78704558e463487061.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/api/v1/industries/{industry}'
*/
edit9bd3d82745171e78704558e463487061.head = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit9bd3d82745171e78704558e463487061.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/api/v1/industries/{industry}'
*/
const edit9bd3d82745171e78704558e463487061Form = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit9bd3d82745171e78704558e463487061.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/api/v1/industries/{industry}'
*/
edit9bd3d82745171e78704558e463487061Form.get = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit9bd3d82745171e78704558e463487061.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/api/v1/industries/{industry}'
*/
edit9bd3d82745171e78704558e463487061Form.head = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit9bd3d82745171e78704558e463487061.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit9bd3d82745171e78704558e463487061.form = edit9bd3d82745171e78704558e463487061Form
/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/industries/{industry}/edit'
*/
const editfc0fbd42c6515eebf6dabc262ad3d4a3 = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editfc0fbd42c6515eebf6dabc262ad3d4a3.url(args, options),
    method: 'get',
})

editfc0fbd42c6515eebf6dabc262ad3d4a3.definition = {
    methods: ["get","head"],
    url: '/industries/{industry}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/industries/{industry}/edit'
*/
editfc0fbd42c6515eebf6dabc262ad3d4a3.url = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { industry: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { industry: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            industry: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        industry: typeof args.industry === 'object'
        ? args.industry.id
        : args.industry,
    }

    return editfc0fbd42c6515eebf6dabc262ad3d4a3.definition.url
            .replace('{industry}', parsedArgs.industry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/industries/{industry}/edit'
*/
editfc0fbd42c6515eebf6dabc262ad3d4a3.get = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editfc0fbd42c6515eebf6dabc262ad3d4a3.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/industries/{industry}/edit'
*/
editfc0fbd42c6515eebf6dabc262ad3d4a3.head = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editfc0fbd42c6515eebf6dabc262ad3d4a3.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/industries/{industry}/edit'
*/
const editfc0fbd42c6515eebf6dabc262ad3d4a3Form = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editfc0fbd42c6515eebf6dabc262ad3d4a3.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/industries/{industry}/edit'
*/
editfc0fbd42c6515eebf6dabc262ad3d4a3Form.get = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editfc0fbd42c6515eebf6dabc262ad3d4a3.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/industries/{industry}/edit'
*/
editfc0fbd42c6515eebf6dabc262ad3d4a3Form.head = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editfc0fbd42c6515eebf6dabc262ad3d4a3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

editfc0fbd42c6515eebf6dabc262ad3d4a3.form = editfc0fbd42c6515eebf6dabc262ad3d4a3Form

export const edit = {
    '/api/v1/industries/{industry}': edit9bd3d82745171e78704558e463487061,
    '/industries/{industry}/edit': editfc0fbd42c6515eebf6dabc262ad3d4a3,
}

/**
* @see \App\Http\Controllers\IndustryController::update
* @see app/Http/Controllers/IndustryController.php:203
* @route '/api/v1/industries/{industry}'
*/
const update9bd3d82745171e78704558e463487061 = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update9bd3d82745171e78704558e463487061.url(args, options),
    method: 'put',
})

update9bd3d82745171e78704558e463487061.definition = {
    methods: ["put"],
    url: '/api/v1/industries/{industry}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\IndustryController::update
* @see app/Http/Controllers/IndustryController.php:203
* @route '/api/v1/industries/{industry}'
*/
update9bd3d82745171e78704558e463487061.url = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { industry: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { industry: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            industry: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        industry: typeof args.industry === 'object'
        ? args.industry.id
        : args.industry,
    }

    return update9bd3d82745171e78704558e463487061.definition.url
            .replace('{industry}', parsedArgs.industry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::update
* @see app/Http/Controllers/IndustryController.php:203
* @route '/api/v1/industries/{industry}'
*/
update9bd3d82745171e78704558e463487061.put = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update9bd3d82745171e78704558e463487061.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\IndustryController::update
* @see app/Http/Controllers/IndustryController.php:203
* @route '/api/v1/industries/{industry}'
*/
const update9bd3d82745171e78704558e463487061Form = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update9bd3d82745171e78704558e463487061.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\IndustryController::update
* @see app/Http/Controllers/IndustryController.php:203
* @route '/api/v1/industries/{industry}'
*/
update9bd3d82745171e78704558e463487061Form.put = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update9bd3d82745171e78704558e463487061.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update9bd3d82745171e78704558e463487061.form = update9bd3d82745171e78704558e463487061Form
/**
* @see \App\Http\Controllers\IndustryController::update
* @see app/Http/Controllers/IndustryController.php:203
* @route '/industries/{industry}'
*/
const update91e0a4226a667b1a78758ca8ef18ccfa = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update91e0a4226a667b1a78758ca8ef18ccfa.url(args, options),
    method: 'patch',
})

update91e0a4226a667b1a78758ca8ef18ccfa.definition = {
    methods: ["patch"],
    url: '/industries/{industry}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\IndustryController::update
* @see app/Http/Controllers/IndustryController.php:203
* @route '/industries/{industry}'
*/
update91e0a4226a667b1a78758ca8ef18ccfa.url = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { industry: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { industry: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            industry: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        industry: typeof args.industry === 'object'
        ? args.industry.id
        : args.industry,
    }

    return update91e0a4226a667b1a78758ca8ef18ccfa.definition.url
            .replace('{industry}', parsedArgs.industry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::update
* @see app/Http/Controllers/IndustryController.php:203
* @route '/industries/{industry}'
*/
update91e0a4226a667b1a78758ca8ef18ccfa.patch = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update91e0a4226a667b1a78758ca8ef18ccfa.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\IndustryController::update
* @see app/Http/Controllers/IndustryController.php:203
* @route '/industries/{industry}'
*/
const update91e0a4226a667b1a78758ca8ef18ccfaForm = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update91e0a4226a667b1a78758ca8ef18ccfa.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\IndustryController::update
* @see app/Http/Controllers/IndustryController.php:203
* @route '/industries/{industry}'
*/
update91e0a4226a667b1a78758ca8ef18ccfaForm.patch = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update91e0a4226a667b1a78758ca8ef18ccfa.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update91e0a4226a667b1a78758ca8ef18ccfa.form = update91e0a4226a667b1a78758ca8ef18ccfaForm

export const update = {
    '/api/v1/industries/{industry}': update9bd3d82745171e78704558e463487061,
    '/industries/{industry}': update91e0a4226a667b1a78758ca8ef18ccfa,
}

/**
* @see \App\Http\Controllers\IndustryController::destroy
* @see app/Http/Controllers/IndustryController.php:243
* @route '/api/v1/industries/{industry}'
*/
const destroy9bd3d82745171e78704558e463487061 = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy9bd3d82745171e78704558e463487061.url(args, options),
    method: 'delete',
})

destroy9bd3d82745171e78704558e463487061.definition = {
    methods: ["delete"],
    url: '/api/v1/industries/{industry}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\IndustryController::destroy
* @see app/Http/Controllers/IndustryController.php:243
* @route '/api/v1/industries/{industry}'
*/
destroy9bd3d82745171e78704558e463487061.url = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { industry: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { industry: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            industry: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        industry: typeof args.industry === 'object'
        ? args.industry.id
        : args.industry,
    }

    return destroy9bd3d82745171e78704558e463487061.definition.url
            .replace('{industry}', parsedArgs.industry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::destroy
* @see app/Http/Controllers/IndustryController.php:243
* @route '/api/v1/industries/{industry}'
*/
destroy9bd3d82745171e78704558e463487061.delete = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy9bd3d82745171e78704558e463487061.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\IndustryController::destroy
* @see app/Http/Controllers/IndustryController.php:243
* @route '/api/v1/industries/{industry}'
*/
const destroy9bd3d82745171e78704558e463487061Form = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy9bd3d82745171e78704558e463487061.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\IndustryController::destroy
* @see app/Http/Controllers/IndustryController.php:243
* @route '/api/v1/industries/{industry}'
*/
destroy9bd3d82745171e78704558e463487061Form.delete = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy9bd3d82745171e78704558e463487061.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy9bd3d82745171e78704558e463487061.form = destroy9bd3d82745171e78704558e463487061Form
/**
* @see \App\Http\Controllers\IndustryController::destroy
* @see app/Http/Controllers/IndustryController.php:243
* @route '/industries/{industry}'
*/
const destroy91e0a4226a667b1a78758ca8ef18ccfa = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy91e0a4226a667b1a78758ca8ef18ccfa.url(args, options),
    method: 'delete',
})

destroy91e0a4226a667b1a78758ca8ef18ccfa.definition = {
    methods: ["delete"],
    url: '/industries/{industry}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\IndustryController::destroy
* @see app/Http/Controllers/IndustryController.php:243
* @route '/industries/{industry}'
*/
destroy91e0a4226a667b1a78758ca8ef18ccfa.url = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { industry: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { industry: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            industry: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        industry: typeof args.industry === 'object'
        ? args.industry.id
        : args.industry,
    }

    return destroy91e0a4226a667b1a78758ca8ef18ccfa.definition.url
            .replace('{industry}', parsedArgs.industry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::destroy
* @see app/Http/Controllers/IndustryController.php:243
* @route '/industries/{industry}'
*/
destroy91e0a4226a667b1a78758ca8ef18ccfa.delete = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy91e0a4226a667b1a78758ca8ef18ccfa.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\IndustryController::destroy
* @see app/Http/Controllers/IndustryController.php:243
* @route '/industries/{industry}'
*/
const destroy91e0a4226a667b1a78758ca8ef18ccfaForm = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy91e0a4226a667b1a78758ca8ef18ccfa.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\IndustryController::destroy
* @see app/Http/Controllers/IndustryController.php:243
* @route '/industries/{industry}'
*/
destroy91e0a4226a667b1a78758ca8ef18ccfaForm.delete = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy91e0a4226a667b1a78758ca8ef18ccfa.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy91e0a4226a667b1a78758ca8ef18ccfa.form = destroy91e0a4226a667b1a78758ca8ef18ccfaForm

export const destroy = {
    '/api/v1/industries/{industry}': destroy9bd3d82745171e78704558e463487061,
    '/industries/{industry}': destroy91e0a4226a667b1a78758ca8ef18ccfa,
}

/**
* @see \App\Http\Controllers\IndustryController::toggle
* @see app/Http/Controllers/IndustryController.php:229
* @route '/api/v1/industries/{industry}/toggle'
*/
const toggle5d251fff0c4559adc30f46bd2d909cf5 = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle5d251fff0c4559adc30f46bd2d909cf5.url(args, options),
    method: 'patch',
})

toggle5d251fff0c4559adc30f46bd2d909cf5.definition = {
    methods: ["patch"],
    url: '/api/v1/industries/{industry}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\IndustryController::toggle
* @see app/Http/Controllers/IndustryController.php:229
* @route '/api/v1/industries/{industry}/toggle'
*/
toggle5d251fff0c4559adc30f46bd2d909cf5.url = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { industry: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { industry: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            industry: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        industry: typeof args.industry === 'object'
        ? args.industry.id
        : args.industry,
    }

    return toggle5d251fff0c4559adc30f46bd2d909cf5.definition.url
            .replace('{industry}', parsedArgs.industry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::toggle
* @see app/Http/Controllers/IndustryController.php:229
* @route '/api/v1/industries/{industry}/toggle'
*/
toggle5d251fff0c4559adc30f46bd2d909cf5.patch = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle5d251fff0c4559adc30f46bd2d909cf5.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\IndustryController::toggle
* @see app/Http/Controllers/IndustryController.php:229
* @route '/api/v1/industries/{industry}/toggle'
*/
const toggle5d251fff0c4559adc30f46bd2d909cf5Form = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle5d251fff0c4559adc30f46bd2d909cf5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\IndustryController::toggle
* @see app/Http/Controllers/IndustryController.php:229
* @route '/api/v1/industries/{industry}/toggle'
*/
toggle5d251fff0c4559adc30f46bd2d909cf5Form.patch = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle5d251fff0c4559adc30f46bd2d909cf5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggle5d251fff0c4559adc30f46bd2d909cf5.form = toggle5d251fff0c4559adc30f46bd2d909cf5Form
/**
* @see \App\Http\Controllers\IndustryController::toggle
* @see app/Http/Controllers/IndustryController.php:229
* @route '/industries/{industry}/toggle'
*/
const toggleabf96ea9d7ff82ea2e6a2a78a0b3618f = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleabf96ea9d7ff82ea2e6a2a78a0b3618f.url(args, options),
    method: 'patch',
})

toggleabf96ea9d7ff82ea2e6a2a78a0b3618f.definition = {
    methods: ["patch"],
    url: '/industries/{industry}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\IndustryController::toggle
* @see app/Http/Controllers/IndustryController.php:229
* @route '/industries/{industry}/toggle'
*/
toggleabf96ea9d7ff82ea2e6a2a78a0b3618f.url = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { industry: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { industry: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            industry: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        industry: typeof args.industry === 'object'
        ? args.industry.id
        : args.industry,
    }

    return toggleabf96ea9d7ff82ea2e6a2a78a0b3618f.definition.url
            .replace('{industry}', parsedArgs.industry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::toggle
* @see app/Http/Controllers/IndustryController.php:229
* @route '/industries/{industry}/toggle'
*/
toggleabf96ea9d7ff82ea2e6a2a78a0b3618f.patch = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleabf96ea9d7ff82ea2e6a2a78a0b3618f.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\IndustryController::toggle
* @see app/Http/Controllers/IndustryController.php:229
* @route '/industries/{industry}/toggle'
*/
const toggleabf96ea9d7ff82ea2e6a2a78a0b3618fForm = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleabf96ea9d7ff82ea2e6a2a78a0b3618f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\IndustryController::toggle
* @see app/Http/Controllers/IndustryController.php:229
* @route '/industries/{industry}/toggle'
*/
toggleabf96ea9d7ff82ea2e6a2a78a0b3618fForm.patch = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleabf96ea9d7ff82ea2e6a2a78a0b3618f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleabf96ea9d7ff82ea2e6a2a78a0b3618f.form = toggleabf96ea9d7ff82ea2e6a2a78a0b3618fForm

export const toggle = {
    '/api/v1/industries/{industry}/toggle': toggle5d251fff0c4559adc30f46bd2d909cf5,
    '/industries/{industry}/toggle': toggleabf96ea9d7ff82ea2e6a2a78a0b3618f,
}

const IndustryController = { index, show, create, store, edit, update, destroy, toggle }

export default IndustryController