import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/hero-slides'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/hero-slides',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/hero-slides'
*/
index.url = (options?: RouteQueryOptions) => {




    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/hero-slides'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/hero-slides'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/hero-slides'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/hero-slides'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::index
* @see app/Http/Controllers/HeroSlideController.php:69
* @route '/hero-slides'
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
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/hero-slides/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/hero-slides/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/hero-slides/create'
*/
create.url = (options?: RouteQueryOptions) => {




    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/hero-slides/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/hero-slides/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/hero-slides/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/hero-slides/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::create
* @see app/Http/Controllers/HeroSlideController.php:89
* @route '/hero-slides/create'
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
* @see \App\Http\Controllers\HeroSlideController::store
* @see app/Http/Controllers/HeroSlideController.php:111
* @route '/hero-slides'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/hero-slides',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HeroSlideController::store
* @see app/Http/Controllers/HeroSlideController.php:111
* @route '/hero-slides'
*/
store.url = (options?: RouteQueryOptions) => {




    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::store
* @see app/Http/Controllers/HeroSlideController.php:111
* @route '/hero-slides'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::store
* @see app/Http/Controllers/HeroSlideController.php:111
* @route '/hero-slides'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::store
* @see app/Http/Controllers/HeroSlideController.php:111
* @route '/hero-slides'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/hero-slides/{heroSlide}/edit'
*/
export const edit = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/hero-slides/{heroSlide}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/hero-slides/{heroSlide}/edit'
*/
edit.url = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { heroSlide: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { heroSlide: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            heroSlide: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        heroSlide: typeof args.heroSlide === 'object'
        ? args.heroSlide.id
        : args.heroSlide,
    }

    return edit.definition.url
            .replace('{heroSlide}', parsedArgs.heroSlide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/hero-slides/{heroSlide}/edit'
*/
edit.get = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/hero-slides/{heroSlide}/edit'
*/
edit.head = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/hero-slides/{heroSlide}/edit'
*/
const editForm = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/hero-slides/{heroSlide}/edit'
*/
editForm.get = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HeroSlideController::edit
* @see app/Http/Controllers/HeroSlideController.php:131
* @route '/hero-slides/{heroSlide}/edit'
*/
editForm.head = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\HeroSlideController::update
* @see app/Http/Controllers/HeroSlideController.php:151
* @route '/hero-slides/{heroSlide}'
*/
export const update = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/hero-slides/{heroSlide}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\HeroSlideController::update
* @see app/Http/Controllers/HeroSlideController.php:151
* @route '/hero-slides/{heroSlide}'
*/
update.url = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { heroSlide: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { heroSlide: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            heroSlide: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        heroSlide: typeof args.heroSlide === 'object'
        ? args.heroSlide.id
        : args.heroSlide,
    }

    return update.definition.url
            .replace('{heroSlide}', parsedArgs.heroSlide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::update
* @see app/Http/Controllers/HeroSlideController.php:151
* @route '/hero-slides/{heroSlide}'
*/
update.patch = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\HeroSlideController::update
* @see app/Http/Controllers/HeroSlideController.php:151
* @route '/hero-slides/{heroSlide}'
*/
const updateForm = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::update
* @see app/Http/Controllers/HeroSlideController.php:151
* @route '/hero-slides/{heroSlide}'
*/
updateForm.patch = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\HeroSlideController::toggle
* @see app/Http/Controllers/HeroSlideController.php:171
* @route '/hero-slides/{heroSlide}/toggle'
*/
export const toggle = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle.url(args, options),
    method: 'patch',
})

toggle.definition = {
    methods: ["patch"],
    url: '/hero-slides/{heroSlide}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\HeroSlideController::toggle
* @see app/Http/Controllers/HeroSlideController.php:171
* @route '/hero-slides/{heroSlide}/toggle'
*/
toggle.url = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { heroSlide: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { heroSlide: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            heroSlide: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        heroSlide: typeof args.heroSlide === 'object'
        ? args.heroSlide.id
        : args.heroSlide,
    }

    return toggle.definition.url
            .replace('{heroSlide}', parsedArgs.heroSlide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::toggle
* @see app/Http/Controllers/HeroSlideController.php:171
* @route '/hero-slides/{heroSlide}/toggle'
*/
toggle.patch = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\HeroSlideController::toggle
* @see app/Http/Controllers/HeroSlideController.php:171
* @route '/hero-slides/{heroSlide}/toggle'
*/
const toggleForm = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::toggle
* @see app/Http/Controllers/HeroSlideController.php:171
* @route '/hero-slides/{heroSlide}/toggle'
*/
toggleForm.patch = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\HeroSlideController::reorder
* @see app/Http/Controllers/HeroSlideController.php:190
* @route '/hero-slides/reorder'
*/
export const reorder = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/hero-slides/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HeroSlideController::reorder
* @see app/Http/Controllers/HeroSlideController.php:190
* @route '/hero-slides/reorder'
*/
reorder.url = (options?: RouteQueryOptions) => {




    return reorder.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::reorder
* @see app/Http/Controllers/HeroSlideController.php:190
* @route '/hero-slides/reorder'
*/
reorder.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::reorder
* @see app/Http/Controllers/HeroSlideController.php:190
* @route '/hero-slides/reorder'
*/
const reorderForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::reorder
* @see app/Http/Controllers/HeroSlideController.php:190
* @route '/hero-slides/reorder'
*/
reorderForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(options),
    method: 'post',
})

reorder.form = reorderForm

/**
* @see \App\Http\Controllers\HeroSlideController::destroy
* @see app/Http/Controllers/HeroSlideController.php:213
* @route '/hero-slides/{heroSlide}'
*/
export const destroy = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/hero-slides/{heroSlide}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HeroSlideController::destroy
* @see app/Http/Controllers/HeroSlideController.php:213
* @route '/hero-slides/{heroSlide}'
*/
destroy.url = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { heroSlide: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { heroSlide: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            heroSlide: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        heroSlide: typeof args.heroSlide === 'object'
        ? args.heroSlide.id
        : args.heroSlide,
    }

    return destroy.definition.url
            .replace('{heroSlide}', parsedArgs.heroSlide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HeroSlideController::destroy
* @see app/Http/Controllers/HeroSlideController.php:213
* @route '/hero-slides/{heroSlide}'
*/
destroy.delete = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\HeroSlideController::destroy
* @see app/Http/Controllers/HeroSlideController.php:213
* @route '/hero-slides/{heroSlide}'
*/
const destroyForm = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HeroSlideController::destroy
* @see app/Http/Controllers/HeroSlideController.php:213
* @route '/hero-slides/{heroSlide}'
*/
destroyForm.delete = (args: { heroSlide: string | number | { id: string | number } } | [heroSlide: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm



const heroSlides = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    toggle: Object.assign(toggle, toggle),
    reorder: Object.assign(reorder, reorder),
    destroy: Object.assign(destroy, destroy),
}

export default heroSlides