import AppLayout                              from '@/layouts/app-layout';
import { Head, Link, router }                from '@inertiajs/react';
import { Badge }                             from '@/components/ui/badge';
import { Button }                            from '@/components/ui/button';
import {
    Select, SelectContent, SelectItem,
    SelectTrigger, SelectValue,
}                                            from '@/components/ui/select';
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
}                                            from '@/components/ui/alert-dialog';
import { DataTable, type ColumnDef }         from '@/components/ui/data-table';
import type { BreadcrumbItem }               from '@/types';
import {
    ArrowLeft, Calendar, CheckCircle2, ClipboardList,
    Eye, Mail, MessageSquare, MoreHorizontal,
    Phone, Trash2, User,
} from 'lucide-react';
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem,
    DropdownMenuSeparator, DropdownMenuTrigger,
}                                            from '@/components/ui/dropdown-menu';
import { useState, useMemo }                 from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type Submission = {
    id:           number;
    form_id:      number;
    form_name:    string | null;
    form_type:    string | null;
    sender_name:  string | null;
    sender_email: string | null;
    phone:        string | null;
    status:       string;
    submitted_at: string | null;
};

type Form = {
    id:   number;
    name: string;
};

// ── Status config ─────────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<string, { label: string; color: string; dot: string }> = {
    new:      { label: 'New',      color: 'border-blue-200 bg-blue-50 text-blue-700',   dot: 'bg-blue-500'   },
    read:     { label: 'Read',     color: 'border-slate-200 bg-slate-50 text-slate-600', dot: 'bg-slate-400'  },
    replied:  { label: 'Replied',  color: 'border-green-200 bg-green-50 text-green-700', dot: 'bg-green-500'  },
    archived: { label: 'Archived', color: 'border-amber-200 bg-amber-50 text-amber-700', dot: 'bg-amber-400'  },
};

