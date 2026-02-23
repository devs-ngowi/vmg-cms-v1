import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import HeroSlideForm, { type MediaItem, type SlideValues } from './hero-form';

export default function EditHeroSlide({
    slide,
    media,
}: {
    slide: SlideValues;
    media: MediaItem[];
}) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard',    href: '/dashboard' },
        { title: 'Hero Slides',  href: '/hero-slides' },
        { title: slide.headline, href: '#' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit — ${slide.headline}`} />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Edit Slide</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Editing: <strong>{slide.headline}</strong>
                    </p>
                </div>
                <HeroSlideForm mode="edit" slide={slide} media={media} />
            </div>
        </AppLayout>
    );
}
