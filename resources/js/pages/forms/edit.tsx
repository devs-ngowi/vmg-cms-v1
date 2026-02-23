import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import FormBuilder, { type FieldType, type FormValues } from './builder';

type Props = {
    form:       FormValues;
    fieldTypes: FieldType[];
};

export default function EditForm({ form, fieldTypes }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Forms',     href: '/forms' },
        { title: form.name,   href: '#' },
    ];

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
                <FormBuilder mode="edit" form={form} fieldTypes={fieldTypes} />
            </div>
        </AppLayout>
    );
}
