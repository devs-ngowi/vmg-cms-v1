 import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import ArticleForm from './form';

export default function EditArticle({ article, media, categories }) {
    return (
        <AppLayout breadcrumbs={[
            { title: 'Dashboard', href: '/dashboard' },
            { title: 'Knowledge', href: '/Knowledge' },
            { title: 'Articles',  href: '/knowledge/articles' },
            { title: 'Edit',      href: '#' },
        ]}>
            <Head title={`Edit: ${article.title}`} />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Edit Article</h1>
                </div>
                <ArticleForm mode="edit" media={media} categories={categories} defaultValues={article} />
            </div>
        </AppLayout>
    );
}
