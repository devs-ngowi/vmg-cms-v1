import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/api/v1/blog/posts'
*/
const index550b87b29bb668fcecb973139b9d9f29 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index550b87b29bb668fcecb973139b9d9f29.url(options),
    method: 'get',
})

index550b87b29bb668fcecb973139b9d9f29.definition = {
    methods: ["get","head"],
    url: '/api/v1/blog/posts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/api/v1/blog/posts'
*/
index550b87b29bb668fcecb973139b9d9f29.url = (options?: RouteQueryOptions) => {




    return index550b87b29bb668fcecb973139b9d9f29.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/api/v1/blog/posts'
*/
index550b87b29bb668fcecb973139b9d9f29.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index550b87b29bb668fcecb973139b9d9f29.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/api/v1/blog/posts'
*/
index550b87b29bb668fcecb973139b9d9f29.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index550b87b29bb668fcecb973139b9d9f29.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/api/v1/blog/posts'
*/
const index550b87b29bb668fcecb973139b9d9f29Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index550b87b29bb668fcecb973139b9d9f29.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/api/v1/blog/posts'
*/
index550b87b29bb668fcecb973139b9d9f29Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index550b87b29bb668fcecb973139b9d9f29.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/api/v1/blog/posts'
*/
index550b87b29bb668fcecb973139b9d9f29Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index550b87b29bb668fcecb973139b9d9f29.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index550b87b29bb668fcecb973139b9d9f29.form = index550b87b29bb668fcecb973139b9d9f29Form
/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/blog'
*/
const index0281689d11c3db12eb0f0bc21b3e4ed4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'get',
})

index0281689d11c3db12eb0f0bc21b3e4ed4.definition = {
    methods: ["get","head"],
    url: '/blog',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/blog'
*/
index0281689d11c3db12eb0f0bc21b3e4ed4.url = (options?: RouteQueryOptions) => {




    return index0281689d11c3db12eb0f0bc21b3e4ed4.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/blog'
*/
index0281689d11c3db12eb0f0bc21b3e4ed4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/blog'
*/
index0281689d11c3db12eb0f0bc21b3e4ed4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/blog'
*/
const index0281689d11c3db12eb0f0bc21b3e4ed4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/blog'
*/
index0281689d11c3db12eb0f0bc21b3e4ed4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/blog'
*/
index0281689d11c3db12eb0f0bc21b3e4ed4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index0281689d11c3db12eb0f0bc21b3e4ed4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index0281689d11c3db12eb0f0bc21b3e4ed4.form = index0281689d11c3db12eb0f0bc21b3e4ed4Form

export const index = {
    '/api/v1/blog/posts': index550b87b29bb668fcecb973139b9d9f29,
    '/blog': index0281689d11c3db12eb0f0bc21b3e4ed4,
}


/**
* @see \App\Http\Controllers\BlogPostController::show
* @see app/Http/Controllers/BlogPostController.php:114
* @route '/api/v1/blog/posts/{slug}'
*/
export const show = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/blog/posts/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogPostController::show
* @see app/Http/Controllers/BlogPostController.php:114
* @route '/api/v1/blog/posts/{slug}'
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
* @see \App\Http\Controllers\BlogPostController::show
* @see app/Http/Controllers/BlogPostController.php:114
* @route '/api/v1/blog/posts/{slug}'
*/
show.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::show
* @see app/Http/Controllers/BlogPostController.php:114
* @route '/api/v1/blog/posts/{slug}'
*/
show.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogPostController::show
* @see app/Http/Controllers/BlogPostController.php:114
* @route '/api/v1/blog/posts/{slug}'
*/
const showForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::show
* @see app/Http/Controllers/BlogPostController.php:114
* @route '/api/v1/blog/posts/{slug}'
*/
showForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::show
* @see app/Http/Controllers/BlogPostController.php:114
* @route '/api/v1/blog/posts/{slug}'
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
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/api/v1/blog/categories'
*/
const categoriese118a81f85f191d5cc87140c727f24c5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categoriese118a81f85f191d5cc87140c727f24c5.url(options),
    method: 'get',
})

categoriese118a81f85f191d5cc87140c727f24c5.definition = {
    methods: ["get","head"],
    url: '/api/v1/blog/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/api/v1/blog/categories'
*/
categoriese118a81f85f191d5cc87140c727f24c5.url = (options?: RouteQueryOptions) => {




    return categoriese118a81f85f191d5cc87140c727f24c5.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/api/v1/blog/categories'
*/
categoriese118a81f85f191d5cc87140c727f24c5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categoriese118a81f85f191d5cc87140c727f24c5.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/api/v1/blog/categories'
*/
categoriese118a81f85f191d5cc87140c727f24c5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categoriese118a81f85f191d5cc87140c727f24c5.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/api/v1/blog/categories'
*/
const categoriese118a81f85f191d5cc87140c727f24c5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categoriese118a81f85f191d5cc87140c727f24c5.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/api/v1/blog/categories'
*/
categoriese118a81f85f191d5cc87140c727f24c5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categoriese118a81f85f191d5cc87140c727f24c5.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/api/v1/blog/categories'
*/
categoriese118a81f85f191d5cc87140c727f24c5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categoriese118a81f85f191d5cc87140c727f24c5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

categoriese118a81f85f191d5cc87140c727f24c5.form = categoriese118a81f85f191d5cc87140c727f24c5Form
/**
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/blog/categories'
*/
const categories3716332543aa448f6820533c5eca0ee9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categories3716332543aa448f6820533c5eca0ee9.url(options),
    method: 'get',
})

