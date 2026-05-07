import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import CategoryForm from './form';

export default function EditCategory({ category, media, parents }) {
    const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard',  href: '/dashboard' },
    { title: 'Knowledge',  href: '/knowledge' },
    { title: 'Categories', href: '/knowledge/categories' },
    { title: 'Edit',       href: '#' },
];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit: ${category.name}`} />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Edit Category</h1>
                </div>
                <CategoryForm mode="edit" media={media} parents={parents} defaultValues={category} />
            </div>
        </AppLayout>
    );
}
