import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import FormBuilder, { type FieldType, type FormValues } from './builder';

// ── Fallback in case the server doesn't send fieldTypes ───────────────────────
const DEFAULT_FIELD_TYPES: FieldType[] = [
    'text', 'email', 'tel', 'number', 'url',
    'textarea', 'select', 'radio', 'checkbox', 'date', 'file',
];

type Props = {
    form:        FormValues;
    fieldTypes?: FieldType[];
};

export default function EditForm({ form, fieldTypes }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Forms',     href: '/forms' },
        { title: form?.name ?? 'Edit Form', href: '#' },
    ];

    // Guard: if form failed to load from server
    if (!form) {
        return (
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Edit Form" />
                <div className="flex items-center justify-center py-32 text-sm text-muted-foreground">
                    Unable to load form. Please go back and try again.
                </div>
            </AppLayout>
        );
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit — ${form.name}`} />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Edit Form</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Editing: <strong>{form.name}</strong>
                    </p>
                </div>
                <FormBuilder
                    mode="edit"
                    form={form}
                    fieldTypes={fieldTypes ?? DEFAULT_FIELD_TYPES}
                />
            </div>
        </AppLayout>
    );
}
