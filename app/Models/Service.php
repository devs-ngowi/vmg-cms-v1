<?php

namespace App\Models;

use App\Concerns\Trackable as ConcernsTrackable;
use App\Traits\Trackable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory, ConcernsTrackable;

    protected $primaryKey = 'id';
    protected $fillable = [
        'title', 'slug', 'short_description', 'description',
        'icon', 'image_id', 'order_number', 'seo_id', 'status',
    ];

    // ── Relationships ──────────────────────────────────────────────────────────

    public function image()
    {
        return $this->belongsTo(Media::class, 'image_id', 'id');
    }

    /**
     * ✅ NEW: Service has many packages
     * Each service can have multiple packages/cards
     */
    public function packages()
    {
        return $this->hasMany(ServicePackage::class)
            ->where('status', 'published')
            ->orderBy('order_number');
    }

    public function allPackages()
    {
        return $this->hasMany(ServicePackage::class)
            ->orderBy('order_number');
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

    // Workflow
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
