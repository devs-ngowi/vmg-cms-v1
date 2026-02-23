import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Loader2, Save } from 'lucide-react';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────

type Role = { id: number; name: string };

type UserFormData = {
    username:              string;
    full_name:             string;
    email:                 string;
    password:              string;
    password_confirmation: string;
    role_id:               string;
    status:                string;
};

type Props = {
    roles:        Role[];
    mode:         'create' | 'edit';
    defaultValues?: Partial<UserFormData & { id: number }>;
};

// ── Field wrapper ─────────────────────────────────────────────────────────────

function Field({
    label,
    error,
    required,
    children,
}: {
    label:     string;
    error?:    string;
    required?: boolean;
    children:  React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <Label className={cn('text-sm font-medium', error && 'text-destructive')}>
                {label} {required && <span className="text-destructive">*</span>}
            </Label>
            {children}
            {error && <p className="text-xs text-destructive">{error}</p>}
        </div>
    );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function UserForm({ roles, mode, defaultValues }: Props) {
    const { data, setData, post, patch, processing, errors } = useForm<UserFormData>({
        username:              defaultValues?.username              ?? '',
        full_name:             defaultValues?.full_name             ?? '',
        email:                 defaultValues?.email                 ?? '',
        password:              '',
        password_confirmation: '',
        role_id:               String(defaultValues?.role_id ?? ''),
        status:                defaultValues?.status               ?? 'active',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (mode === 'create') {
            post('/users');
        } else {
            patch(`/users/${defaultValues?.id}`);
        }
    };

    return (
        <form onSubmit={submit} className="space-y-6">

            {/* ── Personal info ──────────────────────────────────────────── */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Personal Information
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full Name" required error={errors.full_name}>
                        <Input
                            value={data.full_name}
                            onChange={e => setData('full_name', e.target.value)}
                            placeholder="Jane Doe"
                            autoFocus
                        />
                    </Field>

                    <Field label="Username" required error={errors.username}>
                        <Input
                            value={data.username}
                            onChange={e => setData('username', e.target.value)}
                            placeholder="janedoe"
                        />
                    </Field>

                    <Field label="Email Address" required error={errors.email} >
                        <Input
                            type="email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            placeholder="jane@example.com"
                            className="sm:col-span-2"
                        />
                    </Field>
                </div>
            </div>

            {/* ── Password ───────────────────────────────────────────────── */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Password
                </h2>
                {mode === 'edit' && (
                    <p className="mb-4 text-xs text-muted-foreground">
                        Leave blank to keep the current password.
                    </p>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                        label={mode === 'edit' ? 'New Password' : 'Password'}
                        required={mode === 'create'}
                        error={errors.password}
                    >
                        <Input
                            type="password"
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                            placeholder="••••••••"
                            autoComplete="new-password"
                        />
                    </Field>

                    <Field
                        label="Confirm Password"
                        required={mode === 'create'}
                        error={errors.password_confirmation}
                    >
                        <Input
                            type="password"
                            value={data.password_confirmation}
                            onChange={e => setData('password_confirmation', e.target.value)}
                            placeholder="••••••••"
                            autoComplete="new-password"
                        />
                    </Field>
                </div>
            </div>

            {/* ── Role & Status ──────────────────────────────────────────── */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Access Control
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Role" required error={errors.role_id}>
                        <Select value={data.role_id} onValueChange={v => setData('role_id', v)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a role…" />
                            </SelectTrigger>
                            <SelectContent>
                                {roles.map(r => (
                                    <SelectItem key={r.id} value={String(r.id)}>
                                        {r.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </Field>

                    <Field label="Status" required error={errors.status}>
                        <Select value={data.status} onValueChange={v => setData('status', v)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select status…" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="inactive">Inactive</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                            </SelectContent>
                        </Select>
                    </Field>
                </div>
            </div>

            {/* ── Submit ─────────────────────────────────────────────────── */}
            <div className="flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => window.history.back()}>
                    Cancel
                </Button>
                <Button type="submit" disabled={processing} className="gap-2">
                    {processing
                        ? <Loader2 className="h-4 w-4 animate-spin" />
                        : <Save className="h-4 w-4" />}
                    {mode === 'create' ? 'Create User' : 'Save Changes'}
                </Button>
            </div>
        </form>
    );
}
