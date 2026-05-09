import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/api/v1/pages'
*/
const indexf9f18fa6d63adeaec899f77d59e37085 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexf9f18fa6d63adeaec899f77d59e37085.url(options),
    method: 'get',
})

indexf9f18fa6d63adeaec899f77d59e37085.definition = {
    methods: ["get","head"],
    url: '/api/v1/pages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/api/v1/pages'
*/
indexf9f18fa6d63adeaec899f77d59e37085.url = (options?: RouteQueryOptions) => {
    return indexf9f18fa6d63adeaec899f77d59e37085.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/api/v1/pages'
*/
indexf9f18fa6d63adeaec899f77d59e37085.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexf9f18fa6d63adeaec899f77d59e37085.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/api/v1/pages'
*/
indexf9f18fa6d63adeaec899f77d59e37085.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexf9f18fa6d63adeaec899f77d59e37085.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/api/v1/pages'
*/
const indexf9f18fa6d63adeaec899f77d59e37085Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexf9f18fa6d63adeaec899f77d59e37085.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/api/v1/pages'
*/
indexf9f18fa6d63adeaec899f77d59e37085Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexf9f18fa6d63adeaec899f77d59e37085.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/api/v1/pages'
*/
indexf9f18fa6d63adeaec899f77d59e37085Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexf9f18fa6d63adeaec899f77d59e37085.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexf9f18fa6d63adeaec899f77d59e37085.form = indexf9f18fa6d63adeaec899f77d59e37085Form
/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/pages'
*/
const index01be313083f752c41dc8b10f96264689 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index01be313083f752c41dc8b10f96264689.url(options),
    method: 'get',
})

