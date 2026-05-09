import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:89
* @route '/api/v1/knowledge'
*/
const index4ba94bdba7ea56877bed462c2a45f5dd = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4ba94bdba7ea56877bed462c2a45f5dd.url(options),
    method: 'get',
})

index4ba94bdba7ea56877bed462c2a45f5dd.definition = {
    methods: ["get","head"],
    url: '/api/v1/knowledge',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:89
* @route '/api/v1/knowledge'
*/
index4ba94bdba7ea56877bed462c2a45f5dd.url = (options?: RouteQueryOptions) => {
    return index4ba94bdba7ea56877bed462c2a45f5dd.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:89
* @route '/api/v1/knowledge'
*/
index4ba94bdba7ea56877bed462c2a45f5dd.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4ba94bdba7ea56877bed462c2a45f5dd.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:89
* @route '/api/v1/knowledge'
*/
index4ba94bdba7ea56877bed462c2a45f5dd.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index4ba94bdba7ea56877bed462c2a45f5dd.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:89
* @route '/api/v1/knowledge'
*/
const index4ba94bdba7ea56877bed462c2a45f5ddForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4ba94bdba7ea56877bed462c2a45f5dd.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:89
* @route '/api/v1/knowledge'
*/
index4ba94bdba7ea56877bed462c2a45f5ddForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4ba94bdba7ea56877bed462c2a45f5dd.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:89
* @route '/api/v1/knowledge'
*/
index4ba94bdba7ea56877bed462c2a45f5ddForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4ba94bdba7ea56877bed462c2a45f5dd.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index4ba94bdba7ea56877bed462c2a45f5dd.form = index4ba94bdba7ea56877bed462c2a45f5ddForm
/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:89
* @route '/knowledge'
*/
const index6ee0a66c1fd0b7f6be6a6765a13a8607 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index6ee0a66c1fd0b7f6be6a6765a13a8607.url(options),
    method: 'get',
})

index6ee0a66c1fd0b7f6be6a6765a13a8607.definition = {
    methods: ["get","head"],
    url: '/knowledge',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:89
* @route '/knowledge'
*/
index6ee0a66c1fd0b7f6be6a6765a13a8607.url = (options?: RouteQueryOptions) => {
    return index6ee0a66c1fd0b7f6be6a6765a13a8607.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:89
* @route '/knowledge'
*/
index6ee0a66c1fd0b7f6be6a6765a13a8607.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index6ee0a66c1fd0b7f6be6a6765a13a8607.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:89
* @route '/knowledge'
*/
index6ee0a66c1fd0b7f6be6a6765a13a8607.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index6ee0a66c1fd0b7f6be6a6765a13a8607.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:89
* @route '/knowledge'
*/
const index6ee0a66c1fd0b7f6be6a6765a13a8607Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index6ee0a66c1fd0b7f6be6a6765a13a8607.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:89
* @route '/knowledge'
*/
index6ee0a66c1fd0b7f6be6a6765a13a8607Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index6ee0a66c1fd0b7f6be6a6765a13a8607.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::index
* @see app/Http/Controllers/KnowledgeController.php:89
* @route '/knowledge'
*/
index6ee0a66c1fd0b7f6be6a6765a13a8607Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index6ee0a66c1fd0b7f6be6a6765a13a8607.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index6ee0a66c1fd0b7f6be6a6765a13a8607.form = index6ee0a66c1fd0b7f6be6a6765a13a8607Form

export const index = {
    '/api/v1/knowledge': index4ba94bdba7ea56877bed462c2a45f5dd,
    '/knowledge': index6ee0a66c1fd0b7f6be6a6765a13a8607,
}

/**
* @see \App\Http\Controllers\KnowledgeController::publicArticlesList
* @see app/Http/Controllers/KnowledgeController.php:275
* @route '/api/v1/knowledge/articles'
*/
export const publicArticlesList = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicArticlesList.url(options),
    method: 'get',
})

publicArticlesList.definition = {
    methods: ["get","head"],
    url: '/api/v1/knowledge/articles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KnowledgeController::publicArticlesList
* @see app/Http/Controllers/KnowledgeController.php:275
* @route '/api/v1/knowledge/articles'
*/
publicArticlesList.url = (options?: RouteQueryOptions) => {
    return publicArticlesList.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::publicArticlesList
* @see app/Http/Controllers/KnowledgeController.php:275
* @route '/api/v1/knowledge/articles'
*/
publicArticlesList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicArticlesList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::publicArticlesList
* @see app/Http/Controllers/KnowledgeController.php:275
* @route '/api/v1/knowledge/articles'
*/
publicArticlesList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: publicArticlesList.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KnowledgeController::publicArticlesList
* @see app/Http/Controllers/KnowledgeController.php:275
* @route '/api/v1/knowledge/articles'
*/
const publicArticlesListForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicArticlesList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::publicArticlesList
* @see app/Http/Controllers/KnowledgeController.php:275
* @route '/api/v1/knowledge/articles'
*/
publicArticlesListForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicArticlesList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::publicArticlesList
* @see app/Http/Controllers/KnowledgeController.php:275
* @route '/api/v1/knowledge/articles'
*/
publicArticlesListForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicArticlesList.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

publicArticlesList.form = publicArticlesListForm

/**
* @see \App\Http\Controllers\KnowledgeController::publicCategories
* @see app/Http/Controllers/KnowledgeController.php:247
* @route '/api/v1/knowledge/categories'
*/
export const publicCategories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicCategories.url(options),
    method: 'get',
})

publicCategories.definition = {
    methods: ["get","head"],
    url: '/api/v1/knowledge/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KnowledgeController::publicCategories
* @see app/Http/Controllers/KnowledgeController.php:247
* @route '/api/v1/knowledge/categories'
*/
publicCategories.url = (options?: RouteQueryOptions) => {
    return publicCategories.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::publicCategories
* @see app/Http/Controllers/KnowledgeController.php:247
* @route '/api/v1/knowledge/categories'
*/
publicCategories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicCategories.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::publicCategories
* @see app/Http/Controllers/KnowledgeController.php:247
* @route '/api/v1/knowledge/categories'
*/
publicCategories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: publicCategories.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KnowledgeController::publicCategories
* @see app/Http/Controllers/KnowledgeController.php:247
* @route '/api/v1/knowledge/categories'
*/
const publicCategoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicCategories.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::publicCategories
* @see app/Http/Controllers/KnowledgeController.php:247
* @route '/api/v1/knowledge/categories'
*/
publicCategoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicCategories.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::publicCategories
* @see app/Http/Controllers/KnowledgeController.php:247
* @route '/api/v1/knowledge/categories'
*/
publicCategoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicCategories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

publicCategories.form = publicCategoriesForm

/**
* @see \App\Http\Controllers\KnowledgeController::publicCategoryBySlug
* @see app/Http/Controllers/KnowledgeController.php:259
* @route '/api/v1/knowledge/categories/{slug}'
*/
export const publicCategoryBySlug = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicCategoryBySlug.url(args, options),
    method: 'get',
})

