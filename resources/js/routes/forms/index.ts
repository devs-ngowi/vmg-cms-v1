import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/forms'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/forms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/forms'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/forms'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/forms'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/forms'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/forms'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/forms'
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
* @see \App\Http\Controllers\FormController::create
* @see app/Http/Controllers/FormController.php:137
* @route '/forms/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/forms/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FormController::create
* @see app/Http/Controllers/FormController.php:137
* @route '/forms/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::create
* @see app/Http/Controllers/FormController.php:137
* @route '/forms/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::create
* @see app/Http/Controllers/FormController.php:137
* @route '/forms/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FormController::create
* @see app/Http/Controllers/FormController.php:137
* @route '/forms/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::create
* @see app/Http/Controllers/FormController.php:137
* @route '/forms/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::create
* @see app/Http/Controllers/FormController.php:137
* @route '/forms/create'
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
* @see \App\Http\Controllers\FormController::store
* @see app/Http/Controllers/FormController.php:153
* @route '/forms'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/forms',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FormController::store
* @see app/Http/Controllers/FormController.php:153
* @route '/forms'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::store
* @see app/Http/Controllers/FormController.php:153
* @route '/forms'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::store
* @see app/Http/Controllers/FormController.php:153
* @route '/forms'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::store
* @see app/Http/Controllers/FormController.php:153
* @route '/forms'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/forms/{form}/edit'
*/
export const edit = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/forms/{form}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/forms/{form}/edit'
*/
edit.url = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { form: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { form: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            form: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        form: typeof args.form === 'object'
        ? args.form.id
        : args.form,
    }

    return edit.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/forms/{form}/edit'
*/
edit.get = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/forms/{form}/edit'
*/
edit.head = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/forms/{form}/edit'
*/
const editForm = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/forms/{form}/edit'
*/
editForm.get = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/forms/{form}/edit'
*/
editForm.head = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\FormController::update
* @see app/Http/Controllers/FormController.php:200
* @route '/forms/{form}'
*/
export const update = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/forms/{form}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\FormController::update
* @see app/Http/Controllers/FormController.php:200
* @route '/forms/{form}'
*/
update.url = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { form: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { form: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            form: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        form: typeof args.form === 'object'
        ? args.form.id
        : args.form,
    }

    return update.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::update
* @see app/Http/Controllers/FormController.php:200
* @route '/forms/{form}'
*/
update.patch = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\FormController::update
* @see app/Http/Controllers/FormController.php:200
* @route '/forms/{form}'
*/
const updateForm = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::update
* @see app/Http/Controllers/FormController.php:200
* @route '/forms/{form}'
*/
updateForm.patch = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\FormController::toggle
* @see app/Http/Controllers/FormController.php:227
* @route '/forms/{form}/toggle'
*/
export const toggle = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle.url(args, options),
    method: 'patch',
})

toggle.definition = {
    methods: ["patch"],
    url: '/forms/{form}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\FormController::toggle
* @see app/Http/Controllers/FormController.php:227
* @route '/forms/{form}/toggle'
*/
toggle.url = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { form: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { form: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            form: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        form: typeof args.form === 'object'
        ? args.form.id
        : args.form,
    }

    return toggle.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::toggle
* @see app/Http/Controllers/FormController.php:227
* @route '/forms/{form}/toggle'
*/
toggle.patch = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\FormController::toggle
* @see app/Http/Controllers/FormController.php:227
* @route '/forms/{form}/toggle'
*/
const toggleForm = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::toggle
* @see app/Http/Controllers/FormController.php:227
* @route '/forms/{form}/toggle'
*/
toggleForm.patch = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\FormController::destroy
* @see app/Http/Controllers/FormController.php:244
* @route '/forms/{form}'
*/
export const destroy = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/forms/{form}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\FormController::destroy
* @see app/Http/Controllers/FormController.php:244
* @route '/forms/{form}'
*/
destroy.url = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { form: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { form: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            form: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        form: typeof args.form === 'object'
        ? args.form.id
        : args.form,
    }

    return destroy.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::destroy
* @see app/Http/Controllers/FormController.php:244
* @route '/forms/{form}'
*/
destroy.delete = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\FormController::destroy
* @see app/Http/Controllers/FormController.php:244
* @route '/forms/{form}'
*/
const destroyForm = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::destroy
* @see app/Http/Controllers/FormController.php:244
* @route '/forms/{form}'
*/
destroyForm.delete = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const forms = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    toggle: Object.assign(toggle, toggle),
    destroy: Object.assign(destroy, destroy),
}

export default forms