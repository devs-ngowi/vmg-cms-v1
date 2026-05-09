import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/pages'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/pages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/pages'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/pages'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/pages'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/pages'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/pages'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/pages'
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
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/pages/drafts'
*/
export const drafts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: drafts.url(options),
    method: 'get',
})

drafts.definition = {
    methods: ["get","head"],
    url: '/pages/drafts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/pages/drafts'
*/
drafts.url = (options?: RouteQueryOptions) => {
    return drafts.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/pages/drafts'
*/
drafts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: drafts.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/pages/drafts'
*/
drafts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: drafts.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/pages/drafts'
*/
const draftsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: drafts.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/pages/drafts'
*/
draftsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: drafts.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/pages/drafts'
*/
draftsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: drafts.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

drafts.form = draftsForm

/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/pages/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/pages/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/pages/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/pages/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/pages/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/pages/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/pages/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/pages/create'
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
* @see \App\Http\Controllers\PageController::store
* @see app/Http/Controllers/PageController.php:165
* @route '/pages'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/pages',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PageController::store
* @see app/Http/Controllers/PageController.php:165
* @route '/pages'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::store
* @see app/Http/Controllers/PageController.php:165
* @route '/pages'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PageController::store
* @see app/Http/Controllers/PageController.php:165
* @route '/pages'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PageController::store
* @see app/Http/Controllers/PageController.php:165
* @route '/pages'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\PageController::edit
* @see app/Http/Controllers/PageController.php:194
* @route '/pages/{page}/edit'
*/
export const edit = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/pages/{page}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PageController::edit
* @see app/Http/Controllers/PageController.php:194
* @route '/pages/{page}/edit'
*/
edit.url = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { page: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            page: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        page: typeof args.page === 'object'
        ? args.page.id
        : args.page,
    }

    return edit.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::edit
* @see app/Http/Controllers/PageController.php:194
* @route '/pages/{page}/edit'
*/
edit.get = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::edit
* @see app/Http/Controllers/PageController.php:194
* @route '/pages/{page}/edit'
*/
edit.head = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PageController::edit
* @see app/Http/Controllers/PageController.php:194
* @route '/pages/{page}/edit'
*/
const editForm = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::edit
* @see app/Http/Controllers/PageController.php:194
* @route '/pages/{page}/edit'
*/
editForm.get = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::edit
* @see app/Http/Controllers/PageController.php:194
* @route '/pages/{page}/edit'
*/
editForm.head = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\PageController::update
* @see app/Http/Controllers/PageController.php:229
* @route '/pages/{page}'
*/
export const update = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/pages/{page}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PageController::update
* @see app/Http/Controllers/PageController.php:229
* @route '/pages/{page}'
*/
update.url = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { page: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            page: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        page: typeof args.page === 'object'
        ? args.page.id
        : args.page,
    }

    return update.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::update
* @see app/Http/Controllers/PageController.php:229
* @route '/pages/{page}'
*/
update.patch = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PageController::update
* @see app/Http/Controllers/PageController.php:229
* @route '/pages/{page}'
*/
const updateForm = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PageController::update
* @see app/Http/Controllers/PageController.php:229
* @route '/pages/{page}'
*/
updateForm.patch = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\PageController::destroy
* @see app/Http/Controllers/PageController.php:263
* @route '/pages/{page}'
*/
export const destroy = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/pages/{page}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PageController::destroy
* @see app/Http/Controllers/PageController.php:263
* @route '/pages/{page}'
*/
destroy.url = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { page: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            page: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        page: typeof args.page === 'object'
        ? args.page.id
        : args.page,
    }

    return destroy.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::destroy
* @see app/Http/Controllers/PageController.php:263
* @route '/pages/{page}'
*/
destroy.delete = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\PageController::destroy
* @see app/Http/Controllers/PageController.php:263
* @route '/pages/{page}'
*/
const destroyForm = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PageController::destroy
* @see app/Http/Controllers/PageController.php:263
* @route '/pages/{page}'
*/
destroyForm.delete = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const pages = {
    index: Object.assign(index, index),
    drafts: Object.assign(drafts, drafts),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default pages