categories3716332543aa448f6820533c5eca0ee9.definition = {
    methods: ["get","head"],
    url: '/blog/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/blog/categories'
*/
categories3716332543aa448f6820533c5eca0ee9.url = (options?: RouteQueryOptions) => {




    return categories3716332543aa448f6820533c5eca0ee9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/blog/categories'
*/
categories3716332543aa448f6820533c5eca0ee9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categories3716332543aa448f6820533c5eca0ee9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/blog/categories'
*/
categories3716332543aa448f6820533c5eca0ee9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categories3716332543aa448f6820533c5eca0ee9.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/blog/categories'
*/
const categories3716332543aa448f6820533c5eca0ee9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories3716332543aa448f6820533c5eca0ee9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/blog/categories'
*/
categories3716332543aa448f6820533c5eca0ee9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories3716332543aa448f6820533c5eca0ee9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/blog/categories'
*/
categories3716332543aa448f6820533c5eca0ee9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories3716332543aa448f6820533c5eca0ee9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

categories3716332543aa448f6820533c5eca0ee9.form = categories3716332543aa448f6820533c5eca0ee9Form

export const categories = {
    '/api/v1/blog/categories': categoriese118a81f85f191d5cc87140c727f24c5,
    '/blog/categories': categories3716332543aa448f6820533c5eca0ee9,
}


/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/api/v1/blog/tags'
*/
const tags9e84f08bb6444383a7b88553756e79b0 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tags9e84f08bb6444383a7b88553756e79b0.url(options),
    method: 'get',
})

tags9e84f08bb6444383a7b88553756e79b0.definition = {
    methods: ["get","head"],
    url: '/api/v1/blog/tags',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/api/v1/blog/tags'
*/
tags9e84f08bb6444383a7b88553756e79b0.url = (options?: RouteQueryOptions) => {




    return tags9e84f08bb6444383a7b88553756e79b0.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/api/v1/blog/tags'
*/
tags9e84f08bb6444383a7b88553756e79b0.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tags9e84f08bb6444383a7b88553756e79b0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/api/v1/blog/tags'
*/
tags9e84f08bb6444383a7b88553756e79b0.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tags9e84f08bb6444383a7b88553756e79b0.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/api/v1/blog/tags'
*/
const tags9e84f08bb6444383a7b88553756e79b0Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tags9e84f08bb6444383a7b88553756e79b0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/api/v1/blog/tags'
*/
tags9e84f08bb6444383a7b88553756e79b0Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tags9e84f08bb6444383a7b88553756e79b0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/api/v1/blog/tags'
*/
tags9e84f08bb6444383a7b88553756e79b0Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tags9e84f08bb6444383a7b88553756e79b0.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

tags9e84f08bb6444383a7b88553756e79b0.form = tags9e84f08bb6444383a7b88553756e79b0Form
/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/blog/tags'
*/
const tagse7b2cb7f9ed5fd2dcb3de666dc0bcbd2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tagse7b2cb7f9ed5fd2dcb3de666dc0bcbd2.url(options),
    method: 'get',
})

tagse7b2cb7f9ed5fd2dcb3de666dc0bcbd2.definition = {
    methods: ["get","head"],
    url: '/blog/tags',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/blog/tags'
*/
tagse7b2cb7f9ed5fd2dcb3de666dc0bcbd2.url = (options?: RouteQueryOptions) => {




    return tagse7b2cb7f9ed5fd2dcb3de666dc0bcbd2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/blog/tags'
*/
tagse7b2cb7f9ed5fd2dcb3de666dc0bcbd2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tagse7b2cb7f9ed5fd2dcb3de666dc0bcbd2.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/blog/tags'
*/
tagse7b2cb7f9ed5fd2dcb3de666dc0bcbd2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tagse7b2cb7f9ed5fd2dcb3de666dc0bcbd2.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/blog/tags'
*/
const tagse7b2cb7f9ed5fd2dcb3de666dc0bcbd2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tagse7b2cb7f9ed5fd2dcb3de666dc0bcbd2.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/blog/tags'
*/
tagse7b2cb7f9ed5fd2dcb3de666dc0bcbd2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tagse7b2cb7f9ed5fd2dcb3de666dc0bcbd2.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/blog/tags'
*/
tagse7b2cb7f9ed5fd2dcb3de666dc0bcbd2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tagse7b2cb7f9ed5fd2dcb3de666dc0bcbd2.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

tagse7b2cb7f9ed5fd2dcb3de666dc0bcbd2.form = tagse7b2cb7f9ed5fd2dcb3de666dc0bcbd2Form

export const tags = {
    '/api/v1/blog/tags': tags9e84f08bb6444383a7b88553756e79b0,
    '/blog/tags': tagse7b2cb7f9ed5fd2dcb3de666dc0bcbd2,
}


/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:141
* @route '/api/v1/blog/posts'
*/
const store550b87b29bb668fcecb973139b9d9f29 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store550b87b29bb668fcecb973139b9d9f29.url(options),
    method: 'post',
})

