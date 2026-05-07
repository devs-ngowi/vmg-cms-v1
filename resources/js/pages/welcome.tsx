import { Head, usePage } from '@inertiajs/react';

// ── Types ─────────────────────────────────────────────────────────────────────
type Company = {
    id: number;
    name: string;
    slug: string;
    domain: string;
    logo?: string | null;
    plan?: string | null;
    status?: string | null;
};

interface SharedProps {
    companies: Company[];
    appName?: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function tenantUrl(domain: string): string {
    // Always use HTTPS for tenant links
    const host = domain.includes('localhost') ? `http://${domain}` : `https://${domain}`;
    return `${host}/login`;
}

function planBadgeClass(plan?: string | null): string {
    switch (plan) {
        case 'enterprise': return 'bg-amber-100 text-amber-700 ring-amber-200';
        case 'pro':        return 'bg-violet-100 text-violet-700 ring-violet-200';
        default:           return 'bg-slate-100 text-slate-600 ring-slate-200';
    }
}

function getInitials(name: string): string {
    return name
        .split(' ')
        .slice(0, 2)
        .map(w => w[0]?.toUpperCase() ?? '')
        .join('');
}

// Deterministic soft color from company name
function avatarColor(name: string): string {
    const colors = [
        'bg-sky-500',
        'bg-emerald-500',
        'bg-rose-500',
        'bg-indigo-500',
        'bg-teal-500',
        'bg-orange-500',
        'bg-pink-500',
        'bg-cyan-500',
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return colors[Math.abs(hash) % colors.length];
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function WelcomePage() {
    const { companies = [], appName = 'CMS Platform' } = usePage<SharedProps>().props;

    const activeCompanies = companies.filter(c => c.status !== 'inactive');

    return (
        <>
            <Head title={`Welcome — ${appName}`} />

            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">

                {/* ── Subtle background grid ── */}
                <div
                    className="pointer-events-none fixed inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                        backgroundSize: '48px 48px',
                    }}
                />

                {/* ── Top bar ── */}
                <header className="relative z-10 flex items-center justify-between px-8 py-5 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-xs font-bold tracking-tight">
                            CMS
                        </div>
                        <span className="text-sm font-semibold tracking-wide text-white/80">
                            {appName}
                        </span>
                    </div>
                    <a
                        href="/register-company"
                        className="text-xs font-medium text-white/50 hover:text-white transition-colors duration-150"
                    >
                        + Register company
                    </a>
                </header>

                {/* ── Hero ── */}
                <main className="relative z-10 mx-auto max-w-4xl px-6 py-20">
                    <div className="text-center mb-14">
                        <p className="mb-3 inline-block rounded-full bg-white/5 px-4 py-1 text-xs font-medium tracking-widest uppercase text-white/40 ring-1 ring-white/10">
                            Multi-tenant Portal
                        </p>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Welcome back
                        </h1>
                        <p className="mt-4 text-base text-white/40 max-w-md mx-auto leading-relaxed">
                            Select your workspace below to log in, or register a new company to get started.
                        </p>
                    </div>

                    {/* ── Search hint ── */}
                    {activeCompanies.length > 6 && (
                        <p className="mb-6 text-center text-xs text-white/30">
                            {activeCompanies.length} workspaces available
                        </p>
                    )}

                    {/* ── Tenant grid ── */}
                    {activeCompanies.length === 0 ? (
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-16 text-center backdrop-blur-sm">
                            <p className="text-sm text-white/30">No workspaces registered yet.</p>
                            <a
                                href="/register-company"
                                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-400 transition-colors"
                            >
                                Register the first company →
                            </a>
                        </div>
                    ) : (
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {activeCompanies.map(company => (
                                <a
                                    key={company.id}
                                    href={tenantUrl(company.domain)}
                                    className="group relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-black/30 hover:-translate-y-0.5"
                                >
                                    {/* Avatar / Logo */}
                                    <div className="shrink-0">
                                        {company.logo ? (
                                            <img
                                                src={company.logo}
                                                alt={company.name}
                                                className="h-10 w-10 rounded-xl object-cover ring-1 ring-white/10"
                                            />
                                        ) : (
                                            <div
                                                className={`h-10 w-10 rounded-xl ${avatarColor(company.name)} flex items-center justify-center text-xs font-bold text-white ring-1 ring-white/10`}
                                            >
                                                {getInitials(company.name)}
                                            </div>
                                        )}
                                    </div>

                                    {/* Info */}
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center gap-2">
                                            <p className="truncate text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                                                {company.name}
                                            </p>
                                            {company.plan && company.plan !== 'basic' && (
                                                <span
                                                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ${planBadgeClass(company.plan)}`}
                                                >
                                                    {company.plan}
                                                </span>
                                            )}
                                        </div>
                                        <p className="mt-0.5 truncate text-xs text-white/35 group-hover:text-white/50 transition-colors">
                                            {company.domain}
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    <svg
                                        className="shrink-0 h-4 w-4 text-white/20 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all duration-150"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    )}

                    {/* ── Footer actions ── */}
                    <div className="mt-12 flex flex-col items-center gap-4">
                        <div className="h-px w-24 bg-white/10" />
                        <p className="text-sm text-white/35">
                            Don't have a workspace?{' '}
                            <a
                                href="/register-company"
                                className="font-medium text-sky-400 hover:text-sky-300 transition-colors"
                            >
                                Register your company
                            </a>
                        </p>
                        <p className="text-xs text-white/20">
                            © {new Date().getFullYear()} {appName}. All rights reserved.
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}