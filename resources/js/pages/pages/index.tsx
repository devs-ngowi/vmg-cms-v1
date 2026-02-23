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
import { FileText, MoreHorizontal, Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type Page = {
    id:            number;
    title:         string;
    slug:          string;
    status:        'draft' | 'review' | 'published' | 'archived';
    author:        string | null;
    categories:    string[];
    tags:          string[];
    workflow_step: string;
    published_at:  string | null;
    created_at:    string;
};

// ── Config ────────────────────────────────────────────────────────────────────

const statusConfig: Record<Page['status'], { label: string; variant: 'default' | 'secondary' | 'outline' | 'destructive' }> = {
    published: { label: 'Published', variant: 'default' },
    review:    { label: 'In Review', variant: 'secondary' },
    draft:     { label: 'Draft',     variant: 'outline' },
    archived:  { label: 'Archived',  variant: 'destructive' },
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Pages',     href: '/pages' },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PagesIndex({ pages }: { pages: Page[] }) {
    const [deleteTarget, setDeleteTarget] = useState<Page | null>(null);

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/pages/${deleteTarget.id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    const columns: ColumnDef<Page>[] = [
        {
            key: 'title',
            header: 'Page',
            sortable: true,
            cell: (row) => (
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="min-w-0">
                        <p className="truncate font-medium">{row.title}</p>
                        <p className="mt-0.5 truncate text-xs text-muted-foreground">/{row.slug}</p>
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
            key: 'author',
            header: 'Author',
            sortable: true,
            cell: (row) => (
                <span className="text-sm text-muted-foreground">{row.author ?? '—'}</span>
            ),
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
            key: 'published_at',
            header: 'Published',
            sortable: true,
            cell: (row) => (
                <span className="text-sm text-muted-foreground">
                    {row.published_at
                        ? new Date(row.published_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
                        : '—'}
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
                            <Link href={`/pages/${row.id}/edit`} className="flex items-center gap-2">
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
            <Head title="Pages" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6 flex items-start justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Pages</h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Manage static pages published on the VMG website.
                        </p>
                    </div>
                    <Button asChild size="sm" variant="outline">
                        <Link href="/pages/drafts">View Drafts</Link>
                    </Button>
                </div>

                <DataTable<Page>
                    data={pages}
                    columns={columns}
                    searchPlaceholder="Search pages…"
                    searchKeys={['title', 'slug', 'status', 'author']}
                    emptyMessage="No pages found."
                    action={
                        <Button asChild size="sm" className="gap-1.5">
                            <Link href="/pages/create">
                                <Plus className="h-4 w-4" />
                                New Page
                            </Link>
                        </Button>
                    }
                />
            </div>

            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete page?</AlertDialogTitle>
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
