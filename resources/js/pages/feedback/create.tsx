import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import FeedbackForm from './form';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard',    href: '/dashboard'       },
    { title: 'Feedback',     href: '/feedback'        }, // ← singular
    { title: 'Add Feedback', href: '/feedback/create' }, // ← singular
];

export default function CreateFeedback() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Feedback" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Add Feedback</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Manually submit a feedback entry on behalf of a user.
                    </p>
                </div>
                <FeedbackForm mode="create" />
            </div>
        </AppLayout>
    );
}
