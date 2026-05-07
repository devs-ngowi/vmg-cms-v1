<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('form_fields', function (Blueprint $table) {
            $table->id();
            $table->foreignId('form_id')
                ->constrained('forms', 'id')
                ->onDelete('cascade');

            $table->string('label', 150);
            $table->enum('field_type', [
                'text', 'textarea', 'email', 'tel', 'number',
                'select', 'radio', 'checkbox', 'date', 'file'
            ]);

            $table->boolean('is_required')->default(false);
            $table->unsignedInteger('sort_order')->default(0);

            $table->timestamps();

            $table->index('form_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('form_fields');
    }
};
