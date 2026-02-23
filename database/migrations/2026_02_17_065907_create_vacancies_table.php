<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('vacancies', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255);
            $table->string('department', 100);
            $table->string('location', 150)->nullable();
            $table->enum('type', ['full_time', 'part_time', 'contract', 'internship', 'remote'])->default('full_time');
            $table->longText('description');
            $table->date('deadline')->nullable();
            $table->foreignId('author_id')->nullable()->constrained('authors', 'id')->onDelete('set null');
            $table->enum('status', ['open', 'closed', 'filled', 'archived'])->default('open');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('vacancies');
    }
};
