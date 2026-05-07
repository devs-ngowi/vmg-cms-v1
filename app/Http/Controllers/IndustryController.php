<?php

namespace App\Http\Controllers;

use App\Models\Industry;
use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class IndustryController extends Controller
{
    private function isApi(Request $request): bool
    {
        return $request->expectsJson() || $request->wantsJson() || $request->is('api/*');
    }

    private function mediaList(): \Illuminate\Support\Collection
    {
        return Media::orderByDesc('created_at')
            ->get(['id', 'filename', 'original_name', 'alt_text', 'mime_type', 'is_icon', 'icon_class']);
    }

    private function formatIndustry(Industry $industry, bool $withGallery = false): array
    {
        $media = $industry->media;

        $result = [
            'id'          => $industry->id,
            'name'        => $industry->name,
            'slug'        => $industry->slug,
            'description' => $industry->description,
            'sort_order'  => $industry->sort_order,
            'is_active'   => (bool) $industry->is_active,
            'media'       => $media ? [
                'id'         => $media->id,
                'filename'   => $media->filename,
                'alt_text'   => $media->alt_text,
                'is_icon'    => (bool) $media->is_icon,
                'icon_class' => $media->icon_class,
                'url'        => $media->filename
                    ? url('storage/' . $media->filename)
                    : null,
            ] : null,
            'created_at'  => $industry->created_at->format('Y-m-d'),
        ];

        // ✅ Include gallery only for detail view
        if ($withGallery && $industry->relationLoaded('gallery')) {
            $result['gallery'] = $industry->gallery->map(fn (Media $m) => [
                'id'       => $m->id,
                'filename' => $m->filename,
                'alt_text' => $m->alt_text,
                'url'      => $m->filename ? url('storage/' . $m->filename) : null,
                'is_icon'  => (bool) $m->is_icon,
            ])->values();
        }

        return $result;
    }

    private function validationRules(bool $isUpdate = false, ?Industry $industry = null): array
    {
        return [
            'name'        => ['required', 'string', 'max:191'],
            'slug'        => [
                'nullable', 'string', 'max:191',
                $isUpdate
                    ? Rule::unique('industries', 'slug')->ignore($industry->id)
                    : Rule::unique('industries', 'slug'),
            ],
            'description' => ['nullable', 'string', 'max:2000'],
            'media_id'    => ['nullable', 'exists:media,id'],
            'sort_order'  => ['nullable', 'integer', 'min:0'],
            'is_active'   => ['boolean'],
            'media_ids'   => ['array'],
            'media_ids.*' => ['exists:media,id'],
        ];
    }

    private function buildPayload(array $data): array
    {
        return [
            'name'        => $data['name'],
            'slug'        => $data['slug'] ?? Str::slug($data['name']),
            'description' => $data['description'] ?? null,
            'media_id'    => $data['media_id']    ?? null,
            'sort_order'  => $data['sort_order']  ?? 0,
            'is_active'   => $data['is_active']   ?? true,
        ];
    }

    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(Request $request)
    {
        $industries = Industry::with('media')
            ->orderBy('sort_order')
            ->get()
            ->map(fn (Industry $i) => $this->formatIndustry($i));

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Industries retrieved successfully.',
                'data'    => $industries,
            ]);
        }

        return Inertia::render('industries/index', compact('industries'));
    }

    // ── Show (public, by slug) ────────────────────────────────────────────────

    public function show(Request $request, string $slug)
    {
        $industry = Industry::with(['media', 'gallery'])
            ->where('slug', $slug)
            ->where('is_active', true)
            ->firstOrFail();

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Industry retrieved successfully.',
                'data'    => $this->formatIndustry($industry, withGallery: true),
            ]);
        }

        return Inertia::render('industries/show', [
            'industry' => $this->formatIndustry($industry, withGallery: true),
        ]);
    }

    // ── Create ────────────────────────────────────────────────────────────────

    public function create(Request $request)
    {
        if ($this->isApi($request)) {
            return response()->json(['success' => true, 'data' => ['media' => $this->mediaList()]]);
        }

        return Inertia::render('industries/create', ['media' => $this->mediaList()]);
    }

    // ── Store ─────────────────────────────────────────────────────────────────

    public function store(Request $request)
    {
        $data = $request->validate($this->validationRules());

        $industry = Industry::create($this->buildPayload($data));

        // ✅ Sync gallery
        if (!empty($data['media_ids'])) {
            $industry->gallery()->sync(
                collect($data['media_ids'])->mapWithKeys(fn ($id, $i) => [$id => ['sort_order' => $i]])
            );
        }

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Industry created successfully.',
                'data'    => $this->formatIndustry($industry->load(['media', 'gallery']), withGallery: true),
            ], 201);
        }

        return redirect()->route('industries.index')->with('success', 'Industry created successfully.');
    }

    // ── Edit ──────────────────────────────────────────────────────────────────

    public function edit(Request $request, Industry $industry)
    {
        $industry->load(['media', 'gallery']);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'data'    => $this->formatIndustry($industry, withGallery: true),
            ]);
        }

        return Inertia::render('industries/edit', [
            'industry' => [
                'id'          => $industry->id,
                'name'        => $industry->name,
                'slug'        => $industry->slug,
                'description' => $industry->description,
                'media_id'    => $industry->media_id,
                'sort_order'  => $industry->sort_order,
                'is_active'   => (bool) $industry->is_active,
                'media_ids'   => $industry->gallery->pluck('id')->toArray(),
            ],
            'media' => $this->mediaList(),
        ]);
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, Industry $industry)
    {
        $data = $request->validate($this->validationRules(isUpdate: true, industry: $industry));

        $industry->update($this->buildPayload($data));

        // ✅ Sync gallery
        if (isset($data['media_ids'])) {
            $industry->gallery()->sync(
                collect($data['media_ids'])->mapWithKeys(fn ($id, $i) => [$id => ['sort_order' => $i]])
            );
        }

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Industry updated successfully.',
                'data'    => $this->formatIndustry($industry->load(['media', 'gallery']), withGallery: true),
            ]);
        }

        return redirect()->route('industries.index')->with('success', 'Industry updated successfully.');
    }

    // ── Toggle ────────────────────────────────────────────────────────────────

    public function toggle(Request $request, Industry $industry)
    {
        $industry->update(['is_active' => !$industry->is_active]);
        $message = $industry->is_active ? 'Industry activated.' : 'Industry deactivated.';

        if ($this->isApi($request)) {
            return response()->json(['success' => true, 'message' => $message, 'data' => $this->formatIndustry($industry->load('media'))]);
        }

        return back()->with('success', $message);
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(Request $request, Industry $industry)
    {
        $industry->gallery()->detach();
        $industry->delete();

        if ($this->isApi($request)) {
            return response()->json(['success' => true, 'message' => 'Industry deleted successfully.']);
        }

        return redirect()->route('industries.index')->with('success', 'Industry deleted successfully.');
    }
}
