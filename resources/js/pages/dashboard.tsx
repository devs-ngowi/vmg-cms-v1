import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import {
    AlertCircle, ArrowRight, BarChart2, BookOpen, CheckCircle2,
    Clock, FileText, FolderOpen, GalleryHorizontal, HardDrive,
    Image, LayoutGrid, Mail, MessageSquareQuote, PenLine,
    Settings, Star, TrendingUp, Users, Wrench,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────

type Stats = {
    users: number; authors: number;
    blog_posts: number; published_posts: number;
    pages: number; projects: number; services: number; industries: number;
    media_files: number; forms: number; submissions_new: number;
    testimonials_pending: number; hero_slides_active: number; roles: number;
};

type WorkflowCount  = { step: string; label: string; count: number };
type ContentStatus  = Record<string, number>;
type ChartPoint     = { date: string; views: number };
type StorageStats   = { total_files: number; images: number; documents: number; total_bytes: number; human_size: string };
type RecentPost     = { id: number; title: string; status: string; author: string | null; published_at: string | null; created_at: string; edit_url: string };
type RecentSub      = { id: number; form_name: string; status: string; received: string };
type TopPage        = { label: string; views: number };

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
];

// ── Status badge ──────────────────────────────────────────────────────────────

const statusStyles: Record<string, string> = {
    draft:     'bg-slate-100 text-slate-600',
    review:    'bg-amber-50  text-amber-700',
    published: 'bg-emerald-50 text-emerald-700',
    archived:  'bg-rose-50   text-rose-600',
    new:       'bg-blue-50   text-blue-700',
    read:      'bg-slate-100 text-slate-500',
    replied:   'bg-emerald-50 text-emerald-700',
};

function StatusBadge({ status }: { status: string }) {
    return (
        <span className={cn('rounded-full px-2 py-0.5 text-[10px] font-semibold capitalize', statusStyles[status] ?? 'bg-muted text-muted-foreground')}>
            {status}
        </span>
    );
}

// ── Stat card ─────────────────────────────────────────────────────────────────

function StatCard({ label, value, icon: Icon, href, accent, sub }: {
    label:  string;
    value:  number | string;
    icon:   React.ElementType;
    href?:  string;
    accent: string;
    sub?:   string;
}) {
    const inner = (
        <div className={cn(
            'group relative overflow-hidden rounded-2xl border bg-card p-5 shadow-sm transition-all duration-200',
            href && 'hover:shadow-md hover:-translate-y-0.5 cursor-pointer',
        )}>
            {/* Accent bar */}
            <div className={cn('absolute inset-x-0 top-0 h-0.5', accent)} />

            <div className="flex items-start justify-between">
                <div>
                    <p className="text-xs font-medium text-muted-foreground">{label}</p>
                    <p className="mt-1.5 text-3xl font-bold tabular-nums tracking-tight">{value}</p>
                    {sub && <p className="mt-1 text-xs text-muted-foreground">{sub}</p>}
                </div>
                <div className={cn('flex h-10 w-10 shrink-0 items-center justify-center rounded-xl', accent.replace('bg-', 'bg-').replace('-500', '-100').replace('-600', '-100'), 'text-current')}>
                    <Icon className={cn('h-5 w-5', accent.includes('emerald') ? 'text-emerald-600' : accent.includes('amber') ? 'text-amber-600' : accent.includes('blue') ? 'text-blue-600' : accent.includes('rose') ? 'text-rose-600' : accent.includes('violet') ? 'text-violet-600' : 'text-slate-600')} />
                </div>
            </div>

            {href && (
                <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-primary">
                    View all <ArrowRight className="h-3 w-3" />
                </div>
            )}
        </div>
    );

    return href ? <Link href={href}>{inner}</Link> : inner;
}

// ── Sparkline chart ───────────────────────────────────────────────────────────

