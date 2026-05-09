import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ProjectController::index
* @see app/Http/Controllers/ProjectController.php:164
* @route '/api/v1/projects'
*/
const index116416e499131727388aa88905bf71a8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index116416e499131727388aa88905bf71a8.url(options),
    method: 'get',
})

index116416e499131727388aa88905bf71a8.definition = {
    methods: ["get","head"],
    url: '/api/v1/projects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProjectController::index
* @see app/Http/Controllers/ProjectController.php:164
* @route '/api/v1/projects'
*/
index116416e499131727388aa88905bf71a8.url = (options?: RouteQueryOptions) => {
    return index116416e499131727388aa88905bf71a8.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::index
* @see app/Http/Controllers/ProjectController.php:164
* @route '/api/v1/projects'
*/
index116416e499131727388aa88905bf71a8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index116416e499131727388aa88905bf71a8.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::index
* @see app/Http/Controllers/ProjectController.php:164
* @route '/api/v1/projects'
*/
index116416e499131727388aa88905bf71a8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index116416e499131727388aa88905bf71a8.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProjectController::index
* @see app/Http/Controllers/ProjectController.php:164
* @route '/api/v1/projects'
*/
const index116416e499131727388aa88905bf71a8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index116416e499131727388aa88905bf71a8.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::index
* @see app/Http/Controllers/ProjectController.php:164
* @route '/api/v1/projects'
*/
index116416e499131727388aa88905bf71a8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index116416e499131727388aa88905bf71a8.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::index
* @see app/Http/Controllers/ProjectController.php:164
* @route '/api/v1/projects'
*/
index116416e499131727388aa88905bf71a8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index116416e499131727388aa88905bf71a8.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index116416e499131727388aa88905bf71a8.form = index116416e499131727388aa88905bf71a8Form
/**
* @see \App\Http\Controllers\ProjectController::index
* @see app/Http/Controllers/ProjectController.php:164
* @route '/projects'
*/
const index8f35706c95c06c991312479b995e49d2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index8f35706c95c06c991312479b995e49d2.url(options),
    method: 'get',
})

index8f35706c95c06c991312479b995e49d2.definition = {
    methods: ["get","head"],
    url: '/projects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProjectController::index
* @see app/Http/Controllers/ProjectController.php:164
* @route '/projects'
*/
index8f35706c95c06c991312479b995e49d2.url = (options?: RouteQueryOptions) => {
    return index8f35706c95c06c991312479b995e49d2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::index
* @see app/Http/Controllers/ProjectController.php:164
* @route '/projects'
*/
index8f35706c95c06c991312479b995e49d2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index8f35706c95c06c991312479b995e49d2.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::index
* @see app/Http/Controllers/ProjectController.php:164
* @route '/projects'
*/
index8f35706c95c06c991312479b995e49d2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index8f35706c95c06c991312479b995e49d2.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProjectController::index
* @see app/Http/Controllers/ProjectController.php:164
* @route '/projects'
*/
const index8f35706c95c06c991312479b995e49d2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index8f35706c95c06c991312479b995e49d2.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::index
* @see app/Http/Controllers/ProjectController.php:164
* @route '/projects'
*/
index8f35706c95c06c991312479b995e49d2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index8f35706c95c06c991312479b995e49d2.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::index
* @see app/Http/Controllers/ProjectController.php:164
* @route '/projects'
*/
index8f35706c95c06c991312479b995e49d2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index8f35706c95c06c991312479b995e49d2.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index8f35706c95c06c991312479b995e49d2.form = index8f35706c95c06c991312479b995e49d2Form

export const index = {
    '/api/v1/projects': index116416e499131727388aa88905bf71a8,
    '/projects': index8f35706c95c06c991312479b995e49d2,
}

/**
* @see \App\Http\Controllers\ProjectController::featured
* @see app/Http/Controllers/ProjectController.php:184
* @route '/api/v1/projects/featured'
*/
const featuredd5fbd14d6762c216111c4fe11e8cce27 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: featuredd5fbd14d6762c216111c4fe11e8cce27.url(options),
    method: 'get',
})

