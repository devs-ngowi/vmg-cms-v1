<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('content_media', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('content_id');
            $table->string('content_type', 60);

            $table->foreignId('media_id')
                ->constrained('media', 'id')
                ->onDelete('cascade');

            $table->unsignedInteger('sort_order')->default(0);

            $table->timestamps();

            $table->unique(['content_id', 'content_type', 'media_id']);
            $table->index(['content_type', 'content_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('content_media');
    }
};