publicCategoryBySlug.definition = {
    methods: ["get","head"],
    url: '/api/v1/knowledge/categories/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KnowledgeController::publicCategoryBySlug
* @see app/Http/Controllers/KnowledgeController.php:259
* @route '/api/v1/knowledge/categories/{slug}'
*/
publicCategoryBySlug.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    if (Array.isArray(args)) {
        args = {
            slug: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        slug: args.slug,
    }

    return publicCategoryBySlug.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::publicCategoryBySlug
* @see app/Http/Controllers/KnowledgeController.php:259
* @route '/api/v1/knowledge/categories/{slug}'
*/
publicCategoryBySlug.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicCategoryBySlug.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::publicCategoryBySlug
* @see app/Http/Controllers/KnowledgeController.php:259
* @route '/api/v1/knowledge/categories/{slug}'
*/
publicCategoryBySlug.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: publicCategoryBySlug.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KnowledgeController::publicCategoryBySlug
* @see app/Http/Controllers/KnowledgeController.php:259
* @route '/api/v1/knowledge/categories/{slug}'
*/
const publicCategoryBySlugForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicCategoryBySlug.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::publicCategoryBySlug
* @see app/Http/Controllers/KnowledgeController.php:259
* @route '/api/v1/knowledge/categories/{slug}'
*/
publicCategoryBySlugForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicCategoryBySlug.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::publicCategoryBySlug
* @see app/Http/Controllers/KnowledgeController.php:259
* @route '/api/v1/knowledge/categories/{slug}'
*/
publicCategoryBySlugForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicCategoryBySlug.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

publicCategoryBySlug.form = publicCategoryBySlugForm

/**
* @see \App\Http\Controllers\KnowledgeController::publicArticleBySlug
* @see app/Http/Controllers/KnowledgeController.php:452
* @route '/api/v1/knowledge/{categorySlug}/{articleSlug}'
*/
export const publicArticleBySlug = (args: { categorySlug: string | number, articleSlug: string | number } | [categorySlug: string | number, articleSlug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicArticleBySlug.url(args, options),
    method: 'get',
})

publicArticleBySlug.definition = {
    methods: ["get","head"],
    url: '/api/v1/knowledge/{categorySlug}/{articleSlug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KnowledgeController::publicArticleBySlug
* @see app/Http/Controllers/KnowledgeController.php:452
* @route '/api/v1/knowledge/{categorySlug}/{articleSlug}'
*/
publicArticleBySlug.url = (args: { categorySlug: string | number, articleSlug: string | number } | [categorySlug: string | number, articleSlug: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            categorySlug: args[0],
            articleSlug: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        categorySlug: args.categorySlug,
        articleSlug: args.articleSlug,
    }

    return publicArticleBySlug.definition.url
            .replace('{categorySlug}', parsedArgs.categorySlug.toString())
            .replace('{articleSlug}', parsedArgs.articleSlug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::publicArticleBySlug
* @see app/Http/Controllers/KnowledgeController.php:452
* @route '/api/v1/knowledge/{categorySlug}/{articleSlug}'
*/
publicArticleBySlug.get = (args: { categorySlug: string | number, articleSlug: string | number } | [categorySlug: string | number, articleSlug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicArticleBySlug.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::publicArticleBySlug
* @see app/Http/Controllers/KnowledgeController.php:452
* @route '/api/v1/knowledge/{categorySlug}/{articleSlug}'
*/
publicArticleBySlug.head = (args: { categorySlug: string | number, articleSlug: string | number } | [categorySlug: string | number, articleSlug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: publicArticleBySlug.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KnowledgeController::publicArticleBySlug
* @see app/Http/Controllers/KnowledgeController.php:452
* @route '/api/v1/knowledge/{categorySlug}/{articleSlug}'
*/
const publicArticleBySlugForm = (args: { categorySlug: string | number, articleSlug: string | number } | [categorySlug: string | number, articleSlug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicArticleBySlug.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::publicArticleBySlug
* @see app/Http/Controllers/KnowledgeController.php:452
* @route '/api/v1/knowledge/{categorySlug}/{articleSlug}'
*/
publicArticleBySlugForm.get = (args: { categorySlug: string | number, articleSlug: string | number } | [categorySlug: string | number, articleSlug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicArticleBySlug.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::publicArticleBySlug
* @see app/Http/Controllers/KnowledgeController.php:452
* @route '/api/v1/knowledge/{categorySlug}/{articleSlug}'
*/
publicArticleBySlugForm.head = (args: { categorySlug: string | number, articleSlug: string | number } | [categorySlug: string | number, articleSlug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicArticleBySlug.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

publicArticleBySlug.form = publicArticleBySlugForm

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesStore
* @see app/Http/Controllers/KnowledgeController.php:140
* @route '/api/v1/knowledge/categories'
*/
const categoriesStoree6c4e9551521ae4be878e00a9628a203 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: categoriesStoree6c4e9551521ae4be878e00a9628a203.url(options),
    method: 'post',
})

categoriesStoree6c4e9551521ae4be878e00a9628a203.definition = {
    methods: ["post"],
    url: '/api/v1/knowledge/categories',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesStore
* @see app/Http/Controllers/KnowledgeController.php:140
* @route '/api/v1/knowledge/categories'
*/
categoriesStoree6c4e9551521ae4be878e00a9628a203.url = (options?: RouteQueryOptions) => {
    return categoriesStoree6c4e9551521ae4be878e00a9628a203.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesStore
* @see app/Http/Controllers/KnowledgeController.php:140
* @route '/api/v1/knowledge/categories'
*/
categoriesStoree6c4e9551521ae4be878e00a9628a203.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: categoriesStoree6c4e9551521ae4be878e00a9628a203.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesStore
* @see app/Http/Controllers/KnowledgeController.php:140
* @route '/api/v1/knowledge/categories'
*/
const categoriesStoree6c4e9551521ae4be878e00a9628a203Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: categoriesStoree6c4e9551521ae4be878e00a9628a203.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesStore
* @see app/Http/Controllers/KnowledgeController.php:140
* @route '/api/v1/knowledge/categories'
*/
categoriesStoree6c4e9551521ae4be878e00a9628a203Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: categoriesStoree6c4e9551521ae4be878e00a9628a203.url(options),
    method: 'post',
})

categoriesStoree6c4e9551521ae4be878e00a9628a203.form = categoriesStoree6c4e9551521ae4be878e00a9628a203Form
/**
* @see \App\Http\Controllers\KnowledgeController::categoriesStore
* @see app/Http/Controllers/KnowledgeController.php:140
* @route '/knowledge/categories'
*/
const categoriesStore30610406a843c9952cf5c91767f6a3cb = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: categoriesStore30610406a843c9952cf5c91767f6a3cb.url(options),
    method: 'post',
})

categoriesStore30610406a843c9952cf5c91767f6a3cb.definition = {
    methods: ["post"],
    url: '/knowledge/categories',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesStore
* @see app/Http/Controllers/KnowledgeController.php:140
* @route '/knowledge/categories'
*/
categoriesStore30610406a843c9952cf5c91767f6a3cb.url = (options?: RouteQueryOptions) => {
    return categoriesStore30610406a843c9952cf5c91767f6a3cb.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesStore
* @see app/Http/Controllers/KnowledgeController.php:140
* @route '/knowledge/categories'
*/
categoriesStore30610406a843c9952cf5c91767f6a3cb.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: categoriesStore30610406a843c9952cf5c91767f6a3cb.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesStore
* @see app/Http/Controllers/KnowledgeController.php:140
* @route '/knowledge/categories'
*/
const categoriesStore30610406a843c9952cf5c91767f6a3cbForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: categoriesStore30610406a843c9952cf5c91767f6a3cb.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesStore
* @see app/Http/Controllers/KnowledgeController.php:140
* @route '/knowledge/categories'
*/
categoriesStore30610406a843c9952cf5c91767f6a3cbForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: categoriesStore30610406a843c9952cf5c91767f6a3cb.url(options),
    method: 'post',
})

categoriesStore30610406a843c9952cf5c91767f6a3cb.form = categoriesStore30610406a843c9952cf5c91767f6a3cbForm

export const categoriesStore = {
    '/api/v1/knowledge/categories': categoriesStoree6c4e9551521ae4be878e00a9628a203,
    '/knowledge/categories': categoriesStore30610406a843c9952cf5c91767f6a3cb,
}

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesEdit
* @see app/Http/Controllers/KnowledgeController.php:169
* @route '/api/v1/knowledge/categories/{category}'
*/
const categoriesEditeed9bf512304e5a4aae3fdf86844468a = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categoriesEditeed9bf512304e5a4aae3fdf86844468a.url(args, options),
    method: 'get',
})

categoriesEditeed9bf512304e5a4aae3fdf86844468a.definition = {
    methods: ["get","head"],
    url: '/api/v1/knowledge/categories/{category}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesEdit
* @see app/Http/Controllers/KnowledgeController.php:169
* @route '/api/v1/knowledge/categories/{category}'
*/
categoriesEditeed9bf512304e5a4aae3fdf86844468a.url = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return categoriesEditeed9bf512304e5a4aae3fdf86844468a.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesEdit
* @see app/Http/Controllers/KnowledgeController.php:169
* @route '/api/v1/knowledge/categories/{category}'
*/
categoriesEditeed9bf512304e5a4aae3fdf86844468a.get = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categoriesEditeed9bf512304e5a4aae3fdf86844468a.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesEdit
* @see app/Http/Controllers/KnowledgeController.php:169
* @route '/api/v1/knowledge/categories/{category}'
*/
categoriesEditeed9bf512304e5a4aae3fdf86844468a.head = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categoriesEditeed9bf512304e5a4aae3fdf86844468a.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesEdit
* @see app/Http/Controllers/KnowledgeController.php:169
* @route '/api/v1/knowledge/categories/{category}'
*/
const categoriesEditeed9bf512304e5a4aae3fdf86844468aForm = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categoriesEditeed9bf512304e5a4aae3fdf86844468a.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesEdit
* @see app/Http/Controllers/KnowledgeController.php:169
* @route '/api/v1/knowledge/categories/{category}'
*/
categoriesEditeed9bf512304e5a4aae3fdf86844468aForm.get = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categoriesEditeed9bf512304e5a4aae3fdf86844468a.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesEdit
* @see app/Http/Controllers/KnowledgeController.php:169
* @route '/api/v1/knowledge/categories/{category}'
*/
categoriesEditeed9bf512304e5a4aae3fdf86844468aForm.head = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categoriesEditeed9bf512304e5a4aae3fdf86844468a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

categoriesEditeed9bf512304e5a4aae3fdf86844468a.form = categoriesEditeed9bf512304e5a4aae3fdf86844468aForm
/**
* @see \App\Http\Controllers\KnowledgeController::categoriesEdit
* @see app/Http/Controllers/KnowledgeController.php:169
* @route '/knowledge/categories/{category}/edit'
*/
const categoriesEdit45f13e03629b7d4a25774bd3cb05061c = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categoriesEdit45f13e03629b7d4a25774bd3cb05061c.url(args, options),
    method: 'get',
})

categoriesEdit45f13e03629b7d4a25774bd3cb05061c.definition = {
    methods: ["get","head"],
    url: '/knowledge/categories/{category}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesEdit
* @see app/Http/Controllers/KnowledgeController.php:169
* @route '/knowledge/categories/{category}/edit'
*/
categoriesEdit45f13e03629b7d4a25774bd3cb05061c.url = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return categoriesEdit45f13e03629b7d4a25774bd3cb05061c.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesEdit
* @see app/Http/Controllers/KnowledgeController.php:169
* @route '/knowledge/categories/{category}/edit'
*/
categoriesEdit45f13e03629b7d4a25774bd3cb05061c.get = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categoriesEdit45f13e03629b7d4a25774bd3cb05061c.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesEdit
* @see app/Http/Controllers/KnowledgeController.php:169
* @route '/knowledge/categories/{category}/edit'
*/
categoriesEdit45f13e03629b7d4a25774bd3cb05061c.head = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categoriesEdit45f13e03629b7d4a25774bd3cb05061c.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesEdit
* @see app/Http/Controllers/KnowledgeController.php:169
* @route '/knowledge/categories/{category}/edit'
*/
const categoriesEdit45f13e03629b7d4a25774bd3cb05061cForm = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categoriesEdit45f13e03629b7d4a25774bd3cb05061c.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesEdit
* @see app/Http/Controllers/KnowledgeController.php:169
* @route '/knowledge/categories/{category}/edit'
*/
categoriesEdit45f13e03629b7d4a25774bd3cb05061cForm.get = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categoriesEdit45f13e03629b7d4a25774bd3cb05061c.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesEdit
* @see app/Http/Controllers/KnowledgeController.php:169
* @route '/knowledge/categories/{category}/edit'
*/
categoriesEdit45f13e03629b7d4a25774bd3cb05061cForm.head = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categoriesEdit45f13e03629b7d4a25774bd3cb05061c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

categoriesEdit45f13e03629b7d4a25774bd3cb05061c.form = categoriesEdit45f13e03629b7d4a25774bd3cb05061cForm

export const categoriesEdit = {
    '/api/v1/knowledge/categories/{category}': categoriesEditeed9bf512304e5a4aae3fdf86844468a,
    '/knowledge/categories/{category}/edit': categoriesEdit45f13e03629b7d4a25774bd3cb05061c,
}

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesUpdate
* @see app/Http/Controllers/KnowledgeController.php:194
* @route '/api/v1/knowledge/categories/{category}'
*/
const categoriesUpdateeed9bf512304e5a4aae3fdf86844468a = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: categoriesUpdateeed9bf512304e5a4aae3fdf86844468a.url(args, options),
    method: 'put',
})

categoriesUpdateeed9bf512304e5a4aae3fdf86844468a.definition = {
    methods: ["put"],
    url: '/api/v1/knowledge/categories/{category}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesUpdate
* @see app/Http/Controllers/KnowledgeController.php:194
* @route '/api/v1/knowledge/categories/{category}'
*/
categoriesUpdateeed9bf512304e5a4aae3fdf86844468a.url = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return categoriesUpdateeed9bf512304e5a4aae3fdf86844468a.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesUpdate
* @see app/Http/Controllers/KnowledgeController.php:194
* @route '/api/v1/knowledge/categories/{category}'
*/
categoriesUpdateeed9bf512304e5a4aae3fdf86844468a.put = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: categoriesUpdateeed9bf512304e5a4aae3fdf86844468a.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesUpdate
* @see app/Http/Controllers/KnowledgeController.php:194
* @route '/api/v1/knowledge/categories/{category}'
*/
const categoriesUpdateeed9bf512304e5a4aae3fdf86844468aForm = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: categoriesUpdateeed9bf512304e5a4aae3fdf86844468a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesUpdate
* @see app/Http/Controllers/KnowledgeController.php:194
* @route '/api/v1/knowledge/categories/{category}'
*/
categoriesUpdateeed9bf512304e5a4aae3fdf86844468aForm.put = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: categoriesUpdateeed9bf512304e5a4aae3fdf86844468a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

categoriesUpdateeed9bf512304e5a4aae3fdf86844468a.form = categoriesUpdateeed9bf512304e5a4aae3fdf86844468aForm
/**
* @see \App\Http\Controllers\KnowledgeController::categoriesUpdate
* @see app/Http/Controllers/KnowledgeController.php:194
* @route '/api/v1/knowledge/categories/{category}'
*/
const categoriesUpdateeed9bf512304e5a4aae3fdf86844468a = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: categoriesUpdateeed9bf512304e5a4aae3fdf86844468a.url(args, options),
    method: 'patch',
})

categoriesUpdateeed9bf512304e5a4aae3fdf86844468a.definition = {
    methods: ["patch"],
    url: '/api/v1/knowledge/categories/{category}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesUpdate
* @see app/Http/Controllers/KnowledgeController.php:194
* @route '/api/v1/knowledge/categories/{category}'
*/
categoriesUpdateeed9bf512304e5a4aae3fdf86844468a.url = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return categoriesUpdateeed9bf512304e5a4aae3fdf86844468a.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesUpdate
* @see app/Http/Controllers/KnowledgeController.php:194
* @route '/api/v1/knowledge/categories/{category}'
*/
categoriesUpdateeed9bf512304e5a4aae3fdf86844468a.patch = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: categoriesUpdateeed9bf512304e5a4aae3fdf86844468a.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesUpdate
* @see app/Http/Controllers/KnowledgeController.php:194
* @route '/api/v1/knowledge/categories/{category}'
*/
const categoriesUpdateeed9bf512304e5a4aae3fdf86844468aForm = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: categoriesUpdateeed9bf512304e5a4aae3fdf86844468a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesUpdate
* @see app/Http/Controllers/KnowledgeController.php:194
* @route '/api/v1/knowledge/categories/{category}'
*/
categoriesUpdateeed9bf512304e5a4aae3fdf86844468aForm.patch = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: categoriesUpdateeed9bf512304e5a4aae3fdf86844468a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

categoriesUpdateeed9bf512304e5a4aae3fdf86844468a.form = categoriesUpdateeed9bf512304e5a4aae3fdf86844468aForm
/**
* @see \App\Http\Controllers\KnowledgeController::categoriesUpdate
* @see app/Http/Controllers/KnowledgeController.php:194
* @route '/knowledge/categories/{category}'
*/
const categoriesUpdate17a6768d49ff774b41fc8a03759fb526 = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: categoriesUpdate17a6768d49ff774b41fc8a03759fb526.url(args, options),
    method: 'patch',
})

categoriesUpdate17a6768d49ff774b41fc8a03759fb526.definition = {
    methods: ["patch"],
    url: '/knowledge/categories/{category}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesUpdate
* @see app/Http/Controllers/KnowledgeController.php:194
* @route '/knowledge/categories/{category}'
*/
categoriesUpdate17a6768d49ff774b41fc8a03759fb526.url = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return categoriesUpdate17a6768d49ff774b41fc8a03759fb526.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesUpdate
* @see app/Http/Controllers/KnowledgeController.php:194
* @route '/knowledge/categories/{category}'
*/
categoriesUpdate17a6768d49ff774b41fc8a03759fb526.patch = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: categoriesUpdate17a6768d49ff774b41fc8a03759fb526.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesUpdate
* @see app/Http/Controllers/KnowledgeController.php:194
* @route '/knowledge/categories/{category}'
*/
const categoriesUpdate17a6768d49ff774b41fc8a03759fb526Form = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: categoriesUpdate17a6768d49ff774b41fc8a03759fb526.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesUpdate
* @see app/Http/Controllers/KnowledgeController.php:194
* @route '/knowledge/categories/{category}'
*/
categoriesUpdate17a6768d49ff774b41fc8a03759fb526Form.patch = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: categoriesUpdate17a6768d49ff774b41fc8a03759fb526.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

categoriesUpdate17a6768d49ff774b41fc8a03759fb526.form = categoriesUpdate17a6768d49ff774b41fc8a03759fb526Form

export const categoriesUpdate = {
    '/api/v1/knowledge/categories/{category}': categoriesUpdateeed9bf512304e5a4aae3fdf86844468a,
    '/api/v1/knowledge/categories/{category}': categoriesUpdateeed9bf512304e5a4aae3fdf86844468a,
    '/knowledge/categories/{category}': categoriesUpdate17a6768d49ff774b41fc8a03759fb526,
}

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesDestroy
* @see app/Http/Controllers/KnowledgeController.php:223
* @route '/api/v1/knowledge/categories/{category}'
*/
const categoriesDestroyeed9bf512304e5a4aae3fdf86844468a = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: categoriesDestroyeed9bf512304e5a4aae3fdf86844468a.url(args, options),
    method: 'delete',
})

categoriesDestroyeed9bf512304e5a4aae3fdf86844468a.definition = {
    methods: ["delete"],
    url: '/api/v1/knowledge/categories/{category}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesDestroy
* @see app/Http/Controllers/KnowledgeController.php:223
* @route '/api/v1/knowledge/categories/{category}'
*/
categoriesDestroyeed9bf512304e5a4aae3fdf86844468a.url = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return categoriesDestroyeed9bf512304e5a4aae3fdf86844468a.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesDestroy
* @see app/Http/Controllers/KnowledgeController.php:223
* @route '/api/v1/knowledge/categories/{category}'
*/
categoriesDestroyeed9bf512304e5a4aae3fdf86844468a.delete = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: categoriesDestroyeed9bf512304e5a4aae3fdf86844468a.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesDestroy
* @see app/Http/Controllers/KnowledgeController.php:223
* @route '/api/v1/knowledge/categories/{category}'
*/
const categoriesDestroyeed9bf512304e5a4aae3fdf86844468aForm = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: categoriesDestroyeed9bf512304e5a4aae3fdf86844468a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesDestroy
* @see app/Http/Controllers/KnowledgeController.php:223
* @route '/api/v1/knowledge/categories/{category}'
*/
categoriesDestroyeed9bf512304e5a4aae3fdf86844468aForm.delete = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: categoriesDestroyeed9bf512304e5a4aae3fdf86844468a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

categoriesDestroyeed9bf512304e5a4aae3fdf86844468a.form = categoriesDestroyeed9bf512304e5a4aae3fdf86844468aForm
/**
* @see \App\Http\Controllers\KnowledgeController::categoriesDestroy
* @see app/Http/Controllers/KnowledgeController.php:223
* @route '/knowledge/categories/{category}'
*/
const categoriesDestroy17a6768d49ff774b41fc8a03759fb526 = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: categoriesDestroy17a6768d49ff774b41fc8a03759fb526.url(args, options),
    method: 'delete',
})

categoriesDestroy17a6768d49ff774b41fc8a03759fb526.definition = {
    methods: ["delete"],
    url: '/knowledge/categories/{category}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesDestroy
* @see app/Http/Controllers/KnowledgeController.php:223
* @route '/knowledge/categories/{category}'
*/
categoriesDestroy17a6768d49ff774b41fc8a03759fb526.url = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return categoriesDestroy17a6768d49ff774b41fc8a03759fb526.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesDestroy
* @see app/Http/Controllers/KnowledgeController.php:223
* @route '/knowledge/categories/{category}'
*/
categoriesDestroy17a6768d49ff774b41fc8a03759fb526.delete = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: categoriesDestroy17a6768d49ff774b41fc8a03759fb526.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesDestroy
* @see app/Http/Controllers/KnowledgeController.php:223
* @route '/knowledge/categories/{category}'
*/
const categoriesDestroy17a6768d49ff774b41fc8a03759fb526Form = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: categoriesDestroy17a6768d49ff774b41fc8a03759fb526.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesDestroy
* @see app/Http/Controllers/KnowledgeController.php:223
* @route '/knowledge/categories/{category}'
*/
categoriesDestroy17a6768d49ff774b41fc8a03759fb526Form.delete = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: categoriesDestroy17a6768d49ff774b41fc8a03759fb526.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

categoriesDestroy17a6768d49ff774b41fc8a03759fb526.form = categoriesDestroy17a6768d49ff774b41fc8a03759fb526Form

export const categoriesDestroy = {
    '/api/v1/knowledge/categories/{category}': categoriesDestroyeed9bf512304e5a4aae3fdf86844468a,
    '/knowledge/categories/{category}': categoriesDestroy17a6768d49ff774b41fc8a03759fb526,
}

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesToggle
* @see app/Http/Controllers/KnowledgeController.php:234
* @route '/api/v1/knowledge/categories/{category}/toggle'
*/
const categoriesToggle0cf2ed58cedf7229b39a59e7ad95c9fd = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: categoriesToggle0cf2ed58cedf7229b39a59e7ad95c9fd.url(args, options),
    method: 'patch',
})

categoriesToggle0cf2ed58cedf7229b39a59e7ad95c9fd.definition = {
    methods: ["patch"],
    url: '/api/v1/knowledge/categories/{category}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesToggle
* @see app/Http/Controllers/KnowledgeController.php:234
* @route '/api/v1/knowledge/categories/{category}/toggle'
*/
categoriesToggle0cf2ed58cedf7229b39a59e7ad95c9fd.url = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return categoriesToggle0cf2ed58cedf7229b39a59e7ad95c9fd.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesToggle
* @see app/Http/Controllers/KnowledgeController.php:234
* @route '/api/v1/knowledge/categories/{category}/toggle'
*/
categoriesToggle0cf2ed58cedf7229b39a59e7ad95c9fd.patch = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: categoriesToggle0cf2ed58cedf7229b39a59e7ad95c9fd.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesToggle
* @see app/Http/Controllers/KnowledgeController.php:234
* @route '/api/v1/knowledge/categories/{category}/toggle'
*/
const categoriesToggle0cf2ed58cedf7229b39a59e7ad95c9fdForm = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: categoriesToggle0cf2ed58cedf7229b39a59e7ad95c9fd.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesToggle
* @see app/Http/Controllers/KnowledgeController.php:234
* @route '/api/v1/knowledge/categories/{category}/toggle'
*/
categoriesToggle0cf2ed58cedf7229b39a59e7ad95c9fdForm.patch = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: categoriesToggle0cf2ed58cedf7229b39a59e7ad95c9fd.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

categoriesToggle0cf2ed58cedf7229b39a59e7ad95c9fd.form = categoriesToggle0cf2ed58cedf7229b39a59e7ad95c9fdForm
/**
* @see \App\Http\Controllers\KnowledgeController::categoriesToggle
* @see app/Http/Controllers/KnowledgeController.php:234
* @route '/knowledge/categories/{category}/toggle'
*/
const categoriesToggle05418238a985e2e60f767dc75c734998 = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: categoriesToggle05418238a985e2e60f767dc75c734998.url(args, options),
    method: 'patch',
})

categoriesToggle05418238a985e2e60f767dc75c734998.definition = {
    methods: ["patch"],
    url: '/knowledge/categories/{category}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesToggle
* @see app/Http/Controllers/KnowledgeController.php:234
* @route '/knowledge/categories/{category}/toggle'
*/
categoriesToggle05418238a985e2e60f767dc75c734998.url = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return categoriesToggle05418238a985e2e60f767dc75c734998.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesToggle
* @see app/Http/Controllers/KnowledgeController.php:234
* @route '/knowledge/categories/{category}/toggle'
*/
categoriesToggle05418238a985e2e60f767dc75c734998.patch = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: categoriesToggle05418238a985e2e60f767dc75c734998.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesToggle
* @see app/Http/Controllers/KnowledgeController.php:234
* @route '/knowledge/categories/{category}/toggle'
*/
const categoriesToggle05418238a985e2e60f767dc75c734998Form = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: categoriesToggle05418238a985e2e60f767dc75c734998.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesToggle
* @see app/Http/Controllers/KnowledgeController.php:234
* @route '/knowledge/categories/{category}/toggle'
*/
categoriesToggle05418238a985e2e60f767dc75c734998Form.patch = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: categoriesToggle05418238a985e2e60f767dc75c734998.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

categoriesToggle05418238a985e2e60f767dc75c734998.form = categoriesToggle05418238a985e2e60f767dc75c734998Form

export const categoriesToggle = {
    '/api/v1/knowledge/categories/{category}/toggle': categoriesToggle0cf2ed58cedf7229b39a59e7ad95c9fd,
    '/knowledge/categories/{category}/toggle': categoriesToggle05418238a985e2e60f767dc75c734998,
}

/**
* @see \App\Http\Controllers\KnowledgeController::articlesStore
* @see app/Http/Controllers/KnowledgeController.php:317
* @route '/api/v1/knowledge/articles'
*/
const articlesStore340f6b4d677c6c54904e35ca6f0553fe = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: articlesStore340f6b4d677c6c54904e35ca6f0553fe.url(options),
    method: 'post',
})

