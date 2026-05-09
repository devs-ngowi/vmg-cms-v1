import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AuthController::showLogin
* @see app/Http/Controllers/AuthController.php:14
* @route '/login'
*/
export const showLogin = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLogin.url(options),
    method: 'get',
})

showLogin.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthController::showLogin
* @see app/Http/Controllers/AuthController.php:14
* @route '/login'
*/
showLogin.url = (options?: RouteQueryOptions) => {
    return showLogin.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::showLogin
* @see app/Http/Controllers/AuthController.php:14
* @route '/login'
*/
showLogin.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLogin.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::showLogin
* @see app/Http/Controllers/AuthController.php:14
* @route '/login'
*/
showLogin.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showLogin.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthController::showLogin
* @see app/Http/Controllers/AuthController.php:14
* @route '/login'
*/
const showLoginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showLogin.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::showLogin
* @see app/Http/Controllers/AuthController.php:14
* @route '/login'
*/
showLoginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showLogin.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::showLogin
* @see app/Http/Controllers/AuthController.php:14
* @route '/login'
*/
showLoginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showLogin.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showLogin.form = showLoginForm

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:19
* @route '/login'
*/
const loginb6041c76e8e1cd791f8f89d035d48611 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: loginb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'post',
})

loginb6041c76e8e1cd791f8f89d035d48611.definition = {
    methods: ["post"],
    url: '/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:19
* @route '/login'
*/
loginb6041c76e8e1cd791f8f89d035d48611.url = (options?: RouteQueryOptions) => {
    return loginb6041c76e8e1cd791f8f89d035d48611.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:19
* @route '/login'
*/
loginb6041c76e8e1cd791f8f89d035d48611.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: loginb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:19
* @route '/login'
*/
const loginb6041c76e8e1cd791f8f89d035d48611Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: loginb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:19
* @route '/login'
*/
loginb6041c76e8e1cd791f8f89d035d48611Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: loginb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'post',
})

loginb6041c76e8e1cd791f8f89d035d48611.form = loginb6041c76e8e1cd791f8f89d035d48611Form
/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:19
* @route '/api/v1/auth/login'
*/
const loginf08cf5b8e17f0259f48ac6f91cb5fd93 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: loginf08cf5b8e17f0259f48ac6f91cb5fd93.url(options),
    method: 'post',
})

loginf08cf5b8e17f0259f48ac6f91cb5fd93.definition = {
    methods: ["post"],
    url: '/api/v1/auth/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:19
* @route '/api/v1/auth/login'
*/
loginf08cf5b8e17f0259f48ac6f91cb5fd93.url = (options?: RouteQueryOptions) => {
    return loginf08cf5b8e17f0259f48ac6f91cb5fd93.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:19
* @route '/api/v1/auth/login'
*/
loginf08cf5b8e17f0259f48ac6f91cb5fd93.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: loginf08cf5b8e17f0259f48ac6f91cb5fd93.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:19
* @route '/api/v1/auth/login'
*/
const loginf08cf5b8e17f0259f48ac6f91cb5fd93Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: loginf08cf5b8e17f0259f48ac6f91cb5fd93.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:19
* @route '/api/v1/auth/login'
*/
loginf08cf5b8e17f0259f48ac6f91cb5fd93Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: loginf08cf5b8e17f0259f48ac6f91cb5fd93.url(options),
    method: 'post',
})

loginf08cf5b8e17f0259f48ac6f91cb5fd93.form = loginf08cf5b8e17f0259f48ac6f91cb5fd93Form

export const login = {
    '/login': loginb6041c76e8e1cd791f8f89d035d48611,
    '/api/v1/auth/login': loginf08cf5b8e17f0259f48ac6f91cb5fd93,
}

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:164
* @route '/logout'
*/
const logoutf732b903d9f8919b4c24bef1f8bb897a = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logoutf732b903d9f8919b4c24bef1f8bb897a.url(options),
    method: 'post',
})

logoutf732b903d9f8919b4c24bef1f8bb897a.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:164
* @route '/logout'
*/
logoutf732b903d9f8919b4c24bef1f8bb897a.url = (options?: RouteQueryOptions) => {
    return logoutf732b903d9f8919b4c24bef1f8bb897a.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:164
* @route '/logout'
*/
logoutf732b903d9f8919b4c24bef1f8bb897a.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logoutf732b903d9f8919b4c24bef1f8bb897a.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:164
* @route '/logout'
*/
const logoutf732b903d9f8919b4c24bef1f8bb897aForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logoutf732b903d9f8919b4c24bef1f8bb897a.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:164
* @route '/logout'
*/
logoutf732b903d9f8919b4c24bef1f8bb897aForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logoutf732b903d9f8919b4c24bef1f8bb897a.url(options),
    method: 'post',
})

logoutf732b903d9f8919b4c24bef1f8bb897a.form = logoutf732b903d9f8919b4c24bef1f8bb897aForm
/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:164
* @route '/api/v1/auth/logout'
*/
const logoute86dac8ced8597adf893a7f400807b67 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logoute86dac8ced8597adf893a7f400807b67.url(options),
    method: 'post',
})

