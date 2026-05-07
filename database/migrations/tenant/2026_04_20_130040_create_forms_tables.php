<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // ── forms ─────────────────────────────────────────────────────────────
        Schema::connection('tenant')->create('forms', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150);
            $table->enum('form_type', [
                'contact', 'newsletter', 'job_application', 'feedback', 'custom',
            ])->default('custom');
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // ── form_fields ───────────────────────────────────────────────────────
        Schema::connection('tenant')->create('form_fields', function (Blueprint $table) {
            $table->id();
            $table->foreignId('form_id')->constrained('forms')->cascadeOnDelete();
            $table->string('label', 150);
            $table->enum('field_type', [
                'text', 'textarea', 'email', 'tel', 'number',
                'select', 'radio', 'checkbox', 'date', 'file',
            ]);
            $table->boolean('is_required')->default(false);
            $table->unsignedInteger('sort_order')->default(0);
            $table->text('options')->nullable();       // JSON encoded options list
            $table->string('placeholder')->nullable();
            $table->timestamps();
        });

        // ── form_submissions ──────────────────────────────────────────────────
        Schema::connection('tenant')->create('form_submissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('form_id')->constrained('forms')->cascadeOnDelete();
            $table->string('sender_name', 100)->nullable();
            $table->string('sender_email', 150)->nullable();
            $table->string('phone', 30)->nullable();
            $table->enum('status', ['new', 'read', 'replied', 'archived'])->default('new');
            $table->timestamp('submitted_at')->useCurrent();
            $table->timestamps();
        });

        // ── form_responses ────────────────────────────────────────────────────
        Schema::connection('tenant')->create('form_responses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('submission_id')->constrained('form_submissions')->cascadeOnDelete();
            $table->foreignId('field_id')->constrained('form_fields')->cascadeOnDelete();
            $table->text('value')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::connection('tenant')->dropIfExists('form_responses');
        Schema::connection('tenant')->dropIfExists('form_submissions');
        Schema::connection('tenant')->dropIfExists('form_fields');
        Schema::connection('tenant')->dropIfExists('forms');
    }
};