function StatusBadge({ status }: { status: string }) {
    const cfg = STATUS_CONFIG[status] ?? STATUS_CONFIG.new;
    return (
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${cfg.color}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`} />
            {cfg.label}
        </span>
    );
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard',   href: '/dashboard' },
    { title: 'Submissions', href: '/submissions' },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SubmissionsIndex({
    submissions,
    forms,
}: {
    submissions?: Submission[];
    forms?:       Form[];
}) {
    const [deleteTarget,  setDeleteTarget]  = useState<Submission | null>(null);
    const [statusFilter,  setStatusFilter]  = useState<string>('all');
    const [formFilter,    setFormFilter]    = useState<string>('all');
    const [updatingId,    setUpdatingId]    = useState<number | null>(null);

    // ── Guard ─────────────────────────────────────────────────────────────────
    if (!submissions) {
        return (
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Submissions" />
                <div className="flex items-center justify-center py-32 text-sm text-muted-foreground">
                    Loading submissions…
                </div>
            </AppLayout>
        );
    }

    const allForms = forms ?? [];

    // ── Derived stats ─────────────────────────────────────────────────────────
    const stats = useMemo(() => ({
        total:    submissions.length,
        new:      submissions.filter(s => s.status === 'new').length,
        replied:  submissions.filter(s => s.status === 'replied').length,
        archived: submissions.filter(s => s.status === 'archived').length,
    }), [submissions]);

    // ── Filtered data ─────────────────────────────────────────────────────────
    const filtered = useMemo(() => {
        return submissions.filter(s => {
            const statusOk = statusFilter === 'all' || s.status === statusFilter;
            const formOk   = formFilter   === 'all' || String(s.form_id) === formFilter;
            return statusOk && formOk;
        });
    }, [submissions, statusFilter, formFilter]);

    // ── Actions ───────────────────────────────────────────────────────────────
    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/submissions/${deleteTarget.id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    const updateStatus = (submission: Submission, status: string) => {
        setUpdatingId(submission.id);
        router.patch(
            `/submissions/${submission.id}`,
            { status },
            {
                preserveScroll: true,
                onFinish: () => setUpdatingId(null),
            },
        );
    };

    // ── Columns ───────────────────────────────────────────────────────────────
    const columns: ColumnDef<Submission>[] = [
        {
            key:      'sender_name',
            header:   'Sender',
            sortable: true,
            cell: (row) => (
                <div className="flex items-center gap-3">
                    {/* Avatar circle */}
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary uppercase">
                        {(row.sender_name ?? row.sender_email ?? '?')[0]}
                    </div>
                    <div className="min-w-0">
                        <p className="truncate text-sm font-medium">
                            {row.sender_name ?? <span className="italic text-muted-foreground">Anonymous</span>}
                        </p>
                        {row.sender_email && (
                            <p className="truncate text-xs text-muted-foreground">{row.sender_email}</p>
                        )}
                    </div>
                </div>
            ),
        },
        {
            key:      'form_name',
            header:   'Form',
            sortable: true,
            cell: (row) => (
                <div>
                    <p className="text-sm font-medium">{row.form_name ?? '—'}</p>
                    {row.form_type && (
                        <p className="text-xs capitalize text-muted-foreground">
                            {row.form_type.replace(/_/g, ' ')}
                        </p>
                    )}
                </div>
            ),
        },
        {
            key:      'status',
            header:   'Status',
            sortable: true,
            cell: (row) => <StatusBadge status={row.status} />,
        },
        {
            key:      'submitted_at',
            header:   'Received',
            sortable: true,
            cell: (row) => (
                <span className="text-sm text-muted-foreground">
                    {row.submitted_at ?? '—'}
                </span>
            ),
        },
        {
            key:       'actions',
            header:    '',
            className: 'w-10 text-right',
            cell: (row) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost" size="icon" className="h-8 w-8"
                            disabled={updatingId === row.id}
                        >
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-52">

                        {/* View detail */}
                        <DropdownMenuItem asChild>
                            <Link href={`/submissions/${row.id}`} className="flex items-center gap-2">
                                <Eye className="h-3.5 w-3.5" />
                                View Message
                            </Link>
                        </DropdownMenuItem>

                        {/* Reply via email */}
                        {row.sender_email && (
                            <DropdownMenuItem asChild>
                                <a
                                    href={`mailto:${row.sender_email}?subject=Re: ${row.form_name ?? 'Your submission'}`}
                                    className="flex items-center gap-2"
                                >
                                    <Mail className="h-3.5 w-3.5" />
                                    Reply via Email
                                </a>
                            </DropdownMenuItem>
                        )}

                        <DropdownMenuSeparator />

                        {/* Quick status updates */}
                        {(['new', 'read', 'replied', 'archived'] as const)
                            .filter(s => s !== row.status)
                            .map(s => {
                                const cfg = STATUS_CONFIG[s];
                                return (
                                    <DropdownMenuItem
                                        key={s}
                                        className="flex cursor-pointer items-center gap-2"
                                        onClick={() => updateStatus(row, s)}
                                    >
                                        <span className={`h-2 w-2 rounded-full ${cfg.dot}`} />
                                        Mark as {cfg.label}
                                    </DropdownMenuItem>
                                );
                            })
                        }

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
            <Head title="Submissions" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">

                {/* ── Header ── */}
                <div className="mb-6 flex items-start justify-between gap-4 flex-wrap">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Submissions</h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            All form responses received from your website
                        </p>
                    </div>
                    <Button asChild size="sm" variant="outline" className="gap-1.5">
                        <Link href="/forms">
                            <ArrowLeft className="h-3.5 w-3.5" />
                            Back to Forms
                        </Link>
                    </Button>
                </div>

                {/* ── Stats cards ── */}
                <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {[
                        { label: 'Total',    value: stats.total,    color: 'text-foreground', dot: '' },
                        { label: 'New',      value: stats.new,      color: 'text-blue-600',   dot: 'bg-blue-500'  },
                        { label: 'Replied',  value: stats.replied,  color: 'text-green-600',  dot: 'bg-green-500' },
                        { label: 'Archived', value: stats.archived, color: 'text-amber-600',  dot: 'bg-amber-400' },
                    ].map(({ label, value, color, dot }) => (
                        <button
                            key={label}
                            type="button"
                            onClick={() => setStatusFilter(label === 'Total' ? 'all' : label.toLowerCase())}
                            className={`rounded-xl border bg-card px-5 py-4 text-left transition-shadow hover:shadow-md ${
                                (label === 'Total' ? statusFilter === 'all' : statusFilter === label.toLowerCase())
                                    ? 'ring-2 ring-primary/30'
                                    : ''
                            }`}
                        >
                            <div className="flex items-center gap-2 mb-1">
                                {dot && <span className={`h-2 w-2 rounded-full ${dot}`} />}
                                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                    {label}
                                </p>
                            </div>
                            <p className={`text-2xl font-bold tabular-nums ${color}`}>{value}</p>
                        </button>
                    ))}
                </div>

                {/* ── Filters ── */}
                <div className="mb-4 flex flex-wrap gap-3">
                    {/* Status filter */}
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="w-40">
                            <SelectValue placeholder="All statuses" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All statuses</SelectItem>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="read">Read</SelectItem>
                            <SelectItem value="replied">Replied</SelectItem>
                            <SelectItem value="archived">Archived</SelectItem>
                        </SelectContent>
                    </Select>

                    {/* Form filter */}
                    {allForms.length > 0 && (
                        <Select value={formFilter} onValueChange={setFormFilter}>
                            <SelectTrigger className="w-48">
                                <SelectValue placeholder="All forms" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All forms</SelectItem>
                                {allForms.map((f) => (
                                    <SelectItem key={f.id} value={String(f.id)}>
                                        {f.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}

                    {/* Clear filters */}
                    {(statusFilter !== 'all' || formFilter !== 'all') && (
                        <Button
                            size="sm"
                            variant="ghost"
                            className="text-muted-foreground"
                            onClick={() => { setStatusFilter('all'); setFormFilter('all'); }}
                        >
                            Clear filters
                        </Button>
                    )}

                    {/* Filtered count */}
                    {(statusFilter !== 'all' || formFilter !== 'all') && (
                        <span className="ml-auto self-center text-xs text-muted-foreground">
                            Showing {filtered.length} of {submissions.length}
                        </span>
                    )}
                </div>

                {/* ── Table ── */}
                <DataTable<Submission>
                    data={filtered}
                    columns={columns}
                    searchPlaceholder="Search by name, email, or form…"
                    searchKeys={['sender_name', 'sender_email', 'form_name']}
                    emptyMessage={
                        statusFilter !== 'all' || formFilter !== 'all'
                            ? 'No submissions match your filters.'
                            : 'No submissions yet.'
                    }
                    onRowClick={(row) => router.visit(`/submissions/${row.id}`)}
                />
            </div>

            {/* ── Delete confirmation ── */}
            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete submission?</AlertDialogTitle>
                        <AlertDialogDescription>
                            The submission from{' '}
                            <strong>{deleteTarget?.sender_name ?? deleteTarget?.sender_email ?? 'this sender'}</strong>{' '}
                            will be permanently deleted along with all responses. This cannot be undone.
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
