<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientLogo extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $fillable = [
        'name', 'media_id', 'website_url', 'sort_order', 'is_active',
    ];

    public function media()
    {
        return $this->belongsTo(Media::class, 'media_id', 'id');
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true)->orderBy('sort_order');
    }
}
