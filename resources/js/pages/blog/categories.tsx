import AppLayout from '@/layouts/app-layout';
import { Head, router, useForm } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
    Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from '@/components/ui/dialog';
import { DataTable, type ColumnDef } from '@/components/ui/data-table';
import type { BreadcrumbItem } from '@/types';
import { FolderOpen, Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────

type Category = {
    id:             number;
    name:           string;
    slug:           string;
    description:    string | null;
    parent:         string | null;
    parent_id:      number | null;
    children_count: number;
    created_at:     string;
};

type AllCategory = { id: number; name: string };

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard',  href: '/dashboard' },
    { title: 'Blog',       href: '/blog' },
    { title: 'Categories', href: '/blog/categories' },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BlogCategories({
    categories,
    allCategories,
}: {
    categories:    Category[];
    allCategories: AllCategory[];
}) {
    const [deleteTarget, setDeleteTarget] = useState<Category | null>(null);
    const [editTarget,   setEditTarget]   = useState<Category | null>(null);

    // ── Add form ──────────────────────────────────────────────────────────────

    const addForm = useForm({
        name:        '',
        slug:        '',
        description: '',
        parent_id:   '',
    });

    const handleAddNameChange = (val: string) => {
        addForm.setData('name', val);
        addForm.setData('slug', val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
    };

    const submitAdd = (e: React.FormEvent) => {
        e.preventDefault();
        addForm.post('/blog/categories', { onSuccess: () => addForm.reset() });
    };

    // ── Edit form ─────────────────────────────────────────────────────────────

    const editForm = useForm({
        name:        '',
        slug:        '',
        description: '',
        parent_id:   '',
    });

    const openEdit = (cat: Category) => {
        setEditTarget(cat);
        editForm.setData({
            name:        cat.name,
            slug:        cat.slug,
            description: cat.description ?? '',
            parent_id:   cat.parent_id ? String(cat.parent_id) : 'none',
        });
    };

    const submitEdit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!editTarget) return;
        editForm.patch(`/blog/categories/${editTarget.id}`, {
            onSuccess: () => setEditTarget(null),
        });
    };

    // ── Delete ────────────────────────────────────────────────────────────────

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/blog/categories/${deleteTarget.id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    // ── Columns ───────────────────────────────────────────────────────────────

    const columns: ColumnDef<Category>[] = [
        {
            key: 'name',
            header: 'Category',
            sortable: true,
            cell: (row) => (
                <div className="flex items-center gap-2">
                    <FolderOpen className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <div>
                        <p className="font-medium">{row.name}</p>
                        <p className="text-xs text-muted-foreground/60">/{row.slug}</p>
                    </div>
                </div>
            ),
        },
        {
            key: 'parent',
            header: 'Parent',
            sortable: true,
            cell: (row) => (
                row.parent
                    ? <Badge variant="outline" className="text-xs font-normal">{row.parent}</Badge>
                    : <span className="text-xs text-muted-foreground">—</span>
            ),
        },
        {
            key: 'children_count',
            header: 'Sub-cats',
            sortable: true,
            className: 'text-center',
            cell: (row) => (
                <span className="text-sm text-muted-foreground">{row.children_count}</span>
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
            className: 'w-20 text-right',
            cell: (row) => (
                <div className="flex items-center justify-end gap-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-primary"
                        title="Edit"
                        onClick={() => openEdit(row)}
                    >
                        <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={cn(
                            'h-8 w-8 text-muted-foreground hover:text-destructive',
                            row.children_count > 0 && 'pointer-events-none opacity-30',
                        )}
                        title={row.children_count > 0 ? 'Remove sub-categories first' : 'Delete'}
                        onClick={() => row.children_count === 0 && setDeleteTarget(row)}
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Blog Categories" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Categories</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Organise blog posts into categories and sub-categories.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">

                    {/* ── Add category form ──────────────────────────────── */}
                    <div className="lg:col-span-1">
                        <div className="rounded-xl border bg-card p-6 shadow-sm">
                            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                Add Category
                            </h2>
                            <form onSubmit={submitAdd} className="grid gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <Label className={cn('text-sm font-medium', addForm.errors.name && 'text-destructive')}>
                                        Name <span className="text-destructive">*</span>
                                    </Label>
                                    <Input
                                        value={addForm.data.name}
                                        onChange={e => handleAddNameChange(e.target.value)}
                                        placeholder="e.g. HR Management"
                                    />
                                    {addForm.errors.name && (
                                        <p className="text-xs text-destructive">{addForm.errors.name}</p>
                                    )}
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <Label className="text-sm font-medium">Slug</Label>
                                    <div className="flex items-center rounded-md border bg-muted/30 px-2 text-xs text-muted-foreground">
                                        <span className="pr-1">/blog/</span>
                                        <input
                                            value={addForm.data.slug}
                                            onChange={e => addForm.setData('slug', e.target.value)}
                                            className="flex-1 bg-transparent py-2 outline-none"
                                            placeholder="hr-management"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <Label className="text-sm font-medium">Parent Category</Label>
                                    <Select
                                        value={addForm.data.parent_id}
                                        onValueChange={v => addForm.setData('parent_id', v)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="None (top-level)" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">None (top-level)</SelectItem>
                                            {allCategories.map(c => (
                                                <SelectItem key={c.id} value={String(c.id)}>
                                                    {c.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <Label className="text-sm font-medium">Description</Label>
                                    <Textarea
                                        value={addForm.data.description}
                                        onChange={e => addForm.setData('description', e.target.value)}
                                        placeholder="Optional description…"
                                        rows={3}
                                    />
                                </div>

                                <Button type="submit" disabled={addForm.processing} className="gap-2">
                                    <Plus className="h-4 w-4" />
                                    Add Category
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* ── Categories table ───────────────────────────────── */}
                    <div className="lg:col-span-2">
                        <DataTable<Category>
                            data={categories}
                            columns={columns}
                            searchPlaceholder="Search categories…"
                            searchKeys={['name', 'slug', 'parent', 'description']}
                            emptyMessage="No categories yet."
                        />
                    </div>
                </div>
            </div>

            {/* ── Edit dialog ───────────────────────────────────────────────── */}
            <Dialog open={!!editTarget} onOpenChange={() => setEditTarget(null)}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Edit Category</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={submitEdit} className="grid gap-4 py-2">
                        <div className="flex flex-col gap-1.5">
                            <Label className={cn('text-sm font-medium', editForm.errors.name && 'text-destructive')}>
                                Name <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                value={editForm.data.name}
                                onChange={e => editForm.setData('name', e.target.value)}
                                placeholder="e.g. HR Management"
                                autoFocus
                            />
                            {editForm.errors.name && (
                                <p className="text-xs text-destructive">{editForm.errors.name}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <Label className="text-sm font-medium">Slug</Label>
                            <div className="flex items-center rounded-md border bg-muted/30 px-2 text-xs text-muted-foreground">
                                <span className="pr-1">/blog/</span>
                                <input
                                    value={editForm.data.slug}
                                    onChange={e => editForm.setData('slug', e.target.value)}
                                    className="flex-1 bg-transparent py-2 outline-none"
                                    placeholder="hr-management"
                                />
                            </div>
                            {editForm.errors.slug && (
                                <p className="text-xs text-destructive">{editForm.errors.slug}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <Label className="text-sm font-medium">Parent Category</Label>
                            <Select
                                value={editForm.data.parent_id}
                                onValueChange={v => editForm.setData('parent_id', v)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="None (top-level)" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="none">None (top-level)</SelectItem>
                                    {allCategories
                                        .filter(c => c.id !== editTarget?.id) // prevent self-parenting
                                        .map(c => (
                                            <SelectItem key={c.id} value={String(c.id)}>
                                                {c.name}
                                            </SelectItem>
                                        ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <Label className="text-sm font-medium">Description</Label>
                            <Textarea
                                value={editForm.data.description}
                                onChange={e => editForm.setData('description', e.target.value)}
                                placeholder="Optional description…"
                                rows={3}
                            />
                        </div>

                        <DialogFooter className="gap-2 pt-2">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setEditTarget(null)}
                            >
                                Cancel
                            </Button>
                            <Button type="submit" disabled={editForm.processing} className="gap-2">
                                Save Changes
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* ── Delete dialog ─────────────────────────────────────────────── */}
            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete category?</AlertDialogTitle>
                        <AlertDialogDescription>
                            <strong>{deleteTarget?.name}</strong> will be permanently deleted.
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
