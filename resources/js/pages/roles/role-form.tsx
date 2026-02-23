import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, Save } from 'lucide-react';
import { cn } from '@/lib/utils';

// ── Modules list ──────────────────────────────────────────────────────────────

const MODULES = [
    'Dashboard',
    'Users',
    'Roles',
    'Pages',
    'Services',
    'Industries',
    'Projects',
    'Blog',
    'Vacancies',
    'Media',
    'Forms',
    'Submissions',
    'Workflow',
    'Hero Slides',
    'Client Logos',
    'Testimonials',
    'Settings',
    'SEO',
    'Menus',
    'Analytics',
];

// ── Types ─────────────────────────────────────────────────────────────────────

type Permission = {
    module:     string;
    can_view:   boolean;
    can_create: boolean;
    can_edit:   boolean;
    can_delete: boolean;
};

type RoleFormData = {
    name:        string;
    description: string;
    permissions: Permission[];
};

type DefaultValues = {
    id?:          number;
    name?:        string;
    description?: string;
    permissions?: Permission[];
};

// ── Build default permissions ─────────────────────────────────────────────────

function buildPermissions(existing: Permission[] = []): Permission[] {
    return MODULES.map(module => {
        const found = existing.find(p => p.module === module);
        return found ?? {
            module,
            can_view:   false,
            can_create: false,
            can_edit:   false,
            can_delete: false,
        };
    });
}

// ── Field wrapper ─────────────────────────────────────────────────────────────

function Field({
    label, error, required, children,
}: {
    label: string; error?: string; required?: boolean; children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <Label className={cn('text-sm font-medium', error && 'text-destructive')}>
                {label}{required && <span className="text-destructive"> *</span>}
            </Label>
            {children}
            {error && <p className="text-xs text-destructive">{error}</p>}
        </div>
    );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function RoleForm({
    mode,
    defaultValues = {},
}: {
    mode: 'create' | 'edit';
    defaultValues?: DefaultValues;
}) {
    const { data, setData, post, patch, processing, errors } = useForm<RoleFormData>({
        name:        defaultValues.name        ?? '',
        description: defaultValues.description ?? '',
        permissions: buildPermissions(defaultValues.permissions),
    });

    // Toggle a single permission cell
    const togglePermission = (
        moduleIndex: number,
        key: keyof Omit<Permission, 'module'>,
    ) => {
        const updated = data.permissions.map((p, i) =>
            i === moduleIndex ? { ...p, [key]: !p[key] } : p,
        );
        setData('permissions', updated);
    };

    // Toggle an entire row (all actions for a module)
    const toggleRow = (moduleIndex: number) => {
        const current = data.permissions[moduleIndex];
        const allOn   = current.can_view && current.can_create && current.can_edit && current.can_delete;
        const updated = data.permissions.map((p, i) =>
            i === moduleIndex
                ? { ...p, can_view: !allOn, can_create: !allOn, can_edit: !allOn, can_delete: !allOn }
                : p,
        );
        setData('permissions', updated);
    };

    // Toggle an entire column (all modules for one action)
    const toggleColumn = (key: keyof Omit<Permission, 'module'>) => {
        const allOn = data.permissions.every(p => p[key]);
        const updated = data.permissions.map(p => ({ ...p, [key]: !allOn }));
        setData('permissions', updated);
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        mode === 'create' ? post('/roles') : patch(`/roles/${defaultValues.id}`);
    };

    const actionKeys: (keyof Omit<Permission, 'module'>)[] = [
        'can_view', 'can_create', 'can_edit', 'can_delete',
    ];
    const actionLabels = ['View', 'Create', 'Edit', 'Delete'];

    return (
        <form onSubmit={submit} className="space-y-6">

            {/* ── Basic info ─────────────────────────────────────────────── */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Role Details
                </h2>
                <div className="grid gap-4">
                    <Field label="Role Name" required error={errors.name}>
                        <Input
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            placeholder="e.g. Editor, Moderator"
                            autoFocus
                        />
                    </Field>

                    <Field label="Description" error={errors.description}>
                        <Textarea
                            value={data.description}
                            onChange={e => setData('description', e.target.value)}
                            placeholder="What can this role do?"
                            rows={3}
                        />
                    </Field>
                </div>
            </div>

            {/* ── Permissions matrix ─────────────────────────────────────── */}
            <div className="rounded-xl border bg-card shadow-sm">
                <div className="border-b px-6 py-4">
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        Permissions
                    </h2>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                        Click a column header to toggle all, or a row label to toggle the whole row.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b bg-muted/30">
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                    Module
                                </th>
                                {actionLabels.map((label, ci) => (
                                    <th
                                        key={label}
                                        className="cursor-pointer px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground"
                                        onClick={() => toggleColumn(actionKeys[ci])}
                                    >
                                        {label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {data.permissions.map((perm, ri) => {
                                const allOn = perm.can_view && perm.can_create && perm.can_edit && perm.can_delete;
                                return (
                                    <tr key={perm.module} className="transition-colors hover:bg-muted/20">
                                        <td className="px-6 py-3">
                                            <button
                                                type="button"
                                                onClick={() => toggleRow(ri)}
                                                className={cn(
                                                    'text-sm font-medium transition-colors hover:text-primary',
                                                    allOn ? 'text-primary' : 'text-foreground',
                                                )}
                                            >
                                                {perm.module}
                                            </button>
                                        </td>
                                        {actionKeys.map(key => (
                                            <td key={key} className="px-4 py-3 text-center">
                                                <Checkbox
                                                    checked={perm[key]}
                                                    onCheckedChange={() => togglePermission(ri, key)}
                                                />
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
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
                    {mode === 'create' ? 'Create Role' : 'Save Changes'}
                </Button>
            </div>
        </form>
    );
}
