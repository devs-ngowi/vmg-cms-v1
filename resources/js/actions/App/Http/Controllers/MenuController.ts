import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/api/v1/menus/primary'
*/
const primary698d72c760b8a872a61557710f9b3a95 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: primary698d72c760b8a872a61557710f9b3a95.url(options),
    method: 'get',
})

primary698d72c760b8a872a61557710f9b3a95.definition = {
    methods: ["get","head"],
    url: '/api/v1/menus/primary',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/api/v1/menus/primary'
*/
primary698d72c760b8a872a61557710f9b3a95.url = (options?: RouteQueryOptions) => {




    return primary698d72c760b8a872a61557710f9b3a95.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/api/v1/menus/primary'
*/
primary698d72c760b8a872a61557710f9b3a95.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: primary698d72c760b8a872a61557710f9b3a95.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/api/v1/menus/primary'
*/
primary698d72c760b8a872a61557710f9b3a95.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: primary698d72c760b8a872a61557710f9b3a95.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/api/v1/menus/primary'
*/
const primary698d72c760b8a872a61557710f9b3a95Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: primary698d72c760b8a872a61557710f9b3a95.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/api/v1/menus/primary'
*/
primary698d72c760b8a872a61557710f9b3a95Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: primary698d72c760b8a872a61557710f9b3a95.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/api/v1/menus/primary'
*/
primary698d72c760b8a872a61557710f9b3a95Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: primary698d72c760b8a872a61557710f9b3a95.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

primary698d72c760b8a872a61557710f9b3a95.form = primary698d72c760b8a872a61557710f9b3a95Form
/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/menus/primary'
*/
const primaryebf53f2020ccf267fcb373253f9b5783 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: primaryebf53f2020ccf267fcb373253f9b5783.url(options),
    method: 'get',
})

primaryebf53f2020ccf267fcb373253f9b5783.definition = {
    methods: ["get","head"],
    url: '/menus/primary',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/menus/primary'
*/
primaryebf53f2020ccf267fcb373253f9b5783.url = (options?: RouteQueryOptions) => {




    return primaryebf53f2020ccf267fcb373253f9b5783.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/menus/primary'
*/
primaryebf53f2020ccf267fcb373253f9b5783.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: primaryebf53f2020ccf267fcb373253f9b5783.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/menus/primary'
*/
primaryebf53f2020ccf267fcb373253f9b5783.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: primaryebf53f2020ccf267fcb373253f9b5783.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/menus/primary'
*/
const primaryebf53f2020ccf267fcb373253f9b5783Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: primaryebf53f2020ccf267fcb373253f9b5783.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/menus/primary'
*/
primaryebf53f2020ccf267fcb373253f9b5783Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: primaryebf53f2020ccf267fcb373253f9b5783.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MenuController::primary
* @see app/Http/Controllers/MenuController.php:96
* @route '/menus/primary'
*/
primaryebf53f2020ccf267fcb373253f9b5783Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: primaryebf53f2020ccf267fcb373253f9b5783.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

primaryebf53f2020ccf267fcb373253f9b5783.form = primaryebf53f2020ccf267fcb373253f9b5783Form

export const primary = {
    '/api/v1/menus/primary': primary698d72c760b8a872a61557710f9b3a95,
    '/menus/primary': primaryebf53f2020ccf267fcb373253f9b5783,
}


/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/api/v1/menus/footer'
*/
const footer8f452a1b66ebb2967df05a95f90914f5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: footer8f452a1b66ebb2967df05a95f90914f5.url(options),
    method: 'get',
})

