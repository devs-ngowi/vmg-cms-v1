<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SiteSetting extends Model
{
    use HasFactory;

    protected $connection = 'tenant';
    protected $table = 'site_settings';
    protected $primaryKey = 'id';

    protected $fillable = [
        'key',
        'value',
        'type',
        'group',
        'updated_by',
    ];

    public function updater(): BelongsTo
    {
        return $this->belongsTo(User::class, 'updated_by');
    }

    public function getTypedValueAttribute(): mixed
    {
        return match ($this->type) {
            'boolean' => filter_var($this->value, FILTER_VALIDATE_BOOLEAN),
            'integer' => (int) $this->value,
            'json', 'array' => $this->decodeJson($this->value),
            default => $this->value,
        };
    }

    public static function getValue(string $key, mixed $default = null): mixed
    {
        $setting = static::on('tenant')->where('key', $key)->first();

        return $setting ? $setting->typed_value : $default;
    }

    public static function getGroup(string $group): array
    {
        return static::on('tenant')
            ->where('group', $group)
            ->orderBy('key')
            ->get()
            ->mapWithKeys(fn (self $setting) => [$setting->key => $setting->typed_value])
            ->toArray();
    }

    public static function setValue(
        string $key,
        mixed $value,
        string $type = 'string',
        ?string $group = null,
        ?int $updatedBy = null
    ): self {
        $storedValue = match ($type) {
            'boolean' => $value ? 'true' : 'false',
            'integer' => (string) ((int) $value),
            'json', 'array' => json_encode($value ?? []),
            default => (string) ($value ?? ''),
        };

        return static::on('tenant')->updateOrCreate(
            ['key' => $key],
            [
                'value' => $storedValue,
                'type' => $type,
                'group' => $group ?? 'general',
                'updated_by' => $updatedBy,
            ]
        );
    }

    public static function has(string $key): bool
    {
        return static::on('tenant')->where('key', $key)->exists();
    }

    public static function getSidebarConfig(): array
    {
        $raw = static::on('tenant')
            ->where('group', 'sidebar')
            ->get()
            ->mapWithKeys(fn (self $setting) => [$setting->key => $setting->typed_value])
            ->toArray();

        return [
            'logo' => $raw['sidebar_logo'] ?? '',
            'company_name' => $raw['sidebar_company_name'] ?? '',
            'brand_color' => $raw['sidebar_brand_color'] ?? '#1e40af',
            'enabled_modules' => $raw['sidebar_visible_modules'] ?? [],
            'show_group_labels' => $raw['sidebar_show_group_labels'] ?? true,
        ];
    }

    protected function decodeJson(?string $value): array
    {
        if (blank($value)) {
            return [];
        }

        $decoded = json_decode($value, true);

        return is_array($decoded) ? $decoded : [];
    }
}
