import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/api/v1/hero-slides'
*/
const indexfbf4730473b44e0be0e904c7fed2ac86 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexfbf4730473b44e0be0e904c7fed2ac86.url(options),
    method: 'get',
})

indexfbf4730473b44e0be0e904c7fed2ac86.definition = {
    methods: ["get","head"],
    url: '/api/v1/hero-slides',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/api/v1/hero-slides'
*/
indexfbf4730473b44e0be0e904c7fed2ac86.url = (options?: RouteQueryOptions) => {




    return indexfbf4730473b44e0be0e904c7fed2ac86.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/api/v1/hero-slides'
*/
indexfbf4730473b44e0be0e904c7fed2ac86.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexfbf4730473b44e0be0e904c7fed2ac86.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/api/v1/hero-slides'
*/
indexfbf4730473b44e0be0e904c7fed2ac86.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexfbf4730473b44e0be0e904c7fed2ac86.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/api/v1/hero-slides'
*/
const indexfbf4730473b44e0be0e904c7fed2ac86Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexfbf4730473b44e0be0e904c7fed2ac86.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/api/v1/hero-slides'
*/
indexfbf4730473b44e0be0e904c7fed2ac86Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexfbf4730473b44e0be0e904c7fed2ac86.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/api/v1/hero-slides'
*/
indexfbf4730473b44e0be0e904c7fed2ac86Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexfbf4730473b44e0be0e904c7fed2ac86.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexfbf4730473b44e0be0e904c7fed2ac86.form = indexfbf4730473b44e0be0e904c7fed2ac86Form
/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/hero-slides'
*/
const indexec49b9152593a5fbf5bfbaf5d91e9f40 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexec49b9152593a5fbf5bfbaf5d91e9f40.url(options),
    method: 'get',
})

indexec49b9152593a5fbf5bfbaf5d91e9f40.definition = {
    methods: ["get","head"],
    url: '/hero-slides',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/hero-slides'
*/
indexec49b9152593a5fbf5bfbaf5d91e9f40.url = (options?: RouteQueryOptions) => {




    return indexec49b9152593a5fbf5bfbaf5d91e9f40.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/hero-slides'
*/
indexec49b9152593a5fbf5bfbaf5d91e9f40.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexec49b9152593a5fbf5bfbaf5d91e9f40.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/hero-slides'
*/
indexec49b9152593a5fbf5bfbaf5d91e9f40.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexec49b9152593a5fbf5bfbaf5d91e9f40.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/hero-slides'
*/
const indexec49b9152593a5fbf5bfbaf5d91e9f40Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexec49b9152593a5fbf5bfbaf5d91e9f40.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/hero-slides'
*/
indexec49b9152593a5fbf5bfbaf5d91e9f40Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexec49b9152593a5fbf5bfbaf5d91e9f40.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/hero-slides'
*/
indexec49b9152593a5fbf5bfbaf5d91e9f40Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexec49b9152593a5fbf5bfbaf5d91e9f40.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexec49b9152593a5fbf5bfbaf5d91e9f40.form = indexec49b9152593a5fbf5bfbaf5d91e9f40Form

export const index = {
    '/api/v1/hero-slides': indexfbf4730473b44e0be0e904c7fed2ac86,
    '/hero-slides': indexec49b9152593a5fbf5bfbaf5d91e9f40,
}


/**
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/api/v1/hero-slides/create'
*/
const create1aeb8e11644372d0c0e96cf804b8346d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create1aeb8e11644372d0c0e96cf804b8346d.url(options),
    method: 'get',
})

create1aeb8e11644372d0c0e96cf804b8346d.definition = {
    methods: ["get","head"],
    url: '/api/v1/hero-slides/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/api/v1/hero-slides/create'
*/
create1aeb8e11644372d0c0e96cf804b8346d.url = (options?: RouteQueryOptions) => {




    return create1aeb8e11644372d0c0e96cf804b8346d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/api/v1/hero-slides/create'
*/
create1aeb8e11644372d0c0e96cf804b8346d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create1aeb8e11644372d0c0e96cf804b8346d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/api/v1/hero-slides/create'
*/
create1aeb8e11644372d0c0e96cf804b8346d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create1aeb8e11644372d0c0e96cf804b8346d.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/api/v1/hero-slides/create'
*/
const create1aeb8e11644372d0c0e96cf804b8346dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create1aeb8e11644372d0c0e96cf804b8346d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/api/v1/hero-slides/create'
*/
create1aeb8e11644372d0c0e96cf804b8346dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create1aeb8e11644372d0c0e96cf804b8346d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/api/v1/hero-slides/create'
*/
create1aeb8e11644372d0c0e96cf804b8346dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create1aeb8e11644372d0c0e96cf804b8346d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create1aeb8e11644372d0c0e96cf804b8346d.form = create1aeb8e11644372d0c0e96cf804b8346dForm
/**
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/hero-slides/create'
*/
const createcf58e898b9afc2e763cf80b4f0fe6fbb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createcf58e898b9afc2e763cf80b4f0fe6fbb.url(options),
    method: 'get',
})

