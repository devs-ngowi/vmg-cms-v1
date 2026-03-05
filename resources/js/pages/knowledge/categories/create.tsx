import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import CategoryForm from './form';


const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard',    href: '/dashboard' },
    { title: 'Knowledge',    href: '/knowledge' },
    { title: 'Categories',   href: '/knowledge/categories' },
    { title: 'Add Category', href: '/knowledge/categories/create' },
];

export default function CreateCategory({ media, parents }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Knowledge Category" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Add Category</h1>
                    <p className="mt-1 text-sm text-muted-foreground">Create a new knowledge category.</p>
                </div>
                <CategoryForm mode="create" media={media} parents={parents} />
            </div>
        </AppLayout>
    );
}
