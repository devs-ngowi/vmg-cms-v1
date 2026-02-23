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

type Author = {
    author_id: number;
    user_id:   number;
    name:      string;
    bio:       string | null;
};

type Props = {
    author: Author;
    users:  UserOption[];
};

export default function EditAuthor({ author, users }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Authors',   href: '/authors' },
        { title: author.name, href: '#' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit — ${author.name}`} />

            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Edit Author</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Update profile details for <strong>{author.name}</strong>.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl">
                    <AuthorForm
                        mode="edit"
                        users={users}
                        defaultValues={author}
                    />
                </div>
            </div>
        </AppLayout>
    );
}
