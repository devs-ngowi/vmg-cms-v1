<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormField extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $fillable = [
        'form_id',
        'label',
        'field_type',
        'is_required',
        'sort_order',
        'options',       // ← was missing — caused options to be silently dropped
        'placeholder',   // ← was missing — caused placeholder to be silently dropped
    ];

    public function form()
    {
        return $this->belongsTo(Form::class, 'form_id', 'id');
    }

    public function responses()
    {
        return $this->hasMany(FormResponse::class, 'field_id', 'id');
    }
}
