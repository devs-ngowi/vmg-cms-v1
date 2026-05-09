import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\BannerController::create
* @see app/Http/Controllers/BannerController.php:63
* @route '/banners/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/banners/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BannerController::create
* @see app/Http/Controllers/BannerController.php:63
* @route '/banners/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::create
* @see app/Http/Controllers/BannerController.php:63
* @route '/banners/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::create
* @see app/Http/Controllers/BannerController.php:63
* @route '/banners/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BannerController::create
* @see app/Http/Controllers/BannerController.php:63
* @route '/banners/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::create
* @see app/Http/Controllers/BannerController.php:63
* @route '/banners/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::create
* @see app/Http/Controllers/BannerController.php:63
* @route '/banners/create'
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
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/banners'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/banners',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/banners'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/banners'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/banners'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/banners'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/banners'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::index
* @see app/Http/Controllers/BannerController.php:46
* @route '/banners'
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
* @see \App\Http\Controllers\BannerController::edit
* @see app/Http/Controllers/BannerController.php:111
* @route '/banners/{banner}/edit'
*/
export const edit = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/banners/{banner}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BannerController::edit
* @see app/Http/Controllers/BannerController.php:111
* @route '/banners/{banner}/edit'
*/
edit.url = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { banner: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            banner: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner: typeof args.banner === 'object'
        ? args.banner.id
        : args.banner,
    }

    return edit.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::edit
* @see app/Http/Controllers/BannerController.php:111
* @route '/banners/{banner}/edit'
*/
edit.get = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::edit
* @see app/Http/Controllers/BannerController.php:111
* @route '/banners/{banner}/edit'
*/
edit.head = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BannerController::edit
* @see app/Http/Controllers/BannerController.php:111
* @route '/banners/{banner}/edit'
*/
const editForm = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::edit
* @see app/Http/Controllers/BannerController.php:111
* @route '/banners/{banner}/edit'
*/
editForm.get = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::edit
* @see app/Http/Controllers/BannerController.php:111
* @route '/banners/{banner}/edit'
*/
editForm.head = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\BannerController::show
* @see app/Http/Controllers/BannerController.php:98
* @route '/banners/{banner}'
*/
export const show = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/banners/{banner}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BannerController::show
* @see app/Http/Controllers/BannerController.php:98
* @route '/banners/{banner}'
*/
show.url = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { banner: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            banner: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner: typeof args.banner === 'object'
        ? args.banner.id
        : args.banner,
    }

    return show.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::show
* @see app/Http/Controllers/BannerController.php:98
* @route '/banners/{banner}'
*/
show.get = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::show
* @see app/Http/Controllers/BannerController.php:98
* @route '/banners/{banner}'
*/
show.head = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BannerController::show
* @see app/Http/Controllers/BannerController.php:98
* @route '/banners/{banner}'
*/
const showForm = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::show
* @see app/Http/Controllers/BannerController.php:98
* @route '/banners/{banner}'
*/
showForm.get = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BannerController::show
* @see app/Http/Controllers/BannerController.php:98
* @route '/banners/{banner}'
*/
showForm.head = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\BannerController::store
* @see app/Http/Controllers/BannerController.php:70
* @route '/banners'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/banners',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BannerController::store
* @see app/Http/Controllers/BannerController.php:70
* @route '/banners'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::store
* @see app/Http/Controllers/BannerController.php:70
* @route '/banners'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BannerController::store
* @see app/Http/Controllers/BannerController.php:70
* @route '/banners'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BannerController::store
* @see app/Http/Controllers/BannerController.php:70
* @route '/banners'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\BannerController::update
* @see app/Http/Controllers/BannerController.php:119
* @route '/banners/{banner}'
*/
export const update = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/banners/{banner}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\BannerController::update
* @see app/Http/Controllers/BannerController.php:119
* @route '/banners/{banner}'
*/
update.url = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { banner: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            banner: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner: typeof args.banner === 'object'
        ? args.banner.id
        : args.banner,
    }

    return update.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::update
* @see app/Http/Controllers/BannerController.php:119
* @route '/banners/{banner}'
*/
update.put = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\BannerController::update
* @see app/Http/Controllers/BannerController.php:119
* @route '/banners/{banner}'
*/
const updateForm = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BannerController::update
* @see app/Http/Controllers/BannerController.php:119
* @route '/banners/{banner}'
*/
updateForm.put = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\BannerController::toggle
* @see app/Http/Controllers/BannerController.php:147
* @route '/banners/{banner}/toggle'
*/
export const toggle = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle.url(args, options),
    method: 'patch',
})

toggle.definition = {
    methods: ["patch"],
    url: '/banners/{banner}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\BannerController::toggle
* @see app/Http/Controllers/BannerController.php:147
* @route '/banners/{banner}/toggle'
*/
toggle.url = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { banner: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            banner: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner: typeof args.banner === 'object'
        ? args.banner.id
        : args.banner,
    }

    return toggle.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::toggle
* @see app/Http/Controllers/BannerController.php:147
* @route '/banners/{banner}/toggle'
*/
toggle.patch = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\BannerController::toggle
* @see app/Http/Controllers/BannerController.php:147
* @route '/banners/{banner}/toggle'
*/
const toggleForm = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BannerController::toggle
* @see app/Http/Controllers/BannerController.php:147
* @route '/banners/{banner}/toggle'
*/
toggleForm.patch = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggle.form = toggleForm

/**
* @see \App\Http\Controllers\BannerController::destroy
* @see app/Http/Controllers/BannerController.php:162
* @route '/banners/{banner}'
*/
export const destroy = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/banners/{banner}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BannerController::destroy
* @see app/Http/Controllers/BannerController.php:162
* @route '/banners/{banner}'
*/
destroy.url = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { banner: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            banner: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner: typeof args.banner === 'object'
        ? args.banner.id
        : args.banner,
    }

    return destroy.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::destroy
* @see app/Http/Controllers/BannerController.php:162
* @route '/banners/{banner}'
*/
destroy.delete = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\BannerController::destroy
* @see app/Http/Controllers/BannerController.php:162
* @route '/banners/{banner}'
*/
const destroyForm = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BannerController::destroy
* @see app/Http/Controllers/BannerController.php:162
* @route '/banners/{banner}'
*/
destroyForm.delete = (args: { banner: string | number | { id: string | number } } | [banner: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const banners = {
    create: Object.assign(create, create),
    index: Object.assign(index, index),
    edit: Object.assign(edit, edit),
    show: Object.assign(show, show),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    toggle: Object.assign(toggle, toggle),
    destroy: Object.assign(destroy, destroy),
}

export default banners