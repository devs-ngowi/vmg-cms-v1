import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ServiceController::index
* @see app/Http/Controllers/ServiceController.php:163
* @route '/api/v1/services'
*/
const indexcfbf357e8dab34d03e28bc679427f990 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexcfbf357e8dab34d03e28bc679427f990.url(options),
    method: 'get',
})

indexcfbf357e8dab34d03e28bc679427f990.definition = {
    methods: ["get","head"],
    url: '/api/v1/services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServiceController::index
* @see app/Http/Controllers/ServiceController.php:163
* @route '/api/v1/services'
*/
indexcfbf357e8dab34d03e28bc679427f990.url = (options?: RouteQueryOptions) => {




    return indexcfbf357e8dab34d03e28bc679427f990.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServiceController::index
* @see app/Http/Controllers/ServiceController.php:163
* @route '/api/v1/services'
*/
indexcfbf357e8dab34d03e28bc679427f990.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexcfbf357e8dab34d03e28bc679427f990.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::index
* @see app/Http/Controllers/ServiceController.php:163
* @route '/api/v1/services'
*/
indexcfbf357e8dab34d03e28bc679427f990.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexcfbf357e8dab34d03e28bc679427f990.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServiceController::index
* @see app/Http/Controllers/ServiceController.php:163
* @route '/api/v1/services'
*/
const indexcfbf357e8dab34d03e28bc679427f990Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexcfbf357e8dab34d03e28bc679427f990.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::index
* @see app/Http/Controllers/ServiceController.php:163
* @route '/api/v1/services'
*/
indexcfbf357e8dab34d03e28bc679427f990Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexcfbf357e8dab34d03e28bc679427f990.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::index
* @see app/Http/Controllers/ServiceController.php:163
* @route '/api/v1/services'
*/
indexcfbf357e8dab34d03e28bc679427f990Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexcfbf357e8dab34d03e28bc679427f990.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexcfbf357e8dab34d03e28bc679427f990.form = indexcfbf357e8dab34d03e28bc679427f990Form
/**
* @see \App\Http\Controllers\ServiceController::index
* @see app/Http/Controllers/ServiceController.php:163
* @route '/services'
*/
const indexbbee0fd5659320176905772cd001770a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexbbee0fd5659320176905772cd001770a.url(options),
    method: 'get',
})

indexbbee0fd5659320176905772cd001770a.definition = {
    methods: ["get","head"],
    url: '/services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServiceController::index
* @see app/Http/Controllers/ServiceController.php:163
* @route '/services'
*/
indexbbee0fd5659320176905772cd001770a.url = (options?: RouteQueryOptions) => {




    return indexbbee0fd5659320176905772cd001770a.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServiceController::index
* @see app/Http/Controllers/ServiceController.php:163
* @route '/services'
*/
indexbbee0fd5659320176905772cd001770a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexbbee0fd5659320176905772cd001770a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::index
* @see app/Http/Controllers/ServiceController.php:163
* @route '/services'
*/
indexbbee0fd5659320176905772cd001770a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexbbee0fd5659320176905772cd001770a.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServiceController::index
* @see app/Http/Controllers/ServiceController.php:163
* @route '/services'
*/
const indexbbee0fd5659320176905772cd001770aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexbbee0fd5659320176905772cd001770a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::index
* @see app/Http/Controllers/ServiceController.php:163
* @route '/services'
*/
indexbbee0fd5659320176905772cd001770aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexbbee0fd5659320176905772cd001770a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::index
* @see app/Http/Controllers/ServiceController.php:163
* @route '/services'
*/
indexbbee0fd5659320176905772cd001770aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexbbee0fd5659320176905772cd001770a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexbbee0fd5659320176905772cd001770a.form = indexbbee0fd5659320176905772cd001770aForm

export const index = {
    '/api/v1/services': indexcfbf357e8dab34d03e28bc679427f990,
    '/services': indexbbee0fd5659320176905772cd001770a,
}


/**
* @see \App\Http\Controllers\ServiceController::show
* @see app/Http/Controllers/ServiceController.php:181
* @route '/api/v1/services/{slug}'
*/
export const show = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/services/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServiceController::show
* @see app/Http/Controllers/ServiceController.php:181
* @route '/api/v1/services/{slug}'
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
* @see \App\Http\Controllers\ServiceController::show
* @see app/Http/Controllers/ServiceController.php:181
* @route '/api/v1/services/{slug}'
*/
show.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::show
* @see app/Http/Controllers/ServiceController.php:181
* @route '/api/v1/services/{slug}'
*/
show.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServiceController::show
* @see app/Http/Controllers/ServiceController.php:181
* @route '/api/v1/services/{slug}'
*/
const showForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::show
* @see app/Http/Controllers/ServiceController.php:181
* @route '/api/v1/services/{slug}'
*/
showForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::show
* @see app/Http/Controllers/ServiceController.php:181
* @route '/api/v1/services/{slug}'
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
* @see \App\Http\Controllers\ServiceController::create
* @see app/Http/Controllers/ServiceController.php:199
* @route '/api/v1/services/create'
*/
const create40d52d9cd007934f4b8e75f58abc47c0 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create40d52d9cd007934f4b8e75f58abc47c0.url(options),
    method: 'get',
})

