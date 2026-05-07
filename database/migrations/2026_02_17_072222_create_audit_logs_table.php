<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('audit_logs', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')
                ->nullable()
                ->constrained('users')
                ->onDelete('set null');

            $table->enum('action', [
                'created',
                'updated',
                'deleted',
                'restored',
                'published',
                'unpublished',
                'approved',
                'rejected',
                'assigned',
                'status_changed',
                'login',
                'logout',
                'password_reset',
            ]);

            $table->string('entity_type', 100); 
            $table->unsignedBigInteger('entity_id');

            $table->json('old_value')->nullable();
            $table->json('new_value')->nullable();

            $table->timestamp('created_at')->useCurrent();

            $table->index(['entity_type', 'entity_id']);
            $table->index('user_id');
            $table->index('action');
            $table->index('created_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('audit_logs');
    }
};