store550b87b29bb668fcecb973139b9d9f29.definition = {
    methods: ["post"],
    url: '/api/v1/blog/posts',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:141
* @route '/api/v1/blog/posts'
*/
store550b87b29bb668fcecb973139b9d9f29.url = (options?: RouteQueryOptions) => {




    return store550b87b29bb668fcecb973139b9d9f29.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:141
* @route '/api/v1/blog/posts'
*/
store550b87b29bb668fcecb973139b9d9f29.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store550b87b29bb668fcecb973139b9d9f29.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:141
* @route '/api/v1/blog/posts'
*/
const store550b87b29bb668fcecb973139b9d9f29Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store550b87b29bb668fcecb973139b9d9f29.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:141
* @route '/api/v1/blog/posts'
*/
store550b87b29bb668fcecb973139b9d9f29Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store550b87b29bb668fcecb973139b9d9f29.url(options),
    method: 'post',
})

store550b87b29bb668fcecb973139b9d9f29.form = store550b87b29bb668fcecb973139b9d9f29Form
/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:141
* @route '/blog'
*/
const store0281689d11c3db12eb0f0bc21b3e4ed4 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'post',
})

store0281689d11c3db12eb0f0bc21b3e4ed4.definition = {
    methods: ["post"],
    url: '/blog',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:141
* @route '/blog'
*/
store0281689d11c3db12eb0f0bc21b3e4ed4.url = (options?: RouteQueryOptions) => {




    return store0281689d11c3db12eb0f0bc21b3e4ed4.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:141
* @route '/blog'
*/
store0281689d11c3db12eb0f0bc21b3e4ed4.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:141
* @route '/blog'
*/
const store0281689d11c3db12eb0f0bc21b3e4ed4Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:141
* @route '/blog'
*/
store0281689d11c3db12eb0f0bc21b3e4ed4Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'post',
})

store0281689d11c3db12eb0f0bc21b3e4ed4.form = store0281689d11c3db12eb0f0bc21b3e4ed4Form

export const store = {
    '/api/v1/blog/posts': store550b87b29bb668fcecb973139b9d9f29,
    '/blog': store0281689d11c3db12eb0f0bc21b3e4ed4,
}


/**
* @see \App\Http\Controllers\BlogPostController::update
* @see app/Http/Controllers/BlogPostController.php:211
* @route '/api/v1/blog/posts/{post}'
*/
const update34bedbc0ca76ebf0968c5fb4789b503b = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update34bedbc0ca76ebf0968c5fb4789b503b.url(args, options),
    method: 'put',
})

update34bedbc0ca76ebf0968c5fb4789b503b.definition = {
    methods: ["put"],
    url: '/api/v1/blog/posts/{post}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\BlogPostController::update
* @see app/Http/Controllers/BlogPostController.php:211
* @route '/api/v1/blog/posts/{post}'
*/
update34bedbc0ca76ebf0968c5fb4789b503b.url = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { post: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            post: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        post: typeof args.post === 'object'
        ? args.post.id
        : args.post,
    }

    return update34bedbc0ca76ebf0968c5fb4789b503b.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::update
* @see app/Http/Controllers/BlogPostController.php:211
* @route '/api/v1/blog/posts/{post}'
*/
update34bedbc0ca76ebf0968c5fb4789b503b.put = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update34bedbc0ca76ebf0968c5fb4789b503b.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\BlogPostController::update
* @see app/Http/Controllers/BlogPostController.php:211
* @route '/api/v1/blog/posts/{post}'
*/
const update34bedbc0ca76ebf0968c5fb4789b503bForm = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update34bedbc0ca76ebf0968c5fb4789b503b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::update
* @see app/Http/Controllers/BlogPostController.php:211
* @route '/api/v1/blog/posts/{post}'
*/
update34bedbc0ca76ebf0968c5fb4789b503bForm.put = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update34bedbc0ca76ebf0968c5fb4789b503b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update34bedbc0ca76ebf0968c5fb4789b503b.form = update34bedbc0ca76ebf0968c5fb4789b503bForm
/**
* @see \App\Http\Controllers\BlogPostController::update
* @see app/Http/Controllers/BlogPostController.php:211
* @route '/blog/{post}'
*/
const update03c0d545ccb9ba8a75e6b8284640b19d = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update03c0d545ccb9ba8a75e6b8284640b19d.url(args, options),
    method: 'patch',
})

