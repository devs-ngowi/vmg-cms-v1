import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { BreadcrumbItem } from '@/types';
import { Archive, ArrowLeft, BookOpen, Eye, Pencil } from 'lucide-react';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────

type Step = 'draft' | 'review' | 'published' | 'archived';

type HistoryEntry = {
    id:          number;
    step:        Step;
    step_label:  string;
    assignee:    string | null;
    assigner:    string | null;
    notes:       string | null;
    created_at:  string;
};

const stepConfig: Record<Step, { badge: string; icon: React.ReactNode; dot: string }> = {
    draft:     { badge: 'bg-slate-100 text-slate-700 border-slate-200',     icon: <Pencil   className="h-3 w-3" />, dot: 'bg-slate-400'   },
    review:    { badge: 'bg-amber-50 text-amber-700 border-amber-200',       icon: <Eye      className="h-3 w-3" />, dot: 'bg-amber-400'   },
    published: { badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: <BookOpen className="h-3 w-3" />, dot: 'bg-emerald-500' },
    archived:  { badge: 'bg-rose-50 text-rose-600 border-rose-200',          icon: <Archive  className="h-3 w-3" />, dot: 'bg-rose-400'    },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WorkflowHistory({
    history,
    contentTitle,
    contentType,
}: {
    history:      HistoryEntry[];
    contentTitle: string;
    contentType:  string;
}) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Workflow',  href: '/workflow' },
        { title: contentTitle, href: '#' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Workflow — ${contentTitle}`} />
            <div className="px-4 py-6 sm:px-6 lg:px-8">

                <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                            {contentType}
                        </p>
                        <h1 className="mt-0.5 text-2xl font-semibold tracking-tight">{contentTitle}</h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            {history.length} workflow event{history.length !== 1 ? 's' : ''}
                        </p>
                    </div>
                    <Button asChild variant="outline" size="sm" className="gap-1.5">
                        <Link href="/workflow">
                            <ArrowLeft className="h-3.5 w-3.5" />
                            Back to Board
                        </Link>
                    </Button>
                </div>

                {/* Timeline */}
                <div className="relative max-w-2xl">
                    {/* Vertical line */}
                    <div className="absolute left-5 top-5 bottom-5 w-px bg-border" />

                    <div className="space-y-4">
                        {history.map((entry, i) => {
                            const cfg = stepConfig[entry.step] ?? stepConfig.draft;
                            return (
                                <div key={entry.id} className="relative flex gap-4">
                                    {/* Dot */}
                                    <div className={cn(
                                        'relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-background shadow-sm text-white',
                                        cfg.dot,
                                    )}>
                                        {cfg.icon}
                                    </div>

                                    {/* Card */}
                                    <div className={cn(
                                        'flex-1 rounded-xl border bg-card px-4 py-3 shadow-sm',
                                        i === 0 && 'ring-1 ring-primary/20',
                                    )}>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <Badge className={cn('gap-1 border text-xs', cfg.badge)}>
                                                {cfg.icon} {entry.step_label}
                                            </Badge>
                                            {i === 0 && (
                                                <Badge variant="outline" className="text-[10px]">
                                                    Current
                                                </Badge>
                                            )}
                                            <span className="ml-auto text-xs text-muted-foreground">
                                                {entry.created_at}
                                            </span>
                                        </div>

                                        <div className="mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground">
                                            {entry.assigner && (
                                                <span>Moved by <strong className="text-foreground">{entry.assigner}</strong></span>
                                            )}
                                            {entry.assignee && (
                                                <span>Assigned to <strong className="text-foreground">{entry.assignee}</strong></span>
                                            )}
                                        </div>

                                        {entry.notes && (
                                            <p className="mt-2 rounded-md bg-muted/30 px-2.5 py-2 text-xs italic text-muted-foreground">
                                                {entry.notes}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
