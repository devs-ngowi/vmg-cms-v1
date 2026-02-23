<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SeoSetting extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $fillable = [
        'meta_title',
        'meta_description',
        'og_image_id',
        'canonical_url',
        'robots',
    ];

    public function ogImage()
    {
        return $this->belongsTo(Media::class, 'og_image_id', 'media_id');
    }
}
