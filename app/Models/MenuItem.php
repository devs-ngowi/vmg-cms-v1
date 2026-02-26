<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MenuItem extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $fillable = [
        'menu_id',
        'parent_id',
        'label',
        'url',
        'sort_order',
        'target',
        'is_visible',
    ];

    protected $casts = [
        'is_visible' => 'boolean',
    ];

    public function menu()
    {
        return $this->belongsTo(Menu::class, 'menu_id', 'id');
    }

    public function parent()
    {
        return $this->belongsTo(MenuItem::class, 'parent_id', 'id');
    }

    public function children(): HasMany
    {
        return $this->hasMany(MenuItem::class, 'parent_id', 'id')
            ->orderBy('sort_order');
    }

    /**
     * ✅ Scope to get only visible items
     */
    public function scopeVisible($query)
    {
        return $query->where('is_visible', true);
    }

    /**
     * ✅ Scope to get only hidden items
     */
    public function scopeHidden($query)
    {
        return $query->where('is_visible', false);
    }

    public function hasChildren(): bool
    {
        return $this->children()->exists();
    }
}