logoute86dac8ced8597adf893a7f400807b67.definition = {
    methods: ["post"],
    url: '/api/v1/auth/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:164
* @route '/api/v1/auth/logout'
*/
logoute86dac8ced8597adf893a7f400807b67.url = (options?: RouteQueryOptions) => {
    return logoute86dac8ced8597adf893a7f400807b67.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:164
* @route '/api/v1/auth/logout'
*/
logoute86dac8ced8597adf893a7f400807b67.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logoute86dac8ced8597adf893a7f400807b67.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:164
* @route '/api/v1/auth/logout'
*/
const logoute86dac8ced8597adf893a7f400807b67Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logoute86dac8ced8597adf893a7f400807b67.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:164
* @route '/api/v1/auth/logout'
*/
logoute86dac8ced8597adf893a7f400807b67Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logoute86dac8ced8597adf893a7f400807b67.url(options),
    method: 'post',
})

logoute86dac8ced8597adf893a7f400807b67.form = logoute86dac8ced8597adf893a7f400807b67Form

export const logout = {
    '/logout': logoutf732b903d9f8919b4c24bef1f8bb897a,
    '/api/v1/auth/logout': logoute86dac8ced8597adf893a7f400807b67,
}

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:131
* @route '/api/v1/auth/register'
*/
const register2e61e4480c9d993ac4312ac9dd755931 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register2e61e4480c9d993ac4312ac9dd755931.url(options),
    method: 'post',
})

register2e61e4480c9d993ac4312ac9dd755931.definition = {
    methods: ["post"],
    url: '/api/v1/auth/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:131
* @route '/api/v1/auth/register'
*/
register2e61e4480c9d993ac4312ac9dd755931.url = (options?: RouteQueryOptions) => {
    return register2e61e4480c9d993ac4312ac9dd755931.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:131
* @route '/api/v1/auth/register'
*/
register2e61e4480c9d993ac4312ac9dd755931.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register2e61e4480c9d993ac4312ac9dd755931.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:131
* @route '/api/v1/auth/register'
*/
const register2e61e4480c9d993ac4312ac9dd755931Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register2e61e4480c9d993ac4312ac9dd755931.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:131
* @route '/api/v1/auth/register'
*/
register2e61e4480c9d993ac4312ac9dd755931Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register2e61e4480c9d993ac4312ac9dd755931.url(options),
    method: 'post',
})

register2e61e4480c9d993ac4312ac9dd755931.form = register2e61e4480c9d993ac4312ac9dd755931Form
/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:131
* @route '/register'
*/
const registere9819db9819a1d19b38dd89a0c4218c4 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: registere9819db9819a1d19b38dd89a0c4218c4.url(options),
    method: 'post',
})

registere9819db9819a1d19b38dd89a0c4218c4.definition = {
    methods: ["post"],
    url: '/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:131
* @route '/register'
*/
registere9819db9819a1d19b38dd89a0c4218c4.url = (options?: RouteQueryOptions) => {
    return registere9819db9819a1d19b38dd89a0c4218c4.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:131
* @route '/register'
*/
registere9819db9819a1d19b38dd89a0c4218c4.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: registere9819db9819a1d19b38dd89a0c4218c4.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:131
* @route '/register'
*/
const registere9819db9819a1d19b38dd89a0c4218c4Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: registere9819db9819a1d19b38dd89a0c4218c4.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:131
* @route '/register'
*/
registere9819db9819a1d19b38dd89a0c4218c4Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: registere9819db9819a1d19b38dd89a0c4218c4.url(options),
    method: 'post',
})

registere9819db9819a1d19b38dd89a0c4218c4.form = registere9819db9819a1d19b38dd89a0c4218c4Form

export const register = {
    '/api/v1/auth/register': register2e61e4480c9d993ac4312ac9dd755931,
    '/register': registere9819db9819a1d19b38dd89a0c4218c4,
}

/**
* @see \App\Http\Controllers\AuthController::showRegister
* @see app/Http/Controllers/AuthController.php:126
* @route '/register'
*/
export const showRegister = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showRegister.url(options),
    method: 'get',
})

showRegister.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthController::showRegister
* @see app/Http/Controllers/AuthController.php:126
* @route '/register'
*/
showRegister.url = (options?: RouteQueryOptions) => {
    return showRegister.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::showRegister
* @see app/Http/Controllers/AuthController.php:126
* @route '/register'
*/
showRegister.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showRegister.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::showRegister
* @see app/Http/Controllers/AuthController.php:126
* @route '/register'
*/
showRegister.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showRegister.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthController::showRegister
* @see app/Http/Controllers/AuthController.php:126
* @route '/register'
*/
const showRegisterForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showRegister.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::showRegister
* @see app/Http/Controllers/AuthController.php:126
* @route '/register'
*/
showRegisterForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showRegister.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::showRegister
* @see app/Http/Controllers/AuthController.php:126
* @route '/register'
*/
showRegisterForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showRegister.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showRegister.form = showRegisterForm

const AuthController = { showLogin, login, logout, register, showRegister }

export default AuthController