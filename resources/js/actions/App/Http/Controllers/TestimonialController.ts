import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/api/v1/testimonials'
*/
const index4fa4077218d5e7fe77081b5744a29838 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4fa4077218d5e7fe77081b5744a29838.url(options),
    method: 'get',
})

index4fa4077218d5e7fe77081b5744a29838.definition = {
    methods: ["get","head"],
    url: '/api/v1/testimonials',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/api/v1/testimonials'
*/
index4fa4077218d5e7fe77081b5744a29838.url = (options?: RouteQueryOptions) => {
    return index4fa4077218d5e7fe77081b5744a29838.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/api/v1/testimonials'
*/
index4fa4077218d5e7fe77081b5744a29838.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4fa4077218d5e7fe77081b5744a29838.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/api/v1/testimonials'
*/
index4fa4077218d5e7fe77081b5744a29838.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index4fa4077218d5e7fe77081b5744a29838.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/api/v1/testimonials'
*/
const index4fa4077218d5e7fe77081b5744a29838Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4fa4077218d5e7fe77081b5744a29838.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/api/v1/testimonials'
*/
index4fa4077218d5e7fe77081b5744a29838Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4fa4077218d5e7fe77081b5744a29838.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/api/v1/testimonials'
*/
index4fa4077218d5e7fe77081b5744a29838Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4fa4077218d5e7fe77081b5744a29838.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index4fa4077218d5e7fe77081b5744a29838.form = index4fa4077218d5e7fe77081b5744a29838Form
/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/testimonials'
*/
const index72b1a7119a7eff10378f8adae8662ffa = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index72b1a7119a7eff10378f8adae8662ffa.url(options),
    method: 'get',
})

index72b1a7119a7eff10378f8adae8662ffa.definition = {
    methods: ["get","head"],
    url: '/testimonials',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/testimonials'
*/
index72b1a7119a7eff10378f8adae8662ffa.url = (options?: RouteQueryOptions) => {
    return index72b1a7119a7eff10378f8adae8662ffa.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/testimonials'
*/
index72b1a7119a7eff10378f8adae8662ffa.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index72b1a7119a7eff10378f8adae8662ffa.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/testimonials'
*/
index72b1a7119a7eff10378f8adae8662ffa.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index72b1a7119a7eff10378f8adae8662ffa.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/testimonials'
*/
const index72b1a7119a7eff10378f8adae8662ffaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index72b1a7119a7eff10378f8adae8662ffa.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/testimonials'
*/
index72b1a7119a7eff10378f8adae8662ffaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index72b1a7119a7eff10378f8adae8662ffa.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TestimonialController::index
* @see app/Http/Controllers/TestimonialController.php:57
* @route '/testimonials'
*/
index72b1a7119a7eff10378f8adae8662ffaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index72b1a7119a7eff10378f8adae8662ffa.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index72b1a7119a7eff10378f8adae8662ffa.form = index72b1a7119a7eff10378f8adae8662ffaForm

export const index = {
    '/api/v1/testimonials': index4fa4077218d5e7fe77081b5744a29838,
    '/testimonials': index72b1a7119a7eff10378f8adae8662ffa,
}

/**
* @see \App\Http\Controllers\TestimonialController::store
* @see app/Http/Controllers/TestimonialController.php:79
* @route '/api/v1/testimonials'
*/
const store4fa4077218d5e7fe77081b5744a29838 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store4fa4077218d5e7fe77081b5744a29838.url(options),
    method: 'post',
})

store4fa4077218d5e7fe77081b5744a29838.definition = {
    methods: ["post"],
    url: '/api/v1/testimonials',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TestimonialController::store
* @see app/Http/Controllers/TestimonialController.php:79
* @route '/api/v1/testimonials'
*/
store4fa4077218d5e7fe77081b5744a29838.url = (options?: RouteQueryOptions) => {
    return store4fa4077218d5e7fe77081b5744a29838.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialController::store
* @see app/Http/Controllers/TestimonialController.php:79
* @route '/api/v1/testimonials'
*/
store4fa4077218d5e7fe77081b5744a29838.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store4fa4077218d5e7fe77081b5744a29838.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TestimonialController::store
* @see app/Http/Controllers/TestimonialController.php:79
* @route '/api/v1/testimonials'
*/
const store4fa4077218d5e7fe77081b5744a29838Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store4fa4077218d5e7fe77081b5744a29838.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TestimonialController::store
* @see app/Http/Controllers/TestimonialController.php:79
* @route '/api/v1/testimonials'
*/
store4fa4077218d5e7fe77081b5744a29838Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store4fa4077218d5e7fe77081b5744a29838.url(options),
    method: 'post',
})

