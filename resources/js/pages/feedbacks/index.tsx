import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem,
    DropdownMenuSeparator, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { DataTable, type ColumnDef } from '@/components/ui/data-table';
import type { BreadcrumbItem } from '@/types';
import {
    AlertTriangle, HelpCircle, Lightbulb, MessageSquare,
    MoreHorizontal, Pencil, Plus, Star, ThumbsUp, Trash2,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Feedback = {
    id:         number;
    name:       string;
    email:      string;
    category:   'general' | 'compliment' | 'suggestion' | 'complaint' | 'other';
    rating:     number;
    message:    string;
    status:     'pending' | 'reviewed' | 'resolved';
    created_at: string;
};

const CATEGORY_META = {
    general:    { label: 'General',    icon: MessageSquare, color: 'text-blue-500'  },
    compliment: { label: 'Compliment', icon: ThumbsUp,      color: 'text-lime-600'  },
    suggestion: { label: 'Suggestion', icon: Lightbulb,     color: 'text-amber-500' },
    complaint:  { label: 'Complaint',  icon: AlertTriangle, color: 'text-red-500'   },
    other:      { label: 'Other',      icon: HelpCircle,    color: 'text-gray-400'  },
} as const;

const STATUS_META = {
    pending:  { label: 'Pending',  className: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
    reviewed: { label: 'Reviewed', className: 'bg-blue-50 text-blue-700 border-blue-200'       },
    resolved: { label: 'Resolved', className: 'bg-green-50 text-green-700 border-green-200'    },
};

function StarDisplay({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map(s => (
                <Star key={s} size={13}
                    className={s <= rating ? 'fill-amber-400 text-amber-400' : 'fill-muted text-muted-foreground/20'}
                />
            ))}
            <span className="ml-1 text-xs font-medium text-muted-foreground">{rating}/5</span>
        </div>
    );
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Feedback',  href: '/feedback'  }, // ← singular
];

export default function FeedbacksIndex({ feedbacks }: { feedbacks: Feedback[] }) {
    const [deleteTarget, setDeleteTarget] = useState<Feedback | null>(null);

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/feedback/${deleteTarget.id}`, { // ← singular
            onFinish: () => setDeleteTarget(null),
        });
    };

    const columns: ColumnDef<Feedback>[] = [
        {
            key: 'name',
            header: 'Submitter',
            sortable: true,
            cell: (row) => (
                <div className="min-w-0">
                    <p className="truncate font-medium">{row.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{row.email}</p>
                </div>
            ),
        },
        {
            key: 'category',
            header: 'Type',
            sortable: true,
            cell: (row) => {
                const meta = CATEGORY_META[row.category];
                const Icon = meta.icon;
                return (
                    <div className="flex items-center gap-1.5">
                        <Icon size={14} className={meta.color} />
                        <span className="text-sm">{meta.label}</span>
                    </div>
                );
            },
        },
        {
            key: 'rating',
            header: 'Rating',
            sortable: true,
            cell: (row) => <StarDisplay rating={row.rating} />,
        },
        {
            key: 'message',
            header: 'Message',
            cell: (row) => (
                <p className="max-w-xs truncate text-sm text-muted-foreground">{row.message}</p>
            ),
        },
        {
            key: 'status',
            header: 'Status',
            sortable: true,
            cell: (row) => (
                <Badge variant="secondary"
                    className={cn('text-xs font-medium', STATUS_META[row.status].className)}>
                    {STATUS_META[row.status].label}
                </Badge>
            ),
        },
        {
            key: 'created_at',
            header: 'Submitted',
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
                    <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuItem asChild>
                            <Link href={`/feedback/${row.id}/edit`} // ← singular
                                className="flex items-center gap-2">
                                <Pencil className="h-3.5 w-3.5" />
                                Edit / Review
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="flex cursor-pointer items-center gap-2 text-destructive focus:text-destructive"
                            onClick={() => setDeleteTarget(row)}>
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
            <Head title="Feedback" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Feedback</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Review and manage feedback submitted by users.
                    </p>
                </div>

                <DataTable<Feedback>
                    data={feedbacks}
                    columns={columns}
                    searchPlaceholder="Search feedback…"
                    searchKeys={['name', 'email', 'message', 'category', 'status']}
                    emptyMessage="No feedback submitted yet."
                    action={
                        <Button asChild size="sm" className="gap-1.5">
                            <Link href="/feedback/create"> {/* ← singular */}
                                <Plus className="h-4 w-4" />
                                Add Feedback
                            </Link>
                        </Button>
                    }
                />
            </div>

            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete feedback?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Feedback from <strong>{deleteTarget?.name}</strong> will be
                            permanently deleted. This cannot be undone.
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
