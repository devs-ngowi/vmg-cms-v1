<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\Category;
use App\Models\Media;
use App\Models\Project;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProjectController extends Controller
{
    // ── Helpers ───────────────────────────────────────────────────────────────

    private function isApi(Request $request): bool
    {
        return $request->expectsJson() || $request->wantsJson();
    }

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

    /** Used by admin list / featured list — no gallery, no description */
    private function formatProject(Project $project): array
    {
        return [
            'id'             => $project->id,
            'title'          => $project->title,
            'slug'           => $project->slug,
            'client_name'    => $project->client_name,
            'status'         => $project->status,
            'order_number'   => $project->order_number,
            'start_date'     => $project->start_date?->format('Y-m-d'),
            'end_date'       => $project->end_date?->format('Y-m-d'),
            'author'         => $project->author?->name,
            'categories'     => $project->categories->pluck('name'),
            'tags'           => $project->tags->pluck('name'),
            'workflow_step'  => $project->latestWorkflowStep(),
            'featured_image' => $project->featuredImage
                ? [
                    'id'       => $project->featuredImage->id,
                    'filename' => $project->featuredImage->filename,
                    'alt_text' => $project->featuredImage->alt_text,
                    'url'      => $project->featuredImage->url,
                ]
                : null,
            'created_at'     => $project->created_at->format('Y-m-d'),
        ];
    }

    /**
     * ✅ NEW: Full public detail shape — includes description and resolved gallery.
     * Used by the public-facing project detail page.
     */
    private function formatProjectDetail(Project $project): array
    {
        return [
            'id'             => $project->id,
            'title'          => $project->title,
            'slug'           => $project->slug,
            'description'    => $project->description,
            'client_name'    => $project->client_name,
            'start_date'     => $project->start_date?->format('Y-m-d'),
            'end_date'       => $project->end_date?->format('Y-m-d'),
            'author'         => $project->author?->name,
            'categories'     => $project->categories->pluck('name'),
            'tags'           => $project->tags->pluck('name'),
            'featured_image' => $project->featuredImage
                ? [
                    'id'       => $project->featuredImage->id,
                    'filename' => $project->featuredImage->filename,
                    'alt_text' => $project->featuredImage->alt_text,
                ]
                : null,
            // ✅ Gallery: only image-type media, ordered by pivot sort_order
            'gallery' => $project->media
                ->filter(fn (Media $m) => str_starts_with($m->mime_type ?? '', 'image/'))
                ->sortBy(fn (Media $m) => $m->pivot?->sort_order ?? 0)
                ->values()
                ->map(fn (Media $m) => [
                    'id'       => $m->id,
                    'filename' => $m->filename,
                    'alt_text' => $m->alt_text,
                    'url'      => $m->url,   // uses the model accessor
                ]),
        ];
    }

    private function validationRules(bool $isUpdate = false, ?Project $project = null): array
    {
        return [
            'title'             => ['required', 'string', 'max:191'],
            'slug'              => [
                'nullable', 'string', 'max:191',
                $isUpdate
                    ? Rule::unique('projects', 'slug')->ignore($project->id)
                    : Rule::unique('projects', 'slug'),
            ],
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
            ...($isUpdate ? ['workflow_notes' => ['nullable', 'string', 'max:1000']] : []),
        ];
    }

    private function buildPayload(array $data): array
    {
        return [
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
        ];
    }

    private function syncRelations(Project $project, array $data, bool $detachMedia = false): void
    {
        $project->categories()->sync($data['category_ids'] ?? []);
        $project->tags()->sync($data['tag_ids']            ?? []);

        if (!empty($data['media_ids'])) {
            $project->media()->sync(
                collect($data['media_ids'])->mapWithKeys(fn ($id, $i) => [$id => ['sort_order' => $i]])
            );
        } elseif ($detachMedia) {
            $project->media()->detach();
        }
    }

    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(Request $request)
    {
        $projects = Project::with(['featuredImage', 'author', 'categories', 'tags'])
            ->orderBy('order_number')
            ->get()
            ->map(fn (Project $p) => $this->formatProject($p));

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Projects retrieved successfully.',
                'data'    => $projects,
            ]);
        }

        return Inertia::render('projects/index', compact('projects'));
    }

    // ── Featured ──────────────────────────────────────────────────────────────

    public function featured(Request $request)
    {
        $projects = Project::with(['featuredImage', 'author', 'categories'])
            ->where('status', 'published')
            ->orderBy('order_number')
            ->get()
            ->map(fn (Project $p) => $this->formatProject($p));

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Featured projects retrieved successfully.',
                'data'    => $projects,
            ]);
        }

        return Inertia::render('projects/featured', compact('projects'));
    }

    // ── ✅ NEW: Public Show (by slug) ─────────────────────────────────────────

    /**
     * Public-facing endpoint for the project detail page.
     * Returns full project data including description and gallery.
     * Only returns published projects to the public.
     */
    public function show(Request $request, string $slug)
    {
        $project = Project::with(['featuredImage', 'author', 'categories', 'tags', 'media'])
            ->where('slug', $slug)
            ->where('status', 'published')
            ->firstOrFail();

        $detail = $this->formatProjectDetail($project);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Project retrieved successfully.',
                'data'    => $detail,
            ]);
        }

        return Inertia::render('projects/show', ['project' => $detail]);
    }

    // ── Create ────────────────────────────────────────────────────────────────

    public function create(Request $request)
    {
        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'data'    => $this->sharedData(),
            ]);
        }

        return Inertia::render('projects/create', $this->sharedData());
    }

    // ── Store ─────────────────────────────────────────────────────────────────

    public function store(Request $request)
    {
        $data = $request->validate($this->validationRules());

        $project = Project::create($this->buildPayload($data));

        $this->syncRelations($project, $data);

        $project->workflows()->create([
            'content_type' => Project::class,
            'step'         => $data['status'] === 'published' ? 'published' : 'draft',
            'assigned_by'  => auth()->id(),
            'assigned_to'  => auth()->id(),
        ]);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Project created successfully.',
                'data'    => $this->formatProject($project->load(['featuredImage', 'author', 'categories', 'tags'])),
            ], 201);
        }

        return redirect()->route('projects.index')
            ->with('success', 'Project created successfully.');
    }

    // ── Edit ──────────────────────────────────────────────────────────────────

    public function edit(Request $request, Project $project)
    {
        $project->load(['featuredImage', 'author', 'categories', 'tags', 'media']);

        $detail = [
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
        ];

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Project retrieved successfully.',
                'data'    => $detail,
            ]);
        }

        return Inertia::render('projects/edit', array_merge($this->sharedData(), [
            'project' => $detail,
        ]));
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, Project $project)
    {
        $data = $request->validate($this->validationRules(isUpdate: true, project: $project));

        $oldStatus = $project->status;

        $project->update($this->buildPayload($data));

        $this->syncRelations($project, $data, detachMedia: true);

        if ($oldStatus !== $data['status']) {
            $project->workflows()->create([
                'content_type' => Project::class,
                'step'         => $data['status'],
                'assigned_by'  => auth()->id(),
                'assigned_to'  => auth()->id(),
                'notes'        => $data['workflow_notes'] ?? null,
            ]);
        }

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Project updated successfully.',
                'data'    => $this->formatProject($project->load(['featuredImage', 'author', 'categories', 'tags'])),
            ]);
        }

        return redirect()->route('projects.index')
            ->with('success', 'Project updated successfully.');
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(Request $request, Project $project)
    {
        $project->categories()->detach();
        $project->tags()->detach();
        $project->media()->detach();
        $project->workflows()->delete();
        $project->delete();

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Project deleted successfully.',
            ]);
        }

        return redirect()->route('projects.index')
            ->with('success', 'Project deleted successfully.');
    }
}
