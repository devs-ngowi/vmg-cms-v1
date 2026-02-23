import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import IndustryForm from './industry-form';

type MediaItem = { id: number; filename: string; original_name: string; alt_text: string | null; mime_type: string };

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard',    href: '/dashboard' },
    { title: 'Industries',   href: '/industries' },
    { title: 'Add Industry', href: '/industries/create' },
];

export default function CreateIndustry({ media }: { media: MediaItem[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Industry" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Add Industry</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Add a new industry sector served by VMG.
                    </p>
                </div>
                <IndustryForm mode="create" media={media} />
            </div>
        </AppLayout>
    );
}
