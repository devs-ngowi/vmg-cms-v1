<?php

namespace App\Http\Controllers;

use App\Models\HeroSlide;
use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class HeroSlideController extends Controller
{
    // ── Helpers ───────────────────────────────────────────────────────────────

    private function isApi(Request $request): bool
    {
        return $request->expectsJson() || $request->wantsJson();
    }

    private function mediaList(): array
    {
        return Media::images()
            ->orderByDesc('created_at')
            ->get(['id', 'filename', 'original_name', 'alt_text'])
            ->map(fn ($m) => [
                'id'            => $m->id,
                'filename'      => $m->filename,
                'original_name' => $m->original_name,
                'alt_text'      => $m->alt_text,
                'url'           => Storage::url($m->filename),
            ])
            ->all();
    }

    private function formatSlide(HeroSlide $slide): array
    {
        return [
            'id'         => $slide->id,
            'headline'   => $slide->headline,
            'subtext'    => $slide->subtext,
            'btn_label'  => $slide->btn_label,
            'btn_url'    => $slide->btn_url,
            'sort_order' => $slide->sort_order,
            'is_active'  => (bool) $slide->is_active,
            'media'      => $slide->media ? [
                'id'       => $slide->media->id,
                'filename' => $slide->media->filename,
                'alt_text' => $slide->media->alt_text,
                'url'      => Storage::url($slide->media->filename),
            ] : null,
        ];
    }

    private function validationRules(): array
    {
        return [
            'headline'   => ['required', 'string', 'max:191'],
            'subtext'    => ['nullable', 'string', 'max:500'],
            'btn_label'  => ['nullable', 'string', 'max:100'],
            'btn_url'    => ['nullable', 'string', 'max:500'],
            'media_id'   => ['nullable', 'exists:media,id'],
            'sort_order' => ['integer', 'min:0'],
            'is_active'  => ['boolean'],
        ];
    }

    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(Request $request)
    {
        $slides = HeroSlide::with('media')
            ->orderBy('sort_order')
            ->get()
            ->map(fn ($s) => $this->formatSlide($s));

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Slides retrieved successfully.',
                'data'    => $slides,
            ]);
        }

        return Inertia::render('hero-slides/index', compact('slides'));
    }

    // ── Create ────────────────────────────────────────────────────────────────

    public function create(Request $request)
    {
        $nextOrder = HeroSlide::max('sort_order') + 1;

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'data'    => [
                    'media'      => $this->mediaList(),
                    'next_order' => $nextOrder,
                ],
            ]);
        }

        return Inertia::render('hero-slides/create', [
            'media'      => $this->mediaList(),
            'next_order' => $nextOrder,
        ]);
    }

    // ── Store ─────────────────────────────────────────────────────────────────

    public function store(Request $request)
    {
        $data = $request->validate($this->validationRules());

        $slide = HeroSlide::create($data);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Slide created.',
                'data'    => $this->formatSlide($slide->load('media')),
            ], 201);
        }

        return redirect()->route('hero-slides.index')
            ->with('success', 'Slide created.');
    }

    // ── Edit ──────────────────────────────────────────────────────────────────

    public function edit(Request $request, HeroSlide $heroSlide)
    {
        $heroSlide->load('media');

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Slide retrieved successfully.',
                'data'    => $this->formatSlide($heroSlide),
            ]);
        }

        return Inertia::render('hero-slides/edit', [
            'slide' => $this->formatSlide($heroSlide),
            'media' => $this->mediaList(),
        ]);
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, HeroSlide $heroSlide)
    {
        $data = $request->validate($this->validationRules());

        $heroSlide->update($data);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Slide updated.',
                'data'    => $this->formatSlide($heroSlide->load('media')),
            ]);
        }

        return redirect()->route('hero-slides.index')
            ->with('success', 'Slide updated.');
    }

    // ── Toggle ────────────────────────────────────────────────────────────────

    public function toggle(Request $request, HeroSlide $heroSlide)
    {
        $heroSlide->update(['is_active' => !$heroSlide->is_active]);

        $message = 'Slide ' . ($heroSlide->is_active ? 'activated' : 'deactivated') . '.';

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => $message,
                'data'    => $this->formatSlide($heroSlide->load('media')),
            ]);
        }

        return back()->with('success', $message);
    }

    // ── Reorder ───────────────────────────────────────────────────────────────

    public function reorder(Request $request)
    {
        $data = $request->validate([
            'order'   => ['required', 'array'],
            'order.*' => ['integer', 'exists:hero_slides,id'],
        ]);

        foreach ($data['order'] as $position => $id) {
            HeroSlide::where('id', $id)->update(['sort_order' => $position]);
        }

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Order saved.',
            ]);
        }

        return back()->with('success', 'Order saved.');
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(Request $request, HeroSlide $heroSlide)
    {
        $heroSlide->delete();

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Slide deleted.',
            ]);
        }

        return redirect()->route('hero-slides.index')
            ->with('success', 'Slide deleted.');
    }
}