store4fa4077218d5e7fe77081b5744a29838.form = store4fa4077218d5e7fe77081b5744a29838Form
/**
* @see \App\Http\Controllers\TestimonialController::store
* @see app/Http/Controllers/TestimonialController.php:79
* @route '/testimonials'
*/
const store72b1a7119a7eff10378f8adae8662ffa = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store72b1a7119a7eff10378f8adae8662ffa.url(options),
    method: 'post',
})

store72b1a7119a7eff10378f8adae8662ffa.definition = {
    methods: ["post"],
    url: '/testimonials',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TestimonialController::store
* @see app/Http/Controllers/TestimonialController.php:79
* @route '/testimonials'
*/
store72b1a7119a7eff10378f8adae8662ffa.url = (options?: RouteQueryOptions) => {
    return store72b1a7119a7eff10378f8adae8662ffa.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialController::store
* @see app/Http/Controllers/TestimonialController.php:79
* @route '/testimonials'
*/
store72b1a7119a7eff10378f8adae8662ffa.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store72b1a7119a7eff10378f8adae8662ffa.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TestimonialController::store
* @see app/Http/Controllers/TestimonialController.php:79
* @route '/testimonials'
*/
const store72b1a7119a7eff10378f8adae8662ffaForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store72b1a7119a7eff10378f8adae8662ffa.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TestimonialController::store
* @see app/Http/Controllers/TestimonialController.php:79
* @route '/testimonials'
*/
store72b1a7119a7eff10378f8adae8662ffaForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store72b1a7119a7eff10378f8adae8662ffa.url(options),
    method: 'post',
})

store72b1a7119a7eff10378f8adae8662ffa.form = store72b1a7119a7eff10378f8adae8662ffaForm

export const store = {
    '/api/v1/testimonials': store4fa4077218d5e7fe77081b5744a29838,
    '/testimonials': store72b1a7119a7eff10378f8adae8662ffa,
}

/**
* @see \App\Http\Controllers\TestimonialController::update
* @see app/Http/Controllers/TestimonialController.php:107
* @route '/api/v1/testimonials/{testimonial}'
*/
const update840deb74ce12d26ffbdbd7c3307733d6 = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update840deb74ce12d26ffbdbd7c3307733d6.url(args, options),
    method: 'put',
})

update840deb74ce12d26ffbdbd7c3307733d6.definition = {
    methods: ["put"],
    url: '/api/v1/testimonials/{testimonial}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\TestimonialController::update
* @see app/Http/Controllers/TestimonialController.php:107
* @route '/api/v1/testimonials/{testimonial}'
*/
update840deb74ce12d26ffbdbd7c3307733d6.url = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return update840deb74ce12d26ffbdbd7c3307733d6.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialController::update
* @see app/Http/Controllers/TestimonialController.php:107
* @route '/api/v1/testimonials/{testimonial}'
*/
update840deb74ce12d26ffbdbd7c3307733d6.put = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update840deb74ce12d26ffbdbd7c3307733d6.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\TestimonialController::update
* @see app/Http/Controllers/TestimonialController.php:107
* @route '/api/v1/testimonials/{testimonial}'
*/
const update840deb74ce12d26ffbdbd7c3307733d6Form = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update840deb74ce12d26ffbdbd7c3307733d6.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TestimonialController::update
* @see app/Http/Controllers/TestimonialController.php:107
* @route '/api/v1/testimonials/{testimonial}'
*/
update840deb74ce12d26ffbdbd7c3307733d6Form.put = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update840deb74ce12d26ffbdbd7c3307733d6.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update840deb74ce12d26ffbdbd7c3307733d6.form = update840deb74ce12d26ffbdbd7c3307733d6Form
/**
* @see \App\Http\Controllers\TestimonialController::update
* @see app/Http/Controllers/TestimonialController.php:107
* @route '/testimonials/{testimonial}'
*/
const update194bcc97b7cd6daaf5e2b50dd89bc238 = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update194bcc97b7cd6daaf5e2b50dd89bc238.url(args, options),
    method: 'patch',
})

