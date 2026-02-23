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
    ];

    protected $appends = ['url', 'human_size', 'is_image'];

    // ── Relationships ─────────────────────────────────────────────────────────

    public function uploader()
    {
        return $this->belongsTo(User::class, 'uploaded_by');
    }

    /** Blog posts that use this as a featured image */
    public function featuredInPosts()
    {
        return $this->hasMany(BlogPost::class, 'media_id');
    }

    /** Blog posts that include this in their gallery */
    public function galleryPosts()
    {
        return $this->belongsToMany(BlogPost::class, 'blog_post_media')
            ->withPivot('sort_order')
            ->withTimestamps();
    }

    // ── Accessors ─────────────────────────────────────────────────────────────

    /** Full public storage URL */
    public function getUrlAttribute(): string
    {
        return Storage::url($this->filename);
    }

    /** e.g. "2.4 MB" or "340 KB" */
    public function getHumanSizeAttribute(): string
    {
        $bytes = $this->size_bytes ?? 0;

        if ($bytes >= 1_048_576) {
            return round($bytes / 1_048_576, 1) . ' MB';
        }
        if ($bytes >= 1_024) {
            return round($bytes / 1_024) . ' KB';
        }
        return $bytes . ' B';
    }

    public function getIsImageAttribute(): bool
    {
        return str_starts_with($this->mime_type ?? '', 'image/');
    }

    // ── Scopes ────────────────────────────────────────────────────────────────

    public function scopeImages($query)
    {
        return $query->where('mime_type', 'like', 'image/%');
    }

    public function scopeDocuments($query)
    {
        return $query->where('mime_type', 'not like', 'image/%');
    }

    public function scopeInFolder($query, string $folder)
    {
        return $query->where('folder', $folder);
    }
}
