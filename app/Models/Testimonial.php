<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $fillable = [
        'client_name', 'company', 'position', 'quote',
        'rating', 'image_id', 'is_featured', 'is_approved',
    ];

    public function image()
    {
        return $this->belongsTo(Media::class, 'image_id', 'id');
    }

    public function scopeApproved($query)
    {
        return $query->where('is_approved', true);
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }
}