createcf58e898b9afc2e763cf80b4f0fe6fbb.definition = {
    methods: ["get","head"],
    url: '/hero-slides/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/hero-slides/create'
*/
createcf58e898b9afc2e763cf80b4f0fe6fbb.url = (options?: RouteQueryOptions) => {




    return createcf58e898b9afc2e763cf80b4f0fe6fbb.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/hero-slides/create'
*/
createcf58e898b9afc2e763cf80b4f0fe6fbb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createcf58e898b9afc2e763cf80b4f0fe6fbb.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/hero-slides/create'
*/
createcf58e898b9afc2e763cf80b4f0fe6fbb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: createcf58e898b9afc2e763cf80b4f0fe6fbb.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/hero-slides/create'
*/
const createcf58e898b9afc2e763cf80b4f0fe6fbbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createcf58e898b9afc2e763cf80b4f0fe6fbb.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/hero-slides/create'
*/
createcf58e898b9afc2e763cf80b4f0fe6fbbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createcf58e898b9afc2e763cf80b4f0fe6fbb.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/hero-slides/create'
*/
createcf58e898b9afc2e763cf80b4f0fe6fbbForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createcf58e898b9afc2e763cf80b4f0fe6fbb.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

createcf58e898b9afc2e763cf80b4f0fe6fbb.form = createcf58e898b9afc2e763cf80b4f0fe6fbbForm

export const create = {
    '/api/v1/hero-slides/create': create1aeb8e11644372d0c0e96cf804b8346d,
    '/hero-slides/create': createcf58e898b9afc2e763cf80b4f0fe6fbb,
}


/**
* @see \App\Http\Controllers\HeroSlideController::store
* @see app/Http/Controllers/HeroSlideController.php:111
* @route '/api/v1/hero-slides'
*/
const storefbf4730473b44e0be0e904c7fed2ac86 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storefbf4730473b44e0be0e904c7fed2ac86.url(options),
    method: 'post',
})

storefbf4730473b44e0be0e904c7fed2ac86.definition = {
    methods: ["post"],
    url: '/api/v1/hero-slides',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HeroSlideController::store
* @see app/Http/Controllers/HeroSlideController.php:111
* @route '/api/v1/hero-slides'
*/
storefbf4730473b44e0be0e904c7fed2ac86.url = (options?: RouteQueryOptions) => {




    return storefbf4730473b44e0be0e904c7fed2ac86.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::store
* @see app/Http/Controllers/HeroSlideController.php:111
* @route '/api/v1/hero-slides'
*/
storefbf4730473b44e0be0e904c7fed2ac86.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storefbf4730473b44e0be0e904c7fed2ac86.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::store
* @see app/Http/Controllers/HeroSlideController.php:111
* @route '/api/v1/hero-slides'
*/
const storefbf4730473b44e0be0e904c7fed2ac86Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storefbf4730473b44e0be0e904c7fed2ac86.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::store
* @see app/Http/Controllers/HeroSlideController.php:111
* @route '/api/v1/hero-slides'
*/
storefbf4730473b44e0be0e904c7fed2ac86Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storefbf4730473b44e0be0e904c7fed2ac86.url(options),
    method: 'post',
})

storefbf4730473b44e0be0e904c7fed2ac86.form = storefbf4730473b44e0be0e904c7fed2ac86Form
/**
* @see \App\Http\Controllers\HeroSlideController::store
* @see app/Http/Controllers/HeroSlideController.php:111
* @route '/hero-slides'
*/
const storeec49b9152593a5fbf5bfbaf5d91e9f40 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeec49b9152593a5fbf5bfbaf5d91e9f40.url(options),
    method: 'post',
})

