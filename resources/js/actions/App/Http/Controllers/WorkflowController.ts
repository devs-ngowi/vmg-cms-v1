import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/api/v1/workflow'
*/
const indexacc10b84d225f0581727436dda923200 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexacc10b84d225f0581727436dda923200.url(options),
    method: 'get',
})

indexacc10b84d225f0581727436dda923200.definition = {
    methods: ["get","head"],
    url: '/api/v1/workflow',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/api/v1/workflow'
*/
indexacc10b84d225f0581727436dda923200.url = (options?: RouteQueryOptions) => {




    return indexacc10b84d225f0581727436dda923200.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/api/v1/workflow'
*/
indexacc10b84d225f0581727436dda923200.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexacc10b84d225f0581727436dda923200.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/api/v1/workflow'
*/
indexacc10b84d225f0581727436dda923200.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexacc10b84d225f0581727436dda923200.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/api/v1/workflow'
*/
const indexacc10b84d225f0581727436dda923200Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexacc10b84d225f0581727436dda923200.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/api/v1/workflow'
*/
indexacc10b84d225f0581727436dda923200Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexacc10b84d225f0581727436dda923200.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/api/v1/workflow'
*/
indexacc10b84d225f0581727436dda923200Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexacc10b84d225f0581727436dda923200.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexacc10b84d225f0581727436dda923200.form = indexacc10b84d225f0581727436dda923200Form
/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/workflow'
*/
const indexbbea7b41d0a638d387dcfabac0a8b67d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexbbea7b41d0a638d387dcfabac0a8b67d.url(options),
    method: 'get',
})

