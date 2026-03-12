<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServicePackage extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_id',
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

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function subPackages()
    {
        return $this->hasMany(ServiceSubPackage::class, 'service_package_id')
            ->where('status', 'published')
            ->orderBy('order_number');
    }

    public function allSubPackages()
    {
        return $this->hasMany(ServiceSubPackage::class, 'service_package_id')
            ->orderBy('order_number');
    }
}
