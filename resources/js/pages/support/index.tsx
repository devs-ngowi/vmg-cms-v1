import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select, SelectContent, SelectItem,
    SelectTrigger, SelectValue,
} from '@/components/ui/select';
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription,
    AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
    DropdownMenu, DropdownMenuContent,
    DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DataTable, type ColumnDef } from '@/components/ui/data-table';
import type { BreadcrumbItem } from '@/types';
import {
    AlertTriangle, CheckCircle2, Clock, Eye,
    MessageSquare, MoreHorizontal, Trash2,
    Inbox, Loader,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────

type Ticket = {
    id:             number;
    ticket_number:  string;
    name:           string;
    email:          string;
    channel:        string;
    category:       string;
    priority:       'low' | 'medium' | 'high' | 'urgent';
    subject:        string;
    status:         'open' | 'in_progress' | 'waiting_reply' | 'resolved' | 'closed';
    replies_count:  number;
    assignee:       string | null;
    is_overdue:     boolean;
    created_at:     string;
    resolved_at:    string | null;
};

type Stats = {
    total: number; open: number; in_progress: number;
    resolved: number; urgent: number;
};

// ── Meta maps ─────────────────────────────────────────────────────────────────

const PRIORITY_META = {
    low:    { label: 'Low',    className: 'bg-gray-100 text-gray-600'         },
    medium: { label: 'Medium', className: 'bg-blue-100 text-blue-700'         },
    high:   { label: 'High',   className: 'bg-orange-100 text-orange-700'     },
    urgent: { label: 'Urgent', className: 'bg-red-100 text-red-700 font-bold' },
};

const STATUS_META = {
    open:          { label: 'Open',          className: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
    in_progress:   { label: 'In Progress',   className: 'bg-blue-50 text-blue-700 border-blue-200'       },
    waiting_reply: { label: 'Waiting Reply', className: 'bg-purple-50 text-purple-700 border-purple-200' },
    resolved:      { label: 'Resolved',      className: 'bg-green-50 text-green-700 border-green-200'    },
    closed:        { label: 'Closed',        className: 'bg-gray-100 text-gray-500 border-gray-200'      },
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard',      href: '/dashboard' },
    { title: 'Help & Support', href: '/support'   },
];

// ── Stat Card ─────────────────────────────────────────────────────────────────

function StatCard({ icon: Icon, label, value, color }: {
    icon: React.ElementType; label: string; value: number; color: string;
}) {
    return (
        <div className="rounded-xl border bg-card p-5 shadow-sm flex items-center gap-4">
            <div className={cn('flex h-11 w-11 items-center justify-center rounded-xl', color)}>
                <Icon className="h-5 w-5" />
            </div>
            <div>
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
            </div>
        </div>
    );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SupportIndex({
    tickets = { data: [], total: 0 },
    stats   = { total: 0, open: 0, in_progress: 0, resolved: 0, urgent: 0 },
    filters = {},
}: {
    tickets?: { data: Ticket[]; total: number };
    stats?:   Stats;
    filters?: Record<string, string>;
}) {
    // ✅ FIX: deleteTarget was missing from state — caused crash on delete click
    const [deleteTarget, setDeleteTarget] = useState<Ticket | null>(null);
    const [search, setSearch]             = useState(filters.search ?? '');

    const applyFilter = (key: string, value: string) => {
        router.get('/support', { ...filters, [key]: value === 'all' ? '' : value },
            { preserveScroll: true, replace: true });
    };

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/support/${deleteTarget.id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    const columns: ColumnDef<Ticket>[] = [
        {
            key: 'ticket_number',
            header: 'Ticket',
            sortable: true,
            cell: (row) => (
                <div>
                    <p className="font-mono text-xs font-bold text-primary">{row.ticket_number}</p>
                    {row.is_overdue && (
                        <span className="text-[10px] font-bold text-red-500 flex items-center gap-0.5 mt-0.5">
                            <AlertTriangle size={10} /> Overdue
                        </span>
                    )}
                </div>
            ),
        },
        {
            key: 'name',
            header: 'Submitter',
            sortable: true,
            cell: (row) => (
                <div>
                    <p className="font-medium text-sm">{row.name}</p>
                    <p className="text-xs text-muted-foreground">{row.email}</p>
                </div>
            ),
        },
        {
            key: 'subject',
            header: 'Subject',
            cell: (row) => (
                <p className="max-w-xs truncate text-sm">{row.subject}</p>
            ),
        },
        {
            key: 'priority',
            header: 'Priority',
            sortable: true,
            cell: (row) => (
                <Badge variant="secondary"
                    className={cn('text-xs', PRIORITY_META[row.priority].className)}>
                    {PRIORITY_META[row.priority].label}
                </Badge>
            ),
        },
        {
            key: 'status',
            header: 'Status',
            sortable: true,
            cell: (row) => (
                <Badge variant="secondary"
                    className={cn('text-xs', STATUS_META[row.status].className)}>
                    {STATUS_META[row.status].label}
                </Badge>
            ),
        },
        {
            key: 'replies_count',
            header: 'Replies',
            sortable: true,
            cell: (row) => (
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MessageSquare size={13} /> {row.replies_count}
                </span>
            ),
        },
        {
            key: 'created_at',
            header: 'Received',
            sortable: true,
            cell: (row) => (
                <span className="text-xs text-muted-foreground">{row.created_at}</span>
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
                            <Link href={`/support/${row.id}`}
                                className="flex items-center gap-2">
                                <Eye className="h-3.5 w-3.5" /> View & Reply
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="flex cursor-pointer items-center gap-2 text-destructive focus:text-destructive"
                            onClick={() => setDeleteTarget(row)}>
                            <Trash2 className="h-3.5 w-3.5" /> Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Help & Support" />

            <div className="px-4 py-6 sm:px-6 lg:px-8 space-y-6">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">Help & Support</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Manage and respond to support tickets from users.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
                    <StatCard icon={Inbox}        label="Total Tickets" value={stats.total}       color="bg-primary/10 text-primary"    />
                    <StatCard icon={Clock}         label="Open"          value={stats.open}        color="bg-yellow-100 text-yellow-600" />
                    <StatCard icon={Loader}        label="In Progress"   value={stats.in_progress} color="bg-blue-100 text-blue-600"     />
                    <StatCard icon={CheckCircle2}  label="Resolved"      value={stats.resolved}    color="bg-green-100 text-green-600"   />
                    <StatCard icon={AlertTriangle} label="Urgent"        value={stats.urgent}      color="bg-red-100 text-red-600"       />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-3">
                    <Input
                        placeholder="Search tickets…"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && applyFilter('search', search)}
                        className="max-w-xs"
                    />
                    <Select value={filters.status ?? 'all'}
                        onValueChange={v => applyFilter('status', v)}>
                        <SelectTrigger className="w-40"><SelectValue placeholder="All Statuses" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Statuses</SelectItem>
                            <SelectItem value="open">Open</SelectItem>
                            <SelectItem value="in_progress">In Progress</SelectItem>
                            <SelectItem value="waiting_reply">Waiting Reply</SelectItem>
                            <SelectItem value="resolved">Resolved</SelectItem>
                            <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select value={filters.priority ?? 'all'}
                        onValueChange={v => applyFilter('priority', v)}>
                        <SelectTrigger className="w-36"><SelectValue placeholder="All Priorities" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Priorities</SelectItem>
                            <SelectItem value="urgent">Urgent</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select value={filters.category ?? 'all'}
                        onValueChange={v => applyFilter('category', v)}>
                        <SelectTrigger className="w-40"><SelectValue placeholder="All Categories" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            <SelectItem value="account">Account</SelectItem>
                            <SelectItem value="jobs">Jobs</SelectItem>
                            <SelectItem value="employers">Employers</SelectItem>
                            <SelectItem value="billing">Billing</SelectItem>
                            <SelectItem value="cv">CV Builder</SelectItem>
                            <SelectItem value="technical">Technical</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <DataTable<Ticket>
                    data={tickets.data}
                    columns={columns}
                    searchPlaceholder="Search tickets…"
                    searchKeys={['ticket_number', 'name', 'email', 'subject']}
                    emptyMessage="No support tickets found."
                />
            </div>

            {/* ✅ FIX: deleteTarget state is now properly declared above */}
            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete ticket?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Ticket <strong>{deleteTarget?.ticket_number}</strong> from{' '}
                            <strong>{deleteTarget?.name}</strong> will be permanently deleted.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmDelete}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </AppLayout>
    );
}
