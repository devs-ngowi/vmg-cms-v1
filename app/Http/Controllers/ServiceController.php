<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Media;
use App\Models\Service;
use App\Models\Tag;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class ServiceController extends Controller
{
    // ── Helpers ───────────────────────────────────────────────────────────────

    private function sharedData(): array
    {
        return [
            'categories' => Category::whereNull('parent_id')
                ->with('children:id,name,parent_id')
                ->orderBy('name')
                ->get(['id', 'name']),
            'tags'       => Tag::orderBy('name')->get(['id', 'name', 'slug']),
            'media'      => Media::orderByDesc('created_at')
                ->get(['id', 'filename', 'original_name', 'alt_text', 'mime_type']),
        ];
    }

    private function formatService(Service $service): array
    {
        return [
            'id'                => $service->id,
            'title'             => $service->title,
            'slug'              => $service->slug,
            'short_description' => $service->short_description,
            'icon'              => $service->icon,
            'order_number'      => $service->order_number,
            'status'            => $service->status,
            'image'             => $service->image
                ? ['id' => $service->image->id, 'filename' => $service->image->filename, 'alt_text' => $service->image->alt_text]
                : null,
            'categories'        => $service->categories->pluck('name'),
            'tags'              => $service->tags->pluck('name'),
            'workflow_step'     => $service->latestWorkflowStep(),
            'created_at'        => $service->created_at->format('Y-m-d'),
        ];
    }

    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(): Response
    {
        $services = Service::with(['image', 'categories', 'tags'])
            ->orderBy('order_number')
            ->get()
            ->map(fn (Service $s) => $this->formatService($s));

        return Inertia::render('services/index', [
            'services' => $services,
        ]);
    }

    // ── Create ────────────────────────────────────────────────────────────────

    public function create(): Response
    {
        return Inertia::render('services/create', $this->sharedData());
    }

    // ── Store ─────────────────────────────────────────────────────────────────

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'title'             => ['required', 'string', 'max:191'],
            'slug'              => ['nullable', 'string', 'max:191', 'unique:services,slug'],
            'short_description' => ['nullable', 'string', 'max:500'],
            'description'       => ['nullable', 'string'],
            'icon'              => ['nullable', 'string', 'max:100'],
            'image_id'          => ['nullable', 'exists:media,id'],
            'order_number'      => ['nullable', 'integer', 'min:0'],
            'status'            => ['required', Rule::in(['draft', 'review', 'published', 'archived'])],
            'category_ids'      => ['array'],
            'category_ids.*'    => ['exists:categories,id'],
            'tag_ids'           => ['array'],
            'tag_ids.*'         => ['exists:tags,id'],
            'media_ids'         => ['array'],
            'media_ids.*'       => ['exists:media,id'],
        ]);

        $service = Service::create([
            'title'             => $data['title'],
            'slug'              => $data['slug'] ?? Str::slug($data['title']),
            'short_description' => $data['short_description'] ?? null,
            'description'       => $data['description']       ?? null,
            'icon'              => $data['icon']              ?? null,
            'image_id'          => $data['image_id']          ?? null,
            'order_number'      => $data['order_number']      ?? 0,
            'status'            => $data['status'],
        ]);

        $service->categories()->sync($data['category_ids'] ?? []);
        $service->tags()->sync($data['tag_ids']            ?? []);

        if (!empty($data['media_ids'])) {
            $service->media()->sync(
                collect($data['media_ids'])->mapWithKeys(fn ($id, $i) => [$id => ['sort_order' => $i]])
            );
        }

        $service->workflows()->create([
            'content_type' => Service::class,
            'step'         => $data['status'] === 'published' ? 'published' : 'draft',
            'assigned_by'  => auth()->id(),
            'assigned_to'  => auth()->id(),
        ]);

        return redirect()->route('services.index')
            ->with('success', 'Service created successfully.');
    }

    // ── Edit ──────────────────────────────────────────────────────────────────

    public function edit(Service $service): Response
    {
        $service->load(['image', 'categories', 'tags', 'media']);

        return Inertia::render('services/edit', array_merge($this->sharedData(), [
            'service' => [
                'id'                => $service->id,
                'title'             => $service->title,
                'slug'              => $service->slug,
                'short_description' => $service->short_description,
                'description'       => $service->description,
                'icon'              => $service->icon,
                'image_id'          => $service->image_id,
                'order_number'      => $service->order_number,
                'status'            => $service->status,
                'category_ids'      => $service->categories->pluck('id'),
                'tag_ids'           => $service->tags->pluck('id'),
                'media_ids'         => $service->media->pluck('id'),
                'workflow_step'     => $service->latestWorkflowStep(),
            ],
        ]));
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, Service $service): RedirectResponse
    {
        $data = $request->validate([
            'title'             => ['required', 'string', 'max:191'],
            'slug'              => ['nullable', 'string', 'max:191', Rule::unique('services', 'slug')->ignore($service->id)],
            'short_description' => ['nullable', 'string', 'max:500'],
            'description'       => ['nullable', 'string'],
            'icon'              => ['nullable', 'string', 'max:100'],
            'image_id'          => ['nullable', 'exists:media,id'],
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

        $oldStatus = $service->status;

        $service->update([
            'title'             => $data['title'],
            'slug'              => $data['slug'] ?? Str::slug($data['title']),
            'short_description' => $data['short_description'] ?? null,
            'description'       => $data['description']       ?? null,
            'icon'              => $data['icon']              ?? null,
            'image_id'          => $data['image_id']          ?? null,
            'order_number'      => $data['order_number']      ?? 0,
            'status'            => $data['status'],
        ]);

        $service->categories()->sync($data['category_ids'] ?? []);
        $service->tags()->sync($data['tag_ids']            ?? []);

        if (!empty($data['media_ids'])) {
            $service->media()->sync(
                collect($data['media_ids'])->mapWithKeys(fn ($id, $i) => [$id => ['sort_order' => $i]])
            );
        } else {
            $service->media()->detach();
        }

        if ($oldStatus !== $data['status']) {
            $service->workflows()->create([
                'content_type' => Service::class,
                'step'         => $data['status'],
                'assigned_by'  => auth()->id(),
                'assigned_to'  => auth()->id(),
                'notes'        => $data['workflow_notes'] ?? null,
            ]);
        }

        return redirect()->route('services.index')
            ->with('success', 'Service updated successfully.');
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(Service $service): RedirectResponse
    {
        $service->categories()->detach();
        $service->tags()->detach();
        $service->media()->detach();
        $service->workflows()->delete();
        $service->delete();

        return redirect()->route('services.index')
            ->with('success', 'Service deleted successfully.');
    }
}