footer8f452a1b66ebb2967df05a95f90914f5.definition = {
    methods: ["get","head"],
    url: '/api/v1/menus/footer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/api/v1/menus/footer'
*/
footer8f452a1b66ebb2967df05a95f90914f5.url = (options?: RouteQueryOptions) => {




    return footer8f452a1b66ebb2967df05a95f90914f5.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/api/v1/menus/footer'
*/
footer8f452a1b66ebb2967df05a95f90914f5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: footer8f452a1b66ebb2967df05a95f90914f5.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/api/v1/menus/footer'
*/
footer8f452a1b66ebb2967df05a95f90914f5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: footer8f452a1b66ebb2967df05a95f90914f5.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/api/v1/menus/footer'
*/
const footer8f452a1b66ebb2967df05a95f90914f5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: footer8f452a1b66ebb2967df05a95f90914f5.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/api/v1/menus/footer'
*/
footer8f452a1b66ebb2967df05a95f90914f5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: footer8f452a1b66ebb2967df05a95f90914f5.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/api/v1/menus/footer'
*/
footer8f452a1b66ebb2967df05a95f90914f5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: footer8f452a1b66ebb2967df05a95f90914f5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

footer8f452a1b66ebb2967df05a95f90914f5.form = footer8f452a1b66ebb2967df05a95f90914f5Form
/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/menus/footer'
*/
const footerb55421b726da9cfa74ae18cd94f6dd8e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: footerb55421b726da9cfa74ae18cd94f6dd8e.url(options),
    method: 'get',
})

footerb55421b726da9cfa74ae18cd94f6dd8e.definition = {
    methods: ["get","head"],
    url: '/menus/footer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/menus/footer'
*/
footerb55421b726da9cfa74ae18cd94f6dd8e.url = (options?: RouteQueryOptions) => {




    return footerb55421b726da9cfa74ae18cd94f6dd8e.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/menus/footer'
*/
footerb55421b726da9cfa74ae18cd94f6dd8e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: footerb55421b726da9cfa74ae18cd94f6dd8e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/menus/footer'
*/
footerb55421b726da9cfa74ae18cd94f6dd8e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: footerb55421b726da9cfa74ae18cd94f6dd8e.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/menus/footer'
*/
const footerb55421b726da9cfa74ae18cd94f6dd8eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: footerb55421b726da9cfa74ae18cd94f6dd8e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/menus/footer'
*/
footerb55421b726da9cfa74ae18cd94f6dd8eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: footerb55421b726da9cfa74ae18cd94f6dd8e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MenuController::footer
* @see app/Http/Controllers/MenuController.php:97
* @route '/menus/footer'
*/
footerb55421b726da9cfa74ae18cd94f6dd8eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: footerb55421b726da9cfa74ae18cd94f6dd8e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

footerb55421b726da9cfa74ae18cd94f6dd8e.form = footerb55421b726da9cfa74ae18cd94f6dd8eForm

export const footer = {
    '/api/v1/menus/footer': footer8f452a1b66ebb2967df05a95f90914f5,
    '/menus/footer': footerb55421b726da9cfa74ae18cd94f6dd8e,
}


/**
* @see \App\Http\Controllers\MenuController::updateMenu
* @see app/Http/Controllers/MenuController.php:101
* @route '/api/v1/menus/{menu}'
*/
const updateMenue2f2ce0b6d5b4b30691e6adb4cb87dee = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateMenue2f2ce0b6d5b4b30691e6adb4cb87dee.url(args, options),
    method: 'put',
})

updateMenue2f2ce0b6d5b4b30691e6adb4cb87dee.definition = {
    methods: ["put"],
    url: '/api/v1/menus/{menu}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\MenuController::updateMenu
* @see app/Http/Controllers/MenuController.php:101
* @route '/api/v1/menus/{menu}'
*/
updateMenue2f2ce0b6d5b4b30691e6adb4cb87dee.url = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return updateMenue2f2ce0b6d5b4b30691e6adb4cb87dee.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::updateMenu
* @see app/Http/Controllers/MenuController.php:101
* @route '/api/v1/menus/{menu}'
*/
updateMenue2f2ce0b6d5b4b30691e6adb4cb87dee.put = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateMenue2f2ce0b6d5b4b30691e6adb4cb87dee.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\MenuController::updateMenu
* @see app/Http/Controllers/MenuController.php:101
* @route '/api/v1/menus/{menu}'
*/
const updateMenue2f2ce0b6d5b4b30691e6adb4cb87deeForm = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateMenue2f2ce0b6d5b4b30691e6adb4cb87dee.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::updateMenu
* @see app/Http/Controllers/MenuController.php:101
* @route '/api/v1/menus/{menu}'
*/
updateMenue2f2ce0b6d5b4b30691e6adb4cb87deeForm.put = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateMenue2f2ce0b6d5b4b30691e6adb4cb87dee.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateMenue2f2ce0b6d5b4b30691e6adb4cb87dee.form = updateMenue2f2ce0b6d5b4b30691e6adb4cb87deeForm
/**
* @see \App\Http\Controllers\MenuController::updateMenu
* @see app/Http/Controllers/MenuController.php:101
* @route '/menus/{menu}'
*/
const updateMenu9e75cf0da1445b906872d4fd6f729012 = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateMenu9e75cf0da1445b906872d4fd6f729012.url(args, options),
    method: 'patch',
})

