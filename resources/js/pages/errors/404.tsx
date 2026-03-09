import { Head, Link } from '@inertiajs/react';
import { SearchX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <>
            <Head title="404 — Page Not Found" />

            <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">

                {/* Icon */}
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-muted ring-1 ring-border">
                    <SearchX className="h-10 w-10 text-muted-foreground" />
                </div>

                {/* Code */}
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    404 — Not Found
                </p>

                {/* Heading */}
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
                    Page Not Found
                </h1>

                {/* Description */}
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    The page you're looking for doesn't exist or may have been moved.
                    Double-check the URL or head back to safety.
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
