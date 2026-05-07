import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import BannerForm from './banner-form';

type MediaItem = {
    id: number;
    filename: string;
    original_name: string;
};

type Banner = {
    id: number;
    title: string;
    sub_title: string;
    description: string;
    bg_image_id: number;
    banner_image_id: number;
    btn_one_text: string;
    btn_one_url: string;
    btn_two_text: string;
    btn_two_url: string;
};

type Props = {
    banner: Banner;
    media: MediaItem[];
};

export default function EditBanner({ banner, media }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Banners', href: '/banners' },
        { title: banner.title, href: '#' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit — ${banner.title}`} />

            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Edit Banner</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Update content and settings for <strong>{banner.title}</strong>.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl">
                    <BannerForm
                        mode="edit"
                        media={media}
                        defaultValues={banner}
                    />
                </div>
            </div>
        </AppLayout>
    );
}
