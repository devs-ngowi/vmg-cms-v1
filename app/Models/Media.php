<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Media extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $fillable = [
        'filename',
        'original_name',
        'mime_type',
        'size_bytes',
        'alt_text',
        'caption',
        'folder',
        'uploaded_by',
        'width',
        'height',
        'was_compressed',
        'original_size_bytes',
        'is_icon',      // ✅ FIX: Added
        'icon_class',   // ✅ FIX: Added
    ];

    protected $casts = [
        'is_icon'       => 'boolean',
        'was_compressed'=> 'boolean',
    ];

    protected $appends = ['url', 'human_size', 'is_image'];

    // ── Relationships ─────────────────────────────────────────────────────────

    public function uploader()
    {
        return $this->belongsTo(User::class, 'uploaded_by');
    }

    public function featuredInPosts()
    {
        return $this->hasMany(BlogPost::class, 'media_id');
    }

    public function galleryPosts()
    {
        return $this->belongsToMany(BlogPost::class, 'blog_post_media')
            ->withPivot('sort_order')
            ->withTimestamps();
    }

    // ── Accessors ─────────────────────────────────────────────────────────────

    /**
     * Full public URL — returns empty string for icon records (no file on disk).
     */
    public function getUrlAttribute(): string
    {
        // ✅ FIX: Guard against null filename (icons have no file)
        if (empty($this->filename)) {
            return '';
        }

        return Storage::url($this->filename);
    }

    public function getHumanSizeAttribute(): string
    {
        $bytes = $this->size_bytes ?? 0;

        if ($bytes >= 1_048_576) return round($bytes / 1_048_576, 1) . ' MB';
        if ($bytes >= 1_024)     return round($bytes / 1_024) . ' KB';

        return $bytes . ' B';
    }

    /**
     * True for image/* mime types. Icons use 'icon/remixicon' so this stays false.
     */
    public function getIsImageAttribute(): bool
    {
        return str_starts_with($this->mime_type ?? '', 'image/');
    }

    // ── Scopes ────────────────────────────────────────────────────────────────

    public function scopeImages($query)
    {
        return $query->where('mime_type', 'like', 'image/%')
                     ->where('is_icon', false);
    }

    public function scopeDocuments($query)
    {
        return $query->where('mime_type', 'not like', 'image/%')
                     ->where('is_icon', false);
    }

    public function scopeIcons($query)
    {
        return $query->where('is_icon', true);
    }

    public function scopeInFolder($query, string $folder)
    {
        return $query->where('folder', $folder);
    }
}
