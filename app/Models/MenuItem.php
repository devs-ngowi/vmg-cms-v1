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

    public function hasChildren(): bool
    {
        return $this->children()->exists();
    }
}
