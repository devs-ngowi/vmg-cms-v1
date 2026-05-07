<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // MySQL requires the full ENUM definition to be re-declared when adding values.
        // We also set a safe default so existing rows are not affected.
        DB::statement("
            ALTER TABLE form_submissions
            MODIFY COLUMN status ENUM('new','read','replied','archived')
            NOT NULL DEFAULT 'new'
        ");
    }

    public function down(): void
    {
        // Revert to whatever the original enum was — adjust if different
        DB::statement("
            ALTER TABLE form_submissions
            MODIFY COLUMN status ENUM('new','read')
            NOT NULL DEFAULT 'new'
        ");
    }
};
