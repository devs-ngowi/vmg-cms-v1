 import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import ArticleForm from './form';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard',   href: '/dashboard' },
    { title: 'Knowledge',   href: '/knowledge' },
    { title: 'Articles',    href: '/knowledge/articles' },
    { title: 'Add Article', href: '/knowledge/articles/create' },
];

export default function CreateArticle({ media, categories }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Article" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Add Article</h1>
                </div>
                <ArticleForm mode="create" media={media} categories={categories} />
            </div>
        </AppLayout>
    );
}

