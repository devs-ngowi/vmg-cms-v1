<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('service_sub_packages', function (Blueprint $table) {
            $table->string('website_url', 500)->nullable()->after('description');
            $table->boolean('published_on_site')->default(true)->after('status');
        });
    }

    public function down(): void
    {
        Schema::table('service_sub_packages', function (Blueprint $table) {
            $table->dropColumn(['website_url', 'published_on_site']);
        });
    }
};
