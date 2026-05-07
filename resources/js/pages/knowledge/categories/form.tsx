import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { Image as ImageIcon, Loader2, Save, Shapes, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

type MediaItem = {
    id: number; filename: string | null; original_name: string;
    alt_text: string | null; mime_type: string; is_icon: boolean; icon_class: string | null;
};
type ParentOption = { id: number; name: string; slug: string };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</h2>
            {children}
        </div>
    );
}

function Field({ label, error, hint, required, children }: {
    label: string; error?: string; hint?: string; required?: boolean; children: React.ReactNode;
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

function MediaPicker({ media, value, onChange }: {
    media: MediaItem[]; value: string; onChange: (id: string) => void;
}) {
    const [tab, setTab] = useState<'images' | 'icons'>('images');
    const images  = media.filter(m => !m.is_icon && m.mime_type.startsWith('image/'));
    const icons   = media.filter(m => m.is_icon);
    const selected = media.find(m => String(m.id) === value) ?? null;

    return (
        <div className="space-y-3">
            {selected && (
                <div className="flex items-center gap-3 rounded-lg border bg-muted/30 p-3">
                    {selected.is_icon
                        ? <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><i className={`${selected.icon_class} text-xl text-primary`} /></div>
                        : <img src={`/storage/${selected.filename}`} className="h-10 w-10 rounded-lg object-cover" alt="" />}
                    <div className="flex-1 min-w-0">
                        <p className="truncate text-sm font-medium">{selected.original_name}</p>
                    </div>
                    <button type="button" onClick={() => onChange('')} className="text-muted-foreground hover:text-destructive">
                        <X className="h-4 w-4" />
                    </button>
                </div>
            )}
            <div className="flex rounded-lg border p-1 bg-muted/30 gap-1">
                {(['images', 'icons'] as const).map(t => (
                    <button key={t} type="button" onClick={() => setTab(t)}
                        className={cn('flex flex-1 items-center justify-center gap-1.5 rounded-md py-1.5 text-xs font-medium transition-colors',
                            tab === t ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground')}>
                        {t === 'images' ? <ImageIcon className="h-3.5 w-3.5" /> : <Shapes className="h-3.5 w-3.5" />}
                        {t === 'images' ? `Images (${images.length})` : `Icons (${icons.length})`}
                    </button>
                ))}
            </div>
            {tab === 'images' && (
                <div className="max-h-48 overflow-y-auto space-y-1 pr-1">
                    {images.length === 0
                        ? <p className="py-4 text-center text-xs text-muted-foreground">No images yet.</p>
                        : images.map(m => (
                            <label key={m.id} className={cn('flex cursor-pointer items-center gap-2 rounded-lg border p-2',
                                value === String(m.id) ? 'border-primary bg-primary/5' : 'hover:bg-muted/50')}>
                                <input type="radio" name="cat_media_id" checked={value === String(m.id)} onChange={() => onChange(String(m.id))} className="accent-primary" />
                                <img src={`/storage/${m.filename}`} className="h-7 w-7 rounded object-cover shrink-0" alt="" />
                                <span className="truncate text-xs">{m.original_name}</span>
                            </label>
                        ))}
                </div>
            )}
            {tab === 'icons' && (
                <div className="max-h-48 overflow-y-auto pr-1">
                    {icons.length === 0
                        ? <p className="py-4 text-center text-xs text-muted-foreground">No icons yet.</p>
                        : <div className="grid grid-cols-5 gap-1.5">
                            {icons.map(m => (
                                <button key={m.id} type="button" onClick={() => onChange(value === String(m.id) ? '' : String(m.id))}
                                    className={cn('flex flex-col items-center gap-1 rounded-lg border p-2.5 transition-all hover:bg-primary/10',
                                        value === String(m.id) ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-transparent')}>
                                    <i className={`${m.icon_class} text-xl`} />
                                    <span className="w-full truncate text-center text-[9px] text-muted-foreground">
                                        {m.icon_class?.replace('ri-', '').replace(/-line|-fill/, '')}
                                    </span>
                                </button>
                            ))}
                        </div>}
                </div>
            )}
        </div>
    );
}

type DefaultValues = Partial<{
    id: number; name: string; slug: string; description: string;
    parent_id: number; media_id: number; sort_order: number; is_active: boolean;
}>;

export default function CategoryForm({ mode, media, parents, defaultValues = {} }: {
    mode: 'create' | 'edit'; media: MediaItem[]; parents: ParentOption[]; defaultValues?: DefaultValues;
}) {
    const form = useForm({
        name:        defaultValues.name        ?? '',
        slug:        defaultValues.slug        ?? '',
        description: defaultValues.description ?? '',
        parent_id:   defaultValues.parent_id   ? String(defaultValues.parent_id) : 'none',
        media_id:    defaultValues.media_id    ? String(defaultValues.media_id)  : '',
        sort_order:  String(defaultValues.sort_order ?? 0),
        is_active:   defaultValues.is_active   ?? true,
    });

    const { data, setData, post, patch, processing, errors } = form;

    // ✅ Transform cleans up values right before the request is sent.
    // This converts 'none' → null and '' → null so Laravel validation passes.
    form.transform(d => ({
        ...d,
        parent_id:  d.parent_id === 'none' || d.parent_id === '' ? null : d.parent_id,
        media_id:   d.media_id  === ''     ? null : d.media_id,
        sort_order: Number(d.sort_order) || 0,
    }));

    const handleName = (val: string) => {
        setData('name', val);
        if (mode === 'create' && !data.slug) {
            setData('slug', val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
        }
    };

    // ✅ Both create and edit now just call post/patch directly —
    // transform() handles all the data cleanup automatically.
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        mode === 'create'
            ? post('/knowledge/categories')
            : patch(`/knowledge/categories/${defaultValues.id}`);
    };

    return (
        <form onSubmit={submit} className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
                <Section title="Category Details">
                    <div className="grid gap-4">
                        <Field label="Name" required error={errors.name}>
                            <Input value={data.name} onChange={e => handleName(e.target.value)} placeholder="e.g. Tools and Samples" autoFocus />
                        </Field>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="URL Slug" required error={errors.slug} hint="/knowledge/your-slug">
                                <div className="flex items-center rounded-md border bg-muted/30 px-3 text-sm text-muted-foreground">
                                    <span className="pr-1 shrink-0">/knowledge/</span>
                                    <input value={data.slug} onChange={e => setData('slug', e.target.value)}
                                        placeholder="tools-and-samples" className="flex-1 bg-transparent py-2 outline-none" />
                                </div>
                            </Field>
                            <Field label="Sort Order" hint="Lower appears first.">
                                <Input type="number" min={0} value={data.sort_order} onChange={e => setData('sort_order', e.target.value)} />
                            </Field>
                        </div>
                        <Field label="Parent Category" hint="Leave empty for top-level category.">
                            <Select value={data.parent_id} onValueChange={v => setData('parent_id', v)}>
                                <SelectTrigger><SelectValue placeholder="Top-level" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="none">— Top-level (no parent) —</SelectItem>
                                    {parents.map(p => (
                                        <SelectItem key={p.id} value={String(p.id)}>{p.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Field>
                        <Field label="Description" hint="Shown on the category page.">
                            <Textarea value={data.description} onChange={e => setData('description', e.target.value)}
                                placeholder="Describe this category…" rows={4} maxLength={2000} />
                        </Field>
                    </div>
                </Section>
            </div>

            <div className="space-y-6">
                <Section title="Settings">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium">Active</p>
                            <p className="text-xs text-muted-foreground">Show on website</p>
                        </div>
                        <Switch checked={data.is_active} onCheckedChange={v => setData('is_active', v)} />
                    </div>
                    <div className="mt-6 flex gap-2">
                        <Button type="button" variant="outline" className="flex-1" onClick={() => window.history.back()}>Cancel</Button>
                        <Button type="submit" disabled={processing} className="flex-1 gap-2">
                            {processing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                            {mode === 'create' ? 'Create' : 'Update'}
                        </Button>
                    </div>
                </Section>

                <Section title="Icon / Image">
                    <MediaPicker media={media} value={data.media_id} onChange={id => setData('media_id', id)} />
                </Section>
            </div>
        </form>
    );
}
