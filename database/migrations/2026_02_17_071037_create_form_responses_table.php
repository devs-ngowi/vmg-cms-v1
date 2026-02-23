<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('form_responses', function (Blueprint $table) {
            $table->id();

            $table->foreignId('submission_id')
                ->constrained('form_submissions', 'id')
                ->onDelete('cascade');

            $table->foreignId('field_id')
                ->constrained('form_fields', 'id')
                ->onDelete('cascade');

            $table->text('value')->nullable();

            $table->timestamps();

            $table->index(['submission_id', 'field_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('form_responses');
    }
};
