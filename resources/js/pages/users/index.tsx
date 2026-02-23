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
import { MoreHorizontal, Pencil, Shield, Trash2, UserPlus } from 'lucide-react';
import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type User = {
    id: number;
    username: string;
    full_name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive' | 'pending';
    last_login: string | null;
    created_at: string;
};

// ── Breadcrumbs ───────────────────────────────────────────────────────────────

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Users',     href: '/users' },
];

// ── Status config ─────────────────────────────────────────────────────────────

const statusVariant: Record<User['status'], 'default' | 'secondary' | 'outline'> = {
    active:   'default',
    pending:  'secondary',
    inactive: 'outline',
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function UsersIndex({ users }: { users: User[] }) {
    const [deleteTarget, setDeleteTarget] = useState<User | null>(null);

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/users/${deleteTarget.id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    // ── Columns ───────────────────────────────────────────────────────────────

    const columns: ColumnDef<User>[] = [
        {
            key: 'full_name',
            header: 'User',
            sortable: true,
            cell: (row) => (
                <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs font-semibold">
                            {(row.full_name || row.username)
                                .split(' ')
                                .map((n: string) => n[0])
                                .join('')
                                .toUpperCase()
                                .slice(0, 2)}
                        </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                        <p className="truncate font-medium leading-none">{row.full_name}</p>
                        <p className="mt-0.5 truncate text-xs text-muted-foreground">@{row.username}</p>
                        <p className="mt-0.5 truncate text-xs text-muted-foreground">{row.email}</p>
                    </div>
                </div>
            ),
        },
        {
            key: 'role',
            header: 'Role',
            sortable: true,
            cell: (row) => (
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Shield className="h-3.5 w-3.5" />
                    {row.role}
                </div>
            ),
        },
        {
            key: 'status',
            header: 'Status',
            sortable: true,
            cell: (row) => (
                <Badge variant={statusVariant[row.status]} className="capitalize">
                    {row.status}
                </Badge>
            ),
        },
        {
            key: 'last_login',
            header: 'Last Login',
            sortable: true,
            cell: (row) => (
                <span className="text-sm text-muted-foreground">
                    {row.last_login ?? 'Never'}
                </span>
            ),
        },
        {
            key: 'created_at',
            header: 'Joined',
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
                            <Link href={`/users/${row.id}/edit`} className="flex items-center gap-2">
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
            <Head title="User Management" />

            <div className="px-4 py-6 sm:px-6 lg:px-8">
                {/* Page header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Users</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Manage team members, roles, and access.
                    </p>
                </div>

                {/* Table */}
                <DataTable<User>
                    data={users}
                    columns={columns}
                    searchPlaceholder="Search users…"
                    searchKeys={['full_name', 'username', 'email', 'role', 'status']}
                    emptyMessage="No users found."
                    action={
                        <Button asChild size="sm" className="gap-1.5">
                            <Link href="/users/create">
                                <UserPlus className="h-4 w-4" />
                                Add User
                            </Link>
                        </Button>
                    }
                />
            </div>

            {/* Delete confirmation dialog */}
            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete user?</AlertDialogTitle>
                        <AlertDialogDescription>
                            <strong>{deleteTarget?.full_name}</strong> will be permanently removed.
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
