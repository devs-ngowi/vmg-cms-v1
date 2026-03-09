import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import RoleForm from './role-form';

type Permission = {
    module:      string;
    can_view:    boolean;
    can_create:  boolean;
    can_edit:    boolean;
    can_delete:  boolean;
    can_publish: boolean;
};

type Role = {
    id:          number;
    name:        string;
    description: string;
    permissions: Permission[];
};

export default function EditRole({ role }: { role: Role }) {
    // Guard: if role is missing (shouldn't happen, but prevents blank/double render)
    if (!role) {
        return (
            <AppLayout breadcrumbs={[]}>
                <Head title="Edit Role" />
                <div className="px-4 py-6">
                    <p className="text-sm text-destructive">Role not found.</p>
                </div>
            </AppLayout>
        );
    }

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
                    defaultValues={{
                        id:          role.id,
                        name:        role.name,
                        description: role.description ?? '',
                        permissions: role.permissions, // already booleans from controller
                    }}
                />
            </div>
        </AppLayout>
    );
}