index01be313083f752c41dc8b10f96264689.definition = {
    methods: ["get","head"],
    url: '/pages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/pages'
*/
index01be313083f752c41dc8b10f96264689.url = (options?: RouteQueryOptions) => {
    return index01be313083f752c41dc8b10f96264689.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/pages'
*/
index01be313083f752c41dc8b10f96264689.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index01be313083f752c41dc8b10f96264689.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/pages'
*/
index01be313083f752c41dc8b10f96264689.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index01be313083f752c41dc8b10f96264689.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/pages'
*/
const index01be313083f752c41dc8b10f96264689Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index01be313083f752c41dc8b10f96264689.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/pages'
*/
index01be313083f752c41dc8b10f96264689Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index01be313083f752c41dc8b10f96264689.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::index
* @see app/Http/Controllers/PageController.php:110
* @route '/pages'
*/
index01be313083f752c41dc8b10f96264689Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index01be313083f752c41dc8b10f96264689.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index01be313083f752c41dc8b10f96264689.form = index01be313083f752c41dc8b10f96264689Form

export const index = {
    '/api/v1/pages': indexf9f18fa6d63adeaec899f77d59e37085,
    '/pages': index01be313083f752c41dc8b10f96264689,
}

/**
* @see \App\Http\Controllers\PageController::show
* @see app/Http/Controllers/PageController.php:0
* @route '/api/v1/pages/{page}'
*/
export const show = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/pages/{page}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PageController::show
* @see app/Http/Controllers/PageController.php:0
* @route '/api/v1/pages/{page}'
*/
show.url = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

    if (Array.isArray(args)) {
        args = {
            page: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        page: args.page,
    }

    return show.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::show
* @see app/Http/Controllers/PageController.php:0
* @route '/api/v1/pages/{page}'
*/
show.get = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::show
* @see app/Http/Controllers/PageController.php:0
* @route '/api/v1/pages/{page}'
*/
show.head = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PageController::show
* @see app/Http/Controllers/PageController.php:0
* @route '/api/v1/pages/{page}'
*/
const showForm = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::show
* @see app/Http/Controllers/PageController.php:0
* @route '/api/v1/pages/{page}'
*/
showForm.get = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::show
* @see app/Http/Controllers/PageController.php:0
* @route '/api/v1/pages/{page}'
*/
showForm.head = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/api/v1/pages/drafts'
*/
const draftscacd2561a6a0da7c956a739e7d792e87 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: draftscacd2561a6a0da7c956a739e7d792e87.url(options),
    method: 'get',
})

draftscacd2561a6a0da7c956a739e7d792e87.definition = {
    methods: ["get","head"],
    url: '/api/v1/pages/drafts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/api/v1/pages/drafts'
*/
draftscacd2561a6a0da7c956a739e7d792e87.url = (options?: RouteQueryOptions) => {
    return draftscacd2561a6a0da7c956a739e7d792e87.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/api/v1/pages/drafts'
*/
draftscacd2561a6a0da7c956a739e7d792e87.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: draftscacd2561a6a0da7c956a739e7d792e87.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/api/v1/pages/drafts'
*/
draftscacd2561a6a0da7c956a739e7d792e87.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: draftscacd2561a6a0da7c956a739e7d792e87.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/api/v1/pages/drafts'
*/
const draftscacd2561a6a0da7c956a739e7d792e87Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: draftscacd2561a6a0da7c956a739e7d792e87.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/api/v1/pages/drafts'
*/
draftscacd2561a6a0da7c956a739e7d792e87Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: draftscacd2561a6a0da7c956a739e7d792e87.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/api/v1/pages/drafts'
*/
draftscacd2561a6a0da7c956a739e7d792e87Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: draftscacd2561a6a0da7c956a739e7d792e87.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

draftscacd2561a6a0da7c956a739e7d792e87.form = draftscacd2561a6a0da7c956a739e7d792e87Form
/**
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/pages/drafts'
*/
const drafts9e54cdf6cc93be58a16d6eb92ad10503 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: drafts9e54cdf6cc93be58a16d6eb92ad10503.url(options),
    method: 'get',
})

drafts9e54cdf6cc93be58a16d6eb92ad10503.definition = {
    methods: ["get","head"],
    url: '/pages/drafts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/pages/drafts'
*/
drafts9e54cdf6cc93be58a16d6eb92ad10503.url = (options?: RouteQueryOptions) => {
    return drafts9e54cdf6cc93be58a16d6eb92ad10503.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/pages/drafts'
*/
drafts9e54cdf6cc93be58a16d6eb92ad10503.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: drafts9e54cdf6cc93be58a16d6eb92ad10503.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/pages/drafts'
*/
drafts9e54cdf6cc93be58a16d6eb92ad10503.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: drafts9e54cdf6cc93be58a16d6eb92ad10503.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/pages/drafts'
*/
const drafts9e54cdf6cc93be58a16d6eb92ad10503Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: drafts9e54cdf6cc93be58a16d6eb92ad10503.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/pages/drafts'
*/
drafts9e54cdf6cc93be58a16d6eb92ad10503Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: drafts9e54cdf6cc93be58a16d6eb92ad10503.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::drafts
* @see app/Http/Controllers/PageController.php:130
* @route '/pages/drafts'
*/
drafts9e54cdf6cc93be58a16d6eb92ad10503Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: drafts9e54cdf6cc93be58a16d6eb92ad10503.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

drafts9e54cdf6cc93be58a16d6eb92ad10503.form = drafts9e54cdf6cc93be58a16d6eb92ad10503Form

export const drafts = {
    '/api/v1/pages/drafts': draftscacd2561a6a0da7c956a739e7d792e87,
    '/pages/drafts': drafts9e54cdf6cc93be58a16d6eb92ad10503,
}

/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/api/v1/pages/create'
*/
const create53da05f5784c5ced045639481a9ee610 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create53da05f5784c5ced045639481a9ee610.url(options),
    method: 'get',
})

create53da05f5784c5ced045639481a9ee610.definition = {
    methods: ["get","head"],
    url: '/api/v1/pages/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/api/v1/pages/create'
*/
create53da05f5784c5ced045639481a9ee610.url = (options?: RouteQueryOptions) => {
    return create53da05f5784c5ced045639481a9ee610.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/api/v1/pages/create'
*/
create53da05f5784c5ced045639481a9ee610.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create53da05f5784c5ced045639481a9ee610.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/api/v1/pages/create'
*/
create53da05f5784c5ced045639481a9ee610.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create53da05f5784c5ced045639481a9ee610.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/api/v1/pages/create'
*/
const create53da05f5784c5ced045639481a9ee610Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create53da05f5784c5ced045639481a9ee610.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/api/v1/pages/create'
*/
create53da05f5784c5ced045639481a9ee610Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create53da05f5784c5ced045639481a9ee610.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/api/v1/pages/create'
*/
create53da05f5784c5ced045639481a9ee610Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create53da05f5784c5ced045639481a9ee610.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create53da05f5784c5ced045639481a9ee610.form = create53da05f5784c5ced045639481a9ee610Form
/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/pages/create'
*/
const create1dc79e5e6e498bc3adfcb8c4f7e8664b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create1dc79e5e6e498bc3adfcb8c4f7e8664b.url(options),
    method: 'get',
})

create1dc79e5e6e498bc3adfcb8c4f7e8664b.definition = {
    methods: ["get","head"],
    url: '/pages/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/pages/create'
*/
create1dc79e5e6e498bc3adfcb8c4f7e8664b.url = (options?: RouteQueryOptions) => {
    return create1dc79e5e6e498bc3adfcb8c4f7e8664b.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/pages/create'
*/
create1dc79e5e6e498bc3adfcb8c4f7e8664b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create1dc79e5e6e498bc3adfcb8c4f7e8664b.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/pages/create'
*/
create1dc79e5e6e498bc3adfcb8c4f7e8664b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create1dc79e5e6e498bc3adfcb8c4f7e8664b.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/pages/create'
*/
const create1dc79e5e6e498bc3adfcb8c4f7e8664bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create1dc79e5e6e498bc3adfcb8c4f7e8664b.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/pages/create'
*/
create1dc79e5e6e498bc3adfcb8c4f7e8664bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create1dc79e5e6e498bc3adfcb8c4f7e8664b.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::create
* @see app/Http/Controllers/PageController.php:151
* @route '/pages/create'
*/
create1dc79e5e6e498bc3adfcb8c4f7e8664bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create1dc79e5e6e498bc3adfcb8c4f7e8664b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create1dc79e5e6e498bc3adfcb8c4f7e8664b.form = create1dc79e5e6e498bc3adfcb8c4f7e8664bForm

export const create = {
    '/api/v1/pages/create': create53da05f5784c5ced045639481a9ee610,
    '/pages/create': create1dc79e5e6e498bc3adfcb8c4f7e8664b,
}

/**
* @see \App\Http\Controllers\PageController::store
* @see app/Http/Controllers/PageController.php:165
* @route '/api/v1/pages'
*/
const storef9f18fa6d63adeaec899f77d59e37085 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storef9f18fa6d63adeaec899f77d59e37085.url(options),
    method: 'post',
})

storef9f18fa6d63adeaec899f77d59e37085.definition = {
    methods: ["post"],
    url: '/api/v1/pages',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PageController::store
* @see app/Http/Controllers/PageController.php:165
* @route '/api/v1/pages'
*/
storef9f18fa6d63adeaec899f77d59e37085.url = (options?: RouteQueryOptions) => {
    return storef9f18fa6d63adeaec899f77d59e37085.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::store
* @see app/Http/Controllers/PageController.php:165
* @route '/api/v1/pages'
*/
storef9f18fa6d63adeaec899f77d59e37085.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storef9f18fa6d63adeaec899f77d59e37085.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PageController::store
* @see app/Http/Controllers/PageController.php:165
* @route '/api/v1/pages'
*/
const storef9f18fa6d63adeaec899f77d59e37085Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storef9f18fa6d63adeaec899f77d59e37085.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PageController::store
* @see app/Http/Controllers/PageController.php:165
* @route '/api/v1/pages'
*/
storef9f18fa6d63adeaec899f77d59e37085Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storef9f18fa6d63adeaec899f77d59e37085.url(options),
    method: 'post',
})

storef9f18fa6d63adeaec899f77d59e37085.form = storef9f18fa6d63adeaec899f77d59e37085Form
/**
* @see \App\Http\Controllers\PageController::store
* @see app/Http/Controllers/PageController.php:165
* @route '/pages'
*/
const store01be313083f752c41dc8b10f96264689 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store01be313083f752c41dc8b10f96264689.url(options),
    method: 'post',
})

