<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username', 80)->unique()->index()->nullable();
            $table->string('full_name', 120)->nullable();
            $table->string('email', 150)->unique()->index();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password', 255);
            $table->string('password_hash', 255)->nullable();
            $table->foreignId('role_id')
                ->nullable()
                ->references('id')
                ->on('roles')
                ->onDelete('set null');

            $table->enum('status', ['active', 'inactive', 'suspended', 'pending', 'banned'])
                ->default('pending');
            $table->timestamp('last_login')->nullable();
            $table->timestamp('last_activity')->nullable();
            $table->string('phone', 30)->nullable()->unique();
            $table->string('country_code', 10)->nullable();
            $table->string('avatar_url', 255)->nullable();
            $table->text('bio')->nullable();
            $table->boolean('is_verified')->default(false);
            $table->rememberToken();
            $table->timestamp('password_changed_at')->nullable();
            $table->timestamps();

            $table->softDeletes();
            $table->index('status');
            $table->index('last_login');
            $table->index('email_verified_at');
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