update03c0d545ccb9ba8a75e6b8284640b19d.definition = {
    methods: ["patch"],
    url: '/blog/{post}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\BlogPostController::update
* @see app/Http/Controllers/BlogPostController.php:211
* @route '/blog/{post}'
*/
update03c0d545ccb9ba8a75e6b8284640b19d.url = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { post: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            post: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        post: typeof args.post === 'object'
        ? args.post.id
        : args.post,
    }

    return update03c0d545ccb9ba8a75e6b8284640b19d.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::update
* @see app/Http/Controllers/BlogPostController.php:211
* @route '/blog/{post}'
*/
update03c0d545ccb9ba8a75e6b8284640b19d.patch = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update03c0d545ccb9ba8a75e6b8284640b19d.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\BlogPostController::update
* @see app/Http/Controllers/BlogPostController.php:211
* @route '/blog/{post}'
*/
const update03c0d545ccb9ba8a75e6b8284640b19dForm = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update03c0d545ccb9ba8a75e6b8284640b19d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::update
* @see app/Http/Controllers/BlogPostController.php:211
* @route '/blog/{post}'
*/
update03c0d545ccb9ba8a75e6b8284640b19dForm.patch = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update03c0d545ccb9ba8a75e6b8284640b19d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update03c0d545ccb9ba8a75e6b8284640b19d.form = update03c0d545ccb9ba8a75e6b8284640b19dForm

export const update = {
    '/api/v1/blog/posts/{post}': update34bedbc0ca76ebf0968c5fb4789b503b,
    '/blog/{post}': update03c0d545ccb9ba8a75e6b8284640b19d,
}


/**
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:266
* @route '/api/v1/blog/posts/{post}'
*/
const destroy34bedbc0ca76ebf0968c5fb4789b503b = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy34bedbc0ca76ebf0968c5fb4789b503b.url(args, options),
    method: 'delete',
})

destroy34bedbc0ca76ebf0968c5fb4789b503b.definition = {
    methods: ["delete"],
    url: '/api/v1/blog/posts/{post}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:266
* @route '/api/v1/blog/posts/{post}'
*/
destroy34bedbc0ca76ebf0968c5fb4789b503b.url = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { post: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            post: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        post: typeof args.post === 'object'
        ? args.post.id
        : args.post,
    }

    return destroy34bedbc0ca76ebf0968c5fb4789b503b.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:266
* @route '/api/v1/blog/posts/{post}'
*/
destroy34bedbc0ca76ebf0968c5fb4789b503b.delete = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy34bedbc0ca76ebf0968c5fb4789b503b.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:266
* @route '/api/v1/blog/posts/{post}'
*/
const destroy34bedbc0ca76ebf0968c5fb4789b503bForm = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy34bedbc0ca76ebf0968c5fb4789b503b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:266
* @route '/api/v1/blog/posts/{post}'
*/
destroy34bedbc0ca76ebf0968c5fb4789b503bForm.delete = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy34bedbc0ca76ebf0968c5fb4789b503b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy34bedbc0ca76ebf0968c5fb4789b503b.form = destroy34bedbc0ca76ebf0968c5fb4789b503bForm
/**
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:266
* @route '/blog/{post}'
*/
const destroy03c0d545ccb9ba8a75e6b8284640b19d = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy03c0d545ccb9ba8a75e6b8284640b19d.url(args, options),
    method: 'delete',
})

destroy03c0d545ccb9ba8a75e6b8284640b19d.definition = {
    methods: ["delete"],
    url: '/blog/{post}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:266
* @route '/blog/{post}'
*/
destroy03c0d545ccb9ba8a75e6b8284640b19d.url = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { post: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            post: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        post: typeof args.post === 'object'
        ? args.post.id
        : args.post,
    }

    return destroy03c0d545ccb9ba8a75e6b8284640b19d.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:266
* @route '/blog/{post}'
*/
destroy03c0d545ccb9ba8a75e6b8284640b19d.delete = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy03c0d545ccb9ba8a75e6b8284640b19d.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:266
* @route '/blog/{post}'
*/
const destroy03c0d545ccb9ba8a75e6b8284640b19dForm = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy03c0d545ccb9ba8a75e6b8284640b19d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:266
* @route '/blog/{post}'
*/
destroy03c0d545ccb9ba8a75e6b8284640b19dForm.delete = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy03c0d545ccb9ba8a75e6b8284640b19d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy03c0d545ccb9ba8a75e6b8284640b19d.form = destroy03c0d545ccb9ba8a75e6b8284640b19dForm

export const destroy = {
    '/api/v1/blog/posts/{post}': destroy34bedbc0ca76ebf0968c5fb4789b503b,
    '/blog/{post}': destroy03c0d545ccb9ba8a75e6b8284640b19d,
}


/**
* @see \App\Http\Controllers\BlogPostController::storeCategory
* @see app/Http/Controllers/BlogPostController.php:316
* @route '/api/v1/blog/categories'
*/
const storeCategorye118a81f85f191d5cc87140c727f24c5 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeCategorye118a81f85f191d5cc87140c727f24c5.url(options),
    method: 'post',
})

