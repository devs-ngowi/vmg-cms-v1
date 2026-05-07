import AppLayout from '@/layouts/app-layout';
import { Head, router, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import type { BreadcrumbItem } from '@/types';
import {
    Bell, Code2, Globe, LayoutGrid, Loader2, Mail, RotateCw, Save, Search, Share2,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

type Setting = {
    id: number;
    key: string;
    value: string | null;
    type: 'string' | 'text' | 'boolean' | 'integer' | 'json' | 'array';
    group: string;
    updated_by: string | null;
    updated_at: string | null;
};

type Groups = Record<string, string>;
type GroupedSettings = Record<string, Setting[]>;

type SidebarOption = {
    label: string;
    value: string;
    group: string;
};

const SIDEBAR_ITEM_OPTIONS: SidebarOption[] = [
    { label: 'Dashboard', value: 'dashboard', group: 'Overview' },

    { label: 'Users', value: 'users', group: 'Auth & Users' },
    { label: 'Roles & Permissions', value: 'roles', group: 'Auth & Users' },
    { label: 'Authors', value: 'authors', group: 'Auth & Users' },

    { label: 'Pages', value: 'pages', group: 'Content Management' },
    { label: 'Services', value: 'services', group: 'Content Management' },
    { label: 'Industries', value: 'industries', group: 'Content Management' },
    { label: 'Projects', value: 'projects', group: 'Content Management' },
    { label: 'Knowledge', value: 'knowledge', group: 'Content Management' },
    { label: 'Blog / Insights', value: 'blog', group: 'Content Management' },

    { label: 'Media Library', value: 'media', group: 'Assets' },

    { label: 'Forms', value: 'forms', group: 'Forms & Inquiries' },
    { label: 'Submissions', value: 'submissions', group: 'Forms & Inquiries' },

    { label: 'Workflow', value: 'workflow', group: 'Publishing' },

    { label: 'Home-Banners', value: 'home_banners', group: 'Site Configuration' },
    { label: 'Hero Slides', value: 'hero_slides', group: 'Site Configuration' },
    { label: 'Client Logos', value: 'client_logos', group: 'Site Configuration' },
    { label: 'Testimonials', value: 'testimonials', group: 'Site Configuration' },
    { label: 'Site Settings', value: 'site_settings', group: 'Site Configuration' },

    { label: 'SEO Manager', value: 'seo', group: 'SEO & Navigation' },
    { label: 'Menu Manager', value: 'menus', group: 'SEO & Navigation' },

    { label: 'Analytics', value: 'analytics', group: 'Analytics' },
];

const groupIcons: Record<string, React.ReactNode> = {
    general: <Globe className="h-4 w-4" />,
    contact: <Mail className="h-4 w-4" />,
    social: <Share2 className="h-4 w-4" />,
    seo: <Search className="h-4 w-4" />,
    sidebar: <LayoutGrid className="h-4 w-4" />,
    advanced: <Code2 className="h-4 w-4" />,
};

function keyToLabel(key: string): string {
    return key
        .replace(/_/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
}

function parseJsonArray(value: string): string[] {
    if (!value?.trim()) return [];

    try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed.map(String) : [];
    } catch {
        return [];
    }
}

function groupSidebarOptions(options: SidebarOption[]): Record<string, SidebarOption[]> {
    return options.reduce((acc, option) => {
        if (!acc[option.group]) {
            acc[option.group] = [];
        }
        acc[option.group].push(option);
        return acc;
    }, {} as Record<string, SidebarOption[]>);
}

function SidebarItemsInput({
    value,
    onChange,
}: {
    value: string;
    onChange: (v: string) => void;
}) {
    const REQUIRED_SIDEBAR_ITEM = 'site_settings';

    const normalizeSelection = (items: string[]) => {
        const unique = Array.from(new Set(items));

        if (!unique.includes(REQUIRED_SIDEBAR_ITEM)) {
            unique.push(REQUIRED_SIDEBAR_ITEM);
        }

        return unique;
    };

    const selected = normalizeSelection(parseJsonArray(value));
    const groupedOptions = groupSidebarOptions(SIDEBAR_ITEM_OPTIONS);

    const toggleItem = (itemValue: string) => {
        if (itemValue === REQUIRED_SIDEBAR_ITEM) return;

        const next = selected.includes(itemValue)
            ? selected.filter(item => item !== itemValue)
            : [...selected, itemValue];

        onChange(JSON.stringify(normalizeSelection(next)));
    };

    const enableAll = () => {
        onChange(JSON.stringify(normalizeSelection(
            SIDEBAR_ITEM_OPTIONS.map(item => item.value),
        )));
    };

    const clearAll = () => {
        onChange(JSON.stringify([REQUIRED_SIDEBAR_ITEM]));
    };

    return (
        <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
                <Button type="button" variant="outline" size="sm" onClick={enableAll}>
                    Select all
                </Button>
                <Button type="button" variant="outline" size="sm" onClick={clearAll}>
                    Clear all
                </Button>
            </div>

            <div className="space-y-5">
                {Object.entries(groupedOptions).map(([groupName, items]) => (
                    <div key={groupName} className="rounded-xl border p-4">
                        <div className="mb-3 text-sm font-semibold text-foreground">
                            {groupName}
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                            {items.map(item => {
                                const checked = selected.includes(item.value);
                                const isRequired = item.value === REQUIRED_SIDEBAR_ITEM;

                                return (
                                    <label
                                        key={item.value}
                                        className={cn(
                                            'flex items-center gap-3 rounded-lg border px-3 py-3 transition-colors',
                                            checked ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted/40',
                                            isRequired && 'cursor-not-allowed opacity-90',
                                            !isRequired && 'cursor-pointer',
                                        )}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={checked}
                                            disabled={isRequired}
                                            onChange={() => toggleItem(item.value)}
                                            className="h-4 w-4 rounded border-border text-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-100"
                                        />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium">{item.label}</span>
                                            {isRequired && (
                                                <span className="text-xs text-muted-foreground">
                                                    Always enabled
                                                </span>
                                            )}
                                        </div>
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-xs text-muted-foreground">
                Checked items will appear in the sidebar. Site Settings is always enabled so this page can always be opened.
            </p>
        </div>
    );
}

function SettingInput({
    setting,
    value,
    onChange,
}: {
    setting: Setting;
    value: string;
    onChange: (v: string) => void;
}) {
    const isUrl = setting.key.includes('url') || setting.key.includes('social_');
    const isCode = ['custom_css', 'custom_js', 'robots_txt'].includes(setting.key);

    if (setting.key === 'sidebar_visible_modules') {
        return <SidebarItemsInput value={value} onChange={onChange} />;
    }

    if (setting.type === 'boolean') {
        const isOn = value === 'true';

        return (
            <div className="flex items-center gap-3">
                <button
                    type="button"
                    role="switch"
                    aria-checked={isOn}
                    onClick={() => onChange(isOn ? 'false' : 'true')}
                    className={cn(
                        'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 transition-colors focus-visible:outline-none',
                        isOn ? 'border-primary bg-primary' : 'border-muted bg-muted',
                    )}
                >
                    <span
                        className={cn(
                            'pointer-events-none mt-px block h-4 w-4 rounded-full bg-white shadow-md transition-transform',
                            isOn ? 'translate-x-4 ml-0.5' : 'translate-x-0.5',
                        )}
                    />
                </button>
                <span className="text-sm text-muted-foreground">
                    {isOn ? 'Enabled' : 'Disabled'}
                </span>
            </div>
        );
    }

    if (setting.type === 'integer') {
        return (
            <Input
                type="number"
                value={value}
                onChange={e => onChange(e.target.value)}
                className="max-w-[180px]"
            />
        );
    }

    if (setting.type === 'json') {
        return (
            <Textarea
                value={value}
                onChange={e => onChange(e.target.value)}
                rows={4}
                className="font-mono text-xs"
            />
        );
    }

    if (setting.type === 'text' || isCode) {
        return (
            <Textarea
                value={value}
                onChange={e => onChange(e.target.value)}
                rows={isCode ? 6 : 3}
                className={cn(isCode && 'font-mono text-xs')}
                placeholder={isCode ? `/* ${keyToLabel(setting.key)} */` : undefined}
            />
        );
    }

    return (
        <Input
            type={isUrl ? 'url' : 'text'}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={
                isUrl ? 'https://' : setting.key.includes('email') ? 'name@domain.com' : undefined
            }
        />
    );
}

function GroupForm({
    groupKey,
    groupLabel,
    settings,
}: {
    groupKey: string;
    groupLabel: string;
    settings: Setting[];
}) {
    const [isSeeding, setIsSeeding] = useState(false);

    const { data, setData, post, processing, isDirty } = useForm<{
        group: string;
        settings: { id: number; value: string }[];
    }>({
        group: groupKey,
        settings: settings.map(s => ({ id: s.id, value: s.value ?? '' })),
    });

    const setValue = (id: number, value: string) => {
        let nextValue = value;

        const currentSetting = settings.find(s => s.id === id);

        if (currentSetting?.key === 'sidebar_visible_modules') {
            const parsed = parseJsonArray(value);

            if (!parsed.includes('site_settings')) {
                parsed.push('site_settings');
            }

            nextValue = JSON.stringify(Array.from(new Set(parsed)));
        }

        setData(
            'settings',
            data.settings.map(s => (s.id === id ? { ...s, value: nextValue } : s)),
        );
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/settings', { preserveScroll: true });
    };

    const runSeeder = () => {
        setIsSeeding(true);

        router.post('/settings/seed-defaults', {}, {
            preserveScroll: true,
            onFinish: () => setIsSeeding(false),
        });
    };

    const draftValue = (id: number) =>
        data.settings.find(s => s.id === id)?.value ?? '';

    return (
        <form onSubmit={submit} className="space-y-0">
            <div className="overflow-hidden rounded-xl border bg-card shadow-sm divide-y">
                {settings.map(setting => (
                    <div key={setting.id} className="grid gap-3 px-6 py-5 sm:grid-cols-5">
                        <div className="sm:col-span-2">
                            <Label className="text-sm font-medium">
                                {keyToLabel(setting.key)}
                            </Label>
                            <p className="mt-0.5 font-mono text-xs text-muted-foreground/70">
                                {setting.key}
                            </p>
                            {setting.updated_by && (
                                <p className="mt-1 text-[11px] text-muted-foreground/50">
                                    Updated by {setting.updated_by} {setting.updated_at}
                                </p>
                            )}
                        </div>

                        <div className="sm:col-span-3">
                            <SettingInput
                                setting={setting}
                                value={draftValue(setting.id)}
                                onChange={val => setValue(setting.id, val)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap justify-between gap-3 pt-4">
                {groupKey === 'sidebar' && (
                    <Button
                        type="button"
                        variant="outline"
                        onClick={runSeeder}
                        disabled={isSeeding}
                        className="gap-2"
                    >
                        {isSeeding ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                            <RotateCw className="h-4 w-4" />
                        )}
                        {isSeeding ? 'Running Seeder…' : 'Run Default Settings Seeder'}
                    </Button>
                )}

                <div className="ml-auto">
                    <Button
                        type="submit"
                        disabled={processing || !isDirty}
                        className="min-w-[140px] gap-2"
                    >
                        {processing ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                            <Save className="h-4 w-4" />
                        )}
                        {processing ? 'Saving…' : `Save ${groupLabel}`}
                    </Button>
                </div>
            </div>
        </form>
    );
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Settings', href: '/settings' },
];

export default function SettingsIndex({
    settings,
    groups,
}: {
    settings: GroupedSettings;
    groups: Groups;
}) {
    const groupKeys = Object.keys(groups).filter(g => settings[g]?.length);
    const [active, setActive] = useState<string>(groupKeys[0] ?? 'general');

    const totalSettings = useMemo(
        () => Object.values(settings).reduce((n, g) => n + g.length, 0),
        [settings],
    );

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Settings" />

            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        {totalSettings} settings across {groupKeys.length} groups
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-5">
                    <nav className="flex gap-1 overflow-x-auto pb-2 lg:col-span-1 lg:flex-col lg:overflow-visible lg:pb-0">
                        {groupKeys.map(key => (
                            <button
                                key={key}
                                onClick={() => setActive(key)}
                                className={cn(
                                    'flex shrink-0 items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors',
                                    active === key
                                        ? 'bg-primary text-primary-foreground'
                                        : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground',
                                )}
                            >
                                <span className="shrink-0">
                                    {groupIcons[key] ?? <Bell className="h-4 w-4" />}
                                </span>
                                <span className="truncate">{groups[key]}</span>
                                <span
                                    className={cn(
                                        'ml-auto shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-semibold tabular-nums',
                                        active === key
                                            ? 'bg-white/20 text-white'
                                            : 'bg-muted text-muted-foreground',
                                    )}
                                >
                                    {settings[key]?.length ?? 0}
                                </span>
                            </button>
                        ))}
                    </nav>

                    <div className="lg:col-span-4">
                        {groupKeys.map(key => (
                            <div key={key} className={active === key ? 'block' : 'hidden'}>
                                <div className="mb-4 flex items-center gap-2">
                                    <span className="text-primary">
                                        {groupIcons[key] ?? <Bell className="h-5 w-5" />}
                                    </span>
                                    <h2 className="text-lg font-semibold">{groups[key]}</h2>
                                </div>

                                <GroupForm
                                    groupKey={key}
                                    groupLabel={groups[key]}
                                    settings={settings[key] ?? []}
                                />
                            </div>
                        ))}

                        {groupKeys.length === 0 && (
                            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-20 text-center">
                                <Code2 className="mb-3 h-10 w-10 text-muted-foreground/30" />
                                <p className="text-sm font-medium">No settings found</p>
                                <p className="mt-1 text-xs text-muted-foreground">
                                    Run the seeder to populate default settings.
                                </p>
                                <code className="mt-3 rounded bg-muted px-3 py-1.5 text-xs">
                                    php artisan db:seed --class=SiteSettingSeeder
                                </code>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