articlesStore340f6b4d677c6c54904e35ca6f0553fe.definition = {
    methods: ["post"],
    url: '/api/v1/knowledge/articles',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\KnowledgeController::articlesStore
* @see app/Http/Controllers/KnowledgeController.php:317
* @route '/api/v1/knowledge/articles'
*/
articlesStore340f6b4d677c6c54904e35ca6f0553fe.url = (options?: RouteQueryOptions) => {
    return articlesStore340f6b4d677c6c54904e35ca6f0553fe.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::articlesStore
* @see app/Http/Controllers/KnowledgeController.php:317
* @route '/api/v1/knowledge/articles'
*/
articlesStore340f6b4d677c6c54904e35ca6f0553fe.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: articlesStore340f6b4d677c6c54904e35ca6f0553fe.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesStore
* @see app/Http/Controllers/KnowledgeController.php:317
* @route '/api/v1/knowledge/articles'
*/
const articlesStore340f6b4d677c6c54904e35ca6f0553feForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: articlesStore340f6b4d677c6c54904e35ca6f0553fe.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesStore
* @see app/Http/Controllers/KnowledgeController.php:317
* @route '/api/v1/knowledge/articles'
*/
articlesStore340f6b4d677c6c54904e35ca6f0553feForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: articlesStore340f6b4d677c6c54904e35ca6f0553fe.url(options),
    method: 'post',
})