function Sparkline({ data }: { data: ChartPoint[] }) {
    if (data.length < 2) {
        return (
            <div className="flex h-24 items-center justify-center text-xs text-muted-foreground">
                No view data yet
            </div>
        );
    }

    const max = Math.max(...data.map(d => d.views), 1);
    const W = 400, H = 80, PAD = 8;

    const pts = data.map((d, i) => {
        const x = PAD + (i / (data.length - 1)) * (W - PAD * 2);
        const y = PAD + (1 - d.views / max) * (H - PAD * 2);
        return `${x},${y}`;
    }).join(' ');

    const area = `M${pts.split(' ')[0]} L${pts} L${W - PAD},${H - PAD} L${PAD},${H - PAD} Z`;
    const line = `M${pts.split(' ').join(' L')}`;
    const total = data.reduce((s, d) => s + d.views, 0);

    return (
        <div>
            <div className="mb-2 flex items-end justify-between">
                <div>
                    <p className="text-2xl font-bold tabular-nums">{total.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">total views, last 30 days</p>
                </div>
                <TrendingUp className="h-5 w-5 text-emerald-500" />
            </div>
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="none" style={{ height: 64 }}>
                <defs>
                    <linearGradient id="spg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%"   stopColor="hsl(var(--primary))" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path d={area} fill="url(#spg)" />
                <polyline points={pts} fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
                <span>{data[0]?.date?.slice(5)}</span>
                <span>{data[data.length - 1]?.date?.slice(5)}</span>
            </div>
        </div>
    );
}

// ── Workflow pipeline ─────────────────────────────────────────────────────────

const workflowColors: Record<string, { bg: string; text: string; bar: string }> = {
    draft:     { bg: 'bg-slate-100',   text: 'text-slate-700',   bar: 'bg-slate-400'   },
    review:    { bg: 'bg-amber-50',    text: 'text-amber-700',   bar: 'bg-amber-400'   },
    published: { bg: 'bg-emerald-50',  text: 'text-emerald-700', bar: 'bg-emerald-500' },
    archived:  { bg: 'bg-rose-50',     text: 'text-rose-600',    bar: 'bg-rose-400'    },
};

function WorkflowPipeline({ data }: { data: WorkflowCount[] }) {
    const total = data.reduce((s, d) => s + d.count, 0) || 1;

    return (
        <div className="space-y-3">
            {data.map(item => {
                const cfg = workflowColors[item.step] ?? workflowColors.draft;
                const pct = Math.round((item.count / total) * 100);
                return (
                    <div key={item.step}>
                        <div className="flex items-center justify-between mb-1.5">
                            <span className={cn('text-xs font-medium', cfg.text)}>{item.label}</span>
                            <span className="text-xs tabular-nums text-muted-foreground">
                                {item.count} <span className="text-muted-foreground/50">({pct}%)</span>
                            </span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                            <div
                                className={cn('h-2 rounded-full transition-all duration-700', cfg.bar)}
                                style={{ width: `${pct}%` }}
                            />
                        </div>
                    </div>
                );
            })}
            <Link
                href="/workflow"
                className="flex items-center gap-1.5 pt-1 text-xs text-primary hover:underline"
            >
                Open workflow board <ArrowRight className="h-3 w-3" />
            </Link>
        </div>
    );
}

// ── Content status breakdown ──────────────────────────────────────────────────

function ContentBreakdown({ blogPosts, projects }: {
    blogPosts: ContentStatus;
    projects:  ContentStatus;
}) {
    const sections = [
        { label: 'Blog Posts', data: blogPosts, href: '/blog',     icon: BookOpen },
        { label: 'Projects',   data: projects,  href: '/projects', icon: FolderOpen },
    ];

    const statusList = ['draft', 'review', 'published', 'archived'];

    return (
        <div className="space-y-5">
            {sections.map(s => (
                <div key={s.label}>
                    <div className="mb-2 flex items-center gap-1.5">
                        <s.icon className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-xs font-semibold">{s.label}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1.5">
                        {statusList.map(status => (
                            <div key={status} className={cn('rounded-lg p-2 text-center', statusStyles[status] ?? 'bg-muted text-muted-foreground')}>
                                <p className="text-lg font-bold tabular-nums">{s.data[status] ?? 0}</p>
                                <p className="text-[10px] capitalize opacity-80">{status}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

// ── Quick actions ─────────────────────────────────────────────────────────────

const quickActions = [
    { label: 'New Blog Post',  href: '/blog/create',       icon: BookOpen,          color: 'text-blue-600   bg-blue-50   border-blue-100'   },
    { label: 'New Page',       href: '/pages/create',      icon: FileText,          color: 'text-violet-600 bg-violet-50 border-violet-100' },
    { label: 'New Project',    href: '/projects/create',   icon: FolderOpen,        color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
    { label: 'Upload Media',   href: '/media',             icon: Image,             color: 'text-amber-600  bg-amber-50  border-amber-100'  },
    { label: 'New Form',       href: '/forms/create',      icon: Mail,              color: 'text-rose-600   bg-rose-50   border-rose-100'   },
    { label: 'Site Settings',  href: '/settings',          icon: Settings,          color: 'text-slate-600  bg-slate-50  border-slate-100'  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Dashboard({
    stats,
    recentPosts,
    recentSubmissions,
    workflowCounts,
    contentByStatus,
    pageViewsChart,
    storageStats,
    topPages,
}: {
    stats:              Stats;
    recentPosts:        RecentPost[];
    recentSubmissions:  RecentSub[];
    workflowCounts:     WorkflowCount[];
    contentByStatus:    { blog_posts: ContentStatus; projects: ContentStatus };
    pageViewsChart:     ChartPoint[];
    storageStats:       StorageStats;
    topPages:           TopPage[];
}) {
    const greeting = () => {
        const h = new Date().getHours();
        if (h < 12) return 'Good morning';
        if (h < 17) return 'Good afternoon';
        return 'Good evening';
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="px-4 py-6 sm:px-6 lg:px-8 space-y-8">

                {/* ── Header ─────────────────────────────────────────────── */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">{greeting()} VMG</h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Here's what's happening with your CMS today.
                        </p>
                    </div>
                    {/* Alerts */}
                    <div className="flex flex-wrap gap-2">
                        {stats.submissions_new > 0 && (
                            <Link href="/submissions"
                                className="flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700 hover:bg-blue-100 transition-colors">
                                <Mail className="h-3.5 w-3.5" />
                                {stats.submissions_new} new submission{stats.submissions_new !== 1 ? 's' : ''}
                            </Link>
                        )}
                        {stats.testimonials_pending > 0 && (
                            <Link href="/testimonials"
                                className="flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-medium text-amber-700 hover:bg-amber-100 transition-colors">
                                <Star className="h-3.5 w-3.5" />
                                {stats.testimonials_pending} pending review
                            </Link>
                        )}
                    </div>
                </div>

                {/* ── Primary stat grid ───────────────────────────────────── */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <StatCard label="Blog Posts"  value={stats.blog_posts}  icon={BookOpen}  href="/blog"        accent="bg-blue-500"    sub={`${stats.published_posts} published`} />
                    <StatCard label="Pages"        value={stats.pages}       icon={FileText}  href="/pages"       accent="bg-violet-500" />
                    <StatCard label="Projects"     value={stats.projects}    icon={FolderOpen} href="/projects"   accent="bg-emerald-500" />
                    <StatCard label="Media Files"  value={stats.media_files} icon={Image}     href="/media"       accent="bg-amber-500"   sub={storageStats.human_size} />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <StatCard label="Users"        value={stats.users}       icon={Users}     href="/users"       accent="bg-slate-500" />
                    <StatCard label="Services"     value={stats.services}    icon={Wrench}    href="/services"    accent="bg-cyan-500" />
                    <StatCard label="Forms"        value={stats.forms}       icon={Mail}      href="/forms"       accent="bg-rose-500"    sub={stats.submissions_new ? `${stats.submissions_new} new` : undefined} />
                    <StatCard label="Active Slides" value={stats.hero_slides_active} icon={GalleryHorizontal} href="/hero-slides" accent="bg-fuchsia-500" />
                </div>

                {/* ── Main content grid ───────────────────────────────────── */}
                <div className="grid gap-6 xl:grid-cols-3">

                    {/* Page views chart — 2 cols */}
                    <div className="xl:col-span-2 rounded-2xl border bg-card p-6 shadow-sm">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-sm font-semibold">Page Views</h2>
                            <Link href="/analytics/page-views"
                                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                                Details <ArrowRight className="h-3 w-3" />
                            </Link>
                        </div>
                        <Sparkline data={pageViewsChart} />

                        {/* Top pages */}
                        {topPages.length > 0 && (
                            <div className="mt-5 space-y-2 border-t pt-4">
                                <p className="text-xs font-medium text-muted-foreground mb-2">Top Content (30d)</p>
                                {topPages.map((p, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs">
                                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-muted text-[10px] font-bold text-muted-foreground">
                                            {i + 1}
                                        </span>
                                        <span className="flex-1 truncate text-muted-foreground">{p.label}</span>
                                        <span className="tabular-nums font-medium">{p.views.toLocaleString()}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Workflow pipeline — 1 col */}
                    <div className="rounded-2xl border bg-card p-6 shadow-sm">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-sm font-semibold">Workflow Pipeline</h2>
                            <Link href="/workflow"
                                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                                Board <ArrowRight className="h-3 w-3" />
                            </Link>
                        </div>
                        {workflowCounts.length > 0
                            ? <WorkflowPipeline data={workflowCounts} />
                            : <p className="text-xs text-muted-foreground">No workflow data yet.</p>
                        }
                    </div>
                </div>

                {/* ── Second row ──────────────────────────────────────────── */}
                <div className="grid gap-6 xl:grid-cols-3">

                    {/* Recent blog posts — 2 cols */}
                    <div className="xl:col-span-2 rounded-2xl border bg-card p-6 shadow-sm">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-sm font-semibold">Recent Posts</h2>
                            <Link href="/blog/create"
                                className="flex items-center gap-1 text-xs text-primary hover:underline">
                                <BookOpen className="h-3 w-3" /> New post
                            </Link>
                        </div>
                        {recentPosts.length === 0 ? (
                            <p className="text-xs text-muted-foreground">No posts yet.</p>
                        ) : (
                            <div className="divide-y">
                                {recentPosts.map(post => (
                                    <div key={post.id} className="flex items-center gap-3 py-3">
                                        <div className="min-w-0 flex-1">
                                            <a href={post.edit_url}
                                                className="truncate text-sm font-medium hover:text-primary transition-colors block">
                                                {post.title}
                                            </a>
                                            <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
                                                {post.author && <span className="flex items-center gap-1"><PenLine className="h-3 w-3" />{post.author}</span>}
                                                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.created_at}</span>
                                            </div>
                                        </div>
                                        <StatusBadge status={post.status} />
                                    </div>
                                ))}
                            </div>
                        )}
                        <Link href="/blog"
                            className="mt-3 flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                            View all posts <ArrowRight className="h-3 w-3" />
                        </Link>
                    </div>

                    {/* Storage + content breakdown — 1 col */}
                    <div className="space-y-6">
                        {/* Storage */}
                        <div className="rounded-2xl border bg-card p-5 shadow-sm">
                            <div className="mb-3 flex items-center gap-2">
                                <HardDrive className="h-4 w-4 text-muted-foreground" />
                                <h2 className="text-sm font-semibold">Storage</h2>
                            </div>
                            <p className="text-2xl font-bold">{storageStats.human_size}</p>
                            <p className="mt-0.5 text-xs text-muted-foreground">{storageStats.total_files} files total</p>
                            <div className="mt-3 grid grid-cols-2 gap-2">
                                <div className="rounded-lg bg-muted/30 p-2.5 text-center">
                                    <p className="text-base font-bold tabular-nums">{storageStats.images}</p>
                                    <p className="text-[10px] text-muted-foreground">Images</p>
                                </div>
                                <div className="rounded-lg bg-muted/30 p-2.5 text-center">
                                    <p className="text-base font-bold tabular-nums">{storageStats.documents}</p>
                                    <p className="text-[10px] text-muted-foreground">Documents</p>
                                </div>
                            </div>
                        </div>

                        {/* Content by status */}
                        <div className="rounded-2xl border bg-card p-5 shadow-sm">
                            <h2 className="mb-3 text-sm font-semibold">Content Status</h2>
                            <ContentBreakdown
                                blogPosts={contentByStatus.blog_posts}
                                projects={contentByStatus.projects}
                            />
                        </div>
                    </div>
                </div>

                {/* ── Third row: submissions + quick actions ──────────────── */}
                <div className="grid gap-6 xl:grid-cols-3">

                    {/* Recent submissions */}
                    <div className="xl:col-span-2 rounded-2xl border bg-card p-6 shadow-sm">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-sm font-semibold">Recent Submissions</h2>
                            <Link href="/submissions"
                                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                                All submissions <ArrowRight className="h-3 w-3" />
                            </Link>
                        </div>
                        {recentSubmissions.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-8 text-center">
                                <Mail className="mb-2 h-8 w-8 text-muted-foreground/20" />
                                <p className="text-xs text-muted-foreground">No submissions yet.</p>
                            </div>
                        ) : (
                            <div className="divide-y">
                                {recentSubmissions.map(sub => (
                                    <div key={sub.id} className="flex items-center gap-3 py-3">
                                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                            <Mail className="h-3.5 w-3.5 text-primary" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium">{sub.form_name}</p>
                                            <p className="text-xs text-muted-foreground">{sub.received}</p>
                                        </div>
                                        <StatusBadge status={sub.status} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Quick actions */}
                    <div className="rounded-2xl border bg-card p-6 shadow-sm">
                        <h2 className="mb-4 text-sm font-semibold">Quick Actions</h2>
                        <div className="grid grid-cols-2 gap-2">
                            {quickActions.map(action => (
                                <Link
                                    key={action.label}
                                    href={action.href}
                                    className={cn(
                                        'flex flex-col items-center gap-2 rounded-xl border p-3 text-center transition-all hover:-translate-y-0.5 hover:shadow-sm',
                                        action.color,
                                    )}
                                >
                                    <action.icon className="h-5 w-5" />
                                    <span className="text-[11px] font-medium leading-tight">{action.label}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Mini system summary */}
                        <div className="mt-4 space-y-1.5 border-t pt-4">
                            {[
                                { label: 'Authors',    value: stats.authors,    href: '/authors'      },
                                { label: 'Industries', value: stats.industries, href: '/industries'   },
                                { label: 'Roles',      value: stats.roles,      href: '/roles'        },
                            ].map(r => (
                                <Link key={r.label} href={r.href}
                                    className="flex items-center justify-between rounded-lg px-2 py-1.5 text-xs hover:bg-muted/50 transition-colors">
                                    <span className="text-muted-foreground">{r.label}</span>
                                    <span className="font-semibold tabular-nums">{r.value}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </AppLayout>
    );
}