updateMenu9e75cf0da1445b906872d4fd6f729012.definition = {
    methods: ["patch"],
    url: '/menus/{menu}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MenuController::updateMenu
* @see app/Http/Controllers/MenuController.php:101
* @route '/menus/{menu}'
*/
updateMenu9e75cf0da1445b906872d4fd6f729012.url = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return updateMenu9e75cf0da1445b906872d4fd6f729012.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::updateMenu
* @see app/Http/Controllers/MenuController.php:101
* @route '/menus/{menu}'
*/
updateMenu9e75cf0da1445b906872d4fd6f729012.patch = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateMenu9e75cf0da1445b906872d4fd6f729012.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\MenuController::updateMenu
* @see app/Http/Controllers/MenuController.php:101
* @route '/menus/{menu}'
*/
const updateMenu9e75cf0da1445b906872d4fd6f729012Form = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateMenu9e75cf0da1445b906872d4fd6f729012.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::updateMenu
* @see app/Http/Controllers/MenuController.php:101
* @route '/menus/{menu}'
*/
updateMenu9e75cf0da1445b906872d4fd6f729012Form.patch = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateMenu9e75cf0da1445b906872d4fd6f729012.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateMenu9e75cf0da1445b906872d4fd6f729012.form = updateMenu9e75cf0da1445b906872d4fd6f729012Form

export const updateMenu = {
    '/api/v1/menus/{menu}': updateMenue2f2ce0b6d5b4b30691e6adb4cb87dee,
    '/menus/{menu}': updateMenu9e75cf0da1445b906872d4fd6f729012,
}


/**
* @see \App\Http\Controllers\MenuController::storeItem
* @see app/Http/Controllers/MenuController.php:123
* @route '/api/v1/menus/{menu}/items'
*/
const storeItem88f6913c4d3f8e480a8b01a08c462074 = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeItem88f6913c4d3f8e480a8b01a08c462074.url(args, options),
    method: 'post',
})

storeItem88f6913c4d3f8e480a8b01a08c462074.definition = {
    methods: ["post"],
    url: '/api/v1/menus/{menu}/items',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MenuController::storeItem
* @see app/Http/Controllers/MenuController.php:123
* @route '/api/v1/menus/{menu}/items'
*/
storeItem88f6913c4d3f8e480a8b01a08c462074.url = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return storeItem88f6913c4d3f8e480a8b01a08c462074.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::storeItem
* @see app/Http/Controllers/MenuController.php:123
* @route '/api/v1/menus/{menu}/items'
*/
storeItem88f6913c4d3f8e480a8b01a08c462074.post = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeItem88f6913c4d3f8e480a8b01a08c462074.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::storeItem
* @see app/Http/Controllers/MenuController.php:123
* @route '/api/v1/menus/{menu}/items'
*/
const storeItem88f6913c4d3f8e480a8b01a08c462074Form = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeItem88f6913c4d3f8e480a8b01a08c462074.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::storeItem
* @see app/Http/Controllers/MenuController.php:123
* @route '/api/v1/menus/{menu}/items'
*/
storeItem88f6913c4d3f8e480a8b01a08c462074Form.post = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeItem88f6913c4d3f8e480a8b01a08c462074.url(args, options),
    method: 'post',
})

storeItem88f6913c4d3f8e480a8b01a08c462074.form = storeItem88f6913c4d3f8e480a8b01a08c462074Form
/**
* @see \App\Http\Controllers\MenuController::storeItem
* @see app/Http/Controllers/MenuController.php:123
* @route '/menus/{menu}/items'
*/
const storeItemac4e4869333fc93c485dbbb6bb8751cf = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeItemac4e4869333fc93c485dbbb6bb8751cf.url(args, options),
    method: 'post',
})

