<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;

    protected $connection = 'tenant';

    protected $primaryKey = 'id';

    protected $fillable = [
        'name',
        'email',
        'category',
        'rating',
        'message',
        'status',
        'admin_notes',
        'reviewed_at',
    ];

    protected $casts = [
        'rating'      => 'integer',
        'reviewed_at' => 'datetime',
    ];

    // ── Scopes ────────────────────────────────────────────────────────────────

    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }

    public function scopeReviewed($query)
    {
        return $query->where('status', 'reviewed');
    }

    public function scopeResolved($query)
    {
        return $query->where('status', 'resolved');
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    public function getCategoryLabelAttribute(): string
    {
        return match ($this->category) {
            'general'    => 'General Feedback',
            'compliment' => 'Compliment / Praise',
            'suggestion' => 'Suggestion',
            'complaint'  => 'Complaint',
            'other'      => 'Other',
            default      => ucfirst($this->category),
        };
    }

    public function getStatusLabelAttribute(): string
    {
        return match ($this->status) {
            'pending'  => 'Pending',
            'reviewed' => 'Reviewed',
            'resolved' => 'Resolved',
            default    => ucfirst($this->status),
        };
    }
}
