import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:316
* @route '/blog/categories'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/blog/categories',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:316
* @route '/blog/categories'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:316
* @route '/blog/categories'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:316
* @route '/blog/categories'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:316
* @route '/blog/categories'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\BlogPostController::update
* @see app/Http/Controllers/BlogPostController.php:343
* @route '/blog/categories/{category}'
*/
export const update = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/blog/categories/{category}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\BlogPostController::update
* @see app/Http/Controllers/BlogPostController.php:343
* @route '/blog/categories/{category}'
*/
update.url = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::update
* @see app/Http/Controllers/BlogPostController.php:343
* @route '/blog/categories/{category}'
*/
update.patch = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\BlogPostController::update
* @see app/Http/Controllers/BlogPostController.php:343
* @route '/blog/categories/{category}'
*/
const updateForm = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/BlogPostController.php:343
* @route '/blog/categories/{category}'
*/
updateForm.patch = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/BlogPostController.php:370
* @route '/blog/categories/{category}'
*/
export const destroy = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/blog/categories/{category}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:370
* @route '/blog/categories/{category}'
*/
destroy.url = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:370
* @route '/blog/categories/{category}'
*/
destroy.delete = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:370
* @route '/blog/categories/{category}'
*/
const destroyForm = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/BlogPostController.php:370
* @route '/blog/categories/{category}'
*/
destroyForm.delete = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const categories = {
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default categories