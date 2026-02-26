<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Banner extends Model
{
    protected $fillable = [
        'sub_title', 'title', 'description',
        'btn_one_text', 'btn_one_url',
        'btn_two_text', 'btn_two_url',
        'bg_image_id', 'banner_image_id', 'is_active', 'is_published'
    ];

    public function bgImage(): BelongsTo {
        return $this->belongsTo(Media::class, 'bg_image_id');
    }

    public function bannerImage(): BelongsTo {
        return $this->belongsTo(Media::class, 'banner_image_id');
    }
}
