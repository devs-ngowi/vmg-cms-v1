<?php

// routes/api.php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\BlogPostController;
use App\Http\Controllers\ClientLogoController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\HeroSlideController;
use App\Http\Controllers\IndustryController;
use App\Http\Controllers\KnowledgeController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SeoSettingController;
use App\Http\Controllers\SiteSettingController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WorkflowController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {

    // ════════════════════════════════════════════════════════════════════════
    // 🟢 PUBLIC AUTH ROUTES
    // ════════════════════════════════════════════════════════════════════════
    Route::prefix('auth')->group(function () {
        Route::post('login',    [AuthController::class, 'login']);
        Route::post('register', [AuthController::class, 'register']);
    });

    // ════════════════════════════════════════════════════════════════════════
    // 🔵 PUBLIC READ ROUTES (No Authentication)
    // ════════════════════════════════════════════════════════════════════════

    Route::get('/banners',      [BannerController::class, 'index']);
    Route::get('/client-logos', [ClientLogoController::class, 'index']);
    Route::get('/hero-slides',  [HeroSlideController::class, 'index']);
    Route::get('/media',        [MediaController::class, 'index']);
    Route::get('/testimonials', [TestimonialController::class, 'index']);

    // Forms (public)
    Route::get('/forms',               [FormController::class, 'index']);
    Route::get('/forms/{form}',        [FormController::class, 'edit']);
    Route::post('/forms/{form}/submit', [FormController::class, 'submit']);

    // Blog
    Route::get('/blog/posts',        [BlogPostController::class, 'index']);
    Route::get('/blog/posts/{slug}', [BlogPostController::class, 'show']);
    Route::get('/blog/categories',   [BlogPostController::class, 'categories']);
    Route::get('/blog/tags',         [BlogPostController::class, 'tags']);

    // Services
    Route::get('/services',        [ServiceController::class, 'index']);
    Route::get('/services/{slug}', [ServiceController::class, 'show']);

    // Industries
    Route::get('/industries',        [IndustryController::class, 'index']);
    Route::get('/industries/{slug}', [IndustryController::class, 'show']);

    // Menus
    Route::get('/menus/primary', [MenuController::class, 'primary']);
    Route::get('/menus/footer',  [MenuController::class, 'footer']);

    // Pages
    Route::get('/pages',        [PageController::class, 'index']);
    Route::get('/pages/{page}', [PageController::class, 'show']);

    // Projects (public)
    Route::get('/projects',          [ProjectController::class, 'index']);
    Route::get('/projects/featured', [ProjectController::class, 'featured']);
    Route::get('/projects/{slug}',   [ProjectController::class, 'show']);

    // SEO / Settings
    Route::get('/seo',                [SeoSettingController::class, 'index']);
    Route::get('/settings',           [SiteSettingController::class, 'apiIndex']);
    Route::get('/settings/{group}',   [SiteSettingController::class, 'apiByGroup']);
    Route::get('/settings/get/{key}', [SiteSettingController::class, 'apiGetSetting']);

    // ════════════════════════════════════════════════════════════════════════
    // 🔵 Knowledge — PUBLIC (No Authentication)
    // Specific routes MUST come before wildcard routes
    // ════════════════════════════════════════════════════════════════════════
    Route::get('/knowledge',                                  [KnowledgeController::class, 'index']);
    Route::get('/knowledge/articles',                         [KnowledgeController::class, 'publicArticlesList']);     // ← specific first
    Route::get('/knowledge/categories',                       [KnowledgeController::class, 'publicCategories']);       // ← specific first
    Route::get('/knowledge/categories/{slug}',                [KnowledgeController::class, 'publicCategoryBySlug']);
    Route::get('/knowledge/{categorySlug}/{articleSlug}',     [KnowledgeController::class, 'publicArticleBySlug']);    // ← wildcard last

    // ════════════════════════════════════════════════════════════════════════
    // 🔴 PROTECTED ROUTES (Requires Sanctum token)
    // ════════════════════════════════════════════════════════════════════════

    Route::middleware('auth:sanctum')->group(function () {

        Route::post('auth/logout', [AuthController::class, 'logout']);

        Route::get('user', fn (Request $request) => response()->json([
            'success' => true,
            'message' => 'Authenticated user retrieved successfully.',
            'data'    => $request->user(),
        ]));

        Route::apiResource('users', UserController::class);

        // Blog writes
        Route::prefix('blog')->group(function () {
            Route::post('/posts',                   [BlogPostController::class, 'store']);
            Route::put('/posts/{post}',             [BlogPostController::class, 'update']);
            Route::delete('/posts/{post}',          [BlogPostController::class, 'destroy']);
            Route::post('/categories',              [BlogPostController::class, 'storeCategory']);
            Route::delete('/categories/{category}', [BlogPostController::class, 'destroyCategory']);
            Route::post('/tags',                    [BlogPostController::class, 'storeTag']);
            Route::delete('/tags/{tag}',            [BlogPostController::class, 'destroyTag']);
        });

        // Client logos
        Route::prefix('client-logos')->group(function () {
            Route::post('/',                     [ClientLogoController::class, 'store']);
            Route::put('/{clientLogo}',          [ClientLogoController::class, 'update']);
            Route::delete('/{clientLogo}',       [ClientLogoController::class, 'destroy']);
            Route::patch('/{clientLogo}/toggle', [ClientLogoController::class, 'toggle']);
            Route::post('/reorder',              [ClientLogoController::class, 'reorder']);
        });

        // Forms & submissions
        Route::prefix('forms')->group(function () {
            Route::post('/',               [FormController::class, 'store']);
            Route::put('/{form}',          [FormController::class, 'update']);
            Route::delete('/{form}',       [FormController::class, 'destroy']);
            Route::patch('/{form}/toggle', [FormController::class, 'toggle']);
        });

        Route::prefix('submissions')->group(function () {
            Route::get('/',                      [FormController::class, 'submissions']);
            Route::get('/{submission}',          [FormController::class, 'showSubmission']);
            Route::patch('/{submission}/status', [FormController::class, 'updateSubmission']);
            Route::delete('/{submission}',       [FormController::class, 'destroySubmission']);
        });

        // Hero slides
        Route::prefix('hero-slides')->group(function () {
            Route::get('/create',               [HeroSlideController::class, 'create']);
            Route::post('/',                    [HeroSlideController::class, 'store']);
            Route::get('/{heroSlide}',          [HeroSlideController::class, 'edit']);
            Route::put('/{heroSlide}',          [HeroSlideController::class, 'update']);
            Route::delete('/{heroSlide}',       [HeroSlideController::class, 'destroy']);
            Route::patch('/{heroSlide}/toggle', [HeroSlideController::class, 'toggle']);
            Route::post('/reorder',             [HeroSlideController::class, 'reorder']);
        });

        // Industries
        Route::prefix('industries')->group(function () {
            Route::get('/create',              [IndustryController::class, 'create']);
            Route::post('/',                   [IndustryController::class, 'store']);
            Route::get('/{industry}',          [IndustryController::class, 'edit']);
            Route::put('/{industry}',          [IndustryController::class, 'update']);
            Route::delete('/{industry}',       [IndustryController::class, 'destroy']);
            Route::patch('/{industry}/toggle', [IndustryController::class, 'toggle']);
        });

        // Services
        Route::prefix('services')->group(function () {
            Route::get('/create',       [ServiceController::class, 'create']);
            Route::post('/',            [ServiceController::class, 'store']);
            Route::get('/{service}',    [ServiceController::class, 'edit']);
            Route::put('/{service}',    [ServiceController::class, 'update']);
            Route::delete('/{service}', [ServiceController::class, 'destroy']);
        });

        // Media
        Route::prefix('media')->group(function () {
            Route::post('/',          [MediaController::class, 'store']);
            Route::put('/{media}',    [MediaController::class, 'update']);
            Route::delete('/{media}', [MediaController::class, 'destroy']);
        });

        // Menus
        Route::prefix('menus')->group(function () {
            Route::put('/{menu}',                                  [MenuController::class, 'updateMenu']);
            Route::post('/{menu}/items',                           [MenuController::class, 'storeItem']);
            Route::put('/{menu}/items/{item}',                     [MenuController::class, 'updateItem']);
            Route::patch('/{menu}/items/{item}',                   [MenuController::class, 'updateItem']);
            Route::delete('/{menu}/items/{item}',                  [MenuController::class, 'destroyItem']);
            Route::post('/{menu}/reorder',                         [MenuController::class, 'reorder']);
            Route::patch('/{menu}/items/{item}/toggle-visibility', [MenuController::class, 'toggleVisibility']);
        });

        // Pages
        Route::prefix('pages')->group(function () {
            Route::get('/drafts',    [PageController::class, 'drafts']);
            Route::get('/create',    [PageController::class, 'create']);
            Route::post('/',         [PageController::class, 'store']);
            Route::put('/{page}',    [PageController::class, 'update']);
            Route::delete('/{page}', [PageController::class, 'destroy']);
        });

        // Projects
        Route::prefix('projects')->group(function () {
            Route::get('/create',       [ProjectController::class, 'create']);
            Route::post('/',            [ProjectController::class, 'store']);
            Route::get('/{project}',    [ProjectController::class, 'edit']);
            Route::put('/{project}',    [ProjectController::class, 'update']);
            Route::delete('/{project}', [ProjectController::class, 'destroy']);
        });

        // SEO
        Route::prefix('seo')->group(function () {
            Route::post('/', [SeoSettingController::class, 'update']);
        });

        // Testimonials
        Route::prefix('testimonials')->group(function () {
            Route::post('/',                       [TestimonialController::class, 'store']);
            Route::put('/{testimonial}',           [TestimonialController::class, 'update']);
            Route::delete('/{testimonial}',        [TestimonialController::class, 'destroy']);
            Route::patch('/{testimonial}/approve', [TestimonialController::class, 'approve']);
            Route::patch('/{testimonial}/feature', [TestimonialController::class, 'feature']);
        });

        // Workflow
        Route::prefix('workflow')->group(function () {
            Route::get('/',                                  [WorkflowController::class, 'index']);
            Route::post('/{workflow}/move',                  [WorkflowController::class, 'move']);
            Route::get('/history/{contentType}/{contentId}', [WorkflowController::class, 'history']);
        });

        // Banners
        Route::prefix('banners')->group(function () {
            Route::post('/',                 [BannerController::class, 'store']);
            Route::put('/{banner}',          [BannerController::class, 'update']);
            Route::patch('/{banner}/toggle', [BannerController::class, 'toggle']);
            Route::delete('/{banner}',       [BannerController::class, 'destroy']);
        });

        // ✅ Knowledge — PROTECTED (admin writes only)
        // ⚠️  GET /articles and GET /categories are intentionally absent here.
        //     They are already registered as public routes above.
        //     Duplicating them here inside auth:sanctum causes a route conflict
        //     where Laravel matches the protected version and returns 401.
        Route::prefix('knowledge')->group(function () {
            // Categories (writes)
            Route::post('/categories',                    [KnowledgeController::class, 'categoriesStore']);
            Route::get('/categories/{category}',          [KnowledgeController::class, 'categoriesEdit']);
            Route::put('/categories/{category}',          [KnowledgeController::class, 'categoriesUpdate']);
            Route::patch('/categories/{category}',        [KnowledgeController::class, 'categoriesUpdate']);
            Route::delete('/categories/{category}',       [KnowledgeController::class, 'categoriesDestroy']);
            Route::patch('/categories/{category}/toggle', [KnowledgeController::class, 'categoriesToggle']);

            // Articles (writes)
            Route::post('/articles',                      [KnowledgeController::class, 'articlesStore']);
            Route::get('/articles/{article}',             [KnowledgeController::class, 'articlesEdit']);
            Route::put('/articles/{article}',             [KnowledgeController::class, 'articlesUpdate']);
            Route::patch('/articles/{article}',           [KnowledgeController::class, 'articlesUpdate']);
            Route::delete('/articles/{article}',          [KnowledgeController::class, 'articlesDestroy']);
            Route::patch('/articles/{article}/toggle',    [KnowledgeController::class, 'articlesToggle']);
        });

    }); // end

}); // end
