<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workflow extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $fillable = [
        'content_id',
        'content_type',
        'step',
        'assigned_to',
        'assigned_by',
        'notes',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // ── Step definitions ──────────────────────────────────────────────────────

    const STEPS = ['draft', 'review', 'published', 'archived'];

    const STEP_LABELS = [
        'draft'     => 'Draft',
        'review'    => 'In Review',
        'published' => 'Published',
        'archived'  => 'Archived',
    ];

    // Map full class names → human-readable content types
    const TYPE_LABELS = [
        'App\\Models\\BlogPost' => 'Blog Post',
        'App\\Models\\Page'     => 'Page',
        'App\\Models\\Service'  => 'Service',
        'App\\Models\\Project'  => 'Project',
    ];

    // ── Relationships ─────────────────────────────────────────────────────────

    /**
     * Fixed: third param must be the LOCAL foreign key column (content_id),
     * not 'id' (which was pointing at the wrong column).
     */
    public function content()
    {
        return $this->morphTo('content', 'content_type', 'content_id');
    }

    public function assignee()
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }

    public function assigner()
    {
        return $this->belongsTo(User::class, 'assigned_by');
    }

    // ── Scopes ────────────────────────────────────────────────────────────────

    public function scopeAtStep($query, string $step)
    {
        return $query->where('step', $step);
    }

    public function scopeForContentType($query, string $type)
    {
        return $query->where('content_type', $type);
    }

    /**
     * Only the LATEST workflow record per content item.
     * Uses a subquery so we can chain further scopes.
     */
    public function scopeLatestPerContent($query)
    {
        return $query->whereIn('id', function ($sub) {
            $sub->selectRaw('MAX(id)')
                ->from('workflows')
                ->groupBy('content_type', 'content_id');
        });
    }

    // ── Static helpers ────────────────────────────────────────────────────────

    /** Get the latest workflow entry for a given model instance */
    public static function currentFor($content): ?self
    {
        return self::where('content_type', get_class($content))
            ->where('content_id', $content->getKey())
            ->latest('updated_at')
            ->first();
    }

    /** Record a new step transition */
    public static function transition($content, string $step, ?int $assignedTo = null, ?string $notes = null): self
    {
        return self::create([
            'content_type' => get_class($content),
            'content_id'   => $content->getKey(),
            'step'         => $step,
            'assigned_by'  => auth()->id(),
            'assigned_to'  => $assignedTo ?? auth()->id(),
            'notes'        => $notes,
        ]);
    }

    // ── Accessors ─────────────────────────────────────────────────────────────

    public function getStepLabelAttribute(): string
    {
        return self::STEP_LABELS[$this->step] ?? ucfirst($this->step);
    }

    public function getTypeLabelAttribute(): string
    {
        return self::TYPE_LABELS[$this->content_type] ?? class_basename($this->content_type);
    }

    // ── Instance helpers ──────────────────────────────────────────────────────

    public function isAtStep(string $step): bool
    {
        return $this->step === $step;
    }

    public function nextStep(): ?string
    {
        $index = array_search($this->step, self::STEPS);
        return ($index !== false && $index < count(self::STEPS) - 1)
            ? self::STEPS[$index + 1]
            : null;
    }

    public function prevStep(): ?string
    {
        $index = array_search($this->step, self::STEPS);
        return ($index !== false && $index > 0)
            ? self::STEPS[$index - 1]
            : null;
    }
}
