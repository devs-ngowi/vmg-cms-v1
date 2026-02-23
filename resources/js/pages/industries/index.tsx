import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
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
import { Factory, MoreHorizontal, Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type Industry = {
    id:          number;
    name:        string;
    slug:        string;
    description: string | null;
    sort_order:  number;
    is_active:   boolean;
    media:       { id: number; filename: string; alt_text: string | null } | null;
    created_at:  string;
};

// ── Breadcrumbs ───────────────────────────────────────────────────────────────

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard',  href: '/dashboard' },
    { title: 'Industries', href: '/industries' },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function IndustriesIndex({ industries }: { industries: Industry[] }) {
    const [deleteTarget, setDeleteTarget] = useState<Industry | null>(null);

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/industries/${deleteTarget.id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    const handleToggle = (industry: Industry) => {
        router.patch(`/industries/${industry.id}/toggle`, {}, { preserveScroll: true });
    };

    const columns: ColumnDef<Industry>[] = [
        {
            key: 'sort_order',
            header: '#',
            sortable: true,
            className: 'w-12 text-center',
            cell: (row) => (
                <span className="font-mono text-sm text-muted-foreground">{row.sort_order}</span>
            ),
        },
        {
            key: 'name',
            header: 'Industry',
            sortable: true,
            cell: (row) => (
                <div className="flex items-center gap-3">
                    {row.media ? (
                        <img
                            src={`/storage/${row.media.filename}`}
                            alt={row.media.alt_text ?? row.name}
                            className="h-10 w-10 rounded-lg object-cover"
                        />
                    ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <Factory className="h-4 w-4 text-primary" />
                        </div>
                    )}
                    <div className="min-w-0">
                        <p className="truncate font-medium">{row.name}</p>
                        <p className="mt-0.5 truncate text-xs text-muted-foreground/60">/{row.slug}</p>
                    </div>
                </div>
            ),
        },
        {
            key: 'description',
            header: 'Description',
            cell: (row) => (
                <p className="max-w-xs truncate text-sm text-muted-foreground">
                    {row.description ?? '—'}
                </p>
            ),
        },
        {
            key: 'is_active',
            header: 'Active',
            sortable: true,
            cell: (row) => (
                <Switch
                    checked={row.is_active}
                    onCheckedChange={() => handleToggle(row)}
                    aria-label={`Toggle ${row.name}`}
                />
            ),
        },
        {
            key: 'created_at',
            header: 'Created',
            sortable: true,
            cell: (row) => (
                <span className="text-sm text-muted-foreground">
                    {new Date(row.created_at).toLocaleDateString('en-GB', {
                        day: '2-digit', month: 'short', year: 'numeric',
                    })}
                </span>
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
                            <Link href={`/industries/${row.id}/edit`} className="flex items-center gap-2">
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
            <Head title="Industries" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Industries</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Manage industries served by VMG shown on the website.
                    </p>
                </div>

                <DataTable<Industry>
                    data={industries}
                    columns={columns}
                    searchPlaceholder="Search industries…"
                    searchKeys={['name', 'slug', 'description']}
                    emptyMessage="No industries found."
                    action={
                        <Button asChild size="sm" className="gap-1.5">
                            <Link href="/industries/create">
                                <Plus className="h-4 w-4" />
                                Add Industry
                            </Link>
                        </Button>
                    }
                />
            </div>

            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete industry?</AlertDialogTitle>
                        <AlertDialogDescription>
                            <strong>{deleteTarget?.name}</strong> will be permanently deleted.
                            This action cannot be undone.
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
