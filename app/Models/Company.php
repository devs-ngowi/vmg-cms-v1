<?php

namespace App\Models;

use Spatie\Multitenancy\Models\Tenant;

class Company extends Tenant
{
    protected $fillable = [
        'name', 'slug', 'domain', 'database',
        'logo', 'status', 'settings', 'plan',
    ];

    protected $casts = [
        'settings'   => 'array',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    const STATUS_ACTIVE    = 'active';
    const STATUS_INACTIVE  = 'inactive';
    const STATUS_SUSPENDED = 'suspended';

    // ── Spatie: which DB to switch to ─────────────────────────────────────────
    public function getDatabaseName(): string
    {
        return $this->database;
    }

    // ── Scopes ────────────────────────────────────────────────────────────────
    public function scopeActive($query)
    {
        return $query->where('status', self::STATUS_ACTIVE);
    }

    // ── Finders ───────────────────────────────────────────────────────────────
    public static function findByDomain(string $domain): ?self
    {
        return self::where('domain', $domain)->first();
    }

    public static function findBySlug(string $slug): ?self
    {
        return self::where('slug', $slug)->first();
    }

    // ── Accessors ─────────────────────────────────────────────────────────────
    public function getIsActiveAttribute(): bool
    {
        return $this->status === self::STATUS_ACTIVE;
    }

    /** Merge tenant-level settings with site_settings sidebar config */
    public function getSidebarBranding(): array
    {
        return [
            'name'  => $this->name,
            'logo'  => $this->logo,
            'plan'  => $this->plan,
            'color' => '#1e40af', 
        ];
    }
}