articlesStore340f6b4d677c6c54904e35ca6f0553fe.form = articlesStore340f6b4d677c6c54904e35ca6f0553feForm
/**
* @see \App\Http\Controllers\KnowledgeController::articlesStore
* @see app/Http/Controllers/KnowledgeController.php:317
* @route '/knowledge/articles'
*/
const articlesStore40452c0ad987669f1e89796d277de21c = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: articlesStore40452c0ad987669f1e89796d277de21c.url(options),
    method: 'post',
})

articlesStore40452c0ad987669f1e89796d277de21c.definition = {
    methods: ["post"],
    url: '/knowledge/articles',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\KnowledgeController::articlesStore
* @see app/Http/Controllers/KnowledgeController.php:317
* @route '/knowledge/articles'
*/
articlesStore40452c0ad987669f1e89796d277de21c.url = (options?: RouteQueryOptions) => {
    return articlesStore40452c0ad987669f1e89796d277de21c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::articlesStore
* @see app/Http/Controllers/KnowledgeController.php:317
* @route '/knowledge/articles'
*/
articlesStore40452c0ad987669f1e89796d277de21c.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: articlesStore40452c0ad987669f1e89796d277de21c.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesStore
* @see app/Http/Controllers/KnowledgeController.php:317
* @route '/knowledge/articles'
*/
const articlesStore40452c0ad987669f1e89796d277de21cForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: articlesStore40452c0ad987669f1e89796d277de21c.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesStore
* @see app/Http/Controllers/KnowledgeController.php:317
* @route '/knowledge/articles'
*/
articlesStore40452c0ad987669f1e89796d277de21cForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: articlesStore40452c0ad987669f1e89796d277de21c.url(options),
    method: 'post',
})