storeItemac4e4869333fc93c485dbbb6bb8751cf.definition = {
    methods: ["post"],
    url: '/menus/{menu}/items',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MenuController::storeItem
* @see app/Http/Controllers/MenuController.php:123
* @route '/menus/{menu}/items'
*/
storeItemac4e4869333fc93c485dbbb6bb8751cf.url = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return storeItemac4e4869333fc93c485dbbb6bb8751cf.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::storeItem
* @see app/Http/Controllers/MenuController.php:123
* @route '/menus/{menu}/items'
*/
storeItemac4e4869333fc93c485dbbb6bb8751cf.post = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeItemac4e4869333fc93c485dbbb6bb8751cf.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::storeItem
* @see app/Http/Controllers/MenuController.php:123
* @route '/menus/{menu}/items'
*/
const storeItemac4e4869333fc93c485dbbb6bb8751cfForm = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeItemac4e4869333fc93c485dbbb6bb8751cf.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::storeItem
* @see app/Http/Controllers/MenuController.php:123
* @route '/menus/{menu}/items'
*/
storeItemac4e4869333fc93c485dbbb6bb8751cfForm.post = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeItemac4e4869333fc93c485dbbb6bb8751cf.url(args, options),
    method: 'post',
})

storeItemac4e4869333fc93c485dbbb6bb8751cf.form = storeItemac4e4869333fc93c485dbbb6bb8751cfForm

export const storeItem = {
    '/api/v1/menus/{menu}/items': storeItem88f6913c4d3f8e480a8b01a08c462074,
    '/menus/{menu}/items': storeItemac4e4869333fc93c485dbbb6bb8751cf,
}


/**
* @see \App\Http\Controllers\MenuController::updateItem
* @see app/Http/Controllers/MenuController.php:157
* @route '/api/v1/menus/{menu}/items/{item}'
*/
const updateItem9b454399bb7bfc3811f427a6a7d7cdb1 = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateItem9b454399bb7bfc3811f427a6a7d7cdb1.url(args, options),
    method: 'put',
})

updateItem9b454399bb7bfc3811f427a6a7d7cdb1.definition = {
    methods: ["put"],
    url: '/api/v1/menus/{menu}/items/{item}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\MenuController::updateItem
* @see app/Http/Controllers/MenuController.php:157
* @route '/api/v1/menus/{menu}/items/{item}'
*/
updateItem9b454399bb7bfc3811f427a6a7d7cdb1.url = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions) => {

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

    return updateItem9b454399bb7bfc3811f427a6a7d7cdb1.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::updateItem
* @see app/Http/Controllers/MenuController.php:157
* @route '/api/v1/menus/{menu}/items/{item}'
*/
updateItem9b454399bb7bfc3811f427a6a7d7cdb1.put = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateItem9b454399bb7bfc3811f427a6a7d7cdb1.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\MenuController::updateItem
* @see app/Http/Controllers/MenuController.php:157
* @route '/api/v1/menus/{menu}/items/{item}'
*/
const updateItem9b454399bb7bfc3811f427a6a7d7cdb1Form = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateItem9b454399bb7bfc3811f427a6a7d7cdb1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::updateItem
* @see app/Http/Controllers/MenuController.php:157
* @route '/api/v1/menus/{menu}/items/{item}'
*/
updateItem9b454399bb7bfc3811f427a6a7d7cdb1Form.put = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateItem9b454399bb7bfc3811f427a6a7d7cdb1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateItem9b454399bb7bfc3811f427a6a7d7cdb1.form = updateItem9b454399bb7bfc3811f427a6a7d7cdb1Form
/**
* @see \App\Http\Controllers\MenuController::updateItem
* @see app/Http/Controllers/MenuController.php:157
* @route '/api/v1/menus/{menu}/items/{item}'
*/
const updateItem9b454399bb7bfc3811f427a6a7d7cdb1 = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateItem9b454399bb7bfc3811f427a6a7d7cdb1.url(args, options),
    method: 'patch',
})

