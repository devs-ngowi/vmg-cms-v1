<?php

namespace App\Http\Controllers;

use App\Models\HeroSlide;
use App\Models\Media;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HeroSlideController extends Controller
{
    // ── Helpers ───────────────────────────────────────────────────────────────

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
                'url'           => \Illuminate\Support\Facades\Storage::url($m->filename),
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
                'url'      => \Illuminate\Support\Facades\Storage::url($slide->media->filename),
            ] : null,
        ];
    }

    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(): Response
    {
        $slides = HeroSlide::with('media')
            ->orderBy('sort_order')
            ->get()
            ->map(fn ($s) => $this->formatSlide($s));

        return Inertia::render('hero-slides/index', [
            'slides' => $slides,
        ]);
    }

    // ── Create ────────────────────────────────────────────────────────────────

    public function create(): Response
    {
        return Inertia::render('hero-slides/create', [
            'media'      => $this->mediaList(),
            'next_order' => HeroSlide::max('sort_order') + 1,
        ]);
    }

    // ── Store ─────────────────────────────────────────────────────────────────

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'headline'   => ['required', 'string', 'max:191'],
            'subtext'    => ['nullable', 'string', 'max:500'],
            'btn_label'  => ['nullable', 'string', 'max:100'],
            'btn_url'    => ['nullable', 'string', 'max:500'],
            'media_id'   => ['nullable', 'exists:media,id'],
            'sort_order' => ['integer', 'min:0'],
            'is_active'  => ['boolean'],
        ]);

        HeroSlide::create($data);

        return redirect()->route('hero-slides.index')
            ->with('success', 'Slide created.');
    }

    // ── Edit ──────────────────────────────────────────────────────────────────

    public function edit(HeroSlide $heroSlide): Response
    {
        return Inertia::render('hero-slides/edit', [
            'slide' => $this->formatSlide($heroSlide->load('media')),
            'media' => $this->mediaList(),
        ]);
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, HeroSlide $heroSlide): RedirectResponse
    {
        $data = $request->validate([
            'headline'   => ['required', 'string', 'max:191'],
            'subtext'    => ['nullable', 'string', 'max:500'],
            'btn_label'  => ['nullable', 'string', 'max:100'],
            'btn_url'    => ['nullable', 'string', 'max:500'],
            'media_id'   => ['nullable', 'exists:media,id'],
            'sort_order' => ['integer', 'min:0'],
            'is_active'  => ['boolean'],
        ]);

        $heroSlide->update($data);

        return redirect()->route('hero-slides.index')
            ->with('success', 'Slide updated.');
    }

    // ── Toggle active ─────────────────────────────────────────────────────────

    public function toggle(HeroSlide $heroSlide): RedirectResponse
    {
        $heroSlide->update(['is_active' => !$heroSlide->is_active]);
        return back()->with('success', 'Slide ' . ($heroSlide->is_active ? 'activated' : 'deactivated') . '.');
    }

    // ── Reorder ───────────────────────────────────────────────────────────────

    public function reorder(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'order'   => ['required', 'array'],
            'order.*' => ['integer', 'exists:hero_slides,id'],
        ]);

        foreach ($data['order'] as $position => $id) {
            HeroSlide::where('id', $id)->update(['sort_order' => $position]);
        }

        return back()->with('success', 'Order saved.');
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(HeroSlide $heroSlide): RedirectResponse
    {
        $heroSlide->delete();
        return redirect()->route('hero-slides.index')
            ->with('success', 'Slide deleted.');
    }
}
