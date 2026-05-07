<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function getConnection(): string
{
    return 'landlord';
}

public function up(): void
{
    Schema::connection('landlord')->create('companies', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('slug')->unique();
        $table->string('domain')->unique();
        $table->string('database')->unique();
        $table->string('logo')->nullable();
        $table->enum('status', ['active', 'inactive', 'suspended'])->default('active');
        $table->string('plan')->default('basic');
        $table->json('settings')->nullable();
        $table->timestamps();
    });
}
};
