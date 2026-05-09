import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/testimonials'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/testimonials',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/testimonials'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/testimonials'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/testimonials'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/testimonials'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/testimonials'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/testimonials'
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
* @see \App\Http\Controllers\TestimonialController::store
* @see app/Http/Controllers/TestimonialController.php:79
* @route '/testimonials'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/testimonials',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TestimonialController::store
* @see app/Http/Controllers/TestimonialController.php:79
* @route '/testimonials'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialController::store
* @see app/Http/Controllers/TestimonialController.php:79
* @route '/testimonials'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TestimonialController::store
* @see app/Http/Controllers/TestimonialController.php:79
* @route '/testimonials'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TestimonialController::store
* @see app/Http/Controllers/TestimonialController.php:79
* @route '/testimonials'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\TestimonialController::update
* @see app/Http/Controllers/TestimonialController.php:107
* @route '/testimonials/{testimonial}'
*/
export const update = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/testimonials/{testimonial}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\TestimonialController::update
* @see app/Http/Controllers/TestimonialController.php:107
* @route '/testimonials/{testimonial}'
*/
update.url = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimonial: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { testimonial: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            testimonial: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        testimonial: typeof args.testimonial === 'object'
        ? args.testimonial.id
        : args.testimonial,
    }

    return update.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialController::update
* @see app/Http/Controllers/TestimonialController.php:107
* @route '/testimonials/{testimonial}'
*/
update.patch = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\TestimonialController::update
* @see app/Http/Controllers/TestimonialController.php:107
* @route '/testimonials/{testimonial}'
*/
const updateForm = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TestimonialController::update
* @see app/Http/Controllers/TestimonialController.php:107
* @route '/testimonials/{testimonial}'
*/
updateForm.patch = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\TestimonialController::approve
* @see app/Http/Controllers/TestimonialController.php:135
* @route '/testimonials/{testimonial}/approve'
*/
export const approve = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: approve.url(args, options),
    method: 'patch',
})

approve.definition = {
    methods: ["patch"],
    url: '/testimonials/{testimonial}/approve',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\TestimonialController::approve
* @see app/Http/Controllers/TestimonialController.php:135
* @route '/testimonials/{testimonial}/approve'
*/
approve.url = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimonial: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { testimonial: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            testimonial: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        testimonial: typeof args.testimonial === 'object'
        ? args.testimonial.id
        : args.testimonial,
    }

    return approve.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialController::approve
* @see app/Http/Controllers/TestimonialController.php:135
* @route '/testimonials/{testimonial}/approve'
*/
approve.patch = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: approve.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\TestimonialController::approve
* @see app/Http/Controllers/TestimonialController.php:135
* @route '/testimonials/{testimonial}/approve'
*/
const approveForm = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TestimonialController::approve
* @see app/Http/Controllers/TestimonialController.php:135
* @route '/testimonials/{testimonial}/approve'
*/
approveForm.patch = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

approve.form = approveForm

/**
* @see \App\Http\Controllers\TestimonialController::feature
* @see app/Http/Controllers/TestimonialController.php:153
* @route '/testimonials/{testimonial}/feature'
*/
export const feature = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: feature.url(args, options),
    method: 'patch',
})

feature.definition = {
    methods: ["patch"],
    url: '/testimonials/{testimonial}/feature',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\TestimonialController::feature
* @see app/Http/Controllers/TestimonialController.php:153
* @route '/testimonials/{testimonial}/feature'
*/
feature.url = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimonial: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { testimonial: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            testimonial: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        testimonial: typeof args.testimonial === 'object'
        ? args.testimonial.id
        : args.testimonial,
    }

    return feature.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialController::feature
* @see app/Http/Controllers/TestimonialController.php:153
* @route '/testimonials/{testimonial}/feature'
*/
feature.patch = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: feature.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\TestimonialController::feature
* @see app/Http/Controllers/TestimonialController.php:153
* @route '/testimonials/{testimonial}/feature'
*/
const featureForm = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: feature.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TestimonialController::feature
* @see app/Http/Controllers/TestimonialController.php:153
* @route '/testimonials/{testimonial}/feature'
*/
featureForm.patch = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: feature.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

feature.form = featureForm

/**
* @see \App\Http\Controllers\TestimonialController::destroy
* @see app/Http/Controllers/TestimonialController.php:171
* @route '/testimonials/{testimonial}'
*/
export const destroy = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/testimonials/{testimonial}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TestimonialController::destroy
* @see app/Http/Controllers/TestimonialController.php:171
* @route '/testimonials/{testimonial}'
*/
destroy.url = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimonial: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { testimonial: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            testimonial: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        testimonial: typeof args.testimonial === 'object'
        ? args.testimonial.id
        : args.testimonial,
    }

    return destroy.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialController::destroy
* @see app/Http/Controllers/TestimonialController.php:171
* @route '/testimonials/{testimonial}'
*/
destroy.delete = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\TestimonialController::destroy
* @see app/Http/Controllers/TestimonialController.php:171
* @route '/testimonials/{testimonial}'
*/
const destroyForm = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TestimonialController::destroy
* @see app/Http/Controllers/TestimonialController.php:171
* @route '/testimonials/{testimonial}'
*/
destroyForm.delete = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const testimonials = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    approve: Object.assign(approve, approve),
    feature: Object.assign(feature, feature),
    destroy: Object.assign(destroy, destroy),
}

export default testimonials