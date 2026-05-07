import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem,
    DropdownMenuSeparator, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { DataTable, type ColumnDef } from '@/components/ui/data-table';
import type { BreadcrumbItem } from '@/types';
import { FolderOpen, MoreHorizontal, Pencil, Plus, Star, Trash2 } from 'lucide-react';
import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type Project = {
    id:             number;
    title:          string;
    slug:           string;
    client_name:    string | null;
    status:         'draft' | 'review' | 'published' | 'archived';
    order_number:   number;
    start_date:     string | null;
    end_date:       string | null;
    author:         string | null;
    categories:     string[];
    tags:           string[];
    workflow_step:  string;
    featured_image: { id: number; filename: string; alt_text: string | null } | null;
    created_at:     string;
};

// ── Config ────────────────────────────────────────────────────────────────────

const statusConfig: Record<Project['status'], { label: string; variant: 'default' | 'secondary' | 'outline' | 'destructive' }> = {
    published: { label: 'Published', variant: 'default' },
    review:    { label: 'In Review', variant: 'secondary' },
    draft:     { label: 'Draft',     variant: 'outline' },
    archived:  { label: 'Archived',  variant: 'destructive' },
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Projects',  href: '/projects' },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ProjectsIndex({ projects }: { projects: Project[] }) {
    const [deleteTarget, setDeleteTarget] = useState<Project | null>(null);

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/projects/${deleteTarget.id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    const columns: ColumnDef<Project>[] = [
        {
            key: 'order_number',
            header: '#',
            sortable: true,
            className: 'w-12 text-center',
            cell: (row) => (
                <span className="font-mono text-sm text-muted-foreground">{row.order_number}</span>
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
                                Client: {row.client_name}
                            </p>
                        )}
                        <p className="mt-0.5 truncate text-xs text-muted-foreground/60">/{row.slug}</p>
                    </div>
                </div>
            ),
        },
        {
            key: 'status',
            header: 'Status',
            sortable: true,
            cell: (row) => {
                const cfg = statusConfig[row.status];
                return <Badge variant={cfg.variant}>{cfg.label}</Badge>;
            },
        },
        {
            key: 'categories',
            header: 'Categories',
            cell: (row) => (
                <div className="flex flex-wrap gap-1">
                    {row.categories.length > 0
                        ? row.categories.map(c => (
                            <Badge key={c} variant="secondary" className="text-xs font-normal">{c}</Badge>
                        ))
                        : <span className="text-xs text-muted-foreground">—</span>}
                </div>
            ),
        },
        {
            key: 'start_date',
            header: 'Timeline',
            sortable: true,
            cell: (row) => (
                <div className="text-sm text-muted-foreground">
                    {row.start_date
                        ? new Date(row.start_date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
                        : '—'}
                    {row.end_date && (
                        <>
                            {' → '}
                            {new Date(row.end_date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
                        </>
                    )}
                </div>
            ),
        },
        {
            key: 'author',
            header: 'Author',
            sortable: true,
            cell: (row) => (
                <span className="text-sm text-muted-foreground">{row.author ?? '—'}</span>
            ),
        },
        {
            key: 'actions',
            header: '',
            className: 'w-10 text-right',
            cell: (row) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuItem asChild>
                            <Link href={`/projects/${row.id}/edit`} className="flex items-center gap-2">
                                <Pencil className="h-3.5 w-3.5" />
                                Edit
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="flex cursor-pointer items-center gap-2 text-destructive focus:text-destructive"
                            onClick={() => setDeleteTarget(row)}
                        >
                            <Trash2 className="h-3.5 w-3.5" />
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6 flex items-start justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Manage VMG case studies and project portfolio.
                        </p>
                    </div>
                    <Button asChild size="sm" variant="outline" className="gap-1.5">
                        <Link href="/projects/featured">
                            <Star className="h-3.5 w-3.5" />
                            Featured
                        </Link>
                    </Button>
                </div>

                <DataTable<Project>
                    data={projects}
                    columns={columns}
                    searchPlaceholder="Search projects…"
                    searchKeys={['title', 'slug', 'client_name', 'status', 'author']}
                    emptyMessage="No projects found."
                    action={
                        <Button asChild size="sm" className="gap-1.5">
                            <Link href="/projects/create">
                                <Plus className="h-4 w-4" />
                                Add Project
                            </Link>
                        </Button>
                    }
                />
            </div>

            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete project?</AlertDialogTitle>
                        <AlertDialogDescription>
                            <strong>{deleteTarget?.title}</strong> will be permanently deleted including
                            all media, category, and tag associations. This cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={confirmDelete}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </AppLayout>
    );
}
