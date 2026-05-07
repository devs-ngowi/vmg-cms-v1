import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:17
* @route '/api/v1/users'
*/
const index98c0cbd59f45d2f897c79a0a70c7ac59 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index98c0cbd59f45d2f897c79a0a70c7ac59.url(options),
    method: 'get',
})

index98c0cbd59f45d2f897c79a0a70c7ac59.definition = {
    methods: ["get","head"],
    url: '/api/v1/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:17
* @route '/api/v1/users'
*/
index98c0cbd59f45d2f897c79a0a70c7ac59.url = (options?: RouteQueryOptions) => {




    return index98c0cbd59f45d2f897c79a0a70c7ac59.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:17
* @route '/api/v1/users'
*/
index98c0cbd59f45d2f897c79a0a70c7ac59.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index98c0cbd59f45d2f897c79a0a70c7ac59.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:17
* @route '/api/v1/users'
*/
index98c0cbd59f45d2f897c79a0a70c7ac59.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index98c0cbd59f45d2f897c79a0a70c7ac59.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:17
* @route '/api/v1/users'
*/
const index98c0cbd59f45d2f897c79a0a70c7ac59Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index98c0cbd59f45d2f897c79a0a70c7ac59.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:17
* @route '/api/v1/users'
*/
index98c0cbd59f45d2f897c79a0a70c7ac59Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index98c0cbd59f45d2f897c79a0a70c7ac59.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:17
* @route '/api/v1/users'
*/
index98c0cbd59f45d2f897c79a0a70c7ac59Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index98c0cbd59f45d2f897c79a0a70c7ac59.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index98c0cbd59f45d2f897c79a0a70c7ac59.form = index98c0cbd59f45d2f897c79a0a70c7ac59Form
/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:17
* @route '/users'
*/
const index6e8299a085c11017e62ab420951fb27c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index6e8299a085c11017e62ab420951fb27c.url(options),
    method: 'get',
})

index6e8299a085c11017e62ab420951fb27c.definition = {
    methods: ["get","head"],
    url: '/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:17
* @route '/users'
*/
index6e8299a085c11017e62ab420951fb27c.url = (options?: RouteQueryOptions) => {




    return index6e8299a085c11017e62ab420951fb27c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:17
* @route '/users'
*/
index6e8299a085c11017e62ab420951fb27c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index6e8299a085c11017e62ab420951fb27c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:17
* @route '/users'
*/
index6e8299a085c11017e62ab420951fb27c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index6e8299a085c11017e62ab420951fb27c.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:17
* @route '/users'
*/
const index6e8299a085c11017e62ab420951fb27cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index6e8299a085c11017e62ab420951fb27c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:17
* @route '/users'
*/
index6e8299a085c11017e62ab420951fb27cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index6e8299a085c11017e62ab420951fb27c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:17
* @route '/users'
*/
index6e8299a085c11017e62ab420951fb27cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index6e8299a085c11017e62ab420951fb27c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index6e8299a085c11017e62ab420951fb27c.form = index6e8299a085c11017e62ab420951fb27cForm

export const index = {
    '/api/v1/users': index98c0cbd59f45d2f897c79a0a70c7ac59,
    '/users': index6e8299a085c11017e62ab420951fb27c,
}


/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:57
* @route '/api/v1/users'
*/
const store98c0cbd59f45d2f897c79a0a70c7ac59 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store98c0cbd59f45d2f897c79a0a70c7ac59.url(options),
    method: 'post',
})

store98c0cbd59f45d2f897c79a0a70c7ac59.definition = {
    methods: ["post"],
    url: '/api/v1/users',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:57
* @route '/api/v1/users'
*/
store98c0cbd59f45d2f897c79a0a70c7ac59.url = (options?: RouteQueryOptions) => {




    return store98c0cbd59f45d2f897c79a0a70c7ac59.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:57
* @route '/api/v1/users'
*/
store98c0cbd59f45d2f897c79a0a70c7ac59.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store98c0cbd59f45d2f897c79a0a70c7ac59.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:57
* @route '/api/v1/users'
*/
const store98c0cbd59f45d2f897c79a0a70c7ac59Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store98c0cbd59f45d2f897c79a0a70c7ac59.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:57
* @route '/api/v1/users'
*/
store98c0cbd59f45d2f897c79a0a70c7ac59Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store98c0cbd59f45d2f897c79a0a70c7ac59.url(options),
    method: 'post',
})

