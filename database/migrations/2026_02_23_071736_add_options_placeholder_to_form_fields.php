<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('form_fields', function (Blueprint $table) {
            if (!Schema::hasColumn('form_fields', 'options')) {
                $table->text('options')->nullable()->after('sort_order');
            }
            if (!Schema::hasColumn('form_fields', 'placeholder')) {
                $table->string('placeholder', 191)->nullable()->after('options');
            }
        });

        Schema::table('form_submissions', function (Blueprint $table) {
            if (!Schema::hasColumn('form_submissions', 'status')) {
                $table->string('status', 50)->default('new')->after('submitted_at');
            }
        });
    }

    public function down(): void
    {
        Schema::table('form_fields', function (Blueprint $table) {
            $table->dropColumn(['options', 'placeholder']);
        });
    }
};