updateItem9b454399bb7bfc3811f427a6a7d7cdb1.definition = {
    methods: ["patch"],
    url: '/api/v1/menus/{menu}/items/{item}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MenuController::updateItem
* @see app/Http/Controllers/MenuController.php:157
* @route '/api/v1/menus/{menu}/items/{item}'
*/
updateItem9b454399bb7bfc3811f427a6a7d7cdb1.url = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions) => {

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

    return updateItem9b454399bb7bfc3811f427a6a7d7cdb1.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::updateItem
* @see app/Http/Controllers/MenuController.php:157
* @route '/api/v1/menus/{menu}/items/{item}'
*/
updateItem9b454399bb7bfc3811f427a6a7d7cdb1.patch = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateItem9b454399bb7bfc3811f427a6a7d7cdb1.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\MenuController::updateItem
* @see app/Http/Controllers/MenuController.php:157
* @route '/api/v1/menus/{menu}/items/{item}'
*/
const updateItem9b454399bb7bfc3811f427a6a7d7cdb1Form = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateItem9b454399bb7bfc3811f427a6a7d7cdb1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::updateItem
* @see app/Http/Controllers/MenuController.php:157
* @route '/api/v1/menus/{menu}/items/{item}'
*/
updateItem9b454399bb7bfc3811f427a6a7d7cdb1Form.patch = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateItem9b454399bb7bfc3811f427a6a7d7cdb1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateItem9b454399bb7bfc3811f427a6a7d7cdb1.form = updateItem9b454399bb7bfc3811f427a6a7d7cdb1Form
/**
* @see \App\Http\Controllers\MenuController::updateItem
* @see app/Http/Controllers/MenuController.php:157
* @route '/menus/{menu}/items/{item}'
*/
const updateItemf743d17954b3bcc3b43d8596960c1527 = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateItemf743d17954b3bcc3b43d8596960c1527.url(args, options),
    method: 'patch',
})

updateItemf743d17954b3bcc3b43d8596960c1527.definition = {
    methods: ["patch"],
    url: '/menus/{menu}/items/{item}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MenuController::updateItem
* @see app/Http/Controllers/MenuController.php:157
* @route '/menus/{menu}/items/{item}'
*/
updateItemf743d17954b3bcc3b43d8596960c1527.url = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions) => {

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

    return updateItemf743d17954b3bcc3b43d8596960c1527.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::updateItem
* @see app/Http/Controllers/MenuController.php:157
* @route '/menus/{menu}/items/{item}'
*/
updateItemf743d17954b3bcc3b43d8596960c1527.patch = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateItemf743d17954b3bcc3b43d8596960c1527.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\MenuController::updateItem
* @see app/Http/Controllers/MenuController.php:157
* @route '/menus/{menu}/items/{item}'
*/
const updateItemf743d17954b3bcc3b43d8596960c1527Form = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateItemf743d17954b3bcc3b43d8596960c1527.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::updateItem
* @see app/Http/Controllers/MenuController.php:157
* @route '/menus/{menu}/items/{item}'
*/
updateItemf743d17954b3bcc3b43d8596960c1527Form.patch = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateItemf743d17954b3bcc3b43d8596960c1527.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateItemf743d17954b3bcc3b43d8596960c1527.form = updateItemf743d17954b3bcc3b43d8596960c1527Form

export const updateItem = {
    '/api/v1/menus/{menu}/items/{item}': updateItem9b454399bb7bfc3811f427a6a7d7cdb1,
    '/api/v1/menus/{menu}/items/{item}': updateItem9b454399bb7bfc3811f427a6a7d7cdb1,
    '/menus/{menu}/items/{item}': updateItemf743d17954b3bcc3b43d8596960c1527,
}


/**
* @see \App\Http\Controllers\MenuController::destroyItem
* @see app/Http/Controllers/MenuController.php:217
* @route '/api/v1/menus/{menu}/items/{item}'
*/
const destroyItem9b454399bb7bfc3811f427a6a7d7cdb1 = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyItem9b454399bb7bfc3811f427a6a7d7cdb1.url(args, options),
    method: 'delete',
})

