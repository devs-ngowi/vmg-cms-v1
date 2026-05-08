<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::connection('tenant')->create('feedbacks', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->enum('category', [
                'general',
                'compliment',
                'suggestion',
                'complaint',
                'other',
            ])->default('general');
            $table->unsignedTinyInteger('rating')->default(0); // 1–5
            $table->text('message');
            $table->enum('status', [
                'pending',
                'reviewed',
                'resolved',
            ])->default('pending');
            $table->text('admin_notes')->nullable();
            $table->timestamp('reviewed_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::connection('tenant')->dropIfExists('feedbacks');
    }
};
