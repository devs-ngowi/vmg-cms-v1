<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('content_tags', function (Blueprint $table) {
            $table->foreignId('tag_id')
                ->constrained('tags', 'id')
                ->onDelete('cascade');

            $table->unsignedBigInteger('content_id');
            $table->string('content_type', 60);

            $table->primary(['content_id', 'content_type', 'tag_id']);

            $table->index(['content_type', 'content_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('content_tags');
    }
};
