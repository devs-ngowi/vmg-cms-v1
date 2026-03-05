<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Industry extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $fillable = [
        'name', 'slug', 'description', 'media_id', 'sort_order', 'is_active',
    ];

    // ── Featured image ────────────────────────────────────────────────────────

    public function media()
    {
        return $this->belongsTo(Media::class, 'media_id', 'id');
    }

    // ── Gallery (many-to-many) ────────────────────────────────────────────────

    public function gallery()
    {
        return $this->belongsToMany(Media::class, 'industry_media')
            ->withPivot('sort_order')
            ->orderBy('industry_media.sort_order');
    }
}