destroyItem9b454399bb7bfc3811f427a6a7d7cdb1.definition = {
    methods: ["delete"],
    url: '/api/v1/menus/{menu}/items/{item}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MenuController::destroyItem
* @see app/Http/Controllers/MenuController.php:217
* @route '/api/v1/menus/{menu}/items/{item}'
*/
destroyItem9b454399bb7bfc3811f427a6a7d7cdb1.url = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions) => {

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

    return destroyItem9b454399bb7bfc3811f427a6a7d7cdb1.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::destroyItem
* @see app/Http/Controllers/MenuController.php:217
* @route '/api/v1/menus/{menu}/items/{item}'
*/
destroyItem9b454399bb7bfc3811f427a6a7d7cdb1.delete = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyItem9b454399bb7bfc3811f427a6a7d7cdb1.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\MenuController::destroyItem
* @see app/Http/Controllers/MenuController.php:217
* @route '/api/v1/menus/{menu}/items/{item}'
*/
const destroyItem9b454399bb7bfc3811f427a6a7d7cdb1Form = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyItem9b454399bb7bfc3811f427a6a7d7cdb1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::destroyItem
* @see app/Http/Controllers/MenuController.php:217
* @route '/api/v1/menus/{menu}/items/{item}'
*/
destroyItem9b454399bb7bfc3811f427a6a7d7cdb1Form.delete = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyItem9b454399bb7bfc3811f427a6a7d7cdb1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyItem9b454399bb7bfc3811f427a6a7d7cdb1.form = destroyItem9b454399bb7bfc3811f427a6a7d7cdb1Form
/**
* @see \App\Http\Controllers\MenuController::destroyItem
* @see app/Http/Controllers/MenuController.php:217
* @route '/menus/{menu}/items/{item}'
*/
const destroyItemf743d17954b3bcc3b43d8596960c1527 = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyItemf743d17954b3bcc3b43d8596960c1527.url(args, options),
    method: 'delete',
})

destroyItemf743d17954b3bcc3b43d8596960c1527.definition = {
    methods: ["delete"],
    url: '/menus/{menu}/items/{item}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MenuController::destroyItem
* @see app/Http/Controllers/MenuController.php:217
* @route '/menus/{menu}/items/{item}'
*/
destroyItemf743d17954b3bcc3b43d8596960c1527.url = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions) => {

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

    return destroyItemf743d17954b3bcc3b43d8596960c1527.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::destroyItem
* @see app/Http/Controllers/MenuController.php:217
* @route '/menus/{menu}/items/{item}'
*/
destroyItemf743d17954b3bcc3b43d8596960c1527.delete = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyItemf743d17954b3bcc3b43d8596960c1527.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\MenuController::destroyItem
* @see app/Http/Controllers/MenuController.php:217
* @route '/menus/{menu}/items/{item}'
*/
const destroyItemf743d17954b3bcc3b43d8596960c1527Form = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyItemf743d17954b3bcc3b43d8596960c1527.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::destroyItem
* @see app/Http/Controllers/MenuController.php:217
* @route '/menus/{menu}/items/{item}'
*/
destroyItemf743d17954b3bcc3b43d8596960c1527Form.delete = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyItemf743d17954b3bcc3b43d8596960c1527.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyItemf743d17954b3bcc3b43d8596960c1527.form = destroyItemf743d17954b3bcc3b43d8596960c1527Form

export const destroyItem = {
    '/api/v1/menus/{menu}/items/{item}': destroyItem9b454399bb7bfc3811f427a6a7d7cdb1,
    '/menus/{menu}/items/{item}': destroyItemf743d17954b3bcc3b43d8596960c1527,
}


/**
* @see \App\Http\Controllers\MenuController::reorder
* @see app/Http/Controllers/MenuController.php:239
* @route '/api/v1/menus/{menu}/reorder'
*/
const reorder98d34b3e12042f0ec14dcd9b099e1be2 = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder98d34b3e12042f0ec14dcd9b099e1be2.url(args, options),
    method: 'post',
})

