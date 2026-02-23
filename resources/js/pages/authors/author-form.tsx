import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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

type UserOption = {
    id:        number;
    full_name: string;
    username:  string;
    email:     string;
};

type AuthorFormData = {
    user_id: string;
    name:    string;
    bio:     string;
};

type DefaultValues = {
    author_id?: number;
    user_id?:   number;
    name?:      string;
    bio?:       string | null;
};

// ── Field wrapper ─────────────────────────────────────────────────────────────

function Field({
    label, error, required, hint, children,
}: {
    label:    string;
    error?:   string;
    required?: boolean;
    hint?:    string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <Label className={cn('text-sm font-medium', error && 'text-destructive')}>
                {label}{required && <span className="text-destructive"> *</span>}
            </Label>
            {children}
            {hint && !error && <p className="text-xs text-muted-foreground">{hint}</p>}
            {error && <p className="text-xs text-destructive">{error}</p>}
        </div>
    );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function AuthorForm({
    mode,
    users,
    defaultValues = {},
}: {
    mode:           'create' | 'edit';
    users:          UserOption[];
    defaultValues?: DefaultValues;
}) {
    const { data, setData, post, patch, processing, errors } = useForm<AuthorFormData>({
        user_id: defaultValues.user_id ? String(defaultValues.user_id) : '',
        name:    defaultValues.name    ?? '',
        bio:     defaultValues.bio     ?? '',
    });

    // Auto-fill name from selected user if creating
    const handleUserChange = (userId: string) => {
        setData('user_id', userId);
        if (mode === 'create' && !data.name) {
            const user = users.find(u => String(u.id) === userId);
            if (user) setData('name', user.full_name || user.username);
        }
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        mode === 'create'
            ? post('/authors')
            : patch(`/authors/${defaultValues.author_id}`);
    };

    return (
        <form onSubmit={submit} className="space-y-6">

            {/* ── Linked account ─────────────────────────────────────────── */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Linked User Account
                </h2>

                <Field
                    label="User Account"
                    required
                    error={errors.user_id}
                    hint="Only users without an existing author profile are shown."
                >
                    <Select value={data.user_id} onValueChange={handleUserChange}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a user…" />
                        </SelectTrigger>
                        <SelectContent>
                            {users.length === 0 ? (
                                <div className="px-4 py-3 text-sm text-muted-foreground">
                                    No available users
                                </div>
                            ) : (
                                users.map(u => (
                                    <SelectItem key={u.id} value={String(u.id)}>
                                        <span className="font-medium">{u.full_name || u.username}</span>
                                        <span className="ml-2 text-xs text-muted-foreground">{u.email}</span>
                                    </SelectItem>
                                ))
                            )}
                        </SelectContent>
                    </Select>
                </Field>
            </div>

            {/* ── Author details ─────────────────────────────────────────── */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Author Profile
                </h2>

                <div className="grid gap-4">
                    <Field
                        label="Display Name"
                        required
                        error={errors.name}
                        hint="This name appears publicly on published content."
                    >
                        <Input
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            placeholder="e.g. Jane Doe"
                            autoFocus
                        />
                    </Field>

                    <Field
                        label="Bio"
                        error={errors.bio}
                        hint="A short biography shown on the author's profile page."
                    >
                        <Textarea
                            value={data.bio}
                            onChange={e => setData('bio', e.target.value)}
                            placeholder="Write a short bio…"
                            rows={5}
                        />
                    </Field>
                </div>
            </div>

            {/* ── Submit ─────────────────────────────────────────────────── */}
            <div className="flex justify-end gap-3">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => window.history.back()}
                >
                    Cancel
                </Button>
                <Button type="submit" disabled={processing} className="gap-2">
                    {processing
                        ? <Loader2 className="h-4 w-4 animate-spin" />
                        : <Save className="h-4 w-4" />}
                    {mode === 'create' ? 'Create Author' : 'Save Changes'}
                </Button>
            </div>
        </form>
    );
}
