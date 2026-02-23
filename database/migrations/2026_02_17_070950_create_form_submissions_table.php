<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('form_submissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('form_id')
                ->constrained('forms', 'id')
                ->onDelete('cascade');

            $table->string('sender_name', 100)->nullable();
            $table->string('sender_email', 150)->nullable();
            $table->string('phone', 30)->nullable();

            $table->enum('status', ['new', 'read', 'responded', 'spam', 'archived'])->default('new');

            $table->timestamp('submitted_at')->useCurrent();

            $table->timestamps();

            $table->index('form_id');
            $table->index('submitted_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('form_submissions');
    }
};
