<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Media;
use App\Models\Service;
use App\Models\ServicePackage;
use App\Models\Tag;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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

    /**
     * Format package for API response
     */
    private function formatPackage(ServicePackage $package): array
    {
        return [
            'id'                  => $package->id,
            'title'               => $package->title,
            'slug'                => $package->slug,
            'short_description'   => $package->short_description,
            'description'         => $package->description,
            'features'            => $package->features ?? [],
            'order_number'        => $package->order_number,
            'status'              => $package->status,
        ];
    }

    /**
     * Format service for API response
     */
    private function formatService(Service $service): array
    {
        return [
            'id'                => $service->id,
            'title'             => $service->title,
            'slug'              => $service->slug,
            'short_description' => $service->short_description,
            'description'       => $service->description,
            'icon'              => $service->icon,
            'order_number'      => $service->order_number,
            'status'            => $service->status,
            'image'             => $service->image
                ? [
                    'id'       => $service->image->id,
                    'filename' => $service->image->filename,
                    'url'      => url(Storage::url($service->image->filename)),
                    'alt_text' => $service->image->alt_text,
                ]
                : null,
            // ✅ NEW: Include packages
            'packages'          => $service->packages->map(fn (ServicePackage $p) => $this->formatPackage($p)),
            'categories'        => $service->categories->pluck('name'),
            'tags'              => $service->tags->pluck('name'),
            'workflow_step'     => $service->latestWorkflowStep(),
            'created_at'        => $service->created_at->format('Y-m-d'),
        ];
    }

    // ── Index ─────────────────────────────────────────────────────────────────

    /**
     * List all services with packages
     */
    public function index(Request $request)
    {
        $services = Service::with(['image', 'packages', 'categories', 'tags'])
            ->orderBy('order_number')
            ->get()
            ->map(fn (Service $s) => $this->formatService($s));

        // 🟢 API Response
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'data'    => $services,
            ]);
        }

        // 👁️ View Response (Admin Panel)
        return Inertia::render('services/index', [
            'services' => $services,
        ]);
    }

    // ── Show (Public) ─────────────────────────────────────────────────────────

    /**
     * Get single service by slug with all packages
     */
    public function show(Request $request, $slug)
    {
        $service = Service::where('slug', $slug)
            ->where('status', 'published')
            ->with(['image', 'packages', 'categories', 'tags'])
            ->firstOrFail();

        $formatted = $this->formatService($service);

        // 🟢 API Response
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'data'    => $formatted,
            ]);
        }

        // 👁️ View Response
        return view('services.show', ['service' => $formatted]);
    }

    // ── Create ────────────────────────────────────────────────────────────────

    /**
     * Show create form
     */
    public function create(): Response
    {
        return Inertia::render('services/create', $this->sharedData());
    }

    // ── Store ─────────────────────────────────────────────────────────────────

    /**
     * Store new service with packages
     */
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
            // ✅ NEW: Packages validation
            'packages'          => ['array'],
            'packages.*.title'  => ['required_with:packages', 'string', 'max:255'],
            'packages.*.short_description' => ['required_with:packages', 'string'],
            'packages.*.description' => ['nullable', 'string'],
            'packages.*.features' => ['nullable', 'array'],
            'packages.*.order_number' => ['nullable', 'integer'],
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

        // ✅ Create packages
        if (!empty($data['packages'])) {
            foreach ($data['packages'] as $i => $pkg) {
                ServicePackage::create([
                    'service_id'         => $service->id,
                    'title'              => $pkg['title'],
                    'slug'               => Str::slug($pkg['title']),
                    'short_description'  => $pkg['short_description'],
                    'description'        => $pkg['description']      ?? null,
                    'features'           => $pkg['features']         ?? [],
                    'order_number'       => $pkg['order_number']     ?? $i,
                    'status'             => 'published',
                ]);
            }
        }

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

    /**
     * Show edit form
     */
    public function edit(Service $service): Response
    {
        $service->load(['image', 'packages', 'categories', 'tags', 'media']);

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
                // ✅ Include packages
                'packages'          => $service->allPackages->map(fn (ServicePackage $p) => [
                    'id'                  => $p->id,
                    'title'               => $p->title,
                    'short_description'   => $p->short_description,
                    'description'         => $p->description,
                    'features'            => $p->features ?? [],
                    'order_number'        => $p->order_number,
                ])->values(),
                'workflow_step'     => $service->latestWorkflowStep(),
            ],
        ]));
    }

    // ── Update ────────────────────────────────────────────────────────────────

    /**
     * Update service and packages
     */
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
            // ✅ Packages validation
            'packages'          => ['array'],
            'packages.*.id'     => ['nullable', 'exists:service_packages,id'],
            'packages.*.title'  => ['required_with:packages', 'string', 'max:255'],
            'packages.*.short_description' => ['required_with:packages', 'string'],
            'packages.*.description' => ['nullable', 'string'],
            'packages.*.features' => ['nullable', 'array'],
            'packages.*.order_number' => ['nullable', 'integer'],
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

        // ✅ Sync packages
        if (!empty($data['packages'])) {
            $existingPackageIds = [];

            foreach ($data['packages'] as $i => $pkg) {
                if (!empty($pkg['id'])) {
                    // Update existing package
                    $package = ServicePackage::findOrFail($pkg['id']);
                    $package->update([
                        'title'              => $pkg['title'],
                        'slug'               => Str::slug($pkg['title']),
                        'short_description'  => $pkg['short_description'],
                        'description'        => $pkg['description']  ?? null,
                        'features'           => $pkg['features']     ?? [],
                        'order_number'       => $pkg['order_number'] ?? $i,
                    ]);
                    $existingPackageIds[] = $package->id;
                } else {
                    // Create new package
                    $newPackage = ServicePackage::create([
                        'service_id'         => $service->id,
                        'title'              => $pkg['title'],
                        'slug'               => Str::slug($pkg['title']),
                        'short_description'  => $pkg['short_description'],
                        'description'        => $pkg['description']  ?? null,
                        'features'           => $pkg['features']     ?? [],
                        'order_number'       => $pkg['order_number'] ?? $i,
                        'status'             => 'published',
                    ]);
                    $existingPackageIds[] = $newPackage->id;
                }
            }

            // Delete packages not in the update
            $service->allPackages()
                ->whereNotIn('id', $existingPackageIds)
                ->delete();
        } else {
            // Delete all packages if none provided
            $service->allPackages()->delete();
        }

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

    /**
     * Delete service and all associated packages
     */
    public function destroy(Request $request, Service $service): RedirectResponse
    {
        $service->allPackages()->delete(); // ✅ Delete packages first
        $service->categories()->detach();
        $service->tags()->detach();
        $service->media()->detach();
        $service->workflows()->delete();
        $service->delete();

        return redirect()->route('services.index')
            ->with('success', 'Service deleted successfully.');
    }
}
