import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SeoSettingController::index
* @see app/Http/Controllers/SeoSettingController.php:54
* @route '/api/v1/seo'
*/
const indexee2fb8c7e9269e17eaece30a5c33f900 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexee2fb8c7e9269e17eaece30a5c33f900.url(options),
    method: 'get',
})

indexee2fb8c7e9269e17eaece30a5c33f900.definition = {
    methods: ["get","head"],
    url: '/api/v1/seo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SeoSettingController::index
* @see app/Http/Controllers/SeoSettingController.php:54
* @route '/api/v1/seo'
*/
indexee2fb8c7e9269e17eaece30a5c33f900.url = (options?: RouteQueryOptions) => {




    return indexee2fb8c7e9269e17eaece30a5c33f900.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SeoSettingController::index
* @see app/Http/Controllers/SeoSettingController.php:54
* @route '/api/v1/seo'
*/
indexee2fb8c7e9269e17eaece30a5c33f900.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexee2fb8c7e9269e17eaece30a5c33f900.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SeoSettingController::index
* @see app/Http/Controllers/SeoSettingController.php:54
* @route '/api/v1/seo'
*/
indexee2fb8c7e9269e17eaece30a5c33f900.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexee2fb8c7e9269e17eaece30a5c33f900.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SeoSettingController::index
* @see app/Http/Controllers/SeoSettingController.php:54
* @route '/api/v1/seo'
*/
const indexee2fb8c7e9269e17eaece30a5c33f900Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexee2fb8c7e9269e17eaece30a5c33f900.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SeoSettingController::index
* @see app/Http/Controllers/SeoSettingController.php:54
* @route '/api/v1/seo'
*/
indexee2fb8c7e9269e17eaece30a5c33f900Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexee2fb8c7e9269e17eaece30a5c33f900.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SeoSettingController::index
* @see app/Http/Controllers/SeoSettingController.php:54
* @route '/api/v1/seo'
*/
indexee2fb8c7e9269e17eaece30a5c33f900Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexee2fb8c7e9269e17eaece30a5c33f900.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexee2fb8c7e9269e17eaece30a5c33f900.form = indexee2fb8c7e9269e17eaece30a5c33f900Form
/**
* @see \App\Http\Controllers\SeoSettingController::index
* @see app/Http/Controllers/SeoSettingController.php:54
* @route '/seo'
*/
const index137a6eedd68bc47b5fb8b3831ddf227c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index137a6eedd68bc47b5fb8b3831ddf227c.url(options),
    method: 'get',
})

index137a6eedd68bc47b5fb8b3831ddf227c.definition = {
    methods: ["get","head"],
    url: '/seo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SeoSettingController::index
* @see app/Http/Controllers/SeoSettingController.php:54
* @route '/seo'
*/
index137a6eedd68bc47b5fb8b3831ddf227c.url = (options?: RouteQueryOptions) => {




    return index137a6eedd68bc47b5fb8b3831ddf227c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SeoSettingController::index
* @see app/Http/Controllers/SeoSettingController.php:54
* @route '/seo'
*/
index137a6eedd68bc47b5fb8b3831ddf227c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index137a6eedd68bc47b5fb8b3831ddf227c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SeoSettingController::index
* @see app/Http/Controllers/SeoSettingController.php:54
* @route '/seo'
*/
index137a6eedd68bc47b5fb8b3831ddf227c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index137a6eedd68bc47b5fb8b3831ddf227c.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SeoSettingController::index
* @see app/Http/Controllers/SeoSettingController.php:54
* @route '/seo'
*/
const index137a6eedd68bc47b5fb8b3831ddf227cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index137a6eedd68bc47b5fb8b3831ddf227c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SeoSettingController::index
* @see app/Http/Controllers/SeoSettingController.php:54
* @route '/seo'
*/
index137a6eedd68bc47b5fb8b3831ddf227cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index137a6eedd68bc47b5fb8b3831ddf227c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SeoSettingController::index
* @see app/Http/Controllers/SeoSettingController.php:54
* @route '/seo'
*/
index137a6eedd68bc47b5fb8b3831ddf227cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index137a6eedd68bc47b5fb8b3831ddf227c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index137a6eedd68bc47b5fb8b3831ddf227c.form = index137a6eedd68bc47b5fb8b3831ddf227cForm

export const index = {
    '/api/v1/seo': indexee2fb8c7e9269e17eaece30a5c33f900,
    '/seo': index137a6eedd68bc47b5fb8b3831ddf227c,
}


/**
* @see \App\Http\Controllers\SeoSettingController::update
* @see app/Http/Controllers/SeoSettingController.php:79
* @route '/api/v1/seo'
*/
const updateee2fb8c7e9269e17eaece30a5c33f900 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateee2fb8c7e9269e17eaece30a5c33f900.url(options),
    method: 'post',
})