featuredd5fbd14d6762c216111c4fe11e8cce27.definition = {
    methods: ["get","head"],
    url: '/api/v1/projects/featured',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProjectController::featured
* @see app/Http/Controllers/ProjectController.php:184
* @route '/api/v1/projects/featured'
*/
featuredd5fbd14d6762c216111c4fe11e8cce27.url = (options?: RouteQueryOptions) => {
    return featuredd5fbd14d6762c216111c4fe11e8cce27.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::featured
* @see app/Http/Controllers/ProjectController.php:184
* @route '/api/v1/projects/featured'
*/
featuredd5fbd14d6762c216111c4fe11e8cce27.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: featuredd5fbd14d6762c216111c4fe11e8cce27.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::featured
* @see app/Http/Controllers/ProjectController.php:184
* @route '/api/v1/projects/featured'
*/
featuredd5fbd14d6762c216111c4fe11e8cce27.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: featuredd5fbd14d6762c216111c4fe11e8cce27.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProjectController::featured
* @see app/Http/Controllers/ProjectController.php:184
* @route '/api/v1/projects/featured'
*/
const featuredd5fbd14d6762c216111c4fe11e8cce27Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: featuredd5fbd14d6762c216111c4fe11e8cce27.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::featured
* @see app/Http/Controllers/ProjectController.php:184
* @route '/api/v1/projects/featured'
*/
featuredd5fbd14d6762c216111c4fe11e8cce27Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: featuredd5fbd14d6762c216111c4fe11e8cce27.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::featured
* @see app/Http/Controllers/ProjectController.php:184
* @route '/api/v1/projects/featured'
*/
featuredd5fbd14d6762c216111c4fe11e8cce27Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: featuredd5fbd14d6762c216111c4fe11e8cce27.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

featuredd5fbd14d6762c216111c4fe11e8cce27.form = featuredd5fbd14d6762c216111c4fe11e8cce27Form
/**
* @see \App\Http\Controllers\ProjectController::featured
* @see app/Http/Controllers/ProjectController.php:184
* @route '/projects/featured'
*/
const featuredc3389ad7912b59c2c7cf804f7eb4de27 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: featuredc3389ad7912b59c2c7cf804f7eb4de27.url(options),
    method: 'get',
})

featuredc3389ad7912b59c2c7cf804f7eb4de27.definition = {
    methods: ["get","head"],
    url: '/projects/featured',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProjectController::featured
* @see app/Http/Controllers/ProjectController.php:184
* @route '/projects/featured'
*/
featuredc3389ad7912b59c2c7cf804f7eb4de27.url = (options?: RouteQueryOptions) => {
    return featuredc3389ad7912b59c2c7cf804f7eb4de27.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::featured
* @see app/Http/Controllers/ProjectController.php:184
* @route '/projects/featured'
*/
featuredc3389ad7912b59c2c7cf804f7eb4de27.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: featuredc3389ad7912b59c2c7cf804f7eb4de27.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::featured
* @see app/Http/Controllers/ProjectController.php:184
* @route '/projects/featured'
*/
featuredc3389ad7912b59c2c7cf804f7eb4de27.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: featuredc3389ad7912b59c2c7cf804f7eb4de27.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProjectController::featured
* @see app/Http/Controllers/ProjectController.php:184
* @route '/projects/featured'
*/
const featuredc3389ad7912b59c2c7cf804f7eb4de27Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: featuredc3389ad7912b59c2c7cf804f7eb4de27.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::featured
* @see app/Http/Controllers/ProjectController.php:184
* @route '/projects/featured'
*/
featuredc3389ad7912b59c2c7cf804f7eb4de27Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: featuredc3389ad7912b59c2c7cf804f7eb4de27.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::featured
* @see app/Http/Controllers/ProjectController.php:184
* @route '/projects/featured'
*/
featuredc3389ad7912b59c2c7cf804f7eb4de27Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: featuredc3389ad7912b59c2c7cf804f7eb4de27.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

featuredc3389ad7912b59c2c7cf804f7eb4de27.form = featuredc3389ad7912b59c2c7cf804f7eb4de27Form

export const featured = {
    '/api/v1/projects/featured': featuredd5fbd14d6762c216111c4fe11e8cce27,
    '/projects/featured': featuredc3389ad7912b59c2c7cf804f7eb4de27,
}

/**
* @see \App\Http\Controllers\ProjectController::show
* @see app/Http/Controllers/ProjectController.php:210
* @route '/api/v1/projects/{slug}'
*/
export const show = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/projects/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProjectController::show
* @see app/Http/Controllers/ProjectController.php:210
* @route '/api/v1/projects/{slug}'
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
* @see \App\Http\Controllers\ProjectController::show
* @see app/Http/Controllers/ProjectController.php:210
* @route '/api/v1/projects/{slug}'
*/
show.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::show
* @see app/Http/Controllers/ProjectController.php:210
* @route '/api/v1/projects/{slug}'
*/
show.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProjectController::show
* @see app/Http/Controllers/ProjectController.php:210
* @route '/api/v1/projects/{slug}'
*/
const showForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::show
* @see app/Http/Controllers/ProjectController.php:210
* @route '/api/v1/projects/{slug}'
*/
showForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::show
* @see app/Http/Controllers/ProjectController.php:210
* @route '/api/v1/projects/{slug}'
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
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:232
* @route '/api/v1/projects/create'
*/
const create2bea697971d74d3cbd6ad3bdba5f0078 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create2bea697971d74d3cbd6ad3bdba5f0078.url(options),
    method: 'get',
})

