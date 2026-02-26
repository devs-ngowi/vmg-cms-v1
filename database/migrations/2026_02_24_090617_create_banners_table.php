<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
       Schema::create('banners', function (Blueprint $table) {
        $table->id();
        $table->string('sub_title')->nullable();
        $table->string('title');
        $table->text('description')->nullable();
        $table->string('btn_one_text')->default('Contact Us');
        $table->string('btn_one_url')->default('/contact');
        $table->string('btn_two_text')->default('Get Started');
        $table->string('btn_two_url')->default('/services');

        // Media relationships
        $table->foreignId('bg_image_id')->nullable()->constrained('media')->nullOnDelete();
        $table->foreignId('banner_image_id')->nullable()->constrained('media')->nullOnDelete();

        $table->boolean('is_active')->default(true);
        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('banners');
    }
};