create40d52d9cd007934f4b8e75f58abc47c0.definition = {
    methods: ["get","head"],
    url: '/api/v1/services/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServiceController::create
* @see app/Http/Controllers/ServiceController.php:199
* @route '/api/v1/services/create'
*/
create40d52d9cd007934f4b8e75f58abc47c0.url = (options?: RouteQueryOptions) => {




    return create40d52d9cd007934f4b8e75f58abc47c0.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServiceController::create
* @see app/Http/Controllers/ServiceController.php:199
* @route '/api/v1/services/create'
*/
create40d52d9cd007934f4b8e75f58abc47c0.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create40d52d9cd007934f4b8e75f58abc47c0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::create
* @see app/Http/Controllers/ServiceController.php:199
* @route '/api/v1/services/create'
*/
create40d52d9cd007934f4b8e75f58abc47c0.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create40d52d9cd007934f4b8e75f58abc47c0.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServiceController::create
* @see app/Http/Controllers/ServiceController.php:199
* @route '/api/v1/services/create'
*/
const create40d52d9cd007934f4b8e75f58abc47c0Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create40d52d9cd007934f4b8e75f58abc47c0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::create
* @see app/Http/Controllers/ServiceController.php:199
* @route '/api/v1/services/create'
*/
create40d52d9cd007934f4b8e75f58abc47c0Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create40d52d9cd007934f4b8e75f58abc47c0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::create
* @see app/Http/Controllers/ServiceController.php:199
* @route '/api/v1/services/create'
*/
create40d52d9cd007934f4b8e75f58abc47c0Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create40d52d9cd007934f4b8e75f58abc47c0.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create40d52d9cd007934f4b8e75f58abc47c0.form = create40d52d9cd007934f4b8e75f58abc47c0Form
/**
* @see \App\Http\Controllers\ServiceController::create
* @see app/Http/Controllers/ServiceController.php:199
* @route '/services/create'
*/
const createe3e693cb1537414d2055c5fff81899c0 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createe3e693cb1537414d2055c5fff81899c0.url(options),
    method: 'get',
})

