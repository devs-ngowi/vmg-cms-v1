<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('services', function (Blueprint $table) {
            $table->foreignId('website_logo_id')
                  ->nullable()
                  ->after('website_url')
                  ->constrained('media', 'id')
                  ->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::table('services', function (Blueprint $table) {
            $table->dropForeign(['website_logo_id']);
            $table->dropColumn('website_logo_id');
        });
    }
};
