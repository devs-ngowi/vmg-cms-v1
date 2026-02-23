import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
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
import { MoreHorizontal, Pencil, PenLine, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type Author = {
    author_id:  number;
    name:       string;
    bio:        string | null;
    user:       { id: number; email: string } | null;
    created_at: string;
};

// ── Breadcrumbs ───────────────────────────────────────────────────────────────

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Authors',   href: '/authors' },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AuthorsIndex({ authors }: { authors: Author[] }) {
    const [deleteTarget, setDeleteTarget] = useState<Author | null>(null);

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/authors/${deleteTarget.author_id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    const columns: ColumnDef<Author>[] = [
        {
            key: 'name',
            header: 'Author',
            sortable: true,
            cell: (row) => (
                <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                        <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
                            {row.name
                                .split(' ')
                                .map(n => n[0])
                                .join('')
                                .toUpperCase()
                                .slice(0, 2)}
                        </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                        <p className="truncate font-medium">{row.name}</p>
                        {row.bio && (
                            <p className="mt-0.5 max-w-xs truncate text-xs text-muted-foreground">
                                {row.bio}
                            </p>
                        )}
                    </div>
                </div>
            ),
        },
        {
            key: 'user',
            header: 'Linked Account',
            sortable: false,
            cell: (row) =>
                row.user ? (
                    <Badge variant="secondary" className="font-normal">
                        {row.user.email}
                    </Badge>
                ) : (
                    <span className="text-xs text-muted-foreground">No account linked</span>
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
                                href={`/authors/${row.author_id}/edit`}
                                className="flex items-center gap-2"
                            >
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
            <Head title="Authors" />

            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Authors</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Manage content authors and their linked user accounts.
                    </p>
                </div>

                <DataTable<Author>
                    data={authors}
                    columns={columns}
                    searchPlaceholder="Search authors…"
                    searchKeys={['name', 'bio']}
                    emptyMessage="No authors found."
                    action={
                        <Button asChild size="sm" className="gap-1.5">
                            <Link href="/authors/create">
                                <Plus className="h-4 w-4" />
                                Add Author
                            </Link>
                        </Button>
                    }
                />
            </div>

            {/* Delete confirmation */}
            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete author?</AlertDialogTitle>
                        <AlertDialogDescription>
                            <strong>{deleteTarget?.name}</strong> will be permanently removed.
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
