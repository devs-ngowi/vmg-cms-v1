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
import { BookOpen, FolderOpen, MoreHorizontal, Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

type Category = {
    id:            number;
    name:          string;
    slug:          string;
    description:   string | null;
    parent_id:     number | null;
    sort_order:    number;
    is_active:     boolean;
    article_count: number;
    media:         { url: string | null; is_icon: boolean; icon_class: string | null } | null;
    children:      Category[];
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard',  href: '/dashboard' },
    { title: 'Knowledge',  href: '/knowledge' },
    { title: 'Categories', href: '/knowledge/categories' },
];

export default function KnowledgeCategoriesIndex({ categories }: { categories: Category[] }) {
    const [deleteTarget, setDeleteTarget] = useState<Category | null>(null);

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/knowledge/categories/${deleteTarget.id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    const columns: ColumnDef<Category>[] = [
        {
            key: 'sort_order',
            header: '#',
            sortable: true,
            className: 'w-12 text-center',
            cell: row => <span className="font-mono text-sm text-muted-foreground">{row.sort_order}</span>,
        },
        {
            key: 'name',
            header: 'Category',
            sortable: true,
            cell: row => (
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        {row.media?.is_icon && row.media.icon_class
                            ? <i className={`${row.media.icon_class} text-lg text-primary`} />
                            : row.media?.url
                                ? <img src={row.media.url} alt={row.name} className="h-9 w-9 rounded-lg object-cover" />
                                : <FolderOpen className="h-4 w-4 text-primary" />
                        }
                    </div>
                    <div>
                        <p className="font-medium">{row.name}</p>
                        <p className="text-xs text-muted-foreground">/{row.slug}</p>
                    </div>
                    {row.parent_id && (
                        <Badge variant="outline" className="text-[10px]">sub</Badge>
                    )}
                </div>
            ),
        },
        {
            key: 'article_count',
            header: 'Articles',
            cell: row => (
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5" />
                    {row.article_count}
                    {row.children?.length > 0 && (
                        <Badge variant="secondary" className="text-[10px] ml-1">
                            {row.children.length} sub
                        </Badge>
                    )}
                </div>
            ),
        },
        {
            key: 'is_active',
            header: 'Active',
            cell: row => (
                <Switch
                    checked={row.is_active}
                    onCheckedChange={() => router.patch(`/knowledge/categories/${row.id}/toggle`, {}, { preserveScroll: true })}
                />
            ),
        },
        {
            key: 'actions',
            header: '',
            className: 'w-10 text-right',
            cell: row => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuItem asChild>
                            <Link href={`/knowledge/categories/${row.id}/edit`} className="flex items-center gap-2">
                                <Pencil className="h-3.5 w-3.5" /> Edit
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="flex cursor-pointer items-center gap-2 text-destructive focus:text-destructive"
                            onClick={() => setDeleteTarget(row)}
                        >
                            <Trash2 className="h-3.5 w-3.5" /> Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Knowledge Categories" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Knowledge Categories</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Organise knowledge content into categories and sub-categories.
                    </p>
                </div>

                <DataTable<Category>
                    data={categories}
                    columns={columns}
                    searchPlaceholder="Search categories…"
                    searchKeys={['name', 'slug']}
                    emptyMessage="No categories yet."
                    action={
                        <Button asChild size="sm" className="gap-1.5">
                            <Link href="/knowledge/categories/create">
                                <Plus className="h-4 w-4" /> Add Category
                            </Link>
                        </Button>
                    }
                />
            </div>

            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete "{deleteTarget?.name}"?</AlertDialogTitle>
                        <AlertDialogDescription>
                            All articles in this category will also be deleted. This cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmDelete}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </AppLayout>
    );
}
