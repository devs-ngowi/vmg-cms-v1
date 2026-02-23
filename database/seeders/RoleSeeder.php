<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            [
                "name" => "Admin",
                "description" => "Full access to manage users, roles, settings, and all content in the system."
            ],
            [
                "name" => "Editor",
                "description" => "Can create, edit, and publish website content such as articles, pages, and media."
            ],
            [
                "name" => "Author",
                "description" => "Can write and manage their own content but requires approval to publish."
            ],
            [
                "name" => "Moderator",
                "description" => "Can review, approve, or reject submitted content and manage comments."
            ],
            [
                "name" => "Viewer",
                "description" => "Has read-only access to published content within the CMS."
            ],
        ];

        foreach ($roles as $role) {
            Role::create($role);
        }
    }
}
