import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import ServiceForm from './service-form';

type Category  = { id: number; name: string; children?: Category[] };
type Tag       = { id: number; name: string; slug: string };
type MediaItem = { id: number; filename: string; original_name: string; alt_text: string | null; mime_type: string };

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard',    href: '/dashboard' },
    { title: 'Services',     href: '/services' },
    { title: 'Add Service',  href: '/services/create' },
];

export default function CreateService({
    categories, tags, media,
}: {
    categories: Category[];
    tags:       Tag[];
    media:      MediaItem[];
}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Service" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Add Service</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Create a new VMG service offering.
                    </p>
                </div>
                <ServiceForm mode="create" categories={categories} tags={tags} media={media} />
            </div>
        </AppLayout>
    );
}
