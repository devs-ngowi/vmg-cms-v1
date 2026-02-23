<?php

namespace App\Models;

use App\Concerns\ProfileValidationRules;
use App\Concerns\Trackable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    use HasFactory, Trackable;


    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 'slug', 'content', 'excerpt',
        'author_id', 'category_id', 'media_id', 'seo_id',
        'status', 'published_at',
    ];

    protected $casts = [
        'published_at' => 'datetime',
    ];

    public function author()
    {
        return $this->belongsTo(Author::class, 'author_id', 'id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function featuredMedia()
    {
        return $this->belongsTo(Media::class, 'media_id', 'id');
    }

    // Categories (many-to-many polymorphic)
public function categories()
{
    return $this->morphToMany(
        Category::class,
        'content',
        'content_categories',
        'content_id',
        'category_id'
    );
}

// Tags (many-to-many polymorphic)
public function tags()
{
    return $this->morphToMany(
        Tag::class,
        'taggable',
        'taggables'
    );
}

// Media / Gallery (many-to-many polymorphic with pivot sort_order)
public function media()
{
    return $this->morphToMany(
        Media::class,
        'content',
        'content_media',
        'content_id',
        'media_id'
    )->withPivot('sort_order')->orderByPivot('sort_order');
}

// In e.g. app/Models/BlogPost.php
public function workflows()
{
    return $this->morphMany(Workflow::class, 'content');
}

public function currentWorkflow()
{
    return $this->workflows()->latest('updated_at')->first();
}

public function latestWorkflowStep()
{
    return $this->currentWorkflow()?->step ?? 'draft';
}
}
