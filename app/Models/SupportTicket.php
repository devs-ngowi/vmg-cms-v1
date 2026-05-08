<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SupportTicket extends Model
{
    protected $connection = 'tenant';

    protected $fillable = [
        'ticket_number', 'name', 'email', 'phone', 'channel',
        'category', 'priority', 'subject', 'message', 'status',
        'admin_notes', 'assigned_to', 'first_responded_at', 'resolved_at',
    ];

    protected $casts = [
        'first_responded_at' => 'datetime',
        'resolved_at'        => 'datetime',
    ];

    protected static function boot(): void
    {
        parent::boot();

        static::creating(function (self $ticket) {
            $ticket->ticket_number = self::generateTicketNumber();
        });
    }

    private static function generateTicketNumber(): string
    {
        $latest = self::max('id') ?? 0;
        return 'TKT-' . str_pad($latest + 1, 6, '0', STR_PAD_LEFT);
    }

    public function replies(): HasMany
    {
        return $this->hasMany(SupportTicketReply::class);
    }

    public function assignee(): BelongsTo
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }

    public function getIsOverdueAttribute(): bool
    {
        if (in_array($this->status, ['resolved', 'closed'])) return false;
        return $this->created_at->diffInHours(now()) > 48;
    }
}
