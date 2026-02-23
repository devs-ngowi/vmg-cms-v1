<?php

namespace App\Http\Controllers;

use App\Models\Industry;
use App\Models\Media;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class IndustryController extends Controller
{
    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(): Response
    {
        $industries = Industry::with('media')
            ->orderBy('sort_order')
            ->get()
            ->map(fn (Industry $industry) => [
                'id'          => $industry->id,
                'name'        => $industry->name,
                'slug'        => $industry->slug,
                'description' => $industry->description,
                'sort_order'  => $industry->sort_order,
                'is_active'   => $industry->is_active,
                'media'       => $industry->media
                    ? ['id' => $industry->media->id, 'filename' => $industry->media->filename, 'alt_text' => $industry->media->alt_text]
                    : null,
                'created_at'  => $industry->created_at->format('Y-m-d'),
            ]);

        return Inertia::render('industries/index', [
            'industries' => $industries,
        ]);
    }

    // ── Create ────────────────────────────────────────────────────────────────

    public function create(): Response
    {
        return Inertia::render('industries/create', [
            'media' => Media::orderByDesc('created_at')
                ->get(['id', 'filename', 'original_name', 'alt_text', 'mime_type']),
        ]);
    }

    // ── Store ─────────────────────────────────────────────────────────────────

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'name'        => ['required', 'string', 'max:191'],
            'slug'        => ['nullable', 'string', 'max:191', 'unique:industries,slug'],
            'description' => ['nullable', 'string', 'max:2000'],
            'media_id'    => ['nullable', 'exists:media,id'],
            'sort_order'  => ['nullable', 'integer', 'min:0'],
            'is_active'   => ['boolean'],
        ]);

        Industry::create([
            'name'        => $data['name'],
            'slug'        => $data['slug'] ?? Str::slug($data['name']),
            'description' => $data['description'] ?? null,
            'media_id'    => $data['media_id']    ?? null,
            'sort_order'  => $data['sort_order']  ?? 0,
            'is_active'   => $data['is_active']   ?? true,
        ]);

        return redirect()->route('industries.index')
            ->with('success', 'Industry created successfully.');
    }

    // ── Edit ──────────────────────────────────────────────────────────────────

    public function edit(Industry $industry): Response
    {
        return Inertia::render('industries/edit', [
            'industry' => [
                'id'          => $industry->id,
                'name'        => $industry->name,
                'slug'        => $industry->slug,
                'description' => $industry->description,
                'media_id'    => $industry->media_id,
                'sort_order'  => $industry->sort_order,
                'is_active'   => (bool) $industry->is_active,
            ],
            'media' => Media::orderByDesc('created_at')
                ->get(['id', 'filename', 'original_name', 'alt_text', 'mime_type']),
        ]);
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, Industry $industry): RedirectResponse
    {
        $data = $request->validate([
            'name'        => ['required', 'string', 'max:191'],
            'slug'        => ['nullable', 'string', 'max:191', Rule::unique('industries', 'slug')->ignore($industry->id)],
            'description' => ['nullable', 'string', 'max:2000'],
            'media_id'    => ['nullable', 'exists:media,id'],
            'sort_order'  => ['nullable', 'integer', 'min:0'],
            'is_active'   => ['boolean'],
        ]);

        $industry->update([
            'name'        => $data['name'],
            'slug'        => $data['slug'] ?? Str::slug($data['name']),
            'description' => $data['description'] ?? null,
            'media_id'    => $data['media_id']    ?? null,
            'sort_order'  => $data['sort_order']  ?? 0,
            'is_active'   => $data['is_active']   ?? true,
        ]);

        return redirect()->route('industries.index')
            ->with('success', 'Industry updated successfully.');
    }

    // ── Toggle active ─────────────────────────────────────────────────────────

    public function toggle(Industry $industry): RedirectResponse
    {
        $industry->update(['is_active' => ! $industry->is_active]);

        return back()->with('success', $industry->is_active ? 'Industry activated.' : 'Industry deactivated.');
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(Industry $industry): RedirectResponse
    {
        $industry->delete();

        return redirect()->route('industries.index')
            ->with('success', 'Industry deleted successfully.');
    }
}
