<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('media', function (Blueprint $table) {
            // Allow filename to be NULL for icon-only records
            $table->string('filename')->nullable()->change();

            // Add icon support columns (only if they don't exist yet)
            if (!Schema::hasColumn('media', 'is_icon')) {
                $table->boolean('is_icon')->default(false)->after('height');
            }
            if (!Schema::hasColumn('media', 'icon_class')) {
                $table->string('icon_class', 100)->nullable()->after('is_icon');
            }
        });
    }

    public function down(): void
    {
        Schema::table('media', function (Blueprint $table) {
            // Revert filename back to NOT NULL
            $table->string('filename')->nullable(false)->change();

            $table->dropColumn(['is_icon', 'icon_class']);
        });
    }
};
