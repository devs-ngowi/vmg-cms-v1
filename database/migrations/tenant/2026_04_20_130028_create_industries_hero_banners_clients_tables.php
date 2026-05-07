<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // ── industries ────────────────────────────────────────────────────────
        Schema::connection('tenant')->create('industries', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150);
            $table->string('slug', 150)->unique();
            $table->text('description')->nullable();
            $table->foreignId('media_id')->nullable()->constrained('media')->nullOnDelete();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // ── industry_media ────────────────────────────────────────────────────
        Schema::connection('tenant')->create('industry_media', function (Blueprint $table) {
            $table->id();
            $table->foreignId('industry_id')->constrained('industries')->cascadeOnDelete();
            $table->foreignId('media_id')->constrained('media')->cascadeOnDelete();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });

        // ── hero_slides ───────────────────────────────────────────────────────
        Schema::connection('tenant')->create('hero_slides', function (Blueprint $table) {
            $table->id();
            $table->string('headline', 200);
            $table->text('subtext')->nullable();
            $table->string('btn_label', 80)->nullable();
            $table->string('btn_url', 255)->nullable();
            $table->foreignId('media_id')->nullable()->constrained('media')->nullOnDelete();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // ── banners ───────────────────────────────────────────────────────────
        Schema::connection('tenant')->create('banners', function (Blueprint $table) {
            $table->id();
            $table->string('sub_title')->nullable();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('btn_one_text')->default('Contact Us');
            $table->string('btn_one_url')->default('/contact');
            $table->string('btn_two_text')->default('Get Started');
            $table->string('btn_two_url')->default('/services');
            $table->foreignId('bg_image_id')->nullable()->constrained('media')->nullOnDelete();
            $table->foreignId('banner_image_id')->nullable()->constrained('media')->nullOnDelete();
            $table->boolean('is_active')->default(true);
            $table->boolean('is_published')->default(false);
            $table->timestamps();
        });

        // ── client_logos ──────────────────────────────────────────────────────
        Schema::connection('tenant')->create('client_logos', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->foreignId('media_id')->constrained('media')->cascadeOnDelete();
            $table->string('website_url')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::connection('tenant')->dropIfExists('client_logos');
        Schema::connection('tenant')->dropIfExists('banners');
        Schema::connection('tenant')->dropIfExists('hero_slides');
        Schema::connection('tenant')->dropIfExists('industry_media');
        Schema::connection('tenant')->dropIfExists('industries');
    }
};
