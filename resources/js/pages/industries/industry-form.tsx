import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Image as ImageIcon, Loader2, Save, Shapes, X, Images } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type MediaItem = {
    id:            number;
    filename:      string | null;
    original_name: string;
    alt_text:      string | null;
    mime_type:     string;
    is_icon:       boolean;
    icon_class:    string | null;
};

type IndustryFormData = {
    name:        string;
    slug:        string;
    description: string;
    media_id:    string;
    media_ids:   number[];
    sort_order:  string;
    is_active:   boolean;
};

type DefaultValues = Partial<{
    id:          number;
    name:        string;
    slug:        string;
    description: string;
    media_id:    number;
    media_ids:   number[];
    sort_order:  number;
    is_active:   boolean;
}>;

// ── Helpers ───────────────────────────────────────────────────────────────────

function Field({ label, error, hint, required, children }: {
    label: string; error?: string; hint?: string; required?: boolean; children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <Label className={cn('text-sm font-medium', error && 'text-destructive')}>
                {label}{required && <span className="text-destructive"> *</span>}
            </Label>
            {children}
            {hint  && !error && <p className="text-xs text-muted-foreground">{hint}</p>}
            {error && <p className="text-xs text-destructive">{error}</p>}
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

// ── Featured Media Picker ─────────────────────────────────────────────────────

function MediaPicker({ media, value, onChange }: {
    media:    MediaItem[];
    value:    string;
    onChange: (id: string) => void;
}) {
    const [tab, setTab] = useState<'images' | 'icons'>('images');

    const images  = media.filter(m => !m.is_icon && m.mime_type.startsWith('image/'));
    const icons   = media.filter(m => m.is_icon);
    const selected = media.find(m => String(m.id) === value) ?? null;

    return (
        <div className="space-y-3">
            {selected && (
                <div className="relative flex items-center gap-3 rounded-lg border bg-muted/30 p-3">
                    {selected.is_icon ? (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <i className={`${selected.icon_class} text-2xl text-primary`} />
                        </div>
                    ) : (
                        <img src={`/storage/${selected.filename}`} alt={selected.alt_text ?? selected.original_name}
                            className="h-12 w-12 shrink-0 rounded-lg object-cover" />
                    )}
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{selected.original_name}</p>
                        <p className="text-xs text-muted-foreground">
                            {selected.is_icon ? selected.icon_class : selected.mime_type}
                        </p>
                    </div>
                    <button type="button" onClick={() => onChange('')}
                        className="shrink-0 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-destructive transition-colors">
                        <X className="h-4 w-4" />
                    </button>
                </div>
            )}

            <div className="flex rounded-lg border p-1 bg-muted/30 gap-1">
                {(['images', 'icons'] as const).map(t => (
                    <button key={t} type="button" onClick={() => setTab(t)}
                        className={cn('flex flex-1 items-center justify-center gap-1.5 rounded-md py-1.5 text-xs font-medium transition-colors',
                            tab === t ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground')}>
                        {t === 'images' ? <ImageIcon className="h-3.5 w-3.5" /> : <Shapes className="h-3.5 w-3.5" />}
                        {t === 'images' ? `Images (${images.length})` : `Icons (${icons.length})`}
                    </button>
                ))}
            </div>

            {tab === 'images' && (
                <div className="max-h-48 overflow-y-auto space-y-1 pr-1">
                    {images.length === 0
                        ? <p className="py-4 text-center text-xs text-muted-foreground">No images uploaded yet.</p>
                        : images.map(m => (
                            <label key={m.id} className={cn('flex cursor-pointer items-center gap-2 rounded-lg border p-2 transition-colors',
                                value === String(m.id) ? 'border-primary bg-primary/5' : 'hover:bg-muted/50')}>
                                <input type="radio" name="media_id" value={m.id}
                                    checked={value === String(m.id)} onChange={() => onChange(String(m.id))} className="accent-primary" />
                                <img src={`/storage/${m.filename}`} alt={m.alt_text ?? m.original_name}
                                    className="h-8 w-8 rounded object-cover shrink-0" />
                                <span className="min-w-0 truncate text-xs">{m.original_name}</span>
                            </label>
                        ))
                    }
                </div>
            )}

            {tab === 'icons' && (
                <div className="max-h-48 overflow-y-auto pr-1">
                    {icons.length === 0
                        ? <p className="py-4 text-center text-xs text-muted-foreground">No icons added yet.</p>
                        : (
                            <div className="grid grid-cols-5 gap-1.5">
                                {icons.map(m => (
                                    <button key={m.id} type="button"
                                        onClick={() => onChange(value === String(m.id) ? '' : String(m.id))}
                                        title={m.icon_class ?? m.original_name}
                                        className={cn('flex flex-col items-center justify-center gap-1 rounded-lg border p-2.5 transition-all',
                                            'hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                                            value === String(m.id) ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-transparent hover:border-muted')}>
                                        <i className={`${m.icon_class} text-xl text-foreground`} />
                                        <span className="w-full truncate text-center text-[10px] leading-tight text-muted-foreground">
                                            {m.icon_class?.replace('ri-', '').replace('-line', '').replace('-fill', '')}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        )
                    }
                </div>
            )}
        </div>
    );
}

// ── Gallery Picker ────────────────────────────────────────────────────────────

function GalleryPicker({ media, value, onChange }: {
    media:    MediaItem[];
    value:    number[];
    onChange: (ids: number[]) => void;
}) {
    const images = media.filter(m => !m.is_icon && m.mime_type.startsWith('image/'));

    const toggle = (id: number) => {
        onChange(value.includes(id) ? value.filter(v => v !== id) : [...value, id]);
    };

    return (
        <div className="space-y-2">
            {value.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                    {value.map(id => {
                        const m = media.find(m => m.id === id);
                        if (!m) return null;
                        return (
                            <div key={id} className="relative group">
                                <img src={`/storage/${m.filename}`} alt={m.original_name}
                                    className="h-16 w-16 rounded-lg object-cover border border-primary" />
                                <button type="button" onClick={() => toggle(id)}
                                    className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-destructive text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <X className="h-3 w-3" />
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}

            <div className="max-h-48 overflow-y-auto space-y-1 pr-1">
                {images.length === 0
                    ? <p className="py-4 text-center text-xs text-muted-foreground">No images available for gallery.</p>
                    : images.map(m => (
                        <label key={m.id} className={cn('flex cursor-pointer items-center gap-2 rounded-lg border p-2 transition-colors',
                            value.includes(m.id) ? 'border-primary bg-primary/5' : 'hover:bg-muted/50')}>
                            <input type="checkbox" checked={value.includes(m.id)} onChange={() => toggle(m.id)} className="accent-primary" />
                            <img src={`/storage/${m.filename}`} alt={m.alt_text ?? m.original_name}
                                className="h-8 w-8 rounded object-cover shrink-0" />
                            <span className="min-w-0 truncate text-xs">{m.original_name}</span>
                        </label>
                    ))
                }
            </div>
            <p className="text-xs text-muted-foreground">{value.length} image{value.length !== 1 ? 's' : ''} selected</p>
        </div>
    );
}

// ── Main Form ─────────────────────────────────────────────────────────────────

export default function IndustryForm({ mode, media, defaultValues = {} }: {
    mode:           'create' | 'edit';
    media:          MediaItem[];
    defaultValues?: DefaultValues;
}) {
    const { data, setData, post, patch, processing, errors } = useForm<IndustryFormData>({
        name:        defaultValues.name        ?? '',
        slug:        defaultValues.slug        ?? '',
        description: defaultValues.description ?? '',
        media_id:    defaultValues.media_id    ? String(defaultValues.media_id) : '',
        media_ids:   defaultValues.media_ids   ?? [],
        sort_order:  defaultValues.sort_order  !== undefined ? String(defaultValues.sort_order) : '0',
        is_active:   defaultValues.is_active   ?? true,
    });

    const handleNameChange = (val: string) => {
        setData('name', val);
        if (mode === 'create' && !data.slug) {
            setData('slug', val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
        }
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        mode === 'create' ? post('/industries') : patch(`/industries/${defaultValues.id}`);
    };

    return (
        <form onSubmit={submit} className="grid gap-6 lg:grid-cols-3">

            {/* ── Left ── */}
            <div className="space-y-6 lg:col-span-2">
                <Section title="Industry Details">
                    <div className="grid gap-4">
                        <Field label="Industry Name" required error={errors.name}>
                            <Input value={data.name} onChange={e => handleNameChange(e.target.value)}
                                placeholder="e.g. Financial Services" autoFocus />
                        </Field>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="URL Slug" required error={errors.slug} hint="Used in the URL: /industries/your-slug">
                                <div className="flex items-center rounded-md border bg-muted/30 px-3 text-sm text-muted-foreground">
                                    <span className="pr-1 shrink-0">/industries/</span>
                                    <input value={data.slug} onChange={e => setData('slug', e.target.value)}
                                        placeholder="financial-services" className="flex-1 bg-transparent py-2 outline-none" />
                                </div>
                            </Field>
                            <Field label="Display Order" error={errors.sort_order} hint="Lower number appears first.">
                                <Input type="number" min={0} value={data.sort_order}
                                    onChange={e => setData('sort_order', e.target.value)} placeholder="0" />
                            </Field>
                        </div>

                        <Field label="Description" error={errors.description}
                            hint="First ~120 characters shown on card. Full text on detail page.">
                            <Textarea value={data.description} onChange={e => setData('description', e.target.value)}
                                placeholder="Describe this industry…" rows={6} maxLength={2000} />
                            <p className="text-right text-xs text-muted-foreground">{data.description.length}/2000</p>
                        </Field>
                    </div>
                </Section>

                {/* ✅ Gallery */}
                <Section title="Gallery Images">
                    <p className="text-xs text-muted-foreground mb-3">
                        These images appear on the industry detail page.
                    </p>
                    <GalleryPicker
                        media={media}
                        value={data.media_ids}
                        onChange={ids => setData('media_ids', ids)}
                    />
                </Section>
            </div>

            {/* ── Right ── */}
            <div className="space-y-6">
                <Section title="Settings">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="text-sm font-medium">Active</p>
                            <p className="text-xs text-muted-foreground">Show this industry on the website</p>
                        </div>
                        <Switch checked={data.is_active} onCheckedChange={v => setData('is_active', v)} />
                    </div>
                    <div className="mt-6 flex gap-2">
                        <Button type="button" variant="outline" className="flex-1" onClick={() => window.history.back()}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing} className="flex-1 gap-2">
                            {processing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                            {mode === 'create' ? 'Create' : 'Update'}
                        </Button>
                    </div>
                </Section>

                <Section title="Featured Image / Icon">
                    <MediaPicker media={media} value={data.media_id} onChange={id => setData('media_id', id)} />
                    {errors.media_id && <p className="mt-1.5 text-xs text-destructive">{errors.media_id}</p>}
                </Section>
            </div>
        </form>
    );
}
