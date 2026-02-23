import AppLayout from '@/layouts/app-layout';
import { Head, router } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import {
    Dialog, DialogContent, DialogHeader, DialogTitle,
} from '@/components/ui/dialog';
import type { BreadcrumbItem } from '@/types';
import {
    Archive, ArrowRight, BookOpen, ChevronLeft, ChevronRight,
    Clock, ExternalLink, Eye, Pencil, RotateCcw, User,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────

type Step = 'draft' | 'review' | 'published' | 'archived';

type WorkflowItem = {
    workflow_id:  number;
    content_id:   number;
    content_type: string;
    type_label:   string;
    title:        string;
    step:         Step;
    step_label:   string;
    assignee:     string | null;
    assigner:     string | null;
    notes:        string | null;
    edit_url:     string | null;
    updated_at:   string;
};

type StepDef = { key: Step; label: string };

type UserOption = { id: number; name: string };

type Stats = {
    total:     number;
    draft:     number;
    review:    number;
    published: number;
    archived:  number;
};

// ── Step config ───────────────────────────────────────────────────────────────

const stepConfig: Record<Step, {
    color:   string;
    badge:   string;
    border:  string;
    header:  string;
    icon:    React.ReactNode;
}> = {
    draft:     {
        color:  'text-slate-600',
        badge:  'bg-slate-100 text-slate-700 border-slate-200',
        border: 'border-t-slate-400',
        header: 'bg-slate-50',
        icon:   <Pencil className="h-3.5 w-3.5" />,
    },
    review:    {
        color:  'text-amber-600',
        badge:  'bg-amber-50 text-amber-700 border-amber-200',
        border: 'border-t-amber-400',
        header: 'bg-amber-50/60',
        icon:   <Eye className="h-3.5 w-3.5" />,
    },
    published: {
        color:  'text-emerald-600',
        badge:  'bg-emerald-50 text-emerald-700 border-emerald-200',
        border: 'border-t-emerald-500',
        header: 'bg-emerald-50/60',
        icon:   <BookOpen className="h-3.5 w-3.5" />,
    },
    archived:  {
        color:  'text-rose-500',
        badge:  'bg-rose-50 text-rose-600 border-rose-200',
        border: 'border-t-rose-400',
        header: 'bg-rose-50/40',
        icon:   <Archive className="h-3.5 w-3.5" />,
    },
};

const STEPS: Step[] = ['draft', 'review', 'published', 'archived'];

// ── Move dialog ───────────────────────────────────────────────────────────────

function MoveDialog({
    item,
    steps,
    users,
    onClose,
}: {
    item:   WorkflowItem;
    steps:  StepDef[];
    users:  UserOption[];
    onClose: () => void;
}) {
    const currentIndex = STEPS.indexOf(item.step);
    const [targetStep, setTargetStep] = useState<Step>(
        STEPS[Math.min(currentIndex + 1, STEPS.length - 1)],
    );
    const [assignedTo, setAssignedTo] = useState<string>('');
    const [notes, setNotes]           = useState('');
    const [saving, setSaving]         = useState(false);

    const submit = () => {
        setSaving(true);
        router.patch(
            `/workflow/${item.workflow_id}/move`,
            { step: targetStep, assigned_to: assignedTo || null, notes: notes || null },
            {
                onSuccess: () => { setSaving(false); onClose(); },
                onError:   () => setSaving(false),
            },
        );
    };

    return (
        <DialogContent className="sm:max-w-md">
            <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-base">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Move: <span className="truncate font-normal text-muted-foreground">{item.title}</span>
                </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
                {/* Current → new step visual */}
                <div className="flex items-center gap-3 rounded-lg border bg-muted/20 px-4 py-3">
                    <Badge className={cn('gap-1 border text-xs', stepConfig[item.step].badge)}>
                        {stepConfig[item.step].icon}
                        {item.step_label}
                    </Badge>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <Badge className={cn('gap-1 border text-xs', stepConfig[targetStep].badge)}>
                        {stepConfig[targetStep].icon}
                        {stepConfig[targetStep].label ?? targetStep}
                    </Badge>
                </div>

                {/* Target step */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium">Move to step</label>
                    <Select value={targetStep} onValueChange={v => setTargetStep(v as Step)}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {steps
                                .filter(s => s.key !== item.step)
                                .map(s => (
                                    <SelectItem key={s.key} value={s.key}>
                                        <span className="flex items-center gap-2">
                                            {stepConfig[s.key as Step].icon}
                                            {s.label}
                                        </span>
                                    </SelectItem>
                                ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Assign to */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium">
                        Assign to <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <Select value={assignedTo} onValueChange={setAssignedTo}>
                        <SelectTrigger>
                            <SelectValue placeholder="Keep current assignee" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="none">Keep current assignee</SelectItem>
                            {users.map(u => (
                                <SelectItem key={u.id} value={String(u.id)}>{u.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Notes */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium">
                        Notes <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <Textarea
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                        placeholder="Add context for this transition…"
                        rows={3}
                    />
                </div>

                <div className="flex justify-end gap-2 pt-1">
                    <Button variant="outline" onClick={onClose}>Cancel</Button>
                    <Button onClick={submit} disabled={saving} className="gap-2">
                        <ArrowRight className="h-4 w-4" />
                        {saving ? 'Moving…' : 'Move'}
                    </Button>
                </div>
            </div>
        </DialogContent>
    );
}

// ── Kanban card ───────────────────────────────────────────────────────────────

function WorkflowCard({
    item,
    onMove,
}: {
    item:   WorkflowItem;
    onMove: (item: WorkflowItem) => void;
}) {
    const currentIndex = STEPS.indexOf(item.step);
    const canGoBack    = currentIndex > 0;
    const canGoForward = currentIndex < STEPS.length - 1;

    const quickMove = (dir: 'back' | 'forward') => {
        const newStep = dir === 'forward'
            ? STEPS[currentIndex + 1]
            : STEPS[currentIndex - 1];

        router.patch(`/workflow/${item.workflow_id}/move`, {
            step: newStep, assigned_to: null, notes: null,
        });
    };

    return (
        <div className="group rounded-xl border bg-card p-3.5 shadow-sm hover:shadow-md transition-shadow">
            {/* Type + title */}
            <div className="mb-3 flex items-start gap-2">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <BookOpen className="h-3.5 w-3.5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium leading-tight">{item.title}</p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">{item.type_label}</p>
                </div>
            </div>

            {/* Meta row */}
            <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                {item.assignee && (
                    <span className="flex items-center gap-1">
                        <User className="h-3 w-3" /> {item.assignee}
                    </span>
                )}
                <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {item.updated_at}
                </span>
            </div>

            {/* Notes */}
            {item.notes && (
                <p className="mb-3 rounded-md bg-muted/30 px-2.5 py-2 text-xs text-muted-foreground italic line-clamp-2">
                    {item.notes}
                </p>
            )}

            {/* Actions */}
            <div className="flex items-center gap-1.5">
                {/* Quick prev */}
                <button
                    disabled={!canGoBack}
                    onClick={() => quickMove('back')}
                    className={cn(
                        'flex h-7 w-7 items-center justify-center rounded-md border text-muted-foreground transition-colors',
                        canGoBack
                            ? 'hover:border-primary hover:bg-primary/5 hover:text-primary'
                            : 'opacity-30 cursor-not-allowed',
                    )}
                    title="Previous step"
                >
                    <ChevronLeft className="h-3.5 w-3.5" />
                </button>

                {/* Move dialog trigger */}
                <Button
                    size="sm" variant="outline"
                    className="h-7 flex-1 gap-1.5 text-xs"
                    onClick={() => onMove(item)}
                >
                    <ArrowRight className="h-3 w-3" />
                    Move
                </Button>

                {/* Quick next */}
                <button
                    disabled={!canGoForward}
                    onClick={() => quickMove('forward')}
                    className={cn(
                        'flex h-7 w-7 items-center justify-center rounded-md border text-muted-foreground transition-colors',
                        canGoForward
                            ? 'hover:border-primary hover:bg-primary/5 hover:text-primary'
                            : 'opacity-30 cursor-not-allowed',
                    )}
                    title="Next step"
                >
                    <ChevronRight className="h-3.5 w-3.5" />
                </button>

                {/* Edit link */}
                {item.edit_url && (
                    <a
                        href={item.edit_url}
                        className="flex h-7 w-7 items-center justify-center rounded-md border text-muted-foreground transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary"
                        title="Edit content"
                    >
                        <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                )}
            </div>
        </div>
    );
}

// ── Column ────────────────────────────────────────────────────────────────────

function Column({
    step,
    items,
    onMove,
}: {
    step:  StepDef;
    items: WorkflowItem[];
    onMove: (item: WorkflowItem) => void;
}) {
    const cfg = stepConfig[step.key as Step];

    return (
        <div className={cn('flex flex-col rounded-xl border border-t-4 bg-background shadow-sm', cfg.border)}>
            {/* Column header */}
            <div className={cn('flex items-center justify-between rounded-t-lg px-4 py-3', cfg.header)}>
                <div className="flex items-center gap-2">
                    <span className={cfg.color}>{cfg.icon}</span>
                    <span className="text-sm font-semibold">{step.label}</span>
                </div>
                <Badge variant="secondary" className="tabular-nums text-xs">
                    {items.length}
                </Badge>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-3 p-3 min-h-[200px]">
                {items.length === 0 ? (
                    <div className="flex flex-1 items-center justify-center py-8 text-center">
                        <p className="text-xs text-muted-foreground/60">No items</p>
                    </div>
                ) : (
                    items.map(item => (
                        <WorkflowCard key={item.workflow_id} item={item} onMove={onMove} />
                    ))
                )}
            </div>
        </div>
    );
}

// ── Page ──────────────────────────────────────────────────────────────────────

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Workflow',  href: '/workflow' },
];

export default function WorkflowIndex({
    grouped,
    stats,
    steps,
    users,
}: {
    grouped: Record<Step, WorkflowItem[]>;
    stats:   Stats;
    steps:   StepDef[];
    users:   UserOption[];
}) {
    const [moveTarget, setMoveTarget] = useState<WorkflowItem | null>(null);

    const statItems = [
        { label: 'Total',     value: stats.total,     step: null },
        { label: 'Draft',     value: stats.draft,     step: 'draft' },
        { label: 'In Review', value: stats.review,    step: 'review' },
        { label: 'Published', value: stats.published, step: 'published' },
        { label: 'Archived',  value: stats.archived,  step: 'archived' },
    ] as const;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Workflow" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Workflow</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Track content through your publishing pipeline.
                    </p>
                </div>

                {/* Stats strip */}
                <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
                    {statItems.map(({ label, value, step }) => (
                        <div
                            key={label}
                            className={cn(
                                'rounded-xl border bg-card px-4 py-3 shadow-sm',
                                step && 'border-t-2',
                                step && stepConfig[step as Step].border,
                            )}
                        >
                            <p className="text-xs text-muted-foreground">{label}</p>
                            <p className="mt-0.5 text-2xl font-bold tabular-nums">{value}</p>
                        </div>
                    ))}
                </div>

                {/* Kanban board */}
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {steps.map(step => (
                        <Column
                            key={step.key}
                            step={step}
                            items={grouped[step.key as Step] ?? []}
                            onMove={setMoveTarget}
                        />
                    ))}
                </div>
            </div>

            {/* Move dialog */}
            <Dialog open={!!moveTarget} onOpenChange={() => setMoveTarget(null)}>
                {moveTarget && (
                    <MoveDialog
                        item={moveTarget}
                        steps={steps}
                        users={users}
                        onClose={() => setMoveTarget(null)}
                    />
                )}
            </Dialog>
        </AppLayout>
    );
}
