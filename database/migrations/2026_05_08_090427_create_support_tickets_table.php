<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    protected $connection = 'tenant';

    public function up(): void
{
    if (!Schema::connection('tenant')->hasTable('support_tickets')) {
        Schema::connection('tenant')->create('support_tickets', function (Blueprint $table) {
            $table->id();
            $table->string('ticket_number')->unique();
            $table->string('name');
            $table->string('email');
            $table->string('phone')->nullable();
            $table->enum('channel', ['live_chat', 'email', 'phone', 'ticket'])->default('ticket');
            $table->enum('category', ['account', 'jobs', 'employers', 'billing', 'cv', 'technical', 'other'])->default('other');
            $table->enum('priority', ['low', 'medium', 'high', 'urgent'])->default('medium');
            $table->string('subject');
            $table->text('message');
            $table->enum('status', ['open', 'in_progress', 'waiting_reply', 'resolved', 'closed'])->default('open');
            $table->text('admin_notes')->nullable();
            $table->unsignedBigInteger('assigned_to')->nullable();
            $table->timestamp('first_responded_at')->nullable();
            $table->timestamp('resolved_at')->nullable();
            $table->timestamps();
        });
    }

    if (!Schema::connection('tenant')->hasTable('support_ticket_replies')) {
        Schema::connection('tenant')->create('support_ticket_replies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('support_ticket_id')->constrained()->cascadeOnDelete();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('author_name');
            $table->string('author_email');
            $table->text('message');
            $table->boolean('is_internal')->default(false);
            $table->timestamps();
        });
    }
}

    public function down(): void
    {
        Schema::connection('tenant')->dropIfExists('support_ticket_replies');
        Schema::connection('tenant')->dropIfExists('support_tickets');
    }
};
