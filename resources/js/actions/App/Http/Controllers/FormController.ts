import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/api/v1/forms'
*/
const index9e06ca2503b8737acfe636a6f7e6c789 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index9e06ca2503b8737acfe636a6f7e6c789.url(options),
    method: 'get',
})

index9e06ca2503b8737acfe636a6f7e6c789.definition = {
    methods: ["get","head"],
    url: '/api/v1/forms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/api/v1/forms'
*/
index9e06ca2503b8737acfe636a6f7e6c789.url = (options?: RouteQueryOptions) => {
    return index9e06ca2503b8737acfe636a6f7e6c789.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/api/v1/forms'
*/
index9e06ca2503b8737acfe636a6f7e6c789.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index9e06ca2503b8737acfe636a6f7e6c789.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/api/v1/forms'
*/
index9e06ca2503b8737acfe636a6f7e6c789.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index9e06ca2503b8737acfe636a6f7e6c789.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/api/v1/forms'
*/
const index9e06ca2503b8737acfe636a6f7e6c789Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index9e06ca2503b8737acfe636a6f7e6c789.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/api/v1/forms'
*/
index9e06ca2503b8737acfe636a6f7e6c789Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index9e06ca2503b8737acfe636a6f7e6c789.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/api/v1/forms'
*/
index9e06ca2503b8737acfe636a6f7e6c789Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index9e06ca2503b8737acfe636a6f7e6c789.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index9e06ca2503b8737acfe636a6f7e6c789.form = index9e06ca2503b8737acfe636a6f7e6c789Form
/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/forms'
*/
const index118516b29870aea4e0bf4a5af2a9ec26 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index118516b29870aea4e0bf4a5af2a9ec26.url(options),
    method: 'get',
})

index118516b29870aea4e0bf4a5af2a9ec26.definition = {
    methods: ["get","head"],
    url: '/forms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/forms'
*/
index118516b29870aea4e0bf4a5af2a9ec26.url = (options?: RouteQueryOptions) => {
    return index118516b29870aea4e0bf4a5af2a9ec26.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/forms'
*/
index118516b29870aea4e0bf4a5af2a9ec26.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index118516b29870aea4e0bf4a5af2a9ec26.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/forms'
*/
index118516b29870aea4e0bf4a5af2a9ec26.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index118516b29870aea4e0bf4a5af2a9ec26.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/forms'
*/
const index118516b29870aea4e0bf4a5af2a9ec26Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index118516b29870aea4e0bf4a5af2a9ec26.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/forms'
*/
index118516b29870aea4e0bf4a5af2a9ec26Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index118516b29870aea4e0bf4a5af2a9ec26.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::index
* @see app/Http/Controllers/FormController.php:110
* @route '/forms'
*/
index118516b29870aea4e0bf4a5af2a9ec26Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index118516b29870aea4e0bf4a5af2a9ec26.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index118516b29870aea4e0bf4a5af2a9ec26.form = index118516b29870aea4e0bf4a5af2a9ec26Form

export const index = {
    '/api/v1/forms': index9e06ca2503b8737acfe636a6f7e6c789,
    '/forms': index118516b29870aea4e0bf4a5af2a9ec26,
}

/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/api/v1/forms/{form}'
*/
const edit9d8d845d6f7c605df85b10b742a3fa54 = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit9d8d845d6f7c605df85b10b742a3fa54.url(args, options),
    method: 'get',
})

edit9d8d845d6f7c605df85b10b742a3fa54.definition = {
    methods: ["get","head"],
    url: '/api/v1/forms/{form}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/api/v1/forms/{form}'
*/
edit9d8d845d6f7c605df85b10b742a3fa54.url = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { form: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { form: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            form: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        form: typeof args.form === 'object'
        ? args.form.id
        : args.form,
    }

    return edit9d8d845d6f7c605df85b10b742a3fa54.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/api/v1/forms/{form}'
*/
edit9d8d845d6f7c605df85b10b742a3fa54.get = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit9d8d845d6f7c605df85b10b742a3fa54.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/api/v1/forms/{form}'
*/
edit9d8d845d6f7c605df85b10b742a3fa54.head = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit9d8d845d6f7c605df85b10b742a3fa54.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/api/v1/forms/{form}'
*/
const edit9d8d845d6f7c605df85b10b742a3fa54Form = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit9d8d845d6f7c605df85b10b742a3fa54.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/api/v1/forms/{form}'
*/
edit9d8d845d6f7c605df85b10b742a3fa54Form.get = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit9d8d845d6f7c605df85b10b742a3fa54.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/api/v1/forms/{form}'
*/
edit9d8d845d6f7c605df85b10b742a3fa54Form.head = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit9d8d845d6f7c605df85b10b742a3fa54.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit9d8d845d6f7c605df85b10b742a3fa54.form = edit9d8d845d6f7c605df85b10b742a3fa54Form
/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/forms/{form}/edit'
*/
const edit504ecd26906a3a8333b7e56f4cd73bb5 = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit504ecd26906a3a8333b7e56f4cd73bb5.url(args, options),
    method: 'get',
})

