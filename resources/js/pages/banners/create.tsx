import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import BannerForm from './banner-form';

type MediaItem = {
    id: number;
    filename: string;
    original_name: string;
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Banners', href: '/banners' },
    { title: 'Add Banner', href: '/banners/create' },
];

export default function CreateBanner({ media }: { media: MediaItem[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Banner" />

            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Add Banner</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Create a new homepage hero banner with custom content and buttons.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl">
                    <BannerForm mode="create" media={media} />
                </div>
            </div>
        </AppLayout>
    );
}