reorder98d34b3e12042f0ec14dcd9b099e1be2.definition = {
    methods: ["post"],
    url: '/api/v1/menus/{menu}/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MenuController::reorder
* @see app/Http/Controllers/MenuController.php:239
* @route '/api/v1/menus/{menu}/reorder'
*/
reorder98d34b3e12042f0ec14dcd9b099e1be2.url = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return reorder98d34b3e12042f0ec14dcd9b099e1be2.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::reorder
* @see app/Http/Controllers/MenuController.php:239
* @route '/api/v1/menus/{menu}/reorder'
*/
reorder98d34b3e12042f0ec14dcd9b099e1be2.post = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder98d34b3e12042f0ec14dcd9b099e1be2.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::reorder
* @see app/Http/Controllers/MenuController.php:239
* @route '/api/v1/menus/{menu}/reorder'
*/
const reorder98d34b3e12042f0ec14dcd9b099e1be2Form = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder98d34b3e12042f0ec14dcd9b099e1be2.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::reorder
* @see app/Http/Controllers/MenuController.php:239
* @route '/api/v1/menus/{menu}/reorder'
*/
reorder98d34b3e12042f0ec14dcd9b099e1be2Form.post = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder98d34b3e12042f0ec14dcd9b099e1be2.url(args, options),
    method: 'post',
})

reorder98d34b3e12042f0ec14dcd9b099e1be2.form = reorder98d34b3e12042f0ec14dcd9b099e1be2Form
/**
* @see \App\Http\Controllers\MenuController::reorder
* @see app/Http/Controllers/MenuController.php:239
* @route '/menus/{menu}/reorder'
*/
const reorder93a820b9bf00b0c11d31b1406e9a2b2a = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder93a820b9bf00b0c11d31b1406e9a2b2a.url(args, options),
    method: 'post',
})

reorder93a820b9bf00b0c11d31b1406e9a2b2a.definition = {
    methods: ["post"],
    url: '/menus/{menu}/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MenuController::reorder
* @see app/Http/Controllers/MenuController.php:239
* @route '/menus/{menu}/reorder'
*/
reorder93a820b9bf00b0c11d31b1406e9a2b2a.url = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return reorder93a820b9bf00b0c11d31b1406e9a2b2a.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::reorder
* @see app/Http/Controllers/MenuController.php:239
* @route '/menus/{menu}/reorder'
*/
reorder93a820b9bf00b0c11d31b1406e9a2b2a.post = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder93a820b9bf00b0c11d31b1406e9a2b2a.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::reorder
* @see app/Http/Controllers/MenuController.php:239
* @route '/menus/{menu}/reorder'
*/
const reorder93a820b9bf00b0c11d31b1406e9a2b2aForm = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder93a820b9bf00b0c11d31b1406e9a2b2a.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MenuController::reorder
* @see app/Http/Controllers/MenuController.php:239
* @route '/menus/{menu}/reorder'
*/
reorder93a820b9bf00b0c11d31b1406e9a2b2aForm.post = (args: { menu: string | number | { id: string | number } } | [menu: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder93a820b9bf00b0c11d31b1406e9a2b2a.url(args, options),
    method: 'post',
})

reorder93a820b9bf00b0c11d31b1406e9a2b2a.form = reorder93a820b9bf00b0c11d31b1406e9a2b2aForm

export const reorder = {
    '/api/v1/menus/{menu}/reorder': reorder98d34b3e12042f0ec14dcd9b099e1be2,
    '/menus/{menu}/reorder': reorder93a820b9bf00b0c11d31b1406e9a2b2a,
}


/**
* @see \App\Http\Controllers\MenuController::toggleVisibility
* @see app/Http/Controllers/MenuController.php:198
* @route '/api/v1/menus/{menu}/items/{item}/toggle-visibility'
*/
const toggleVisibilitye9a72d513e5ed2c7a9d754ee5153bd8d = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleVisibilitye9a72d513e5ed2c7a9d754ee5153bd8d.url(args, options),
    method: 'patch',
})