edit504ecd26906a3a8333b7e56f4cd73bb5.definition = {
    methods: ["get","head"],
    url: '/forms/{form}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/forms/{form}/edit'
*/
edit504ecd26906a3a8333b7e56f4cd73bb5.url = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { form: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { form: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            form: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        form: typeof args.form === 'object'
        ? args.form.id
        : args.form,
    }

    return edit504ecd26906a3a8333b7e56f4cd73bb5.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/forms/{form}/edit'
*/
edit504ecd26906a3a8333b7e56f4cd73bb5.get = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit504ecd26906a3a8333b7e56f4cd73bb5.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/forms/{form}/edit'
*/
edit504ecd26906a3a8333b7e56f4cd73bb5.head = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit504ecd26906a3a8333b7e56f4cd73bb5.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/forms/{form}/edit'
*/
const edit504ecd26906a3a8333b7e56f4cd73bb5Form = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit504ecd26906a3a8333b7e56f4cd73bb5.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/forms/{form}/edit'
*/
edit504ecd26906a3a8333b7e56f4cd73bb5Form.get = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit504ecd26906a3a8333b7e56f4cd73bb5.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::edit
* @see app/Http/Controllers/FormController.php:180
* @route '/forms/{form}/edit'
*/
edit504ecd26906a3a8333b7e56f4cd73bb5Form.head = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit504ecd26906a3a8333b7e56f4cd73bb5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit504ecd26906a3a8333b7e56f4cd73bb5.form = edit504ecd26906a3a8333b7e56f4cd73bb5Form

export const edit = {
    '/api/v1/forms/{form}': edit9d8d845d6f7c605df85b10b742a3fa54,
    '/forms/{form}/edit': edit504ecd26906a3a8333b7e56f4cd73bb5,
}

/**
* @see \App\Http\Controllers\FormController::submit
* @see app/Http/Controllers/FormController.php:264
* @route '/api/v1/forms/{form}/submit'
*/
export const submit = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/api/v1/forms/{form}/submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FormController::submit
* @see app/Http/Controllers/FormController.php:264
* @route '/api/v1/forms/{form}/submit'
*/
submit.url = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { form: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { form: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            form: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        form: typeof args.form === 'object'
        ? args.form.id
        : args.form,
    }

    return submit.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::submit
* @see app/Http/Controllers/FormController.php:264
* @route '/api/v1/forms/{form}/submit'
*/
submit.post = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::submit
* @see app/Http/Controllers/FormController.php:264
* @route '/api/v1/forms/{form}/submit'
*/
const submitForm = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::submit
* @see app/Http/Controllers/FormController.php:264
* @route '/api/v1/forms/{form}/submit'
*/
submitForm.post = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(args, options),
    method: 'post',
})

submit.form = submitForm

/**
* @see \App\Http\Controllers\FormController::store
* @see app/Http/Controllers/FormController.php:153
* @route '/api/v1/forms'
*/
const store9e06ca2503b8737acfe636a6f7e6c789 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store9e06ca2503b8737acfe636a6f7e6c789.url(options),
    method: 'post',
})

store9e06ca2503b8737acfe636a6f7e6c789.definition = {
    methods: ["post"],
    url: '/api/v1/forms',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FormController::store
* @see app/Http/Controllers/FormController.php:153
* @route '/api/v1/forms'
*/
store9e06ca2503b8737acfe636a6f7e6c789.url = (options?: RouteQueryOptions) => {
    return store9e06ca2503b8737acfe636a6f7e6c789.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::store
* @see app/Http/Controllers/FormController.php:153
* @route '/api/v1/forms'
*/
store9e06ca2503b8737acfe636a6f7e6c789.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store9e06ca2503b8737acfe636a6f7e6c789.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::store
* @see app/Http/Controllers/FormController.php:153
* @route '/api/v1/forms'
*/
const store9e06ca2503b8737acfe636a6f7e6c789Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store9e06ca2503b8737acfe636a6f7e6c789.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::store
* @see app/Http/Controllers/FormController.php:153
* @route '/api/v1/forms'
*/
store9e06ca2503b8737acfe636a6f7e6c789Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store9e06ca2503b8737acfe636a6f7e6c789.url(options),
    method: 'post',
})

store9e06ca2503b8737acfe636a6f7e6c789.form = store9e06ca2503b8737acfe636a6f7e6c789Form
/**
* @see \App\Http\Controllers\FormController::store
* @see app/Http/Controllers/FormController.php:153
* @route '/forms'
*/
const store118516b29870aea4e0bf4a5af2a9ec26 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store118516b29870aea4e0bf4a5af2a9ec26.url(options),
    method: 'post',
})

