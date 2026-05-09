import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
const showe6169f3fafa7c3f4f661de225f8e262e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showe6169f3fafa7c3f4f661de225f8e262e.url(options),
    method: 'get',
})

showe6169f3fafa7c3f4f661de225f8e262e.definition = {
    methods: ["get","head"],
    url: '/user/two-factor-qr-code',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
showe6169f3fafa7c3f4f661de225f8e262e.url = (options?: RouteQueryOptions) => {
    return showe6169f3fafa7c3f4f661de225f8e262e.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
showe6169f3fafa7c3f4f661de225f8e262e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showe6169f3fafa7c3f4f661de225f8e262e.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
showe6169f3fafa7c3f4f661de225f8e262e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showe6169f3fafa7c3f4f661de225f8e262e.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
const showe6169f3fafa7c3f4f661de225f8e262eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showe6169f3fafa7c3f4f661de225f8e262e.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
showe6169f3fafa7c3f4f661de225f8e262eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showe6169f3fafa7c3f4f661de225f8e262e.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
showe6169f3fafa7c3f4f661de225f8e262eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showe6169f3fafa7c3f4f661de225f8e262e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showe6169f3fafa7c3f4f661de225f8e262e.form = showe6169f3fafa7c3f4f661de225f8e262eForm
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/settings/two-factor'
*/
const show0ad619344ffe7d8e6e4b1c508de96456 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show0ad619344ffe7d8e6e4b1c508de96456.url(options),
    method: 'get',
})

show0ad619344ffe7d8e6e4b1c508de96456.definition = {
    methods: ["get","head"],
    url: '/settings/two-factor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/settings/two-factor'
*/
show0ad619344ffe7d8e6e4b1c508de96456.url = (options?: RouteQueryOptions) => {
    return show0ad619344ffe7d8e6e4b1c508de96456.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/settings/two-factor'
*/
show0ad619344ffe7d8e6e4b1c508de96456.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show0ad619344ffe7d8e6e4b1c508de96456.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/settings/two-factor'
*/
show0ad619344ffe7d8e6e4b1c508de96456.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show0ad619344ffe7d8e6e4b1c508de96456.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/settings/two-factor'
*/
const show0ad619344ffe7d8e6e4b1c508de96456Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show0ad619344ffe7d8e6e4b1c508de96456.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/settings/two-factor'
*/
show0ad619344ffe7d8e6e4b1c508de96456Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show0ad619344ffe7d8e6e4b1c508de96456.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/settings/two-factor'
*/
show0ad619344ffe7d8e6e4b1c508de96456Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show0ad619344ffe7d8e6e4b1c508de96456.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show0ad619344ffe7d8e6e4b1c508de96456.form = show0ad619344ffe7d8e6e4b1c508de96456Form

export const show = {
    '/user/two-factor-qr-code': showe6169f3fafa7c3f4f661de225f8e262e,
    '/settings/two-factor': show0ad619344ffe7d8e6e4b1c508de96456,
}

const TwoFactorQrCodeController = { show }

export default TwoFactorQrCodeController