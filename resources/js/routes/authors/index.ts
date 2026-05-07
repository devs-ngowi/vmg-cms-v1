import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AuthorController::index
* @see app/Http/Controllers/AuthorController.php:17
* @route '/authors'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/authors',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthorController::index
* @see app/Http/Controllers/AuthorController.php:17
* @route '/authors'
*/
index.url = (options?: RouteQueryOptions) => {




    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthorController::index
* @see app/Http/Controllers/AuthorController.php:17
* @route '/authors'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthorController::index
* @see app/Http/Controllers/AuthorController.php:17
* @route '/authors'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthorController::index
* @see app/Http/Controllers/AuthorController.php:17
* @route '/authors'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthorController::index
* @see app/Http/Controllers/AuthorController.php:17
* @route '/authors'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthorController::index
* @see app/Http/Controllers/AuthorController.php:17
* @route '/authors'
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
* @see \App\Http\Controllers\AuthorController::create
* @see app/Http/Controllers/AuthorController.php:39
* @route '/authors/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/authors/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthorController::create
* @see app/Http/Controllers/AuthorController.php:39
* @route '/authors/create'
*/
create.url = (options?: RouteQueryOptions) => {




    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthorController::create
* @see app/Http/Controllers/AuthorController.php:39
* @route '/authors/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthorController::create
* @see app/Http/Controllers/AuthorController.php:39
* @route '/authors/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthorController::create
* @see app/Http/Controllers/AuthorController.php:39
* @route '/authors/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthorController::create
* @see app/Http/Controllers/AuthorController.php:39
* @route '/authors/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthorController::create
* @see app/Http/Controllers/AuthorController.php:39
* @route '/authors/create'
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
* @see \App\Http\Controllers\AuthorController::store
* @see app/Http/Controllers/AuthorController.php:53
* @route '/authors'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/authors',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthorController::store
* @see app/Http/Controllers/AuthorController.php:53
* @route '/authors'
*/
store.url = (options?: RouteQueryOptions) => {




    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthorController::store
* @see app/Http/Controllers/AuthorController.php:53
* @route '/authors'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthorController::store
* @see app/Http/Controllers/AuthorController.php:53
* @route '/authors'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthorController::store
* @see app/Http/Controllers/AuthorController.php:53
* @route '/authors'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\AuthorController::edit
* @see app/Http/Controllers/AuthorController.php:69
* @route '/authors/{author}/edit'
*/
export const edit = (args: { author: string | number | { author_id: string | number } } | [author: string | number | { author_id: string | number } ] | string | number | { author_id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/authors/{author}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthorController::edit
* @see app/Http/Controllers/AuthorController.php:69
* @route '/authors/{author}/edit'
*/
edit.url = (args: { author: string | number | { author_id: string | number } } | [author: string | number | { author_id: string | number } ] | string | number | { author_id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { author: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'author_id' in args) {
        args = { author: args.author_id }
    }

    if (Array.isArray(args)) {
        args = {
            author: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        author: typeof args.author === 'object'
        ? args.author.author_id
        : args.author,
    }

    return edit.definition.url
            .replace('{author}', parsedArgs.author.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthorController::edit
* @see app/Http/Controllers/AuthorController.php:69
* @route '/authors/{author}/edit'
*/
edit.get = (args: { author: string | number | { author_id: string | number } } | [author: string | number | { author_id: string | number } ] | string | number | { author_id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthorController::edit
* @see app/Http/Controllers/AuthorController.php:69
* @route '/authors/{author}/edit'
*/
edit.head = (args: { author: string | number | { author_id: string | number } } | [author: string | number | { author_id: string | number } ] | string | number | { author_id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthorController::edit
* @see app/Http/Controllers/AuthorController.php:69
* @route '/authors/{author}/edit'
*/
const editForm = (args: { author: string | number | { author_id: string | number } } | [author: string | number | { author_id: string | number } ] | string | number | { author_id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthorController::edit
* @see app/Http/Controllers/AuthorController.php:69
* @route '/authors/{author}/edit'
*/
editForm.get = (args: { author: string | number | { author_id: string | number } } | [author: string | number | { author_id: string | number } ] | string | number | { author_id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthorController::edit
* @see app/Http/Controllers/AuthorController.php:69
* @route '/authors/{author}/edit'
*/
editForm.head = (args: { author: string | number | { author_id: string | number } } | [author: string | number | { author_id: string | number } ] | string | number | { author_id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AuthorController::update
* @see app/Http/Controllers/AuthorController.php:92
* @route '/authors/{author}'
*/
export const update = (args: { author: string | number | { author_id: string | number } } | [author: string | number | { author_id: string | number } ] | string | number | { author_id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/authors/{author}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\AuthorController::update
* @see app/Http/Controllers/AuthorController.php:92
* @route '/authors/{author}'
*/
update.url = (args: { author: string | number | { author_id: string | number } } | [author: string | number | { author_id: string | number } ] | string | number | { author_id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { author: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'author_id' in args) {
        args = { author: args.author_id }
    }

    if (Array.isArray(args)) {
        args = {
            author: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        author: typeof args.author === 'object'
        ? args.author.author_id
        : args.author,
    }

    return update.definition.url
            .replace('{author}', parsedArgs.author.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthorController::update
* @see app/Http/Controllers/AuthorController.php:92
* @route '/authors/{author}'
*/
update.patch = (args: { author: string | number | { author_id: string | number } } | [author: string | number | { author_id: string | number } ] | string | number | { author_id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\AuthorController::update
* @see app/Http/Controllers/AuthorController.php:92
* @route '/authors/{author}'
*/
const updateForm = (args: { author: string | number | { author_id: string | number } } | [author: string | number | { author_id: string | number } ] | string | number | { author_id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthorController::update
* @see app/Http/Controllers/AuthorController.php:92
* @route '/authors/{author}'
*/
updateForm.patch = (args: { author: string | number | { author_id: string | number } } | [author: string | number | { author_id: string | number } ] | string | number | { author_id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AuthorController::destroy
* @see app/Http/Controllers/AuthorController.php:112
* @route '/authors/{author}'
*/
export const destroy = (args: { author: string | number | { author_id: string | number } } | [author: string | number | { author_id: string | number } ] | string | number | { author_id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/authors/{author}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AuthorController::destroy
* @see app/Http/Controllers/AuthorController.php:112
* @route '/authors/{author}'
*/
destroy.url = (args: { author: string | number | { author_id: string | number } } | [author: string | number | { author_id: string | number } ] | string | number | { author_id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { author: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'author_id' in args) {
        args = { author: args.author_id }
    }

    if (Array.isArray(args)) {
        args = {
            author: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        author: typeof args.author === 'object'
        ? args.author.author_id
        : args.author,
    }

    return destroy.definition.url
            .replace('{author}', parsedArgs.author.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthorController::destroy
* @see app/Http/Controllers/AuthorController.php:112
* @route '/authors/{author}'
*/
destroy.delete = (args: { author: string | number | { author_id: string | number } } | [author: string | number | { author_id: string | number } ] | string | number | { author_id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AuthorController::destroy
* @see app/Http/Controllers/AuthorController.php:112
* @route '/authors/{author}'
*/
const destroyForm = (args: { author: string | number | { author_id: string | number } } | [author: string | number | { author_id: string | number } ] | string | number | { author_id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthorController::destroy
* @see app/Http/Controllers/AuthorController.php:112
* @route '/authors/{author}'
*/
destroyForm.delete = (args: { author: string | number | { author_id: string | number } } | [author: string | number | { author_id: string | number } ] | string | number | { author_id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm



const authors = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default authors