<?php

namespace App\Http\Controllers;

use App\Models\KnowledgeArticle;
use App\Models\KnowledgeCategory;
use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class KnowledgeController extends Controller
{
    private function isApi(Request $request): bool
    {
        return $request->expectsJson() || $request->wantsJson() || $request->is('api/*');
    }

    private function mediaList()
    {
        return Media::orderByDesc('created_at')
            ->get(['id', 'filename', 'original_name', 'alt_text', 'mime_type', 'is_icon', 'icon_class']);
    }

    // ── Format helpers ────────────────────────────────────────────────────────

    private function formatCategory(KnowledgeCategory $cat, bool $withChildren = false): array
    {
        $result = [
            'id'          => $cat->id,
            'name'        => $cat->name,
            'slug'        => $cat->slug,
            'description' => $cat->description,
            'parent_id'   => $cat->parent_id,
            'sort_order'  => $cat->sort_order,
            'is_active'   => (bool) $cat->is_active,
            'media'       => $cat->media ? $this->formatMedia($cat->media) : null,
            'article_count' => $cat->articles()->count(),
        ];

        if ($withChildren && $cat->relationLoaded('children')) {
            $result['children'] = $cat->children->map(fn ($c) => $this->formatCategory($c))->values();
        }

        return $result;
    }

    private function formatArticle(KnowledgeArticle $article, bool $withGallery = false): array
    {
        $result = [
            'id'          => $article->id,
            'title'       => $article->title,
            'slug'        => $article->slug,
            'excerpt'     => $article->excerpt,
            'content'     => $article->content,
            'category_id' => $article->category_id,
            'category'    => $article->relationLoaded('category') ? [
                'id'   => $article->category->id,
                'name' => $article->category->name,
                'slug' => $article->category->slug,
            ] : null,
            'sort_order'  => $article->sort_order,
            'is_active'   => (bool) $article->is_active,
            'is_featured' => (bool) $article->is_featured,
            'media'       => $article->media ? $this->formatMedia($article->media) : null,
            'created_at'  => $article->created_at->format('Y-m-d'),
        ];

        if ($withGallery && $article->relationLoaded('gallery')) {
            $result['gallery'] = $article->gallery->map(fn ($m) => $this->formatMedia($m))->values();
        }

        return $result;
    }

    private function formatMedia(Media $m): array
    {
        return [
            'id'         => $m->id,
            'filename'   => $m->filename,
            'alt_text'   => $m->alt_text,
            'is_icon'    => (bool) $m->is_icon,
            'icon_class' => $m->icon_class,
            'url'        => $m->filename ? url('storage/' . $m->filename) : null,
        ];
    }

    public function index(Request $request)
    {
            $categories = KnowledgeCategory::with(['media', 'children'])
                ->withCount('articles')
                ->orderBy('sort_order')
                ->get()
                ->map(fn ($c) => $this->formatCategory($c, true));

            $articles = KnowledgeArticle::with(['category', 'media'])
                ->orderBy('sort_order')
                ->get()
                ->map(fn ($a) => $this->formatArticle($a));
        if ($this->isApi($request)) {
            return response()->json(['success' => true, 'data' => $articles]);
        }

            return Inertia::render('knowledge/index', compact('categories', 'articles'));
        }

    // =========================================================================
    // CATEGORIES
    // =========================================================================

    public function categoriesIndex(Request $request)
    {
        $categories = KnowledgeCategory::with(['media', 'children'])
            ->withCount('articles')
            ->orderBy('sort_order')
            ->get()
            ->map(fn ($c) => $this->formatCategory($c, true));

        if ($this->isApi($request)) {
            return response()->json(['success' => true, 'data' => $categories]);
        }
        return Inertia::render('knowledge/categories/index', compact('categories'));
    }

    public function categoriesCreate(Request $request)
    {
        $parents = KnowledgeCategory::whereNull('parent_id')->orderBy('sort_order')->get(['id', 'name', 'slug']);

        if ($this->isApi($request)) {
            return response()->json(['success' => true, 'data' => ['media' => $this->mediaList(), 'parents' => $parents]]);
        }

        return Inertia::render('knowledge/categories/create', [
            'media'   => $this->mediaList(),
            'parents' => $parents,
        ]);
    }

    public function categoriesStore(Request $request)
    {
        $data = $request->validate([
            'name'        => ['required', 'string', 'max:191'],
            'slug'        => ['nullable', 'string', 'max:191', Rule::unique('knowledge_categories', 'slug')],
            'description' => ['nullable', 'string', 'max:2000'],
            'parent_id'   => ['nullable', 'exists:knowledge_categories,id'],
            'media_id'    => ['nullable', 'exists:media,id'],
            'sort_order'  => ['nullable', 'integer', 'min:0'],
            'is_active'   => ['boolean'],
        ]);

        $category = KnowledgeCategory::create([
            'name'        => $data['name'],
            'slug'        => $data['slug'] ?? Str::slug($data['name']),
            'description' => $data['description'] ?? null,
            'parent_id'   => $data['parent_id'] ?? null,
            'media_id'    => $data['media_id'] ?? null,
            'sort_order'  => $data['sort_order'] ?? 0,
            'is_active'   => $data['is_active'] ?? true,
        ]);

        if ($this->isApi($request)) {
            return response()->json(['success' => true, 'message' => 'Category created.', 'data' => $this->formatCategory($category->load('media'))], 201);
        }

        return redirect()->route('knowledge.categories.index')->with('success', 'Category created.');
    }

    public function categoriesEdit(Request $request, KnowledgeCategory $category)
    {
        $category->load('media');
        $parents = KnowledgeCategory::whereNull('parent_id')->where('id', '!=', $category->id)->orderBy('sort_order')->get(['id', 'name', 'slug']);

        if ($this->isApi($request)) {
            return response()->json(['success' => true, 'data' => $this->formatCategory($category)]);
        }

        return Inertia::render('knowledge/categories/edit', [
            'category' => [
                'id'          => $category->id,
                'name'        => $category->name,
                'slug'        => $category->slug,
                'description' => $category->description,
                'parent_id'   => $category->parent_id,
                'media_id'    => $category->media_id,
                'sort_order'  => $category->sort_order,
                'is_active'   => (bool) $category->is_active,
            ],
            'media'   => $this->mediaList(),
            'parents' => $parents,
        ]);
    }

    public function categoriesUpdate(Request $request, KnowledgeCategory $category)
    {
        $data = $request->validate([
            'name'        => ['required', 'string', 'max:191'],
            'slug'        => ['nullable', 'string', 'max:191', Rule::unique('knowledge_categories', 'slug')->ignore($category->id)],
            'description' => ['nullable', 'string', 'max:2000'],
            'parent_id'   => ['nullable', 'exists:knowledge_categories,id'],
            'media_id'    => ['nullable', 'exists:media,id'],
            'sort_order'  => ['nullable', 'integer', 'min:0'],
            'is_active'   => ['boolean'],
        ]);

        $category->update([
            'name'        => $data['name'],
            'slug'        => $data['slug'] ?? Str::slug($data['name']),
            'description' => $data['description'] ?? null,
            'parent_id'   => $data['parent_id'] ?? null,
            'media_id'    => $data['media_id'] ?? null,
            'sort_order'  => $data['sort_order'] ?? $category->sort_order,
            'is_active'   => $data['is_active'] ?? $category->is_active,
        ]);

        if ($this->isApi($request)) {
            return response()->json(['success' => true, 'message' => 'Category updated.', 'data' => $this->formatCategory($category->load('media'))]);
        }

        return redirect()->route('knowledge.categories.index')->with('success', 'Category updated.');
    }

    public function categoriesDestroy(Request $request, KnowledgeCategory $category)
    {
        $category->delete();

        if ($this->isApi($request)) {
            return response()->json(['success' => true, 'message' => 'Category deleted.']);
        }

        return redirect()->route('knowledge.categories.index')->with('success', 'Category deleted.');
    }

    public function categoriesToggle(Request $request, KnowledgeCategory $category)
    {
        $category->update(['is_active' => !$category->is_active]);

        if ($this->isApi($request)) {
            return response()->json(['success' => true, 'message' => $category->is_active ? 'Activated.' : 'Deactivated.']);
        }

        return back()->with('success', 'Category updated.');
    }

    // ── Public API (frontend) ─────────────────────────────────────────────────

    public function publicCategories(Request $request)
    {
        $categories = KnowledgeCategory::with(['media', 'children.media'])
            ->whereNull('parent_id')
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->get()
            ->map(fn ($c) => $this->formatCategory($c, true));

        return response()->json(['success' => true, 'data' => $categories]);
    }

    public function publicCategoryBySlug(Request $request, string $slug)
    {
        $category = KnowledgeCategory::with(['media', 'children.media', 'articles.media'])
            ->where('slug', $slug)
            ->where('is_active', true)
            ->firstOrFail();

        $data = $this->formatCategory($category, true);
        $data['articles'] = $category->articles->where('is_active', true)->map(fn ($a) => $this->formatArticle($a))->values();

        return response()->json(['success' => true, 'data' => $data]);
    }

    // =========================================================================
    // ARTICLES
    // =========================================================================

    public function articlesIndex(Request $request)
    {
        $articles = KnowledgeArticle::with(['category', 'media'])
            ->orderBy('sort_order')
            ->get()
            ->map(fn ($a) => $this->formatArticle($a));

        $categories = KnowledgeCategory::orderBy('name')->get(['id', 'name', 'slug', 'parent_id']);

        if ($this->isApi($request)) {
            return response()->json(['success' => true, 'data' => $articles]);
        }

        return Inertia::render('knowledge/articles/index', compact('articles', 'categories'));
    }

    public function articlesCreate(Request $request)
    {
        $categories = KnowledgeCategory::with('children')->whereNull('parent_id')->orderBy('sort_order')->get();
        $allCategories = KnowledgeCategory::orderBy('name')->get(['id', 'name', 'slug', 'parent_id']);

        if ($this->isApi($request)) {
            return response()->json(['success' => true, 'data' => ['media' => $this->mediaList(), 'categories' => $allCategories]]);
        }

        return Inertia::render('knowledge/articles/create', [
            'media'      => $this->mediaList(),
            'categories' => $allCategories,
        ]);
    }

    public function articlesStore(Request $request)
    {
        $data = $request->validate([
            'title'       => ['required', 'string', 'max:191'],
            'slug'        => ['nullable', 'string', 'max:191', Rule::unique('knowledge_articles', 'slug')],
            'category_id' => ['required', 'exists:knowledge_categories,id'],
            'excerpt'     => ['nullable', 'string', 'max:500'],
            'content'     => ['nullable', 'string'],
            'media_id'    => ['nullable', 'exists:media,id'],
            'media_ids'   => ['array'],
            'media_ids.*' => ['exists:media,id'],
            'sort_order'  => ['nullable', 'integer', 'min:0'],
            'is_active'   => ['boolean'],
            'is_featured' => ['boolean'],
        ]);

        $article = KnowledgeArticle::create([
            'title'       => $data['title'],
            'slug'        => $data['slug'] ?? Str::slug($data['title']),
            'category_id' => $data['category_id'],
            'excerpt'     => $data['excerpt'] ?? null,
            'content'     => $data['content'] ?? null,
            'media_id'    => $data['media_id'] ?? null,
            'sort_order'  => $data['sort_order'] ?? 0,
            'is_active'   => $data['is_active'] ?? true,
            'is_featured' => $data['is_featured'] ?? false,
        ]);

        if (!empty($data['media_ids'])) {
            $article->gallery()->sync(
                collect($data['media_ids'])->mapWithKeys(fn ($id, $i) => [$id => ['sort_order' => $i]])
            );
        }

        if ($this->isApi($request)) {
            return response()->json(['success' => true, 'message' => 'Article created.', 'data' => $this->formatArticle($article->load(['category', 'media', 'gallery']), true)], 201);
        }

        return redirect()->route('knowledge.articles.index')->with('success', 'Article created.');
    }

    public function articlesEdit(Request $request, KnowledgeArticle $article)
    {
        $article->load(['media', 'gallery']);
        $categories = KnowledgeCategory::orderBy('name')->get(['id', 'name', 'slug', 'parent_id']);

        if ($this->isApi($request)) {
            return response()->json(['success' => true, 'data' => $this->formatArticle($article, true)]);
        }

        return Inertia::render('knowledge/articles/edit', [
            'article' => [
                'id'          => $article->id,
                'title'       => $article->title,
                'slug'        => $article->slug,
                'category_id' => $article->category_id,
                'excerpt'     => $article->excerpt,
                'content'     => $article->content,
                'media_id'    => $article->media_id,
                'media_ids'   => $article->gallery->pluck('id')->toArray(),
                'sort_order'  => $article->sort_order,
                'is_active'   => (bool) $article->is_active,
                'is_featured' => (bool) $article->is_featured,
            ],
            'media'      => $this->mediaList(),
            'categories' => $categories,
        ]);
    }

    public function articlesUpdate(Request $request, KnowledgeArticle $article)
    {
        $data = $request->validate([
            'title'       => ['required', 'string', 'max:191'],
            'slug'        => ['nullable', 'string', 'max:191', Rule::unique('knowledge_articles', 'slug')->ignore($article->id)],
            'category_id' => ['required', 'exists:knowledge_categories,id'],
            'excerpt'     => ['nullable', 'string', 'max:500'],
            'content'     => ['nullable', 'string'],
            'media_id'    => ['nullable', 'exists:media,id'],
            'media_ids'   => ['array'],
            'media_ids.*' => ['exists:media,id'],
            'sort_order'  => ['nullable', 'integer', 'min:0'],
            'is_active'   => ['boolean'],
            'is_featured' => ['boolean'],
        ]);

        $article->update([
            'title'       => $data['title'],
            'slug'        => $data['slug'] ?? Str::slug($data['title']),
            'category_id' => $data['category_id'],
            'excerpt'     => $data['excerpt'] ?? null,
            'content'     => $data['content'] ?? null,
            'media_id'    => $data['media_id'] ?? null,
            'sort_order'  => $data['sort_order'] ?? $article->sort_order,
            'is_active'   => $data['is_active'] ?? $article->is_active,
            'is_featured' => $data['is_featured'] ?? $article->is_featured,
        ]);

        if (isset($data['media_ids'])) {
            $article->gallery()->sync(
                collect($data['media_ids'])->mapWithKeys(fn ($id, $i) => [$id => ['sort_order' => $i]])
            );
        }

        if ($this->isApi($request)) {
            return response()->json(['success' => true, 'message' => 'Article updated.', 'data' => $this->formatArticle($article->load(['category', 'media', 'gallery']), true)]);
        }

        return redirect()->route('knowledge.articles.index')->with('success', 'Article updated.');
    }

    public function articlesDestroy(Request $request, KnowledgeArticle $article)
    {
        $article->gallery()->detach();
        $article->delete();

        if ($this->isApi($request)) {
            return response()->json(['success' => true, 'message' => 'Article deleted.']);
        }

        return redirect()->route('knowledge.articles.index')->with('success', 'Article deleted.');
    }

    public function articlesToggle(Request $request, KnowledgeArticle $article)
    {
        $article->update(['is_active' => !$article->is_active]);

        if ($this->isApi($request)) {
            return response()->json(['success' => true, 'message' => $article->is_active ? 'Published.' : 'Unpublished.']);
        }

        return back()->with('success', 'Article updated.');
    }

    // ── Public: article by slug ───────────────────────────────────────────────

    public function publicArticleBySlug(Request $request, string $categorySlug, string $articleSlug)
    {
        $article = KnowledgeArticle::with(['category.parent', 'media', 'gallery'])
            ->whereHas('category', fn ($q) => $q->where('slug', $categorySlug))
            ->where('slug', $articleSlug)
            ->where('is_active', true)
            ->firstOrFail();

        return response()->json(['success' => true, 'data' => $this->formatArticle($article, true)]);
    }
}
