<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Media;
use App\Models\Service;
use App\Models\ServicePackage;
use App\Models\ServiceSubPackage;
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

    private function formatSubPackage(ServiceSubPackage $sp): array
    {
        return [
            'id'                => $sp->id,
            'title'             => $sp->title,
            'slug'              => $sp->slug,
            'short_description' => $sp->short_description,
            'description'       => $sp->description,
            'website_url'       => $sp->website_url,       // ← new
            'features'          => $sp->features ?? [],
            'order_number'      => $sp->order_number,
            'status'            => $sp->status,
            'published_on_site' => (bool) $sp->published_on_site, // ← new
        ];
    }

    private function formatPackage(ServicePackage $package): array
    {
        return [
            'id'                => $package->id,
            'title'             => $package->title,
            'slug'              => $package->slug,
            'short_description' => $package->short_description,
            'description'       => $package->description,
            'features'          => $package->features ?? [],
            'order_number'      => $package->order_number,
            'status'            => $package->status,
            'sub_packages'      => $package->subPackages
                ->map(fn (ServiceSubPackage $sp) => $this->formatSubPackage($sp))
                ->values(),
        ];
    }

    private function formatService(Service $service): array
    {
        return [
            'id'                => $service->id,
            'title'             => $service->title,
            'slug'              => $service->slug,
            'short_description' => $service->short_description,
            'description'       => $service->description,
            'icon'              => $service->icon,
            'website_url'       => $service->website_url,
            'website_logo'      => $service->websiteLogo
                ? [
                    'id'       => $service->websiteLogo->id,
                    'url'      => url(Storage::url($service->websiteLogo->filename)),
                    'alt_text' => $service->websiteLogo->alt_text,
                ]
                : null,
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
            'packages'          => $service->packages
                ->map(fn (ServicePackage $p) => $this->formatPackage($p))
                ->values(),
            'categories'        => $service->categories->pluck('name'),
            'tags'              => $service->tags->pluck('name'),
            'workflow_step'     => $service->latestWorkflowStep(),
            'created_at'        => $service->created_at->format('Y-m-d'),
        ];
    }

    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(Request $request)
    {
        $services = Service::with([
            'image',
            'websiteLogo',
            'packages.subPackages',
            'categories',
            'tags',
        ])
            ->orderBy('order_number')
            ->get()
            ->map(fn (Service $s) => $this->formatService($s));

        if ($request->expectsJson()) {
            return response()->json(['success' => true, 'data' => $services]);
        }

        return Inertia::render('services/index', ['services' => $services]);
    }

    // ── Show ──────────────────────────────────────────────────────────────────

    public function show(Request $request, string $slug)
    {
        $service = Service::where('slug', $slug)
            ->where('status', 'published')
            ->with([
                'image',
                'websiteLogo',
                'packages.subPackages',
                'categories',
                'tags',
            ])
            ->firstOrFail();

        $formatted = $this->formatService($service);

        if ($request->expectsJson()) {
            return response()->json(['success' => true, 'data' => $formatted]);
        }

        return view('services.show', ['service' => $formatted]);
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
            'title'                                                       => ['required', 'string', 'max:191'],
            'slug'                                                        => ['nullable', 'string', 'max:191', 'unique:services,slug'],
            'short_description'                                           => ['nullable', 'string', 'max:500'],
            'description'                                                 => ['nullable', 'string'],
            'icon'                                                        => ['nullable', 'string', 'max:100'],
            'website_url'                                                 => ['nullable', 'url', 'max:500'],
            'website_logo_id'                                             => ['nullable', 'exists:media,id'],
            'image_id'                                                    => ['nullable', 'exists:media,id'],
            'order_number'                                                => ['nullable', 'integer', 'min:0'],
            'status'                                                      => ['required', Rule::in(['draft', 'review', 'published', 'archived'])],
            'category_ids'                                                => ['array'],
            'category_ids.*'                                              => ['exists:categories,id'],
            'tag_ids'                                                     => ['array'],
            'tag_ids.*'                                                   => ['exists:tags,id'],
            'media_ids'                                                   => ['array'],
            'media_ids.*'                                                 => ['exists:media,id'],
            // Packages
            'packages'                                                    => ['array'],
            'packages.*.title'                                            => ['required_with:packages', 'string', 'max:255'],
            'packages.*.short_description'                                => ['nullable', 'string'],
            'packages.*.description'                                      => ['nullable', 'string'],
            'packages.*.features'                                         => ['nullable', 'array'],
            'packages.*.order_number'                                     => ['nullable', 'integer'],
            // Sub-packages
            'packages.*.sub_packages'                                     => ['nullable', 'array'],
            'packages.*.sub_packages.*.title'                             => ['required_with:packages.*.sub_packages', 'string', 'max:255'],
            'packages.*.sub_packages.*.short_description'                 => ['nullable', 'string'],
            'packages.*.sub_packages.*.description'                       => ['nullable', 'string'],
            'packages.*.sub_packages.*.website_url'                       => ['nullable', 'url', 'max:500'], // ← new
            'packages.*.sub_packages.*.features'                          => ['nullable', 'array'],
            'packages.*.sub_packages.*.order_number'                      => ['nullable', 'integer'],
            'packages.*.sub_packages.*.published_on_site'                 => ['nullable', 'boolean'],        // ← new
        ]);

        $service = Service::create([
            'title'             => $data['title'],
            'slug'              => $data['slug'] ?? Str::slug($data['title']),
            'short_description' => $data['short_description'] ?? null,
            'description'       => $data['description']       ?? null,
            'icon'              => $data['icon']              ?? null,
            'website_url'       => $data['website_url']       ?? null,
            'website_logo_id'   => $data['website_logo_id']   ?? null,
            'image_id'          => $data['image_id']          ?? null,
            'order_number'      => $data['order_number']      ?? 0,
            'status'            => $data['status'],
        ]);

        foreach ($data['packages'] ?? [] as $i => $pkg) {
            $newPackage = ServicePackage::create([
                'service_id'        => $service->id,
                'title'             => $pkg['title'],
                'slug'              => Str::slug($pkg['title']),
                'short_description' => $pkg['short_description'] ?? null,
                'description'       => $pkg['description']       ?? null,
                'features'          => $pkg['features']          ?? [],
                'order_number'      => $pkg['order_number']      ?? $i,
                'status'            => 'published',
            ]);

            foreach ($pkg['sub_packages'] ?? [] as $j => $sub) {
                ServiceSubPackage::create([
                    'service_package_id' => $newPackage->id,
                    'title'              => $sub['title'],
                    'slug'               => Str::slug($sub['title']),
                    'short_description'  => $sub['short_description']  ?? null,
                    'description'        => $sub['description']         ?? null,
                    'website_url'        => $sub['website_url']         ?? null,  // ← new
                    'features'           => $sub['features']            ?? [],
                    'order_number'       => $sub['order_number']        ?? $j,
                    'status'             => 'published',
                    'published_on_site'  => $sub['published_on_site']   ?? true,  // ← new
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

    public function edit(Service $service): Response
    {
        $service->load([
            'image',
            'websiteLogo',
            'categories',
            'tags',
            'media',
            'allPackages.allSubPackages',
        ]);

        return Inertia::render('services/edit', array_merge($this->sharedData(), [
            'service' => [
                'id'                => $service->id,
                'title'             => $service->title,
                'slug'              => $service->slug,
                'short_description' => $service->short_description,
                'description'       => $service->description,
                'icon'              => $service->icon,
                'website_url'       => $service->website_url,
                'website_logo_id'   => $service->website_logo_id,
                'image_id'          => $service->image_id,
                'order_number'      => $service->order_number,
                'status'            => $service->status,
                'category_ids'      => $service->categories->pluck('id'),
                'tag_ids'           => $service->tags->pluck('id'),
                'media_ids'         => $service->media->pluck('id'),
                'packages'          => $service->allPackages->map(fn (ServicePackage $p) => [
                    'id'                => $p->id,
                    'title'             => $p->title,
                    'short_description' => $p->short_description,
                    'description'       => $p->description,
                    'features'          => $p->features ?? [],
                    'order_number'      => $p->order_number,
                    'sub_packages'      => $p->allSubPackages->map(fn (ServiceSubPackage $sp) => [
                        'id'                => $sp->id,
                        'title'             => $sp->title,
                        'short_description' => $sp->short_description,
                        'description'       => $sp->description,
                        'website_url'       => $sp->website_url,       // ← new
                        'features'          => $sp->features ?? [],
                        'order_number'      => $sp->order_number,
                        'published_on_site' => (bool) $sp->published_on_site, // ← new
                    ])->values(),
                ])->values(),
                'workflow_step'     => $service->latestWorkflowStep(),
            ],
        ]));
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, Service $service): RedirectResponse
    {
        $data = $request->validate([
            'title'                                                       => ['required', 'string', 'max:191'],
            'slug'                                                        => ['nullable', 'string', 'max:191', Rule::unique('services', 'slug')->ignore($service->id)],
            'short_description'                                           => ['nullable', 'string', 'max:500'],
            'description'                                                 => ['nullable', 'string'],
            'icon'                                                        => ['nullable', 'string', 'max:100'],
            'website_url'                                                 => ['nullable', 'url', 'max:500'],
            'website_logo_id'                                             => ['nullable', 'exists:media,id'],
            'image_id'                                                    => ['nullable', 'exists:media,id'],
            'order_number'                                                => ['nullable', 'integer', 'min:0'],
            'status'                                                      => ['required', Rule::in(['draft', 'review', 'published', 'archived'])],
            'category_ids'                                                => ['array'],
            'category_ids.*'                                              => ['exists:categories,id'],
            'tag_ids'                                                     => ['array'],
            'tag_ids.*'                                                   => ['exists:tags,id'],
            'media_ids'                                                   => ['array'],
            'media_ids.*'                                                 => ['exists:media,id'],
            'workflow_notes'                                              => ['nullable', 'string', 'max:1000'],
            // Packages
            'packages'                                                    => ['array'],
            'packages.*.id'                                               => ['nullable', 'exists:service_packages,id'],
            'packages.*.title'                                            => ['required_with:packages', 'string', 'max:255'],
            'packages.*.short_description'                                => ['nullable', 'string'],
            'packages.*.description'                                      => ['nullable', 'string'],
            'packages.*.features'                                         => ['nullable', 'array'],
            'packages.*.order_number'                                     => ['nullable', 'integer'],
            // Sub-packages
            'packages.*.sub_packages'                                     => ['nullable', 'array'],
            'packages.*.sub_packages.*.id'                                => ['nullable', 'exists:service_sub_packages,id'],
            'packages.*.sub_packages.*.title'                             => ['required_with:packages.*.sub_packages', 'string', 'max:255'],
            'packages.*.sub_packages.*.short_description'                 => ['nullable', 'string'],
            'packages.*.sub_packages.*.description'                       => ['nullable', 'string'],
            'packages.*.sub_packages.*.website_url'                       => ['nullable', 'url', 'max:500'], // ← new
            'packages.*.sub_packages.*.features'                          => ['nullable', 'array'],
            'packages.*.sub_packages.*.order_number'                      => ['nullable', 'integer'],
            'packages.*.sub_packages.*.published_on_site'                 => ['nullable', 'boolean'],        // ← new
        ]);

        $oldStatus = $service->status;

        $service->update([
            'title'             => $data['title'],
            'slug'              => $data['slug'] ?? Str::slug($data['title']),
            'short_description' => $data['short_description'] ?? null,
            'description'       => $data['description']       ?? null,
            'icon'              => $data['icon']              ?? null,
            'website_url'       => $data['website_url']       ?? null,
            'website_logo_id'   => $data['website_logo_id']   ?? null,
            'image_id'          => $data['image_id']          ?? null,
            'order_number'      => $data['order_number']      ?? 0,
            'status'            => $data['status'],
        ]);

        if (!empty($data['packages'])) {
            $existingPackageIds = [];

            foreach ($data['packages'] as $i => $pkg) {
                if (!empty($pkg['id'])) {
                    $package = ServicePackage::findOrFail($pkg['id']);
                    $package->update([
                        'title'             => $pkg['title'],
                        'slug'              => Str::slug($pkg['title']),
                        'short_description' => $pkg['short_description'] ?? null,
                        'description'       => $pkg['description']       ?? null,
                        'features'          => $pkg['features']          ?? [],
                        'order_number'      => $pkg['order_number']      ?? $i,
                    ]);
                } else {
                    $package = ServicePackage::create([
                        'service_id'        => $service->id,
                        'title'             => $pkg['title'],
                        'slug'              => Str::slug($pkg['title']),
                        'short_description' => $pkg['short_description'] ?? null,
                        'description'       => $pkg['description']       ?? null,
                        'features'          => $pkg['features']          ?? [],
                        'order_number'      => $pkg['order_number']      ?? $i,
                        'status'            => 'published',
                    ]);
                }

                $existingPackageIds[] = $package->id;
                $existingSubIds       = [];

                foreach ($pkg['sub_packages'] ?? [] as $j => $sub) {
                    if (!empty($sub['id'])) {
                        $subPackage = ServiceSubPackage::findOrFail($sub['id']);
                        $subPackage->update([
                            'title'              => $sub['title'],
                            'slug'               => Str::slug($sub['title']),
                            'short_description'  => $sub['short_description']  ?? null,
                            'description'        => $sub['description']         ?? null,
                            'website_url'        => $sub['website_url']         ?? null,  // ← new
                            'features'           => $sub['features']            ?? [],
                            'order_number'       => $sub['order_number']        ?? $j,
                            'published_on_site'  => $sub['published_on_site']   ?? true,  // ← new
                        ]);
                    } else {
                        $subPackage = ServiceSubPackage::create([
                            'service_package_id' => $package->id,
                            'title'              => $sub['title'],
                            'slug'               => Str::slug($sub['title']),
                            'short_description'  => $sub['short_description']  ?? null,
                            'description'        => $sub['description']         ?? null,
                            'website_url'        => $sub['website_url']         ?? null,  // ← new
                            'features'           => $sub['features']            ?? [],
                            'order_number'       => $sub['order_number']        ?? $j,
                            'status'             => 'published',
                            'published_on_site'  => $sub['published_on_site']   ?? true,  // ← new
                        ]);
                    }

                    $existingSubIds[] = $subPackage->id;
                }

                $package->allSubPackages()
                    ->whereNotIn('id', $existingSubIds)
                    ->delete();
            }

            $service->allPackages()
                ->whereNotIn('id', $existingPackageIds)
                ->delete();
        } else {
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

    public function destroy(Request $request, Service $service): RedirectResponse
    {
        $service->allPackages()->delete();
        $service->categories()->detach();
        $service->tags()->detach();
        $service->media()->detach();
        $service->workflows()->delete();
        $service->delete();

        return redirect()->route('services.index')
            ->with('success', 'Service deleted successfully.');
    }
}
