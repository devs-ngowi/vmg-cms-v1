<?php

namespace App\Http\Controllers;

use App\Models\Media;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TestimonialController extends Controller
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

    private function formatTestimonial(Testimonial $t): array
    {
        return [
            'id'          => $t->id,
            'client_name' => $t->client_name,
            'company'     => $t->company,
            'position'    => $t->position,
            'quote'       => $t->quote,
            'rating'      => $t->rating,
            'is_featured' => (bool) $t->is_featured,
            'is_approved' => (bool) $t->is_approved,
            'image'       => $t->image ? [
                'id'  => $t->image->id,
                'url' => Storage::url($t->image->filename),
                'alt' => $t->image->alt_text ?? $t->client_name,
            ] : null,
            'created_at'  => $t->created_at->format('Y-m-d'),
        ];
    }

    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(Request $request)
    {
        $testimonials = Testimonial::with('image')
            ->latest()
            ->get()
            ->map(fn ($t) => $this->formatTestimonial($t));

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'data'    => $testimonials,
            ]);
        }

        return Inertia::render('testimonials/index', [
            'testimonials' => $testimonials,
            'media'        => $this->mediaList(),
        ]);
    }

    // ── Store ─────────────────────────────────────────────────────────────────

    public function store(Request $request)
    {
        $data = $request->validate([
            'client_name' => ['required', 'string', 'max:191'],
            'company'     => ['nullable', 'string', 'max:191'],
            'position'    => ['nullable', 'string', 'max:191'],
            'quote'       => ['required', 'string', 'max:2000'],
            'rating'      => ['nullable', 'integer', 'min:1', 'max:5'],
            'image_id'    => ['nullable', 'exists:media,id'],
            'is_featured' => ['boolean'],
            'is_approved' => ['boolean'],
        ]);

        $testimonial = Testimonial::create($data);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Testimonial added.',
                'data'    => $this->formatTestimonial($testimonial->load('image')),
            ], 201);
        }

        return back()->with('success', 'Testimonial added.');
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, Testimonial $testimonial)
    {
        $data = $request->validate([
            'client_name' => ['required', 'string', 'max:191'],
            'company'     => ['nullable', 'string', 'max:191'],
            'position'    => ['nullable', 'string', 'max:191'],
            'quote'       => ['required', 'string', 'max:2000'],
            'rating'      => ['nullable', 'integer', 'min:1', 'max:5'],
            'image_id'    => ['nullable', 'exists:media,id'],
            'is_featured' => ['boolean'],
            'is_approved' => ['boolean'],
        ]);

        $testimonial->update($data);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Testimonial updated.',
                'data'    => $this->formatTestimonial($testimonial->load('image')),
            ]);
        }

        return back()->with('success', 'Testimonial updated.');
    }

    // ── Toggle approve ────────────────────────────────────────────────────────

    public function approve(Request $request, Testimonial $testimonial)
    {
        $testimonial->update(['is_approved' => !$testimonial->is_approved]);
        $message = $testimonial->is_approved ? 'Testimonial approved.' : 'Approval removed.';

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => $message,
                'data'    => $this->formatTestimonial($testimonial->load('image')),
            ]);
        }

        return back()->with('success', $message);
    }

    // ── Toggle featured ───────────────────────────────────────────────────────

    public function feature(Request $request, Testimonial $testimonial)
    {
        $testimonial->update(['is_featured' => !$testimonial->is_featured]);
        $message = $testimonial->is_featured ? 'Marked as featured.' : 'Removed from featured.';

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => $message,
                'data'    => $this->formatTestimonial($testimonial->load('image')),
            ]);
        }

        return back()->with('success', $message);
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(Request $request, Testimonial $testimonial)
    {
        $testimonial->delete();

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Testimonial deleted.',
            ]);
        }

        return back()->with('success', 'Testimonial deleted.');
    }
}