store118516b29870aea4e0bf4a5af2a9ec26.definition = {
    methods: ["post"],
    url: '/forms',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FormController::store
* @see app/Http/Controllers/FormController.php:153
* @route '/forms'
*/
store118516b29870aea4e0bf4a5af2a9ec26.url = (options?: RouteQueryOptions) => {
    return store118516b29870aea4e0bf4a5af2a9ec26.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::store
* @see app/Http/Controllers/FormController.php:153
* @route '/forms'
*/
store118516b29870aea4e0bf4a5af2a9ec26.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store118516b29870aea4e0bf4a5af2a9ec26.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::store
* @see app/Http/Controllers/FormController.php:153
* @route '/forms'
*/
const store118516b29870aea4e0bf4a5af2a9ec26Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store118516b29870aea4e0bf4a5af2a9ec26.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::store
* @see app/Http/Controllers/FormController.php:153
* @route '/forms'
*/
store118516b29870aea4e0bf4a5af2a9ec26Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store118516b29870aea4e0bf4a5af2a9ec26.url(options),
    method: 'post',
})

store118516b29870aea4e0bf4a5af2a9ec26.form = store118516b29870aea4e0bf4a5af2a9ec26Form

export const store = {
    '/api/v1/forms': store9e06ca2503b8737acfe636a6f7e6c789,
    '/forms': store118516b29870aea4e0bf4a5af2a9ec26,
}

/**
* @see \App\Http\Controllers\FormController::update
* @see app/Http/Controllers/FormController.php:200
* @route '/api/v1/forms/{form}'
*/
const update9d8d845d6f7c605df85b10b742a3fa54 = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update9d8d845d6f7c605df85b10b742a3fa54.url(args, options),
    method: 'put',
})

update9d8d845d6f7c605df85b10b742a3fa54.definition = {
    methods: ["put"],
    url: '/api/v1/forms/{form}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\FormController::update
* @see app/Http/Controllers/FormController.php:200
* @route '/api/v1/forms/{form}'
*/
update9d8d845d6f7c605df85b10b742a3fa54.url = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { form: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { form: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            form: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        form: typeof args.form === 'object'
        ? args.form.id
        : args.form,
    }

    return update9d8d845d6f7c605df85b10b742a3fa54.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::update
* @see app/Http/Controllers/FormController.php:200
* @route '/api/v1/forms/{form}'
*/
update9d8d845d6f7c605df85b10b742a3fa54.put = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update9d8d845d6f7c605df85b10b742a3fa54.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\FormController::update
* @see app/Http/Controllers/FormController.php:200
* @route '/api/v1/forms/{form}'
*/
const update9d8d845d6f7c605df85b10b742a3fa54Form = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update9d8d845d6f7c605df85b10b742a3fa54.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::update
* @see app/Http/Controllers/FormController.php:200
* @route '/api/v1/forms/{form}'
*/
update9d8d845d6f7c605df85b10b742a3fa54Form.put = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update9d8d845d6f7c605df85b10b742a3fa54.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update9d8d845d6f7c605df85b10b742a3fa54.form = update9d8d845d6f7c605df85b10b742a3fa54Form
/**
* @see \App\Http\Controllers\FormController::update
* @see app/Http/Controllers/FormController.php:200
* @route '/forms/{form}'
*/
const updatea5831ab45545e4e8c292e9f1153c780c = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatea5831ab45545e4e8c292e9f1153c780c.url(args, options),
    method: 'patch',
})

updatea5831ab45545e4e8c292e9f1153c780c.definition = {
    methods: ["patch"],
    url: '/forms/{form}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\FormController::update
* @see app/Http/Controllers/FormController.php:200
* @route '/forms/{form}'
*/
updatea5831ab45545e4e8c292e9f1153c780c.url = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { form: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { form: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            form: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        form: typeof args.form === 'object'
        ? args.form.id
        : args.form,
    }

    return updatea5831ab45545e4e8c292e9f1153c780c.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::update
* @see app/Http/Controllers/FormController.php:200
* @route '/forms/{form}'
*/
updatea5831ab45545e4e8c292e9f1153c780c.patch = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatea5831ab45545e4e8c292e9f1153c780c.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\FormController::update
* @see app/Http/Controllers/FormController.php:200
* @route '/forms/{form}'
*/
const updatea5831ab45545e4e8c292e9f1153c780cForm = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatea5831ab45545e4e8c292e9f1153c780c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::update
* @see app/Http/Controllers/FormController.php:200
* @route '/forms/{form}'
*/
updatea5831ab45545e4e8c292e9f1153c780cForm.patch = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatea5831ab45545e4e8c292e9f1153c780c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatea5831ab45545e4e8c292e9f1153c780c.form = updatea5831ab45545e4e8c292e9f1153c780cForm

export const update = {
    '/api/v1/forms/{form}': update9d8d845d6f7c605df85b10b742a3fa54,
    '/forms/{form}': updatea5831ab45545e4e8c292e9f1153c780c,
}

/**
* @see \App\Http\Controllers\FormController::destroy
* @see app/Http/Controllers/FormController.php:244
* @route '/api/v1/forms/{form}'
*/
const destroy9d8d845d6f7c605df85b10b742a3fa54 = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy9d8d845d6f7c605df85b10b742a3fa54.url(args, options),
    method: 'delete',
})

