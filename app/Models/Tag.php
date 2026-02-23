<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'slug'];

    public function blogPosts()
    {
        return $this->morphedByMany(BlogPost::class, 'taggable', 'taggables');
    }

    public function pages()
    {
        return $this->morphedByMany(Page::class, 'taggable', 'taggables');
    }

    public function services()
    {
        return $this->morphedByMany(Service::class, 'taggable', 'taggables');
    }

   
    public function getTotalUsageAttribute()
    {
        return $this->blog_posts_count
            + $this->pages_count
            + $this->services_count;
            // + $this->projects_count + ... if you add more
    }
}