articlesStore40452c0ad987669f1e89796d277de21c.form = articlesStore40452c0ad987669f1e89796d277de21cForm

export const articlesStore = {
    '/api/v1/knowledge/articles': articlesStore340f6b4d677c6c54904e35ca6f0553fe,
    '/knowledge/articles': articlesStore40452c0ad987669f1e89796d277de21c,
}

/**
* @see \App\Http\Controllers\KnowledgeController::articlesEdit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/api/v1/knowledge/articles/{article}'
*/
const articlesEditdd545d57e44fb5c218f65f6281707d70 = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: articlesEditdd545d57e44fb5c218f65f6281707d70.url(args, options),
    method: 'get',
})

articlesEditdd545d57e44fb5c218f65f6281707d70.definition = {
    methods: ["get","head"],
    url: '/api/v1/knowledge/articles/{article}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KnowledgeController::articlesEdit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/api/v1/knowledge/articles/{article}'
*/
articlesEditdd545d57e44fb5c218f65f6281707d70.url = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        article: typeof args.article === 'object'
        ? args.article.id
        : args.article,
    }

    return articlesEditdd545d57e44fb5c218f65f6281707d70.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::articlesEdit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/api/v1/knowledge/articles/{article}'
*/
articlesEditdd545d57e44fb5c218f65f6281707d70.get = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: articlesEditdd545d57e44fb5c218f65f6281707d70.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesEdit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/api/v1/knowledge/articles/{article}'
*/
articlesEditdd545d57e44fb5c218f65f6281707d70.head = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: articlesEditdd545d57e44fb5c218f65f6281707d70.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesEdit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/api/v1/knowledge/articles/{article}'
*/
const articlesEditdd545d57e44fb5c218f65f6281707d70Form = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: articlesEditdd545d57e44fb5c218f65f6281707d70.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesEdit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/api/v1/knowledge/articles/{article}'
*/
articlesEditdd545d57e44fb5c218f65f6281707d70Form.get = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: articlesEditdd545d57e44fb5c218f65f6281707d70.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesEdit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/api/v1/knowledge/articles/{article}'
*/
articlesEditdd545d57e44fb5c218f65f6281707d70Form.head = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: articlesEditdd545d57e44fb5c218f65f6281707d70.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