storeec49b9152593a5fbf5bfbaf5d91e9f40.definition = {
    methods: ["post"],
    url: '/hero-slides',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HeroSlideController::store
* @see app/Http/Controllers/HeroSlideController.php:111
* @route '/hero-slides'
*/
storeec49b9152593a5fbf5bfbaf5d91e9f40.url = (options?: RouteQueryOptions) => {




    return storeec49b9152593a5fbf5bfbaf5d91e9f40.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::store
* @see app/Http/Controllers/HeroSlideController.php:111
* @route '/hero-slides'
*/
storeec49b9152593a5fbf5bfbaf5d91e9f40.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeec49b9152593a5fbf5bfbaf5d91e9f40.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::store
* @see app/Http/Controllers/HeroSlideController.php:111
* @route '/hero-slides'
*/
const storeec49b9152593a5fbf5bfbaf5d91e9f40Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeec49b9152593a5fbf5bfbaf5d91e9f40.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::store
* @see app/Http/Controllers/HeroSlideController.php:111
* @route '/hero-slides'
*/
storeec49b9152593a5fbf5bfbaf5d91e9f40Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeec49b9152593a5fbf5bfbaf5d91e9f40.url(options),
    method: 'post',
})

storeec49b9152593a5fbf5bfbaf5d91e9f40.form = storeec49b9152593a5fbf5bfbaf5d91e9f40Form

export const store = {
    '/api/v1/hero-slides': storefbf4730473b44e0be0e904c7fed2ac86,
    '/hero-slides': storeec49b9152593a5fbf5bfbaf5d91e9f40,
}


/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/api/v1/hero-slides/{heroSlide}'
*/
const editb79bf15440235634d001595778a2f7ed = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editb79bf15440235634d001595778a2f7ed.url(args, options),
    method: 'get',
})

