import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/workflow'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/workflow',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/workflow'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/workflow'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/workflow'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/workflow'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/workflow'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/workflow'
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
* @see \App\Http\Controllers\WorkflowController::move
* @see app/Http/Controllers/WorkflowController.php:115
* @route '/workflow/{workflow}/move'
*/
export const move = (args: { workflow: string | number | { id: string | number } } | [workflow: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: move.url(args, options),
    method: 'patch',
})

move.definition = {
    methods: ["patch"],
    url: '/workflow/{workflow}/move',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\WorkflowController::move
* @see app/Http/Controllers/WorkflowController.php:115
* @route '/workflow/{workflow}/move'
*/
move.url = (args: { workflow: string | number | { id: string | number } } | [workflow: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { workflow: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { workflow: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            workflow: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        workflow: typeof args.workflow === 'object'
        ? args.workflow.id
        : args.workflow,
    }

    return move.definition.url
            .replace('{workflow}', parsedArgs.workflow.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkflowController::move
* @see app/Http/Controllers/WorkflowController.php:115
* @route '/workflow/{workflow}/move'
*/
move.patch = (args: { workflow: string | number | { id: string | number } } | [workflow: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: move.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\WorkflowController::move
* @see app/Http/Controllers/WorkflowController.php:115
* @route '/workflow/{workflow}/move'
*/
const moveForm = (args: { workflow: string | number | { id: string | number } } | [workflow: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: move.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\WorkflowController::move
* @see app/Http/Controllers/WorkflowController.php:115
* @route '/workflow/{workflow}/move'
*/
moveForm.patch = (args: { workflow: string | number | { id: string | number } } | [workflow: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: move.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

move.form = moveForm

/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/workflow/history/{contentType}/{contentId}'
*/
export const history = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(args, options),
    method: 'get',
})

history.definition = {
    methods: ["get","head"],
    url: '/workflow/history/{contentType}/{contentId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/workflow/history/{contentType}/{contentId}'
*/
history.url = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            contentType: args[0],
            contentId: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        contentType: args.contentType,
        contentId: args.contentId,
    }

    return history.definition.url
            .replace('{contentType}', parsedArgs.contentType.toString())
            .replace('{contentId}', parsedArgs.contentId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/workflow/history/{contentType}/{contentId}'
*/
history.get = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/workflow/history/{contentType}/{contentId}'
*/
history.head = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: history.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/workflow/history/{contentType}/{contentId}'
*/
const historyForm = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: history.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/workflow/history/{contentType}/{contentId}'
*/
historyForm.get = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: history.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/workflow/history/{contentType}/{contentId}'
*/
historyForm.head = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: history.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

history.form = historyForm

const workflow = {
    index: Object.assign(index, index),
    move: Object.assign(move, move),
    history: Object.assign(history, history),
}

export default workflow