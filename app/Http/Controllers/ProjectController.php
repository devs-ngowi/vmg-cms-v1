<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\Category;
use App\Models\Media;
use App\Models\Project;
use App\Models\Tag;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
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

    private function formatProject(Project $project): array
    {
        return [
            'id'            => $project->id,
            'title'         => $project->title,
            'slug'          => $project->slug,
            'client_name'   => $project->client_name,
            'status'        => $project->status,
            'order_number'  => $project->order_number,
            'start_date'    => $project->start_date?->format('Y-m-d'),
            'end_date'      => $project->end_date?->format('Y-m-d'),
            'author'        => $project->author?->name,
            'categories'    => $project->categories->pluck('name'),
            'tags'          => $project->tags->pluck('name'),
            'workflow_step' => $project->latestWorkflowStep(),
            'featured_image' => $project->featuredImage
                ? ['id' => $project->featuredImage->id, 'filename' => $project->featuredImage->filename, 'alt_text' => $project->featuredImage->alt_text]
                : null,
            'created_at'    => $project->created_at->format('Y-m-d'),
        ];
    }

    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(): Response
    {
        $projects = Project::with(['featuredImage', 'author', 'categories', 'tags'])
            ->orderBy('order_number')
            ->get()
            ->map(fn (Project $p) => $this->formatProject($p));

        return Inertia::render('projects/index', [
            'projects' => $projects,
        ]);
    }

    // ── Featured ──────────────────────────────────────────────────────────────

    public function featured(): Response
    {
        $projects = Project::with(['featuredImage', 'author', 'categories'])
            ->where('status', 'published')
            ->orderBy('order_number')
            ->get()
            ->map(fn (Project $p) => $this->formatProject($p));

        return Inertia::render('projects/featured', [
            'projects' => $projects,
        ]);
    }

    // ── Create ────────────────────────────────────────────────────────────────

    public function create(): Response
    {
        return Inertia::render('projects/create', $this->sharedData());
    }

    // ── Store ─────────────────────────────────────────────────────────────────

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'title'             => ['required', 'string', 'max:191'],
            'slug'              => ['nullable', 'string', 'max:191', 'unique:projects,slug'],
            'description'       => ['nullable', 'string'],
            'client_name'       => ['nullable', 'string', 'max:191'],
            'start_date'        => ['nullable', 'date'],
            'end_date'          => ['nullable', 'date', 'after_or_equal:start_date'],
            'featured_image_id' => ['nullable', 'exists:media,id'],
            'author_id'         => ['nullable', 'exists:authors,id'],
            'order_number'      => ['nullable', 'integer', 'min:0'],
            'status'            => ['required', Rule::in(['draft', 'review', 'published', 'archived'])],
            'category_ids'      => ['array'],
            'category_ids.*'    => ['exists:categories,id'],
            'tag_ids'           => ['array'],
            'tag_ids.*'         => ['exists:tags,id'],
            'media_ids'         => ['array'],
            'media_ids.*'       => ['exists:media,id'],
        ]);

        $project = Project::create([
            'title'             => $data['title'],
            'slug'              => $data['slug'] ?? Str::slug($data['title']),
            'description'       => $data['description']       ?? null,
            'client_name'       => $data['client_name']       ?? null,
            'start_date'        => $data['start_date']        ?? null,
            'end_date'          => $data['end_date']          ?? null,
            'featured_image_id' => $data['featured_image_id'] ?? null,
            'author_id'         => $data['author_id']         ?? null,
            'order_number'      => $data['order_number']      ?? 0,
            'status'            => $data['status'],
        ]);

        $project->categories()->sync($data['category_ids'] ?? []);
        $project->tags()->sync($data['tag_ids']            ?? []);

        if (!empty($data['media_ids'])) {
            $project->media()->sync(
                collect($data['media_ids'])->mapWithKeys(fn ($id, $i) => [$id => ['sort_order' => $i]])
            );
        }

        $project->workflows()->create([
            'content_type' => Project::class,
            'step'         => $data['status'] === 'published' ? 'published' : 'draft',
            'assigned_by'  => auth()->id(),
            'assigned_to'  => auth()->id(),
        ]);

        return redirect()->route('projects.index')
            ->with('success', 'Project created successfully.');
    }

    // ── Edit ──────────────────────────────────────────────────────────────────

    public function edit(Project $project): Response
    {
        $project->load(['featuredImage', 'author', 'categories', 'tags', 'media']);

        return Inertia::render('projects/edit', array_merge($this->sharedData(), [
            'project' => [
                'id'                => $project->id,
                'title'             => $project->title,
                'slug'              => $project->slug,
                'description'       => $project->description,
                'client_name'       => $project->client_name,
                'start_date'        => $project->start_date?->format('Y-m-d'),
                'end_date'          => $project->end_date?->format('Y-m-d'),
                'featured_image_id' => $project->featured_image_id,
                'author_id'         => $project->author_id,
                'order_number'      => $project->order_number,
                'status'            => $project->status,
                'category_ids'      => $project->categories->pluck('id'),
                'tag_ids'           => $project->tags->pluck('id'),
                'media_ids'         => $project->media->pluck('id'),
                'workflow_step'     => $project->latestWorkflowStep(),
            ],
        ]));
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, Project $project): RedirectResponse
    {
        $data = $request->validate([
            'title'             => ['required', 'string', 'max:191'],
            'slug'              => ['nullable', 'string', 'max:191', Rule::unique('projects', 'slug')->ignore($project->id)],
            'description'       => ['nullable', 'string'],
            'client_name'       => ['nullable', 'string', 'max:191'],
            'start_date'        => ['nullable', 'date'],
            'end_date'          => ['nullable', 'date', 'after_or_equal:start_date'],
            'featured_image_id' => ['nullable', 'exists:media,id'],
            'author_id'         => ['nullable', 'exists:authors,id'],
            'order_number'      => ['nullable', 'integer', 'min:0'],
            'status'            => ['required', Rule::in(['draft', 'review', 'published', 'archived'])],
            'category_ids'      => ['array'],
            'category_ids.*'    => ['exists:categories,id'],
            'tag_ids'           => ['array'],
            'tag_ids.*'         => ['exists:tags,id'],
            'media_ids'         => ['array'],
            'media_ids.*'       => ['exists:media,id'],
            'workflow_notes'    => ['nullable', 'string', 'max:1000'],
        ]);

        $oldStatus = $project->status;

        $project->update([
            'title'             => $data['title'],
            'slug'              => $data['slug'] ?? Str::slug($data['title']),
            'description'       => $data['description']       ?? null,
            'client_name'       => $data['client_name']       ?? null,
            'start_date'        => $data['start_date']        ?? null,
            'end_date'          => $data['end_date']          ?? null,
            'featured_image_id' => $data['featured_image_id'] ?? null,
            'author_id'         => $data['author_id']         ?? null,
            'order_number'      => $data['order_number']      ?? 0,
            'status'            => $data['status'],
        ]);

        $project->categories()->sync($data['category_ids'] ?? []);
        $project->tags()->sync($data['tag_ids']            ?? []);

        if (!empty($data['media_ids'])) {
            $project->media()->sync(
                collect($data['media_ids'])->mapWithKeys(fn ($id, $i) => [$id => ['sort_order' => $i]])
            );
        } else {
            $project->media()->detach();
        }

        if ($oldStatus !== $data['status']) {
            $project->workflows()->create([
                'content_type' => Project::class,
                'step'         => $data['status'],
                'assigned_by'  => auth()->id(),
                'assigned_to'  => auth()->id(),
                'notes'        => $data['workflow_notes'] ?? null,
            ]);
        }

        return redirect()->route('projects.index')
            ->with('success', 'Project updated successfully.');
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(Project $project): RedirectResponse
    {
        $project->categories()->detach();
        $project->tags()->detach();
        $project->media()->detach();
        $project->workflows()->delete();
        $project->delete();

        return redirect()->route('projects.index')
            ->with('success', 'Project deleted successfully.');
    }
}
