// ============================================================
// FILE: resources/js/pages/knowledge/articles/index.tsx
// ============================================================
import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
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
import { FileText, MoreHorizontal, Pencil, Plus, Star, Trash2 } from 'lucide-react';
import { useState } from 'react';

type Article = {
    id:          number;
    title:       string;
    slug:        string;
    excerpt:     string | null;
    category_id: number;
    category:    { id: number; name: string; slug: string } | null;
    sort_order:  number;
    is_active:   boolean;
    is_featured: boolean;
    media:       { url: string | null } | null;
    created_at:  string;
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Knowledge', href: '/knowledge' },
    { title: 'Articles',  href: '/knowledge/articles' },
];

export default function KnowledgeArticlesIndex({ articles }: { articles: Article[] }) {
    const [deleteTarget, setDeleteTarget] = useState<Article | null>(null);

    const columns: ColumnDef<Article>[] = [
        {
            key: 'title',
            header: 'Article',
            sortable: true,
            cell: row => (
                <div className="flex items-center gap-3">
                    {row.media?.url
                        ? <img src={row.media.url} className="h-9 w-9 rounded-lg object-cover shrink-0" alt="" />
                        : <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                    }
                    <div className="min-w-0">
                        <div className="flex items-center gap-2">
                            <p className="truncate font-medium">{row.title}</p>
                            {row.is_featured && <Star className="h-3.5 w-3.5 text-amber-500 shrink-0" />}
                        </div>
                        <p className="text-xs text-muted-foreground">/{row.slug}</p>
                    </div>
                </div>
            ),
        },
        {
            key: 'category',
            header: 'Category',
            cell: row => (
                <Badge variant="secondary" className="text-xs">
                    {row.category?.name ?? '—'}
                </Badge>
            ),
        },
        {
            key: 'is_active',
            header: 'Published',
            cell: row => (
                <Switch checked={row.is_active}
                    onCheckedChange={() => router.patch(`/knowledge/articles/${row.id}/toggle`, {}, { preserveScroll: true })} />
            ),
        },
        {
            key: 'created_at',
            header: 'Created',
            sortable: true,
            cell: row => <span className="text-sm text-muted-foreground">{row.created_at}</span>,
        },
        {
            key: 'actions',
            header: '',
            className: 'w-10 text-right',
            cell: row => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuItem asChild>
                            <Link href={`/knowledge/articles/${row.id}/edit`} className="flex items-center gap-2">
                                <Pencil className="h-3.5 w-3.5" /> Edit
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex cursor-pointer items-center gap-2 text-destructive focus:text-destructive"
                            onClick={() => setDeleteTarget(row)}>
                            <Trash2 className="h-3.5 w-3.5" /> Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Knowledge Articles" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Knowledge Articles</h1>
                    <p className="mt-1 text-sm text-muted-foreground">Manage knowledge base articles.</p>
                </div>
                <DataTable<Article>
                    data={articles} columns={columns}
                    searchPlaceholder="Search articles…" searchKeys={['title', 'slug']}
                    emptyMessage="No articles yet."
                    action={
                        <Button asChild size="sm" className="gap-1.5">
                            <Link href="/knowledge/articles/create"><Plus className="h-4 w-4" /> Add Article</Link>
                        </Button>
                    }
                />
            </div>
            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete "{deleteTarget?.title}"?</AlertDialogTitle>
                        <AlertDialogDescription>This article will be permanently deleted.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => {
                            if (!deleteTarget) return;
                            router.delete(`/knowledge/articles/${deleteTarget.id}`, { onFinish: () => setDeleteTarget(null) });
                        }} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">Delete</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </AppLayout>
    );
}
