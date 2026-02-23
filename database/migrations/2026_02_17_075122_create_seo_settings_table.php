<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('seo_settings', function (Blueprint $table) {
            $table->id();
            $table->string('meta_title', 255)->nullable();
            $table->text('meta_description')->nullable();
            $table->foreignId('og_image_id')
                ->nullable()
                ->constrained('media', 'id')
                ->onDelete('set null');
            $table->string('canonical_url', 255)->nullable();
            $table->string('robots', 100)->nullable()->default('index, follow'); // e.g. "noindex, nofollow", "index, nofollow"
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('seo_settings');
    }
};