storeCategorye118a81f85f191d5cc87140c727f24c5.definition = {
    methods: ["post"],
    url: '/api/v1/blog/categories',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BlogPostController::storeCategory
* @see app/Http/Controllers/BlogPostController.php:316
* @route '/api/v1/blog/categories'
*/
storeCategorye118a81f85f191d5cc87140c727f24c5.url = (options?: RouteQueryOptions) => {




    return storeCategorye118a81f85f191d5cc87140c727f24c5.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::storeCategory
* @see app/Http/Controllers/BlogPostController.php:316
* @route '/api/v1/blog/categories'
*/
storeCategorye118a81f85f191d5cc87140c727f24c5.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeCategorye118a81f85f191d5cc87140c727f24c5.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::storeCategory
* @see app/Http/Controllers/BlogPostController.php:316
* @route '/api/v1/blog/categories'
*/
const storeCategorye118a81f85f191d5cc87140c727f24c5Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeCategorye118a81f85f191d5cc87140c727f24c5.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::storeCategory
* @see app/Http/Controllers/BlogPostController.php:316
* @route '/api/v1/blog/categories'
*/
storeCategorye118a81f85f191d5cc87140c727f24c5Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeCategorye118a81f85f191d5cc87140c727f24c5.url(options),
    method: 'post',
})

storeCategorye118a81f85f191d5cc87140c727f24c5.form = storeCategorye118a81f85f191d5cc87140c727f24c5Form
/**
* @see \App\Http\Controllers\BlogPostController::storeCategory
* @see app/Http/Controllers/BlogPostController.php:316
* @route '/blog/categories'
*/
const storeCategory3716332543aa448f6820533c5eca0ee9 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeCategory3716332543aa448f6820533c5eca0ee9.url(options),
    method: 'post',
})

storeCategory3716332543aa448f6820533c5eca0ee9.definition = {
    methods: ["post"],
    url: '/blog/categories',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BlogPostController::storeCategory
* @see app/Http/Controllers/BlogPostController.php:316
* @route '/blog/categories'
*/
storeCategory3716332543aa448f6820533c5eca0ee9.url = (options?: RouteQueryOptions) => {




    return storeCategory3716332543aa448f6820533c5eca0ee9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::storeCategory
* @see app/Http/Controllers/BlogPostController.php:316
* @route '/blog/categories'
*/
storeCategory3716332543aa448f6820533c5eca0ee9.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeCategory3716332543aa448f6820533c5eca0ee9.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::storeCategory
* @see app/Http/Controllers/BlogPostController.php:316
* @route '/blog/categories'
*/
const storeCategory3716332543aa448f6820533c5eca0ee9Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeCategory3716332543aa448f6820533c5eca0ee9.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::storeCategory
* @see app/Http/Controllers/BlogPostController.php:316
* @route '/blog/categories'
*/
storeCategory3716332543aa448f6820533c5eca0ee9Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeCategory3716332543aa448f6820533c5eca0ee9.url(options),
    method: 'post',
})

storeCategory3716332543aa448f6820533c5eca0ee9.form = storeCategory3716332543aa448f6820533c5eca0ee9Form

export const storeCategory = {
    '/api/v1/blog/categories': storeCategorye118a81f85f191d5cc87140c727f24c5,
    '/blog/categories': storeCategory3716332543aa448f6820533c5eca0ee9,
}


/**
* @see \App\Http\Controllers\BlogPostController::destroyCategory
* @see app/Http/Controllers/BlogPostController.php:370
* @route '/api/v1/blog/categories/{category}'
*/
const destroyCategoryb742d8a2fd34305b9482fb01a3d2ab0c = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyCategoryb742d8a2fd34305b9482fb01a3d2ab0c.url(args, options),
    method: 'delete',
})