create2bea697971d74d3cbd6ad3bdba5f0078.definition = {
    methods: ["get","head"],
    url: '/api/v1/projects/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:232
* @route '/api/v1/projects/create'
*/
create2bea697971d74d3cbd6ad3bdba5f0078.url = (options?: RouteQueryOptions) => {
    return create2bea697971d74d3cbd6ad3bdba5f0078.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:232
* @route '/api/v1/projects/create'
*/
create2bea697971d74d3cbd6ad3bdba5f0078.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create2bea697971d74d3cbd6ad3bdba5f0078.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:232
* @route '/api/v1/projects/create'
*/
create2bea697971d74d3cbd6ad3bdba5f0078.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create2bea697971d74d3cbd6ad3bdba5f0078.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:232
* @route '/api/v1/projects/create'
*/
const create2bea697971d74d3cbd6ad3bdba5f0078Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create2bea697971d74d3cbd6ad3bdba5f0078.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:232
* @route '/api/v1/projects/create'
*/
create2bea697971d74d3cbd6ad3bdba5f0078Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create2bea697971d74d3cbd6ad3bdba5f0078.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:232
* @route '/api/v1/projects/create'
*/
create2bea697971d74d3cbd6ad3bdba5f0078Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create2bea697971d74d3cbd6ad3bdba5f0078.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create2bea697971d74d3cbd6ad3bdba5f0078.form = create2bea697971d74d3cbd6ad3bdba5f0078Form
/**
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:232
* @route '/projects/create'
*/
const create854856a96573f720f48e09da9946a4d0 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create854856a96573f720f48e09da9946a4d0.url(options),
    method: 'get',
})

