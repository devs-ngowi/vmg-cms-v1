import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import type { BreadcrumbItem } from '@/types';
import {
    Bell, Code2, Globe, Loader2, Mail, Save, Search,
    Share2,
} from 'lucide-react';
import { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────

type Setting = {
    id:         number;
    key:        string;
    value:      string | null;
    type:       'string' | 'text' | 'boolean' | 'integer' | 'json' | 'array';
    group:      string;
    updated_by: string | null;
    updated_at: string | null;
};

type Groups = Record<string, string>;
type GroupedSettings = Record<string, Setting[]>;

// ── Group icon map ────────────────────────────────────────────────────────────

const groupIcons: Record<string, React.ReactNode> = {
    general:  <Globe   className="h-4 w-4" />,
    contact:  <Mail    className="h-4 w-4" />,
    social:   <Share2  className="h-4 w-4" />,
    seo:      <Search  className="h-4 w-4" />,
    advanced: <Code2   className="h-4 w-4" />,
};

// ── Human-readable key labels ─────────────────────────────────────────────────

function keyToLabel(key: string): string {
    return key
        .replace(/_/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
}

// ── Setting input ─────────────────────────────────────────────────────────────

function SettingInput({
    setting,
    value,
    onChange,
}: {
    setting:  Setting;
    value:    string;
    onChange: (v: string) => void;
}) {
    const isUrl  = setting.key.includes('url') || setting.key.includes('social_');
    const isCode = ['custom_css', 'custom_js', 'robots_txt'].includes(setting.key);

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
                    <span className={cn(
                        'pointer-events-none block h-4 w-4 rounded-full bg-white shadow-md transition-transform mt-px',
                        isOn ? 'translate-x-4 ml-0.5' : 'translate-x-0.5',
                    )} />
                </button>
                <span className="text-sm text-muted-foreground">{isOn ? 'Enabled' : 'Disabled'}</span>
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
        placeholder={isUrl ? 'https://' : setting.key.includes('email') ? 'name@domain.com' : undefined}
    />
);
}

// ── Group form ────────────────────────────────────────────────────────────────

function GroupForm({
    groupKey,
    groupLabel,
    settings,
}: {
    groupKey:   string;
    groupLabel: string;
    settings:   Setting[];
}) {
    // Build initial values map: id → current value
    const initValues = Object.fromEntries(
        settings.map(s => [String(s.id), s.value ?? '']),
    );

    const { data, setData, post, processing, isDirty } = useForm<{
        group:    string;
        settings: { id: number; value: string }[];
    }>({
        group:    groupKey,
        settings: settings.map(s => ({ id: s.id, value: s.value ?? '' })),
    });

    const setValue = (id: number, value: string) => {
        setData('settings', data.settings.map(s =>
            s.id === id ? { ...s, value } : s,
        ));
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/settings', { preserveScroll: true });
    };

    // Helper to get current draft value for a setting id
    const draftValue = (id: number) =>
        data.settings.find(s => s.id === id)?.value ?? '';

    return (
        <form onSubmit={submit} className="space-y-0">
            <div className="divide-y rounded-xl border bg-card shadow-sm overflow-hidden">
                {settings.map(setting => (
                    <div key={setting.id} className="grid gap-3 px-6 py-5 sm:grid-cols-5">
                        <div className="sm:col-span-2">
                            <Label className="text-sm font-medium">
                                {keyToLabel(setting.key)}
                            </Label>
                            <p className="mt-0.5 text-xs text-muted-foreground/70 font-mono">
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

            <div className="flex justify-end pt-4">
                <Button type="submit" disabled={processing || !isDirty} className="gap-2 min-w-[140px]">
                    {processing
                        ? <Loader2 className="h-4 w-4 animate-spin" />
                        : <Save className="h-4 w-4" />
                    }
                    {processing ? 'Saving…' : `Save ${groupLabel}`}
                </Button>
            </div>
        </form>
    );
}

// ── Page ──────────────────────────────────────────────────────────────────────

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Settings',  href: '/settings' },
];

export default function SettingsIndex({
    settings,
    groups,
}: {
    settings: GroupedSettings;
    groups:   Groups;
}) {
    const groupKeys   = Object.keys(groups).filter(g => settings[g]?.length);
    const [active, setActive] = useState<string>(groupKeys[0] ?? 'general');

    const totalSettings = useMemo(
        () => Object.values(settings).reduce((n, g) => n + g.length, 0),
        [settings],
    );

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Settings" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        {totalSettings} settings across {groupKeys.length} groups
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-5">

                    {/* ── Tab sidebar ───────────────────────────────────────── */}
                    <nav className="lg:col-span-1 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                        {groupKeys.map(key => (
                            <button
                                key={key}
                                onClick={() => setActive(key)}
                                className={cn(
                                    'flex shrink-0 items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-left',
                                    active === key
                                        ? 'bg-primary text-primary-foreground'
                                        : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground',
                                )}
                            >
                                <span className="shrink-0">
                                    {groupIcons[key] ?? <Bell className="h-4 w-4" />}
                                </span>
                                <span className="truncate">{groups[key]}</span>
                                <span className={cn(
                                    'ml-auto shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-semibold tabular-nums',
                                    active === key
                                        ? 'bg-white/20 text-white'
                                        : 'bg-muted text-muted-foreground',
                                )}>
                                    {settings[key]?.length ?? 0}
                                </span>
                            </button>
                        ))}
                    </nav>

                    {/* ── Active group form ─────────────────────────────────── */}
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
