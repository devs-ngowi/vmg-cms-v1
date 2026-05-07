import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/industries'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/industries',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/industries'
*/
index.url = (options?: RouteQueryOptions) => {




    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/industries'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/industries'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/industries'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/industries'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::index
* @see app/Http/Controllers/IndustryController.php:96
* @route '/industries'
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
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/industries/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/industries/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/industries/create'
*/
create.url = (options?: RouteQueryOptions) => {




    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/industries/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/industries/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/industries/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/industries/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::create
* @see app/Http/Controllers/IndustryController.php:138
* @route '/industries/create'
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
* @see \App\Http\Controllers\IndustryController::store
* @see app/Http/Controllers/IndustryController.php:149
* @route '/industries'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/industries',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\IndustryController::store
* @see app/Http/Controllers/IndustryController.php:149
* @route '/industries'
*/
store.url = (options?: RouteQueryOptions) => {




    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::store
* @see app/Http/Controllers/IndustryController.php:149
* @route '/industries'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\IndustryController::store
* @see app/Http/Controllers/IndustryController.php:149
* @route '/industries'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\IndustryController::store
* @see app/Http/Controllers/IndustryController.php:149
* @route '/industries'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/industries/{industry}/edit'
*/
export const edit = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/industries/{industry}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/industries/{industry}/edit'
*/
edit.url = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { industry: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { industry: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            industry: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        industry: typeof args.industry === 'object'
        ? args.industry.id
        : args.industry,
    }

    return edit.definition.url
            .replace('{industry}', parsedArgs.industry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/industries/{industry}/edit'
*/
edit.get = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/industries/{industry}/edit'
*/
edit.head = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/industries/{industry}/edit'
*/
const editForm = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/industries/{industry}/edit'
*/
editForm.get = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\IndustryController::edit
* @see app/Http/Controllers/IndustryController.php:175
* @route '/industries/{industry}/edit'
*/
editForm.head = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\IndustryController::update
* @see app/Http/Controllers/IndustryController.php:203
* @route '/industries/{industry}'
*/
export const update = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/industries/{industry}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\IndustryController::update
* @see app/Http/Controllers/IndustryController.php:203
* @route '/industries/{industry}'
*/
update.url = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { industry: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { industry: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            industry: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        industry: typeof args.industry === 'object'
        ? args.industry.id
        : args.industry,
    }

    return update.definition.url
            .replace('{industry}', parsedArgs.industry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::update
* @see app/Http/Controllers/IndustryController.php:203
* @route '/industries/{industry}'
*/
update.patch = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\IndustryController::update
* @see app/Http/Controllers/IndustryController.php:203
* @route '/industries/{industry}'
*/
const updateForm = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\IndustryController::update
* @see app/Http/Controllers/IndustryController.php:203
* @route '/industries/{industry}'
*/
updateForm.patch = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\IndustryController::toggle
* @see app/Http/Controllers/IndustryController.php:229
* @route '/industries/{industry}/toggle'
*/
export const toggle = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle.url(args, options),
    method: 'patch',
})

toggle.definition = {
    methods: ["patch"],
    url: '/industries/{industry}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\IndustryController::toggle
* @see app/Http/Controllers/IndustryController.php:229
* @route '/industries/{industry}/toggle'
*/
toggle.url = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { industry: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { industry: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            industry: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        industry: typeof args.industry === 'object'
        ? args.industry.id
        : args.industry,
    }

    return toggle.definition.url
            .replace('{industry}', parsedArgs.industry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::toggle
* @see app/Http/Controllers/IndustryController.php:229
* @route '/industries/{industry}/toggle'
*/
toggle.patch = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\IndustryController::toggle
* @see app/Http/Controllers/IndustryController.php:229
* @route '/industries/{industry}/toggle'
*/
const toggleForm = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\IndustryController::toggle
* @see app/Http/Controllers/IndustryController.php:229
* @route '/industries/{industry}/toggle'
*/
toggleForm.patch = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\IndustryController::destroy
* @see app/Http/Controllers/IndustryController.php:243
* @route '/industries/{industry}'
*/
export const destroy = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/industries/{industry}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\IndustryController::destroy
* @see app/Http/Controllers/IndustryController.php:243
* @route '/industries/{industry}'
*/
destroy.url = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { industry: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { industry: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            industry: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        industry: typeof args.industry === 'object'
        ? args.industry.id
        : args.industry,
    }

    return destroy.definition.url
            .replace('{industry}', parsedArgs.industry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\IndustryController::destroy
* @see app/Http/Controllers/IndustryController.php:243
* @route '/industries/{industry}'
*/
destroy.delete = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\IndustryController::destroy
* @see app/Http/Controllers/IndustryController.php:243
* @route '/industries/{industry}'
*/
const destroyForm = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\IndustryController::destroy
* @see app/Http/Controllers/IndustryController.php:243
* @route '/industries/{industry}'
*/
destroyForm.delete = (args: { industry: string | number | { id: string | number } } | [industry: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm



const industries = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    toggle: Object.assign(toggle, toggle),
    destroy: Object.assign(destroy, destroy),
}

export default industries