store01be313083f752c41dc8b10f96264689.definition = {
    methods: ["post"],
    url: '/pages',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PageController::store
* @see app/Http/Controllers/PageController.php:165
* @route '/pages'
*/
store01be313083f752c41dc8b10f96264689.url = (options?: RouteQueryOptions) => {
    return store01be313083f752c41dc8b10f96264689.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::store
* @see app/Http/Controllers/PageController.php:165
* @route '/pages'
*/
store01be313083f752c41dc8b10f96264689.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store01be313083f752c41dc8b10f96264689.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PageController::store
* @see app/Http/Controllers/PageController.php:165
* @route '/pages'
*/
const store01be313083f752c41dc8b10f96264689Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store01be313083f752c41dc8b10f96264689.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PageController::store
* @see app/Http/Controllers/PageController.php:165
* @route '/pages'
*/
store01be313083f752c41dc8b10f96264689Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store01be313083f752c41dc8b10f96264689.url(options),
    method: 'post',
})

store01be313083f752c41dc8b10f96264689.form = store01be313083f752c41dc8b10f96264689Form

export const store = {
    '/api/v1/pages': storef9f18fa6d63adeaec899f77d59e37085,
    '/pages': store01be313083f752c41dc8b10f96264689,
}

/**
* @see \App\Http\Controllers\PageController::update
* @see app/Http/Controllers/PageController.php:229
* @route '/api/v1/pages/{page}'
*/
const updatef70dc08d412626ca2cfacd2633a7d02c = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatef70dc08d412626ca2cfacd2633a7d02c.url(args, options),
    method: 'put',
})

