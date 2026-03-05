import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { Image as ImageIcon, Loader2, Save, Star, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

type MediaItem = {
    id: number; filename: string | null; original_name: string;
    alt_text: string | null; mime_type: string; is_icon: boolean; icon_class: string | null;
};
type CategoryOption = { id: number; name: string; slug: string; parent_id: number | null };

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

function FeaturedImagePicker({ media, value, onChange }: {
    media: MediaItem[]; value: string; onChange: (id: string) => void;
}) {
    const images  = media.filter(m => !m.is_icon && m.mime_type.startsWith('image/'));
    const selected = media.find(m => String(m.id) === value) ?? null;

    return (
        <div className="space-y-3">
            {selected && (
                <div className="flex items-center gap-3 rounded-lg border bg-muted/30 p-3">
                    <img src={`/storage/${selected.filename}`} className="h-12 w-12 rounded-lg object-cover shrink-0" alt="" />
                    <div className="flex-1 min-w-0">
                        <p className="truncate text-sm font-medium">{selected.original_name}</p>
                    </div>
                    <button type="button" onClick={() => onChange('')} className="text-muted-foreground hover:text-destructive">
                        <X className="h-4 w-4" />
                    </button>
                </div>
            )}
            <div className="max-h-48 overflow-y-auto space-y-1 pr-1">
                {images.length === 0
                    ? <p className="py-4 text-center text-xs text-muted-foreground">No images uploaded yet.</p>
                    : images.map(m => (
                        <label key={m.id} className={cn('flex cursor-pointer items-center gap-2 rounded-lg border p-2',
                            value === String(m.id) ? 'border-primary bg-primary/5' : 'hover:bg-muted/50')}>
                            <input type="radio" name="article_media" checked={value === String(m.id)} onChange={() => onChange(String(m.id))} className="accent-primary" />
                            <img src={`/storage/${m.filename}`} className="h-7 w-7 rounded object-cover shrink-0" alt="" />
                            <span className="truncate text-xs">{m.original_name}</span>
                        </label>
                    ))}
            </div>
        </div>
    );
}

function GalleryPicker({ media, value, onChange }: {
    media: MediaItem[]; value: number[]; onChange: (ids: number[]) => void;
}) {
    const images = media.filter(m => !m.is_icon && m.mime_type.startsWith('image/'));
    const toggle = (id: number) => onChange(value.includes(id) ? value.filter(v => v !== id) : [...value, id]);

    return (
        <div className="space-y-2">
            {value.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                    {value.map(id => {
                        const m = media.find(m => m.id === id);
                        if (!m) return null;
                        return (
                            <div key={id} className="relative group">
                                <img src={`/storage/${m.filename}`} className="h-14 w-14 rounded-lg object-cover border border-primary" alt="" />
                                <button type="button" onClick={() => toggle(id)}
                                    className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-destructive text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <X className="h-2.5 w-2.5" />
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
            <div className="max-h-44 overflow-y-auto space-y-1 pr-1">
                {images.map(m => (
                    <label key={m.id} className={cn('flex cursor-pointer items-center gap-2 rounded-lg border p-2',
                        value.includes(m.id) ? 'border-primary bg-primary/5' : 'hover:bg-muted/50')}>
                        <input type="checkbox" checked={value.includes(m.id)} onChange={() => toggle(m.id)} className="accent-primary" />
                        <img src={`/storage/${m.filename}`} className="h-7 w-7 rounded object-cover shrink-0" alt="" />
                        <span className="truncate text-xs">{m.original_name}</span>
                    </label>
                ))}
            </div>
            <p className="text-xs text-muted-foreground">{value.length} selected</p>
        </div>
    );
}

type DefaultValues = Partial<{
    id: number; title: string; slug: string; category_id: number; excerpt: string;
    content: string; media_id: number; media_ids: number[]; sort_order: number;
    is_active: boolean; is_featured: boolean;
}>;

export default function ArticleForm({ mode, media, categories, defaultValues = {} }: {
    mode: 'create' | 'edit'; media: MediaItem[]; categories: CategoryOption[]; defaultValues?: DefaultValues;
}) {
    const { data, setData, post, patch, processing, errors } = useForm({
        title:       defaultValues.title       ?? '',
        slug:        defaultValues.slug        ?? '',
        category_id: defaultValues.category_id ? String(defaultValues.category_id) : '',
        excerpt:     defaultValues.excerpt     ?? '',
        content:     defaultValues.content     ?? '',
        media_id:    defaultValues.media_id    ? String(defaultValues.media_id) : '',
        media_ids:   defaultValues.media_ids   ?? [] as number[],
        sort_order:  String(defaultValues.sort_order ?? 0),
        is_active:   defaultValues.is_active   ?? true,
        is_featured: defaultValues.is_featured ?? false,
    });

    const handleTitle = (val: string) => {
        setData('title', val);
        if (mode === 'create' && !data.slug) {
            setData('slug', val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
        }
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        mode === 'create' ? post('/knowledge/articles') : patch(`/knowledge/articles/${defaultValues.id}`);
    };

    // Group categories for display: top-level + their children
    const topLevel  = categories.filter(c => !c.parent_id);
    const childrenOf = (id: number) => categories.filter(c => c.parent_id === id);

    return (
        <form onSubmit={submit} className="grid gap-6 lg:grid-cols-3">

            {/* ── Left ── */}
            <div className="space-y-6 lg:col-span-2">
                <Section title="Article Details">
                    <div className="grid gap-4">
                        <Field label="Title" required error={errors.title}>
                            <Input value={data.title} onChange={e => handleTitle(e.target.value)} placeholder="e.g. Employee Handbooks Guide" autoFocus />
                        </Field>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="URL Slug" required error={errors.slug}>
                                <div className="flex items-center rounded-md border bg-muted/30 px-3 text-sm text-muted-foreground">
                                    <span className="pr-1 shrink-0 text-xs">…/</span>
                                    <input value={data.slug} onChange={e => setData('slug', e.target.value)}
                                        placeholder="employee-handbooks" className="flex-1 bg-transparent py-2 outline-none text-sm" />
                                </div>
                            </Field>
                            <Field label="Category" required error={errors.category_id}>
                                <Select value={data.category_id} onValueChange={v => setData('category_id', v)}>
                                    <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                                    <SelectContent>
                                        {topLevel.map(parent => (
                                            <div key={parent.id}>
                                                <SelectItem value={String(parent.id)} className="font-medium">
                                                    {parent.name}
                                                </SelectItem>
                                                {childrenOf(parent.id).map(child => (
                                                    <SelectItem key={child.id} value={String(child.id)}>
                                                        <span className="pl-4 text-muted-foreground">↳ {child.name}</span>
                                                    </SelectItem>
                                                ))}
                                            </div>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </Field>
                        </div>
                        <Field label="Excerpt" hint="Short summary shown on listing cards (max 500 chars).">
                            <Textarea value={data.excerpt} onChange={e => setData('excerpt', e.target.value)}
                                placeholder="Brief summary of this article…" rows={3} maxLength={500} />
                            <p className="text-right text-xs text-muted-foreground">{data.excerpt.length}/500</p>
                        </Field>
                        <Field label="Content" hint="Full article content shown on detail page.">
                            <Textarea value={data.content} onChange={e => setData('content', e.target.value)}
                                placeholder="Write the full article content here…" rows={12} />
                        </Field>
                    </div>
                </Section>

                <Section title="Gallery Images">
                    <p className="text-xs text-muted-foreground mb-3">Images displayed in the article gallery.</p>
                    <GalleryPicker media={media} value={data.media_ids} onChange={ids => setData('media_ids', ids)} />
                </Section>
            </div>

            {/* ── Right ── */}
            <div className="space-y-6">
                <Section title="Settings">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium">Published</p>
                                <p className="text-xs text-muted-foreground">Show on website</p>
                            </div>
                            <Switch checked={data.is_active} onCheckedChange={v => setData('is_active', v)} />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                                <Star className="h-3.5 w-3.5 text-amber-500" />
                                <p className="text-sm font-medium">Featured</p>
                            </div>
                            <Switch checked={data.is_featured} onCheckedChange={v => setData('is_featured', v)} />
                        </div>
                        <Field label="Sort Order" hint="Lower number appears first.">
                            <Input type="number" min={0} value={data.sort_order} onChange={e => setData('sort_order', e.target.value)} />
                        </Field>
                    </div>
                    <div className="mt-6 flex gap-2">
                        <Button type="button" variant="outline" className="flex-1" onClick={() => window.history.back()}>Cancel</Button>
                        <Button type="submit" disabled={processing} className="flex-1 gap-2">
                            {processing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                            {mode === 'create' ? 'Create' : 'Update'}
                        </Button>
                    </div>
                </Section>

                <Section title="Featured Image">
                    <FeaturedImagePicker media={media} value={data.media_id} onChange={id => setData('media_id', id)} />
                </Section>
            </div>
        </form>
    );
}
