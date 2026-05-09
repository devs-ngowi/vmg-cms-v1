import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import register702019 from './register'
/**
* @see \App\Http\Controllers\CompanyRegistrationController::register
* @see app/Http/Controllers/CompanyRegistrationController.php:12
* @route '/register-company'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register-company',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CompanyRegistrationController::register
* @see app/Http/Controllers/CompanyRegistrationController.php:12
* @route '/register-company'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyRegistrationController::register
* @see app/Http/Controllers/CompanyRegistrationController.php:12
* @route '/register-company'
*/
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyRegistrationController::register
* @see app/Http/Controllers/CompanyRegistrationController.php:12
* @route '/register-company'
*/
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CompanyRegistrationController::register
* @see app/Http/Controllers/CompanyRegistrationController.php:12
* @route '/register-company'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyRegistrationController::register
* @see app/Http/Controllers/CompanyRegistrationController.php:12
* @route '/register-company'
*/
registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyRegistrationController::register
* @see app/Http/Controllers/CompanyRegistrationController.php:12
* @route '/register-company'
*/
registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

register.form = registerForm

const company = {
    register: Object.assign(register, register702019),
}

export default company