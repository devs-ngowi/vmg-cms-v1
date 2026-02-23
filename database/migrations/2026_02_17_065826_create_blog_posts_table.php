<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('blog_posts', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255);
            $table->string('slug', 255)->unique()->index();
            $table->longText('content');
            $table->text('excerpt')->nullable();
            $table->foreignId('author_id')->nullable()->constrained('authors', 'id')->onDelete('set null');
            $table->foreignId('category_id')->nullable()->constrained('categories', 'id')->onDelete('set null');
            $table->foreignId('media_id')->nullable()->constrained('media', 'id')->onDelete('set null');
            $table->unsignedBigInteger('seo_id')->nullable();
            $table->enum('status', ['draft', 'published', 'archived'])->default('draft');
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('blog_posts');
    }
};
