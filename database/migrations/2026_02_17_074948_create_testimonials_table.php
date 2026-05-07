<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('testimonials', function (Blueprint $table) {
            $table->id();
            $table->string('client_name', 100);
            $table->string('company', 100)->nullable();
            $table->string('position', 80)->nullable();
            $table->text('quote');
            $table->tinyInteger('rating')->nullable(); // 1-5
            $table->foreignId('image_id')
                ->nullable()
                ->constrained('media', 'id')
                ->onDelete('set null');
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_approved')->default(false);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('testimonials');
    }
};