create854856a96573f720f48e09da9946a4d0.definition = {
    methods: ["get","head"],
    url: '/projects/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:232
* @route '/projects/create'
*/
create854856a96573f720f48e09da9946a4d0.url = (options?: RouteQueryOptions) => {
    return create854856a96573f720f48e09da9946a4d0.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:232
* @route '/projects/create'
*/
create854856a96573f720f48e09da9946a4d0.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create854856a96573f720f48e09da9946a4d0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:232
* @route '/projects/create'
*/
create854856a96573f720f48e09da9946a4d0.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create854856a96573f720f48e09da9946a4d0.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:232
* @route '/projects/create'
*/
const create854856a96573f720f48e09da9946a4d0Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create854856a96573f720f48e09da9946a4d0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:232
* @route '/projects/create'
*/
create854856a96573f720f48e09da9946a4d0Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create854856a96573f720f48e09da9946a4d0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::create
* @see app/Http/Controllers/ProjectController.php:232
* @route '/projects/create'
*/
create854856a96573f720f48e09da9946a4d0Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create854856a96573f720f48e09da9946a4d0.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create854856a96573f720f48e09da9946a4d0.form = create854856a96573f720f48e09da9946a4d0Form

export const create = {
    '/api/v1/projects/create': create2bea697971d74d3cbd6ad3bdba5f0078,
    '/projects/create': create854856a96573f720f48e09da9946a4d0,
}

/**
* @see \App\Http\Controllers\ProjectController::store
* @see app/Http/Controllers/ProjectController.php:246
* @route '/api/v1/projects'
*/
const store116416e499131727388aa88905bf71a8 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store116416e499131727388aa88905bf71a8.url(options),
    method: 'post',
})

store116416e499131727388aa88905bf71a8.definition = {
    methods: ["post"],
    url: '/api/v1/projects',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProjectController::store
* @see app/Http/Controllers/ProjectController.php:246
* @route '/api/v1/projects'
*/
store116416e499131727388aa88905bf71a8.url = (options?: RouteQueryOptions) => {
    return store116416e499131727388aa88905bf71a8.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::store
* @see app/Http/Controllers/ProjectController.php:246
* @route '/api/v1/projects'
*/
store116416e499131727388aa88905bf71a8.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store116416e499131727388aa88905bf71a8.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::store
* @see app/Http/Controllers/ProjectController.php:246
* @route '/api/v1/projects'
*/
const store116416e499131727388aa88905bf71a8Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store116416e499131727388aa88905bf71a8.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::store
* @see app/Http/Controllers/ProjectController.php:246
* @route '/api/v1/projects'
*/
store116416e499131727388aa88905bf71a8Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store116416e499131727388aa88905bf71a8.url(options),
    method: 'post',
})

store116416e499131727388aa88905bf71a8.form = store116416e499131727388aa88905bf71a8Form
/**
* @see \App\Http\Controllers\ProjectController::store
* @see app/Http/Controllers/ProjectController.php:246
* @route '/projects'
*/
const store8f35706c95c06c991312479b995e49d2 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store8f35706c95c06c991312479b995e49d2.url(options),
    method: 'post',
})

store8f35706c95c06c991312479b995e49d2.definition = {
    methods: ["post"],
    url: '/projects',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProjectController::store
* @see app/Http/Controllers/ProjectController.php:246
* @route '/projects'
*/
store8f35706c95c06c991312479b995e49d2.url = (options?: RouteQueryOptions) => {
    return store8f35706c95c06c991312479b995e49d2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::store
* @see app/Http/Controllers/ProjectController.php:246
* @route '/projects'
*/
store8f35706c95c06c991312479b995e49d2.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store8f35706c95c06c991312479b995e49d2.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::store
* @see app/Http/Controllers/ProjectController.php:246
* @route '/projects'
*/
const store8f35706c95c06c991312479b995e49d2Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store8f35706c95c06c991312479b995e49d2.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::store
* @see app/Http/Controllers/ProjectController.php:246
* @route '/projects'
*/
store8f35706c95c06c991312479b995e49d2Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store8f35706c95c06c991312479b995e49d2.url(options),
    method: 'post',
})

store8f35706c95c06c991312479b995e49d2.form = store8f35706c95c06c991312479b995e49d2Form

export const store = {
    '/api/v1/projects': store116416e499131727388aa88905bf71a8,
    '/projects': store8f35706c95c06c991312479b995e49d2,
}

/**
* @see \App\Http\Controllers\ProjectController::edit
* @see app/Http/Controllers/ProjectController.php:275
* @route '/api/v1/projects/{project}'
*/
const editbee676bb2f0b399f533f3ef3e229c90b = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editbee676bb2f0b399f533f3ef3e229c90b.url(args, options),
    method: 'get',
})