articlesEditdd545d57e44fb5c218f65f6281707d70.form = articlesEditdd545d57e44fb5c218f65f6281707d70Form
/**
* @see \App\Http\Controllers\KnowledgeController::articlesEdit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/knowledge/articles/{article}/edit'
*/
const articlesEdit8a296c52100daea5a70fdc798fc2dd34 = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: articlesEdit8a296c52100daea5a70fdc798fc2dd34.url(args, options),
    method: 'get',
})

articlesEdit8a296c52100daea5a70fdc798fc2dd34.definition = {
    methods: ["get","head"],
    url: '/knowledge/articles/{article}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KnowledgeController::articlesEdit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/knowledge/articles/{article}/edit'
*/
articlesEdit8a296c52100daea5a70fdc798fc2dd34.url = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        article: typeof args.article === 'object'
        ? args.article.id
        : args.article,
    }

    return articlesEdit8a296c52100daea5a70fdc798fc2dd34.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::articlesEdit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/knowledge/articles/{article}/edit'
*/
articlesEdit8a296c52100daea5a70fdc798fc2dd34.get = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: articlesEdit8a296c52100daea5a70fdc798fc2dd34.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesEdit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/knowledge/articles/{article}/edit'
*/
articlesEdit8a296c52100daea5a70fdc798fc2dd34.head = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: articlesEdit8a296c52100daea5a70fdc798fc2dd34.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesEdit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/knowledge/articles/{article}/edit'
*/
const articlesEdit8a296c52100daea5a70fdc798fc2dd34Form = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: articlesEdit8a296c52100daea5a70fdc798fc2dd34.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesEdit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/knowledge/articles/{article}/edit'
*/
articlesEdit8a296c52100daea5a70fdc798fc2dd34Form.get = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: articlesEdit8a296c52100daea5a70fdc798fc2dd34.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesEdit
* @see app/Http/Controllers/KnowledgeController.php:358
* @route '/knowledge/articles/{article}/edit'
*/
articlesEdit8a296c52100daea5a70fdc798fc2dd34Form.head = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: articlesEdit8a296c52100daea5a70fdc798fc2dd34.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

articlesEdit8a296c52100daea5a70fdc798fc2dd34.form = articlesEdit8a296c52100daea5a70fdc798fc2dd34Form

export const articlesEdit = {
    '/api/v1/knowledge/articles/{article}': articlesEditdd545d57e44fb5c218f65f6281707d70,
    '/knowledge/articles/{article}/edit': articlesEdit8a296c52100daea5a70fdc798fc2dd34,
}

/**
* @see \App\Http\Controllers\KnowledgeController::articlesUpdate
* @see app/Http/Controllers/KnowledgeController.php:386
* @route '/api/v1/knowledge/articles/{article}'
*/
const articlesUpdatedd545d57e44fb5c218f65f6281707d70 = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: articlesUpdatedd545d57e44fb5c218f65f6281707d70.url(args, options),
    method: 'put',
})

articlesUpdatedd545d57e44fb5c218f65f6281707d70.definition = {
    methods: ["put"],
    url: '/api/v1/knowledge/articles/{article}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\KnowledgeController::articlesUpdate
* @see app/Http/Controllers/KnowledgeController.php:386
* @route '/api/v1/knowledge/articles/{article}'
*/
articlesUpdatedd545d57e44fb5c218f65f6281707d70.url = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        article: typeof args.article === 'object'
        ? args.article.id
        : args.article,
    }

    return articlesUpdatedd545d57e44fb5c218f65f6281707d70.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::articlesUpdate
* @see app/Http/Controllers/KnowledgeController.php:386
* @route '/api/v1/knowledge/articles/{article}'
*/
articlesUpdatedd545d57e44fb5c218f65f6281707d70.put = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: articlesUpdatedd545d57e44fb5c218f65f6281707d70.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesUpdate
* @see app/Http/Controllers/KnowledgeController.php:386
* @route '/api/v1/knowledge/articles/{article}'
*/
const articlesUpdatedd545d57e44fb5c218f65f6281707d70Form = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: articlesUpdatedd545d57e44fb5c218f65f6281707d70.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesUpdate
* @see app/Http/Controllers/KnowledgeController.php:386
* @route '/api/v1/knowledge/articles/{article}'
*/
articlesUpdatedd545d57e44fb5c218f65f6281707d70Form.put = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: articlesUpdatedd545d57e44fb5c218f65f6281707d70.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

articlesUpdatedd545d57e44fb5c218f65f6281707d70.form = articlesUpdatedd545d57e44fb5c218f65f6281707d70Form
/**
* @see \App\Http\Controllers\KnowledgeController::articlesUpdate
* @see app/Http/Controllers/KnowledgeController.php:386
* @route '/api/v1/knowledge/articles/{article}'
*/
const articlesUpdatedd545d57e44fb5c218f65f6281707d70 = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: articlesUpdatedd545d57e44fb5c218f65f6281707d70.url(args, options),
    method: 'patch',
})

articlesUpdatedd545d57e44fb5c218f65f6281707d70.definition = {
    methods: ["patch"],
    url: '/api/v1/knowledge/articles/{article}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\KnowledgeController::articlesUpdate
* @see app/Http/Controllers/KnowledgeController.php:386
* @route '/api/v1/knowledge/articles/{article}'
*/
articlesUpdatedd545d57e44fb5c218f65f6281707d70.url = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        article: typeof args.article === 'object'
        ? args.article.id
        : args.article,
    }

    return articlesUpdatedd545d57e44fb5c218f65f6281707d70.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::articlesUpdate
* @see app/Http/Controllers/KnowledgeController.php:386
* @route '/api/v1/knowledge/articles/{article}'
*/
articlesUpdatedd545d57e44fb5c218f65f6281707d70.patch = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: articlesUpdatedd545d57e44fb5c218f65f6281707d70.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesUpdate
* @see app/Http/Controllers/KnowledgeController.php:386
* @route '/api/v1/knowledge/articles/{article}'
*/
const articlesUpdatedd545d57e44fb5c218f65f6281707d70Form = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: articlesUpdatedd545d57e44fb5c218f65f6281707d70.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesUpdate
* @see app/Http/Controllers/KnowledgeController.php:386
* @route '/api/v1/knowledge/articles/{article}'
*/
articlesUpdatedd545d57e44fb5c218f65f6281707d70Form.patch = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: articlesUpdatedd545d57e44fb5c218f65f6281707d70.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

articlesUpdatedd545d57e44fb5c218f65f6281707d70.form = articlesUpdatedd545d57e44fb5c218f65f6281707d70Form
/**
* @see \App\Http\Controllers\KnowledgeController::articlesUpdate
* @see app/Http/Controllers/KnowledgeController.php:386
* @route '/knowledge/articles/{article}'
*/
const articlesUpdateee724504ef3ef9cf1a1853f35273e111 = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: articlesUpdateee724504ef3ef9cf1a1853f35273e111.url(args, options),
    method: 'patch',
})

articlesUpdateee724504ef3ef9cf1a1853f35273e111.definition = {
    methods: ["patch"],
    url: '/knowledge/articles/{article}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\KnowledgeController::articlesUpdate
* @see app/Http/Controllers/KnowledgeController.php:386
* @route '/knowledge/articles/{article}'
*/
articlesUpdateee724504ef3ef9cf1a1853f35273e111.url = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        article: typeof args.article === 'object'
        ? args.article.id
        : args.article,
    }

    return articlesUpdateee724504ef3ef9cf1a1853f35273e111.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::articlesUpdate