createe3e693cb1537414d2055c5fff81899c0.definition = {
    methods: ["get","head"],
    url: '/services/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServiceController::create
* @see app/Http/Controllers/ServiceController.php:199
* @route '/services/create'
*/
createe3e693cb1537414d2055c5fff81899c0.url = (options?: RouteQueryOptions) => {




    return createe3e693cb1537414d2055c5fff81899c0.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServiceController::create
* @see app/Http/Controllers/ServiceController.php:199
* @route '/services/create'
*/
createe3e693cb1537414d2055c5fff81899c0.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createe3e693cb1537414d2055c5fff81899c0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::create
* @see app/Http/Controllers/ServiceController.php:199
* @route '/services/create'
*/
createe3e693cb1537414d2055c5fff81899c0.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: createe3e693cb1537414d2055c5fff81899c0.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServiceController::create
* @see app/Http/Controllers/ServiceController.php:199
* @route '/services/create'
*/
const createe3e693cb1537414d2055c5fff81899c0Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createe3e693cb1537414d2055c5fff81899c0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::create
* @see app/Http/Controllers/ServiceController.php:199
* @route '/services/create'
*/
createe3e693cb1537414d2055c5fff81899c0Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createe3e693cb1537414d2055c5fff81899c0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::create
* @see app/Http/Controllers/ServiceController.php:199
* @route '/services/create'
*/
createe3e693cb1537414d2055c5fff81899c0Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createe3e693cb1537414d2055c5fff81899c0.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

createe3e693cb1537414d2055c5fff81899c0.form = createe3e693cb1537414d2055c5fff81899c0Form

export const create = {
    '/api/v1/services/create': create40d52d9cd007934f4b8e75f58abc47c0,
    '/services/create': createe3e693cb1537414d2055c5fff81899c0,
}


/**
* @see \App\Http\Controllers\ServiceController::store
* @see app/Http/Controllers/ServiceController.php:206
* @route '/api/v1/services'
*/
const storecfbf357e8dab34d03e28bc679427f990 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storecfbf357e8dab34d03e28bc679427f990.url(options),
    method: 'post',
})

storecfbf357e8dab34d03e28bc679427f990.definition = {
    methods: ["post"],
    url: '/api/v1/services',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ServiceController::store
* @see app/Http/Controllers/ServiceController.php:206
* @route '/api/v1/services'
*/
storecfbf357e8dab34d03e28bc679427f990.url = (options?: RouteQueryOptions) => {




    return storecfbf357e8dab34d03e28bc679427f990.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServiceController::store
* @see app/Http/Controllers/ServiceController.php:206
* @route '/api/v1/services'
*/
storecfbf357e8dab34d03e28bc679427f990.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storecfbf357e8dab34d03e28bc679427f990.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ServiceController::store
* @see app/Http/Controllers/ServiceController.php:206
* @route '/api/v1/services'
*/
const storecfbf357e8dab34d03e28bc679427f990Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storecfbf357e8dab34d03e28bc679427f990.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ServiceController::store
* @see app/Http/Controllers/ServiceController.php:206
* @route '/api/v1/services'
*/
storecfbf357e8dab34d03e28bc679427f990Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storecfbf357e8dab34d03e28bc679427f990.url(options),
    method: 'post',
})

storecfbf357e8dab34d03e28bc679427f990.form = storecfbf357e8dab34d03e28bc679427f990Form
/**
* @see \App\Http\Controllers\ServiceController::store
* @see app/Http/Controllers/ServiceController.php:206
* @route '/services'
*/
const storebbee0fd5659320176905772cd001770a = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storebbee0fd5659320176905772cd001770a.url(options),
    method: 'post',
})

storebbee0fd5659320176905772cd001770a.definition = {
    methods: ["post"],
    url: '/services',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ServiceController::store
* @see app/Http/Controllers/ServiceController.php:206
* @route '/services'
*/
storebbee0fd5659320176905772cd001770a.url = (options?: RouteQueryOptions) => {




    return storebbee0fd5659320176905772cd001770a.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServiceController::store
* @see app/Http/Controllers/ServiceController.php:206
* @route '/services'
*/
storebbee0fd5659320176905772cd001770a.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storebbee0fd5659320176905772cd001770a.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ServiceController::store
* @see app/Http/Controllers/ServiceController.php:206
* @route '/services'
*/
const storebbee0fd5659320176905772cd001770aForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storebbee0fd5659320176905772cd001770a.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ServiceController::store
* @see app/Http/Controllers/ServiceController.php:206
* @route '/services'
*/
storebbee0fd5659320176905772cd001770aForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storebbee0fd5659320176905772cd001770a.url(options),
    method: 'post',
})

storebbee0fd5659320176905772cd001770a.form = storebbee0fd5659320176905772cd001770aForm

export const store = {
    '/api/v1/services': storecfbf357e8dab34d03e28bc679427f990,
    '/services': storebbee0fd5659320176905772cd001770a,
}