destroyCategoryb742d8a2fd34305b9482fb01a3d2ab0c.definition = {
    methods: ["delete"],
    url: '/api/v1/blog/categories/{category}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BlogPostController::destroyCategory
* @see app/Http/Controllers/BlogPostController.php:370
* @route '/api/v1/blog/categories/{category}'
*/
destroyCategoryb742d8a2fd34305b9482fb01a3d2ab0c.url = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return destroyCategoryb742d8a2fd34305b9482fb01a3d2ab0c.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::destroyCategory
* @see app/Http/Controllers/BlogPostController.php:370
* @route '/api/v1/blog/categories/{category}'
*/
destroyCategoryb742d8a2fd34305b9482fb01a3d2ab0c.delete = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyCategoryb742d8a2fd34305b9482fb01a3d2ab0c.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\BlogPostController::destroyCategory
* @see app/Http/Controllers/BlogPostController.php:370
* @route '/api/v1/blog/categories/{category}'
*/
const destroyCategoryb742d8a2fd34305b9482fb01a3d2ab0cForm = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyCategoryb742d8a2fd34305b9482fb01a3d2ab0c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::destroyCategory
* @see app/Http/Controllers/BlogPostController.php:370
* @route '/api/v1/blog/categories/{category}'
*/
destroyCategoryb742d8a2fd34305b9482fb01a3d2ab0cForm.delete = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyCategoryb742d8a2fd34305b9482fb01a3d2ab0c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyCategoryb742d8a2fd34305b9482fb01a3d2ab0c.form = destroyCategoryb742d8a2fd34305b9482fb01a3d2ab0cForm
/**
* @see \App\Http\Controllers\BlogPostController::destroyCategory
* @see app/Http/Controllers/BlogPostController.php:370
* @route '/blog/categories/{category}'
*/
const destroyCategory11c918c09e9a8bf64e1a3bce6874b7a1 = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyCategory11c918c09e9a8bf64e1a3bce6874b7a1.url(args, options),
    method: 'delete',
})

destroyCategory11c918c09e9a8bf64e1a3bce6874b7a1.definition = {
    methods: ["delete"],
    url: '/blog/categories/{category}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BlogPostController::destroyCategory
* @see app/Http/Controllers/BlogPostController.php:370
* @route '/blog/categories/{category}'
*/
destroyCategory11c918c09e9a8bf64e1a3bce6874b7a1.url = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return destroyCategory11c918c09e9a8bf64e1a3bce6874b7a1.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::destroyCategory
* @see app/Http/Controllers/BlogPostController.php:370
* @route '/blog/categories/{category}'
*/
destroyCategory11c918c09e9a8bf64e1a3bce6874b7a1.delete = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyCategory11c918c09e9a8bf64e1a3bce6874b7a1.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\BlogPostController::destroyCategory
* @see app/Http/Controllers/BlogPostController.php:370
* @route '/blog/categories/{category}'
*/
const destroyCategory11c918c09e9a8bf64e1a3bce6874b7a1Form = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyCategory11c918c09e9a8bf64e1a3bce6874b7a1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::destroyCategory
* @see app/Http/Controllers/BlogPostController.php:370
* @route '/blog/categories/{category}'
*/
destroyCategory11c918c09e9a8bf64e1a3bce6874b7a1Form.delete = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyCategory11c918c09e9a8bf64e1a3bce6874b7a1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyCategory11c918c09e9a8bf64e1a3bce6874b7a1.form = destroyCategory11c918c09e9a8bf64e1a3bce6874b7a1Form

export const destroyCategory = {
    '/api/v1/blog/categories/{category}': destroyCategoryb742d8a2fd34305b9482fb01a3d2ab0c,
    '/blog/categories/{category}': destroyCategory11c918c09e9a8bf64e1a3bce6874b7a1,
}


/**
* @see \App\Http\Controllers\BlogPostController::storeTag
* @see app/Http/Controllers/BlogPostController.php:421
* @route '/api/v1/blog/tags'
*/
const storeTag9e84f08bb6444383a7b88553756e79b0 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeTag9e84f08bb6444383a7b88553756e79b0.url(options),
    method: 'post',
})

storeTag9e84f08bb6444383a7b88553756e79b0.definition = {
    methods: ["post"],
    url: '/api/v1/blog/tags',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BlogPostController::storeTag
* @see app/Http/Controllers/BlogPostController.php:421
* @route '/api/v1/blog/tags'
*/
storeTag9e84f08bb6444383a7b88553756e79b0.url = (options?: RouteQueryOptions) => {




    return storeTag9e84f08bb6444383a7b88553756e79b0.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::storeTag
* @see app/Http/Controllers/BlogPostController.php:421
* @route '/api/v1/blog/tags'
*/
storeTag9e84f08bb6444383a7b88553756e79b0.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeTag9e84f08bb6444383a7b88553756e79b0.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::storeTag
* @see app/Http/Controllers/BlogPostController.php:421
* @route '/api/v1/blog/tags'
*/
const storeTag9e84f08bb6444383a7b88553756e79b0Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeTag9e84f08bb6444383a7b88553756e79b0.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::storeTag
* @see app/Http/Controllers/BlogPostController.php:421
* @route '/api/v1/blog/tags'
*/
storeTag9e84f08bb6444383a7b88553756e79b0Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeTag9e84f08bb6444383a7b88553756e79b0.url(options),
    method: 'post',
})

storeTag9e84f08bb6444383a7b88553756e79b0.form = storeTag9e84f08bb6444383a7b88553756e79b0Form
/**
* @see \App\Http\Controllers\BlogPostController::storeTag
* @see app/Http/Controllers/BlogPostController.php:421
* @route '/blog/tags'
*/
const storeTage7b2cb7f9ed5fd2dcb3de666dc0bcbd2 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeTage7b2cb7f9ed5fd2dcb3de666dc0bcbd2.url(options),
    method: 'post',
})