updatef70dc08d412626ca2cfacd2633a7d02c.definition = {
    methods: ["put"],
    url: '/api/v1/pages/{page}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\PageController::update
* @see app/Http/Controllers/PageController.php:229
* @route '/api/v1/pages/{page}'
*/
updatef70dc08d412626ca2cfacd2633a7d02c.url = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { page: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            page: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        page: typeof args.page === 'object'
        ? args.page.id
        : args.page,
    }

    return updatef70dc08d412626ca2cfacd2633a7d02c.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::update
* @see app/Http/Controllers/PageController.php:229
* @route '/api/v1/pages/{page}'
*/
updatef70dc08d412626ca2cfacd2633a7d02c.put = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatef70dc08d412626ca2cfacd2633a7d02c.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\PageController::update
* @see app/Http/Controllers/PageController.php:229
* @route '/api/v1/pages/{page}'
*/
const updatef70dc08d412626ca2cfacd2633a7d02cForm = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatef70dc08d412626ca2cfacd2633a7d02c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PageController::update
* @see app/Http/Controllers/PageController.php:229
* @route '/api/v1/pages/{page}'
*/
updatef70dc08d412626ca2cfacd2633a7d02cForm.put = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatef70dc08d412626ca2cfacd2633a7d02c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatef70dc08d412626ca2cfacd2633a7d02c.form = updatef70dc08d412626ca2cfacd2633a7d02cForm
/**
* @see \App\Http\Controllers\PageController::update
* @see app/Http/Controllers/PageController.php:229
* @route '/pages/{page}'
*/
const update97b52a73bf846e75e5c90f5eaa500e81 = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update97b52a73bf846e75e5c90f5eaa500e81.url(args, options),
    method: 'patch',
})

update97b52a73bf846e75e5c90f5eaa500e81.definition = {
    methods: ["patch"],
    url: '/pages/{page}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PageController::update
* @see app/Http/Controllers/PageController.php:229
* @route '/pages/{page}'
*/
update97b52a73bf846e75e5c90f5eaa500e81.url = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { page: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            page: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        page: typeof args.page === 'object'
        ? args.page.id
        : args.page,
    }

    return update97b52a73bf846e75e5c90f5eaa500e81.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::update
* @see app/Http/Controllers/PageController.php:229
* @route '/pages/{page}'
*/
update97b52a73bf846e75e5c90f5eaa500e81.patch = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update97b52a73bf846e75e5c90f5eaa500e81.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PageController::update
* @see app/Http/Controllers/PageController.php:229
* @route '/pages/{page}'
*/
const update97b52a73bf846e75e5c90f5eaa500e81Form = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update97b52a73bf846e75e5c90f5eaa500e81.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PageController::update
* @see app/Http/Controllers/PageController.php:229
* @route '/pages/{page}'
*/
update97b52a73bf846e75e5c90f5eaa500e81Form.patch = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update97b52a73bf846e75e5c90f5eaa500e81.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update97b52a73bf846e75e5c90f5eaa500e81.form = update97b52a73bf846e75e5c90f5eaa500e81Form

export const update = {
    '/api/v1/pages/{page}': updatef70dc08d412626ca2cfacd2633a7d02c,
    '/pages/{page}': update97b52a73bf846e75e5c90f5eaa500e81,
}

/**
* @see \App\Http\Controllers\PageController::destroy
* @see app/Http/Controllers/PageController.php:263
* @route '/api/v1/pages/{page}'
*/
const destroyf70dc08d412626ca2cfacd2633a7d02c = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyf70dc08d412626ca2cfacd2633a7d02c.url(args, options),
    method: 'delete',
})

