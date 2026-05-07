import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, Save } from 'lucide-react';
import { cn } from '@/lib/utils';

const MODULE_GROUPS: { label: string; modules: string[] }[] = [
    { label: 'Overview',           modules: ['Dashboard']                                                        },
    { label: 'Auth & Users',       modules: ['Users', 'Roles']                                                   },
    { label: 'Content Management', modules: ['Pages', 'Services', 'Industries', 'Projects', 'Blog', 'Vacancies'] },
    { label: 'Assets',             modules: ['Media']                                                            },
    { label: 'Forms & Inquiries',  modules: ['Forms', 'Submissions']                                             },
    { label: 'Publishing',         modules: ['Workflow']                                                         },
    { label: 'Site Configuration', modules: ['Hero Slides', 'Client Logos', 'Testimonials', 'Settings']          },
    { label: 'SEO & Navigation',   modules: ['SEO', 'Menus']                                                     },
    { label: 'Analytics',          modules: ['Analytics']                                                        },
];

const ALL_MODULES = MODULE_GROUPS.flatMap(g => g.modules);

const ACTION_KEYS: (keyof Omit<Permission, 'module'>)[] = [
    'can_view', 'can_create', 'can_edit', 'can_delete', 'can_publish',
];
const ACTION_LABELS = ['View', 'Create', 'Edit', 'Delete', 'Publish'];

type Permission = {
    module:      string;
    can_view:    boolean;
    can_create:  boolean;
    can_edit:    boolean;
    can_delete:  boolean;
    can_publish: boolean;
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
    permissions?: Partial<Permission>[];
};

function buildPermissions(existing: Partial<Permission>[] = []): Permission[] {
    return ALL_MODULES.map(module => {
        const found = existing.find(
            p => p.module?.toLowerCase() === module.toLowerCase(),
        );
        return {
            module,
            can_view:    Boolean(found?.can_view),
            can_create:  Boolean(found?.can_create),
            can_edit:    Boolean(found?.can_edit),
            can_delete:  Boolean(found?.can_delete),
            can_publish: Boolean(found?.can_publish),
        };
    });
}

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

    const togglePermission = (moduleIndex: number, key: keyof Omit<Permission, 'module'>) => {
        setData('permissions', data.permissions.map((p, i) =>
            i === moduleIndex ? { ...p, [key]: !p[key] } : p,
        ));
    };

    const toggleRow = (moduleIndex: number) => {
        const current = data.permissions[moduleIndex];
        const allOn   = ACTION_KEYS.every(k => current[k]);
        setData('permissions', data.permissions.map((p, i) =>
            i === moduleIndex
                ? { ...p, can_view: !allOn, can_create: !allOn, can_edit: !allOn, can_delete: !allOn, can_publish: !allOn }
                : p,
        ));
    };

    const toggleColumn = (key: keyof Omit<Permission, 'module'>) => {
        const allOn = data.permissions.every(p => p[key]);
        setData('permissions', data.permissions.map(p => ({ ...p, [key]: !allOn })));
    };

    const toggleGroup = (modules: string[]) => {
        const groupPerms = data.permissions.filter(p => modules.includes(p.module));
        const allOn      = groupPerms.every(p => ACTION_KEYS.every(k => p[k]));
        setData('permissions', data.permissions.map(p =>
            modules.includes(p.module)
                ? { ...p, can_view: !allOn, can_create: !allOn, can_edit: !allOn, can_delete: !allOn, can_publish: !allOn }
                : p,
        ));
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        mode === 'create' ? post('/roles') : patch(`/roles/${defaultValues.id}`);
    };

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
                        Click a column header to toggle all, a group label to toggle the group, or a row to toggle that module.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b bg-muted/30">
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                    Module
                                </th>
                                {ACTION_LABELS.map((label, ci) => (
                                    <th
                                        key={label}
                                        className="cursor-pointer px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground"
                                        onClick={() => toggleColumn(ACTION_KEYS[ci])}
                                        title={`Toggle all ${label}`}
                                    >
                                        {label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {MODULE_GROUPS.map(group => {
                                const groupPerms  = data.permissions.filter(p => group.modules.includes(p.module));
                                const groupAllOn  = groupPerms.every(p => ACTION_KEYS.every(k => p[k]));
                                const groupSomeOn = groupPerms.some(p => ACTION_KEYS.some(k => p[k]));

                                return (
                                    <>
                                        <tr key={`group-${group.label}`} className="bg-muted/50">
                                            <td colSpan={ACTION_KEYS.length + 1} className="px-6 py-2">
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        type="button"
                                                        onClick={() => toggleGroup(group.modules)}
                                                        className={cn(
                                                            'text-xs font-semibold uppercase tracking-wide transition-colors hover:text-primary',
                                                            groupAllOn  ? 'text-primary' :
                                                            groupSomeOn ? 'text-primary/60' :
                                                            'text-muted-foreground',
                                                        )}
                                                    >
                                                        {group.label}
                                                    </button>
                                                    <span className="text-xs text-muted-foreground">— click to toggle all</span>
                                                </div>
                                            </td>
                                        </tr>

                                        {group.modules.map(moduleName => {
                                            const ri   = data.permissions.findIndex(p => p.module === moduleName);
                                            const perm = data.permissions[ri];
                                            if (!perm) return null;
                                            const allOn = ACTION_KEYS.every(k => perm[k]);

                                            return (
                                                <tr key={perm.module} className="transition-colors hover:bg-muted/20">
                                                    <td className="px-6 py-3 pl-10">
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
                                                    {ACTION_KEYS.map(key => (
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
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ── Submit ───────────────────────────────────────────────── */}
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
