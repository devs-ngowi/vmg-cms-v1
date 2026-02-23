<?php

namespace App\Models;

use App\Concerns\Trackable as ConcernsTrackable;
use App\Traits\Trackable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory, ConcernsTrackable;


    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 'slug', 'description', 'client_name',
        'start_date', 'end_date', 'featured_image_id',
        'author_id', 'order_number', 'status',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date'   => 'date',
    ];

    public function featuredImage()
    {
        return $this->belongsTo(Media::class, 'featured_image_id', 'id');
    }

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
