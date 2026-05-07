<?php

namespace App\Http\Controllers;

use App\Models\Media;
use App\Models\SeoSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SeoSettingController extends Controller
{
    // ── Helpers ───────────────────────────────────────────────────────────────

    private function isApi(Request $request): bool
    {
        return $request->expectsJson() || $request->wantsJson();
    }

    private function formatSeo(SeoSetting $seo): array
    {
        return [
            'id'               => $seo->id,
            'meta_title'       => $seo->meta_title       ?? '',
            'meta_description' => $seo->meta_description ?? '',
            'og_image_id'      => $seo->og_image_id,
            'canonical_url'    => $seo->canonical_url    ?? '',
            'robots'           => $seo->robots           ?? 'index, follow',
            'og_image'         => $seo->ogImage ? [
                'id'  => $seo->ogImage->id,
                'url' => Storage::url($seo->ogImage->filename),
                'alt' => $seo->ogImage->alt_text ?? $seo->ogImage->original_name,
            ] : null,
        ];
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

    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(Request $request)
    {
        $seo = SeoSetting::global();
        $formatted = $this->formatSeo($seo);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'data'    => [
                    'seo'            => $formatted,
                    'media'          => $this->mediaList(),
                    'robots_options' => SeoSetting::robotsOptions(),
                ],
            ]);
        }

        return Inertia::render('seo/index', [
            'seo'            => $formatted,
            'media'          => $this->mediaList(),
            'robots_options' => SeoSetting::robotsOptions(),
        ]);
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request)
    {
        $data = $request->validate([
            'meta_title'       => ['nullable', 'string', 'max:70'],
            'meta_description' => ['nullable', 'string', 'max:160'],
            'og_image_id'      => ['nullable', 'exists:media,id'],
            'canonical_url'    => ['nullable', 'url', 'max:500'],
            'robots'           => ['nullable', 'string', 'max:100'],
        ]);

        $seo = SeoSetting::global();
        $seo->update($data);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'SEO settings saved.',
                'data'    => $this->formatSeo($seo->fresh(['ogImage'])),
            ]);
        }

        return back()->with('success', 'SEO settings saved.');
    }
}
