<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageView extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    public $timestamps = false; 

    protected $fillable = [
        'content_id',
        'content_type',
        'user_id',
        'ip_address',
        'user_agent',
        'viewed_at',
    ];

    protected $casts = [
        'viewed_at' => 'datetime',
    ];

    public function content()
    {
        return $this->morphTo('content', 'content_type', 'content_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Example scope: views in last 30 days
    public function scopeRecent($query, $days = 30)
    {
        return $query->where('viewed_at', '>=', now()->subDays($days));
    }
}
