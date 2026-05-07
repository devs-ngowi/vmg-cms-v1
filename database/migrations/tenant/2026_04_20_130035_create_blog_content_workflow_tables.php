<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // ── blog_posts ────────────────────────────────────────────────────────
        Schema::connection('tenant')->create('blog_posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->longText('content');
            $table->text('excerpt')->nullable();
            $table->foreignId('author_id')->nullable()->constrained('authors')->nullOnDelete();
            $table->foreignId('category_id')->nullable()->constrained('categories')->nullOnDelete();
            $table->foreignId('media_id')->nullable()->constrained('media')->nullOnDelete();
            $table->foreignId('seo_id')->nullable()->constrained('seo_settings')->nullOnDelete();
            $table->enum('status', ['draft', 'published', 'archived'])->default('draft');
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });

        // ── content_categories (polymorphic pivot) ────────────────────────────
        Schema::connection('tenant')->create('content_categories', function (Blueprint $table) {
            $table->foreignId('category_id')->constrained('categories')->cascadeOnDelete();
            $table->unsignedBigInteger('content_id');
            $table->string('content_type', 60);
            $table->primary(['category_id', 'content_id', 'content_type']);
            $table->index(['content_id', 'content_type']);
        });

        // ── content_media (polymorphic pivot) ─────────────────────────────────
        Schema::connection('tenant')->create('content_media', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('content_id');
            $table->string('content_type', 60);
            $table->foreignId('media_id')->constrained('media')->cascadeOnDelete();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
            $table->index(['content_id', 'content_type']);
        });

        // ── content_tags (polymorphic pivot) ──────────────────────────────────
        Schema::connection('tenant')->create('content_tags', function (Blueprint $table) {
            $table->foreignId('tag_id')->constrained('tags')->cascadeOnDelete();
            $table->unsignedBigInteger('content_id');
            $table->string('content_type', 60);
            $table->primary(['tag_id', 'content_id', 'content_type']);
            $table->index(['content_id', 'content_type']);
        });

        // ── workflows ─────────────────────────────────────────────────────────
        // Note: 'workflow' (singular) already exists; this creates 'workflows'
        Schema::connection('tenant')->create('workflows', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('content_id');
            $table->string('content_type', 60);
            $table->enum('step', [
                'draft', 'review', 'editorial_approval', 'legal_review',
                'seo_optimization', 'final_approval', 'scheduled',
                'published', 'rejected', 'archived',
            ])->default('draft');
            $table->foreignId('assigned_to')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('assigned_by')->nullable()->constrained('users')->nullOnDelete();
            $table->text('notes')->nullable();
            $table->timestamps();
            $table->index(['content_id', 'content_type']);
        });
    }

    public function down(): void
    {
        Schema::connection('tenant')->dropIfExists('workflows');
        Schema::connection('tenant')->dropIfExists('content_tags');
        Schema::connection('tenant')->dropIfExists('content_media');
        Schema::connection('tenant')->dropIfExists('content_categories');
        Schema::connection('tenant')->dropIfExists('blog_posts');
    }
};
