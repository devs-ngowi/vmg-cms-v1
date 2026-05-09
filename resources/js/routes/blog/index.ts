import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import categories08bc8d from './categories'
import tags0ac1c9 from './tags'
/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/blog'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/blog',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/blog'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/blog'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/blog'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/blog'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/blog'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::index
* @see app/Http/Controllers/BlogPostController.php:94
* @route '/blog'
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
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:141
* @route '/blog'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/blog',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:141
* @route '/blog'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:141
* @route '/blog'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:141
* @route '/blog'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:141
* @route '/blog'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

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
* @see \App\Http\Controllers\BlogPostController::update
* @see app/Http/Controllers/BlogPostController.php:211
* @route '/blog/{post}'
*/
export const update = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/blog/{post}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\BlogPostController::update
* @see app/Http/Controllers/BlogPostController.php:211
* @route '/blog/{post}'
*/
update.url = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::update
* @see app/Http/Controllers/BlogPostController.php:211
* @route '/blog/{post}'
*/
update.patch = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\BlogPostController::update
* @see app/Http/Controllers/BlogPostController.php:211
* @route '/blog/{post}'
*/
const updateForm = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
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
updateForm.patch = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:266
* @route '/blog/{post}'
*/
export const destroy = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/blog/{post}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:266
* @route '/blog/{post}'
*/
destroy.url = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:266
* @route '/blog/{post}'
*/
destroy.delete = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:266
* @route '/blog/{post}'
*/
const destroyForm = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
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
destroyForm.delete = (args: { post: string | number | { id: string | number } } | [post: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/blog/categories'
*/
export const categories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categories.url(options),
    method: 'get',
})

categories.definition = {
    methods: ["get","head"],
    url: '/blog/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/blog/categories'
*/
categories.url = (options?: RouteQueryOptions) => {
    return categories.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/blog/categories'
*/
categories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categories.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/blog/categories'
*/
categories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categories.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/blog/categories'
*/
const categoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/blog/categories'
*/
categoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::categories
* @see app/Http/Controllers/BlogPostController.php:287
* @route '/blog/categories'
*/
categoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

categories.form = categoriesForm

/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/blog/tags'
*/
export const tags = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tags.url(options),
    method: 'get',
})

tags.definition = {
    methods: ["get","head"],
    url: '/blog/tags',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/blog/tags'
*/
tags.url = (options?: RouteQueryOptions) => {
    return tags.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/blog/tags'
*/
tags.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tags.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/blog/tags'
*/
tags.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tags.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/blog/tags'
*/
const tagsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tags.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/blog/tags'
*/
tagsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tags.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BlogPostController::tags
* @see app/Http/Controllers/BlogPostController.php:397
* @route '/blog/tags'
*/
tagsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tags.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

tags.form = tagsForm

const blog = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    categories: Object.assign(categories, categories08bc8d),
    tags: Object.assign(tags, tags0ac1c9),
}

export default blog