* @see app/Http/Controllers/KnowledgeController.php:386
* @route '/knowledge/articles/{article}'
*/
articlesUpdateee724504ef3ef9cf1a1853f35273e111.patch = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: articlesUpdateee724504ef3ef9cf1a1853f35273e111.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesUpdate
* @see app/Http/Controllers/KnowledgeController.php:386
* @route '/knowledge/articles/{article}'
*/
const articlesUpdateee724504ef3ef9cf1a1853f35273e111Form = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: articlesUpdateee724504ef3ef9cf1a1853f35273e111.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesUpdate
* @see app/Http/Controllers/KnowledgeController.php:386
* @route '/knowledge/articles/{article}'
*/
articlesUpdateee724504ef3ef9cf1a1853f35273e111Form.patch = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: articlesUpdateee724504ef3ef9cf1a1853f35273e111.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

articlesUpdateee724504ef3ef9cf1a1853f35273e111.form = articlesUpdateee724504ef3ef9cf1a1853f35273e111Form

export const articlesUpdate = {
    '/api/v1/knowledge/articles/{article}': articlesUpdatedd545d57e44fb5c218f65f6281707d70,
    '/api/v1/knowledge/articles/{article}': articlesUpdatedd545d57e44fb5c218f65f6281707d70,
    '/knowledge/articles/{article}': articlesUpdateee724504ef3ef9cf1a1853f35273e111,
}

/**
* @see \App\Http\Controllers\KnowledgeController::articlesDestroy
* @see app/Http/Controllers/KnowledgeController.php:427
* @route '/api/v1/knowledge/articles/{article}'
*/
const articlesDestroydd545d57e44fb5c218f65f6281707d70 = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: articlesDestroydd545d57e44fb5c218f65f6281707d70.url(args, options),
    method: 'delete',
})

articlesDestroydd545d57e44fb5c218f65f6281707d70.definition = {
    methods: ["delete"],
    url: '/api/v1/knowledge/articles/{article}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\KnowledgeController::articlesDestroy
* @see app/Http/Controllers/KnowledgeController.php:427
* @route '/api/v1/knowledge/articles/{article}'
*/
articlesDestroydd545d57e44fb5c218f65f6281707d70.url = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        article: typeof args.article === 'object'
        ? args.article.id
        : args.article,
    }

    return articlesDestroydd545d57e44fb5c218f65f6281707d70.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::articlesDestroy
* @see app/Http/Controllers/KnowledgeController.php:427
* @route '/api/v1/knowledge/articles/{article}'
*/
articlesDestroydd545d57e44fb5c218f65f6281707d70.delete = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: articlesDestroydd545d57e44fb5c218f65f6281707d70.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesDestroy
* @see app/Http/Controllers/KnowledgeController.php:427
* @route '/api/v1/knowledge/articles/{article}'
*/
const articlesDestroydd545d57e44fb5c218f65f6281707d70Form = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: articlesDestroydd545d57e44fb5c218f65f6281707d70.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesDestroy
* @see app/Http/Controllers/KnowledgeController.php:427
* @route '/api/v1/knowledge/articles/{article}'
*/
articlesDestroydd545d57e44fb5c218f65f6281707d70Form.delete = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: articlesDestroydd545d57e44fb5c218f65f6281707d70.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

articlesDestroydd545d57e44fb5c218f65f6281707d70.form = articlesDestroydd545d57e44fb5c218f65f6281707d70Form
/**
* @see \App\Http\Controllers\KnowledgeController::articlesDestroy
* @see app/Http/Controllers/KnowledgeController.php:427
* @route '/knowledge/articles/{article}'
*/
const articlesDestroyee724504ef3ef9cf1a1853f35273e111 = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: articlesDestroyee724504ef3ef9cf1a1853f35273e111.url(args, options),
    method: 'delete',
})

articlesDestroyee724504ef3ef9cf1a1853f35273e111.definition = {
    methods: ["delete"],
    url: '/knowledge/articles/{article}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\KnowledgeController::articlesDestroy
* @see app/Http/Controllers/KnowledgeController.php:427
* @route '/knowledge/articles/{article}'
*/
articlesDestroyee724504ef3ef9cf1a1853f35273e111.url = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        article: typeof args.article === 'object'
        ? args.article.id
        : args.article,
    }

    return articlesDestroyee724504ef3ef9cf1a1853f35273e111.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::articlesDestroy
* @see app/Http/Controllers/KnowledgeController.php:427
* @route '/knowledge/articles/{article}'
*/
articlesDestroyee724504ef3ef9cf1a1853f35273e111.delete = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: articlesDestroyee724504ef3ef9cf1a1853f35273e111.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesDestroy
* @see app/Http/Controllers/KnowledgeController.php:427
* @route '/knowledge/articles/{article}'
*/
const articlesDestroyee724504ef3ef9cf1a1853f35273e111Form = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: articlesDestroyee724504ef3ef9cf1a1853f35273e111.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesDestroy
* @see app/Http/Controllers/KnowledgeController.php:427
* @route '/knowledge/articles/{article}'
*/
articlesDestroyee724504ef3ef9cf1a1853f35273e111Form.delete = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: articlesDestroyee724504ef3ef9cf1a1853f35273e111.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

articlesDestroyee724504ef3ef9cf1a1853f35273e111.form = articlesDestroyee724504ef3ef9cf1a1853f35273e111Form

export const articlesDestroy = {
    '/api/v1/knowledge/articles/{article}': articlesDestroydd545d57e44fb5c218f65f6281707d70,
    '/knowledge/articles/{article}': articlesDestroyee724504ef3ef9cf1a1853f35273e111,
}

/**
* @see \App\Http\Controllers\KnowledgeController::articlesToggle
* @see app/Http/Controllers/KnowledgeController.php:439
* @route '/api/v1/knowledge/articles/{article}/toggle'
*/
const articlesTogglead70329f9d5cdfe616b8eb0d83338ed9 = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: articlesTogglead70329f9d5cdfe616b8eb0d83338ed9.url(args, options),
    method: 'patch',
})

articlesTogglead70329f9d5cdfe616b8eb0d83338ed9.definition = {
    methods: ["patch"],
    url: '/api/v1/knowledge/articles/{article}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\KnowledgeController::articlesToggle
* @see app/Http/Controllers/KnowledgeController.php:439
* @route '/api/v1/knowledge/articles/{article}/toggle'
*/
articlesTogglead70329f9d5cdfe616b8eb0d83338ed9.url = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        article: typeof args.article === 'object'
        ? args.article.id
        : args.article,
    }

    return articlesTogglead70329f9d5cdfe616b8eb0d83338ed9.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::articlesToggle
* @see app/Http/Controllers/KnowledgeController.php:439
* @route '/api/v1/knowledge/articles/{article}/toggle'
*/
articlesTogglead70329f9d5cdfe616b8eb0d83338ed9.patch = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: articlesTogglead70329f9d5cdfe616b8eb0d83338ed9.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesToggle
* @see app/Http/Controllers/KnowledgeController.php:439
* @route '/api/v1/knowledge/articles/{article}/toggle'
*/
const articlesTogglead70329f9d5cdfe616b8eb0d83338ed9Form = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: articlesTogglead70329f9d5cdfe616b8eb0d83338ed9.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesToggle
* @see app/Http/Controllers/KnowledgeController.php:439
* @route '/api/v1/knowledge/articles/{article}/toggle'
*/
articlesTogglead70329f9d5cdfe616b8eb0d83338ed9Form.patch = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: articlesTogglead70329f9d5cdfe616b8eb0d83338ed9.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

articlesTogglead70329f9d5cdfe616b8eb0d83338ed9.form = articlesTogglead70329f9d5cdfe616b8eb0d83338ed9Form
/**
* @see \App\Http\Controllers\KnowledgeController::articlesToggle
* @see app/Http/Controllers/KnowledgeController.php:439
* @route '/knowledge/articles/{article}/toggle'
*/
const articlesToggle0ac2decad417fb715106361ce3d47a5f = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: articlesToggle0ac2decad417fb715106361ce3d47a5f.url(args, options),
    method: 'patch',
})

