<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255);
            $table->string('slug', 255)->unique()->index();
            $table->text('description')->nullable();
            $table->string('client_name', 150)->nullable();
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->foreignId('featured_image_id')->nullable()->constrained('media', 'id')->onDelete('set null');
            $table->foreignId('author_id')->nullable()->constrained('authors', 'id')->onDelete('set null');
            $table->unsignedInteger('order_number')->default(0);
            $table->enum('status', ['draft', 'in_progress', 'completed', 'archived'])->default('draft');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
