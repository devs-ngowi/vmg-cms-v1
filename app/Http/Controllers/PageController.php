<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\Category;
use App\Models\Media;
use App\Models\Page;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
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

    private function formatPage(Page $page): array
    {
        return [
            'id'               => $page->id,
            'title'            => $page->title,
            'slug'             => $page->slug,
            'status'           => $page->status,
            'author'           => $page->author?->name,
            'categories'       => $page->categories->pluck('name'),
            'tags'             => $page->tags->pluck('name'),
            'workflow_step'    => $page->latestWorkflowStep(),
            'published_at'     => $page->published_at?->format('Y-m-d'),
            'created_at'       => $page->created_at->format('Y-m-d'),
        ];
    }

    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(): Response
    {
        $pages = Page::with(['author', 'categories', 'tags'])
            ->latest()
            ->get()
            ->map(fn (Page $page) => $this->formatPage($page));

        return Inertia::render('pages/index', [
            'pages' => $pages,
        ]);
    }

    // ── Drafts ────────────────────────────────────────────────────────────────

    public function drafts(): Response
    {
        $pages = Page::with(['author', 'categories', 'tags'])
            ->where('status', 'draft')
            ->latest()
            ->get()
            ->map(fn (Page $page) => $this->formatPage($page));

        return Inertia::render('pages/drafts', [
            'pages' => $pages,
        ]);
    }

    // ── Create ────────────────────────────────────────────────────────────────

    public function create(): Response
    {
        return Inertia::render('pages/create', $this->sharedData());
    }

    // ── Store ─────────────────────────────────────────────────────────────────

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'title'            => ['required', 'string', 'max:191'],
            'slug'             => ['nullable', 'string', 'max:191', 'unique:pages,slug'],
            'content'          => ['nullable', 'string'],
            'meta_title'       => ['nullable', 'string', 'max:191'],
            'meta_description' => ['nullable', 'string', 'max:500'],
            'status'           => ['required', Rule::in(['draft', 'review', 'published', 'archived'])],
            'author_id'        => ['nullable', 'exists:authors,id'],
            'published_at'     => ['nullable', 'date'],
            'category_ids'     => ['array'],
            'category_ids.*'   => ['exists:categories,id'],
            'tag_ids'          => ['array'],
            'tag_ids.*'        => ['exists:tags,id'],
            'media_ids'        => ['array'],
            'media_ids.*'      => ['exists:media,id'],
        ]);

        $page = Page::create([
            'title'            => $data['title'],
            'slug'             => $data['slug'] ?? Str::slug($data['title']),
            'content'          => $data['content']          ?? null,
            'meta_title'       => $data['meta_title']       ?? null,
            'meta_description' => $data['meta_description'] ?? null,
            'status'           => $data['status'],
            'author_id'        => $data['author_id']        ?? null,
            'published_at'     => $data['published_at']     ?? null,
        ]);

        // Sync polymorphic relations
        $page->categories()->sync($data['category_ids'] ?? []);
        $page->tags()->sync($data['tag_ids']            ?? []);

        if (!empty($data['media_ids'])) {
            $page->media()->sync(
                collect($data['media_ids'])->mapWithKeys(fn ($id, $i) => [$id => ['sort_order' => $i]])
            );
        }

        // Create initial workflow record
        $page->workflows()->create([
            'content_type' => Page::class,
            'step'         => $data['status'] === 'published' ? 'published' : 'draft',
            'assigned_by'  => auth()->id(),
            'assigned_to'  => auth()->id(),
        ]);

        return redirect()->route('pages.index')
            ->with('success', 'Page created successfully.');
    }

    // ── Edit ──────────────────────────────────────────────────────────────────

    public function edit(Page $page): Response
    {
        $page->load(['categories', 'tags', 'media', 'author']);

        return Inertia::render('pages/edit', array_merge($this->sharedData(), [
            'page' => [
                'id'               => $page->id,
                'title'            => $page->title,
                'slug'             => $page->slug,
                'content'          => $page->content,
                'meta_title'       => $page->meta_title,
                'meta_description' => $page->meta_description,
                'status'           => $page->status,
                'author_id'        => $page->author_id,
                'published_at'     => $page->published_at?->format('Y-m-d'),
                'category_ids'     => $page->categories->pluck('id'),
                'tag_ids'          => $page->tags->pluck('id'),
                'media_ids'        => $page->media->pluck('id'),
                'workflow_step'    => $page->latestWorkflowStep(),
            ],
        ]));
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, Page $page): RedirectResponse
    {
        $data = $request->validate([
            'title'            => ['required', 'string', 'max:191'],
            'slug'             => ['nullable', 'string', 'max:191', Rule::unique('pages', 'slug')->ignore($page->id)],
            'content'          => ['nullable', 'string'],
            'meta_title'       => ['nullable', 'string', 'max:191'],
            'meta_description' => ['nullable', 'string', 'max:500'],
            'status'           => ['required', Rule::in(['draft', 'review', 'published', 'archived'])],
            'author_id'        => ['nullable', 'exists:authors,id'],
            'published_at'     => ['nullable', 'date'],
            'category_ids'     => ['array'],
            'category_ids.*'   => ['exists:categories,id'],
            'tag_ids'          => ['array'],
            'tag_ids.*'        => ['exists:tags,id'],
            'media_ids'        => ['array'],
            'media_ids.*'      => ['exists:media,id'],
            'workflow_notes'   => ['nullable', 'string', 'max:1000'],
        ]);

        $oldStatus = $page->status;

        $page->update([
            'title'            => $data['title'],
            'slug'             => $data['slug'] ?? Str::slug($data['title']),
            'content'          => $data['content']          ?? null,
            'meta_title'       => $data['meta_title']       ?? null,
            'meta_description' => $data['meta_description'] ?? null,
            'status'           => $data['status'],
            'author_id'        => $data['author_id']        ?? null,
            'published_at'     => $data['published_at']     ?? null,
        ]);

        $page->categories()->sync($data['category_ids'] ?? []);
        $page->tags()->sync($data['tag_ids']            ?? []);

        if (!empty($data['media_ids'])) {
            $page->media()->sync(
                collect($data['media_ids'])->mapWithKeys(fn ($id, $i) => [$id => ['sort_order' => $i]])
            );
        } else {
            $page->media()->detach();
        }

        // Log workflow step change
        if ($oldStatus !== $data['status']) {
            $page->workflows()->create([
                'content_type' => Page::class,
                'step'         => $data['status'],
                'assigned_by'  => auth()->id(),
                'assigned_to'  => auth()->id(),
                'notes'        => $data['workflow_notes'] ?? null,
            ]);
        }

        return redirect()->route('pages.index')
            ->with('success', 'Page updated successfully.');
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(Page $page): RedirectResponse
    {
        $page->categories()->detach();
        $page->tags()->detach();
        $page->media()->detach();
        $page->workflows()->delete();
        $page->delete();

        return redirect()->route('pages.index')
            ->with('success', 'Page deleted successfully.');
    }
}
