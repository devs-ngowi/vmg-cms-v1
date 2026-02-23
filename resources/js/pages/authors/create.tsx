import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';
import AuthorForm from './author-form';

type UserOption = {
    id:        number;
    full_name: string;
    username:  string;
    email:     string;
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Authors',   href: '/authors' },
    { title: 'Add Author', href: '/authors/create' },
];

export default function CreateAuthor({ users }: { users: UserOption[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Author" />

            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Add Author</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Create a new author profile and link it to a user account.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl">
                    <AuthorForm mode="create" users={users} />
                </div>
            </div>
        </AppLayout>
    );
}
