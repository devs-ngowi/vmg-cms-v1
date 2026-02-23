<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('hero_slides', function (Blueprint $table) {
            $table->id();
            $table->string('headline', 200);
            $table->text('subtext')->nullable();
            $table->string('btn_label', 80)->nullable();
            $table->string('btn_url', 255)->nullable();
            $table->foreignId('media_id')
                ->nullable()
                ->constrained('media', 'id')
                ->onDelete('set null');
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('hero_slides');
    }
};
