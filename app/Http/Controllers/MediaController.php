<?php

namespace App\Http\Controllers;

use App\Models\Media;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class MediaController extends Controller
{
    // ── Constants ─────────────────────────────────────────────────────────────

    /** Images above this byte threshold will be auto-compressed */
    private const COMPRESS_THRESHOLD = 1_048_576; // 1 MB

    /** Maximum dimension (px) after compression */
    private const MAX_DIMENSION = 1920;

    /** JPEG / WebP quality after compression (0-100) */
    private const COMPRESS_QUALITY = 82;

    /** Allowed MIME types → [label, max bytes] */
    private const ALLOWED_TYPES = [
        'image/jpeg'    => ['JPEG',  20_971_520], // 20 MB
        'image/jpg'     => ['JPEG',  20_971_520],
        'image/png'     => ['PNG',   20_971_520],
        'image/webp'    => ['WebP',  20_971_520],
        'image/gif'     => ['GIF',   10_485_760], // 10 MB (no re-encode)
        'image/svg+xml' => ['SVG',    5_242_880], //  5 MB (no re-encode)
        'application/pdf' => ['PDF', 52_428_800], // 50 MB
    ];

    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(): Response
    {
        $media = Media::with('uploader:id,full_name')
            ->orderByDesc('created_at')
            ->get()
            ->map(fn (Media $m) => [
                'id'                  => $m->id,
                'filename'            => $m->filename,
                'original_name'       => $m->original_name,
                'mime_type'           => $m->mime_type,
                'alt_text'            => $m->alt_text,
                'caption'             => $m->caption,
                'folder'              => $m->folder,
                'url'                 => $m->url,
                'size_bytes'          => $m->size_bytes,
                'human_size'          => $m->human_size,
                'original_size_bytes' => $m->original_size_bytes,
                'was_compressed'      => (bool) $m->was_compressed,
                'width'               => $m->width,
                'height'              => $m->height,
                'is_image'            => $m->is_image,
                'uploader'            => $m->uploader?->name,
                'created_at'          => $m->created_at->format('Y-m-d'),
            ]);

        return Inertia::render('media/index', [
            'media' => $media,
        ]);
    }

    // ── Store (Upload) ────────────────────────────────────────────────────────

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'files'          => ['required', 'array', 'min:1', 'max:20'],
            'files.*'        => ['required', 'file'],
            'folder'         => ['nullable', 'string', 'max:100'],
            'alt_text'       => ['nullable', 'string', 'max:500'],
        ]);

        $folder  = $request->input('folder', 'uploads');
        $altText = $request->input('alt_text');
        $errors  = [];
        $saved   = 0;

        foreach ($request->file('files') as $index => $file) {
            $mime = $file->getMimeType();

            // ── Validate type ─────────────────────────────────────────────────
            if (!array_key_exists($mime, self::ALLOWED_TYPES)) {
                $errors[] = "{$file->getClientOriginalName()}: unsupported file type ({$mime}).";
                continue;
            }

            [$label, $maxBytes] = self::ALLOWED_TYPES[$mime];

            // ── Validate size ─────────────────────────────────────────────────
            if ($file->getSize() > $maxBytes) {
                $max = round($maxBytes / 1_048_576) . ' MB';
                $errors[] = "{$file->getClientOriginalName()}: exceeds {$max} limit for {$label} files.";
                continue;
            }

            // ── Build safe filename ───────────────────────────────────────────
            $ext          = strtolower($file->getClientOriginalExtension());
            $baseName     = Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME));
            $uniqueName   = $baseName . '-' . Str::random(8) . '.' . $ext;
            $storagePath  = "{$folder}/{$uniqueName}";

            $originalSize = $file->getSize();
            $wasCompressed = false;
            $width = null;
            $height = null;

            // ── Auto-compress images ──────────────────────────────────────────
            if ($this->isCompressible($mime) && $originalSize > self::COMPRESS_THRESHOLD) {
                $result = $this->compressImage($file->getRealPath(), $mime);

                if ($result !== null) {
                    // Write compressed bytes to storage
                    \Illuminate\Support\Facades\Storage::disk('public')
                        ->put($storagePath, $result['data']);

                    $wasCompressed = true;
                    $width  = $result['width'];
                    $height = $result['height'];

                    $savedSize = strlen($result['data']);
                } else {
                    // Compression failed – store original
                    $file->storeAs($folder, $uniqueName, 'public');
                    $savedSize = $originalSize;
                }
            } else {
                // Store as-is (SVG, GIF, PDF, or small image)
                $file->storeAs($folder, $uniqueName, 'public');
                $savedSize = $originalSize;

                // Still extract dimensions for non-compressed images
                if (str_starts_with($mime, 'image/') && $mime !== 'image/svg+xml' && $mime !== 'image/gif') {
                    [$width, $height] = @getimagesize($file->getRealPath()) ?: [null, null];
                }
            }

            Media::create([
                'filename'            => $storagePath,
                'original_name'       => $file->getClientOriginalName(),
                'mime_type'           => $mime,
                'size_bytes'          => $savedSize,
                'original_size_bytes' => $originalSize,
                'was_compressed'      => $wasCompressed,
                'alt_text'            => $altText,
                'folder'              => $folder,
                'uploaded_by'         => auth()->id(),
                'width'               => $width,
                'height'              => $height,
            ]);

            $saved++;
        }

        if (!empty($errors)) {
            // Some files failed — report them but still redirect
            return back()
                ->withErrors(['upload' => implode(' | ', $errors)])
                ->with('success', $saved > 0 ? "{$saved} file(s) uploaded successfully." : null);
        }

        return back()->with('success', "{$saved} file(s) uploaded successfully.");
    }

    // ── Update (alt text / caption) ───────────────────────────────────────────

    public function update(Request $request, Media $media): RedirectResponse
    {
        $data = $request->validate([
            'alt_text' => ['nullable', 'string', 'max:500'],
            'caption'  => ['nullable', 'string', 'max:1000'],
            'folder'   => ['nullable', 'string', 'max:100'],
        ]);

        $media->update($data);

        return back()->with('success', 'Media updated.');
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(Media $media): RedirectResponse
    {
        // Detach from any blog post galleries
        \Illuminate\Support\Facades\Storage::disk('public')->delete($media->filename);
        $media->delete();

        return back()->with('success', 'File deleted.');
    }

    // ── Compression helpers ───────────────────────────────────────────────────

    /** Only re-encode JPEG, PNG, WebP — not GIF / SVG / PDF */
    private function isCompressible(string $mime): bool
    {
        return in_array($mime, ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'], true);
    }

    /**
     * Compress an image using PHP GD (built-in, no extra packages).
     * Returns ['data' => string, 'width' => int, 'height' => int] or null on failure.
     */
    private function compressImage(string $path, string $mime): ?array
    {
        if (!extension_loaded('gd')) {
            return null;
        }

        // Load source image
        $src = match ($mime) {
            'image/png'         => @imagecreatefrompng($path),
            'image/webp'        => @imagecreatefromwebp($path),
            default             => @imagecreatefromjpeg($path), // jpeg / jpg
        };

        if (!$src) {
            return null;
        }

        $origW = imagesx($src);
        $origH = imagesy($src);

        // ── Resize if too large ───────────────────────────────────────────────
        [$newW, $newH] = $this->scaleDimensions($origW, $origH, self::MAX_DIMENSION);

        if ($newW !== $origW || $newH !== $origH) {
            $dst = imagecreatetruecolor($newW, $newH);

            // Preserve transparency for PNG / WebP
            if (in_array($mime, ['image/png', 'image/webp'])) {
                imagealphablending($dst, false);
                imagesavealpha($dst, true);
                $transparent = imagecolorallocatealpha($dst, 0, 0, 0, 127);
                imagefilledrectangle($dst, 0, 0, $newW, $newH, $transparent);
            }

            imagecopyresampled($dst, $src, 0, 0, 0, 0, $newW, $newH, $origW, $origH);
            imagedestroy($src);
            $src = $dst;
        }

        // ── Capture output ────────────────────────────────────────────────────
        ob_start();
        match ($mime) {
            'image/png'  => imagepng($src, null, (int) round((100 - self::COMPRESS_QUALITY) / 10)),
            'image/webp' => imagewebp($src, null, self::COMPRESS_QUALITY),
            default      => imagejpeg($src, null, self::COMPRESS_QUALITY),
        };
        $data = ob_get_clean();
        imagedestroy($src);

        if ($data === false || $data === '') {
            return null;
        }

        return [
            'data'   => $data,
            'width'  => $newW,
            'height' => $newH,
        ];
    }

    /** Scale width/height proportionally so neither exceeds $maxDim */
    private function scaleDimensions(int $w, int $h, int $maxDim): array
    {
        if ($w <= $maxDim && $h <= $maxDim) {
            return [$w, $h];
        }

        if ($w >= $h) {
            return [$maxDim, (int) round($h * $maxDim / $w)];
        }

        return [(int) round($w * $maxDim / $h), $maxDim];
    }
}