indexbbea7b41d0a638d387dcfabac0a8b67d.definition = {
    methods: ["get","head"],
    url: '/workflow',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/workflow'
*/
indexbbea7b41d0a638d387dcfabac0a8b67d.url = (options?: RouteQueryOptions) => {




    return indexbbea7b41d0a638d387dcfabac0a8b67d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/workflow'
*/
indexbbea7b41d0a638d387dcfabac0a8b67d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexbbea7b41d0a638d387dcfabac0a8b67d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/workflow'
*/
indexbbea7b41d0a638d387dcfabac0a8b67d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexbbea7b41d0a638d387dcfabac0a8b67d.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/workflow'
*/
const indexbbea7b41d0a638d387dcfabac0a8b67dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexbbea7b41d0a638d387dcfabac0a8b67d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/workflow'
*/
indexbbea7b41d0a638d387dcfabac0a8b67dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexbbea7b41d0a638d387dcfabac0a8b67d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkflowController::index
* @see app/Http/Controllers/WorkflowController.php:67
* @route '/workflow'
*/
indexbbea7b41d0a638d387dcfabac0a8b67dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexbbea7b41d0a638d387dcfabac0a8b67d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexbbea7b41d0a638d387dcfabac0a8b67d.form = indexbbea7b41d0a638d387dcfabac0a8b67dForm

export const index = {
    '/api/v1/workflow': indexacc10b84d225f0581727436dda923200,
    '/workflow': indexbbea7b41d0a638d387dcfabac0a8b67d,
}


/**
* @see \App\Http\Controllers\WorkflowController::move
* @see app/Http/Controllers/WorkflowController.php:115
* @route '/api/v1/workflow/{workflow}/move'
*/
const move054532d54db4f92d82214bb80c3c9f50 = (args: { workflow: string | number | { id: string | number } } | [workflow: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: move054532d54db4f92d82214bb80c3c9f50.url(args, options),
    method: 'post',
})

move054532d54db4f92d82214bb80c3c9f50.definition = {
    methods: ["post"],
    url: '/api/v1/workflow/{workflow}/move',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\WorkflowController::move
* @see app/Http/Controllers/WorkflowController.php:115
* @route '/api/v1/workflow/{workflow}/move'
*/
move054532d54db4f92d82214bb80c3c9f50.url = (args: { workflow: string | number | { id: string | number } } | [workflow: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return move054532d54db4f92d82214bb80c3c9f50.definition.url
            .replace('{workflow}', parsedArgs.workflow.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkflowController::move
* @see app/Http/Controllers/WorkflowController.php:115
* @route '/api/v1/workflow/{workflow}/move'
*/
move054532d54db4f92d82214bb80c3c9f50.post = (args: { workflow: string | number | { id: string | number } } | [workflow: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: move054532d54db4f92d82214bb80c3c9f50.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\WorkflowController::move
* @see app/Http/Controllers/WorkflowController.php:115
* @route '/api/v1/workflow/{workflow}/move'
*/
const move054532d54db4f92d82214bb80c3c9f50Form = (args: { workflow: string | number | { id: string | number } } | [workflow: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: move054532d54db4f92d82214bb80c3c9f50.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\WorkflowController::move
* @see app/Http/Controllers/WorkflowController.php:115
* @route '/api/v1/workflow/{workflow}/move'
*/
move054532d54db4f92d82214bb80c3c9f50Form.post = (args: { workflow: string | number | { id: string | number } } | [workflow: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: move054532d54db4f92d82214bb80c3c9f50.url(args, options),
    method: 'post',
})

move054532d54db4f92d82214bb80c3c9f50.form = move054532d54db4f92d82214bb80c3c9f50Form
/**
* @see \App\Http\Controllers\WorkflowController::move
* @see app/Http/Controllers/WorkflowController.php:115
* @route '/workflow/{workflow}/move'
*/
const movee2d3e8e58163d6313e7d168bc1bc9a8b = (args: { workflow: string | number | { id: string | number } } | [workflow: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: movee2d3e8e58163d6313e7d168bc1bc9a8b.url(args, options),
    method: 'patch',
})

movee2d3e8e58163d6313e7d168bc1bc9a8b.definition = {
    methods: ["patch"],
    url: '/workflow/{workflow}/move',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\WorkflowController::move
* @see app/Http/Controllers/WorkflowController.php:115
* @route '/workflow/{workflow}/move'
*/
movee2d3e8e58163d6313e7d168bc1bc9a8b.url = (args: { workflow: string | number | { id: string | number } } | [workflow: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return movee2d3e8e58163d6313e7d168bc1bc9a8b.definition.url
            .replace('{workflow}', parsedArgs.workflow.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkflowController::move
* @see app/Http/Controllers/WorkflowController.php:115
* @route '/workflow/{workflow}/move'
*/
movee2d3e8e58163d6313e7d168bc1bc9a8b.patch = (args: { workflow: string | number | { id: string | number } } | [workflow: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: movee2d3e8e58163d6313e7d168bc1bc9a8b.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\WorkflowController::move
* @see app/Http/Controllers/WorkflowController.php:115
* @route '/workflow/{workflow}/move'
*/
const movee2d3e8e58163d6313e7d168bc1bc9a8bForm = (args: { workflow: string | number | { id: string | number } } | [workflow: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: movee2d3e8e58163d6313e7d168bc1bc9a8b.url(args, {
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
movee2d3e8e58163d6313e7d168bc1bc9a8bForm.patch = (args: { workflow: string | number | { id: string | number } } | [workflow: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: movee2d3e8e58163d6313e7d168bc1bc9a8b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

movee2d3e8e58163d6313e7d168bc1bc9a8b.form = movee2d3e8e58163d6313e7d168bc1bc9a8bForm

export const move = {
    '/api/v1/workflow/{workflow}/move': move054532d54db4f92d82214bb80c3c9f50,
    '/workflow/{workflow}/move': movee2d3e8e58163d6313e7d168bc1bc9a8b,
}


/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/api/v1/workflow/history/{contentType}/{contentId}'
*/
const history7036602c6664a22493e27cd6d788c728 = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history7036602c6664a22493e27cd6d788c728.url(args, options),
    method: 'get',
})

history7036602c6664a22493e27cd6d788c728.definition = {
    methods: ["get","head"],
    url: '/api/v1/workflow/history/{contentType}/{contentId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/api/v1/workflow/history/{contentType}/{contentId}'
*/
history7036602c6664a22493e27cd6d788c728.url = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions) => {

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

    return history7036602c6664a22493e27cd6d788c728.definition.url
            .replace('{contentType}', parsedArgs.contentType.toString())
            .replace('{contentId}', parsedArgs.contentId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/api/v1/workflow/history/{contentType}/{contentId}'
*/
history7036602c6664a22493e27cd6d788c728.get = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history7036602c6664a22493e27cd6d788c728.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/api/v1/workflow/history/{contentType}/{contentId}'
*/
history7036602c6664a22493e27cd6d788c728.head = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: history7036602c6664a22493e27cd6d788c728.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/api/v1/workflow/history/{contentType}/{contentId}'
*/
const history7036602c6664a22493e27cd6d788c728Form = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: history7036602c6664a22493e27cd6d788c728.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/api/v1/workflow/history/{contentType}/{contentId}'
*/
history7036602c6664a22493e27cd6d788c728Form.get = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: history7036602c6664a22493e27cd6d788c728.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/api/v1/workflow/history/{contentType}/{contentId}'
*/
history7036602c6664a22493e27cd6d788c728Form.head = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: history7036602c6664a22493e27cd6d788c728.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

history7036602c6664a22493e27cd6d788c728.form = history7036602c6664a22493e27cd6d788c728Form
/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/workflow/history/{contentType}/{contentId}'
*/
const historya5d563bfeabac48291be9cb910e3d84e = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: historya5d563bfeabac48291be9cb910e3d84e.url(args, options),
    method: 'get',
})

historya5d563bfeabac48291be9cb910e3d84e.definition = {
    methods: ["get","head"],
    url: '/workflow/history/{contentType}/{contentId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/workflow/history/{contentType}/{contentId}'
*/
historya5d563bfeabac48291be9cb910e3d84e.url = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions) => {

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

    return historya5d563bfeabac48291be9cb910e3d84e.definition.url
            .replace('{contentType}', parsedArgs.contentType.toString())
            .replace('{contentId}', parsedArgs.contentId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/workflow/history/{contentType}/{contentId}'
*/
historya5d563bfeabac48291be9cb910e3d84e.get = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: historya5d563bfeabac48291be9cb910e3d84e.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/workflow/history/{contentType}/{contentId}'
*/
historya5d563bfeabac48291be9cb910e3d84e.head = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: historya5d563bfeabac48291be9cb910e3d84e.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/workflow/history/{contentType}/{contentId}'
*/
const historya5d563bfeabac48291be9cb910e3d84eForm = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: historya5d563bfeabac48291be9cb910e3d84e.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/workflow/history/{contentType}/{contentId}'
*/
historya5d563bfeabac48291be9cb910e3d84eForm.get = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: historya5d563bfeabac48291be9cb910e3d84e.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkflowController::history
* @see app/Http/Controllers/WorkflowController.php:150
* @route '/workflow/history/{contentType}/{contentId}'
*/
historya5d563bfeabac48291be9cb910e3d84eForm.head = (args: { contentType: string | number, contentId: string | number } | [contentType: string | number, contentId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: historya5d563bfeabac48291be9cb910e3d84e.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

historya5d563bfeabac48291be9cb910e3d84e.form = historya5d563bfeabac48291be9cb910e3d84eForm

export const history = {
    '/api/v1/workflow/history/{contentType}/{contentId}': history7036602c6664a22493e27cd6d788c728,
    '/workflow/history/{contentType}/{contentId}': historya5d563bfeabac48291be9cb910e3d84e,
}


const WorkflowController = { index, move, history }

export default WorkflowController