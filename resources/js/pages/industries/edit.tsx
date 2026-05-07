import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import IndustryForm from './industry-form';

type MediaItem = { id: number; filename: string; original_name: string; alt_text: string | null; mime_type: string };

type IndustryData = {
    id:          number;
    name:        string;
    slug:        string;
    description: string;
    media_id:    number | null;
    sort_order:  number;
    is_active:   boolean;
};

type Props = { industry: IndustryData; media: MediaItem[] };

export default function EditIndustry({ industry, media }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard',  href: '/dashboard' },
        { title: 'Industries', href: '/industries' },
        { title: industry.name, href: '#' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit — ${industry.name}`} />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Edit Industry</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Updating: <strong>{industry.name}</strong>
                    </p>
                </div>
                <IndustryForm mode="edit" media={media} defaultValues={industry} />
            </div>
        </AppLayout>
    );
}
