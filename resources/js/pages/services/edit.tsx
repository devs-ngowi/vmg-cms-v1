import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import ServiceForm from './service-form';

type Category  = { id: number; name: string; children?: Category[] };
type Tag       = { id: number; name: string; slug: string };
type MediaItem = { id: number; filename: string; original_name: string; alt_text: string | null; mime_type: string };

type ServiceData = {
    id:                number;
    title:             string;
    slug:              string;
    short_description: string;
    description:       string;
    icon:              string | null;
    image_id:          number | null;
    order_number:      number;
    status:            string;
    category_ids:      number[];
    tag_ids:           number[];
    media_ids:         number[];
    workflow_step:     string;
};

type Props = {
    service:    ServiceData;
    categories: Category[];
    tags:       Tag[];
    media:      MediaItem[];
};

export default function EditService({ service, categories, tags, media }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Services',  href: '/services' },
        { title: service.title, href: '#' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit — ${service.title}`} />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6 flex items-start justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Edit Service</h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Editing: <strong>{service.title}</strong>
                            {' · '}
                            <span className="capitalize text-muted-foreground">
                                Workflow: {service.workflow_step}
                            </span>
                        </p>
                    </div>
                    <a
                        href={`/services/${service.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary underline-offset-4 hover:underline"
                    >
                        Preview ↗
                    </a>
                </div>

                <ServiceForm
                    mode="edit"
                    categories={categories}
                    tags={tags}
                    media={media}
                    defaultValues={service}
                />
            </div>
        </AppLayout>
    );
}