destroy9d8d845d6f7c605df85b10b742a3fa54.definition = {
    methods: ["delete"],
    url: '/api/v1/forms/{form}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\FormController::destroy
* @see app/Http/Controllers/FormController.php:244
* @route '/api/v1/forms/{form}'
*/
destroy9d8d845d6f7c605df85b10b742a3fa54.url = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { form: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { form: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            form: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        form: typeof args.form === 'object'
        ? args.form.id
        : args.form,
    }

    return destroy9d8d845d6f7c605df85b10b742a3fa54.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::destroy
* @see app/Http/Controllers/FormController.php:244
* @route '/api/v1/forms/{form}'
*/
destroy9d8d845d6f7c605df85b10b742a3fa54.delete = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy9d8d845d6f7c605df85b10b742a3fa54.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\FormController::destroy
* @see app/Http/Controllers/FormController.php:244
* @route '/api/v1/forms/{form}'
*/
const destroy9d8d845d6f7c605df85b10b742a3fa54Form = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy9d8d845d6f7c605df85b10b742a3fa54.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::destroy
* @see app/Http/Controllers/FormController.php:244
* @route '/api/v1/forms/{form}'
*/
destroy9d8d845d6f7c605df85b10b742a3fa54Form.delete = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy9d8d845d6f7c605df85b10b742a3fa54.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy9d8d845d6f7c605df85b10b742a3fa54.form = destroy9d8d845d6f7c605df85b10b742a3fa54Form
/**
* @see \App\Http\Controllers\FormController::destroy
* @see app/Http/Controllers/FormController.php:244
* @route '/forms/{form}'
*/
const destroya5831ab45545e4e8c292e9f1153c780c = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroya5831ab45545e4e8c292e9f1153c780c.url(args, options),
    method: 'delete',
})

destroya5831ab45545e4e8c292e9f1153c780c.definition = {
    methods: ["delete"],
    url: '/forms/{form}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\FormController::destroy
* @see app/Http/Controllers/FormController.php:244
* @route '/forms/{form}'
*/
destroya5831ab45545e4e8c292e9f1153c780c.url = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { form: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { form: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            form: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        form: typeof args.form === 'object'
        ? args.form.id
        : args.form,
    }

    return destroya5831ab45545e4e8c292e9f1153c780c.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::destroy
* @see app/Http/Controllers/FormController.php:244
* @route '/forms/{form}'
*/
destroya5831ab45545e4e8c292e9f1153c780c.delete = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroya5831ab45545e4e8c292e9f1153c780c.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\FormController::destroy
* @see app/Http/Controllers/FormController.php:244
* @route '/forms/{form}'
*/
const destroya5831ab45545e4e8c292e9f1153c780cForm = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroya5831ab45545e4e8c292e9f1153c780c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::destroy
* @see app/Http/Controllers/FormController.php:244
* @route '/forms/{form}'
*/
destroya5831ab45545e4e8c292e9f1153c780cForm.delete = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroya5831ab45545e4e8c292e9f1153c780c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroya5831ab45545e4e8c292e9f1153c780c.form = destroya5831ab45545e4e8c292e9f1153c780cForm

export const destroy = {
    '/api/v1/forms/{form}': destroy9d8d845d6f7c605df85b10b742a3fa54,
    '/forms/{form}': destroya5831ab45545e4e8c292e9f1153c780c,
}

/**
* @see \App\Http\Controllers\FormController::toggle
* @see app/Http/Controllers/FormController.php:227
* @route '/api/v1/forms/{form}/toggle'
*/
const toggleb67630f7b4f685b6b1a485d8fba486f7 = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleb67630f7b4f685b6b1a485d8fba486f7.url(args, options),
    method: 'patch',
})

toggleb67630f7b4f685b6b1a485d8fba486f7.definition = {
    methods: ["patch"],
    url: '/api/v1/forms/{form}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\FormController::toggle
* @see app/Http/Controllers/FormController.php:227
* @route '/api/v1/forms/{form}/toggle'
*/
toggleb67630f7b4f685b6b1a485d8fba486f7.url = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { form: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { form: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            form: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        form: typeof args.form === 'object'
        ? args.form.id
        : args.form,
    }

    return toggleb67630f7b4f685b6b1a485d8fba486f7.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::toggle
* @see app/Http/Controllers/FormController.php:227
* @route '/api/v1/forms/{form}/toggle'
*/
toggleb67630f7b4f685b6b1a485d8fba486f7.patch = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleb67630f7b4f685b6b1a485d8fba486f7.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\FormController::toggle
* @see app/Http/Controllers/FormController.php:227
* @route '/api/v1/forms/{form}/toggle'
*/
const toggleb67630f7b4f685b6b1a485d8fba486f7Form = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleb67630f7b4f685b6b1a485d8fba486f7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::toggle
* @see app/Http/Controllers/FormController.php:227
* @route '/api/v1/forms/{form}/toggle'
*/
toggleb67630f7b4f685b6b1a485d8fba486f7Form.patch = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleb67630f7b4f685b6b1a485d8fba486f7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleb67630f7b4f685b6b1a485d8fba486f7.form = toggleb67630f7b4f685b6b1a485d8fba486f7Form
/**
* @see \App\Http\Controllers\FormController::toggle
* @see app/Http/Controllers/FormController.php:227
* @route '/forms/{form}/toggle'
*/
const toggle5d6e5a3d37b9182bbbf467cd65bb662d = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle5d6e5a3d37b9182bbbf467cd65bb662d.url(args, options),
    method: 'patch',
})

