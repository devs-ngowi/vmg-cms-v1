<?php

namespace App\Http\Controllers;

use App\Models\ClientLogo;
use App\Models\Media;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ClientLogoController extends Controller
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

    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(): Response
    {
        $logos = ClientLogo::with('media')
            ->orderBy('sort_order')
            ->get()
            ->map(fn ($l) => $this->formatLogo($l));

        return Inertia::render('client-logos/index', [
            'logos' => $logos,
            'media' => $this->mediaList(),
        ]);
    }

    // ── Store ─────────────────────────────────────────────────────────────────

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'name'        => ['required', 'string', 'max:191'],
            'media_id'    => ['required', 'exists:media,id'],
            'website_url' => ['nullable', 'url', 'max:500'],
            'sort_order'  => ['integer', 'min:0'],
            'is_active'   => ['boolean'],
        ]);

        if (!isset($data['sort_order'])) {
            $data['sort_order'] = ClientLogo::max('sort_order') + 1;
        }

        ClientLogo::create($data);

        return back()->with('success', 'Logo added.');
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, ClientLogo $clientLogo): RedirectResponse
    {
        $data = $request->validate([
            'name'        => ['required', 'string', 'max:191'],
            'media_id'    => ['required', 'exists:media,id'],
            'website_url' => ['nullable', 'url', 'max:500'],
            'sort_order'  => ['integer', 'min:0'],
            'is_active'   => ['boolean'],
        ]);

        $clientLogo->update($data);

        return back()->with('success', 'Logo updated.');
    }

    // ── Toggle ────────────────────────────────────────────────────────────────

    public function toggle(ClientLogo $clientLogo): RedirectResponse
    {
        $clientLogo->update(['is_active' => !$clientLogo->is_active]);
        return back()->with('success', 'Logo status updated.');
    }

    // ── Reorder ───────────────────────────────────────────────────────────────

    public function reorder(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'order'   => ['required', 'array'],
            'order.*' => ['integer', 'exists:client_logos,id'],
        ]);

        foreach ($data['order'] as $position => $id) {
            ClientLogo::where('id', $id)->update(['sort_order' => $position]);
        }

        return back()->with('success', 'Order saved.');
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(ClientLogo $clientLogo): RedirectResponse
    {
        $clientLogo->delete();
        return back()->with('success', 'Logo deleted.');
    }
}