editbee676bb2f0b399f533f3ef3e229c90b.definition = {
    methods: ["get","head"],
    url: '/api/v1/projects/{project}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProjectController::edit
* @see app/Http/Controllers/ProjectController.php:275
* @route '/api/v1/projects/{project}'
*/
editbee676bb2f0b399f533f3ef3e229c90b.url = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { project: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            project: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        project: typeof args.project === 'object'
        ? args.project.id
        : args.project,
    }

    return editbee676bb2f0b399f533f3ef3e229c90b.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::edit
* @see app/Http/Controllers/ProjectController.php:275
* @route '/api/v1/projects/{project}'
*/
editbee676bb2f0b399f533f3ef3e229c90b.get = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editbee676bb2f0b399f533f3ef3e229c90b.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::edit
* @see app/Http/Controllers/ProjectController.php:275
* @route '/api/v1/projects/{project}'
*/
editbee676bb2f0b399f533f3ef3e229c90b.head = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editbee676bb2f0b399f533f3ef3e229c90b.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProjectController::edit
* @see app/Http/Controllers/ProjectController.php:275
* @route '/api/v1/projects/{project}'
*/
const editbee676bb2f0b399f533f3ef3e229c90bForm = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editbee676bb2f0b399f533f3ef3e229c90b.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::edit
* @see app/Http/Controllers/ProjectController.php:275
* @route '/api/v1/projects/{project}'
*/
editbee676bb2f0b399f533f3ef3e229c90bForm.get = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editbee676bb2f0b399f533f3ef3e229c90b.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::edit
* @see app/Http/Controllers/ProjectController.php:275
* @route '/api/v1/projects/{project}'
*/
editbee676bb2f0b399f533f3ef3e229c90bForm.head = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editbee676bb2f0b399f533f3ef3e229c90b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

editbee676bb2f0b399f533f3ef3e229c90b.form = editbee676bb2f0b399f533f3ef3e229c90bForm
/**
* @see \App\Http\Controllers\ProjectController::edit
* @see app/Http/Controllers/ProjectController.php:275
* @route '/projects/{project}/edit'
*/
const edit8b5aed867a01ebae28df58a5eee1c3e2 = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit8b5aed867a01ebae28df58a5eee1c3e2.url(args, options),
    method: 'get',
})

edit8b5aed867a01ebae28df58a5eee1c3e2.definition = {
    methods: ["get","head"],
    url: '/projects/{project}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProjectController::edit
* @see app/Http/Controllers/ProjectController.php:275
* @route '/projects/{project}/edit'
*/
edit8b5aed867a01ebae28df58a5eee1c3e2.url = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { project: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            project: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        project: typeof args.project === 'object'
        ? args.project.id
        : args.project,
    }

    return edit8b5aed867a01ebae28df58a5eee1c3e2.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::edit
* @see app/Http/Controllers/ProjectController.php:275
* @route '/projects/{project}/edit'
*/
edit8b5aed867a01ebae28df58a5eee1c3e2.get = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit8b5aed867a01ebae28df58a5eee1c3e2.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::edit
* @see app/Http/Controllers/ProjectController.php:275
* @route '/projects/{project}/edit'
*/
edit8b5aed867a01ebae28df58a5eee1c3e2.head = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit8b5aed867a01ebae28df58a5eee1c3e2.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProjectController::edit
* @see app/Http/Controllers/ProjectController.php:275
* @route '/projects/{project}/edit'
*/
const edit8b5aed867a01ebae28df58a5eee1c3e2Form = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit8b5aed867a01ebae28df58a5eee1c3e2.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::edit
* @see app/Http/Controllers/ProjectController.php:275
* @route '/projects/{project}/edit'
*/
edit8b5aed867a01ebae28df58a5eee1c3e2Form.get = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit8b5aed867a01ebae28df58a5eee1c3e2.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProjectController::edit
* @see app/Http/Controllers/ProjectController.php:275
* @route '/projects/{project}/edit'
*/
edit8b5aed867a01ebae28df58a5eee1c3e2Form.head = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit8b5aed867a01ebae28df58a5eee1c3e2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit8b5aed867a01ebae28df58a5eee1c3e2.form = edit8b5aed867a01ebae28df58a5eee1c3e2Form

export const edit = {
    '/api/v1/projects/{project}': editbee676bb2f0b399f533f3ef3e229c90b,
    '/projects/{project}/edit': edit8b5aed867a01ebae28df58a5eee1c3e2,
}

/**
* @see \App\Http\Controllers\ProjectController::update
* @see app/Http/Controllers/ProjectController.php:312
* @route '/api/v1/projects/{project}'
*/
const updatebee676bb2f0b399f533f3ef3e229c90b = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatebee676bb2f0b399f533f3ef3e229c90b.url(args, options),
    method: 'put',
})