/**
* @see \App\Http\Controllers\ServiceController::edit
* @see app/Http/Controllers/ServiceController.php:276
* @route '/api/v1/services/{service}'
*/
const edit95d35ec76f29384dc016b3986dce57b1 = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit95d35ec76f29384dc016b3986dce57b1.url(args, options),
    method: 'get',
})

edit95d35ec76f29384dc016b3986dce57b1.definition = {
    methods: ["get","head"],
    url: '/api/v1/services/{service}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServiceController::edit
* @see app/Http/Controllers/ServiceController.php:276
* @route '/api/v1/services/{service}'
*/
edit95d35ec76f29384dc016b3986dce57b1.url = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { service: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            service: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        service: typeof args.service === 'object'
        ? args.service.id
        : args.service,
    }

    return edit95d35ec76f29384dc016b3986dce57b1.definition.url
            .replace('{service}', parsedArgs.service.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServiceController::edit
* @see app/Http/Controllers/ServiceController.php:276
* @route '/api/v1/services/{service}'
*/
edit95d35ec76f29384dc016b3986dce57b1.get = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit95d35ec76f29384dc016b3986dce57b1.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::edit
* @see app/Http/Controllers/ServiceController.php:276
* @route '/api/v1/services/{service}'
*/
edit95d35ec76f29384dc016b3986dce57b1.head = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit95d35ec76f29384dc016b3986dce57b1.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServiceController::edit
* @see app/Http/Controllers/ServiceController.php:276
* @route '/api/v1/services/{service}'
*/
const edit95d35ec76f29384dc016b3986dce57b1Form = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit95d35ec76f29384dc016b3986dce57b1.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::edit
* @see app/Http/Controllers/ServiceController.php:276
* @route '/api/v1/services/{service}'
*/
edit95d35ec76f29384dc016b3986dce57b1Form.get = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit95d35ec76f29384dc016b3986dce57b1.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::edit
* @see app/Http/Controllers/ServiceController.php:276
* @route '/api/v1/services/{service}'
*/
edit95d35ec76f29384dc016b3986dce57b1Form.head = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit95d35ec76f29384dc016b3986dce57b1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit95d35ec76f29384dc016b3986dce57b1.form = edit95d35ec76f29384dc016b3986dce57b1Form
/**
* @see \App\Http\Controllers\ServiceController::edit
* @see app/Http/Controllers/ServiceController.php:276
* @route '/services/{service}/edit'
*/
const edit0bf85072c0282cde0771804a80019346 = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit0bf85072c0282cde0771804a80019346.url(args, options),
    method: 'get',
})

edit0bf85072c0282cde0771804a80019346.definition = {
    methods: ["get","head"],
    url: '/services/{service}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ServiceController::edit
* @see app/Http/Controllers/ServiceController.php:276
* @route '/services/{service}/edit'
*/
edit0bf85072c0282cde0771804a80019346.url = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { service: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            service: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        service: typeof args.service === 'object'
        ? args.service.id
        : args.service,
    }

    return edit0bf85072c0282cde0771804a80019346.definition.url
            .replace('{service}', parsedArgs.service.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServiceController::edit
* @see app/Http/Controllers/ServiceController.php:276
* @route '/services/{service}/edit'
*/
edit0bf85072c0282cde0771804a80019346.get = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit0bf85072c0282cde0771804a80019346.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::edit
* @see app/Http/Controllers/ServiceController.php:276
* @route '/services/{service}/edit'
*/
edit0bf85072c0282cde0771804a80019346.head = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit0bf85072c0282cde0771804a80019346.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ServiceController::edit
* @see app/Http/Controllers/ServiceController.php:276
* @route '/services/{service}/edit'
*/
const edit0bf85072c0282cde0771804a80019346Form = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit0bf85072c0282cde0771804a80019346.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::edit
* @see app/Http/Controllers/ServiceController.php:276
* @route '/services/{service}/edit'
*/
edit0bf85072c0282cde0771804a80019346Form.get = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit0bf85072c0282cde0771804a80019346.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ServiceController::edit
* @see app/Http/Controllers/ServiceController.php:276
* @route '/services/{service}/edit'
*/
edit0bf85072c0282cde0771804a80019346Form.head = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit0bf85072c0282cde0771804a80019346.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit0bf85072c0282cde0771804a80019346.form = edit0bf85072c0282cde0771804a80019346Form

export const edit = {
    '/api/v1/services/{service}': edit95d35ec76f29384dc016b3986dce57b1,
    '/services/{service}/edit': edit0bf85072c0282cde0771804a80019346,
}


/**
* @see \App\Http\Controllers\ServiceController::update
* @see app/Http/Controllers/ServiceController.php:327
* @route '/api/v1/services/{service}'
*/
const update95d35ec76f29384dc016b3986dce57b1 = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update95d35ec76f29384dc016b3986dce57b1.url(args, options),
    method: 'put',
})

