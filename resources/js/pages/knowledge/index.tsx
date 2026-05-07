// ============================================================
// FILE: resources/js/pages/knowledge/index.tsx
// ============================================================
import AppLayout from '@/layouts/app-layout';
import { Head, Link, router, usePage } from '@inertiajs/react';
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
import {
    BookOpen, FileText, FolderOpen, MoreHorizontal,
    Pencil, Plus, Star, Trash2,
} from 'lucide-react';
import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

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

// ── Breadcrumbs ───────────────────────────────────────────────────────────────

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Knowledge', href: '/knowledge' },
];

// ── Tab pill component ────────────────────────────────────────────────────────

function TabButton({
    active, onClick, children, count,
}: {
    active: boolean; onClick: () => void; children: React.ReactNode; count?: number;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={[
                'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all',
                active
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
            ].join(' ')}
        >
            {children}
            {count !== undefined && (
                <span className={[
                    'rounded-full px-1.5 py-0.5 text-xs font-semibold leading-none',
                    active ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-muted-foreground/15 text-muted-foreground',
                ].join(' ')}>
                    {count}
                </span>
            )}
        </button>
    );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function KnowledgeIndex({
    categories,
    articles,
}: {
    categories: Category[];
    articles:   Article[];
}) {
    const [tab, setTab]               = useState<'categories' | 'articles'>('categories');
    const [deleteCat, setDeleteCat]   = useState<Category | null>(null);
    const [deleteArt, setDeleteArt]   = useState<Article | null>(null);

    // ── Category columns ───────────────────────────────────────────────────

    const categoryColumns: ColumnDef<Category>[] = [
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
                        <div className="flex items-center gap-2">
                            <p className="font-medium">{row.name}</p>
                            {row.parent_id && (
                                <Badge variant="outline" className="text-[10px]">sub</Badge>
                            )}
                        </div>
                        <p className="text-xs text-muted-foreground">/{row.slug}</p>
                    </div>
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
                        <Badge variant="secondary" className="ml-1 text-[10px]">
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
                    onCheckedChange={() =>
                        router.patch(`/knowledge/categories/${row.id}/toggle`, {}, { preserveScroll: true })
                    }
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
                            <Link
                                href={`/knowledge/categories/${row.id}/edit`}
                                className="flex items-center gap-2"
                            >
                                <Pencil className="h-3.5 w-3.5" /> Edit
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="flex cursor-pointer items-center gap-2 text-destructive focus:text-destructive"
                            onClick={() => setDeleteCat(row)}
                        >
                            <Trash2 className="h-3.5 w-3.5" /> Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ),
        },
    ];

    // ── Article columns ────────────────────────────────────────────────────

    const articleColumns: ColumnDef<Article>[] = [
        {
            key: 'title',
            header: 'Article',
            sortable: true,
            cell: row => (
                <div className="flex items-center gap-3">
                    {row.media?.url
                        ? <img src={row.media.url} className="h-9 w-9 shrink-0 rounded-lg object-cover" alt="" />
                        : (
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                <FileText className="h-4 w-4 text-primary" />
                            </div>
                        )
                    }
                    <div className="min-w-0">
                        <div className="flex items-center gap-2">
                            <p className="truncate font-medium">{row.title}</p>
                            {row.is_featured && (
                                <Star className="h-3.5 w-3.5 shrink-0 text-amber-500" />
                            )}
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
                <Switch
                    checked={row.is_active}
                    onCheckedChange={() =>
                        router.patch(`/knowledge/articles/${row.id}/toggle`, {}, { preserveScroll: true })
                    }
                />
            ),
        },
        {
            key: 'created_at',
            header: 'Created',
            sortable: true,
            cell: row => (
                <span className="text-sm text-muted-foreground">{row.created_at}</span>
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
                            <Link
                                href={`/knowledge/articles/${row.id}/edit`}
                                className="flex items-center gap-2"
                            >
                                <Pencil className="h-3.5 w-3.5" /> Edit
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="flex cursor-pointer items-center gap-2 text-destructive focus:text-destructive"
                            onClick={() => setDeleteArt(row)}
                        >
                            <Trash2 className="h-3.5 w-3.5" /> Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ),
        },
    ];

    // ── Render ─────────────────────────────────────────────────────────────

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Knowledge Base" />

            <div className="px-4 py-6 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Knowledge Base</h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Manage categories and articles for your knowledge base.
                        </p>
                    </div>

                    {/* Add button changes based on active tab */}
                    {tab === 'categories' ? (
                        <Button asChild size="sm" className="gap-1.5 self-start sm:self-auto">
                            <Link href="/knowledge/categories/create">
                                <Plus className="h-4 w-4" /> Add Category
                            </Link>
                        </Button>
                    ) : (
                        <Button asChild size="sm" className="gap-1.5 self-start sm:self-auto">
                            <Link href="/knowledge/articles/create">
                                <Plus className="h-4 w-4" /> Add Article
                            </Link>
                        </Button>
                    )}
                </div>

                {/* Tab switcher */}
                <div className="mb-5 flex items-center gap-1 rounded-xl border bg-muted/30 p-1 w-fit">
                    <TabButton
                        active={tab === 'categories'}
                        onClick={() => setTab('categories')}
                        count={categories.length}
                    >
                        <FolderOpen className="h-4 w-4" />
                        Categories
                    </TabButton>
                    <TabButton
                        active={tab === 'articles'}
                        onClick={() => setTab('articles')}
                        count={articles.length}
                    >
                        <FileText className="h-4 w-4" />
                        Articles
                    </TabButton>
                </div>

                {/* Tables */}
                {tab === 'categories' && (
                    <DataTable<Category>
                        data={categories}
                        columns={categoryColumns}
                        searchPlaceholder="Search categories…"
                        searchKeys={['name', 'slug']}
                        emptyMessage="No categories yet."
                    />
                )}

                {tab === 'articles' && (
                    <DataTable<Article>
                        data={articles}
                        columns={articleColumns}
                        searchPlaceholder="Search articles…"
                        searchKeys={['title', 'slug']}
                        emptyMessage="No articles yet."
                    />
                )}
            </div>

            {/* ── Delete: Category ── */}
            <AlertDialog open={!!deleteCat} onOpenChange={() => setDeleteCat(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete "{deleteCat?.name}"?</AlertDialogTitle>
                        <AlertDialogDescription>
                            All articles in this category will also be deleted. This cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => {
                                if (!deleteCat) return;
                                router.delete(`/knowledge/categories/${deleteCat.id}`, {
                                    onFinish: () => setDeleteCat(null),
                                });
                            }}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* ── Delete: Article ── */}
            <AlertDialog open={!!deleteArt} onOpenChange={() => setDeleteArt(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete "{deleteArt?.title}"?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This article will be permanently deleted.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => {
                                if (!deleteArt) return;
                                router.delete(`/knowledge/articles/${deleteArt.id}`, {
                                    onFinish: () => setDeleteArt(null),
                                });
                            }}
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
