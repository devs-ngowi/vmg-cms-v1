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
import { BookOpen, FolderOpen, MoreHorizontal, Pencil, Plus, Tag, Trash2 } from 'lucide-react';
import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type Post = {
    id:             number;
    title:          string;
    slug:           string;
    excerpt:        string | null;
    status:         'draft' | 'review' | 'published' | 'archived';
    author:         string | null;
    categories:     string[];
    tags:           string[];
    workflow_step:  string;
    featured_media: { id: number; filename: string; alt_text: string | null } | null;
    published_at:   string | null;
    created_at:     string;
};

const statusConfig: Record<Post['status'], { label: string; variant: 'default' | 'secondary' | 'outline' | 'destructive' }> = {
    published: { label: 'Published', variant: 'default' },
    review:    { label: 'In Review', variant: 'secondary' },
    draft:     { label: 'Draft',     variant: 'outline' },
    archived:  { label: 'Archived',  variant: 'destructive' },
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Blog',      href: '/blog' },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BlogIndex({ posts }: { posts: Post[] }) {
    const [deleteTarget, setDeleteTarget] = useState<Post | null>(null);

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/blog/${deleteTarget.id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    const columns: ColumnDef<Post>[] = [
        {
            key: 'title',
            header: 'Post',
            sortable: true,
            cell: (row) => (
                <div className="flex items-center gap-3">
                    {row.featured_media ? (
                        <img
                            src={`/storage/${row.featured_media.filename}`}
                            alt={row.featured_media.alt_text ?? row.title}
                            className="h-10 w-16 rounded-lg object-cover shrink-0"
                        />
                    ) : (
                        <div className="flex h-10 w-16 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <BookOpen className="h-4 w-4 text-primary" />
                        </div>
                    )}
                    <div className="min-w-0">
                        <p className="truncate font-medium">{row.title}</p>
                        {row.excerpt && (
                            <p className="mt-0.5 max-w-xs truncate text-xs text-muted-foreground">
                                {row.excerpt}
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
            key: 'author',
            header: 'Author',
            sortable: true,
            cell: (row) => <span className="text-sm text-muted-foreground">{row.author ?? '—'}</span>,
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
                            <Link href={`/blog/${row.id}/edit`} className="flex items-center gap-2">
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
            <Head title="Blog Posts" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6 flex items-start justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Blog Posts</h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Manage articles and insights published on the VMG blog.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button asChild size="sm" variant="outline" className="gap-1.5">
                            <Link href="/blog/categories">
                                <FolderOpen className="h-3.5 w-3.5" />
                                Categories
                            </Link>
                        </Button>
                        <Button asChild size="sm" variant="outline" className="gap-1.5">
                            <Link href="/blog/tags">
                                <Tag className="h-3.5 w-3.5" />
                                Tags
                            </Link>
                        </Button>
                    </div>
                </div>

                <DataTable<Post>
                    data={posts}
                    columns={columns}
                    searchPlaceholder="Search posts…"
                    searchKeys={['title', 'slug', 'excerpt', 'status', 'author']}
                    emptyMessage="No blog posts found."
                    action={
                        <Button asChild size="sm" className="gap-1.5">
                            <Link href="/blog/create">
                                <Plus className="h-4 w-4" />
                                New Post
                            </Link>
                        </Button>
                    }
                />
            </div>

            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete post?</AlertDialogTitle>
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
