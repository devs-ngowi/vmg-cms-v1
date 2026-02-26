<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SeoSetting extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $fillable = [
        'meta_title',
        'meta_description',
        'og_image_id',
        'canonical_url',
        'robots',
    ];

    /**
     * Fixed: third param is the OWNER KEY on the related model (media.id),
     * not the foreign key on this table. The original had 'media_id' which
     * is wrong — that would look up media.media_id, a column that doesn't exist.
     */
    public function ogImage()
    {
        return $this->belongsTo(Media::class, 'og_image_id', 'id');
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    /** Get or create the single global SEO record */
    public static function global(): self
    {
        return self::with('ogImage')->firstOrCreate([], [
            'meta_title'       => '',
            'meta_description' => '',
            'og_image_id'      => null,
            'canonical_url'    => '',
            'robots'           => 'index, follow',
        ]);
    }

    /** Robots directive options */
    public static function robotsOptions(): array
    {
        return [
            'index, follow',
            'noindex, follow',
            'index, nofollow',
            'noindex, nofollow',
        ];
    }
}
