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
import { MoreHorizontal, Pencil, Plus, Trash2, Wrench } from 'lucide-react';
import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type Service = {
    id:                number;
    title:             string;
    slug:              string;
    short_description: string | null;
    icon:              string | null;
    order_number:      number;
    status:            'draft' | 'review' | 'published' | 'archived';
    image:             { id: number; filename: string; alt_text: string | null } | null;
    categories:        string[];
    tags:              string[];
    workflow_step:     string;
    created_at:        string;
};

// ── Config ────────────────────────────────────────────────────────────────────

const statusConfig: Record<Service['status'], { label: string; variant: 'default' | 'secondary' | 'outline' | 'destructive' }> = {
    published: { label: 'Published', variant: 'default' },
    review:    { label: 'In Review', variant: 'secondary' },
    draft:     { label: 'Draft',     variant: 'outline' },
    archived:  { label: 'Archived',  variant: 'destructive' },
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Services',  href: '/services' },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ServicesIndex({ services }: { services: Service[] }) {
    const [deleteTarget, setDeleteTarget] = useState<Service | null>(null);

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/services/${deleteTarget.id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    const columns: ColumnDef<Service>[] = [
        {
            key: 'order_number',
            header: '#',
            sortable: true,
            className: 'w-12 text-center',
            cell: (row) => (
                <span className="text-sm font-mono text-muted-foreground">{row.order_number}</span>
            ),
        },
        {
            key: 'title',
            header: 'Service',
            sortable: true,
            cell: (row) => (
                <div className="flex items-center gap-3">
                    {row.image ? (
                        <img
                            src={`/storage/${row.image.filename}`}
                            alt={row.image.alt_text ?? row.title}
                            className="h-10 w-10 rounded-lg object-cover"
                        />
                    ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            {row.icon
                                ? <span className="text-lg">{row.icon}</span>
                                : <Wrench className="h-4 w-4 text-primary" />}
                        </div>
                    )}
                    <div className="min-w-0">
                        <p className="truncate font-medium">{row.title}</p>
                        {row.short_description && (
                            <p className="mt-0.5 max-w-xs truncate text-xs text-muted-foreground">
                                {row.short_description}
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
            key: 'workflow_step',
            header: 'Workflow',
            sortable: true,
            cell: (row) => (
                <span className="capitalize text-sm text-muted-foreground">{row.workflow_step}</span>
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
                            <Link href={`/services/${row.id}/edit`} className="flex items-center gap-2">
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
            <Head title="Services" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Services</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Manage VMG service offerings displayed on the website.
                    </p>
                </div>

                <DataTable<Service>
                    data={services}
                    columns={columns}
                    searchPlaceholder="Search services…"
                    searchKeys={['title', 'slug', 'short_description', 'status']}
                    emptyMessage="No services found."
                    action={
                        <Button asChild size="sm" className="gap-1.5">
                            <Link href="/services/create">
                                <Plus className="h-4 w-4" />
                                Add Service
                            </Link>
                        </Button>
                    }
                />
            </div>

            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete service?</AlertDialogTitle>
                        <AlertDialogDescription>
                            <strong>{deleteTarget?.title}</strong> will be permanently deleted including
                            all category, tag, and media associations. This cannot be undone.
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
