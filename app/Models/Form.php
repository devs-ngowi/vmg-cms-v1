<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $fillable = [
        'name',
        'form_type',
        'description',
        'is_active',
    ];

    public function fields()
    {
        return $this->hasMany(FormField::class, 'form_id', 'id')
            ->orderBy('sort_order');
    }

    public function submissions()
    {
        return $this->hasMany(FormSubmission::class, 'form_id', 'id');
    }
}
