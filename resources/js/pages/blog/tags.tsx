import AppLayout from '@/layouts/app-layout';
import { Head, router, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { DataTable, type ColumnDef } from '@/components/ui/data-table';
import type { BreadcrumbItem } from '@/types';
import { Plus, Tag as TagIcon, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────

type Tag = {
    id:         number;
    name:       string;
    slug:       string;
    created_at: string;
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Blog',      href: '/blog' },
    { title: 'Tags',      href: '/blog/tags' },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BlogTags({ tags }: { tags: Tag[] }) {
    const [deleteTarget, setDeleteTarget] = useState<Tag | null>(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        slug: '',
    });

    const handleNameChange = (val: string) => {
        setData('name', val);
        if (!data.slug) {
            setData('slug', val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
        }
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/blog/tags', { onSuccess: () => reset() });
    };

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/blog/tags/${deleteTarget.id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    const columns: ColumnDef<Tag>[] = [
        {
            key: 'name',
            header: 'Tag',
            sortable: true,
            cell: (row) => (
                <div className="flex items-center gap-2">
                    <TagIcon className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                    <div>
                        <p className="font-medium">{row.name}</p>
                        <p className="text-xs text-muted-foreground/60">/{row.slug}</p>
                    </div>
                </div>
            ),
        },
        {
            key: 'created_at',
            header: 'Created',
            sortable: true,
            cell: (row) => (
                <span className="text-sm text-muted-foreground">
                    {new Date(row.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                </span>
            ),
        },
        {
            key: 'actions',
            header: '',
            className: 'w-10 text-right',
            cell: (row) => (
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    onClick={() => setDeleteTarget(row)}
                >
                    <Trash2 className="h-4 w-4" />
                </Button>
            ),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Blog Tags" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Tags</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Add and manage tags used to classify blog posts.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">

                    {/* ── Add tag form ───────────────────────────────────── */}
                    <div className="lg:col-span-1">
                        <div className="rounded-xl border bg-card p-6 shadow-sm">
                            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                Add Tag
                            </h2>
                            <form onSubmit={submit} className="grid gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <Label className={cn('text-sm font-medium', errors.name && 'text-destructive')}>
                                        Name <span className="text-destructive">*</span>
                                    </Label>
                                    <Input
                                        value={data.name}
                                        onChange={e => handleNameChange(e.target.value)}
                                        placeholder="e.g. Labour Law"
                                    />
                                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <Label className="text-sm font-medium">Slug</Label>
                                    <div className="flex items-center rounded-md border bg-muted/30 px-2 text-xs text-muted-foreground">
                                        <span className="pr-1">/tag/</span>
                                        <input
                                            value={data.slug}
                                            onChange={e => setData('slug', e.target.value)}
                                            className="flex-1 bg-transparent py-2 outline-none"
                                            placeholder="labour-law"
                                        />
                                    </div>
                                </div>

                                <Button type="submit" disabled={processing} className="gap-2">
                                    {!processing && <Plus className="h-4 w-4" />}
                                    Add Tag
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* ── Tags table ─────────────────────────────────────── */}
                    <div className="lg:col-span-2">
                        <DataTable<Tag>
                            data={tags}
                            columns={columns}
                            searchPlaceholder="Search tags…"
                            searchKeys={['name', 'slug']}
                            emptyMessage="No tags yet."
                        />
                    </div>
                </div>
            </div>

            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete tag?</AlertDialogTitle>
                        <AlertDialogDescription>
                            The tag <strong>{deleteTarget?.name}</strong> will be permanently deleted
                            and removed from all posts.
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
