import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import RoleForm from './role-form';

type Permission = {
    module:     string;
    can_view:   boolean;
    can_create: boolean;
    can_edit:   boolean;
    can_delete: boolean;
};

type Role = {
    id:          number;
    name:        string;
    description: string | null;
    permissions: Permission[];
};

export default function EditRole({ role }: { role: Role }) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard',           href: '/dashboard' },
        { title: 'Roles & Permissions', href: '/roles' },
        { title: role.name,             href: '#' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit — ${role.name}`} />

            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight capitalize">
                        Edit Role: {role.name}
                    </h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Update the role name and its module permissions.
                    </p>
                </div>

                <RoleForm
                    mode="edit"
                    defaultValues={role}
                />
            </div>
        </AppLayout>
    );
}