store98c0cbd59f45d2f897c79a0a70c7ac59.form = store98c0cbd59f45d2f897c79a0a70c7ac59Form
/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:57
* @route '/users'
*/
const store6e8299a085c11017e62ab420951fb27c = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store6e8299a085c11017e62ab420951fb27c.url(options),
    method: 'post',
})

store6e8299a085c11017e62ab420951fb27c.definition = {
    methods: ["post"],
    url: '/users',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:57
* @route '/users'
*/
store6e8299a085c11017e62ab420951fb27c.url = (options?: RouteQueryOptions) => {




    return store6e8299a085c11017e62ab420951fb27c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:57
* @route '/users'
*/
store6e8299a085c11017e62ab420951fb27c.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store6e8299a085c11017e62ab420951fb27c.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:57
* @route '/users'
*/
const store6e8299a085c11017e62ab420951fb27cForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store6e8299a085c11017e62ab420951fb27c.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:57
* @route '/users'
*/
store6e8299a085c11017e62ab420951fb27cForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store6e8299a085c11017e62ab420951fb27c.url(options),
    method: 'post',
})

store6e8299a085c11017e62ab420951fb27c.form = store6e8299a085c11017e62ab420951fb27cForm

export const store = {
    '/api/v1/users': store98c0cbd59f45d2f897c79a0a70c7ac59,
    '/users': store6e8299a085c11017e62ab420951fb27c,
}


/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:87
* @route '/api/v1/users/{user}'
*/
export const show = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/users/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:87
* @route '/api/v1/users/{user}'
*/
show.url = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return show.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:87
* @route '/api/v1/users/{user}'
*/
show.get = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:87
* @route '/api/v1/users/{user}'
*/
show.head = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:87
* @route '/api/v1/users/{user}'
*/
const showForm = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:87
* @route '/api/v1/users/{user}'
*/
showForm.get = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:87
* @route '/api/v1/users/{user}'
*/
showForm.head = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:115
* @route '/api/v1/users/{user}'
*/
const update404721aa0166e3065b7a4674fba481b9 = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update404721aa0166e3065b7a4674fba481b9.url(args, options),
    method: 'put',
})

update404721aa0166e3065b7a4674fba481b9.definition = {
    methods: ["put","patch"],
    url: '/api/v1/users/{user}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:115
* @route '/api/v1/users/{user}'
*/
update404721aa0166e3065b7a4674fba481b9.url = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return update404721aa0166e3065b7a4674fba481b9.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:115
* @route '/api/v1/users/{user}'
*/
update404721aa0166e3065b7a4674fba481b9.put = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update404721aa0166e3065b7a4674fba481b9.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:115
* @route '/api/v1/users/{user}'
*/
update404721aa0166e3065b7a4674fba481b9.patch = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update404721aa0166e3065b7a4674fba481b9.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:115
* @route '/api/v1/users/{user}'
*/
const update404721aa0166e3065b7a4674fba481b9Form = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update404721aa0166e3065b7a4674fba481b9.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:115
* @route '/api/v1/users/{user}'
*/
update404721aa0166e3065b7a4674fba481b9Form.put = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update404721aa0166e3065b7a4674fba481b9.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:115
* @route '/api/v1/users/{user}'
*/
update404721aa0166e3065b7a4674fba481b9Form.patch = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update404721aa0166e3065b7a4674fba481b9.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update404721aa0166e3065b7a4674fba481b9.form = update404721aa0166e3065b7a4674fba481b9Form
/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:115
* @route '/users/{user}'
*/
const updatef898f2daa993cc45af847e1a1f899673 = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatef898f2daa993cc45af847e1a1f899673.url(args, options),
    method: 'patch',
})

updatef898f2daa993cc45af847e1a1f899673.definition = {
    methods: ["patch"],
    url: '/users/{user}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:115
* @route '/users/{user}'
*/
updatef898f2daa993cc45af847e1a1f899673.url = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return updatef898f2daa993cc45af847e1a1f899673.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:115
* @route '/users/{user}'
*/
updatef898f2daa993cc45af847e1a1f899673.patch = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatef898f2daa993cc45af847e1a1f899673.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:115
* @route '/users/{user}'
*/
const updatef898f2daa993cc45af847e1a1f899673Form = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatef898f2daa993cc45af847e1a1f899673.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:115
* @route '/users/{user}'
*/
updatef898f2daa993cc45af847e1a1f899673Form.patch = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatef898f2daa993cc45af847e1a1f899673.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatef898f2daa993cc45af847e1a1f899673.form = updatef898f2daa993cc45af847e1a1f899673Form

export const update = {
    '/api/v1/users/{user}': update404721aa0166e3065b7a4674fba481b9,
    '/users/{user}': updatef898f2daa993cc45af847e1a1f899673,
}


/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:148
* @route '/api/v1/users/{user}'
*/
const destroy404721aa0166e3065b7a4674fba481b9 = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy404721aa0166e3065b7a4674fba481b9.url(args, options),
    method: 'delete',
})

