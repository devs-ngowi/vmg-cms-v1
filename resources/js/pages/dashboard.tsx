import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

const stats = [
    { title: 'Total Users',    value: '—', icon: Users,         color: 'text-blue-500',   bg: 'bg-blue-50 dark:bg-blue-950' },
    { title: 'Total Orders',   value: '—', icon: ShoppingCart,  color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-950' },
    { title: 'Revenue',        value: '—', icon: DollarSign,    color: 'text-green-500',  bg: 'bg-green-50 dark:bg-green-950' },
    { title: 'Growth',         value: '—', icon: TrendingUp,    color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-950' },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-4">

                {/* Stat Cards */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.title}
                            className="rounded-xl border border-sidebar-border/70 bg-white p-5 shadow-sm dark:border-sidebar-border dark:bg-sidebar"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                                    <p className="mt-1 text-2xl font-semibold">{stat.value}</p>
                                </div>
                                <div className={`rounded-lg p-3 ${stat.bg}`}>
                                    <stat.icon className={`size-5 ${stat.color}`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Content Placeholder Rows */}
                <div className="grid gap-4 md:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="rounded-xl border border-sidebar-border/70 bg-white p-5 shadow-sm dark:border-sidebar-border dark:bg-sidebar"
                        >
                            <div className="mb-3 h-4 w-1/2 rounded bg-muted" />
                            <div className="space-y-2">
                                <div className="h-3 w-full rounded bg-muted" />
                                <div className="h-3 w-5/6 rounded bg-muted" />
                                <div className="h-3 w-4/6 rounded bg-muted" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Wide Placeholder Card */}
                <div className="rounded-xl border border-sidebar-border/70 bg-white p-5 shadow-sm dark:border-sidebar-border dark:bg-sidebar">
                    <div className="mb-4 h-4 w-1/4 rounded bg-muted" />
                    <div className="space-y-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="size-8 rounded-full bg-muted" />
                                <div className="h-3 flex-1 rounded bg-muted" />
                                <div className="h-3 w-16 rounded bg-muted" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </AppLayout>
    );
}
