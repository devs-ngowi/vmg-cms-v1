import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DataTable, type ColumnDef } from '@/components/ui/data-table';
import type { BreadcrumbItem } from '@/types';
import { FolderOpen, Pencil } from 'lucide-react';

type Project = {
    id:             number;
    title:          string;
    slug:           string;
    client_name:    string | null;
    order_number:   number;
    categories:     string[];
    featured_image: { id: number; filename: string; alt_text: string | null } | null;
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard',          href: '/dashboard' },
    { title: 'Projects',           href: '/projects' },
    { title: 'Featured Projects',  href: '/projects/featured' },
];

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
    const columns: ColumnDef<Project>[] = [
        {
            key: 'order_number',
            header: 'Order',
            sortable: true,
            className: 'w-16 text-center',
            cell: (row) => (
                <span className="font-mono text-sm font-semibold text-primary">{row.order_number}</span>
            ),
        },
        {
            key: 'title',
            header: 'Project',
            sortable: true,
            cell: (row) => (
                <div className="flex items-center gap-3">
                    {row.featured_image ? (
                        <img
                            src={`/storage/${row.featured_image.filename}`}
                            alt={row.featured_image.alt_text ?? row.title}
                            className="h-10 w-16 rounded-lg object-cover"
                        />
                    ) : (
                        <div className="flex h-10 w-16 items-center justify-center rounded-lg bg-primary/10">
                            <FolderOpen className="h-4 w-4 text-primary" />
                        </div>
                    )}
                    <div className="min-w-0">
                        <p className="truncate font-medium">{row.title}</p>
                        {row.client_name && (
                            <p className="mt-0.5 truncate text-xs text-muted-foreground">
                                {row.client_name}
                            </p>
                        )}
                    </div>
                </div>
            ),
        },
        {
            key: 'categories',
            header: 'Service Area',
            cell: (row) => (
                <div className="flex flex-wrap gap-1">
                    {row.categories.map(c => (
                        <Badge key={c} variant="secondary" className="text-xs font-normal">{c}</Badge>
                    ))}
                </div>
            ),
        },
        {
            key: 'actions',
            header: '',
            className: 'w-10 text-right',
            cell: (row) => (
                <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                    <Link href={`/projects/${row.id}/edit`}>
                        <Pencil className="h-4 w-4" />
                    </Link>
                </Button>
            ),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Featured Projects" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6 flex items-start justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Featured Projects</h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Published projects shown on the VMG website, sorted by order number.
                            To reorder, edit the project and change its order number.
                        </p>
                    </div>
                    <Button asChild size="sm" variant="outline">
                        <Link href="/projects">← All Projects</Link>
                    </Button>
                </div>

                <DataTable<Project>
                    data={projects}
                    columns={columns}
                    searchPlaceholder="Search featured projects…"
                    searchKeys={['title', 'client_name']}
                    emptyMessage="No published projects yet. Set a project status to Published to feature it."
                />
            </div>
        </AppLayout>
    );
}
