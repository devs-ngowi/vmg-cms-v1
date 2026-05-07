<?php

namespace App\Http\Controllers;

use App\Models\ClientLogo;
use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ClientLogoController extends Controller
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

    private function formatLogo(ClientLogo $logo): array
    {
        return [
            'id'          => $logo->id,
            'name'        => $logo->name,
            'website_url' => $logo->website_url,
            'sort_order'  => $logo->sort_order,
            'is_active'   => (bool) $logo->is_active,
            'media'       => $logo->media ? [
                'id'            => $logo->media->id,
                'filename'      => $logo->media->filename,
                'original_name' => $logo->media->original_name,
                'alt_text'      => $logo->media->alt_text,
                'url'           => Storage::url($logo->media->filename),
            ] : null,
        ];
    }

    private function validationRules(): array
    {
        return [
            'name'        => ['required', 'string', 'max:191'],
            'media_id'    => ['required', 'exists:media,id'],
            'website_url' => ['nullable', 'url', 'max:500'],
            'sort_order'  => ['integer', 'min:0'],
            'is_active'   => ['boolean'],
        ];
    }

    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(Request $request)
    {
        $logos = ClientLogo::with('media')
            ->orderBy('sort_order')
            ->get()
            ->map(fn ($l) => $this->formatLogo($l));

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Client logos retrieved successfully.',
                'data'    => $logos,
            ]);
        }

        return Inertia::render('client-logos/index', [
            'logos' => $logos,
            'media' => $this->mediaList(),
        ]);
    }

    // ── Store ─────────────────────────────────────────────────────────────────

    public function store(Request $request)
    {
        $data = $request->validate($this->validationRules());

        if (!isset($data['sort_order'])) {
            $data['sort_order'] = ClientLogo::max('sort_order') + 1;
        }

        $logo = ClientLogo::create($data);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Logo added.',
                'data'    => $this->formatLogo($logo->load('media')),
            ], 201);
        }

        return back()->with('success', 'Logo added.');
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, ClientLogo $clientLogo)
    {
        $data = $request->validate($this->validationRules());

        $clientLogo->update($data);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Logo updated.',
                'data'    => $this->formatLogo($clientLogo->load('media')),
            ]);
        }

        return back()->with('success', 'Logo updated.');
    }

    // ── Toggle ────────────────────────────────────────────────────────────────

    public function toggle(Request $request, ClientLogo $clientLogo)
    {
        $clientLogo->update(['is_active' => !$clientLogo->is_active]);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Logo status updated.',
                'data'    => $this->formatLogo($clientLogo->load('media')),
            ]);
        }

        return back()->with('success', 'Logo status updated.');
    }

    // ── Reorder ───────────────────────────────────────────────────────────────

    public function reorder(Request $request)
    {
        $data = $request->validate([
            'order'   => ['required', 'array'],
            'order.*' => ['integer', 'exists:client_logos,id'],
        ]);

        foreach ($data['order'] as $position => $id) {
            ClientLogo::where('id', $id)->update(['sort_order' => $position]);
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

    public function destroy(Request $request, ClientLogo $clientLogo)
    {
        $clientLogo->delete();

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Logo deleted.',
            ]);
        }

        return back()->with('success', 'Logo deleted.');
    }
}
