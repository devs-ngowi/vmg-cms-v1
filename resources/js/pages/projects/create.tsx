import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import ProjectForm from './project-form';

type Author    = { id: number; name: string };
type Category  = { id: number; name: string; children?: Category[] };
type Tag       = { id: number; name: string; slug: string };
type MediaItem = { id: number; filename: string; original_name: string; alt_text: string | null; mime_type: string };

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard',   href: '/dashboard' },
    { title: 'Projects',    href: '/projects' },
    { title: 'Add Project', href: '/projects/create' },
];

export default function CreateProject({
    authors, categories, tags, media,
}: {
    authors: Author[]; categories: Category[]; tags: Tag[]; media: MediaItem[];
}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Project" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Add Project</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Add a new VMG case study or portfolio project.
                    </p>
                </div>
                <ProjectForm mode="create" authors={authors} categories={categories} tags={tags} media={media} />
            </div>
        </AppLayout>
    );
}
