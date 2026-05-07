import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import items from './items'
/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/menus/primary'
*/
export const primary = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: primary.url(options),
    method: 'get',
})

primary.definition = {
    methods: ["get","head"],
    url: '/menus/primary',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/menus/primary'
*/
primary.url = (options?: RouteQueryOptions) => {




    return primary.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/menus/primary'
*/
primary.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: primary.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/menus/primary'
*/
primary.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: primary.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/menus/primary'
*/
const primaryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: primary.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/menus/primary'
*/
primaryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: primary.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/menus/primary'
*/
primaryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: primary.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

primary.form = primaryForm

/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/menus/footer'
*/
export const footer = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: footer.url(options),
    method: 'get',
})

footer.definition = {
    methods: ["get","head"],
    url: '/menus/footer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/menus/footer'
*/
footer.url = (options?: RouteQueryOptions) => {




    return footer.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/menus/footer'
*/
footer.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: footer.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/menus/footer'
*/
footer.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: footer.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/menus/footer'
*/
const footerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: footer.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/menus/footer'
*/
footerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: footer.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/menus/footer'
*/
footerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: footer.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

footer.form = footerForm

/**
* @see \App\Http\Controllers\MenuController::update
* @see app/Http/Controllers/MenuController.php:101
* @route '/menus/{menu}'
*/
export const update = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/menus/{menu}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MenuController::update
* @see app/Http/Controllers/MenuController.php:101
* @route '/menus/{menu}'
*/
update.url = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::update
* @see app/Http/Controllers/MenuController.php:101
* @route '/menus/{menu}'
*/
update.patch = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\MenuController::update
* @see app/Http/Controllers/MenuController.php:101
* @route '/menus/{menu}'
*/
const updateForm = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/MenuController.php:101
* @route '/menus/{menu}'
*/
updateForm.patch = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MenuController::reorder
* @see app/Http/Controllers/MenuController.php:239
* @route '/menus/{menu}/reorder'
*/
export const reorder = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/menus/{menu}/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MenuController::reorder
* @see app/Http/Controllers/MenuController.php:239
* @route '/menus/{menu}/reorder'
*/
reorder.url = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return reorder.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::reorder
* @see app/Http/Controllers/MenuController.php:239
* @route '/menus/{menu}/reorder'
*/
reorder.post = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::reorder
* @see app/Http/Controllers/MenuController.php:239
* @route '/menus/{menu}/reorder'
*/
const reorderForm = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::reorder
* @see app/Http/Controllers/MenuController.php:239
* @route '/menus/{menu}/reorder'
*/
reorderForm.post = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(args, options),
    method: 'post',
})

reorder.form = reorderForm



const menus = {
    primary: Object.assign(primary, primary),
    footer: Object.assign(footer, footer),
    update: Object.assign(update, update),
    items: Object.assign(items, items),
    reorder: Object.assign(reorder, reorder),
}

export default menus