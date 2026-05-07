import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import RoleForm from './role-form';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard',         href: '/dashboard' },
    { title: 'Roles & Permissions', href: '/roles' },
    { title: 'Add Role',          href: '/roles/create' },
];

export default function CreateRole() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Role" />

            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Add Role</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Create a new role and assign its permissions.
                    </p>
                </div>

                <RoleForm mode="create" />
            </div>
        </AppLayout>
    );
}
