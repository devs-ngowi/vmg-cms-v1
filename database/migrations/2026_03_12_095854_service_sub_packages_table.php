<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('service_sub_packages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('service_package_id')
                  ->constrained('service_packages')
                  ->onDelete('cascade');
            $table->string('title', 255);
            $table->string('slug', 255);
            $table->text('short_description')->nullable();
            $table->longText('description')->nullable();
            $table->json('features')->nullable();
            $table->unsignedInteger('order_number')->default(0);
            $table->enum('status', ['draft', 'published', 'archived'])->default('published');
            $table->timestamps();

            $table->index('service_package_id');
            $table->index('status');
            $table->unique(['service_package_id', 'slug']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('service_sub_packages');
    }
};
