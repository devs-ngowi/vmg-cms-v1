import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import HeroSlideForm, { type MediaItem } from './hero-form';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard',   href: '/dashboard' },
    { title: 'Hero Slides', href: '/hero-slides' },
    { title: 'New Slide',   href: '/hero-slides/create' },
];

export default function CreateHeroSlide({
    media,
    next_order,
}: {
    media:      MediaItem[];
    next_order: number;
}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="New Hero Slide" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">New Slide</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Add a new slide to the homepage hero carousel.
                    </p>
                </div>
                <HeroSlideForm mode="create" media={media} nextOrder={next_order} />
            </div>
        </AppLayout>
    );
}
