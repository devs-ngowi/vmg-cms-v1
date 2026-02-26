<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\BlogPostController;
use App\Http\Controllers\ClientLogoController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\HeroSlideController;
use App\Http\Controllers\IndustryController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SeoSettingController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SiteSettingController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WorkflowController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// ── Root ──────────────────────────────────────────────
Route::get('/', fn () => redirect()->route('dashboard'))->name('home');

// ── Guest routes ──────────────────────────────────────
Route::middleware('guest')->group(function () {
    Route::get('/login',           [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login',          [AuthController::class, 'login'])->name('login.submit');
    Route::get('/register',        [AuthController::class, 'showRegister'])->name('register');
    Route::post('/register',       [AuthController::class, 'register'])->name('register.submit');
    Route::get('/forgot-password', fn () => Inertia::render('auth/forgot-password', [
        'status' => session('status'),
    ]))->name('password.request');
});

// ── Authenticated routes ───────────────────────────────
Route::middleware('auth')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    // ── Overview ──────────────────────────────────────
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // ── Auth & Users ──────────────────────────────────
    Route::get('/users',              [UserController::class, 'index'])->name('users.index');
    Route::get('/users/create',       [UserController::class, 'create'])->name('users.create');
    Route::post('/users',             [UserController::class, 'store'])->name('users.store');
    Route::get('/users/{user}/edit',  [UserController::class, 'edit'])->name('users.edit');
    Route::patch('/users/{user}',     [UserController::class, 'update'])->name('users.update');
    Route::delete('/users/{user}',    [UserController::class, 'destroy'])->name('users.destroy');

    //roles
    Route::get('/roles',             [RoleController::class, 'index'])->name('roles.index');
    Route::get('/roles/create',      [RoleController::class, 'create'])->name('roles.create');
    Route::post('/roles',            [RoleController::class, 'store'])->name('roles.store');
    Route::get('/roles/{role}/edit', [RoleController::class, 'edit'])->name('roles.edit');
    Route::patch('/roles/{role}',    [RoleController::class, 'update'])->name('roles.update');
    Route::delete('/roles/{role}',   [RoleController::class, 'destroy'])->name('roles.destroy');

    Route::get('/authors',               [AuthorController::class, 'index'])->name('authors.index');
    Route::get('/authors/create',        [AuthorController::class, 'create'])->name('authors.create');
    Route::post('/authors',              [AuthorController::class, 'store'])->name('authors.store');
    Route::get('/authors/{author}/edit', [AuthorController::class, 'edit'])->name('authors.edit');
    Route::patch('/authors/{author}',    [AuthorController::class, 'update'])->name('authors.update');
    Route::delete('/authors/{author}',   [AuthorController::class, 'destroy'])->name('authors.destroy');

    // ── Pages ─────────────────────────────────────────
    Route::get('/pages',              [PageController::class, 'index'])->name('pages.index');
    Route::get('/pages/drafts',       [PageController::class, 'drafts'])->name('pages.drafts');
    Route::get('/pages/create',       [PageController::class, 'create'])->name('pages.create');
    Route::post('/pages',             [PageController::class, 'store'])->name('pages.store');
    Route::get('/pages/{page}/edit',  [PageController::class, 'edit'])->name('pages.edit');
    Route::patch('/pages/{page}',     [PageController::class, 'update'])->name('pages.update');
    Route::delete('/pages/{page}',    [PageController::class, 'destroy'])->name('pages.destroy');

    // ── Services ──────────────────────────────────────
    Route::get('/services',                [ServiceController::class, 'index'])->name('services.index');
    Route::get('/services/create',         [ServiceController::class, 'create'])->name('services.create');
    Route::post('/services',               [ServiceController::class, 'store'])->name('services.store');
    Route::get('/services/{service}/edit', [ServiceController::class, 'edit'])->name('services.edit');
    Route::patch('/services/{service}',    [ServiceController::class, 'update'])->name('services.update');
    Route::delete('/services/{service}',   [ServiceController::class, 'destroy'])->name('services.destroy');

    // ── Industries ────────────────────────────────────
    Route::get('/industries',                   [IndustryController::class, 'index'])->name('industries.index');
    Route::get('/industries/create',            [IndustryController::class, 'create'])->name('industries.create');
    Route::post('/industries',                  [IndustryController::class, 'store'])->name('industries.store');
    Route::get('/industries/{industry}/edit',   [IndustryController::class, 'edit'])->name('industries.edit');
    Route::patch('/industries/{industry}',      [IndustryController::class, 'update'])->name('industries.update');
    Route::patch('/industries/{industry}/toggle', [IndustryController::class, 'toggle'])->name('industries.toggle');
    Route::delete('/industries/{industry}',     [IndustryController::class, 'destroy'])->name('industries.destroy');

    // ── Projects ──────────────────────────────────────
    Route::get('/projects',                   [ProjectController::class, 'index'])->name('projects.index');
    Route::get('/projects/featured',          [ProjectController::class, 'featured'])->name('projects.featured');
    Route::get('/projects/create',            [ProjectController::class, 'create'])->name('projects.create');
    Route::post('/projects',                  [ProjectController::class, 'store'])->name('projects.store');
    Route::get('/projects/{project}/edit',    [ProjectController::class, 'edit'])->name('projects.edit');
    Route::patch('/projects/{project}',       [ProjectController::class, 'update'])->name('projects.update');
    Route::delete('/projects/{project}',      [ProjectController::class, 'destroy'])->name('projects.destroy');

    // ── Blog / Insights ───────────────────────────────
    Route::get('/blog',                    [BlogPostController::class, 'index'])->name('blog.index');
    Route::get('/blog/create',             [BlogPostController::class, 'create'])->name('blog.create');
    Route::post('/blog',                   [BlogPostController::class, 'store'])->name('blog.store');
    Route::get('/blog/{post}/edit',        [BlogPostController::class, 'edit'])->name('blog.edit');
    Route::patch('/blog/{post}',           [BlogPostController::class, 'update'])->name('blog.update');
    Route::delete('/blog/{post}',          [BlogPostController::class, 'destroy'])->name('blog.destroy');

    // Categories & Tags management
    Route::get('/blog/categories',                      [BlogPostController::class, 'categories'])->name('blog.categories');
    Route::post('/blog/categories',                     [BlogPostController::class, 'storeCategory'])->name('blog.categories.store');
    Route::delete('/blog/categories/{category}',        [BlogPostController::class, 'destroyCategory'])->name('blog.categories.destroy');
    Route::get('/blog/tags',                            [BlogPostController::class, 'tags'])->name('blog.tags');
    Route::post('/blog/tags',                           [BlogPostController::class, 'storeTag'])->name('blog.tags.store');
    Route::delete('/blog/tags/{tag}',                   [BlogPostController::class, 'destroyTag'])->name('blog.tags.destroy');

    // ── Vacancies ─────────────────────────────────────
    Route::get('/vacancies',         fn () => Inertia::render('vacancies/index'))->name('vacancies.index');
    Route::get('/vacancies/create',  fn () => Inertia::render('vacancies/create'))->name('vacancies.create');
    Route::get('/vacancies/expired', fn () => Inertia::render('vacancies/expired'))->name('vacancies.expired');

    // ── Assets ────────────────────────────────────────
    Route::get('/media',         [MediaController::class, 'index'])->name('media.index');
    Route::post('/media',        [MediaController::class, 'store'])->name('media.store');
    Route::patch('/media/{media}', [MediaController::class, 'update'])->name('media.update');
    Route::delete('/media/{media}', [MediaController::class, 'destroy'])->name('media.destroy');

    // ── Forms & Inquiries ─────────────────────────────
    Route::get('/forms',               [FormController::class, 'index'])->name('forms.index');
    Route::get('/forms/create',        [FormController::class, 'create'])->name('forms.create');
    Route::post('/forms',              [FormController::class, 'store'])->name('forms.store');
    Route::get('/forms/{form}/edit',   [FormController::class, 'edit'])->name('forms.edit');
    Route::patch('/forms/{form}',      [FormController::class, 'update'])->name('forms.update');
    Route::patch('/forms/{form}/toggle', [FormController::class, 'toggle'])->name('forms.toggle');
    Route::delete('/forms/{form}',     [FormController::class, 'destroy'])->name('forms.destroy');

    // ── Submissions ────────────────────────────────────
    Route::get('/submissions',                          [FormController::class, 'submissions'])->name('submissions.index');
    Route::get('/submissions/{submission}',             [FormController::class, 'showSubmission'])->name('submissions.show');
    Route::patch('/submissions/{submission}',           [FormController::class, 'updateSubmission'])->name('submissions.update');
    Route::delete('/submissions/{submission}',          [FormController::class, 'destroySubmission'])->name('submissions.destroy');

    // ── Publishing ────────────────────────────────────
    Route::get('/workflow',                                    [WorkflowController::class, 'index'])->name('workflow.index');
    Route::patch('/workflow/{workflow}/move',                  [WorkflowController::class, 'move'])->name('workflow.move');
    Route::get('/workflow/history/{contentType}/{contentId}',  [WorkflowController::class, 'history'])->name('workflow.history');

    // ── Site Configuration ────────────────────────────
    Route::get('/banners/create', [BannerController::class, 'create'])->name('banners.create');
    Route::get('/banners', [BannerController::class, 'index'])->name('banners.index');
    Route::get('/banners/{banner}/edit', [BannerController::class, 'edit'])->name('banners.edit');
    Route::get('/banners/{banner}', [BannerController::class, 'show'])->name('banners.show');
    Route::post('/banners', [BannerController::class, 'store'])->name('banners.store');
    Route::put('/banners/{banner}', [BannerController::class, 'update'])->name('banners.update');
    Route::patch('/banners/{banner}', [BannerController::class, 'update']);
    Route::patch('/banners/{banner}/toggle', [BannerController::class, 'toggle'])->name('banners.toggle');
    Route::delete('/banners/{banner}', [BannerController::class, 'destroy'])->name('banners.destroy');

    Route::get('/hero-slides',                   [HeroSlideController::class, 'index'])->name('hero-slides.index');
    Route::get('/hero-slides/create',            [HeroSlideController::class, 'create'])->name('hero-slides.create');
    Route::post('/hero-slides',                  [HeroSlideController::class, 'store'])->name('hero-slides.store');
    Route::get('/hero-slides/{heroSlide}/edit',  [HeroSlideController::class, 'edit'])->name('hero-slides.edit');
    Route::patch('/hero-slides/{heroSlide}',     [HeroSlideController::class, 'update'])->name('hero-slides.update');
    Route::patch('/hero-slides/{heroSlide}/toggle', [HeroSlideController::class, 'toggle'])->name('hero-slides.toggle');
    Route::post('/hero-slides/reorder',          [HeroSlideController::class, 'reorder'])->name('hero-slides.reorder');
    Route::delete('/hero-slides/{heroSlide}',    [HeroSlideController::class, 'destroy'])->name('hero-slides.destroy');

    Route::get('/client-logos',                        [ClientLogoController::class, 'index'])->name('client-logos.index');
    Route::post('/client-logos',                       [ClientLogoController::class, 'store'])->name('client-logos.store');
    Route::post('/client-logos/reorder',               [ClientLogoController::class, 'reorder'])->name('client-logos.reorder');
    Route::patch('/client-logos/{clientLogo}',         [ClientLogoController::class, 'update'])->name('client-logos.update');
    Route::patch('/client-logos/{clientLogo}/toggle',  [ClientLogoController::class, 'toggle'])->name('client-logos.toggle');
    Route::delete('/client-logos/{clientLogo}',        [ClientLogoController::class, 'destroy'])->name('client-logos.destroy');

    Route::get('/testimonials',                          [TestimonialController::class, 'index'])->name('testimonials.index');
    Route::post('/testimonials',                         [TestimonialController::class, 'store'])->name('testimonials.store');
    Route::patch('/testimonials/{testimonial}',          [TestimonialController::class, 'update'])->name('testimonials.update');
    Route::patch('/testimonials/{testimonial}/approve',  [TestimonialController::class, 'approve'])->name('testimonials.approve');
    Route::patch('/testimonials/{testimonial}/feature',  [TestimonialController::class, 'feature'])->name('testimonials.feature');
    Route::delete('/testimonials/{testimonial}',         [TestimonialController::class, 'destroy'])->name('testimonials.destroy');

    Route::get('/settings',  [SiteSettingController::class, 'index'])->name('settings.index');
    Route::post('/settings', [SiteSettingController::class, 'update'])->name('settings.update');

    // ── SEO & Navigation ──────────────────────────────
    Route::get('/seo',  [SeoSettingController::class, 'index'])->name('seo.index');
    Route::post('/seo', [SeoSettingController::class, 'update'])->name('seo.update');

    // ✅ MENU ROUTES - Fixed to match naming convention
    Route::get('/menus/primary',                               [MenuController::class, 'primary'])->name('menus.primary');
    Route::get('/menus/footer',                                [MenuController::class, 'footer'])->name('menus.footer');
    Route::patch('/menus/{menu}',                              [MenuController::class, 'updateMenu'])->name('menus.update');
    Route::post('/menus/{menu}/items',                         [MenuController::class, 'storeItem'])->name('menus.items.store');
    Route::patch('/menus/{menu}/items/{item}',                 [MenuController::class, 'updateItem'])->name('menus.items.update');
    Route::delete('/menus/{menu}/items/{item}',                [MenuController::class, 'destroyItem'])->name('menus.items.destroy');
    Route::post('/menus/{menu}/reorder',                       [MenuController::class, 'reorder'])->name('menus.reorder');
    Route::patch('/menus/{menu}/items/{item}/toggle-visibility', [MenuController::class, 'toggleVisibility'])->name('menus.items.toggle-visibility');

    // ── Analytics & Logs ──────────────────────────────
    Route::get('/analytics/page-views', fn () => Inertia::render('analytics/page-views'))->name('analytics.page-views');
    Route::get('/analytics/audit-log',  fn () => Inertia::render('analytics/audit-log'))->name('analytics.audit-log');
});
