<?php

namespace App\Observers;

use App\Models\AuditLog;
use App\Models\BlogPost;

class BlogPostObserver
{
    /**
     * Handle the BlogPost "created" event.
     */
   public function created(BlogPost $post)
{
    AuditLog::create([
        'user_id'     => auth()->id(),
        'action'      => 'created',
        'entity_type' => get_class($post),
        'entity_id'   => $post->post_id,
        'new_value'   => $post->toArray(),
    ]);
}

public function updated(BlogPost $post)
{
    $changes = $post->getChanges();

    if (!empty($changes)) {
        AuditLog::create([
            'user_id'     => auth()->id(),
            'action'      => 'updated',
            'entity_type' => get_class($post),
            'entity_id'   => $post->post_id,
            'old_value'   => $post->getOriginal(),
            'new_value'   => $changes,
        ]);
    }
}

    /**
     * Handle the BlogPost "deleted" event.
     */
    public function deleted(BlogPost $blogPost): void
    {
        //
    }

    /**
     * Handle the BlogPost "restored" event.
     */
    public function restored(BlogPost $blogPost): void
    {
        //
    }

    /**
     * Handle the BlogPost "force deleted" event.
     */
    public function forceDeleted(BlogPost $blogPost): void
    {
        //
    }
}
