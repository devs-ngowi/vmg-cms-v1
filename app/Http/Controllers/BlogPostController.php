<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\BlogPost;
use App\Models\Category;
use App\Models\Media;
use App\Models\Tag;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class BlogPostController extends Controller
{
    // ── Helpers ───────────────────────────────────────────────────────────────

    private function sharedData(): array
    {
        return [
            'authors'    => Author::orderBy('name')->get(['id', 'name']),
            'categories' => Category::whereNull('parent_id')
                ->with('children:id,name,parent_id')
                ->orderBy('name')
                ->get(['id', 'name']),
            'tags'       => Tag::orderBy('name')->get(['id', 'name', 'slug']),
            'media'      => Media::orderByDesc('created_at')
                ->get(['id', 'filename', 'original_name', 'alt_text', 'mime_type']),
        ];
    }

    private function formatPost(BlogPost $post): array
    {
        return [
            'id'            => $post->id,
            'title'         => $post->title,
            'slug'          => $post->slug,
            'excerpt'       => $post->excerpt,
            'status'        => $post->status,
            'author'        => $post->author?->name,
            'categories'    => $post->categories->pluck('name'),
            'tags'          => $post->tags->pluck('name'),
            'workflow_step' => $post->latestWorkflowStep(),
            'featured_media' => $post->featuredMedia
                ? ['id' => $post->featuredMedia->id, 'filename' => $post->featuredMedia->filename, 'alt_text' => $post->featuredMedia->alt_text]
                : null,
            'published_at'  => $post->published_at?->format('Y-m-d'),
            'created_at'    => $post->created_at->format('Y-m-d'),
        ];
    }

    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(): Response
    {
        $posts = BlogPost::with(['author', 'featuredMedia', 'categories', 'tags'])
            ->latest()
            ->get()
            ->map(fn (BlogPost $post) => $this->formatPost($post));

        return Inertia::render('blog/index', [
            'posts' => $posts,
        ]);
    }

    // ── Categories index ──────────────────────────────────────────────────────

    public function categories(): Response
    {
        $categories = Category::withCount('children')
            ->with('parent:id,name')
            ->orderBy('name')
            ->get()
            ->map(fn (Category $cat) => [
                'id'            => $cat->id,
                'name'          => $cat->name,
                'slug'          => $cat->slug,
                'description'   => $cat->description,
                'parent'        => $cat->parent?->name,
                'children_count'=> $cat->children_count,
                'created_at'    => $cat->created_at->format('Y-m-d'),
            ]);

        $allCategories = Category::orderBy('name')->get(['id', 'name']);

        return Inertia::render('blog/categories', [
            'categories'    => $categories,
            'allCategories' => $allCategories,
        ]);
    }

    // ── Tags index ────────────────────────────────────────────────────────────

   public function tags(): Response
    {
        $tags = Tag::withCount(['blogPosts', 'pages', 'services'])
            ->orderBy('name')
            ->get()
            ->map(fn (Tag $tag) => [
                'id'          => $tag->id,
                'name'        => $tag->name,
                'slug'        => $tag->slug,
                'posts_count' => $tag->blog_posts_count + $tag->pages_count + $tag->services_count,
                'created_at'  => $tag->created_at->format('Y-m-d'),
            ]);

        return Inertia::render('blog/tags', [
            'tags' => $tags,
        ]);
    }

    // ── Create ────────────────────────────────────────────────────────────────

    public function create(): Response
    {
        return Inertia::render('blog/create', $this->sharedData());
    }

    // ── Store ─────────────────────────────────────────────────────────────────

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'title'        => ['required', 'string', 'max:191'],
            'slug'         => ['nullable', 'string', 'max:191', 'unique:blog_posts,slug'],
            'content'      => ['nullable', 'string'],
            'excerpt'      => ['nullable', 'string', 'max:500'],
            'author_id'    => ['nullable', 'exists:authors,id'],
            'media_id'     => ['nullable', 'exists:media,id'],
            'status'       => ['required', Rule::in(['draft', 'review', 'published', 'archived'])],
            'published_at' => ['nullable', 'date'],
            'category_ids' => ['array'],
            'category_ids.*' => ['exists:categories,id'],
            'tag_ids'      => ['array'],
            'tag_ids.*'    => ['exists:tags,id'],
            'media_ids'    => ['array'],
            'media_ids.*'  => ['exists:media,id'],
        ]);

        $post = BlogPost::create([
            'title'        => $data['title'],
            'slug'         => $data['slug'] ?? Str::slug($data['title']),
            'content'      => $data['content']      ?? null,
            'excerpt'      => $data['excerpt']      ?? null,
            'author_id'    => $data['author_id']    ?? null,
            'media_id'     => $data['media_id']     ?? null,
            'status'       => $data['status'],
            'published_at' => $data['published_at'] ?? null,
        ]);

        $post->categories()->sync($data['category_ids'] ?? []);
        $post->tags()->sync($data['tag_ids']            ?? []);

        if (!empty($data['media_ids'])) {
            $post->media()->sync(
                collect($data['media_ids'])->mapWithKeys(fn ($id, $i) => [$id => ['sort_order' => $i]])
            );
        }

        $post->workflows()->create([
            'content_type' => BlogPost::class,
            'step'         => $data['status'] === 'published' ? 'published' : 'draft',
            'assigned_by'  => auth()->id(),
            'assigned_to'  => auth()->id(),
        ]);

        return redirect()->route('blog.index')
            ->with('success', 'Post created successfully.');
    }

    // ── Edit ──────────────────────────────────────────────────────────────────

    public function edit(BlogPost $post): Response
    {
        $post->load(['author', 'featuredMedia', 'categories', 'tags', 'media']);

        return Inertia::render('blog/edit', array_merge($this->sharedData(), [
            'post' => [
                'id'           => $post->id,
                'title'        => $post->title,
                'slug'         => $post->slug,
                'content'      => $post->content,
                'excerpt'      => $post->excerpt,
                'author_id'    => $post->author_id,
                'media_id'     => $post->media_id,
                'status'       => $post->status,
                'published_at' => $post->published_at?->format('Y-m-d'),
                'category_ids' => $post->categories->pluck('id'),
                'tag_ids'      => $post->tags->pluck('id'),
                'media_ids'    => $post->media->pluck('id'),
                'workflow_step'=> $post->latestWorkflowStep(),
            ],
        ]));
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, BlogPost $post): RedirectResponse
    {
        $data = $request->validate([
            'title'        => ['required', 'string', 'max:191'],
            'slug'         => ['nullable', 'string', 'max:191', Rule::unique('blog_posts', 'slug')->ignore($post->id)],
            'content'      => ['nullable', 'string'],
            'excerpt'      => ['nullable', 'string', 'max:500'],
            'author_id'    => ['nullable', 'exists:authors,id'],
            'media_id'     => ['nullable', 'exists:media,id'],
            'status'       => ['required', Rule::in(['draft', 'review', 'published', 'archived'])],
            'published_at' => ['nullable', 'date'],
            'category_ids' => ['array'],
            'category_ids.*' => ['exists:categories,id'],
            'tag_ids'      => ['array'],
            'tag_ids.*'    => ['exists:tags,id'],
            'media_ids'    => ['array'],
            'media_ids.*'  => ['exists:media,id'],
            'workflow_notes' => ['nullable', 'string', 'max:1000'],
        ]);

        $oldStatus = $post->status;

        $post->update([
            'title'        => $data['title'],
            'slug'         => $data['slug'] ?? Str::slug($data['title']),
            'content'      => $data['content']      ?? null,
            'excerpt'      => $data['excerpt']      ?? null,
            'author_id'    => $data['author_id']    ?? null,
            'media_id'     => $data['media_id']     ?? null,
            'status'       => $data['status'],
            'published_at' => $data['published_at'] ?? null,
        ]);

        $post->categories()->sync($data['category_ids'] ?? []);
        $post->tags()->sync($data['tag_ids']            ?? []);

        if (!empty($data['media_ids'])) {
            $post->media()->sync(
                collect($data['media_ids'])->mapWithKeys(fn ($id, $i) => [$id => ['sort_order' => $i]])
            );
        } else {
            $post->media()->detach();
        }

        if ($oldStatus !== $data['status']) {
            $post->workflows()->create([
                'content_type' => BlogPost::class,
                'step'         => $data['status'],
                'assigned_by'  => auth()->id(),
                'assigned_to'  => auth()->id(),
                'notes'        => $data['workflow_notes'] ?? null,
            ]);
        }

        return redirect()->route('blog.index')
            ->with('success', 'Post updated successfully.');
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(BlogPost $post): RedirectResponse
    {
        $post->categories()->detach();
        $post->tags()->detach();
        $post->media()->detach();
        $post->workflows()->delete();
        $post->delete();

        return redirect()->route('blog.index')
            ->with('success', 'Post deleted successfully.');
    }

    // ── Category CRUD ─────────────────────────────────────────────────────────

    public function storeCategory(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'name'        => ['required', 'string', 'max:191', 'unique:categories,name'],
            'slug'        => ['nullable', 'string', 'max:191', 'unique:categories,slug'],
            'description' => ['nullable', 'string', 'max:500'],
            'parent_id'   => ['nullable', 'exists:categories,id'],
        ]);

        Category::create([
            'name'        => $data['name'],
            'slug'        => $data['slug'] ?? Str::slug($data['name']),
            'description' => $data['description'] ?? null,
            'parent_id'   => $data['parent_id']   ?? null,
        ]);

        return back()->with('success', 'Category created.');
    }

    public function destroyCategory(Category $category): RedirectResponse
    {
        if ($category->children()->exists()) {
            return back()->with('error', 'Cannot delete a category that has sub-categories.');
        }
        $category->delete();
        return back()->with('success', 'Category deleted.');
    }

    // ── Tag CRUD ──────────────────────────────────────────────────────────────

    public function storeTag(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:191', 'unique:tags,name'],
            'slug' => ['nullable', 'string', 'max:191', 'unique:tags,slug'],
        ]);

        Tag::create([
            'name' => $data['name'],
            'slug' => $data['slug'] ?? Str::slug($data['name']),
        ]);

        return back()->with('success', 'Tag created.');
    }

    public function destroyTag(Tag $tag): RedirectResponse
    {
        $tag->delete();
        return back()->with('success', 'Tag deleted.');
    }
}
