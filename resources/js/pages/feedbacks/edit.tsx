import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import FeedbackForm from './form';

type FeedbackData = {
    id:          number;
    name:        string;
    email:       string;
    category:    string;
    rating:      number;
    message:     string;
    status:      string;
    admin_notes: string | null;
};

export default function EditFeedback({ feedback }: { feedback: FeedbackData }) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard',   href: '/dashboard' },
        { title: 'Feedback',    href: '/feedback'  }, // ← singular
        { title: feedback.name, href: '#'          },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Review — ${feedback.name}`} />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Review Feedback</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        From: <strong>{feedback.name}</strong> ({feedback.email})
                    </p>
                </div>
                <FeedbackForm mode="edit" defaultValues={feedback} />
            </div>
        </AppLayout>
    );
}
