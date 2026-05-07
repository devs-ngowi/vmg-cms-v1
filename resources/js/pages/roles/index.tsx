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
import { MoreHorizontal, Pencil, Plus, ShieldCheck, Trash2, Users } from 'lucide-react';
import { useState } from 'react';
import { usePermission } from '../../utils/permissions'; // ← added

// ── Types ─────────────────────────────────────────────────────────────────────

type Role = {
    id:          number;
    name:        string;
    description: string | null;
    users_count: number;
    created_at:  string;
};

// ── Breadcrumbs ───────────────────────────────────────────────────────────────

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard',           href: '/dashboard' },
    { title: 'Roles & Permissions', href: '/roles' },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function RolesIndex({ roles }: { roles: Role[] }) {
    const [deleteTarget, setDeleteTarget] = useState<Role | null>(null);
    const { canCreate, canEdit, canDelete } = usePermission(); // ← added

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/roles/${deleteTarget.id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    const columns: ColumnDef<Role>[] = [
        {
            key: 'name',
            header: 'Role',
            sortable: true,
            cell: (row) => (
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                        <p className="font-medium capitalize">{row.name}</p>
                        {row.description && (
                            <p className="mt-0.5 max-w-xs truncate text-xs text-muted-foreground">
                                {row.description}
                            </p>
                        )}
                    </div>
                </div>
            ),
        },
        {
            key: 'users_count',
            header: 'Users',
            sortable: true,
            cell: (row) => (
                <div className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-muted-foreground" />
                    <Badge variant="secondary">{row.users_count}</Badge>
                </div>
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
        // Only render the actions column if user has at least edit or delete
        ...(canEdit('Roles') || canDelete('Roles') ? [{
            key: 'actions' as const,
            header: '',
            className: 'w-10 text-right',
            cell: (row: Role) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">

                        {/* Edit — only if canEdit */}
                        {canEdit('Roles') && (
                            <DropdownMenuItem asChild>
                                <Link
                                    href={`/roles/${row.id}/edit`}
                                    className="flex items-center gap-2"
                                >
                                    <Pencil className="h-3.5 w-3.5" />
                                    Edit
                                </Link>
                            </DropdownMenuItem>
                        )}

                        {/* Separator only if both actions are visible */}
                        {canEdit('Roles') && canDelete('Roles') && (
                            <DropdownMenuSeparator />
                        )}

                        {/* Delete — only if canDelete */}
                        {canDelete('Roles') && (
                            <DropdownMenuItem
                                className="flex cursor-pointer items-center gap-2 text-destructive focus:text-destructive"
                                onClick={() => setDeleteTarget(row)}
                                disabled={row.users_count > 0}
                            >
                                <Trash2 className="h-3.5 w-3.5" />
                                {row.users_count > 0 ? 'Has users' : 'Delete'}
                            </DropdownMenuItem>
                        )}

                    </DropdownMenuContent>
                </DropdownMenu>
            ),
        }] : []),
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Roles & Permissions" />

            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Roles & Permissions</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Define roles and control what each role can access.
                    </p>
                </div>

                <DataTable<Role>
                    data={roles}
                    columns={columns}
                    searchPlaceholder="Search roles…"
                    searchKeys={['name', 'description']}
                    emptyMessage="No roles found."
                    // Add Role button — only if canCreate
                    action={
                        canCreate('Roles') ? (
                            <Button asChild size="sm" className="gap-1.5">
                                <Link href="/roles/create">
                                    <Plus className="h-4 w-4" />
                                    Add Role
                                </Link>
                            </Button>
                        ) : undefined
                    }
                />
            </div>

            {/* Delete confirmation */}
            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete role?</AlertDialogTitle>
                        <AlertDialogDescription>
                            <strong className="capitalize">{deleteTarget?.name}</strong> and all its
                            permissions will be permanently removed. This action cannot be undone.
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
