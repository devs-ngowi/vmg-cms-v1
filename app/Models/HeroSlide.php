<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HeroSlide extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $fillable = [
        'headline',
        'subtext',
        'btn_label',
        'btn_url',
        'media_id',
        'sort_order',
        'is_active',
    ];

    public function media()
    {
        return $this->belongsTo(Media::class, 'media_id', 'id');
    }

    // Scope for frontend
    public function scopeActive($query)
    {
        return $query->where('is_active', true)->orderBy('sort_order');
    }
}
