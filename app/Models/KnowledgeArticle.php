<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KnowledgeArticle extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id', 'title', 'slug', 'excerpt', 'content',
        'media_id', 'sort_order', 'is_active', 'is_featured',
    ];

    protected $casts = [
        'is_active'   => 'boolean',
        'is_featured' => 'boolean',
    ];

    public function category()
    {
        return $this->belongsTo(KnowledgeCategory::class, 'category_id');
    }

    public function media()
    {
        return $this->belongsTo(Media::class, 'media_id');
    }

    public function gallery()
    {
        return $this->belongsToMany(Media::class, 'knowledge_article_media')
            ->withPivot('sort_order')
            ->orderBy('knowledge_article_media.sort_order');
    }
}
