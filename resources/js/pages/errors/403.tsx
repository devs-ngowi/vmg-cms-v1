import { Head, Link } from '@inertiajs/react';
import { ShieldX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Forbidden() {
    return (
        <>
            <Head title="403 — Access Denied" />

            <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">

                {/* Icon */}
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-destructive/10 ring-1 ring-destructive/20">
                    <ShieldX className="h-10 w-10 text-destructive" />
                </div>

                {/* Code */}
                <p className="text-sm font-semibold uppercase tracking-widest text-destructive">
                    403 — Forbidden
                </p>

                {/* Heading */}
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
                    Access Denied
                </h1>

                {/* Description */}
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    You don't have permission to view this page. If you think this is a mistake,
                    contact your administrator.
                </p>

                {/* Actions */}
                <div className="mt-8 flex items-center gap-3">
                    <Button variant="outline" onClick={() => window.history.back()}>
                        Go Back
                    </Button>
                    <Button asChild>
                        <Link href="/dashboard">Back to Dashboard</Link>
                    </Button>
                </div>
            </div>
        </>
    );
}
