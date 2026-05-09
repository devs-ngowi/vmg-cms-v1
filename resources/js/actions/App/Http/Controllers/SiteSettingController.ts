import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SiteSettingController::apiIndex
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings'
*/
export const apiIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apiIndex.url(options),
    method: 'get',
})

apiIndex.definition = {
    methods: ["get","head"],
    url: '/api/v1/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SiteSettingController::apiIndex
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings'
*/
apiIndex.url = (options?: RouteQueryOptions) => {
    return apiIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SiteSettingController::apiIndex
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings'
*/
apiIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apiIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SiteSettingController::apiIndex
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings'
*/
apiIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: apiIndex.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SiteSettingController::apiIndex
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings'
*/
const apiIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SiteSettingController::apiIndex
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings'
*/
apiIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SiteSettingController::apiIndex
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings'
*/
apiIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiIndex.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

apiIndex.form = apiIndexForm

/**
* @see \App\Http\Controllers\SiteSettingController::apiByGroup
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings/{group}'
*/
export const apiByGroup = (args: { group: string | number } | [group: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apiByGroup.url(args, options),
    method: 'get',
})

apiByGroup.definition = {
    methods: ["get","head"],
    url: '/api/v1/settings/{group}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SiteSettingController::apiByGroup
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings/{group}'
*/
apiByGroup.url = (args: { group: string | number } | [group: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { group: args }
    }

    if (Array.isArray(args)) {
        args = {
            group: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        group: args.group,
    }

    return apiByGroup.definition.url
            .replace('{group}', parsedArgs.group.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SiteSettingController::apiByGroup
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings/{group}'
*/
apiByGroup.get = (args: { group: string | number } | [group: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apiByGroup.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SiteSettingController::apiByGroup
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings/{group}'
*/
apiByGroup.head = (args: { group: string | number } | [group: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: apiByGroup.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SiteSettingController::apiByGroup
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings/{group}'
*/
const apiByGroupForm = (args: { group: string | number } | [group: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiByGroup.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SiteSettingController::apiByGroup
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings/{group}'
*/
apiByGroupForm.get = (args: { group: string | number } | [group: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiByGroup.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SiteSettingController::apiByGroup
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings/{group}'
*/
apiByGroupForm.head = (args: { group: string | number } | [group: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiByGroup.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

apiByGroup.form = apiByGroupForm

/**
* @see \App\Http\Controllers\SiteSettingController::apiGetSetting
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings/get/{key}'
*/
export const apiGetSetting = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apiGetSetting.url(args, options),
    method: 'get',
})

apiGetSetting.definition = {
    methods: ["get","head"],
    url: '/api/v1/settings/get/{key}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SiteSettingController::apiGetSetting
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings/get/{key}'
*/
apiGetSetting.url = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { key: args }
    }

    if (Array.isArray(args)) {
        args = {
            key: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        key: args.key,
    }

    return apiGetSetting.definition.url
            .replace('{key}', parsedArgs.key.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SiteSettingController::apiGetSetting
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings/get/{key}'
*/
apiGetSetting.get = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: apiGetSetting.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SiteSettingController::apiGetSetting
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings/get/{key}'
*/
apiGetSetting.head = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: apiGetSetting.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SiteSettingController::apiGetSetting
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings/get/{key}'
*/
const apiGetSettingForm = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiGetSetting.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SiteSettingController::apiGetSetting
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings/get/{key}'
*/
apiGetSettingForm.get = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiGetSetting.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SiteSettingController::apiGetSetting
* @see app/Http/Controllers/SiteSettingController.php:0
* @route '/api/v1/settings/get/{key}'
*/
apiGetSettingForm.head = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: apiGetSetting.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

apiGetSetting.form = apiGetSettingForm

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

const SiteSettingController = { apiIndex, apiByGroup, apiGetSetting, index, seedDefaults, update }

export default SiteSettingController