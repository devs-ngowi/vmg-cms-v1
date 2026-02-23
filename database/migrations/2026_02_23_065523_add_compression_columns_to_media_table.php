<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('media', function (Blueprint $table) {
            // Add only columns that don't already exist
            if (!Schema::hasColumn('media', 'width')) {
                $table->unsignedInteger('width')->nullable()->after('size_bytes');
            }
            if (!Schema::hasColumn('media', 'height')) {
                $table->unsignedInteger('height')->nullable()->after('width');
            }
            if (!Schema::hasColumn('media', 'was_compressed')) {
                $table->boolean('was_compressed')->default(false)->after('height');
            }
            if (!Schema::hasColumn('media', 'original_size_bytes')) {
                $table->unsignedBigInteger('original_size_bytes')->nullable()->after('was_compressed');
            }
        });
    }

    public function down(): void
    {
        Schema::table('media', function (Blueprint $table) {
            $table->dropColumn(['width', 'height', 'was_compressed', 'original_size_bytes']);
        });
    }
};
