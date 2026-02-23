import AppLayout from '@/layouts/app-layout';
import { Head, router } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import {
    Dialog, DialogContent, DialogHeader, DialogTitle,
} from '@/components/ui/dialog';
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { DataTable, type ColumnDef } from '@/components/ui/data-table';
import type { BreadcrumbItem } from '@/types';
import {
    CheckCircle2, Circle, Clock, ClipboardList, Mail, Phone,
    Trash2, User, XCircle,
} from 'lucide-react';
import { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────

type Status = 'new' | 'read' | 'replied' | 'archived';

type Submission = {
    id:           number;
    form_id:      number;
    form_name:    string | null;
    form_type:    string | null;
    sender_name:  string | null;
    sender_email: string | null;
    phone:        string | null;
    status:       Status;
    submitted_at: string | null;
};

type FormOption = { id: number; name: string };

// ── Status config ─────────────────────────────────────────────────────────────

const statusConfig: Record<Status, {
    label: string;
    icon: React.ReactNode;
    variant: 'default' | 'secondary' | 'outline' | 'destructive';
    className: string;
}> = {
    new:      { label: 'New',      icon: <Circle className="h-3 w-3" />,        variant: 'default',     className: 'bg-blue-600 hover:bg-blue-700 text-white border-0' },
    read:     { label: 'Read',     icon: <CheckCircle2 className="h-3 w-3" />,  variant: 'secondary',   className: '' },
    replied:  { label: 'Replied',  icon: <CheckCircle2 className="h-3 w-3" />,  variant: 'outline',     className: 'border-emerald-500 text-emerald-600' },
    archived: { label: 'Archived', icon: <XCircle className="h-3 w-3" />,       variant: 'outline',     className: 'text-muted-foreground' },
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard',    href: '/dashboard' },
    { title: 'Submissions',  href: '/submissions' },
];

// ── Detail panel ──────────────────────────────────────────────────────────────

function SubmissionDetail({ submission, onClose }: {
    submission: Submission & { responses?: { label: string; field_type: string; value: string }[] };
    onClose: () => void;
}) {
    const [status, setStatus] = useState<Status>(submission.status);

    const updateStatus = (s: Status) => {
        setStatus(s);
        router.patch(`/submissions/${submission.id}`, { status: s });
    };

    const cfg = statusConfig[status];

    return (
        <DialogContent className="sm:max-w-lg">
            <DialogHeader>
                <DialogTitle className="text-base">Submission #{submission.id}</DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
                {/* Sender info */}
                <div className="rounded-lg border bg-muted/20 p-4 space-y-2">
                    {submission.sender_name && (
                        <div className="flex items-center gap-2 text-sm">
                            <User className="h-4 w-4 text-muted-foreground shrink-0" />
                            <span className="font-medium">{submission.sender_name}</span>
                        </div>
                    )}
                    {submission.sender_email && (
                        <div className="flex items-center gap-2 text-sm">
                            <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                            <a href={`mailto:${submission.sender_email}`} className="text-primary hover:underline">
                                {submission.sender_email}
                            </a>
                        </div>
                    )}
                    {submission.phone && (
                        <div className="flex items-center gap-2 text-sm">
                            <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                            <span>{submission.phone}</span>
                        </div>
                    )}
                    <div className="flex items-center gap-2 pt-1">
                        <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{submission.submitted_at}</span>
                        <span className="text-muted-foreground">·</span>
                        <span className="text-xs text-muted-foreground">{submission.form_name}</span>
                    </div>
                </div>

                {/* Responses */}
                {submission.responses && submission.responses.length > 0 && (
                    <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                            Responses
                        </p>
                        {submission.responses.map((r, i) => (
                            <div key={i} className="space-y-1">
                                <p className="text-xs font-medium text-muted-foreground">{r.label}</p>
                                <p className="rounded-md border bg-muted/20 px-3 py-2 text-sm whitespace-pre-wrap">
                                    {r.value || <span className="text-muted-foreground italic">—</span>}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Status */}
                <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Status
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {(Object.keys(statusConfig) as Status[]).map(s => (
                            <Button
                                key={s}
                                size="sm"
                                variant={status === s ? 'default' : 'outline'}
                                className={cn('gap-1.5 text-xs', status === s && statusConfig[s].className)}
                                onClick={() => updateStatus(s)}
                            >
                                {statusConfig[s].icon}
                                {statusConfig[s].label}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end gap-2 pt-1">
                    <Button variant="outline" onClick={onClose}>Close</Button>
                    {submission.sender_email && (
                        <Button asChild>
                            <a href={`mailto:${submission.sender_email}`}>
                                <Mail className="mr-2 h-4 w-4" />
                                Reply by Email
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </DialogContent>
    );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SubmissionsIndex({
    submissions,
    forms,
}: {
    submissions: Submission[];
    forms:       FormOption[];
}) {
    const [viewTarget, setViewTarget]     = useState<Submission | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<Submission | null>(null);
    const [formFilter, setFormFilter]     = useState<string>('all');
    const [statusFilter, setStatusFilter] = useState<string>('all');

    // Read ?form_id from URL on mount
    useState(() => {
        const params = new URLSearchParams(window.location.search);
        const fid = params.get('form_id');
        if (fid) setFormFilter(fid);
    });

    const filtered = useMemo(() => submissions.filter(s => {
        if (formFilter  !== 'all' && String(s.form_id) !== formFilter)  return false;
        if (statusFilter !== 'all' && s.status !== statusFilter) return false;
        return true;
    }), [submissions, formFilter, statusFilter]);

    const newCount = submissions.filter(s => s.status === 'new').length;

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/submissions/${deleteTarget.id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    const columns: ColumnDef<Submission>[] = [
        {
            key: 'sender_name',
            header: 'Sender',
            sortable: true,
            cell: (row) => (
                <div>
                    <p className="font-medium">{row.sender_name ?? '—'}</p>
                    {row.sender_email && (
                        <p className="text-xs text-muted-foreground">{row.sender_email}</p>
                    )}
                </div>
            ),
        },
        {
            key: 'form_name',
            header: 'Form',
            sortable: true,
            cell: (row) => (
                <div>
                    <p className="text-sm">{row.form_name ?? '—'}</p>
                    {row.form_type && (
                        <p className="text-xs text-muted-foreground capitalize">
                            {row.form_type.replace(/_/g, ' ')}
                        </p>
                    )}
                </div>
            ),
        },
        {
            key: 'status',
            header: 'Status',
            sortable: true,
            cell: (row) => {
                const cfg = statusConfig[row.status];
                return (
                    <Badge
                        variant={cfg.variant}
                        className={cn('gap-1 text-xs', cfg.className)}
                    >
                        {cfg.icon}{cfg.label}
                    </Badge>
                );
            },
        },
        {
            key: 'phone',
            header: 'Phone',
            cell: (row) => (
                <span className="text-sm text-muted-foreground">{row.phone ?? '—'}</span>
            ),
        },
        {
            key: 'submitted_at',
            header: 'Submitted',
            sortable: true,
            cell: (row) => (
                <span className="text-sm text-muted-foreground">
                    {row.submitted_at ?? '—'}
                </span>
            ),
        },
        {
            key: 'actions',
            header: '',
            className: 'w-24 text-right',
            cell: (row) => (
                <div className="flex justify-end gap-1">
                    <Button
                        variant="ghost" size="sm"
                        className="h-8 text-xs"
                        onClick={() => setViewTarget(row)}
                    >
                        View
                    </Button>
                    <Button
                        variant="ghost" size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                        onClick={() => setDeleteTarget(row)}
                    >
                        <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Submissions" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Submissions</h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            {submissions.length} total
                            {newCount > 0 && (
                                <> · <span className="font-medium text-blue-600">{newCount} new</span></>
                            )}
                        </p>
                    </div>
                    <Button asChild size="sm" variant="outline" className="gap-1.5">
                        <a href="/forms">
                            <ClipboardList className="h-3.5 w-3.5" />
                            Manage Forms
                        </a>
                    </Button>
                </div>

                {/* Filters */}
                <div className="mb-4 flex flex-wrap gap-3">
                    <Select value={formFilter} onValueChange={setFormFilter}>
                        <SelectTrigger className="w-44">
                            <SelectValue placeholder="All forms" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Forms</SelectItem>
                            {forms.map(f => (
                                <SelectItem key={f.id} value={String(f.id)}>{f.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="w-40">
                            <SelectValue placeholder="All statuses" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Statuses</SelectItem>
                            {(Object.keys(statusConfig) as Status[]).map(s => (
                                <SelectItem key={s} value={s}>{statusConfig[s].label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <DataTable<Submission>
                    data={filtered}
                    columns={columns}
                    searchPlaceholder="Search by name, email…"
                    searchKeys={['sender_name', 'sender_email', 'phone', 'form_name']}
                    emptyMessage="No submissions found."
                />
            </div>

            {/* Detail dialog */}
            <Dialog open={!!viewTarget} onOpenChange={() => setViewTarget(null)}>
                {viewTarget && (
                    <SubmissionDetail
                        submission={viewTarget}
                        onClose={() => setViewTarget(null)}
                    />
                )}
            </Dialog>

            {/* Delete confirm */}
            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete submission?</AlertDialogTitle>
                        <AlertDialogDescription>
                            The submission from <strong>{deleteTarget?.sender_name ?? deleteTarget?.sender_email ?? 'this sender'}</strong> will
                            be permanently deleted along with all their responses.
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