update194bcc97b7cd6daaf5e2b50dd89bc238.definition = {
    methods: ["patch"],
    url: '/testimonials/{testimonial}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\TestimonialController::update
* @see app/Http/Controllers/TestimonialController.php:107
* @route '/testimonials/{testimonial}'
*/
update194bcc97b7cd6daaf5e2b50dd89bc238.url = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return update194bcc97b7cd6daaf5e2b50dd89bc238.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialController::update
* @see app/Http/Controllers/TestimonialController.php:107
* @route '/testimonials/{testimonial}'
*/
update194bcc97b7cd6daaf5e2b50dd89bc238.patch = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update194bcc97b7cd6daaf5e2b50dd89bc238.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\TestimonialController::update
* @see app/Http/Controllers/TestimonialController.php:107
* @route '/testimonials/{testimonial}'
*/
const update194bcc97b7cd6daaf5e2b50dd89bc238Form = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update194bcc97b7cd6daaf5e2b50dd89bc238.url(args, {
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
update194bcc97b7cd6daaf5e2b50dd89bc238Form.patch = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update194bcc97b7cd6daaf5e2b50dd89bc238.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update194bcc97b7cd6daaf5e2b50dd89bc238.form = update194bcc97b7cd6daaf5e2b50dd89bc238Form

export const update = {
    '/api/v1/testimonials/{testimonial}': update840deb74ce12d26ffbdbd7c3307733d6,
    '/testimonials/{testimonial}': update194bcc97b7cd6daaf5e2b50dd89bc238,
}

/**
* @see \App\Http\Controllers\TestimonialController::destroy
* @see app/Http/Controllers/TestimonialController.php:171
* @route '/api/v1/testimonials/{testimonial}'
*/
const destroy840deb74ce12d26ffbdbd7c3307733d6 = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy840deb74ce12d26ffbdbd7c3307733d6.url(args, options),
    method: 'delete',
})

destroy840deb74ce12d26ffbdbd7c3307733d6.definition = {
    methods: ["delete"],
    url: '/api/v1/testimonials/{testimonial}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TestimonialController::destroy
* @see app/Http/Controllers/TestimonialController.php:171
* @route '/api/v1/testimonials/{testimonial}'
*/
destroy840deb74ce12d26ffbdbd7c3307733d6.url = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return destroy840deb74ce12d26ffbdbd7c3307733d6.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialController::destroy
* @see app/Http/Controllers/TestimonialController.php:171
* @route '/api/v1/testimonials/{testimonial}'
*/
destroy840deb74ce12d26ffbdbd7c3307733d6.delete = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy840deb74ce12d26ffbdbd7c3307733d6.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\TestimonialController::destroy
* @see app/Http/Controllers/TestimonialController.php:171
* @route '/api/v1/testimonials/{testimonial}'
*/
const destroy840deb74ce12d26ffbdbd7c3307733d6Form = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy840deb74ce12d26ffbdbd7c3307733d6.url(args, {
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
* @route '/api/v1/testimonials/{testimonial}'
*/
destroy840deb74ce12d26ffbdbd7c3307733d6Form.delete = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy840deb74ce12d26ffbdbd7c3307733d6.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy840deb74ce12d26ffbdbd7c3307733d6.form = destroy840deb74ce12d26ffbdbd7c3307733d6Form
/**
* @see \App\Http\Controllers\TestimonialController::destroy
* @see app/Http/Controllers/TestimonialController.php:171
* @route '/testimonials/{testimonial}'
*/
const destroy194bcc97b7cd6daaf5e2b50dd89bc238 = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy194bcc97b7cd6daaf5e2b50dd89bc238.url(args, options),
    method: 'delete',
})

destroy194bcc97b7cd6daaf5e2b50dd89bc238.definition = {
    methods: ["delete"],
    url: '/testimonials/{testimonial}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TestimonialController::destroy
* @see app/Http/Controllers/TestimonialController.php:171
* @route '/testimonials/{testimonial}'
*/
destroy194bcc97b7cd6daaf5e2b50dd89bc238.url = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return destroy194bcc97b7cd6daaf5e2b50dd89bc238.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialController::destroy
* @see app/Http/Controllers/TestimonialController.php:171
* @route '/testimonials/{testimonial}'
*/
destroy194bcc97b7cd6daaf5e2b50dd89bc238.delete = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy194bcc97b7cd6daaf5e2b50dd89bc238.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\TestimonialController::destroy
* @see app/Http/Controllers/TestimonialController.php:171
* @route '/testimonials/{testimonial}'
*/
const destroy194bcc97b7cd6daaf5e2b50dd89bc238Form = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy194bcc97b7cd6daaf5e2b50dd89bc238.url(args, {
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
destroy194bcc97b7cd6daaf5e2b50dd89bc238Form.delete = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy194bcc97b7cd6daaf5e2b50dd89bc238.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy194bcc97b7cd6daaf5e2b50dd89bc238.form = destroy194bcc97b7cd6daaf5e2b50dd89bc238Form

export const destroy = {
    '/api/v1/testimonials/{testimonial}': destroy840deb74ce12d26ffbdbd7c3307733d6,
    '/testimonials/{testimonial}': destroy194bcc97b7cd6daaf5e2b50dd89bc238,
}

/**
* @see \App\Http\Controllers\TestimonialController::approve
* @see app/Http/Controllers/TestimonialController.php:135
* @route '/api/v1/testimonials/{testimonial}/approve'
*/
const approve31659f6a9b883a1665d09252fa8bf7d7 = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: approve31659f6a9b883a1665d09252fa8bf7d7.url(args, options),
    method: 'patch',
})

approve31659f6a9b883a1665d09252fa8bf7d7.definition = {
    methods: ["patch"],
    url: '/api/v1/testimonials/{testimonial}/approve',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\TestimonialController::approve
* @see app/Http/Controllers/TestimonialController.php:135
* @route '/api/v1/testimonials/{testimonial}/approve'
*/
approve31659f6a9b883a1665d09252fa8bf7d7.url = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return approve31659f6a9b883a1665d09252fa8bf7d7.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialController::approve
* @see app/Http/Controllers/TestimonialController.php:135
* @route '/api/v1/testimonials/{testimonial}/approve'
*/
approve31659f6a9b883a1665d09252fa8bf7d7.patch = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: approve31659f6a9b883a1665d09252fa8bf7d7.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\TestimonialController::approve
* @see app/Http/Controllers/TestimonialController.php:135
* @route '/api/v1/testimonials/{testimonial}/approve'
*/
const approve31659f6a9b883a1665d09252fa8bf7d7Form = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve31659f6a9b883a1665d09252fa8bf7d7.url(args, {
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
* @route '/api/v1/testimonials/{testimonial}/approve'
*/
approve31659f6a9b883a1665d09252fa8bf7d7Form.patch = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve31659f6a9b883a1665d09252fa8bf7d7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

approve31659f6a9b883a1665d09252fa8bf7d7.form = approve31659f6a9b883a1665d09252fa8bf7d7Form
/**
* @see \App\Http\Controllers\TestimonialController::approve
* @see app/Http/Controllers/TestimonialController.php:135
* @route '/testimonials/{testimonial}/approve'
*/
const approve1c0c33ef940a2f104e9b2a6c5fb7262b = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: approve1c0c33ef940a2f104e9b2a6c5fb7262b.url(args, options),
    method: 'patch',
})

approve1c0c33ef940a2f104e9b2a6c5fb7262b.definition = {
    methods: ["patch"],
    url: '/testimonials/{testimonial}/approve',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\TestimonialController::approve
* @see app/Http/Controllers/TestimonialController.php:135
* @route '/testimonials/{testimonial}/approve'
*/
approve1c0c33ef940a2f104e9b2a6c5fb7262b.url = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return approve1c0c33ef940a2f104e9b2a6c5fb7262b.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialController::approve
* @see app/Http/Controllers/TestimonialController.php:135
* @route '/testimonials/{testimonial}/approve'
*/
approve1c0c33ef940a2f104e9b2a6c5fb7262b.patch = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: approve1c0c33ef940a2f104e9b2a6c5fb7262b.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\TestimonialController::approve
* @see app/Http/Controllers/TestimonialController.php:135
* @route '/testimonials/{testimonial}/approve'
*/
const approve1c0c33ef940a2f104e9b2a6c5fb7262bForm = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve1c0c33ef940a2f104e9b2a6c5fb7262b.url(args, {
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
approve1c0c33ef940a2f104e9b2a6c5fb7262bForm.patch = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve1c0c33ef940a2f104e9b2a6c5fb7262b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

approve1c0c33ef940a2f104e9b2a6c5fb7262b.form = approve1c0c33ef940a2f104e9b2a6c5fb7262bForm

export const approve = {
    '/api/v1/testimonials/{testimonial}/approve': approve31659f6a9b883a1665d09252fa8bf7d7,
    '/testimonials/{testimonial}/approve': approve1c0c33ef940a2f104e9b2a6c5fb7262b,
}

/**
* @see \App\Http\Controllers\TestimonialController::feature
* @see app/Http/Controllers/TestimonialController.php:153
* @route '/api/v1/testimonials/{testimonial}/feature'
*/
const feature2bb9a561ba5b3803f05aacc083d54a9f = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: feature2bb9a561ba5b3803f05aacc083d54a9f.url(args, options),
    method: 'patch',
})

feature2bb9a561ba5b3803f05aacc083d54a9f.definition = {
    methods: ["patch"],
    url: '/api/v1/testimonials/{testimonial}/feature',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\TestimonialController::feature
* @see app/Http/Controllers/TestimonialController.php:153
* @route '/api/v1/testimonials/{testimonial}/feature'
*/
feature2bb9a561ba5b3803f05aacc083d54a9f.url = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return feature2bb9a561ba5b3803f05aacc083d54a9f.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialController::feature
* @see app/Http/Controllers/TestimonialController.php:153
* @route '/api/v1/testimonials/{testimonial}/feature'
*/
feature2bb9a561ba5b3803f05aacc083d54a9f.patch = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: feature2bb9a561ba5b3803f05aacc083d54a9f.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\TestimonialController::feature
* @see app/Http/Controllers/TestimonialController.php:153
* @route '/api/v1/testimonials/{testimonial}/feature'
*/
const feature2bb9a561ba5b3803f05aacc083d54a9fForm = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: feature2bb9a561ba5b3803f05aacc083d54a9f.url(args, {
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
* @route '/api/v1/testimonials/{testimonial}/feature'
*/
feature2bb9a561ba5b3803f05aacc083d54a9fForm.patch = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: feature2bb9a561ba5b3803f05aacc083d54a9f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

feature2bb9a561ba5b3803f05aacc083d54a9f.form = feature2bb9a561ba5b3803f05aacc083d54a9fForm
/**
* @see \App\Http\Controllers\TestimonialController::feature
* @see app/Http/Controllers/TestimonialController.php:153
* @route '/testimonials/{testimonial}/feature'
*/
const feature99ce9fc788c860e92b2a4bb379f782ec = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: feature99ce9fc788c860e92b2a4bb379f782ec.url(args, options),
    method: 'patch',
})

feature99ce9fc788c860e92b2a4bb379f782ec.definition = {
    methods: ["patch"],
    url: '/testimonials/{testimonial}/feature',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\TestimonialController::feature
* @see app/Http/Controllers/TestimonialController.php:153
* @route '/testimonials/{testimonial}/feature'
*/
feature99ce9fc788c860e92b2a4bb379f782ec.url = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return feature99ce9fc788c860e92b2a4bb379f782ec.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialController::feature
* @see app/Http/Controllers/TestimonialController.php:153
* @route '/testimonials/{testimonial}/feature'
*/
feature99ce9fc788c860e92b2a4bb379f782ec.patch = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: feature99ce9fc788c860e92b2a4bb379f782ec.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\TestimonialController::feature
* @see app/Http/Controllers/TestimonialController.php:153
* @route '/testimonials/{testimonial}/feature'
*/
const feature99ce9fc788c860e92b2a4bb379f782ecForm = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: feature99ce9fc788c860e92b2a4bb379f782ec.url(args, {
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
feature99ce9fc788c860e92b2a4bb379f782ecForm.patch = (args: { testimonial: string | number | { id: string | number } } | [testimonial: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: feature99ce9fc788c860e92b2a4bb379f782ec.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

feature99ce9fc788c860e92b2a4bb379f782ec.form = feature99ce9fc788c860e92b2a4bb379f782ecForm

export const feature = {
    '/api/v1/testimonials/{testimonial}/feature': feature2bb9a561ba5b3803f05aacc083d54a9f,
    '/testimonials/{testimonial}/feature': feature99ce9fc788c860e92b2a4bb379f782ec,
}

const TestimonialController = { index, store, update, destroy, approve, feature }

export default TestimonialController