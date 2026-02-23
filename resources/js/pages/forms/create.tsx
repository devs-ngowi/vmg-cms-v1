import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import FormBuilder, { type FieldType } from './builder';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Forms',     href: '/forms' },
    { title: 'New Form',  href: '/forms/create' },
];

export default function CreateForm({ fieldTypes }: { fieldTypes: FieldType[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="New Form" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">New Form</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Build a form by adding fields and configuring settings.
                    </p>
                </div>
                <FormBuilder mode="create" fieldTypes={fieldTypes} />
            </div>
        </AppLayout>
    );
}
