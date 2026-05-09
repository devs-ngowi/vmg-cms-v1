import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:286
* @route '/knowledge/articles'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/knowledge/articles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:286
* @route '/knowledge/articles'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:286
* @route '/knowledge/articles'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:286
* @route '/knowledge/articles'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:286
* @route '/knowledge/articles'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:286
* @route '/knowledge/articles'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:286
* @route '/knowledge/articles'
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
* @see \App\Http\Controllers\KnowledgeController::create
* @see app/Http/Controllers/KnowledgeController.php:302
* @route '/knowledge/articles/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/knowledge/articles/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KnowledgeController::create
* @see app/Http/Controllers/KnowledgeController.php:302
* @route '/knowledge/articles/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::create
* @see app/Http/Controllers/KnowledgeController.php:302
* @route '/knowledge/articles/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::create
* @see app/Http/Controllers/KnowledgeController.php:302
* @route '/knowledge/articles/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KnowledgeController::create
* @see app/Http/Controllers/KnowledgeController.php:302
* @route '/knowledge/articles/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::create
* @see app/Http/Controllers/KnowledgeController.php:302
* @route '/knowledge/articles/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::create
* @see app/Http/Controllers/KnowledgeController.php:302
* @route '/knowledge/articles/create'
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
* @see \App\Http\Controllers\KnowledgeController::store
* @see app/Http/Controllers/KnowledgeController.php:317
* @route '/knowledge/articles'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/knowledge/articles',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\KnowledgeController::store
* @see app/Http/Controllers/KnowledgeController.php:317
* @route '/knowledge/articles'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::store
* @see app/Http/Controllers/KnowledgeController.php:317
* @route '/knowledge/articles'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::store
* @see app/Http/Controllers/KnowledgeController.php:317
* @route '/knowledge/articles'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::store
* @see app/Http/Controllers/KnowledgeController.php:317
* @route '/knowledge/articles'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\KnowledgeController::edit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/knowledge/articles/{article}/edit'
*/
export const edit = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/knowledge/articles/{article}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KnowledgeController::edit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/knowledge/articles/{article}/edit'
*/
edit.url = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        article: typeof args.article === 'object'
        ? args.article.id
        : args.article,
    }

    return edit.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::edit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/knowledge/articles/{article}/edit'
*/
edit.get = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::edit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/knowledge/articles/{article}/edit'
*/
edit.head = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KnowledgeController::edit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/knowledge/articles/{article}/edit'
*/
const editForm = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::edit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/knowledge/articles/{article}/edit'
*/
editForm.get = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::edit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/knowledge/articles/{article}/edit'
*/
editForm.head = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\KnowledgeController::update
* @see app/Http/Controllers/KnowledgeController.php:386
* @route '/knowledge/articles/{article}'
*/
export const update = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/knowledge/articles/{article}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\KnowledgeController::update
* @see app/Http/Controllers/KnowledgeController.php:386
* @route '/knowledge/articles/{article}'
*/
update.url = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        article: typeof args.article === 'object'
        ? args.article.id
        : args.article,
    }

    return update.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::update
* @see app/Http/Controllers/KnowledgeController.php:386
* @route '/knowledge/articles/{article}'
*/
update.patch = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\KnowledgeController::update
* @see app/Http/Controllers/KnowledgeController.php:386
* @route '/knowledge/articles/{article}'
*/
const updateForm = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::update
* @see app/Http/Controllers/KnowledgeController.php:386
* @route '/knowledge/articles/{article}'
*/
updateForm.patch = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\KnowledgeController::destroy
* @see app/Http/Controllers/KnowledgeController.php:427
* @route '/knowledge/articles/{article}'
*/
export const destroy = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/knowledge/articles/{article}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\KnowledgeController::destroy
* @see app/Http/Controllers/KnowledgeController.php:427
* @route '/knowledge/articles/{article}'
*/
destroy.url = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        article: typeof args.article === 'object'
        ? args.article.id
        : args.article,
    }

    return destroy.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::destroy
* @see app/Http/Controllers/KnowledgeController.php:427
* @route '/knowledge/articles/{article}'
*/
destroy.delete = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\KnowledgeController::destroy
* @see app/Http/Controllers/KnowledgeController.php:427
* @route '/knowledge/articles/{article}'
*/
const destroyForm = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::destroy
* @see app/Http/Controllers/KnowledgeController.php:427
* @route '/knowledge/articles/{article}'
*/
destroyForm.delete = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\KnowledgeController::toggle
* @see app/Http/Controllers/KnowledgeController.php:439
* @route '/knowledge/articles/{article}/toggle'
*/
export const toggle = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle.url(args, options),
    method: 'patch',
})

toggle.definition = {
    methods: ["patch"],
    url: '/knowledge/articles/{article}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\KnowledgeController::toggle
* @see app/Http/Controllers/KnowledgeController.php:439
* @route '/knowledge/articles/{article}/toggle'
*/
toggle.url = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        article: typeof args.article === 'object'
        ? args.article.id
        : args.article,
    }

    return toggle.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::toggle
* @see app/Http/Controllers/KnowledgeController.php:439
* @route '/knowledge/articles/{article}/toggle'
*/
toggle.patch = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\KnowledgeController::toggle
* @see app/Http/Controllers/KnowledgeController.php:439
* @route '/knowledge/articles/{article}/toggle'
*/
const toggleForm = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::toggle
* @see app/Http/Controllers/KnowledgeController.php:439
* @route '/knowledge/articles/{article}/toggle'
*/
toggleForm.patch = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggle.form = toggleForm

const articles = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    toggle: Object.assign(toggle, toggle),
}

export default articles