storeTage7b2cb7f9ed5fd2dcb3de666dc0bcbd2.definition = {
    methods: ["post"],
    url: '/blog/tags',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BlogPostController::storeTag
* @see app/Http/Controllers/BlogPostController.php:421
* @route '/blog/tags'
*/
storeTage7b2cb7f9ed5fd2dcb3de666dc0bcbd2.url = (options?: RouteQueryOptions) => {




    return storeTage7b2cb7f9ed5fd2dcb3de666dc0bcbd2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::storeTag
* @see app/Http/Controllers/BlogPostController.php:421
* @route '/blog/tags'
*/
storeTage7b2cb7f9ed5fd2dcb3de666dc0bcbd2.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeTage7b2cb7f9ed5fd2dcb3de666dc0bcbd2.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::storeTag
* @see app/Http/Controllers/BlogPostController.php:421
* @route '/blog/tags'
*/
const storeTage7b2cb7f9ed5fd2dcb3de666dc0bcbd2Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeTage7b2cb7f9ed5fd2dcb3de666dc0bcbd2.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::storeTag
* @see app/Http/Controllers/BlogPostController.php:421
* @route '/blog/tags'
*/
storeTage7b2cb7f9ed5fd2dcb3de666dc0bcbd2Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeTage7b2cb7f9ed5fd2dcb3de666dc0bcbd2.url(options),
    method: 'post',
})

storeTage7b2cb7f9ed5fd2dcb3de666dc0bcbd2.form = storeTage7b2cb7f9ed5fd2dcb3de666dc0bcbd2Form

export const storeTag = {
    '/api/v1/blog/tags': storeTag9e84f08bb6444383a7b88553756e79b0,
    '/blog/tags': storeTage7b2cb7f9ed5fd2dcb3de666dc0bcbd2,
}


/**
* @see \App\Http\Controllers\BlogPostController::destroyTag
* @see app/Http/Controllers/BlogPostController.php:444
* @route '/api/v1/blog/tags/{tag}'
*/
const destroyTag7386d73db12fe70494c2f21f74d20b8a = (args: { tag: string | number | { id: string | number } } | [tag: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyTag7386d73db12fe70494c2f21f74d20b8a.url(args, options),
    method: 'delete',
})