updateee2fb8c7e9269e17eaece30a5c33f900.definition = {
    methods: ["post"],
    url: '/api/v1/seo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SeoSettingController::update
* @see app/Http/Controllers/SeoSettingController.php:79
* @route '/api/v1/seo'
*/
updateee2fb8c7e9269e17eaece30a5c33f900.url = (options?: RouteQueryOptions) => {




    return updateee2fb8c7e9269e17eaece30a5c33f900.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SeoSettingController::update
* @see app/Http/Controllers/SeoSettingController.php:79
* @route '/api/v1/seo'
*/
updateee2fb8c7e9269e17eaece30a5c33f900.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateee2fb8c7e9269e17eaece30a5c33f900.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SeoSettingController::update
* @see app/Http/Controllers/SeoSettingController.php:79
* @route '/api/v1/seo'
*/
const updateee2fb8c7e9269e17eaece30a5c33f900Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateee2fb8c7e9269e17eaece30a5c33f900.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SeoSettingController::update
* @see app/Http/Controllers/SeoSettingController.php:79
* @route '/api/v1/seo'
*/
updateee2fb8c7e9269e17eaece30a5c33f900Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateee2fb8c7e9269e17eaece30a5c33f900.url(options),
    method: 'post',
})

updateee2fb8c7e9269e17eaece30a5c33f900.form = updateee2fb8c7e9269e17eaece30a5c33f900Form
/**
* @see \App\Http\Controllers\SeoSettingController::update
* @see app/Http/Controllers/SeoSettingController.php:79
* @route '/seo'
*/
const update137a6eedd68bc47b5fb8b3831ddf227c = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update137a6eedd68bc47b5fb8b3831ddf227c.url(options),
    method: 'post',
})

update137a6eedd68bc47b5fb8b3831ddf227c.definition = {
    methods: ["post"],
    url: '/seo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SeoSettingController::update
* @see app/Http/Controllers/SeoSettingController.php:79
* @route '/seo'
*/
update137a6eedd68bc47b5fb8b3831ddf227c.url = (options?: RouteQueryOptions) => {




    return update137a6eedd68bc47b5fb8b3831ddf227c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SeoSettingController::update
* @see app/Http/Controllers/SeoSettingController.php:79
* @route '/seo'
*/
update137a6eedd68bc47b5fb8b3831ddf227c.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update137a6eedd68bc47b5fb8b3831ddf227c.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SeoSettingController::update
* @see app/Http/Controllers/SeoSettingController.php:79
* @route '/seo'
*/
const update137a6eedd68bc47b5fb8b3831ddf227cForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update137a6eedd68bc47b5fb8b3831ddf227c.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SeoSettingController::update
* @see app/Http/Controllers/SeoSettingController.php:79
* @route '/seo'
*/
update137a6eedd68bc47b5fb8b3831ddf227cForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update137a6eedd68bc47b5fb8b3831ddf227c.url(options),
    method: 'post',
})

update137a6eedd68bc47b5fb8b3831ddf227c.form = update137a6eedd68bc47b5fb8b3831ddf227cForm

export const update = {
    '/api/v1/seo': updateee2fb8c7e9269e17eaece30a5c33f900,
    '/seo': update137a6eedd68bc47b5fb8b3831ddf227c,
}


const SeoSettingController = { index, update }

export default SeoSettingController