<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('page_views', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('content_id');
            $table->string('content_type', 60);     // e.g. 'App\Models\BlogPost', 'App\Models\Page', etc.

            $table->foreignId('user_id')
                ->nullable()
                ->constrained('users')
                ->onDelete('set null');

            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();

            $table->timestamp('viewed_at')->useCurrent();

            $table->index(['content_type', 'content_id']);
            $table->index('user_id');
            $table->index('viewed_at');
            $table->index('ip_address');          // useful for unique views per IP/day
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('page_views');
    }
};