updatebee676bb2f0b399f533f3ef3e229c90b.definition = {
    methods: ["put"],
    url: '/api/v1/projects/{project}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ProjectController::update
* @see app/Http/Controllers/ProjectController.php:312
* @route '/api/v1/projects/{project}'
*/
updatebee676bb2f0b399f533f3ef3e229c90b.url = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { project: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            project: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        project: typeof args.project === 'object'
        ? args.project.id
        : args.project,
    }

    return updatebee676bb2f0b399f533f3ef3e229c90b.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::update
* @see app/Http/Controllers/ProjectController.php:312
* @route '/api/v1/projects/{project}'
*/
updatebee676bb2f0b399f533f3ef3e229c90b.put = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatebee676bb2f0b399f533f3ef3e229c90b.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ProjectController::update
* @see app/Http/Controllers/ProjectController.php:312
* @route '/api/v1/projects/{project}'
*/
const updatebee676bb2f0b399f533f3ef3e229c90bForm = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatebee676bb2f0b399f533f3ef3e229c90b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::update
* @see app/Http/Controllers/ProjectController.php:312
* @route '/api/v1/projects/{project}'
*/
updatebee676bb2f0b399f533f3ef3e229c90bForm.put = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatebee676bb2f0b399f533f3ef3e229c90b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatebee676bb2f0b399f533f3ef3e229c90b.form = updatebee676bb2f0b399f533f3ef3e229c90bForm
/**
* @see \App\Http\Controllers\ProjectController::update
* @see app/Http/Controllers/ProjectController.php:312
* @route '/projects/{project}'
*/
const update506e97b57d862c7a6e6006aa3bd3e3f3 = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update506e97b57d862c7a6e6006aa3bd3e3f3.url(args, options),
    method: 'patch',
})

update506e97b57d862c7a6e6006aa3bd3e3f3.definition = {
    methods: ["patch"],
    url: '/projects/{project}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\ProjectController::update
* @see app/Http/Controllers/ProjectController.php:312
* @route '/projects/{project}'
*/
update506e97b57d862c7a6e6006aa3bd3e3f3.url = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { project: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            project: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        project: typeof args.project === 'object'
        ? args.project.id
        : args.project,
    }

    return update506e97b57d862c7a6e6006aa3bd3e3f3.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::update
* @see app/Http/Controllers/ProjectController.php:312
* @route '/projects/{project}'
*/
update506e97b57d862c7a6e6006aa3bd3e3f3.patch = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update506e97b57d862c7a6e6006aa3bd3e3f3.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\ProjectController::update
* @see app/Http/Controllers/ProjectController.php:312
* @route '/projects/{project}'
*/
const update506e97b57d862c7a6e6006aa3bd3e3f3Form = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update506e97b57d862c7a6e6006aa3bd3e3f3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::update
* @see app/Http/Controllers/ProjectController.php:312
* @route '/projects/{project}'
*/
update506e97b57d862c7a6e6006aa3bd3e3f3Form.patch = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update506e97b57d862c7a6e6006aa3bd3e3f3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update506e97b57d862c7a6e6006aa3bd3e3f3.form = update506e97b57d862c7a6e6006aa3bd3e3f3Form

export const update = {
    '/api/v1/projects/{project}': updatebee676bb2f0b399f533f3ef3e229c90b,
    '/projects/{project}': update506e97b57d862c7a6e6006aa3bd3e3f3,
}

/**
* @see \App\Http\Controllers\ProjectController::destroy
* @see app/Http/Controllers/ProjectController.php:346
* @route '/api/v1/projects/{project}'
*/
const destroybee676bb2f0b399f533f3ef3e229c90b = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroybee676bb2f0b399f533f3ef3e229c90b.url(args, options),
    method: 'delete',
})

