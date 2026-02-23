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
import { Loader2, Save, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import RichTextEditor from '@/components/rich-text-editor';
import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type Author   = { id: number; name: string };
type Category = { id: number; name: string; children?: Category[] };
type Tag      = { id: number; name: string; slug: string };
type MediaItem = { id: number; filename: string; original_name: string; alt_text: string | null; mime_type: string };

type PageFormData = {
    title:            string;
    slug:             string;
    content:          string;
    meta_title:       string;
    meta_description: string;
    status:           string;
    author_id:        string;
    published_at:     string;
    category_ids:     number[];
    tag_ids:          number[];
    media_ids:        number[];
    workflow_notes:   string;
};

type DefaultValues = Partial<{
    id:               number;
    title:            string;
    slug:             string;
    content:          string;
    meta_title:       string;
    meta_description: string;
    status:           string;
    author_id:        number;
    published_at:     string;
    category_ids:     number[];
    tag_ids:          number[];
    media_ids:        number[];
    workflow_step:    string;
}>;

type Props = {
    mode:           'create' | 'edit';
    authors:        Author[];
    categories:     Category[];
    tags:           Tag[];
    media:          MediaItem[];
    defaultValues?: DefaultValues;
};

// ── Field wrapper ─────────────────────────────────────────────────────────────

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

// ── Section card ──────────────────────────────────────────────────────────────

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

// ── Component ─────────────────────────────────────────────────────────────────

export default function PageForm({ mode, authors, categories, tags, media, defaultValues = {} }: Props) {
    const [tagInput, setTagInput] = useState('');

    const { data, setData, post, patch, processing, errors } = useForm<PageFormData>({
        title:            defaultValues.title            ?? '',
        slug:             defaultValues.slug             ?? '',
        content:          defaultValues.content          ?? '',
        meta_title:       defaultValues.meta_title       ?? '',
        meta_description: defaultValues.meta_description ?? '',
        status:           defaultValues.status           ?? 'draft',
        author_id:        defaultValues.author_id        ? String(defaultValues.author_id) : '',
        published_at:     defaultValues.published_at     ?? '',
        category_ids:     defaultValues.category_ids     ?? [],
        tag_ids:          defaultValues.tag_ids          ?? [],
        media_ids:        defaultValues.media_ids        ?? [],
        workflow_notes:   '',
    });

    // Auto-generate slug from title on create
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

    const renderCategories = (cats: Category[], depth = 0) =>
        cats.map(cat => (
            <div key={cat.id}>
                <label className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 hover:bg-muted/50">
                    <Checkbox
                        checked={data.category_ids.includes(cat.id)}
                        onCheckedChange={() => toggleId('category_ids', cat.id)}
                    />
                    <span className={cn('text-sm', depth > 0 && 'text-muted-foreground')}
                        style={{ paddingLeft: depth * 12 }}>
                        {cat.name}
                    </span>
                </label>
                {cat.children && renderCategories(cat.children, depth + 1)}
            </div>
        ));

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        mode === 'create' ? post('/pages') : patch(`/pages/${defaultValues.id}`);
    };

    const selectedTags = tags.filter(t => data.tag_ids.includes(t.id));

    return (
        <form onSubmit={submit} className="grid gap-6 lg:grid-cols-3">

            {/* ── Left column (main content) ─────────────────────────────── */}
            <div className="space-y-6 lg:col-span-2">

                <Section title="Page Content">
                    <div className="grid gap-4">
                        <Field label="Page Title" required error={errors.title}>
                            <Input
                                value={data.title}
                                onChange={e => handleTitleChange(e.target.value)}
                                placeholder="e.g. About Us"
                                autoFocus
                            />
                        </Field>

                        <Field label="URL Slug" required error={errors.slug}
                            hint="The URL path: vmg.co.tz/your-slug">
                            <div className="flex items-center rounded-md border bg-muted/30 px-3 text-sm text-muted-foreground">
                                <span className="pr-1">/</span>
                                <input
                                    value={data.slug}
                                    onChange={e => setData('slug', e.target.value)}
                                    placeholder="about-us"
                                    className="flex-1 bg-transparent py-2 outline-none placeholder:text-muted-foreground/50"
                                />
                            </div>
                        </Field>

                        <Field label="Content" error={errors.content}>
                            <RichTextEditor
                                value={data.content}
                                onChange={val => setData('content', val)}
                                placeholder="Write the page content here…"
                                error={errors.content}
                                minHeight={400}
                            />
                        </Field>
                    </div>
                </Section>

                {/* SEO */}
                <Section title="SEO & Meta">
                    <div className="grid gap-4">
                        <Field label="Meta Title" error={errors.meta_title}
                            hint="Defaults to page title if left blank. Ideal: 50–60 chars.">
                            <Input
                                value={data.meta_title}
                                onChange={e => setData('meta_title', e.target.value)}
                                placeholder="Custom meta title…"
                                maxLength={70}
                            />
                            <p className="text-right text-xs text-muted-foreground">
                                {data.meta_title.length}/70
                            </p>
                        </Field>

                        <Field label="Meta Description" error={errors.meta_description}
                            hint="Ideal: 150–160 chars for best search preview.">
                            <Textarea
                                value={data.meta_description}
                                onChange={e => setData('meta_description', e.target.value)}
                                placeholder="Brief summary for search engines…"
                                rows={3}
                                maxLength={200}
                            />
                            <p className="text-right text-xs text-muted-foreground">
                                {data.meta_description.length}/200
                            </p>
                        </Field>
                    </div>
                </Section>

                {/* Workflow notes (edit only) */}
                {mode === 'edit' && (
                    <Section title="Workflow Notes">
                        <Field label="Notes (optional)" error={errors.workflow_notes}
                            hint="Logged when the status changes.">
                            <Textarea
                                value={data.workflow_notes}
                                onChange={e => setData('workflow_notes', e.target.value)}
                                placeholder="Reason for status change, review notes…"
                                rows={3}
                            />
                        </Field>
                    </Section>
                )}
            </div>

            {/* ── Right column (meta sidebar) ────────────────────────────── */}
            <div className="space-y-6">

                {/* Publish settings */}
                <Section title="Publish">
                    <div className="grid gap-4">
                        <Field label="Status" required error={errors.status}>
                            <Select value={data.status} onValueChange={v => setData('status', v)}>
                                <SelectTrigger><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="draft">Draft</SelectItem>
                                    <SelectItem value="review">In Review</SelectItem>
                                    <SelectItem value="published">Published</SelectItem>
                                    <SelectItem value="archived">Archived</SelectItem>
                                </SelectContent>
                            </Select>
                        </Field>

                        <Field label="Author" error={errors.author_id}>
                            <Select value={data.author_id} onValueChange={v => setData('author_id', v)}>
                                <SelectTrigger><SelectValue placeholder="Select author…" /></SelectTrigger>
                                <SelectContent>
                                    {authors.map(a => (
                                        <SelectItem key={a.id} value={String(a.id)}>
                                            {a.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Field>

                        <Field label="Publish Date" error={errors.published_at}>
                            <Input
                                type="date"
                                value={data.published_at}
                                onChange={e => setData('published_at', e.target.value)}
                            />
                        </Field>
                    </div>

                    <div className="mt-4 flex gap-2">
                        <Button type="button" variant="outline" className="flex-1"
                            onClick={() => window.history.back()}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing} className="flex-1 gap-2">
                            {processing
                                ? <Loader2 className="h-4 w-4 animate-spin" />
                                : <Save className="h-4 w-4" />}
                            {mode === 'create' ? 'Publish' : 'Update'}
                        </Button>
                    </div>
                </Section>

                {/* Categories */}
                <Section title="Categories">
                    {categories.length === 0
                        ? <p className="text-xs text-muted-foreground">No categories yet.</p>
                        : <div className="max-h-56 overflow-y-auto">
                            {renderCategories(categories)}
                        </div>
                    }
                </Section>

                {/* Tags */}
                <Section title="Tags">
                    {/* selected tag chips */}
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
                                <Checkbox
                                    checked={data.tag_ids.includes(tag.id)}
                                    onCheckedChange={() => toggleId('tag_ids', tag.id)}
                                />
                                <span className="text-sm">{tag.name}</span>
                            </label>
                        ))}
                    </div>
                </Section>

                {/* Featured Media */}
                <Section title="Featured Media">
                    <div className="max-h-56 overflow-y-auto space-y-1">
                        {media.length === 0
                            ? <p className="text-xs text-muted-foreground">No media uploaded yet.</p>
                            : media.map(m => {
                                const isImage = m.mime_type.startsWith('image/');
                                const selected = data.media_ids.includes(m.id);
                                return (
                                    <label key={m.id}
                                        className={cn(
                                            'flex cursor-pointer items-center gap-2 rounded-lg border p-2 transition-colors',
                                            selected ? 'border-primary bg-primary/5' : 'hover:bg-muted/50',
                                        )}>
                                        <Checkbox
                                            checked={selected}
                                            onCheckedChange={() => toggleId('media_ids', m.id)}
                                        />
                                        {isImage && (
                                            <img
                                                src={`/storage/${m.filename}`}
                                                alt={m.alt_text ?? m.original_name}
                                                className="h-8 w-8 rounded object-cover"
                                            />
                                        )}
                                        <span className="min-w-0 truncate text-xs">
                                            {m.original_name}
                                        </span>
                                    </label>
                                );
                            })}
                    </div>
                </Section>

            </div>
        </form>
    );
}
