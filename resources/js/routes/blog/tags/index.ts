import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:421
* @route '/blog/tags'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/blog/tags',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:421
* @route '/blog/tags'
*/
store.url = (options?: RouteQueryOptions) => {




    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:421
* @route '/blog/tags'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:421
* @route '/blog/tags'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogPostController::store
* @see app/Http/Controllers/BlogPostController.php:421
* @route '/blog/tags'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:444
* @route '/blog/tags/{tag}'
*/
export const destroy = (args: { tag: string | number | { id: string | number } } | [tag: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/blog/tags/{tag}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:444
* @route '/blog/tags/{tag}'
*/
destroy.url = (args: { tag: string | number | { id: string | number } } | [tag: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{tag}', parsedArgs.tag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:444
* @route '/blog/tags/{tag}'
*/
destroy.delete = (args: { tag: string | number | { id: string | number } } | [tag: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\BlogPostController::destroy
* @see app/Http/Controllers/BlogPostController.php:444
* @route '/blog/tags/{tag}'
*/
const destroyForm = (args: { tag: string | number | { id: string | number } } | [tag: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/BlogPostController.php:444
* @route '/blog/tags/{tag}'
*/
destroyForm.delete = (args: { tag: string | number | { id: string | number } } | [tag: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm



const tags = {
    store: Object.assign(store, store),
    destroy: Object.assign(destroy, destroy),
}

export default tags