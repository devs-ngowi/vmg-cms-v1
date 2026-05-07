<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('menu_items', function (Blueprint $table) {
            $table->id();

            $table->foreignId('menu_id')
                ->constrained('menus', 'id')
                ->onDelete('cascade');

            $table->foreignId('parent_id')
                ->nullable()
                ->constrained('menu_items', 'id')
                ->onDelete('cascade');

            $table->string('label', 100);
            $table->string('url', 255);
            $table->unsignedInteger('sort_order')->default(0);
            $table->enum('target', ['_self', '_blank', '_parent', '_top'])->default('_self');

            $table->timestamps();

            $table->index('menu_id');
            $table->index('parent_id');
            $table->index('sort_order');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('menu_items');
    }
};
