<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $fillable = [
        'name',
        'location',
        'is_active',
    ];

    public function items()
    {
        return $this->hasMany(MenuItem::class, 'menu_id', 'id')
            ->orderBy('sort_order');
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeAtLocation($query, string $location)
    {
        return $query->where('location', $location)->where('is_active', true);
    }
}