destroyTag7386d73db12fe70494c2f21f74d20b8a.definition = {
    methods: ["delete"],
    url: '/api/v1/blog/tags/{tag}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BlogPostController::destroyTag
* @see app/Http/Controllers/BlogPostController.php:444
* @route '/api/v1/blog/tags/{tag}'
*/
destroyTag7386d73db12fe70494c2f21f74d20b8a.url = (args: { tag: string | number | { id: string | number } } | [tag: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tag: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { tag: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            tag: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        tag: typeof args.tag === 'object'
        ? args.tag.id
        : args.tag,
    }

    return destroyTag7386d73db12fe70494c2f21f74d20b8a.definition.url
            .replace('{tag}', parsedArgs.tag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::destroyTag
* @see app/Http/Controllers/BlogPostController.php:444
* @route '/api/v1/blog/tags/{tag}'
*/
destroyTag7386d73db12fe70494c2f21f74d20b8a.delete = (args: { tag: string | number | { id: string | number } } | [tag: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyTag7386d73db12fe70494c2f21f74d20b8a.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\BlogPostController::destroyTag
* @see app/Http/Controllers/BlogPostController.php:444
* @route '/api/v1/blog/tags/{tag}'
*/
const destroyTag7386d73db12fe70494c2f21f74d20b8aForm = (args: { tag: string | number | { id: string | number } } | [tag: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyTag7386d73db12fe70494c2f21f74d20b8a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::destroyTag
* @see app/Http/Controllers/BlogPostController.php:444
* @route '/api/v1/blog/tags/{tag}'
*/
destroyTag7386d73db12fe70494c2f21f74d20b8aForm.delete = (args: { tag: string | number | { id: string | number } } | [tag: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyTag7386d73db12fe70494c2f21f74d20b8a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyTag7386d73db12fe70494c2f21f74d20b8a.form = destroyTag7386d73db12fe70494c2f21f74d20b8aForm
/**
* @see \App\Http\Controllers\BlogPostController::destroyTag
* @see app/Http/Controllers/BlogPostController.php:444
* @route '/blog/tags/{tag}'
*/
const destroyTagc4c1c6ea06aa24316153f8ce839c2e11 = (args: { tag: string | number | { id: string | number } } | [tag: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyTagc4c1c6ea06aa24316153f8ce839c2e11.url(args, options),
    method: 'delete',
})

destroyTagc4c1c6ea06aa24316153f8ce839c2e11.definition = {
    methods: ["delete"],
    url: '/blog/tags/{tag}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BlogPostController::destroyTag
* @see app/Http/Controllers/BlogPostController.php:444
* @route '/blog/tags/{tag}'
*/
destroyTagc4c1c6ea06aa24316153f8ce839c2e11.url = (args: { tag: string | number | { id: string | number } } | [tag: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tag: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { tag: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            tag: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        tag: typeof args.tag === 'object'
        ? args.tag.id
        : args.tag,
    }

    return destroyTagc4c1c6ea06aa24316153f8ce839c2e11.definition.url
            .replace('{tag}', parsedArgs.tag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::destroyTag
* @see app/Http/Controllers/BlogPostController.php:444
* @route '/blog/tags/{tag}'
*/
destroyTagc4c1c6ea06aa24316153f8ce839c2e11.delete = (args: { tag: string | number | { id: string | number } } | [tag: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyTagc4c1c6ea06aa24316153f8ce839c2e11.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\BlogPostController::destroyTag
* @see app/Http/Controllers/BlogPostController.php:444
* @route '/blog/tags/{tag}'
*/
const destroyTagc4c1c6ea06aa24316153f8ce839c2e11Form = (args: { tag: string | number | { id: string | number } } | [tag: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyTagc4c1c6ea06aa24316153f8ce839c2e11.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::destroyTag
* @see app/Http/Controllers/BlogPostController.php:444
* @route '/blog/tags/{tag}'
*/
destroyTagc4c1c6ea06aa24316153f8ce839c2e11Form.delete = (args: { tag: string | number | { id: string | number } } | [tag: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyTagc4c1c6ea06aa24316153f8ce839c2e11.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyTagc4c1c6ea06aa24316153f8ce839c2e11.form = destroyTagc4c1c6ea06aa24316153f8ce839c2e11Form

export const destroyTag = {
    '/api/v1/blog/tags/{tag}': destroyTag7386d73db12fe70494c2f21f74d20b8a,
    '/blog/tags/{tag}': destroyTagc4c1c6ea06aa24316153f8ce839c2e11,
}


/**
* @see \App\Http\Controllers\BlogPostController::create
* @see app/Http/Controllers/BlogPostController.php:134
* @route '/blog/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/blog/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogPostController::create
* @see app/Http/Controllers/BlogPostController.php:134
* @route '/blog/create'
*/
create.url = (options?: RouteQueryOptions) => {




    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::create
* @see app/Http/Controllers/BlogPostController.php:134
* @route '/blog/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::create
* @see app/Http/Controllers/BlogPostController.php:134
* @route '/blog/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogPostController::create
* @see app/Http/Controllers/BlogPostController.php:134
* @route '/blog/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::create
* @see app/Http/Controllers/BlogPostController.php:134
* @route '/blog/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::create
* @see app/Http/Controllers/BlogPostController.php:134
* @route '/blog/create'
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
* @see \App\Http\Controllers\BlogPostController::edit
* @see app/Http/Controllers/BlogPostController.php:186
* @route '/blog/{post}/edit'
*/
export const edit = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/blog/{post}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogPostController::edit
* @see app/Http/Controllers/BlogPostController.php:186
* @route '/blog/{post}/edit'
*/
edit.url = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { post: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            post: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        post: typeof args.post === 'object'
        ? args.post.id
        : args.post,
    }

    return edit.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::edit
* @see app/Http/Controllers/BlogPostController.php:186
* @route '/blog/{post}/edit'
*/
edit.get = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::edit
* @see app/Http/Controllers/BlogPostController.php:186
* @route '/blog/{post}/edit'
*/
edit.head = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogPostController::edit
* @see app/Http/Controllers/BlogPostController.php:186
* @route '/blog/{post}/edit'
*/
const editForm = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::edit
* @see app/Http/Controllers/BlogPostController.php:186
* @route '/blog/{post}/edit'
*/
editForm.get = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::edit
* @see app/Http/Controllers/BlogPostController.php:186
* @route '/blog/{post}/edit'
*/
editForm.head = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\BlogPostController::updateCategory
* @see app/Http/Controllers/BlogPostController.php:343
* @route '/blog/categories/{category}'
*/
export const updateCategory = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateCategory.url(args, options),
    method: 'patch',
})

updateCategory.definition = {
    methods: ["patch"],
    url: '/blog/categories/{category}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\BlogPostController::updateCategory
* @see app/Http/Controllers/BlogPostController.php:343
* @route '/blog/categories/{category}'
*/
updateCategory.url = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return updateCategory.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::updateCategory
* @see app/Http/Controllers/BlogPostController.php:343
* @route '/blog/categories/{category}'
*/
updateCategory.patch = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateCategory.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\BlogPostController::updateCategory
* @see app/Http/Controllers/BlogPostController.php:343
* @route '/blog/categories/{category}'
*/
const updateCategoryForm = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateCategory.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::updateCategory
* @see app/Http/Controllers/BlogPostController.php:343
* @route '/blog/categories/{category}'
*/
updateCategoryForm.patch = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateCategory.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateCategory.form = updateCategoryForm

const BlogPostController = { index, show, categories, tags, store, update, destroy, storeCategory, destroyCategory, storeTag, destroyTag, create, edit, updateCategory }

export default BlogPostController