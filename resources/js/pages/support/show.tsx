import AppLayout from '@/layouts/app-layout';
import { Head, router, useForm } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
    Select, SelectContent, SelectItem,
    SelectTrigger, SelectValue,
} from '@/components/ui/select';
import type { BreadcrumbItem } from '@/types';
import {
    AlertTriangle, CheckCircle2, Clock, Loader2,
    Lock, MessageSquare, Save, Send, User,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Reply = {
    id:           number;
    user_id:      number | null;
    author_name:  string;
    author_email: string;
    message:      string;
    is_internal:  boolean;
    created_at:   string;
};

type Ticket = {
    id:                  number;
    ticket_number:       string;
    name:                string;
    email:               string;
    phone:               string | null;
    channel:             string;
    category:            string;
    priority:            string;
    subject:             string;
    message:             string;
    status:              string;
    admin_notes:         string | null;
    assigned_to:         number | null;
    is_overdue:          boolean;
    first_responded_at:  string | null;
    resolved_at:         string | null;
    created_at:          string;
    replies:             Reply[];
    assignee:            { id: number; full_name: string } | null;
};

const PRIORITY_META: Record<string, string> = {
    low:    'bg-gray-100 text-gray-600',
    medium: 'bg-blue-100 text-blue-700',
    high:   'bg-orange-100 text-orange-700',
    urgent: 'bg-red-100 text-red-700 font-bold',
};

const STATUS_META: Record<string, { label: string; className: string }> = {
    open:          { label: 'Open',          className: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
    in_progress:   { label: 'In Progress',   className: 'bg-blue-50 text-blue-700 border-blue-200'      },
    waiting_reply: { label: 'Waiting Reply', className: 'bg-purple-50 text-purple-700 border-purple-200'},
    resolved:      { label: 'Resolved',      className: 'bg-green-50 text-green-700 border-green-200'   },
    closed:        { label: 'Closed',        className: 'bg-gray-100 text-gray-500 border-gray-200'     },
};

export default function SupportShow({
    ticket, agents,
}: {
    ticket: Ticket;
    agents: { id: number; full_name: string }[];
}) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard',      href: '/dashboard' },
        { title: 'Help & Support', href: '/support'   },
        { title: ticket.ticket_number, href: '#'      },
    ];

    const [isInternal, setIsInternal] = useState(false);

    const replyForm = useForm({ message: '', is_internal: false });
    const metaForm  = useForm({
        status:      ticket.status,
        priority:    ticket.priority,
        assigned_to: ticket.assigned_to?.toString() ?? '',
        admin_notes: ticket.admin_notes ?? '',
    });

    const submitReply = (e: React.FormEvent) => {
        e.preventDefault();
        replyForm.setData('is_internal', isInternal);
        replyForm.post(`/support/${ticket.id}/reply`, {
            preserveScroll: true,
            onSuccess: () => replyForm.reset(),
        });
    };

    const saveMeta = (e: React.FormEvent) => {
        e.preventDefault();
        metaForm.patch(`/support/${ticket.id}`, { preserveScroll: true });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`${ticket.ticket_number} — Support`} />

            <div className="px-4 py-6 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-3 flex-wrap">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                {ticket.subject}
                            </h1>
                            <span className="font-mono text-sm text-primary font-bold">
                                {ticket.ticket_number}
                            </span>
                        </div>
                        <div className="mt-2 flex flex-wrap items-center gap-2">
                            <Badge variant="secondary"
                                className={cn('text-xs', STATUS_META[ticket.status]?.className)}>
                                {STATUS_META[ticket.status]?.label}
                            </Badge>
                            <Badge variant="secondary"
                                className={cn('text-xs', PRIORITY_META[ticket.priority])}>
                                {ticket.priority}
                            </Badge>
                            {ticket.is_overdue && (
                                <span className="flex items-center gap-1 text-xs font-bold text-red-500">
                                    <AlertTriangle size={12} /> Overdue
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">

                    {/* ── Left: Conversation ────────────────────────────── */}
                    <div className="space-y-4 lg:col-span-2">

                        {/* Original message */}
                        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
                            <div className="bg-muted/40 px-5 py-3 border-b flex items-center gap-2">
                                <User size={14} className="text-muted-foreground" />
                                <span className="text-sm font-semibold">{ticket.name}</span>
                                <span className="text-xs text-muted-foreground">({ticket.email})</span>
                                <span className="ml-auto text-xs text-muted-foreground">{ticket.created_at}</span>
                            </div>
                            <div className="px-5 py-4">
                                <p className="text-sm leading-relaxed whitespace-pre-wrap">{ticket.message}</p>
                            </div>
                        </div>

                        {/* Replies */}
                        {ticket.replies.map(reply => (
                            <div key={reply.id}
                                className={cn(
                                    'rounded-xl border shadow-sm overflow-hidden',
                                    reply.is_internal
                                        ? 'border-amber-200 bg-amber-50'
                                        : reply.user_id
                                        ? 'border-primary/20 bg-primary/5'
                                        : 'bg-card',
                                )}>
                                <div className="px-5 py-3 border-b border-inherit flex items-center gap-2">
                                    {reply.is_internal
                                        ? <Lock size={13} className="text-amber-600" />
                                        : <MessageSquare size={13} className="text-muted-foreground" />
                                    }
                                    <span className="text-sm font-semibold">{reply.author_name}</span>
                                    {reply.is_internal && (
                                        <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-200 text-amber-800 rounded-full">
                                            Internal Note
                                        </span>
                                    )}
                                    {reply.user_id && !reply.is_internal && (
                                        <span className="text-[10px] font-bold px-2 py-0.5 bg-primary/15 text-primary rounded-full">
                                            Staff
                                        </span>
                                    )}
                                    <span className="ml-auto text-xs text-muted-foreground">{reply.created_at}</span>
                                </div>
                                <div className="px-5 py-4">
                                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{reply.message}</p>
                                </div>
                            </div>
                        ))}

                        {/* Reply box */}
                        <form onSubmit={submitReply}
                            className="rounded-xl border bg-card shadow-sm overflow-hidden">
                            <div className="px-5 py-3 border-b flex items-center gap-3">
                                <span className="text-sm font-semibold">Add Reply</span>
                                <div className="ml-auto flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsInternal(false)}
                                        className={cn(
                                            'px-3 py-1 rounded-lg text-xs font-bold transition-colors',
                                            !isInternal ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80',
                                        )}>
                                        <Send size={11} className="inline mr-1" /> Reply to User
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsInternal(true)}
                                        className={cn(
                                            'px-3 py-1 rounded-lg text-xs font-bold transition-colors',
                                            isInternal ? 'bg-amber-500 text-white' : 'bg-muted text-muted-foreground hover:bg-muted/80',
                                        )}>
                                        <Lock size={11} className="inline mr-1" /> Internal Note
                                    </button>
                                </div>
                            </div>
                            <div className="p-5 space-y-3">
                                {isInternal && (
                                    <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 flex items-center gap-1.5">
                                        <Lock size={11} /> This note is only visible to staff members.
                                    </p>
                                )}
                                <Textarea
                                    value={replyForm.data.message}
                                    onChange={e => replyForm.setData('message', e.target.value)}
                                    placeholder={isInternal ? 'Add internal note…' : 'Type your reply to the user…'}
                                    rows={4}
                                />
                                <div className="flex justify-end">
                                    <Button type="submit" disabled={replyForm.processing}
                                        className={cn('gap-2', isInternal && 'bg-amber-500 hover:bg-amber-600')}>
                                        {replyForm.processing
                                            ? <Loader2 className="h-4 w-4 animate-spin" />
                                            : isInternal ? <Lock className="h-4 w-4" /> : <Send className="h-4 w-4" />
                                        }
                                        {isInternal ? 'Save Note' : 'Send Reply'}
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* ── Right: Meta panel ─────────────────────────────── */}
                    <div className="space-y-4">

                        {/* Submitter Info */}
                        <div className="rounded-xl border bg-card shadow-sm p-5 space-y-3">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                Submitter
                            </h3>
                            <div className="space-y-1.5">
                                <p className="text-sm font-semibold">{ticket.name}</p>
                                <p className="text-xs text-muted-foreground">{ticket.email}</p>
                                {ticket.phone && (
                                    <p className="text-xs text-muted-foreground">{ticket.phone}</p>
                                )}
                                <p className="text-xs text-muted-foreground capitalize">
                                    via {ticket.channel.replace('_', ' ')} · {ticket.category}
                                </p>
                            </div>
                            {ticket.first_responded_at && (
                                <div className="flex items-center gap-1.5 text-xs text-green-600">
                                    <CheckCircle2 size={12} />
                                    First responded {ticket.first_responded_at}
                                </div>
                            )}
                            {!ticket.first_responded_at && (
                                <div className="flex items-center gap-1.5 text-xs text-amber-600">
                                    <Clock size={12} />
                                    Not yet responded
                                </div>
                            )}
                        </div>

                        {/* Manage */}
                        <form onSubmit={saveMeta}
                            className="rounded-xl border bg-card shadow-sm p-5 space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                Manage Ticket
                            </h3>

                            <div className="space-y-1.5">
                                <Label className="text-xs">Status</Label>
                                <Select value={metaForm.data.status}
                                    onValueChange={v => metaForm.setData('status', v)}>
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="open">Open</SelectItem>
                                        <SelectItem value="in_progress">In Progress</SelectItem>
                                        <SelectItem value="waiting_reply">Waiting Reply</SelectItem>
                                        <SelectItem value="resolved">Resolved</SelectItem>
                                        <SelectItem value="closed">Closed</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-1.5">
                                <Label className="text-xs">Priority</Label>
                                <Select value={metaForm.data.priority}
                                    onValueChange={v => metaForm.setData('priority', v)}>
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="low">Low</SelectItem>
                                        <SelectItem value="medium">Medium</SelectItem>
                                        <SelectItem value="high">High</SelectItem>
                                        <SelectItem value="urgent">Urgent</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-1.5">
                                <Label className="text-xs">Assign To</Label>
                                <Select value={metaForm.data.assigned_to}
                                    onValueChange={v => metaForm.setData('assigned_to', v)}>
                                    <SelectTrigger><SelectValue placeholder="Unassigned" /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="">Unassigned</SelectItem>
                                        {agents.map(a => (
                                            <SelectItem key={a.id} value={a.id.toString()}>
                                                {a.full_name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-1.5">
                                <Label className="text-xs">Admin Notes</Label>
                                <Textarea
                                    value={metaForm.data.admin_notes}
                                    onChange={e => metaForm.setData('admin_notes', e.target.value)}
                                    placeholder="Internal notes…"
                                    rows={3}
                                />
                            </div>

                            <Button type="submit" disabled={metaForm.processing}
                                className="w-full gap-2">
                                {metaForm.processing
                                    ? <Loader2 className="h-4 w-4 animate-spin" />
                                    : <Save className="h-4 w-4" />
                                }
                                Save Changes
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
