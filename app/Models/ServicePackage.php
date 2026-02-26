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
        'features',
        'order_number',
        'status',
    ];

    protected $casts = [
        'features' => 'array', // JSON array of features
    ];

    // ── Relationships ──────────────────────────────────────────────────────────

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