editb79bf15440235634d001595778a2f7ed.definition = {
    methods: ["get","head"],
    url: '/api/v1/hero-slides/{heroSlide}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/api/v1/hero-slides/{heroSlide}'
*/
editb79bf15440235634d001595778a2f7ed.url = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { heroSlide: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { heroSlide: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            heroSlide: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        heroSlide: typeof args.heroSlide === 'object'
        ? args.heroSlide.id
        : args.heroSlide,
    }

    return editb79bf15440235634d001595778a2f7ed.definition.url
            .replace('{heroSlide}', parsedArgs.heroSlide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/api/v1/hero-slides/{heroSlide}'
*/
editb79bf15440235634d001595778a2f7ed.get = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editb79bf15440235634d001595778a2f7ed.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/api/v1/hero-slides/{heroSlide}'
*/
editb79bf15440235634d001595778a2f7ed.head = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editb79bf15440235634d001595778a2f7ed.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/api/v1/hero-slides/{heroSlide}'
*/
const editb79bf15440235634d001595778a2f7edForm = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editb79bf15440235634d001595778a2f7ed.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/api/v1/hero-slides/{heroSlide}'
*/
editb79bf15440235634d001595778a2f7edForm.get = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editb79bf15440235634d001595778a2f7ed.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/api/v1/hero-slides/{heroSlide}'
*/
editb79bf15440235634d001595778a2f7edForm.head = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editb79bf15440235634d001595778a2f7ed.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

editb79bf15440235634d001595778a2f7ed.form = editb79bf15440235634d001595778a2f7edForm
/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/hero-slides/{heroSlide}/edit'
*/
const editb7299864d1a52b40dfb0a880e0de57be = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editb7299864d1a52b40dfb0a880e0de57be.url(args, options),
    method: 'get',
})

editb7299864d1a52b40dfb0a880e0de57be.definition = {
    methods: ["get","head"],
    url: '/hero-slides/{heroSlide}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/hero-slides/{heroSlide}/edit'
*/
editb7299864d1a52b40dfb0a880e0de57be.url = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { heroSlide: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { heroSlide: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            heroSlide: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        heroSlide: typeof args.heroSlide === 'object'
        ? args.heroSlide.id
        : args.heroSlide,
    }

    return editb7299864d1a52b40dfb0a880e0de57be.definition.url
            .replace('{heroSlide}', parsedArgs.heroSlide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/hero-slides/{heroSlide}/edit'
*/
editb7299864d1a52b40dfb0a880e0de57be.get = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editb7299864d1a52b40dfb0a880e0de57be.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/hero-slides/{heroSlide}/edit'
*/
editb7299864d1a52b40dfb0a880e0de57be.head = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editb7299864d1a52b40dfb0a880e0de57be.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/hero-slides/{heroSlide}/edit'
*/
const editb7299864d1a52b40dfb0a880e0de57beForm = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editb7299864d1a52b40dfb0a880e0de57be.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/hero-slides/{heroSlide}/edit'
*/
editb7299864d1a52b40dfb0a880e0de57beForm.get = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editb7299864d1a52b40dfb0a880e0de57be.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/hero-slides/{heroSlide}/edit'
*/
editb7299864d1a52b40dfb0a880e0de57beForm.head = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editb7299864d1a52b40dfb0a880e0de57be.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

editb7299864d1a52b40dfb0a880e0de57be.form = editb7299864d1a52b40dfb0a880e0de57beForm

export const edit = {
    '/api/v1/hero-slides/{heroSlide}': editb79bf15440235634d001595778a2f7ed,
    '/hero-slides/{heroSlide}/edit': editb7299864d1a52b40dfb0a880e0de57be,
}


/**
* @see \App\Http\Controllers\HeroSlideController::update
* @see app/Http/Controllers/HeroSlideController.php:151
* @route '/api/v1/hero-slides/{heroSlide}'
*/
const updateb79bf15440235634d001595778a2f7ed = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateb79bf15440235634d001595778a2f7ed.url(args, options),
    method: 'put',
})

updateb79bf15440235634d001595778a2f7ed.definition = {
    methods: ["put"],
    url: '/api/v1/hero-slides/{heroSlide}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\HeroSlideController::update
* @see app/Http/Controllers/HeroSlideController.php:151
* @route '/api/v1/hero-slides/{heroSlide}'
*/
updateb79bf15440235634d001595778a2f7ed.url = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { heroSlide: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { heroSlide: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            heroSlide: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        heroSlide: typeof args.heroSlide === 'object'
        ? args.heroSlide.id
        : args.heroSlide,
    }

    return updateb79bf15440235634d001595778a2f7ed.definition.url
            .replace('{heroSlide}', parsedArgs.heroSlide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::update
* @see app/Http/Controllers/HeroSlideController.php:151
* @route '/api/v1/hero-slides/{heroSlide}'
*/
updateb79bf15440235634d001595778a2f7ed.put = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateb79bf15440235634d001595778a2f7ed.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\HeroSlideController::update
* @see app/Http/Controllers/HeroSlideController.php:151
* @route '/api/v1/hero-slides/{heroSlide}'
*/
const updateb79bf15440235634d001595778a2f7edForm = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateb79bf15440235634d001595778a2f7ed.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::update
* @see app/Http/Controllers/HeroSlideController.php:151
* @route '/api/v1/hero-slides/{heroSlide}'
*/
updateb79bf15440235634d001595778a2f7edForm.put = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateb79bf15440235634d001595778a2f7ed.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateb79bf15440235634d001595778a2f7ed.form = updateb79bf15440235634d001595778a2f7edForm
/**
* @see \App\Http\Controllers\HeroSlideController::update
* @see app/Http/Controllers/HeroSlideController.php:151
* @route '/hero-slides/{heroSlide}'
*/
const update9002a35e22b4884599a7d76a82a782ff = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update9002a35e22b4884599a7d76a82a782ff.url(args, options),
    method: 'patch',
})

update9002a35e22b4884599a7d76a82a782ff.definition = {
    methods: ["patch"],
    url: '/hero-slides/{heroSlide}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\HeroSlideController::update
* @see app/Http/Controllers/HeroSlideController.php:151
* @route '/hero-slides/{heroSlide}'
*/
update9002a35e22b4884599a7d76a82a782ff.url = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { heroSlide: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { heroSlide: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            heroSlide: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        heroSlide: typeof args.heroSlide === 'object'
        ? args.heroSlide.id
        : args.heroSlide,
    }

    return update9002a35e22b4884599a7d76a82a782ff.definition.url
            .replace('{heroSlide}', parsedArgs.heroSlide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::update
* @see app/Http/Controllers/HeroSlideController.php:151
* @route '/hero-slides/{heroSlide}'
*/
update9002a35e22b4884599a7d76a82a782ff.patch = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update9002a35e22b4884599a7d76a82a782ff.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\HeroSlideController::update
* @see app/Http/Controllers/HeroSlideController.php:151
* @route '/hero-slides/{heroSlide}'
*/
const update9002a35e22b4884599a7d76a82a782ffForm = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update9002a35e22b4884599a7d76a82a782ff.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::update
* @see app/Http/Controllers/HeroSlideController.php:151
* @route '/hero-slides/{heroSlide}'
*/
update9002a35e22b4884599a7d76a82a782ffForm.patch = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update9002a35e22b4884599a7d76a82a782ff.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update9002a35e22b4884599a7d76a82a782ff.form = update9002a35e22b4884599a7d76a82a782ffForm

export const update = {
    '/api/v1/hero-slides/{heroSlide}': updateb79bf15440235634d001595778a2f7ed,
    '/hero-slides/{heroSlide}': update9002a35e22b4884599a7d76a82a782ff,
}


/**
* @see \App\Http\Controllers\HeroSlideController::destroy
* @see app/Http/Controllers/HeroSlideController.php:213
* @route '/api/v1/hero-slides/{heroSlide}'
*/
const destroyb79bf15440235634d001595778a2f7ed = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyb79bf15440235634d001595778a2f7ed.url(args, options),
    method: 'delete',
})

destroyb79bf15440235634d001595778a2f7ed.definition = {
    methods: ["delete"],
    url: '/api/v1/hero-slides/{heroSlide}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HeroSlideController::destroy
* @see app/Http/Controllers/HeroSlideController.php:213
* @route '/api/v1/hero-slides/{heroSlide}'
*/
destroyb79bf15440235634d001595778a2f7ed.url = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { heroSlide: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { heroSlide: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            heroSlide: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        heroSlide: typeof args.heroSlide === 'object'
        ? args.heroSlide.id
        : args.heroSlide,
    }

    return destroyb79bf15440235634d001595778a2f7ed.definition.url
            .replace('{heroSlide}', parsedArgs.heroSlide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::destroy
* @see app/Http/Controllers/HeroSlideController.php:213
* @route '/api/v1/hero-slides/{heroSlide}'
*/
destroyb79bf15440235634d001595778a2f7ed.delete = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyb79bf15440235634d001595778a2f7ed.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\HeroSlideController::destroy
* @see app/Http/Controllers/HeroSlideController.php:213
* @route '/api/v1/hero-slides/{heroSlide}'
*/
const destroyb79bf15440235634d001595778a2f7edForm = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyb79bf15440235634d001595778a2f7ed.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::destroy
* @see app/Http/Controllers/HeroSlideController.php:213
* @route '/api/v1/hero-slides/{heroSlide}'
*/
destroyb79bf15440235634d001595778a2f7edForm.delete = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyb79bf15440235634d001595778a2f7ed.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyb79bf15440235634d001595778a2f7ed.form = destroyb79bf15440235634d001595778a2f7edForm
/**
* @see \App\Http\Controllers\HeroSlideController::destroy
* @see app/Http/Controllers/HeroSlideController.php:213
* @route '/hero-slides/{heroSlide}'
*/
const destroy9002a35e22b4884599a7d76a82a782ff = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy9002a35e22b4884599a7d76a82a782ff.url(args, options),
    method: 'delete',
})

destroy9002a35e22b4884599a7d76a82a782ff.definition = {
    methods: ["delete"],
    url: '/hero-slides/{heroSlide}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HeroSlideController::destroy
* @see app/Http/Controllers/HeroSlideController.php:213
* @route '/hero-slides/{heroSlide}'
*/
destroy9002a35e22b4884599a7d76a82a782ff.url = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { heroSlide: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { heroSlide: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            heroSlide: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        heroSlide: typeof args.heroSlide === 'object'
        ? args.heroSlide.id
        : args.heroSlide,
    }

    return destroy9002a35e22b4884599a7d76a82a782ff.definition.url
            .replace('{heroSlide}', parsedArgs.heroSlide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::destroy
* @see app/Http/Controllers/HeroSlideController.php:213
* @route '/hero-slides/{heroSlide}'
*/
destroy9002a35e22b4884599a7d76a82a782ff.delete = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy9002a35e22b4884599a7d76a82a782ff.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\HeroSlideController::destroy
* @see app/Http/Controllers/HeroSlideController.php:213
* @route '/hero-slides/{heroSlide}'
*/
const destroy9002a35e22b4884599a7d76a82a782ffForm = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy9002a35e22b4884599a7d76a82a782ff.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::destroy
* @see app/Http/Controllers/HeroSlideController.php:213
* @route '/hero-slides/{heroSlide}'
*/
destroy9002a35e22b4884599a7d76a82a782ffForm.delete = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy9002a35e22b4884599a7d76a82a782ff.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy9002a35e22b4884599a7d76a82a782ff.form = destroy9002a35e22b4884599a7d76a82a782ffForm

export const destroy = {
    '/api/v1/hero-slides/{heroSlide}': destroyb79bf15440235634d001595778a2f7ed,
    '/hero-slides/{heroSlide}': destroy9002a35e22b4884599a7d76a82a782ff,
}


/**
* @see \App\Http\Controllers\HeroSlideController::toggle
* @see app/Http/Controllers/HeroSlideController.php:171
* @route '/api/v1/hero-slides/{heroSlide}/toggle'
*/
const toggle6b52fb6c6fd5f707530f78b6b9eb8087 = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle6b52fb6c6fd5f707530f78b6b9eb8087.url(args, options),
    method: 'patch',
})

toggle6b52fb6c6fd5f707530f78b6b9eb8087.definition = {
    methods: ["patch"],
    url: '/api/v1/hero-slides/{heroSlide}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\HeroSlideController::toggle
* @see app/Http/Controllers/HeroSlideController.php:171
* @route '/api/v1/hero-slides/{heroSlide}/toggle'
*/
toggle6b52fb6c6fd5f707530f78b6b9eb8087.url = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { heroSlide: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { heroSlide: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            heroSlide: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        heroSlide: typeof args.heroSlide === 'object'
        ? args.heroSlide.id
        : args.heroSlide,
    }

    return toggle6b52fb6c6fd5f707530f78b6b9eb8087.definition.url
            .replace('{heroSlide}', parsedArgs.heroSlide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::toggle
* @see app/Http/Controllers/HeroSlideController.php:171
* @route '/api/v1/hero-slides/{heroSlide}/toggle'
*/
toggle6b52fb6c6fd5f707530f78b6b9eb8087.patch = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle6b52fb6c6fd5f707530f78b6b9eb8087.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\HeroSlideController::toggle
* @see app/Http/Controllers/HeroSlideController.php:171
* @route '/api/v1/hero-slides/{heroSlide}/toggle'
*/
const toggle6b52fb6c6fd5f707530f78b6b9eb8087Form = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle6b52fb6c6fd5f707530f78b6b9eb8087.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::toggle
* @see app/Http/Controllers/HeroSlideController.php:171
* @route '/api/v1/hero-slides/{heroSlide}/toggle'
*/
toggle6b52fb6c6fd5f707530f78b6b9eb8087Form.patch = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle6b52fb6c6fd5f707530f78b6b9eb8087.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggle6b52fb6c6fd5f707530f78b6b9eb8087.form = toggle6b52fb6c6fd5f707530f78b6b9eb8087Form
/**
* @see \App\Http\Controllers\HeroSlideController::toggle
* @see app/Http/Controllers/HeroSlideController.php:171
* @route '/hero-slides/{heroSlide}/toggle'
*/
const toggle659113103eda4e16c7202a58c9c31c8f = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle659113103eda4e16c7202a58c9c31c8f.url(args, options),
    method: 'patch',
})

toggle659113103eda4e16c7202a58c9c31c8f.definition = {
    methods: ["patch"],
    url: '/hero-slides/{heroSlide}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\HeroSlideController::toggle
* @see app/Http/Controllers/HeroSlideController.php:171
* @route '/hero-slides/{heroSlide}/toggle'
*/
toggle659113103eda4e16c7202a58c9c31c8f.url = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { heroSlide: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { heroSlide: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            heroSlide: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        heroSlide: typeof args.heroSlide === 'object'
        ? args.heroSlide.id
        : args.heroSlide,
    }

    return toggle659113103eda4e16c7202a58c9c31c8f.definition.url
            .replace('{heroSlide}', parsedArgs.heroSlide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::toggle
* @see app/Http/Controllers/HeroSlideController.php:171
* @route '/hero-slides/{heroSlide}/toggle'
*/
toggle659113103eda4e16c7202a58c9c31c8f.patch = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle659113103eda4e16c7202a58c9c31c8f.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\HeroSlideController::toggle
* @see app/Http/Controllers/HeroSlideController.php:171
* @route '/hero-slides/{heroSlide}/toggle'
*/
const toggle659113103eda4e16c7202a58c9c31c8fForm = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle659113103eda4e16c7202a58c9c31c8f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::toggle
* @see app/Http/Controllers/HeroSlideController.php:171
* @route '/hero-slides/{heroSlide}/toggle'
*/
toggle659113103eda4e16c7202a58c9c31c8fForm.patch = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle659113103eda4e16c7202a58c9c31c8f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggle659113103eda4e16c7202a58c9c31c8f.form = toggle659113103eda4e16c7202a58c9c31c8fForm

export const toggle = {
    '/api/v1/hero-slides/{heroSlide}/toggle': toggle6b52fb6c6fd5f707530f78b6b9eb8087,
    '/hero-slides/{heroSlide}/toggle': toggle659113103eda4e16c7202a58c9c31c8f,
}


/**
* @see \App\Http\Controllers\HeroSlideController::reorder
* @see app/Http/Controllers/HeroSlideController.php:190
* @route '/api/v1/hero-slides/reorder'
*/
const reorder534031ab9bfad1bc4e29786313df6c2d = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder534031ab9bfad1bc4e29786313df6c2d.url(options),
    method: 'post',
})

reorder534031ab9bfad1bc4e29786313df6c2d.definition = {
    methods: ["post"],
    url: '/api/v1/hero-slides/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HeroSlideController::reorder
* @see app/Http/Controllers/HeroSlideController.php:190
* @route '/api/v1/hero-slides/reorder'
*/
reorder534031ab9bfad1bc4e29786313df6c2d.url = (options?: RouteQueryOptions) => {




    return reorder534031ab9bfad1bc4e29786313df6c2d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::reorder
* @see app/Http/Controllers/HeroSlideController.php:190
* @route '/api/v1/hero-slides/reorder'
*/
reorder534031ab9bfad1bc4e29786313df6c2d.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder534031ab9bfad1bc4e29786313df6c2d.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::reorder
* @see app/Http/Controllers/HeroSlideController.php:190
* @route '/api/v1/hero-slides/reorder'
*/
const reorder534031ab9bfad1bc4e29786313df6c2dForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder534031ab9bfad1bc4e29786313df6c2d.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::reorder
* @see app/Http/Controllers/HeroSlideController.php:190
* @route '/api/v1/hero-slides/reorder'
*/
reorder534031ab9bfad1bc4e29786313df6c2dForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder534031ab9bfad1bc4e29786313df6c2d.url(options),
    method: 'post',
})

reorder534031ab9bfad1bc4e29786313df6c2d.form = reorder534031ab9bfad1bc4e29786313df6c2dForm
/**
* @see \App\Http\Controllers\HeroSlideController::reorder
* @see app/Http/Controllers/HeroSlideController.php:190
* @route '/hero-slides/reorder'
*/
const reorder772b194da0eece36ff4f786b20183267 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder772b194da0eece36ff4f786b20183267.url(options),
    method: 'post',
})

reorder772b194da0eece36ff4f786b20183267.definition = {
    methods: ["post"],
    url: '/hero-slides/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HeroSlideController::reorder
* @see app/Http/Controllers/HeroSlideController.php:190
* @route '/hero-slides/reorder'
*/
reorder772b194da0eece36ff4f786b20183267.url = (options?: RouteQueryOptions) => {




    return reorder772b194da0eece36ff4f786b20183267.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::reorder
* @see app/Http/Controllers/HeroSlideController.php:190
* @route '/hero-slides/reorder'
*/
reorder772b194da0eece36ff4f786b20183267.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder772b194da0eece36ff4f786b20183267.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::reorder
* @see app/Http/Controllers/HeroSlideController.php:190
* @route '/hero-slides/reorder'
*/
const reorder772b194da0eece36ff4f786b20183267Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder772b194da0eece36ff4f786b20183267.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::reorder
* @see app/Http/Controllers/HeroSlideController.php:190
* @route '/hero-slides/reorder'
*/
reorder772b194da0eece36ff4f786b20183267Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder772b194da0eece36ff4f786b20183267.url(options),
    method: 'post',
})

reorder772b194da0eece36ff4f786b20183267.form = reorder772b194da0eece36ff4f786b20183267Form

export const reorder = {
    '/api/v1/hero-slides/reorder': reorder534031ab9bfad1bc4e29786313df6c2d,
    '/hero-slides/reorder': reorder772b194da0eece36ff4f786b20183267,
}


const HeroSlideController = { index, create, store, edit, update, destroy, toggle, reorder }

export default HeroSlideController