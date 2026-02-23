<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormSubmission extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $fillable = [
        'form_id',
        'sender_name',
        'sender_email',
        'phone',
        'status',
        'submitted_at',
    ];

    protected $casts = [
        'submitted_at' => 'datetime',
    ];

    public function form()
    {
        return $this->belongsTo(Form::class, 'form_id', 'id');
    }

    public function responses()
    {
        return $this->hasMany(FormResponse::class, 'submission_id', 'id');
    }
}
