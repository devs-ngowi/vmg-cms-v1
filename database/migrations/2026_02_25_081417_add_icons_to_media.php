<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('media', function (Blueprint $table) {

            $table->string('icon_class')->nullable()->after('alt_text');
            $table->boolean('is_icon')->default(false)->after('icon_class');
            $table->index(['is_icon', 'folder']);
        });
    }

    public function down(): void
    {
        Schema::table('media', function (Blueprint $table) {
            $table->dropColumn(['icon_class', 'is_icon']);
        });
    }
};
