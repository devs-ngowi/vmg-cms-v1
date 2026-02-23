<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use App\Models\Role;
use App\Models\Author;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'username',
        'full_name',
        'email',
        'password',
        'role_id',
        'status',
        'last_login',
    ];

    protected $hidden = [
        'password',
        'remember_token',

    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'last_login'        => 'datetime',
            'password'          => 'hashed',

        ];
    }


    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function author()
    {
        return $this->hasOne(Author::class);
    }


    public function getDisplayNameAttribute(): string
    {
        return $this->full_name ?? $this->username ?? $this->email;
    }


    public function hasPermission(string $module, string $action): bool
    {
        if (! $this->role) {
            return false;
        }

        $perm = $this->role->permissions()->where('module', $module)->first();

        if (! $perm) {
            return false;
        }

        return match ($action) {
            'view'   => (bool) $perm->can_view,
            'create' => (bool) $perm->can_create,
            'edit'   => (bool) $perm->can_edit,
            'delete' => (bool) $perm->can_delete,
            default  => false,
        };
    }

    public function isAdmin(): bool
    {
        return $this->role?->name === 'admin';
    }
}