destroybee676bb2f0b399f533f3ef3e229c90b.definition = {
    methods: ["delete"],
    url: '/api/v1/projects/{project}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ProjectController::destroy
* @see app/Http/Controllers/ProjectController.php:346
* @route '/api/v1/projects/{project}'
*/
destroybee676bb2f0b399f533f3ef3e229c90b.url = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { project: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            project: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        project: typeof args.project === 'object'
        ? args.project.id
        : args.project,
    }

    return destroybee676bb2f0b399f533f3ef3e229c90b.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::destroy
* @see app/Http/Controllers/ProjectController.php:346
* @route '/api/v1/projects/{project}'
*/
destroybee676bb2f0b399f533f3ef3e229c90b.delete = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroybee676bb2f0b399f533f3ef3e229c90b.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ProjectController::destroy
* @see app/Http/Controllers/ProjectController.php:346
* @route '/api/v1/projects/{project}'
*/
const destroybee676bb2f0b399f533f3ef3e229c90bForm = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroybee676bb2f0b399f533f3ef3e229c90b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::destroy
* @see app/Http/Controllers/ProjectController.php:346
* @route '/api/v1/projects/{project}'
*/
destroybee676bb2f0b399f533f3ef3e229c90bForm.delete = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroybee676bb2f0b399f533f3ef3e229c90b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroybee676bb2f0b399f533f3ef3e229c90b.form = destroybee676bb2f0b399f533f3ef3e229c90bForm
/**
* @see \App\Http\Controllers\ProjectController::destroy
* @see app/Http/Controllers/ProjectController.php:346
* @route '/projects/{project}'
*/
const destroy506e97b57d862c7a6e6006aa3bd3e3f3 = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy506e97b57d862c7a6e6006aa3bd3e3f3.url(args, options),
    method: 'delete',
})

destroy506e97b57d862c7a6e6006aa3bd3e3f3.definition = {
    methods: ["delete"],
    url: '/projects/{project}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ProjectController::destroy
* @see app/Http/Controllers/ProjectController.php:346
* @route '/projects/{project}'
*/
destroy506e97b57d862c7a6e6006aa3bd3e3f3.url = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { project: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            project: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        project: typeof args.project === 'object'
        ? args.project.id
        : args.project,
    }

    return destroy506e97b57d862c7a6e6006aa3bd3e3f3.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProjectController::destroy
* @see app/Http/Controllers/ProjectController.php:346
* @route '/projects/{project}'
*/
destroy506e97b57d862c7a6e6006aa3bd3e3f3.delete = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy506e97b57d862c7a6e6006aa3bd3e3f3.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ProjectController::destroy
* @see app/Http/Controllers/ProjectController.php:346
* @route '/projects/{project}'
*/
const destroy506e97b57d862c7a6e6006aa3bd3e3f3Form = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy506e97b57d862c7a6e6006aa3bd3e3f3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProjectController::destroy
* @see app/Http/Controllers/ProjectController.php:346
* @route '/projects/{project}'
*/
destroy506e97b57d862c7a6e6006aa3bd3e3f3Form.delete = (args: { project: string | number | { id: string | number } } | [project: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy506e97b57d862c7a6e6006aa3bd3e3f3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy506e97b57d862c7a6e6006aa3bd3e3f3.form = destroy506e97b57d862c7a6e6006aa3bd3e3f3Form

export const destroy = {
    '/api/v1/projects/{project}': destroybee676bb2f0b399f533f3ef3e229c90b,
    '/projects/{project}': destroy506e97b57d862c7a6e6006aa3bd3e3f3,
}

const ProjectController = { index, featured, show, create, store, edit, update, destroy }

export default ProjectController