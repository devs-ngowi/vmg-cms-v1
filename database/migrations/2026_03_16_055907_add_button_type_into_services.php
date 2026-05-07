<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('services', function (Blueprint $table) {
            // 'read_more'   → links to internal service detail page (/main-services/{slug})
            // 'explore_more' → links to external website_url (requires website_url to be set)
            $table->enum('button_type', ['read_more', 'explore_more'])
                  ->default('read_more')
                  ->after('website_url');
        });
    }

    public function down(): void
    {
        Schema::table('services', function (Blueprint $table) {
            $table->dropColumn('button_type');
        });
    }
};