toggleVisibilitye9a72d513e5ed2c7a9d754ee5153bd8d.definition = {
    methods: ["patch"],
    url: '/api/v1/menus/{menu}/items/{item}/toggle-visibility',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MenuController::toggleVisibility
* @see app/Http/Controllers/MenuController.php:198
* @route '/api/v1/menus/{menu}/items/{item}/toggle-visibility'
*/
toggleVisibilitye9a72d513e5ed2c7a9d754ee5153bd8d.url = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions) => {

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

    return toggleVisibilitye9a72d513e5ed2c7a9d754ee5153bd8d.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::toggleVisibility
* @see app/Http/Controllers/MenuController.php:198
* @route '/api/v1/menus/{menu}/items/{item}/toggle-visibility'
*/
toggleVisibilitye9a72d513e5ed2c7a9d754ee5153bd8d.patch = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleVisibilitye9a72d513e5ed2c7a9d754ee5153bd8d.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\MenuController::toggleVisibility
* @see app/Http/Controllers/MenuController.php:198
* @route '/api/v1/menus/{menu}/items/{item}/toggle-visibility'
*/
const toggleVisibilitye9a72d513e5ed2c7a9d754ee5153bd8dForm = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleVisibilitye9a72d513e5ed2c7a9d754ee5153bd8d.url(args, {
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
* @route '/api/v1/menus/{menu}/items/{item}/toggle-visibility'
*/
toggleVisibilitye9a72d513e5ed2c7a9d754ee5153bd8dForm.patch = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleVisibilitye9a72d513e5ed2c7a9d754ee5153bd8d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleVisibilitye9a72d513e5ed2c7a9d754ee5153bd8d.form = toggleVisibilitye9a72d513e5ed2c7a9d754ee5153bd8dForm
/**
* @see \App\Http\Controllers\MenuController::toggleVisibility
* @see app/Http/Controllers/MenuController.php:198
* @route '/menus/{menu}/items/{item}/toggle-visibility'
*/
const toggleVisibilityc3c63d40f04fe0fd72d500ee867dc0b5 = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleVisibilityc3c63d40f04fe0fd72d500ee867dc0b5.url(args, options),
    method: 'patch',
})

toggleVisibilityc3c63d40f04fe0fd72d500ee867dc0b5.definition = {
    methods: ["patch"],
    url: '/menus/{menu}/items/{item}/toggle-visibility',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MenuController::toggleVisibility
* @see app/Http/Controllers/MenuController.php:198
* @route '/menus/{menu}/items/{item}/toggle-visibility'
*/
toggleVisibilityc3c63d40f04fe0fd72d500ee867dc0b5.url = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions) => {

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

    return toggleVisibilityc3c63d40f04fe0fd72d500ee867dc0b5.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MenuController::toggleVisibility
* @see app/Http/Controllers/MenuController.php:198
* @route '/menus/{menu}/items/{item}/toggle-visibility'
*/
toggleVisibilityc3c63d40f04fe0fd72d500ee867dc0b5.patch = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleVisibilityc3c63d40f04fe0fd72d500ee867dc0b5.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\MenuController::toggleVisibility
* @see app/Http/Controllers/MenuController.php:198
* @route '/menus/{menu}/items/{item}/toggle-visibility'
*/
const toggleVisibilityc3c63d40f04fe0fd72d500ee867dc0b5Form = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleVisibilityc3c63d40f04fe0fd72d500ee867dc0b5.url(args, {
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
toggleVisibilityc3c63d40f04fe0fd72d500ee867dc0b5Form.patch = (args: { menu: string | number | { id: string | number }, item: string | number | { id: string | number } } | [menu: string | number | { id: string | number }, item: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleVisibilityc3c63d40f04fe0fd72d500ee867dc0b5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleVisibilityc3c63d40f04fe0fd72d500ee867dc0b5.form = toggleVisibilityc3c63d40f04fe0fd72d500ee867dc0b5Form

export const toggleVisibility = {
    '/api/v1/menus/{menu}/items/{item}/toggle-visibility': toggleVisibilitye9a72d513e5ed2c7a9d754ee5153bd8d,
    '/menus/{menu}/items/{item}/toggle-visibility': toggleVisibilityc3c63d40f04fe0fd72d500ee867dc0b5,
}


const MenuController = { primary, footer, updateMenu, storeItem, updateItem, destroyItem, reorder, toggleVisibility }

export default MenuController