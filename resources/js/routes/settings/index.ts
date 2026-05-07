import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\SiteSettingController::index
* @see app/Http/Controllers/SiteSettingController.php:25
* @route '/settings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SiteSettingController::index
* @see app/Http/Controllers/SiteSettingController.php:25
* @route '/settings'
*/
index.url = (options?: RouteQueryOptions) => {




    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SiteSettingController::index
* @see app/Http/Controllers/SiteSettingController.php:25
* @route '/settings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SiteSettingController::index
* @see app/Http/Controllers/SiteSettingController.php:25
* @route '/settings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SiteSettingController::index
* @see app/Http/Controllers/SiteSettingController.php:25
* @route '/settings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SiteSettingController::index
* @see app/Http/Controllers/SiteSettingController.php:25
* @route '/settings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SiteSettingController::index
* @see app/Http/Controllers/SiteSettingController.php:25
* @route '/settings'
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
* @see \App\Http\Controllers\SiteSettingController::seedDefaults
* @see app/Http/Controllers/SiteSettingController.php:95
* @route '/settings/seed-defaults'
*/
export const seedDefaults = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: seedDefaults.url(options),
    method: 'post',
})

seedDefaults.definition = {
    methods: ["post"],
    url: '/settings/seed-defaults',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SiteSettingController::seedDefaults
* @see app/Http/Controllers/SiteSettingController.php:95
* @route '/settings/seed-defaults'
*/
seedDefaults.url = (options?: RouteQueryOptions) => {




    return seedDefaults.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SiteSettingController::seedDefaults
* @see app/Http/Controllers/SiteSettingController.php:95
* @route '/settings/seed-defaults'
*/
seedDefaults.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: seedDefaults.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SiteSettingController::seedDefaults
* @see app/Http/Controllers/SiteSettingController.php:95
* @route '/settings/seed-defaults'
*/
const seedDefaultsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: seedDefaults.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SiteSettingController::seedDefaults
* @see app/Http/Controllers/SiteSettingController.php:95
* @route '/settings/seed-defaults'
*/
seedDefaultsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: seedDefaults.url(options),
    method: 'post',
})

seedDefaults.form = seedDefaultsForm

/**
* @see \App\Http\Controllers\SiteSettingController::update
* @see app/Http/Controllers/SiteSettingController.php:50
* @route '/settings'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/settings',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SiteSettingController::update
* @see app/Http/Controllers/SiteSettingController.php:50
* @route '/settings'
*/
update.url = (options?: RouteQueryOptions) => {




    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SiteSettingController::update
* @see app/Http/Controllers/SiteSettingController.php:50
* @route '/settings'
*/
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SiteSettingController::update
* @see app/Http/Controllers/SiteSettingController.php:50
* @route '/settings'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SiteSettingController::update
* @see app/Http/Controllers/SiteSettingController.php:50
* @route '/settings'
*/
updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(options),
    method: 'post',
})

update.form = updateForm



const settings = {
    index: Object.assign(index, index),
    seedDefaults: Object.assign(seedDefaults, seedDefaults),
    update: Object.assign(update, update),
}

export default settings