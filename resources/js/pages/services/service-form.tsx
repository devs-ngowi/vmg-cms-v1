import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import {
    Loader2, Save, X, Plus, Trash2, AlertCircle,
    ExternalLink, ChevronDown, ChevronRight, Layers,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import RichTextEditor from '@/components/rich-text-editor';
import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type Category  = { id: number; name: string; children?: Category[] };
type Tag       = { id: number; name: string; slug: string };
type MediaItem = { id: number; filename: string; original_name: string; alt_text: string | null; mime_type: string };

type ServiceSubPackageFormData = {
    id?:               number;
    title:             string;
    short_description: string;
    description:       string;
    website_url:       string;
    features:          string[];
    published_on_site: boolean;
};

type ServicePackageFormData = {
    id?:               number;
    title:             string;
    short_description: string;
    description:       string;
    website_url:       string;
    features:          string[];
    published_on_site: boolean;
    sub_packages:      ServiceSubPackageFormData[];
};

type ServiceFormData = {
    title:             string;
    slug:              string;
    short_description: string;
    description:       string;
    icon:              string;
    website_url:       string;
    website_logo_id:   string;
    image_id:          string;
    order_number:      string;
    status:            string;
    category_ids:      number[];
    tag_ids:           number[];
    media_ids:         number[];
    workflow_notes:    string;
    packages:          ServicePackageFormData[];
};

type DefaultValues = Partial<{
    id:                number;
    title:             string;
    slug:              string;
    short_description: string;
    description:       string;
    icon:              string;
    website_url:       string;
    website_logo_id:   number;
    image_id:          number;
    order_number:      number;
    status:            string;
    category_ids:      number[];
    tag_ids:           number[];
    media_ids:         number[];
    workflow_step:     string;
    packages:          ServicePackageFormData[];
}>;

type Props = {
    mode:           'create' | 'edit';
    categories:     Category[];
    tags:           Tag[];
    media:          MediaItem[];
    defaultValues?: DefaultValues;
};

// ── Shared UI ─────────────────────────────────────────────────────────────────

function Field({ label, error, hint, required, children }: {
    label: string; error?: string; hint?: string; required?: boolean; children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <Label className={cn('text-sm font-medium', error && 'text-destructive')}>
                {label}
                {required && <span className="text-destructive font-bold ml-1">*</span>}
            </Label>
            {children}
            {hint  && !error && <p className="text-xs text-muted-foreground">{hint}</p>}
            {error && (
                <div className="flex items-start gap-1.5 text-xs text-destructive">
                    <AlertCircle className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                    <span>{error}</span>
                </div>
            )}
        </div>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {title}
            </h2>
            {children}
        </div>
    );
}

function PublishRow({ id, checked, onChange }: {
    id: string; checked: boolean; onChange: (val: boolean) => void;
}) {
    return (
        <div className="flex items-center justify-between rounded-md border bg-muted/30 px-3 py-2.5">
            <div>
                <p className="text-xs font-semibold">Published on Site</p>
                <p className="text-xs text-muted-foreground">When off, hidden from the public website.</p>
            </div>
            <div className="flex items-center gap-2">
                <Switch id={id} checked={checked} onCheckedChange={onChange} />
                <Label htmlFor={id}
                    className={cn('text-xs font-semibold cursor-pointer w-10',
                        checked ? 'text-green-600' : 'text-muted-foreground')}>
                    {checked ? 'Live' : 'Hidden'}
                </Label>
            </div>
        </div>
    );
}

// ── Sub-Package Card — accordion state managed by parent PackageCard ──────────

function SubPackageCard({ sub, subIdx, pkgIdx, expanded, onToggle, onUpdate, onRemove }: {
    sub:      ServiceSubPackageFormData;
    subIdx:   number;
    pkgIdx:   number;
    expanded: boolean;                  // ← controlled by parent
    onToggle: (subIdx: number) => void; // ← accordion callback
    onUpdate: (pkgIdx: number, subIdx: number, field: keyof ServiceSubPackageFormData, value: any) => void;
    onRemove: (pkgIdx: number, subIdx: number) => void;
}) {
    return (
        <div className="rounded-lg border border-dashed bg-muted/30">

            {/* ── Header row ── */}
            <div className="flex items-center gap-2 p-3">
                <button
                    type="button"
                    onClick={() => onToggle(subIdx)}
                    className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                >
                    {expanded
                        ? <ChevronDown className="h-4 w-4" />
                        : <ChevronRight className="h-4 w-4" />}
                </button>

                <Input
                    value={sub.title}
                    onChange={e => onUpdate(pkgIdx, subIdx, 'title', e.target.value)}
                    placeholder="Sub-package title (e.g. Starter, Professional)"
                    className="flex-1 h-8 text-sm"
                />

                {/* Always-visible: published toggle */}
                <div className="flex items-center gap-1.5 shrink-0">
                    <Switch
                        checked={sub.published_on_site}
                        onCheckedChange={val => onUpdate(pkgIdx, subIdx, 'published_on_site', val)}
                        id={`sub-pub-${pkgIdx}-${subIdx}`}
                    />
                    <Label
                        htmlFor={`sub-pub-${pkgIdx}-${subIdx}`}
                        className={cn('text-xs font-semibold cursor-pointer w-10',
                            sub.published_on_site ? 'text-green-600' : 'text-muted-foreground')}
                    >
                        {sub.published_on_site ? 'Live' : 'Hidden'}
                    </Label>
                </div>

                <Button
                    type="button" variant="ghost" size="sm"
                    onClick={() => onRemove(pkgIdx, subIdx)}
                    className="text-destructive hover:text-destructive h-8 w-8 p-0 shrink-0"
                >
                    <Trash2 className="h-3.5 w-3.5" />
                </Button>
            </div>

            {/* Always-visible: website URL strip */}
            <div className="px-3 pb-2.5 flex items-center gap-2">
                <div className="relative flex-1">
                    <ExternalLink className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground pointer-events-none" />
                    <Input
                        value={sub.website_url}
                        onChange={e => onUpdate(pkgIdx, subIdx, 'website_url', e.target.value)}
                        placeholder="Website link (optional)"
                        type="url"
                        className="pl-7 h-7 text-xs"
                    />
                </div>
                {sub.website_url && (

                       <a href={sub.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary underline-offset-4 hover:underline inline-flex items-center gap-1 shrink-0"
                    >
                        <ExternalLink className="h-3 w-3" /> Open
                    </a>
                )}
            </div>

            {/* ── Expandable body ── */}
            {expanded && (
                <div className="border-t px-4 pb-4 pt-3 space-y-3">
                    <div>
                        <Label className="text-xs font-semibold mb-1.5 block">Short Description</Label>
                        <Textarea
                            value={sub.short_description}
                            onChange={e => onUpdate(pkgIdx, subIdx, 'short_description', e.target.value)}
                            placeholder="Brief description shown on the card..."
                            rows={2}
                            className="text-sm"
                        />
                    </div>

                    <div>
                        <Label className="text-xs font-semibold mb-1.5 block">
                            Full Description
                            <span className="ml-1.5 font-normal text-muted-foreground">(optional)</span>
                        </Label>
                        <RichTextEditor
                            value={sub.description}
                            onChange={v => onUpdate(pkgIdx, subIdx, 'description', v)}
                        />
                    </div>

                    {/* Features */}
                    <div>
                        <Label className="text-xs font-semibold mb-1.5 block">Features</Label>
                        <div className="space-y-1.5">
                            {sub.features.map((f, fi) => (
                                <div key={fi} className="flex gap-2">
                                    <Input
                                        value={f}
                                        onChange={e => {
                                            const features = [...sub.features];
                                            features[fi] = e.target.value;
                                            onUpdate(pkgIdx, subIdx, 'features', features);
                                        }}
                                        placeholder="Feature"
                                        className="h-8 text-sm"
                                    />
                                    <Button
                                        type="button" variant="ghost" size="sm"
                                        onClick={() => onUpdate(pkgIdx, subIdx, 'features',
                                            sub.features.filter((_, i) => i !== fi))}
                                        className="h-8 w-8 p-0"
                                    >
                                        <X className="h-3.5 w-3.5" />
                                    </Button>
                                </div>
                            ))}
                            <Button
                                type="button" variant="outline" size="sm"
                                onClick={() => onUpdate(pkgIdx, subIdx, 'features', [...sub.features, ''])}
                                className="gap-1.5 w-full h-8 text-xs"
                            >
                                <Plus className="h-3 w-3" /> Add Feature
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// ── Package Card — expanded state controlled by parent ServiceForm ─────────────

function PackageCard({ pkg, pkgIdx, expanded, onToggle, onUpdate, onRemove, onAddSub, onUpdateSub, onRemoveSub }: {
    pkg:         ServicePackageFormData;
    pkgIdx:      number;
    expanded:    boolean;               // ← controlled by parent
    onToggle:    (idx: number) => void; // ← accordion callback
    onUpdate:    (idx: number, field: keyof ServicePackageFormData, value: any) => void;
    onRemove:    (idx: number) => void;
    onAddSub:    (pkgIdx: number) => void;
    onUpdateSub: (pkgIdx: number, subIdx: number, field: keyof ServiceSubPackageFormData, value: any) => void;
    onRemoveSub: (pkgIdx: number, subIdx: number) => void;
}) {
    // Sub-package accordion: track which sub is open (-1 = none)
    const [openSubIdx, setOpenSubIdx] = useState<number | null>(null);

    const toggleSub = (subIdx: number) =>
        setOpenSubIdx(prev => (prev === subIdx ? null : subIdx));

    const addFeature    = () => onUpdate(pkgIdx, 'features', [...(pkg.features ?? []), '']);
    const updateFeature = (fi: number, value: string) => {
        const features = [...(pkg.features ?? [])];
        features[fi] = value;
        onUpdate(pkgIdx, 'features', features);
    };
    const removeFeature = (fi: number) =>
        onUpdate(pkgIdx, 'features', (pkg.features ?? []).filter((_, i) => i !== fi));

    return (
        <div className="rounded-lg border bg-card shadow-sm">

            {/* ── Header row ── */}
            <div className="flex items-center gap-3 px-4 py-3">
                <button
                    type="button"
                    onClick={() => onToggle(pkgIdx)}
                    className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                >
                    {expanded
                        ? <ChevronDown className="h-4 w-4" />
                        : <ChevronRight className="h-4 w-4" />}
                </button>

                <Input
                    value={pkg.title}
                    onChange={e => onUpdate(pkgIdx, 'title', e.target.value)}
                    placeholder="Package title (e.g. HR Compliance & Foundation Package)"
                    className="flex-1 font-semibold h-9"
                    onClick={e => e.stopPropagation()}
                />

                {(pkg.sub_packages?.length ?? 0) > 0 && (
                    <Badge variant="secondary" className="text-xs h-5 px-1.5 shrink-0">
                        <Layers className="h-3 w-3 mr-1" />
                        {pkg.sub_packages!.length}
                    </Badge>
                )}

                {/* Always-visible: published toggle */}
                <div className="flex items-center gap-1.5 shrink-0">
                    <Switch
                        checked={pkg.published_on_site}
                        onCheckedChange={val => onUpdate(pkgIdx, 'published_on_site', val)}
                        id={`pkg-pub-${pkgIdx}`}
                    />
                    <Label
                        htmlFor={`pkg-pub-${pkgIdx}`}
                        className={cn('text-xs font-semibold cursor-pointer w-10',
                            pkg.published_on_site ? 'text-green-600' : 'text-muted-foreground')}
                    >
                        {pkg.published_on_site ? 'Live' : 'Hidden'}
                    </Label>
                </div>

                <Button
                    type="button" variant="ghost" size="sm"
                    onClick={() => onRemove(pkgIdx)}
                    className="text-destructive hover:text-destructive h-9 w-9 p-0 shrink-0"
                >
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>

            {/* Always-visible: website URL strip */}
            <div className="px-4 pb-3 flex items-center gap-2">
                <div className="relative flex-1">
                    <ExternalLink className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
                    <Input
                        value={pkg.website_url}
                        onChange={e => onUpdate(pkgIdx, 'website_url', e.target.value)}
                        placeholder="Package website link (optional)"
                        type="url"
                        className="pl-8 h-8 text-sm"
                    />
                </div>
                {pkg.website_url && (

                       <a href={pkg.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary underline-offset-4 hover:underline inline-flex items-center gap-1 shrink-0"
                    >
                        <ExternalLink className="h-3 w-3" /> Open
                    </a>
                )}
            </div>

            {/* ── Expandable body ── */}
            {expanded && (
                <div className="border-t px-4 pb-4 pt-4 space-y-4">

                    <div>
                        <Label className="text-xs font-semibold mb-2 block">Card Description</Label>
                        <Textarea
                            value={pkg.short_description}
                            onChange={e => onUpdate(pkgIdx, 'short_description', e.target.value)}
                            placeholder="Brief description that appears in the card..."
                            rows={2}
                        />
                    </div>

                    <div>
                        <Label className="text-xs font-semibold mb-2 block">
                            Full Description
                            <span className="ml-1.5 font-normal text-muted-foreground">(optional)</span>
                        </Label>
                        <RichTextEditor
                            value={pkg.description}
                            onChange={v => onUpdate(pkgIdx, 'description', v)}
                        />
                    </div>

                    {/* Published on Site detailed row (mirrors the always-visible toggle) */}
                    <PublishRow
                        id={`pkg-pub-detail-${pkgIdx}`}
                        checked={pkg.published_on_site}
                        onChange={val => onUpdate(pkgIdx, 'published_on_site', val)}
                    />

                    {/* Features */}
                    <div>
                        <Label className="text-xs font-semibold mb-2 block">Features</Label>
                        <div className="space-y-2">
                            {pkg.features?.map((feature, fi) => (
                                <div key={fi} className="flex gap-2">
                                    <Input
                                        value={feature}
                                        onChange={e => updateFeature(fi, e.target.value)}
                                        placeholder="Feature name"
                                        className="text-sm"
                                    />
                                    <Button type="button" variant="ghost" size="sm" onClick={() => removeFeature(fi)}>
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}
                            <Button type="button" variant="outline" size="sm" onClick={addFeature} className="gap-1.5 w-full">
                                <Plus className="h-3.5 w-3.5" /> Add Feature
                            </Button>
                        </div>
                    </div>

                    {/* ── Sub-packages (accordion) ── */}
                    <div className="border-t pt-4">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <Layers className="h-3.5 w-3.5 text-muted-foreground" />
                                <span className="text-xs font-semibold">Sub-Packages</span>
                                <span className="text-xs text-muted-foreground">(optional)</span>
                                {(pkg.sub_packages?.length ?? 0) > 0 && (
                                    <Badge variant="secondary" className="text-xs h-5 px-1.5">
                                        {pkg.sub_packages!.length}
                                    </Badge>
                                )}
                            </div>
                            <Button
                                type="button" variant="outline" size="sm"
                                onClick={() => onAddSub(pkgIdx)}
                                className="gap-1.5 h-7 text-xs"
                            >
                                <Plus className="h-3 w-3" /> Add Sub-Package
                            </Button>
                        </div>

                        {(pkg.sub_packages?.length ?? 0) === 0 ? (
                            <p className="text-xs text-muted-foreground text-center py-2">
                                No sub-packages. Click "Add Sub-Package" to break this package into tiers.
                            </p>
                        ) : (
                            <div className="space-y-2">
                                {pkg.sub_packages!.map((sub, subIdx) => (
                                    <SubPackageCard
                                        key={subIdx}
                                        sub={sub}
                                        subIdx={subIdx}
                                        pkgIdx={pkgIdx}
                                        expanded={openSubIdx === subIdx}  // ← accordion
                                        onToggle={toggleSub}              // ← accordion
                                        onUpdate={onUpdateSub}
                                        onRemove={onRemoveSub}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

// ── Main Form ─────────────────────────────────────────────────────────────────

export default function ServiceForm({ mode, categories, tags, media, defaultValues = {} }: Props) {

    // Package accordion: track which package is open (null = none)
    const [openPkgIdx, setOpenPkgIdx] = useState<number | null>(null);

    const togglePkg = (idx: number) =>
        setOpenPkgIdx(prev => (prev === idx ? null : idx));

    const normaliseSubPackages = (subs?: any[]): ServiceSubPackageFormData[] =>
        (subs ?? []).map(s => ({
            ...s,
            website_url:       s.website_url       ?? '',
            published_on_site: s.published_on_site ?? true,
            features:          s.features          ?? [],
        }));

    const normalisePackages = (pkgs?: any[]): ServicePackageFormData[] =>
        (pkgs ?? []).map(p => ({
            ...p,
            website_url:       p.website_url       ?? '',
            published_on_site: p.published_on_site ?? true,
            features:          p.features          ?? [],
            sub_packages:      normaliseSubPackages(p.sub_packages),
        }));

    const { data, setData, post, patch, processing, errors } = useForm<ServiceFormData>({
        title:             defaultValues.title             ?? '',
        slug:              defaultValues.slug              ?? '',
        short_description: defaultValues.short_description ?? '',
        description:       defaultValues.description       ?? '',
        icon:              defaultValues.icon              ?? '',
        website_url:       defaultValues.website_url       ?? '',
        website_logo_id:   defaultValues.website_logo_id   ? String(defaultValues.website_logo_id) : '',
        image_id:          defaultValues.image_id          ? String(defaultValues.image_id) : '',
        order_number:      defaultValues.order_number      !== undefined ? String(defaultValues.order_number) : '0',
        status:            defaultValues.status            ?? 'draft',
        category_ids:      defaultValues.category_ids      ?? [],
        tag_ids:           defaultValues.tag_ids            ?? [],
        media_ids:         defaultValues.media_ids          ?? [],
        workflow_notes:    '',
        packages:          normalisePackages(defaultValues.packages),
    });

    const handleTitleChange = (val: string) => {
        setData('title', val);
        if (mode === 'create' && !data.slug) {
            setData('slug', val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
        }
    };

    const toggleId = (field: 'category_ids' | 'tag_ids' | 'media_ids', id: number) => {
        const current = data[field] as number[];
        setData(field, current.includes(id) ? current.filter(i => i !== id) : [...current, id]);
    };

    const renderCategories = (cats: Category[], depth = 0): React.ReactNode =>
        cats.map(cat => (
            <div key={cat.id}>
                <label className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 hover:bg-muted/50">
                    <Checkbox
                        checked={data.category_ids.includes(cat.id)}
                        onCheckedChange={() => toggleId('category_ids', cat.id)}
                    />
                    <span className="text-sm" style={{ paddingLeft: depth * 12 }}>{cat.name}</span>
                </label>
                {cat.children && renderCategories(cat.children, depth + 1)}
            </div>
        ));

    const selectedTags  = tags.filter(t => data.tag_ids.includes(t.id));
    const selectedImage = media.find(m => String(m.id) === data.image_id);

    // ── Package helpers ───────────────────────────────────────────────────────

    const updatePackages = (next: ServicePackageFormData[]) => setData('packages', next);

    const addPackage = () => {
        const newIdx = data.packages.length;
        updatePackages([
            ...data.packages,
            { title: '', short_description: '', description: '', website_url: '', features: [], published_on_site: true, sub_packages: [] },
        ]);
        // Auto-open the newly added package
        setOpenPkgIdx(newIdx);
    };

    const removePackage = (idx: number) => {
        updatePackages(data.packages.filter((_, i) => i !== idx));
        // Close if the removed package was open
        setOpenPkgIdx(prev => (prev === idx ? null : prev !== null && prev > idx ? prev - 1 : prev));
    };

    const updatePackage = (idx: number, field: keyof ServicePackageFormData, value: any) => {
        const next = [...data.packages];
        next[idx] = { ...next[idx], [field]: value };
        updatePackages(next);
    };

    // ── Sub-package helpers ───────────────────────────────────────────────────

    const addSubPackage = (pkgIdx: number) => {
        const next = [...data.packages];
        next[pkgIdx] = {
            ...next[pkgIdx],
            sub_packages: [
                ...(next[pkgIdx].sub_packages ?? []),
                { title: '', short_description: '', description: '', website_url: '', features: [], published_on_site: true },
            ],
        };
        updatePackages(next);
    };

    const updateSubPackage = (pkgIdx: number, subIdx: number, field: keyof ServiceSubPackageFormData, value: any) => {
        const next = [...data.packages];
        const subs = [...(next[pkgIdx].sub_packages ?? [])];
        subs[subIdx] = { ...subs[subIdx], [field]: value };
        next[pkgIdx] = { ...next[pkgIdx], sub_packages: subs };
        updatePackages(next);
    };

    const removeSubPackage = (pkgIdx: number, subIdx: number) => {
        const next = [...data.packages];
        next[pkgIdx] = {
            ...next[pkgIdx],
            sub_packages: (next[pkgIdx].sub_packages ?? []).filter((_, i) => i !== subIdx),
        };
        updatePackages(next);
    };

    // ── Submit ────────────────────────────────────────────────────────────────

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        mode === 'create' ? post('/services') : patch(`/services/${defaultValues.id}`);
    };

    const getFirstError = (fieldName: string): string | undefined => {
        const err = errors[fieldName as keyof typeof errors];
        if (Array.isArray(err)) return err[0];
        if (typeof err === 'string') return err;
        return undefined;
    };

    // ── Render ────────────────────────────────────────────────────────────────

    return (
        <form onSubmit={submit} className="grid gap-6 lg:grid-cols-3">

            {/* ── Left ─────────────────────────────────────────────────── */}
            <div className="space-y-6 lg:col-span-2">

                <Section title="Service Details">
                    <div className="grid gap-4">
                        <Field label="Service Title" required error={getFirstError('title')}>
                            <Input
                                value={data.title}
                                onChange={e => handleTitleChange(e.target.value)}
                                placeholder="e.g. Human Resource Management"
                                autoFocus
                                className={cn(errors.title && 'border-destructive')}
                            />
                        </Field>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="URL Slug" required error={getFirstError('slug')} hint="vmg.co.tz/services/your-slug">
                                <div className="flex items-center rounded-md border bg-muted/30 px-3 text-sm text-muted-foreground">
                                    <span className="pr-1 shrink-0">/services/</span>
                                    <input
                                        value={data.slug}
                                        onChange={e => setData('slug', e.target.value)}
                                        placeholder="human-resource-management"
                                        className="w-full bg-transparent py-2 outline-none"
                                    />
                                </div>
                            </Field>
                            <Field label="Order Number" error={getFirstError('order_number')} hint="Display order on listing page">
                                <Input
                                    type="number"
                                    value={data.order_number}
                                    onChange={e => setData('order_number', e.target.value)}
                                    min="0"
                                />
                            </Field>
                        </div>

                        <Field
                            label="Short Description" required
                            error={getFirstError('short_description')}
                            hint="Brief summary (shows in listings) - max 500 characters"
                        >
                            <Textarea
                                value={data.short_description}
                                onChange={e => setData('short_description', e.target.value)}
                                placeholder="A short, compelling description..."
                                rows={2} maxLength={500}
                                className={cn(errors.short_description && 'border-destructive')}
                            />
                            <p className="text-xs text-muted-foreground">{data.short_description.length}/500 characters</p>
                        </Field>

                        <Field
                            label="Service Description" required
                            error={getFirstError('description')}
                            hint="Overview/introduction of the service (HTML supported)."
                        >
                            <RichTextEditor value={data.description} onChange={v => setData('description', v)} />
                            {!data.description && (
                                <p className="text-xs text-destructive flex items-center gap-1">
                                    <AlertCircle className="h-3 w-3" /> Please provide a service description
                                </p>
                            )}
                        </Field>
                    </div>
                </Section>

                {/* ── Packages ─────────────────────────────────────────── */}
                <Section title="Service Packages">
                    <p className="mb-4 text-sm text-muted-foreground">
                        Each package can optionally have sub-packages. Click the arrow to expand and edit details.
                    </p>

                    {data.packages.length === 0 ? (
                        <div className="rounded-lg border border-dashed p-6 text-center">
                            <p className="text-sm text-muted-foreground mb-3">No packages yet.</p>
                            <Button type="button" variant="outline" size="sm" onClick={addPackage} className="gap-1.5">
                                <Plus className="h-3.5 w-3.5" /> Add Package
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {data.packages.map((pkg, pkgIdx) => (
                                <PackageCard
                                    key={pkgIdx}
                                    pkg={pkg}
                                    pkgIdx={pkgIdx}
                                    expanded={openPkgIdx === pkgIdx}  // ← accordion
                                    onToggle={togglePkg}              // ← accordion
                                    onUpdate={updatePackage}
                                    onRemove={removePackage}
                                    onAddSub={addSubPackage}
                                    onUpdateSub={updateSubPackage}
                                    onRemoveSub={removeSubPackage}
                                />
                            ))}

                            <Button type="button" variant="outline" onClick={addPackage} className="w-full gap-1.5 mt-2">
                                <Plus className="h-4 w-4" /> Add Another Package
                            </Button>
                        </div>
                    )}
                </Section>
            </div>

            {/* ── Right sidebar ─────────────────────────────────────────── */}
            <div className="space-y-6">

                <Section title="Publish">
                    <div className="grid gap-4">
                        <Field label="Status" required error={getFirstError('status')}>
                            <Select value={data.status} onValueChange={v => setData('status', v)}>
                                <SelectTrigger className={cn(errors.status && 'border-destructive')}>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="draft">Draft</SelectItem>
                                    <SelectItem value="review">In Review</SelectItem>
                                    <SelectItem value="published">Published</SelectItem>
                                    <SelectItem value="archived">Archived</SelectItem>
                                </SelectContent>
                            </Select>
                        </Field>

                        <Field label="Icon" error={getFirstError('icon')} hint="Emoji or icon class (e.g. 🏢 or fa-users)">
                            <Input value={data.icon} onChange={e => setData('icon', e.target.value)} placeholder="🏢" />
                        </Field>

                        <Field label="Service Website URL" error={getFirstError('website_url')} hint="External website (optional)">
                            <div className="relative">
                                <ExternalLink className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
                                <Input
                                    value={data.website_url}
                                    onChange={e => setData('website_url', e.target.value)}
                                    placeholder="https://example.com"
                                    type="url"
                                    className={cn('pl-9', errors.website_url && 'border-destructive')}
                                />
                            </div>
                            {data.website_url && (
                                <a href={data.website_url} target="_blank" rel="noopener noreferrer"
                                    className="text-xs text-primary underline-offset-4 hover:underline inline-flex items-center gap-1">
                                    <ExternalLink className="h-3 w-3" /> Preview link
                                </a>
                            )}
                        </Field>
                    </div>

                    <div className="mt-4 flex gap-2">
                        <Button type="button" variant="outline" className="flex-1"
                            onClick={() => window.history.back()}>Cancel</Button>
                        <Button type="submit" disabled={processing} className="flex-1 gap-2">
                            {processing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                            {mode === 'create' ? 'Create' : 'Update'}
                        </Button>
                    </div>
                </Section>

                {/* Featured Image */}
                <Section title="Featured Image">
                    {selectedImage && (
                        <div className="mb-3 relative">
                            <img src={`/storage/${selectedImage.filename}`}
                                alt={selectedImage.alt_text ?? selectedImage.original_name}
                                className="w-full rounded-lg object-cover" style={{ maxHeight: 140 }} />
                            <button type="button" onClick={() => setData('image_id', '')}
                                className="absolute right-2 top-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70">
                                <X className="h-3 w-3" />
                            </button>
                        </div>
                    )}
                    <div className="max-h-48 overflow-y-auto space-y-1">
                        {media.filter(m => m.mime_type.startsWith('image/')).map(m => (
                            <label key={m.id} className={cn(
                                'flex cursor-pointer items-center gap-2 rounded-lg border p-2 transition-colors',
                                data.image_id === String(m.id) ? 'border-primary bg-primary/5' : 'hover:bg-muted/50')}>
                                <input type="radio" name="image_id" value={m.id}
                                    checked={data.image_id === String(m.id)}
                                    onChange={() => setData('image_id', String(m.id))}
                                    className="accent-primary" />
                                <img src={`/storage/${m.filename}`} alt={m.alt_text ?? m.original_name}
                                    className="h-8 w-8 rounded object-cover" />
                                <span className="min-w-0 truncate text-xs">{m.original_name}</span>
                            </label>
                        ))}
                        {media.filter(m => m.mime_type.startsWith('image/')).length === 0 && (
                            <p className="text-xs text-muted-foreground">No images uploaded yet.</p>
                        )}
                    </div>
                </Section>

                {/* Website CTA Logo */}
                <Section title="Website CTA Logo">
                    <p className="text-xs text-muted-foreground mb-3">
                        Logo shown in the "Visit Website" call-to-action card on the service detail page.
                    </p>
                    {data.website_logo_id && (() => {
                        const logo = media.find(m => String(m.id) === data.website_logo_id);
                        return logo ? (
                            <div className="mb-3 relative inline-block">
                                <img src={`/storage/${logo.filename}`} alt={logo.alt_text ?? logo.original_name}
                                    className="h-14 rounded-lg object-contain border p-1 bg-white" />
                                <button type="button" onClick={() => setData('website_logo_id', '')}
                                    className="absolute -right-2 -top-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70">
                                    <X className="h-3 w-3" />
                                </button>
                            </div>
                        ) : null;
                    })()}
                    <div className="max-h-40 overflow-y-auto space-y-1">
                        {media.filter(m => m.mime_type.startsWith('image/')).map(m => (
                            <label key={m.id} className={cn(
                                'flex cursor-pointer items-center gap-2 rounded-lg border p-2 transition-colors',
                                data.website_logo_id === String(m.id) ? 'border-primary bg-primary/5' : 'hover:bg-muted/50')}>
                                <input type="radio" name="website_logo_id" value={m.id}
                                    checked={data.website_logo_id === String(m.id)}
                                    onChange={() => setData('website_logo_id', String(m.id))}
                                    className="accent-primary" />
                                <img src={`/storage/${m.filename}`} alt={m.alt_text ?? m.original_name}
                                    className="h-8 w-8 rounded object-contain bg-muted p-0.5" />
                                <span className="min-w-0 truncate text-xs">{m.original_name}</span>
                            </label>
                        ))}
                    </div>
                </Section>

                {/* Categories */}
                <Section title="Categories">
                    {categories.length === 0
                        ? <p className="text-xs text-muted-foreground">No categories yet.</p>
                        : <div className="max-h-48 overflow-y-auto">{renderCategories(categories)}</div>}
                </Section>

                {/* Tags */}
                <Section title="Tags">
                    {selectedTags.length > 0 && (
                        <div className="mb-3 flex flex-wrap gap-1.5">
                            {selectedTags.map(t => (
                                <Badge key={t.id} variant="secondary" className="gap-1 pr-1">
                                    {t.name}
                                    <button type="button" onClick={() => toggleId('tag_ids', t.id)}>
                                        <X className="h-3 w-3" />
                                    </button>
                                </Badge>
                            ))}
                        </div>
                    )}
                    <div className="max-h-40 overflow-y-auto space-y-0.5">
                        {tags.map(tag => (
                            <label key={tag.id}
                                className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 hover:bg-muted/50">
                                <Checkbox checked={data.tag_ids.includes(tag.id)}
                                    onCheckedChange={() => toggleId('tag_ids', tag.id)} />
                                <span className="text-sm">{tag.name}</span>
                            </label>
                        ))}
                    </div>
                </Section>

                {/* Gallery Media */}
                <Section title="Gallery Media">
                    <div className="max-h-48 overflow-y-auto space-y-1">
                        {media.length === 0
                            ? <p className="text-xs text-muted-foreground">No media uploaded yet.</p>
                            : media.map(m => {
                                const isImage  = m.mime_type.startsWith('image/');
                                const selected = data.media_ids.includes(m.id);
                                return (
                                    <label key={m.id} className={cn(
                                        'flex cursor-pointer items-center gap-2 rounded-lg border p-2 transition-colors',
                                        selected ? 'border-primary bg-primary/5' : 'hover:bg-muted/50')}>
                                        <Checkbox checked={selected}
                                            onCheckedChange={() => toggleId('media_ids', m.id)} />
                                        {isImage && (
                                            <img src={`/storage/${m.filename}`} alt={m.alt_text ?? m.original_name}
                                                className="h-8 w-8 rounded object-cover" />
                                        )}
                                        <span className="min-w-0 truncate text-xs">{m.original_name}</span>
                                    </label>
                                );
                            })}
                    </div>
                </Section>
            </div>
        </form>
    );
}
