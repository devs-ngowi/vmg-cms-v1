import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import UserForm from './user-form';

type Role = { id: number; role_name: string };

type User = {
    id:        number;
    username:  string;
    full_name: string;
    email:     string;
    role_id:   number;
    status:    string;
};

type Props = {
    user:  User;
    roles: Role[];
};

export default function EditUser({ user, roles }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard',       href: '/dashboard' },
        { title: 'Users',           href: '/users' },
        { title: user.full_name,    href: '#' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit — ${user.full_name}`} />

            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Edit User</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Update account details for <strong>{user.full_name}</strong>.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl">
                    <UserForm
                        mode="edit"
                        roles={roles}
                        defaultValues={user}
                    />
                </div>
            </div>
        </AppLayout>
    );
}
