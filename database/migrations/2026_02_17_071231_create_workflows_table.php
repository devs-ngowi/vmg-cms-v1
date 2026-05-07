<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('workflows', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('content_id');
            $table->string('content_type', 60);     // e.g. 'App\Models\BlogPost', 'App\Models\Page', etc.

            $table->enum('step', [
                'draft',
                'review',
                'editorial_approval',
                'legal_review',
                'seo_optimization',
                'final_approval',
                'scheduled',
                'published',
                'rejected',
                'archived'
            ])->default('draft');

            $table->foreignId('assigned_to')
                ->nullable()
                ->constrained('users')
                ->onDelete('set null');

            $table->foreignId('assigned_by')
                ->nullable()
                ->constrained('users')
                ->onDelete('set null');

            $table->text('notes')->nullable();

            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();

            $table->index(['content_type', 'content_id']);
            $table->index('step');
            $table->index('assigned_to');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('workflows');
    }
};