articlesToggle0ac2decad417fb715106361ce3d47a5f.definition = {
    methods: ["patch"],
    url: '/knowledge/articles/{article}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\KnowledgeController::articlesToggle
* @see app/Http/Controllers/KnowledgeController.php:439
* @route '/knowledge/articles/{article}/toggle'
*/
articlesToggle0ac2decad417fb715106361ce3d47a5f.url = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        article: typeof args.article === 'object'
        ? args.article.id
        : args.article,
    }

    return articlesToggle0ac2decad417fb715106361ce3d47a5f.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::articlesToggle
* @see app/Http/Controllers/KnowledgeController.php:439
* @route '/knowledge/articles/{article}/toggle'
*/
articlesToggle0ac2decad417fb715106361ce3d47a5f.patch = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: articlesToggle0ac2decad417fb715106361ce3d47a5f.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesToggle
* @see app/Http/Controllers/KnowledgeController.php:439
* @route '/knowledge/articles/{article}/toggle'
*/
const articlesToggle0ac2decad417fb715106361ce3d47a5fForm = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: articlesToggle0ac2decad417fb715106361ce3d47a5f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesToggle
* @see app/Http/Controllers/KnowledgeController.php:439
* @route '/knowledge/articles/{article}/toggle'
*/
articlesToggle0ac2decad417fb715106361ce3d47a5fForm.patch = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: articlesToggle0ac2decad417fb715106361ce3d47a5f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

articlesToggle0ac2decad417fb715106361ce3d47a5f.form = articlesToggle0ac2decad417fb715106361ce3d47a5fForm

export const articlesToggle = {
    '/api/v1/knowledge/articles/{article}/toggle': articlesTogglead70329f9d5cdfe616b8eb0d83338ed9,
    '/knowledge/articles/{article}/toggle': articlesToggle0ac2decad417fb715106361ce3d47a5f,
}

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesIndex
* @see app/Http/Controllers/KnowledgeController.php:112
* @route '/knowledge/categories'
*/
export const categoriesIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categoriesIndex.url(options),
    method: 'get',
})

categoriesIndex.definition = {
    methods: ["get","head"],
    url: '/knowledge/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesIndex
* @see app/Http/Controllers/KnowledgeController.php:112
* @route '/knowledge/categories'
*/
categoriesIndex.url = (options?: RouteQueryOptions) => {
    return categoriesIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesIndex
* @see app/Http/Controllers/KnowledgeController.php:112
* @route '/knowledge/categories'
*/
categoriesIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categoriesIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesIndex
* @see app/Http/Controllers/KnowledgeController.php:112
* @route '/knowledge/categories'
*/
categoriesIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categoriesIndex.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesIndex
* @see app/Http/Controllers/KnowledgeController.php:112
* @route '/knowledge/categories'
*/
const categoriesIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categoriesIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesIndex
* @see app/Http/Controllers/KnowledgeController.php:112
* @route '/knowledge/categories'
*/
categoriesIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categoriesIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesIndex
* @see app/Http/Controllers/KnowledgeController.php:112
* @route '/knowledge/categories'
*/
categoriesIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categoriesIndex.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

categoriesIndex.form = categoriesIndexForm

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesCreate
* @see app/Http/Controllers/KnowledgeController.php:126
* @route '/knowledge/categories/create'
*/
export const categoriesCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categoriesCreate.url(options),
    method: 'get',
})

categoriesCreate.definition = {
    methods: ["get","head"],
    url: '/knowledge/categories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesCreate
* @see app/Http/Controllers/KnowledgeController.php:126
* @route '/knowledge/categories/create'
*/
categoriesCreate.url = (options?: RouteQueryOptions) => {
    return categoriesCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesCreate
* @see app/Http/Controllers/KnowledgeController.php:126
* @route '/knowledge/categories/create'
*/
categoriesCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categoriesCreate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesCreate
* @see app/Http/Controllers/KnowledgeController.php:126
* @route '/knowledge/categories/create'
*/
categoriesCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categoriesCreate.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesCreate
* @see app/Http/Controllers/KnowledgeController.php:126
* @route '/knowledge/categories/create'
*/
const categoriesCreateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categoriesCreate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesCreate
* @see app/Http/Controllers/KnowledgeController.php:126
* @route '/knowledge/categories/create'
*/
categoriesCreateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categoriesCreate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::categoriesCreate
* @see app/Http/Controllers/KnowledgeController.php:126
* @route '/knowledge/categories/create'
*/
categoriesCreateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categoriesCreate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

categoriesCreate.form = categoriesCreateForm

/**
* @see \App\Http\Controllers\KnowledgeController::articlesIndex
* @see app/Http/Controllers/KnowledgeController.php:286
* @route '/knowledge/articles'
*/
export const articlesIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: articlesIndex.url(options),
    method: 'get',
})

articlesIndex.definition = {
    methods: ["get","head"],
    url: '/knowledge/articles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KnowledgeController::articlesIndex
* @see app/Http/Controllers/KnowledgeController.php:286
* @route '/knowledge/articles'
*/
articlesIndex.url = (options?: RouteQueryOptions) => {
    return articlesIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::articlesIndex
* @see app/Http/Controllers/KnowledgeController.php:286
* @route '/knowledge/articles'
*/
articlesIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: articlesIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesIndex
* @see app/Http/Controllers/KnowledgeController.php:286
* @route '/knowledge/articles'
*/
articlesIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: articlesIndex.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesIndex
* @see app/Http/Controllers/KnowledgeController.php:286
* @route '/knowledge/articles'
*/
const articlesIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: articlesIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesIndex
* @see app/Http/Controllers/KnowledgeController.php:286
* @route '/knowledge/articles'
*/
articlesIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: articlesIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesIndex
* @see app/Http/Controllers/KnowledgeController.php:286
* @route '/knowledge/articles'
*/
articlesIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: articlesIndex.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

articlesIndex.form = articlesIndexForm

/**
* @see \App\Http\Controllers\KnowledgeController::articlesCreate
* @see app/Http/Controllers/KnowledgeController.php:302
* @route '/knowledge/articles/create'
*/
export const articlesCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: articlesCreate.url(options),
    method: 'get',
})

articlesCreate.definition = {
    methods: ["get","head"],
    url: '/knowledge/articles/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KnowledgeController::articlesCreate
* @see app/Http/Controllers/KnowledgeController.php:302
* @route '/knowledge/articles/create'
*/
articlesCreate.url = (options?: RouteQueryOptions) => {
    return articlesCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KnowledgeController::articlesCreate
* @see app/Http/Controllers/KnowledgeController.php:302
* @route '/knowledge/articles/create'
*/
articlesCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: articlesCreate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesCreate
* @see app/Http/Controllers/KnowledgeController.php:302
* @route '/knowledge/articles/create'
*/
articlesCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: articlesCreate.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesCreate
* @see app/Http/Controllers/KnowledgeController.php:302
* @route '/knowledge/articles/create'
*/
const articlesCreateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: articlesCreate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesCreate
* @see app/Http/Controllers/KnowledgeController.php:302
* @route '/knowledge/articles/create'
*/
articlesCreateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: articlesCreate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\KnowledgeController::articlesCreate
* @see app/Http/Controllers/KnowledgeController.php:302
* @route '/knowledge/articles/create'
*/
articlesCreateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: articlesCreate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

articlesCreate.form = articlesCreateForm

const KnowledgeController = { index, publicArticlesList, publicCategories, publicCategoryBySlug, publicArticleBySlug, categoriesStore, categoriesEdit, categoriesUpdate, categoriesDestroy, categoriesToggle, articlesStore, articlesEdit, articlesUpdate, articlesDestroy, articlesToggle, categoriesIndex, categoriesCreate, articlesIndex, articlesCreate }

export default KnowledgeController