toggle5d6e5a3d37b9182bbbf467cd65bb662d.definition = {
    methods: ["patch"],
    url: '/forms/{form}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\FormController::toggle
* @see app/Http/Controllers/FormController.php:227
* @route '/forms/{form}/toggle'
*/
toggle5d6e5a3d37b9182bbbf467cd65bb662d.url = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { form: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { form: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            form: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        form: typeof args.form === 'object'
        ? args.form.id
        : args.form,
    }

    return toggle5d6e5a3d37b9182bbbf467cd65bb662d.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::toggle
* @see app/Http/Controllers/FormController.php:227
* @route '/forms/{form}/toggle'
*/
toggle5d6e5a3d37b9182bbbf467cd65bb662d.patch = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle5d6e5a3d37b9182bbbf467cd65bb662d.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\FormController::toggle
* @see app/Http/Controllers/FormController.php:227
* @route '/forms/{form}/toggle'
*/
const toggle5d6e5a3d37b9182bbbf467cd65bb662dForm = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle5d6e5a3d37b9182bbbf467cd65bb662d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::toggle
* @see app/Http/Controllers/FormController.php:227
* @route '/forms/{form}/toggle'
*/
toggle5d6e5a3d37b9182bbbf467cd65bb662dForm.patch = (args: { form: string | number | { id: string | number } } | [form: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle5d6e5a3d37b9182bbbf467cd65bb662d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggle5d6e5a3d37b9182bbbf467cd65bb662d.form = toggle5d6e5a3d37b9182bbbf467cd65bb662dForm

export const toggle = {
    '/api/v1/forms/{form}/toggle': toggleb67630f7b4f685b6b1a485d8fba486f7,
    '/forms/{form}/toggle': toggle5d6e5a3d37b9182bbbf467cd65bb662d,
}

/**
* @see \App\Http\Controllers\FormController::submissions
* @see app/Http/Controllers/FormController.php:329
* @route '/api/v1/submissions'
*/
const submissions767545d5453043484b3dee1a51e98b5c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: submissions767545d5453043484b3dee1a51e98b5c.url(options),
    method: 'get',
})

submissions767545d5453043484b3dee1a51e98b5c.definition = {
    methods: ["get","head"],
    url: '/api/v1/submissions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FormController::submissions
* @see app/Http/Controllers/FormController.php:329
* @route '/api/v1/submissions'
*/
submissions767545d5453043484b3dee1a51e98b5c.url = (options?: RouteQueryOptions) => {
    return submissions767545d5453043484b3dee1a51e98b5c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::submissions
* @see app/Http/Controllers/FormController.php:329
* @route '/api/v1/submissions'
*/
submissions767545d5453043484b3dee1a51e98b5c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: submissions767545d5453043484b3dee1a51e98b5c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::submissions
* @see app/Http/Controllers/FormController.php:329
* @route '/api/v1/submissions'
*/
submissions767545d5453043484b3dee1a51e98b5c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: submissions767545d5453043484b3dee1a51e98b5c.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FormController::submissions
* @see app/Http/Controllers/FormController.php:329
* @route '/api/v1/submissions'
*/
const submissions767545d5453043484b3dee1a51e98b5cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: submissions767545d5453043484b3dee1a51e98b5c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::submissions
* @see app/Http/Controllers/FormController.php:329
* @route '/api/v1/submissions'
*/
submissions767545d5453043484b3dee1a51e98b5cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: submissions767545d5453043484b3dee1a51e98b5c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::submissions
* @see app/Http/Controllers/FormController.php:329
* @route '/api/v1/submissions'
*/
submissions767545d5453043484b3dee1a51e98b5cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: submissions767545d5453043484b3dee1a51e98b5c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

submissions767545d5453043484b3dee1a51e98b5c.form = submissions767545d5453043484b3dee1a51e98b5cForm
/**
* @see \App\Http\Controllers\FormController::submissions
* @see app/Http/Controllers/FormController.php:329
* @route '/submissions'
*/
const submissionsbfd64b9c54577531a4b07645f6439881 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: submissionsbfd64b9c54577531a4b07645f6439881.url(options),
    method: 'get',
})

submissionsbfd64b9c54577531a4b07645f6439881.definition = {
    methods: ["get","head"],
    url: '/submissions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FormController::submissions
* @see app/Http/Controllers/FormController.php:329
* @route '/submissions'
*/
submissionsbfd64b9c54577531a4b07645f6439881.url = (options?: RouteQueryOptions) => {
    return submissionsbfd64b9c54577531a4b07645f6439881.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::submissions
* @see app/Http/Controllers/FormController.php:329
* @route '/submissions'
*/
submissionsbfd64b9c54577531a4b07645f6439881.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: submissionsbfd64b9c54577531a4b07645f6439881.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::submissions
* @see app/Http/Controllers/FormController.php:329
* @route '/submissions'
*/
submissionsbfd64b9c54577531a4b07645f6439881.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: submissionsbfd64b9c54577531a4b07645f6439881.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FormController::submissions
* @see app/Http/Controllers/FormController.php:329
* @route '/submissions'
*/
const submissionsbfd64b9c54577531a4b07645f6439881Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: submissionsbfd64b9c54577531a4b07645f6439881.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::submissions
* @see app/Http/Controllers/FormController.php:329
* @route '/submissions'
*/
submissionsbfd64b9c54577531a4b07645f6439881Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: submissionsbfd64b9c54577531a4b07645f6439881.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::submissions
* @see app/Http/Controllers/FormController.php:329
* @route '/submissions'
*/
submissionsbfd64b9c54577531a4b07645f6439881Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: submissionsbfd64b9c54577531a4b07645f6439881.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

submissionsbfd64b9c54577531a4b07645f6439881.form = submissionsbfd64b9c54577531a4b07645f6439881Form

export const submissions = {
    '/api/v1/submissions': submissions767545d5453043484b3dee1a51e98b5c,
    '/submissions': submissionsbfd64b9c54577531a4b07645f6439881,
}

/**
* @see \App\Http\Controllers\FormController::showSubmission
* @see app/Http/Controllers/FormController.php:354
* @route '/api/v1/submissions/{submission}'
*/
const showSubmission7628ee3f74163b57a952f3506034fb4f = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showSubmission7628ee3f74163b57a952f3506034fb4f.url(args, options),
    method: 'get',
})

showSubmission7628ee3f74163b57a952f3506034fb4f.definition = {
    methods: ["get","head"],
    url: '/api/v1/submissions/{submission}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FormController::showSubmission
* @see app/Http/Controllers/FormController.php:354
* @route '/api/v1/submissions/{submission}'
*/
showSubmission7628ee3f74163b57a952f3506034fb4f.url = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { submission: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { submission: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            submission: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        submission: typeof args.submission === 'object'
        ? args.submission.id
        : args.submission,
    }

    return showSubmission7628ee3f74163b57a952f3506034fb4f.definition.url
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::showSubmission
* @see app/Http/Controllers/FormController.php:354
* @route '/api/v1/submissions/{submission}'
*/
showSubmission7628ee3f74163b57a952f3506034fb4f.get = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showSubmission7628ee3f74163b57a952f3506034fb4f.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::showSubmission
* @see app/Http/Controllers/FormController.php:354
* @route '/api/v1/submissions/{submission}'
*/
showSubmission7628ee3f74163b57a952f3506034fb4f.head = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showSubmission7628ee3f74163b57a952f3506034fb4f.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FormController::showSubmission
* @see app/Http/Controllers/FormController.php:354
* @route '/api/v1/submissions/{submission}'
*/
const showSubmission7628ee3f74163b57a952f3506034fb4fForm = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showSubmission7628ee3f74163b57a952f3506034fb4f.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::showSubmission
* @see app/Http/Controllers/FormController.php:354
* @route '/api/v1/submissions/{submission}'
*/
showSubmission7628ee3f74163b57a952f3506034fb4fForm.get = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showSubmission7628ee3f74163b57a952f3506034fb4f.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::showSubmission
* @see app/Http/Controllers/FormController.php:354
* @route '/api/v1/submissions/{submission}'
*/
showSubmission7628ee3f74163b57a952f3506034fb4fForm.head = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showSubmission7628ee3f74163b57a952f3506034fb4f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showSubmission7628ee3f74163b57a952f3506034fb4f.form = showSubmission7628ee3f74163b57a952f3506034fb4fForm
/**
* @see \App\Http\Controllers\FormController::showSubmission
* @see app/Http/Controllers/FormController.php:354
* @route '/submissions/{submission}'
*/
const showSubmission9b45390f07b512830fb43cbcd16a0bf3 = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showSubmission9b45390f07b512830fb43cbcd16a0bf3.url(args, options),
    method: 'get',
})

showSubmission9b45390f07b512830fb43cbcd16a0bf3.definition = {
    methods: ["get","head"],
    url: '/submissions/{submission}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FormController::showSubmission
* @see app/Http/Controllers/FormController.php:354
* @route '/submissions/{submission}'
*/
showSubmission9b45390f07b512830fb43cbcd16a0bf3.url = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { submission: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { submission: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            submission: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        submission: typeof args.submission === 'object'
        ? args.submission.id
        : args.submission,
    }

    return showSubmission9b45390f07b512830fb43cbcd16a0bf3.definition.url
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::showSubmission
* @see app/Http/Controllers/FormController.php:354
* @route '/submissions/{submission}'
*/
showSubmission9b45390f07b512830fb43cbcd16a0bf3.get = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showSubmission9b45390f07b512830fb43cbcd16a0bf3.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::showSubmission
* @see app/Http/Controllers/FormController.php:354
* @route '/submissions/{submission}'
*/
showSubmission9b45390f07b512830fb43cbcd16a0bf3.head = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showSubmission9b45390f07b512830fb43cbcd16a0bf3.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FormController::showSubmission
* @see app/Http/Controllers/FormController.php:354
* @route '/submissions/{submission}'
*/
const showSubmission9b45390f07b512830fb43cbcd16a0bf3Form = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showSubmission9b45390f07b512830fb43cbcd16a0bf3.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::showSubmission
* @see app/Http/Controllers/FormController.php:354
* @route '/submissions/{submission}'
*/
showSubmission9b45390f07b512830fb43cbcd16a0bf3Form.get = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showSubmission9b45390f07b512830fb43cbcd16a0bf3.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::showSubmission
* @see app/Http/Controllers/FormController.php:354
* @route '/submissions/{submission}'
*/
showSubmission9b45390f07b512830fb43cbcd16a0bf3Form.head = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showSubmission9b45390f07b512830fb43cbcd16a0bf3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showSubmission9b45390f07b512830fb43cbcd16a0bf3.form = showSubmission9b45390f07b512830fb43cbcd16a0bf3Form

export const showSubmission = {
    '/api/v1/submissions/{submission}': showSubmission7628ee3f74163b57a952f3506034fb4f,
    '/submissions/{submission}': showSubmission9b45390f07b512830fb43cbcd16a0bf3,
}

/**
* @see \App\Http\Controllers\FormController::updateSubmission
* @see app/Http/Controllers/FormController.php:373
* @route '/api/v1/submissions/{submission}/status'
*/
const updateSubmission2188cd01ef269f18deeb80db87d2fe9b = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateSubmission2188cd01ef269f18deeb80db87d2fe9b.url(args, options),
    method: 'patch',
})

updateSubmission2188cd01ef269f18deeb80db87d2fe9b.definition = {
    methods: ["patch"],
    url: '/api/v1/submissions/{submission}/status',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\FormController::updateSubmission
* @see app/Http/Controllers/FormController.php:373
* @route '/api/v1/submissions/{submission}/status'
*/
updateSubmission2188cd01ef269f18deeb80db87d2fe9b.url = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { submission: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { submission: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            submission: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        submission: typeof args.submission === 'object'
        ? args.submission.id
        : args.submission,
    }

    return updateSubmission2188cd01ef269f18deeb80db87d2fe9b.definition.url
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::updateSubmission
* @see app/Http/Controllers/FormController.php:373
* @route '/api/v1/submissions/{submission}/status'
*/
updateSubmission2188cd01ef269f18deeb80db87d2fe9b.patch = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateSubmission2188cd01ef269f18deeb80db87d2fe9b.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\FormController::updateSubmission
* @see app/Http/Controllers/FormController.php:373
* @route '/api/v1/submissions/{submission}/status'
*/
const updateSubmission2188cd01ef269f18deeb80db87d2fe9bForm = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSubmission2188cd01ef269f18deeb80db87d2fe9b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::updateSubmission
* @see app/Http/Controllers/FormController.php:373
* @route '/api/v1/submissions/{submission}/status'
*/
updateSubmission2188cd01ef269f18deeb80db87d2fe9bForm.patch = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSubmission2188cd01ef269f18deeb80db87d2fe9b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateSubmission2188cd01ef269f18deeb80db87d2fe9b.form = updateSubmission2188cd01ef269f18deeb80db87d2fe9bForm
/**
* @see \App\Http\Controllers\FormController::updateSubmission
* @see app/Http/Controllers/FormController.php:373
* @route '/submissions/{submission}'
*/
const updateSubmission9b45390f07b512830fb43cbcd16a0bf3 = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateSubmission9b45390f07b512830fb43cbcd16a0bf3.url(args, options),
    method: 'patch',
})

updateSubmission9b45390f07b512830fb43cbcd16a0bf3.definition = {
    methods: ["patch"],
    url: '/submissions/{submission}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\FormController::updateSubmission
* @see app/Http/Controllers/FormController.php:373
* @route '/submissions/{submission}'
*/
updateSubmission9b45390f07b512830fb43cbcd16a0bf3.url = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { submission: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { submission: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            submission: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        submission: typeof args.submission === 'object'
        ? args.submission.id
        : args.submission,
    }

    return updateSubmission9b45390f07b512830fb43cbcd16a0bf3.definition.url
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::updateSubmission
* @see app/Http/Controllers/FormController.php:373
* @route '/submissions/{submission}'
*/
updateSubmission9b45390f07b512830fb43cbcd16a0bf3.patch = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateSubmission9b45390f07b512830fb43cbcd16a0bf3.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\FormController::updateSubmission
* @see app/Http/Controllers/FormController.php:373
* @route '/submissions/{submission}'
*/
const updateSubmission9b45390f07b512830fb43cbcd16a0bf3Form = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSubmission9b45390f07b512830fb43cbcd16a0bf3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::updateSubmission
* @see app/Http/Controllers/FormController.php:373
* @route '/submissions/{submission}'
*/
updateSubmission9b45390f07b512830fb43cbcd16a0bf3Form.patch = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSubmission9b45390f07b512830fb43cbcd16a0bf3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateSubmission9b45390f07b512830fb43cbcd16a0bf3.form = updateSubmission9b45390f07b512830fb43cbcd16a0bf3Form

export const updateSubmission = {
    '/api/v1/submissions/{submission}/status': updateSubmission2188cd01ef269f18deeb80db87d2fe9b,
    '/submissions/{submission}': updateSubmission9b45390f07b512830fb43cbcd16a0bf3,
}

/**
* @see \App\Http\Controllers\FormController::destroySubmission
* @see app/Http/Controllers/FormController.php:394
* @route '/api/v1/submissions/{submission}'
*/
const destroySubmission7628ee3f74163b57a952f3506034fb4f = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroySubmission7628ee3f74163b57a952f3506034fb4f.url(args, options),
    method: 'delete',
})

destroySubmission7628ee3f74163b57a952f3506034fb4f.definition = {
    methods: ["delete"],
    url: '/api/v1/submissions/{submission}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\FormController::destroySubmission
* @see app/Http/Controllers/FormController.php:394
* @route '/api/v1/submissions/{submission}'
*/
destroySubmission7628ee3f74163b57a952f3506034fb4f.url = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { submission: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { submission: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            submission: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        submission: typeof args.submission === 'object'
        ? args.submission.id
        : args.submission,
    }

    return destroySubmission7628ee3f74163b57a952f3506034fb4f.definition.url
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::destroySubmission
* @see app/Http/Controllers/FormController.php:394
* @route '/api/v1/submissions/{submission}'
*/
destroySubmission7628ee3f74163b57a952f3506034fb4f.delete = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroySubmission7628ee3f74163b57a952f3506034fb4f.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\FormController::destroySubmission
* @see app/Http/Controllers/FormController.php:394
* @route '/api/v1/submissions/{submission}'
*/
const destroySubmission7628ee3f74163b57a952f3506034fb4fForm = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroySubmission7628ee3f74163b57a952f3506034fb4f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::destroySubmission
* @see app/Http/Controllers/FormController.php:394
* @route '/api/v1/submissions/{submission}'
*/
destroySubmission7628ee3f74163b57a952f3506034fb4fForm.delete = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroySubmission7628ee3f74163b57a952f3506034fb4f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroySubmission7628ee3f74163b57a952f3506034fb4f.form = destroySubmission7628ee3f74163b57a952f3506034fb4fForm
/**
* @see \App\Http\Controllers\FormController::destroySubmission
* @see app/Http/Controllers/FormController.php:394
* @route '/submissions/{submission}'
*/
const destroySubmission9b45390f07b512830fb43cbcd16a0bf3 = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroySubmission9b45390f07b512830fb43cbcd16a0bf3.url(args, options),
    method: 'delete',
})

destroySubmission9b45390f07b512830fb43cbcd16a0bf3.definition = {
    methods: ["delete"],
    url: '/submissions/{submission}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\FormController::destroySubmission
* @see app/Http/Controllers/FormController.php:394
* @route '/submissions/{submission}'
*/
destroySubmission9b45390f07b512830fb43cbcd16a0bf3.url = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { submission: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { submission: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            submission: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        submission: typeof args.submission === 'object'
        ? args.submission.id
        : args.submission,
    }

    return destroySubmission9b45390f07b512830fb43cbcd16a0bf3.definition.url
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::destroySubmission
* @see app/Http/Controllers/FormController.php:394
* @route '/submissions/{submission}'
*/
destroySubmission9b45390f07b512830fb43cbcd16a0bf3.delete = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroySubmission9b45390f07b512830fb43cbcd16a0bf3.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\FormController::destroySubmission
* @see app/Http/Controllers/FormController.php:394
* @route '/submissions/{submission}'
*/
const destroySubmission9b45390f07b512830fb43cbcd16a0bf3Form = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroySubmission9b45390f07b512830fb43cbcd16a0bf3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::destroySubmission
* @see app/Http/Controllers/FormController.php:394
* @route '/submissions/{submission}'
*/
destroySubmission9b45390f07b512830fb43cbcd16a0bf3Form.delete = (args: { submission: string | number | { id: string | number } } | [submission: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroySubmission9b45390f07b512830fb43cbcd16a0bf3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroySubmission9b45390f07b512830fb43cbcd16a0bf3.form = destroySubmission9b45390f07b512830fb43cbcd16a0bf3Form

export const destroySubmission = {
    '/api/v1/submissions/{submission}': destroySubmission7628ee3f74163b57a952f3506034fb4f,
    '/submissions/{submission}': destroySubmission9b45390f07b512830fb43cbcd16a0bf3,
}

/**
* @see \App\Http\Controllers\FormController::create
* @see app/Http/Controllers/FormController.php:137
* @route '/forms/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/forms/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FormController::create
* @see app/Http/Controllers/FormController.php:137
* @route '/forms/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::create
* @see app/Http/Controllers/FormController.php:137
* @route '/forms/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::create
* @see app/Http/Controllers/FormController.php:137
* @route '/forms/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FormController::create
* @see app/Http/Controllers/FormController.php:137
* @route '/forms/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::create
* @see app/Http/Controllers/FormController.php:137
* @route '/forms/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FormController::create
* @see app/Http/Controllers/FormController.php:137
* @route '/forms/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

const FormController = { index, edit, submit, store, update, destroy, toggle, submissions, showSubmission, updateSubmission, destroySubmission, create }

export default FormController