<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vacancy extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 'department', 'location', 'type',
        'description', 'deadline', 'author_id', 'status',
    ];

    protected $casts = [
        'deadline' => 'date',
    ];

    public function author()
    {
        return $this->belongsTo(Author::class, 'author_id', 'id');
    }


public function workflows()
{
    return $this->morphMany(Workflow::class, 'content');
}

public function currentWorkflow()
{
    return $this->workflows()->latest('updated_at')->first();
}

public function latestWorkflowStep()
{
    return $this->currentWorkflow()?->step ?? 'draft';
}
}