destroyf70dc08d412626ca2cfacd2633a7d02c.definition = {
    methods: ["delete"],
    url: '/api/v1/pages/{page}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PageController::destroy
* @see app/Http/Controllers/PageController.php:263
* @route '/api/v1/pages/{page}'
*/
destroyf70dc08d412626ca2cfacd2633a7d02c.url = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { page: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            page: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        page: typeof args.page === 'object'
        ? args.page.id
        : args.page,
    }

    return destroyf70dc08d412626ca2cfacd2633a7d02c.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::destroy
* @see app/Http/Controllers/PageController.php:263
* @route '/api/v1/pages/{page}'
*/
destroyf70dc08d412626ca2cfacd2633a7d02c.delete = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyf70dc08d412626ca2cfacd2633a7d02c.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\PageController::destroy
* @see app/Http/Controllers/PageController.php:263
* @route '/api/v1/pages/{page}'
*/
const destroyf70dc08d412626ca2cfacd2633a7d02cForm = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyf70dc08d412626ca2cfacd2633a7d02c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PageController::destroy
* @see app/Http/Controllers/PageController.php:263
* @route '/api/v1/pages/{page}'
*/
destroyf70dc08d412626ca2cfacd2633a7d02cForm.delete = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyf70dc08d412626ca2cfacd2633a7d02c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyf70dc08d412626ca2cfacd2633a7d02c.form = destroyf70dc08d412626ca2cfacd2633a7d02cForm
/**
* @see \App\Http\Controllers\PageController::destroy
* @see app/Http/Controllers/PageController.php:263
* @route '/pages/{page}'
*/
const destroy97b52a73bf846e75e5c90f5eaa500e81 = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy97b52a73bf846e75e5c90f5eaa500e81.url(args, options),
    method: 'delete',
})

destroy97b52a73bf846e75e5c90f5eaa500e81.definition = {
    methods: ["delete"],
    url: '/pages/{page}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PageController::destroy
* @see app/Http/Controllers/PageController.php:263
* @route '/pages/{page}'
*/
destroy97b52a73bf846e75e5c90f5eaa500e81.url = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { page: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            page: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        page: typeof args.page === 'object'
        ? args.page.id
        : args.page,
    }

    return destroy97b52a73bf846e75e5c90f5eaa500e81.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::destroy
* @see app/Http/Controllers/PageController.php:263
* @route '/pages/{page}'
*/
destroy97b52a73bf846e75e5c90f5eaa500e81.delete = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy97b52a73bf846e75e5c90f5eaa500e81.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\PageController::destroy
* @see app/Http/Controllers/PageController.php:263
* @route '/pages/{page}'
*/
const destroy97b52a73bf846e75e5c90f5eaa500e81Form = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy97b52a73bf846e75e5c90f5eaa500e81.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PageController::destroy
* @see app/Http/Controllers/PageController.php:263
* @route '/pages/{page}'
*/
destroy97b52a73bf846e75e5c90f5eaa500e81Form.delete = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy97b52a73bf846e75e5c90f5eaa500e81.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy97b52a73bf846e75e5c90f5eaa500e81.form = destroy97b52a73bf846e75e5c90f5eaa500e81Form

export const destroy = {
    '/api/v1/pages/{page}': destroyf70dc08d412626ca2cfacd2633a7d02c,
    '/pages/{page}': destroy97b52a73bf846e75e5c90f5eaa500e81,
}

/**
* @see \App\Http\Controllers\PageController::edit
* @see app/Http/Controllers/PageController.php:194
* @route '/pages/{page}/edit'
*/
export const edit = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/pages/{page}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PageController::edit
* @see app/Http/Controllers/PageController.php:194
* @route '/pages/{page}/edit'
*/
edit.url = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { page: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            page: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        page: typeof args.page === 'object'
        ? args.page.id
        : args.page,
    }

    return edit.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::edit
* @see app/Http/Controllers/PageController.php:194
* @route '/pages/{page}/edit'
*/
edit.get = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::edit
* @see app/Http/Controllers/PageController.php:194
* @route '/pages/{page}/edit'
*/
edit.head = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PageController::edit
* @see app/Http/Controllers/PageController.php:194
* @route '/pages/{page}/edit'
*/
const editForm = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::edit
* @see app/Http/Controllers/PageController.php:194
* @route '/pages/{page}/edit'
*/
editForm.get = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PageController::edit
* @see app/Http/Controllers/PageController.php:194
* @route '/pages/{page}/edit'
*/
editForm.head = (args: { page: string | number | { id: string | number } } | [page: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const PageController = { index, show, drafts, create, store, update, destroy, edit }

export default PageController