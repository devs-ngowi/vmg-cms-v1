import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\MenuController::store
* @see app/Http/Controllers/MenuController.php:123
* @route '/menus/{menu}/items'
*/
export const store = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/menus/{menu}/items',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MenuController::store
* @see app/Http/Controllers/MenuController.php:123
* @route '/menus/{menu}/items'
*/
store.url = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { menu: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            menu: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu: typeof args.menu === 'object'
        ? args.menu.id
        : args.menu,
    }

    return store.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::store
* @see app/Http/Controllers/MenuController.php:123
* @route '/menus/{menu}/items'
*/
store.post = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::store
* @see app/Http/Controllers/MenuController.php:123
* @route '/menus/{menu}/items'
*/
const storeForm = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::store
* @see app/Http/Controllers/MenuController.php:123
* @route '/menus/{menu}/items'
*/
storeForm.post = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\MenuController::update
* @see app/Http/Controllers/MenuController.php:157
* @route '/menus/{menu}/items/{item}'
*/
export const update = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/menus/{menu}/items/{item}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MenuController::update
* @see app/Http/Controllers/MenuController.php:157
* @route '/menus/{menu}/items/{item}'
*/
update.url = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            menu: args[0],
            item: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu: typeof args.menu === 'object'
        ? args.menu.id
        : args.menu,
        item: typeof args.item === 'object'
        ? args.item.id
        : args.item,
    }

    return update.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::update
* @see app/Http/Controllers/MenuController.php:157
* @route '/menus/{menu}/items/{item}'
*/
update.patch = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\MenuController::update
* @see app/Http/Controllers/MenuController.php:157
* @route '/menus/{menu}/items/{item}'
*/
const updateForm = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::update
* @see app/Http/Controllers/MenuController.php:157
* @route '/menus/{menu}/items/{item}'
*/
updateForm.patch = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MenuController::destroy
* @see app/Http/Controllers/MenuController.php:217
* @route '/menus/{menu}/items/{item}'
*/
export const destroy = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/menus/{menu}/items/{item}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MenuController::destroy
* @see app/Http/Controllers/MenuController.php:217
* @route '/menus/{menu}/items/{item}'
*/
destroy.url = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            menu: args[0],
            item: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu: typeof args.menu === 'object'
        ? args.menu.id
        : args.menu,
        item: typeof args.item === 'object'
        ? args.item.id
        : args.item,
    }

    return destroy.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::destroy
* @see app/Http/Controllers/MenuController.php:217
* @route '/menus/{menu}/items/{item}'
*/
destroy.delete = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\MenuController::destroy
* @see app/Http/Controllers/MenuController.php:217
* @route '/menus/{menu}/items/{item}'
*/
const destroyForm = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::destroy
* @see app/Http/Controllers/MenuController.php:217
* @route '/menus/{menu}/items/{item}'
*/
destroyForm.delete = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MenuController::toggleVisibility
* @see app/Http/Controllers/MenuController.php:198
* @route '/menus/{menu}/items/{item}/toggle-visibility'
*/
export const toggleVisibility = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleVisibility.url(args, options),
    method: 'patch',
})

toggleVisibility.definition = {
    methods: ["patch"],
    url: '/menus/{menu}/items/{item}/toggle-visibility',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MenuController::toggleVisibility
* @see app/Http/Controllers/MenuController.php:198
* @route '/menus/{menu}/items/{item}/toggle-visibility'
*/
toggleVisibility.url = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            menu: args[0],
            item: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu: typeof args.menu === 'object'
        ? args.menu.id
        : args.menu,
        item: typeof args.item === 'object'
        ? args.item.id
        : args.item,
    }

    return toggleVisibility.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::toggleVisibility
* @see app/Http/Controllers/MenuController.php:198
* @route '/menus/{menu}/items/{item}/toggle-visibility'
*/
toggleVisibility.patch = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleVisibility.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\MenuController::toggleVisibility
* @see app/Http/Controllers/MenuController.php:198
* @route '/menus/{menu}/items/{item}/toggle-visibility'
*/
const toggleVisibilityForm = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleVisibility.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::toggleVisibility
* @see app/Http/Controllers/MenuController.php:198
* @route '/menus/{menu}/items/{item}/toggle-visibility'
*/
toggleVisibilityForm.patch = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleVisibility.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleVisibility.form = toggleVisibilityForm

const items = {
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    toggleVisibility: Object.assign(toggleVisibility, toggleVisibility),
}

export default items