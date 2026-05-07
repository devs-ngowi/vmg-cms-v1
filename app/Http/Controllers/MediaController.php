<?php

namespace App\Http\Controllers;

use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class MediaController extends Controller
{
    // ── Constants ─────────────────────────────────────────────────────────────

    private const COMPRESS_THRESHOLD = 1_048_576; // 1 MB
    private const MAX_DIMENSION      = 1920;
    private const COMPRESS_QUALITY   = 82;

    private const ALLOWED_TYPES = [
        'image/jpeg'      => ['JPEG',  20_971_520],
        'image/jpg'       => ['JPEG',  20_971_520],
        'image/png'       => ['PNG',   20_971_520],
        'image/webp'      => ['WebP',  20_971_520],
        'image/gif'       => ['GIF',   10_485_760],
        'image/svg+xml'   => ['SVG',    5_242_880],
        'application/pdf' => ['PDF',   52_428_800],
    ];

    // ── Helpers ───────────────────────────────────────────────────────────────

    private function isApi(Request $request): bool
    {
        return $request->expectsJson() || $request->wantsJson();
    }

    private function formatMedia(Media $m): array
    {
        return [
            'id'                  => $m->id,
            'filename'            => $m->filename,
            'original_name'       => $m->original_name,
            'mime_type'           => $m->mime_type,
            'alt_text'            => $m->alt_text,
            'caption'             => $m->caption,
            'folder'              => $m->folder,
            'url' => preg_replace('#(?<!:)//+#', '/', $m->url),
            'size_bytes'          => $m->size_bytes,
            'human_size'          => $m->human_size,
            'original_size_bytes' => $m->original_size_bytes,
            'was_compressed'      => (bool) $m->was_compressed,
            'width'               => $m->width,
            'height'              => $m->height,
            'is_image'            => $m->is_image,
            'is_icon'             => (bool) $m->is_icon,
            'icon_class'          => $m->icon_class,
            'uploader'            => $m->uploader?->name,
            'created_at'          => $m->created_at->format('Y-m-d'),
        ];
    }

    // ── Index ─────────────────────────────────────────────────────────────────

    public function index(Request $request)
    {
        $media = Media::with('uploader:id,full_name')
            ->orderByDesc('created_at')
            ->get()
            ->map(fn (Media $m) => $this->formatMedia($m));

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Media retrieved successfully.',
                'data'    => $media,
            ]);
        }

        return Inertia::render('media/index', compact('media'));
    }

    // ── Store (Upload) ────────────────────────────────────────────────────────

    public function store(Request $request)
    {
        $request->validate([
            'files'    => ['required_without:icon_class', 'array', 'max:20'],
            'files.*'  => ['file'],
            'folder'   => ['nullable', 'string', 'max:100'],
            'alt_text' => ['nullable', 'string', 'max:500'],
            // ✅ NEW: Icon field
            'icon_class' => ['required_without:files', 'nullable', 'string', 'max:100'],
            'is_icon'    => ['nullable', 'boolean'],
        ]);

        $folder  = $request->input('folder', 'icons'); // Default to 'icons' for icon uploads
        $altText = $request->input('alt_text');
        $iconClass = $request->input('icon_class');
        $isIcon  = $request->boolean('is_icon', false);

        // ✅ Handle icon creation (no file upload)
        if ($isIcon && $iconClass) {
            $media = Media::create([
                'filename'       => null,
                'original_name'  => $iconClass,
                'mime_type'      => 'icon/remixicon',
                'size_bytes'     => 0,
                'is_icon'        => true,
                'icon_class'     => $iconClass,
                'alt_text'       => $altText,
                'folder'         => $folder,
                'uploaded_by'    => auth()->id(),
            ]);

            if ($this->isApi($request)) {
                return response()->json([
                    'success' => true,
                    'message' => 'Icon saved successfully.',
                    'data'    => [$this->formatMedia($media->load('uploader'))],
                ], 201);
            }

            return back()->with('success', 'Icon saved successfully.');
        }

        // ✅ Handle file uploads (existing logic)
        if (!$request->hasFile('files')) {
            return back()->withErrors(['files' => 'No files provided']);
        }

        $errors  = [];
        $saved   = 0;
        $uploads = [];

        foreach ($request->file('files') as $file) {
            $mime = $file->getMimeType();

            // ── Validate type ─────────────────────────────────────────────────
            if (!array_key_exists($mime, self::ALLOWED_TYPES)) {
                $errors[] = "{$file->getClientOriginalName()}: unsupported file type ({$mime}).";
                continue;
            }

            [$label, $maxBytes] = self::ALLOWED_TYPES[$mime];

            // ── Validate size ─────────────────────────────────────────────────
            if ($file->getSize() > $maxBytes) {
                $max      = round($maxBytes / 1_048_576) . ' MB';
                $errors[] = "{$file->getClientOriginalName()}: exceeds {$max} limit for {$label} files.";
                continue;
            }

            // ── Build safe filename ───────────────────────────────────────────
            $ext         = strtolower($file->getClientOriginalExtension());
            $baseName    = Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME));
            $uniqueName  = $baseName . '-' . Str::random(8) . '.' . $ext;
            $storagePath = "{$folder}/{$uniqueName}";

            $originalSize  = $file->getSize();
            $wasCompressed = false;
            $width         = null;
            $height        = null;

            // ── Auto-compress images ──────────────────────────────────────────
            if ($this->isCompressible($mime) && $originalSize > self::COMPRESS_THRESHOLD) {
                $result = $this->compressImage($file->getRealPath(), $mime);

                if ($result !== null) {
                    Storage::disk('public')->put($storagePath, $result['data']);
                    $wasCompressed = true;
                    $width         = $result['width'];
                    $height        = $result['height'];
                    $savedSize     = strlen($result['data']);
                } else {
                    $file->storeAs($folder, $uniqueName, 'public');
                    $savedSize = $originalSize;
                }
            } else {
                $file->storeAs($folder, $uniqueName, 'public');
                $savedSize = $originalSize;

                if (str_starts_with($mime, 'image/') && !in_array($mime, ['image/svg+xml', 'image/gif'])) {
                    [$width, $height] = @getimagesize($file->getRealPath()) ?: [null, null];
                }
            }

            $media = Media::create([
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
                'is_icon'             => false,  // ✅ NEW
            ]);

            $uploads[] = $this->formatMedia($media->load('uploader'));
            $saved++;
        }

        $successMessage = "{$saved} file(s) uploaded successfully.";

        if ($this->isApi($request)) {
            $response = [
                'success' => true,
                'message' => $successMessage,
                'data'    => $uploads,
            ];

            if (!empty($errors)) {
                $response['errors'] = $errors;
            }

            return response()->json($response, empty($errors) ? 201 : 207);
        }

        if (!empty($errors)) {
            return back()
                ->withErrors(['upload' => implode(' | ', $errors)])
                ->with('success', $saved > 0 ? $successMessage : null);
        }

        return back()->with('success', $successMessage);
    }

    // ── Update ────────────────────────────────────────────────────────────────

    public function update(Request $request, Media $media)
    {
        $data = $request->validate([
            'alt_text'    => ['nullable', 'string', 'max:500'],
            'caption'     => ['nullable', 'string', 'max:1000'],
            'folder'      => ['nullable', 'string', 'max:100'],
            'icon_class'  => ['nullable', 'string', 'max:100'],  // ✅ NEW
        ]);

        $media->update($data);

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'Media updated.',
                'data'    => $this->formatMedia($media->load('uploader')),
            ]);
        }

        return back()->with('success', 'Media updated.');
    }

    // ── Destroy ───────────────────────────────────────────────────────────────

    public function destroy(Request $request, Media $media)
    {
        // Only delete physical file if it exists
        if ($media->filename) {
            Storage::disk('public')->delete($media->filename);
        }

        $media->delete();

        if ($this->isApi($request)) {
            return response()->json([
                'success' => true,
                'message' => 'File deleted.',
            ]);
        }

        return back()->with('success', 'File deleted.');
    }

    // ── Compression Helpers ───────────────────────────────────────────────────

    private function isCompressible(string $mime): bool
    {
        return in_array($mime, ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'], true);
    }

    private function compressImage(string $path, string $mime): ?array
    {
        if (!extension_loaded('gd')) {
            return null;
        }

        $src = match ($mime) {
            'image/png'  => @imagecreatefrompng($path),
            'image/webp' => @imagecreatefromwebp($path),
            default      => @imagecreatefromjpeg($path),
        };

        if (!$src) {
            return null;
        }

        $origW = imagesx($src);
        $origH = imagesy($src);

        [$newW, $newH] = $this->scaleDimensions($origW, $origH, self::MAX_DIMENSION);

        if ($newW !== $origW || $newH !== $origH) {
            $dst = imagecreatetruecolor($newW, $newH);

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

        return ['data' => $data, 'width' => $newW, 'height' => $newH];
    }

    private function scaleDimensions(int $w, int $h, int $maxDim): array
    {
        if ($w <= $maxDim && $h <= $maxDim) {
            return [$w, $h];
        }

        return $w >= $h
            ? [$maxDim, (int) round($h * $maxDim / $w)]
            : [(int) round($w * $maxDim / $h), $maxDim];
    }
}
