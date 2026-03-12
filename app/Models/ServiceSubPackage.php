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
        'features',
        'order_number',
        'status',
    ];

    protected $casts = [
        'features' => 'array',
    ];

    public function package()
    {
        return $this->belongsTo(ServicePackage::class, 'service_package_id');
    }
}