update95d35ec76f29384dc016b3986dce57b1.definition = {
    methods: ["put"],
    url: '/api/v1/services/{service}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ServiceController::update
* @see app/Http/Controllers/ServiceController.php:327
* @route '/api/v1/services/{service}'
*/
update95d35ec76f29384dc016b3986dce57b1.url = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { service: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            service: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        service: typeof args.service === 'object'
        ? args.service.id
        : args.service,
    }

    return update95d35ec76f29384dc016b3986dce57b1.definition.url
            .replace('{service}', parsedArgs.service.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServiceController::update
* @see app/Http/Controllers/ServiceController.php:327
* @route '/api/v1/services/{service}'
*/
update95d35ec76f29384dc016b3986dce57b1.put = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update95d35ec76f29384dc016b3986dce57b1.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ServiceController::update
* @see app/Http/Controllers/ServiceController.php:327
* @route '/api/v1/services/{service}'
*/
const update95d35ec76f29384dc016b3986dce57b1Form = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update95d35ec76f29384dc016b3986dce57b1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ServiceController::update
* @see app/Http/Controllers/ServiceController.php:327
* @route '/api/v1/services/{service}'
*/
update95d35ec76f29384dc016b3986dce57b1Form.put = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update95d35ec76f29384dc016b3986dce57b1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update95d35ec76f29384dc016b3986dce57b1.form = update95d35ec76f29384dc016b3986dce57b1Form
/**
* @see \App\Http\Controllers\ServiceController::update
* @see app/Http/Controllers/ServiceController.php:327
* @route '/services/{service}'
*/
const update000b2142c88a537855e36d5540b0e8ee = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update000b2142c88a537855e36d5540b0e8ee.url(args, options),
    method: 'patch',
})

update000b2142c88a537855e36d5540b0e8ee.definition = {
    methods: ["patch"],
    url: '/services/{service}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\ServiceController::update
* @see app/Http/Controllers/ServiceController.php:327
* @route '/services/{service}'
*/
update000b2142c88a537855e36d5540b0e8ee.url = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { service: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            service: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        service: typeof args.service === 'object'
        ? args.service.id
        : args.service,
    }

    return update000b2142c88a537855e36d5540b0e8ee.definition.url
            .replace('{service}', parsedArgs.service.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServiceController::update
* @see app/Http/Controllers/ServiceController.php:327
* @route '/services/{service}'
*/
update000b2142c88a537855e36d5540b0e8ee.patch = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update000b2142c88a537855e36d5540b0e8ee.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\ServiceController::update
* @see app/Http/Controllers/ServiceController.php:327
* @route '/services/{service}'
*/
const update000b2142c88a537855e36d5540b0e8eeForm = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update000b2142c88a537855e36d5540b0e8ee.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ServiceController::update
* @see app/Http/Controllers/ServiceController.php:327
* @route '/services/{service}'
*/
update000b2142c88a537855e36d5540b0e8eeForm.patch = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update000b2142c88a537855e36d5540b0e8ee.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update000b2142c88a537855e36d5540b0e8ee.form = update000b2142c88a537855e36d5540b0e8eeForm

export const update = {
    '/api/v1/services/{service}': update95d35ec76f29384dc016b3986dce57b1,
    '/services/{service}': update000b2142c88a537855e36d5540b0e8ee,
}


/**
* @see \App\Http\Controllers\ServiceController::destroy
* @see app/Http/Controllers/ServiceController.php:451
* @route '/api/v1/services/{service}'
*/
const destroy95d35ec76f29384dc016b3986dce57b1 = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy95d35ec76f29384dc016b3986dce57b1.url(args, options),
    method: 'delete',
})

