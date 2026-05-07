<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // ── categories ────────────────────────────────────────────────────────
        Schema::connection('tenant')->create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('slug', 120)->unique();
            $table->text('description')->nullable();
            $table->foreignId('parent_id')->nullable()->constrained('categories')->nullOnDelete();
            $table->timestamps();
        });

        // ── audit_logs ────────────────────────────────────────────────────────
        Schema::connection('tenant')->create('audit_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users')->nullOnDelete();
            $table->enum('action', [
                'created', 'updated', 'deleted', 'restored',
                'published', 'unpublished', 'approved', 'rejected',
                'assigned', 'status_changed', 'login', 'logout', 'password_reset',
            ]);
            $table->string('entity_type', 100);
            $table->unsignedBigInteger('entity_id');
            $table->json('old_value')->nullable();
            $table->json('new_value')->nullable();
            $table->timestamp('created_at')->useCurrent();
        });

        // ── authors ───────────────────────────────────────────────────────────
        Schema::connection('tenant')->create('authors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->string('name', 100);
            $table->text('bio')->nullable();
            $table->foreignId('profile_image_id')->nullable()->constrained('media')->nullOnDelete();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::connection('tenant')->dropIfExists('authors');
        Schema::connection('tenant')->dropIfExists('audit_logs');
        Schema::connection('tenant')->dropIfExists('categories');
    }
};
