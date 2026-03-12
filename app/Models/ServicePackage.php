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
        'features' => 'array',
    ];

    // ── Relationships ──────────────────────────────────────────────────────────

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    /** Published sub-packages only (for public API) */
    public function subPackages()
    {
        return $this->hasMany(ServiceSubPackage::class)
                    ->where('status', 'published')
                    ->orderBy('order_number');
    }

    /** All sub-packages (for admin) */
    public function allSubPackages()
    {
        return $this->hasMany(ServiceSubPackage::class)
                    ->orderBy('order_number');
    }
}
