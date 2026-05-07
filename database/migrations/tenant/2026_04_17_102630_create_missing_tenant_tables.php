<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    protected $connection = 'tenant';

    public function up(): void
    {
        // 1. password_reset_tokens
        Schema::connection('tenant')->create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        // 2. sessions
        Schema::connection('tenant')->create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });

        // 3. personal_access_tokens
        Schema::connection('tenant')->create('personal_access_tokens', function (Blueprint $table) {
            $table->id();
            $table->morphs('tokenable');
            $table->text('name');
            $table->string('token', 64)->unique();
            $table->text('abilities')->nullable();
            $table->timestamp('last_used_at')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();
        });

        // 4. roles
        Schema::connection('tenant')->create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('label')->nullable();
            $table->timestamps();
        });

        // 5. permissions
        Schema::connection('tenant')->create('permissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('role_id')->constrained('roles')->cascadeOnDelete();
            $table->string('module');
            $table->boolean('can_view')->default(false);
            $table->boolean('can_create')->default(false);
            $table->boolean('can_edit')->default(false);
            $table->boolean('can_delete')->default(false);
            $table->boolean('can_publish')->default(false);
            $table->timestamps();
        });

        // 6. users
        Schema::connection('tenant')->create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username')->unique();
            $table->string('full_name')->nullable();
            $table->string('email')->unique();
            $table->string('password');
            $table->foreignId('role_id')->nullable()->constrained('roles')->nullOnDelete();
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->timestamp('last_login')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        // 7. media
        Schema::connection('tenant')->create('media', function (Blueprint $table) {
            $table->id();
            $table->string('filename')->nullable();
            $table->string('original_name');
            $table->string('mime_type', 100);
            $table->unsignedBigInteger('size_bytes');
            $table->unsignedInteger('width')->nullable();
            $table->unsignedInteger('height')->nullable();
            $table->boolean('was_compressed')->default(false);
            $table->unsignedBigInteger('original_size_bytes')->nullable();
            $table->string('alt_text')->nullable();
            $table->string('icon_class')->nullable();
            $table->boolean('is_icon')->default(false);
            $table->text('caption')->nullable();
            $table->string('folder', 100)->nullable();
            $table->foreignId('uploaded_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
        });

        // 8. seo_settings
        Schema::connection('tenant')->create('seo_settings', function (Blueprint $table) {
            $table->id();
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->foreignId('og_image_id')->nullable()->constrained('media')->nullOnDelete();
            $table->string('canonical_url')->nullable();
            $table->string('robots', 100)->default('index, follow');
            $table->timestamps();
        });

        // 9. tags
        Schema::connection('tenant')->create('tags', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('slug', 120)->unique();
            $table->timestamps();
        });

        // 10. taggables
        Schema::connection('tenant')->create('taggables', function (Blueprint $table) {
            $table->foreignId('tag_id')->constrained('tags')->cascadeOnDelete();
            $table->morphs('taggable');
            $table->unique(['tag_id', 'taggable_type', 'taggable_id']);
        });

        // 11. menus
        Schema::connection('tenant')->create('menus', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('location', 64);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // 12. menu_items
        Schema::connection('tenant')->create('menu_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('menu_id')->constrained('menus')->cascadeOnDelete();
            $table->foreignId('parent_id')->nullable()->constrained('menu_items')->nullOnDelete();
            $table->string('label', 100);
            $table->string('url');
            $table->unsignedInteger('sort_order')->default(0);
            $table->enum('target', ['_self', '_blank', '_parent', '_top'])->default('_self');
            $table->boolean('is_visible')->default(true);
            $table->timestamps();
        });

        // 13. pages
        Schema::connection('tenant')->create('pages', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->longText('content');
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->enum('status', ['draft', 'published', 'archived'])->default('draft');
            $table->foreignId('author_id')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('seo_id')->nullable()->constrained('seo_settings')->nullOnDelete();
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });

        // 14. page_views
        Schema::connection('tenant')->create('page_views', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('content_id');
            $table->string('content_type', 60);
            $table->foreignId('user_id')->nullable()->constrained('users')->nullOnDelete();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->timestamp('viewed_at')->useCurrent();
            $table->index(['content_type', 'content_id']);
        });

        // 15. services
        Schema::connection('tenant')->create('services', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('short_description')->nullable();
            $table->longText('description');
            $table->string('icon', 100)->nullable();
            $table->string('website_url', 500)->nullable();
            $table->enum('button_type', ['read_more', 'explore_more'])->default('read_more');
            $table->foreignId('website_logo_id')->nullable()->constrained('media')->nullOnDelete();
            $table->foreignId('image_id')->nullable()->constrained('media')->nullOnDelete();
            $table->unsignedInteger('order_number')->default(0);
            $table->foreignId('seo_id')->nullable()->constrained('seo_settings')->nullOnDelete();
            $table->enum('status', ['draft', 'published', 'archived'])->default('draft');
            $table->timestamps();
        });

        // 16. service_packages
        Schema::connection('tenant')->create('service_packages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('service_id')->constrained('services')->cascadeOnDelete();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('short_description');
            $table->longText('description')->nullable();
            $table->string('website_url', 500)->nullable();
            $table->json('features')->nullable();
            $table->unsignedInteger('order_number')->default(0);
            $table->enum('status', ['draft', 'published', 'archived'])->default('published');
            $table->boolean('published_on_site')->default(true);
            $table->timestamps();
        });

        // 17. service_sub_packages
        Schema::connection('tenant')->create('service_sub_packages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('service_package_id')->constrained('service_packages')->cascadeOnDelete();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('short_description')->nullable();
            $table->longText('description')->nullable();
            $table->string('website_url', 500)->nullable();
            $table->json('features')->nullable();
            $table->unsignedInteger('order_number')->default(0);
            $table->enum('status', ['draft', 'published', 'archived'])->default('published');
            $table->boolean('published_on_site')->default(true);
            $table->timestamps();
        });

        // 18. projects
        Schema::connection('tenant')->create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('client_name', 150)->nullable();
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->foreignId('featured_image_id')->nullable()->constrained('media')->nullOnDelete();
            $table->foreignId('author_id')->nullable()->constrained('users')->nullOnDelete();
            $table->unsignedInteger('order_number')->default(0);
            $table->enum('status', ['draft', 'review', 'published', 'archived']);
            $table->timestamps();
        });

        // 19. testimonials
        Schema::connection('tenant')->create('testimonials', function (Blueprint $table) {
            $table->id();
            $table->string('client_name', 100);
            $table->string('company', 100)->nullable();
            $table->string('position', 80)->nullable();
            $table->text('quote');
            $table->tinyInteger('rating')->nullable();
            $table->foreignId('image_id')->nullable()->constrained('media')->nullOnDelete();
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_approved')->default(false);
            $table->timestamps();
        });

        // 20. knowledge_categories
        Schema::connection('tenant')->create('knowledge_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name', 191);
            $table->string('slug', 191)->unique();
            $table->text('description')->nullable();
            $table->foreignId('parent_id')->nullable()->constrained('knowledge_categories')->nullOnDelete();
            $table->foreignId('media_id')->nullable()->constrained('media')->nullOnDelete();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // 21. knowledge_articles
        Schema::connection('tenant')->create('knowledge_articles', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->longText('content')->nullable();
            $table->foreignId('category_id')->nullable()->constrained('knowledge_categories')->nullOnDelete();
            $table->foreignId('author_id')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('seo_id')->nullable()->constrained('seo_settings')->nullOnDelete();
            $table->enum('status', ['draft', 'published', 'archived'])->default('draft');
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });

        // 22. knowledge_article_media
        Schema::connection('tenant')->create('knowledge_article_media', function (Blueprint $table) {
            $table->foreignId('knowledge_article_id')->constrained('knowledge_articles')->cascadeOnDelete();
            $table->foreignId('media_id')->constrained('media')->cascadeOnDelete();
            $table->unsignedInteger('sort_order')->default(0);
            $table->primary(['knowledge_article_id', 'media_id']);
        });

        // 23. vacancies
        Schema::connection('tenant')->create('vacancies', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('department', 100);
            $table->string('location', 150)->nullable();
            $table->enum('type', ['full_time', 'part_time', 'contract', 'internship', 'remote'])->default('full_time');
            $table->longText('description');
            $table->date('deadline')->nullable();
            $table->foreignId('author_id')->nullable()->constrained('users')->nullOnDelete();
            $table->enum('status', ['open', 'closed', 'filled', 'archived'])->default('open');
            $table->timestamps();
        });

        // 24. workflow
        Schema::connection('tenant')->create('workflow', function (Blueprint $table) {
            $table->timestamp('created_at');
        });
    }

    public function down(): void
    {
        $tables = [
            'workflow',
            'vacancies',
            'knowledge_article_media',
            'knowledge_articles',
            'knowledge_categories',
            'testimonials',
            'projects',
            'service_sub_packages',
            'service_packages',
            'services',
            'page_views',
            'pages',
            'menu_items',
            'menus',
            'taggables',
            'tags',
            'seo_settings',
            'media',
            'users',
            'permissions',
            'roles',
            'personal_access_tokens',
            'sessions',
            'password_reset_tokens',
        ];

        foreach ($tables as $table) {
            Schema::connection('tenant')->dropIfExists($table);
        }
    }
};