destroy404721aa0166e3065b7a4674fba481b9.definition = {
    methods: ["delete"],
    url: '/api/v1/users/{user}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:148
* @route '/api/v1/users/{user}'
*/
destroy404721aa0166e3065b7a4674fba481b9.url = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return destroy404721aa0166e3065b7a4674fba481b9.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:148
* @route '/api/v1/users/{user}'
*/
destroy404721aa0166e3065b7a4674fba481b9.delete = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy404721aa0166e3065b7a4674fba481b9.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:148
* @route '/api/v1/users/{user}'
*/
const destroy404721aa0166e3065b7a4674fba481b9Form = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy404721aa0166e3065b7a4674fba481b9.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:148
* @route '/api/v1/users/{user}'
*/
destroy404721aa0166e3065b7a4674fba481b9Form.delete = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy404721aa0166e3065b7a4674fba481b9.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy404721aa0166e3065b7a4674fba481b9.form = destroy404721aa0166e3065b7a4674fba481b9Form
/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:148
* @route '/users/{user}'
*/
const destroyf898f2daa993cc45af847e1a1f899673 = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyf898f2daa993cc45af847e1a1f899673.url(args, options),
    method: 'delete',
})

destroyf898f2daa993cc45af847e1a1f899673.definition = {
    methods: ["delete"],
    url: '/users/{user}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:148
* @route '/users/{user}'
*/
destroyf898f2daa993cc45af847e1a1f899673.url = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return destroyf898f2daa993cc45af847e1a1f899673.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:148
* @route '/users/{user}'
*/
destroyf898f2daa993cc45af847e1a1f899673.delete = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyf898f2daa993cc45af847e1a1f899673.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:148
* @route '/users/{user}'
*/
const destroyf898f2daa993cc45af847e1a1f899673Form = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyf898f2daa993cc45af847e1a1f899673.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:148
* @route '/users/{user}'
*/
destroyf898f2daa993cc45af847e1a1f899673Form.delete = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyf898f2daa993cc45af847e1a1f899673.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyf898f2daa993cc45af847e1a1f899673.form = destroyf898f2daa993cc45af847e1a1f899673Form

export const destroy = {
    '/api/v1/users/{user}': destroy404721aa0166e3065b7a4674fba481b9,
    '/users/{user}': destroyf898f2daa993cc45af847e1a1f899673,
}


/**
* @see \App\Http\Controllers\UserController::create
* @see app/Http/Controllers/UserController.php:48
* @route '/users/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::create
* @see app/Http/Controllers/UserController.php:48
* @route '/users/create'
*/
create.url = (options?: RouteQueryOptions) => {




    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::create
* @see app/Http/Controllers/UserController.php:48
* @route '/users/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::create
* @see app/Http/Controllers/UserController.php:48
* @route '/users/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::create
* @see app/Http/Controllers/UserController.php:48
* @route '/users/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::create
* @see app/Http/Controllers/UserController.php:48
* @route '/users/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::create
* @see app/Http/Controllers/UserController.php:48
* @route '/users/create'
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
* @see \App\Http\Controllers\UserController::edit
* @see app/Http/Controllers/UserController.php:98
* @route '/users/{user}/edit'
*/
export const edit = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/users/{user}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::edit
* @see app/Http/Controllers/UserController.php:98
* @route '/users/{user}/edit'
*/
edit.url = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return edit.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::edit
* @see app/Http/Controllers/UserController.php:98
* @route '/users/{user}/edit'
*/
edit.get = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::edit
* @see app/Http/Controllers/UserController.php:98
* @route '/users/{user}/edit'
*/
edit.head = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::edit
* @see app/Http/Controllers/UserController.php:98
* @route '/users/{user}/edit'
*/
const editForm = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::edit
* @see app/Http/Controllers/UserController.php:98
* @route '/users/{user}/edit'
*/
editForm.get = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::edit
* @see app/Http/Controllers/UserController.php:98
* @route '/users/{user}/edit'
*/
editForm.head = (args: { user: string | number | { id: string | number } } | [user: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const UserController = { index, store, show, update, destroy, create, edit }

export default UserController