<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('content_categories', function (Blueprint $table) {
            $table->foreignId('category_id')
                ->constrained('categories', 'id')
                ->onDelete('cascade');

            $table->unsignedBigInteger('content_id');
            $table->string('content_type', 60);  // e.g. 'App\Models\BlogPost', 'App\Models\Project', etc.

            $table->primary(['content_id', 'content_type', 'category_id']);

            $table->index(['content_type', 'content_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('content_categories');
    }
};
