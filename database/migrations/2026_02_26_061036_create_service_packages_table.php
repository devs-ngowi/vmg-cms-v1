<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('service_packages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('service_id')->constrained('services')->onDelete('cascade');
            $table->string('title', 255);
            $table->string('slug', 255);
            $table->text('short_description'); // Shows in card
            $table->longText('description')->nullable(); // Full description
            $table->json('features')->nullable(); // Array of features
            $table->unsignedInteger('order_number')->default(0);
            $table->enum('status', ['draft', 'published', 'archived'])->default('published');
            $table->timestamps();

            // Indexes
            $table->index('service_id');
            $table->index('status');
            $table->unique(['service_id', 'slug']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('service_packages');
    }
};
