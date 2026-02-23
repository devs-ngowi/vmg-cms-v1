<?php

namespace App\Models;

use App\Concerns\Trackable as ConcernsTrackable;
use App\Traits\Trackable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory, ConcernsTrackable;


    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 'slug', 'content', 'meta_title', 'meta_description',
        'status', 'author_id', 'seo_id', 'published_at',
    ];

    protected $casts = [
        'published_at' => 'datetime',
    ];

    public function author()
    {
        return $this->belongsTo(Author::class, 'author_id', 'id');
    }

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
        'content',
        'content_tags',
        'content_id',
        'tag_id'
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
