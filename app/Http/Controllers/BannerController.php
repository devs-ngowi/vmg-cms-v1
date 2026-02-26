<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Media;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class BannerController extends Controller
{
    private function formatBanner(Banner $banner): array
    {
        return [
            'id'              => $banner->id,
            'title'           => $banner->title,
            'sub_title'       => $banner->sub_title,
            'description'     => $banner->description,
            'btn_one_text'    => $banner->btn_one_text,
            'btn_one_url'     => $banner->btn_one_url,
            'btn_two_text'    => $banner->btn_two_text,
            'btn_two_url'     => $banner->btn_two_url,
            'bg_image_id'     => $banner->bg_image_id,
            'banner_image_id' => $banner->banner_image_id,
            // 'bg_image'        => $banner->bgImage ? Storage::url($banner->bgImage->filename) : null,
            'bg_image' => url(Storage::url($banner->bgImage->filename)),
            'banner_image'    => $banner->bannerImage ? [
                'id'  => $banner->bannerImage->id,
                'url' => Storage::url($banner->bannerImage->filename),
                'alt' => $banner->bannerImage->alt_text ?? $banner->title,
            ] : null,
            'is_published'    => (bool) $banner->is_published,
            'is_active'       => (bool) $banner->is_active,
            'created_at'      => $banner->created_at->format('Y-m-d'),
        ];
    }

    private function mediaList()
    {
        return Media::latest()->get(['id', 'filename', 'original_name', 'alt_text']);
    }

    public function index(Request $request)
    {
        $banners = Banner::with(['bgImage', 'bannerImage'])->latest()->get();
        $formattedBanners = $banners->map(fn($b) => $this->formatBanner($b));

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'data'    => $formattedBanners,
            ]);
        }

        return Inertia::render('banners/index', [
            'banners' => $formattedBanners,
        ]);
    }

    public function create(Request $request): Response
    {
        return Inertia::render('banners/create', [
            'media' => $this->mediaList(),
        ]);
    }

    public function store(Request $request): RedirectResponse | \Illuminate\Http\JsonResponse
    {
        $data = $request->validate([
            'title'           => ['required', 'string', 'max:255'],
            'sub_title'       => ['nullable', 'string', 'max:255'],
            'description'     => ['nullable', 'string'],
            'bg_image_id'     => ['nullable', 'exists:media,id'],
            'banner_image_id' => ['nullable', 'exists:media,id'],
            'btn_one_text'    => ['nullable', 'string', 'max:100'],
            'btn_one_url'     => ['nullable', 'string', 'max:255'],
            'btn_two_text'    => ['nullable', 'string', 'max:100'],
            'btn_two_url'     => ['nullable', 'string', 'max:255'],
            'is_published'    => ['boolean'],
        ]);

        $banner = Banner::create($data);

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Banner created successfully.',
                'data'    => $this->formatBanner($banner),
            ], 201);
        }

        return redirect()->route('banners.index')->with('success', 'Banner created successfully.');
    }

    public function show(Banner $banner, Request $request): \Illuminate\Http\JsonResponse | Response
    {
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'data'    => $this->formatBanner($banner),
            ]);
        }

        // Redirect to edit page for web requests
        return redirect()->route('banners.edit', $banner);
    }

    public function edit(Banner $banner, Request $request): Response
    {
        return Inertia::render('banners/edit', [
            'banner' => $this->formatBanner($banner),
            'media'  => $this->mediaList(),
        ]);
    }

    public function update(Request $request, Banner $banner): RedirectResponse | \Illuminate\Http\JsonResponse
    {
        $data = $request->validate([
            'title'           => ['required', 'string', 'max:255'],
            'sub_title'       => ['nullable', 'string', 'max:255'],
            'description'     => ['nullable', 'string'],
            'bg_image_id'     => ['nullable', 'exists:media,id'],
            'banner_image_id' => ['nullable', 'exists:media,id'],
            'btn_one_text'    => ['nullable', 'string', 'max:100'],
            'btn_one_url'     => ['nullable', 'string', 'max:255'],
            'btn_two_text'    => ['nullable', 'string', 'max:100'],
            'btn_two_url'     => ['nullable', 'string', 'max:255'],
            'is_published'    => ['boolean'],
        ]);

        $banner->update($data);

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Banner updated successfully.',
                'data'    => $this->formatBanner($banner),
            ]);
        }

        return redirect()->route('banners.index')->with('success', 'Banner updated successfully.');
    }

    public function toggle(Banner $banner, Request $request): RedirectResponse | \Illuminate\Http\JsonResponse
    {
        $banner->update(['is_active' => !$banner->is_active]);

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Banner visibility updated.',
                'data'    => $this->formatBanner($banner),
            ]);
        }

        return back()->with('success', 'Banner visibility updated.');
    }

    public function destroy(Banner $banner, Request $request): RedirectResponse | \Illuminate\Http\JsonResponse
    {
        $banner->delete();

        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Banner deleted successfully.',
            ]);
        }

        return redirect()->route('banners.index')->with('success', 'Banner deleted successfully.');
    }
}
