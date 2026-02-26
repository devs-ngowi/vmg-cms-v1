import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { DataTable, type ColumnDef } from '@/components/ui/data-table';
import type { BreadcrumbItem } from '@/types';
import { MoreHorizontal, Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type Banner = {
    id: number;
    title: string;
    sub_title: string;
    description: string;
    bg_image?: string;
    is_published: boolean;
    is_active: boolean;
    created_at: string;
};

// ── Breadcrumbs ───────────────────────────────────────────────────────────────

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Banners', href: '/banners' },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BannersIndex({ banners }: { banners: Banner[] }) {
    const [deleteTarget, setDeleteTarget] = useState<Banner | null>(null);

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/banners/${deleteTarget.id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    const toggleActive = (banner: Banner) => {
        router.patch(`/banners/${banner.id}/toggle`);
    };

    const columns: ColumnDef<Banner>[] = [
        {
            key: 'title',
            header: 'Banner',
            sortable: true,
            cell: (row) => (
                <div className="min-w-0">
                    <p className="font-medium">{row.title}</p>
                    {row.sub_title && (
                        <p className="mt-0.5 text-xs text-muted-foreground">
                            {row.sub_title}
                        </p>
                    )}
                </div>
            ),
        },
        {
            key: 'description',
            header: 'Description',
            sortable: false,
            cell: (row) => (
                <p className="max-w-xs truncate text-sm text-muted-foreground">
                    {row.description || '—'}
                </p>
            ),
        },
        {
            key: 'is_published',
            header: 'Published',
            sortable: true,
            cell: (row) => (
                <Badge variant={row.is_published ? 'default' : 'outline'}>
                    {row.is_published ? 'Published' : 'Draft'}
                </Badge>
            ),
        },
        {
            key: 'is_active',
            header: 'Visibility',
            sortable: true,
            cell: (row) => (
                <Badge variant={row.is_active ? 'secondary' : 'ghost'}>
                    {row.is_active ? 'Visible' : 'Hidden'}
                </Badge>
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
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuItem asChild>
                            <Link
                                href={`/banners/${row.id}/edit`}
                                className="flex items-center gap-2"
                            >
                                <Pencil className="h-3.5 w-3.5" />
                                Edit
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => toggleActive(row)}
                            className="flex items-center gap-2"
                        >
                            {row.is_active ? 'Hide' : 'Show'}
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
            <Head title="Banners" />

            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Banners</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Manage homepage hero banners, publication status, and visibility.
                    </p>
                </div>

                <DataTable<Banner>
                    data={banners}
                    columns={columns}
                    searchPlaceholder="Search banners…"
                    searchKeys={['title', 'sub_title', 'description']}
                    emptyMessage="No banners found."
                    action={
                        <Button asChild size="sm" className="gap-1.5">
                            <Link href="/banners/create">
                                <Plus className="h-4 w-4" />
                                Add Banner
                            </Link>
                        </Button>
                    }
                />
            </div>

            {/* Delete confirmation */}
            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete banner?</AlertDialogTitle>
                        <AlertDialogDescription>
                            <strong>{deleteTarget?.title}</strong> will be permanently removed.
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
