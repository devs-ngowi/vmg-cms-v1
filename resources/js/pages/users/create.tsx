import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import UserForm from './user-form';

type Role = { id: number; role_name: string };

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Users',     href: '/users' },
    { title: 'Add User',  href: '/users/create' },
];

export default function CreateUser({ roles }: { roles: Role[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add User" />

            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Add User</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Create a new team member account.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl">
                    <UserForm mode="create" roles={roles} />
                </div>
            </div>
        </AppLayout>
    );
}
