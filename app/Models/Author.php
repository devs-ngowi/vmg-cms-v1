<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    use HasFactory;

    protected $primaryKey = 'author_id';

    protected $fillable = [
        'user_id',
        'name',
        'bio',
        'profile_image_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }


}
