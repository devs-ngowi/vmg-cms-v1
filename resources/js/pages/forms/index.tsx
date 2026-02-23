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
import {
    ClipboardList, Eye, LayoutList, MoreHorizontal,
    Pencil, Plus, Power, Trash2,
} from 'lucide-react';
import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type Form = {
    id:                number;
    name:              string;
    form_type:         string;
    description:       string | null;
    is_active:         boolean;
    fields_count:      number;
    submissions_count: number;
    created_at:        string;
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Forms',     href: '/forms' },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function FormsIndex({ forms }: { forms: Form[] }) {
    const [deleteTarget, setDeleteTarget] = useState<Form | null>(null);

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/forms/${deleteTarget.id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    const columns: ColumnDef<Form>[] = [
        {
            key: 'name',
            header: 'Form',
            sortable: true,
            cell: (row) => (
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <LayoutList className="h-4 w-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                        <p className="truncate font-medium">{row.name}</p>
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
            key: 'form_type',
            header: 'Type',
            sortable: true,
            cell: (row) => (
                <Badge variant="outline" className="text-xs font-normal capitalize">
                    {row.form_type.replace(/_/g, ' ')}
                </Badge>
            ),
        },
        {
            key: 'is_active',
            header: 'Status',
            sortable: true,
            cell: (row) => (
                <Badge variant={row.is_active ? 'default' : 'secondary'}>
                    {row.is_active ? 'Active' : 'Inactive'}
                </Badge>
            ),
        },
        {
            key: 'fields_count',
            header: 'Fields',
            sortable: true,
            className: 'text-center',
            cell: (row) => (
                <span className="text-sm text-muted-foreground">{row.fields_count}</span>
            ),
        },
        {
            key: 'submissions_count',
            header: 'Submissions',
            sortable: true,
            className: 'text-center',
            cell: (row) => (
                <Link
                    href={`/submissions?form_id=${row.id}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                    <ClipboardList className="h-3.5 w-3.5" />
                    {row.submissions_count}
                </Link>
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
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem asChild>
                            <Link href={`/forms/${row.id}/edit`} className="flex items-center gap-2">
                                <Pencil className="h-3.5 w-3.5" />
                                Edit Builder
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href={`/submissions?form_id=${row.id}`} className="flex items-center gap-2">
                                <Eye className="h-3.5 w-3.5" />
                                View Submissions
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="flex cursor-pointer items-center gap-2"
                            onClick={() => router.patch(`/forms/${row.id}/toggle`)}
                        >
                            <Power className="h-3.5 w-3.5" />
                            {row.is_active ? 'Deactivate' : 'Activate'}
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

    const activeCount = forms.filter(f => f.is_active).length;
    const totalSubmissions = forms.reduce((s, f) => s + f.submissions_count, 0);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Forms" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Forms</h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            {forms.length} form{forms.length !== 1 ? 's' : ''} · {activeCount} active · {totalSubmissions} total submissions
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button asChild size="sm" variant="outline" className="gap-1.5">
                            <Link href="/submissions">
                                <ClipboardList className="h-3.5 w-3.5" />
                                Submissions
                            </Link>
                        </Button>
                        <Button asChild size="sm" className="gap-1.5">
                            <Link href="/forms/create">
                                <Plus className="h-4 w-4" />
                                New Form
                            </Link>
                        </Button>
                    </div>
                </div>

                <DataTable<Form>
                    data={forms}
                    columns={columns}
                    searchPlaceholder="Search forms…"
                    searchKeys={['name', 'form_type', 'description']}
                    emptyMessage="No forms yet. Create one to get started."
                />
            </div>

            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete form?</AlertDialogTitle>
                        <AlertDialogDescription>
                            <strong>{deleteTarget?.name}</strong> and all its submissions will be
                            permanently deleted. This cannot be undone.
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