destroy95d35ec76f29384dc016b3986dce57b1.definition = {
    methods: ["delete"],
    url: '/api/v1/services/{service}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ServiceController::destroy
* @see app/Http/Controllers/ServiceController.php:451
* @route '/api/v1/services/{service}'
*/
destroy95d35ec76f29384dc016b3986dce57b1.url = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { service: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            service: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        service: typeof args.service === 'object'
        ? args.service.id
        : args.service,
    }

    return destroy95d35ec76f29384dc016b3986dce57b1.definition.url
            .replace('{service}', parsedArgs.service.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServiceController::destroy
* @see app/Http/Controllers/ServiceController.php:451
* @route '/api/v1/services/{service}'
*/
destroy95d35ec76f29384dc016b3986dce57b1.delete = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy95d35ec76f29384dc016b3986dce57b1.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ServiceController::destroy
* @see app/Http/Controllers/ServiceController.php:451
* @route '/api/v1/services/{service}'
*/
const destroy95d35ec76f29384dc016b3986dce57b1Form = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy95d35ec76f29384dc016b3986dce57b1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ServiceController::destroy
* @see app/Http/Controllers/ServiceController.php:451
* @route '/api/v1/services/{service}'
*/
destroy95d35ec76f29384dc016b3986dce57b1Form.delete = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy95d35ec76f29384dc016b3986dce57b1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy95d35ec76f29384dc016b3986dce57b1.form = destroy95d35ec76f29384dc016b3986dce57b1Form
/**
* @see \App\Http\Controllers\ServiceController::destroy
* @see app/Http/Controllers/ServiceController.php:451
* @route '/services/{service}'
*/
const destroy000b2142c88a537855e36d5540b0e8ee = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy000b2142c88a537855e36d5540b0e8ee.url(args, options),
    method: 'delete',
})

destroy000b2142c88a537855e36d5540b0e8ee.definition = {
    methods: ["delete"],
    url: '/services/{service}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ServiceController::destroy
* @see app/Http/Controllers/ServiceController.php:451
* @route '/services/{service}'
*/
destroy000b2142c88a537855e36d5540b0e8ee.url = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { service: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            service: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        service: typeof args.service === 'object'
        ? args.service.id
        : args.service,
    }

    return destroy000b2142c88a537855e36d5540b0e8ee.definition.url
            .replace('{service}', parsedArgs.service.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ServiceController::destroy
* @see app/Http/Controllers/ServiceController.php:451
* @route '/services/{service}'
*/
destroy000b2142c88a537855e36d5540b0e8ee.delete = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy000b2142c88a537855e36d5540b0e8ee.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ServiceController::destroy
* @see app/Http/Controllers/ServiceController.php:451
* @route '/services/{service}'
*/
const destroy000b2142c88a537855e36d5540b0e8eeForm = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy000b2142c88a537855e36d5540b0e8ee.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ServiceController::destroy
* @see app/Http/Controllers/ServiceController.php:451
* @route '/services/{service}'
*/
destroy000b2142c88a537855e36d5540b0e8eeForm.delete = (args: { service: string | number | { id: string | number } } | [service: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy000b2142c88a537855e36d5540b0e8ee.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy000b2142c88a537855e36d5540b0e8ee.form = destroy000b2142c88a537855e36d5540b0e8eeForm

export const destroy = {
    '/api/v1/services/{service}': destroy95d35ec76f29384dc016b3986dce57b1,
    '/services/{service}': destroy000b2142c88a537855e36d5540b0e8ee,
}


const ServiceController = { index, show, create, store, edit, update, destroy }

export default ServiceController