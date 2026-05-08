import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see routes/web.php:226
* @route '/analytics/page-views'
*/
export const pageViews = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pageViews.url(options),
    method: 'get',
})

pageViews.definition = {
    methods: ["get","head"],
    url: '/analytics/page-views',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:226
* @route '/analytics/page-views'
*/
pageViews.url = (options?: RouteQueryOptions) => {




    return pageViews.definition.url + queryParams(options)
}

/**
* @see routes/web.php:226
* @route '/analytics/page-views'
*/
pageViews.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pageViews.url(options),
    method: 'get',
})

/**
* @see routes/web.php:226
* @route '/analytics/page-views'
*/
pageViews.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pageViews.url(options),
    method: 'head',
})

/**
* @see routes/web.php:226
* @route '/analytics/page-views'
*/
const pageViewsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pageViews.url(options),
    method: 'get',
})

/**
* @see routes/web.php:226
* @route '/analytics/page-views'
*/
pageViewsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pageViews.url(options),
    method: 'get',
})

/**
* @see routes/web.php:226
* @route '/analytics/page-views'
*/
pageViewsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pageViews.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

pageViews.form = pageViewsForm

/**
* @see routes/web.php:227
* @route '/analytics/audit-log'
*/
export const auditLog = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: auditLog.url(options),
    method: 'get',
})

auditLog.definition = {
    methods: ["get","head"],
    url: '/analytics/audit-log',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:227
* @route '/analytics/audit-log'
*/
auditLog.url = (options?: RouteQueryOptions) => {




    return auditLog.definition.url + queryParams(options)
}

/**
* @see routes/web.php:227
* @route '/analytics/audit-log'
*/
auditLog.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: auditLog.url(options),
    method: 'get',
})

/**
* @see routes/web.php:227
* @route '/analytics/audit-log'
*/
auditLog.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: auditLog.url(options),
    method: 'head',
})

/**
* @see routes/web.php:227
* @route '/analytics/audit-log'
*/
const auditLogForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: auditLog.url(options),
    method: 'get',
})

/**
* @see routes/web.php:227
* @route '/analytics/audit-log'
*/
auditLogForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: auditLog.url(options),
    method: 'get',
})

/**
* @see routes/web.php:227
* @route '/analytics/audit-log'
*/
auditLogForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: auditLog.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

auditLog.form = auditLogForm



const analytics = {
    pageViews: Object.assign(pageViews, pageViews),
    auditLog: Object.assign(auditLog, auditLog),
}

export default analytics