<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceSubPackage extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_package_id',
        'title',
        'slug',
        'short_description',
        'description',
        'website_url',          // ← new
        'features',
        'order_number',
        'status',
        'published_on_site',    // ← new
    ];

    protected $casts = [
        'features'          => 'array',
        'published_on_site' => 'boolean',
    ];

    public function package()
    {
        return $this->belongsTo(ServicePackage::class, 'service_package_id');
    }
}
