import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import BlogPostForm from './blog-post-form';

type Author    = { id: number; name: string };
type Category  = { id: number; name: string; children?: Category[] };
type Tag       = { id: number; name: string; slug: string };
type MediaItem = { id: number; filename: string; original_name: string; alt_text: string | null; mime_type: string };

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Blog',      href: '/blog' },
    { title: 'New Post',  href: '/blog/create' },
];

export default function CreateBlogPost({
    authors, categories, tags, media,
}: {
    authors: Author[]; categories: Category[]; tags: Tag[]; media: MediaItem[];
}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="New Post" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">New Blog Post</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Write and publish a new article on the VMG blog.
                    </p>
                </div>
                <BlogPostForm mode="create" authors={authors} categories={categories} tags={tags} media={media} />
            </div>
        </AppLayout>
    );
}
