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

// ── Types ─────────────────────────────────────────────────────────────────────

type Category  = { id: number; name: string; children?: Category[] };
type Tag       = { id: number; name: string; slug: string };
type MediaItem = { id: number; filename: string; original_name: string; alt_text: string | null; mime_type: string };

type ServiceFormData = {
    title:             string;
    slug:              string;
    short_description: string;
    description:       string;
    icon:              string;
    image_id:          string;
    order_number:      string;
    status:            string;
    category_ids:      number[];
    tag_ids:           number[];
    media_ids:         number[];
    workflow_notes:    string;
};

type DefaultValues = Partial<{
    id:                number;
    title:             string;
    slug:              string;
    short_description: string;
    description:       string;
    icon:              string;
    image_id:          number;
    order_number:      number;
    status:            string;
    category_ids:      number[];
    tag_ids:           number[];
    media_ids:         number[];
    workflow_step:     string;
}>;

type Props = {
    mode:           'create' | 'edit';
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

export default function ServiceForm({ mode, categories, tags, media, defaultValues = {} }: Props) {
    const { data, setData, post, patch, processing, errors } = useForm<ServiceFormData>({
        title:             defaultValues.title             ?? '',
        slug:              defaultValues.slug              ?? '',
        short_description: defaultValues.short_description ?? '',
        description:       defaultValues.description       ?? '',
        icon:              defaultValues.icon              ?? '',
        image_id:          defaultValues.image_id          ? String(defaultValues.image_id) : '',
        order_number:      defaultValues.order_number      !== undefined ? String(defaultValues.order_number) : '0',
        status:            defaultValues.status            ?? 'draft',
        category_ids:      defaultValues.category_ids      ?? [],
        tag_ids:           defaultValues.tag_ids            ?? [],
        media_ids:         defaultValues.media_ids          ?? [],
        workflow_notes:    '',
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

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        mode === 'create' ? post('/services') : patch(`/services/${defaultValues.id}`);
    };

    return (
        <form onSubmit={submit} className="grid gap-6 lg:grid-cols-3">

            {/* ── Left: main content ────────────────────────────────────── */}
            <div className="space-y-6 lg:col-span-2">

                <Section title="Service Details">
                    <div className="grid gap-4">
                        <Field label="Service Title" required error={errors.title}>
                            <Input
                                value={data.title}
                                onChange={e => handleTitleChange(e.target.value)}
                                placeholder="e.g. Human Resource Management"
                                autoFocus
                            />
                        </Field>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="URL Slug" required error={errors.slug}
                                hint="vmg.co.tz/services/your-slug">
                                <div className="flex items-center rounded-md border bg-muted/30 px-3 text-sm text-muted-foreground">
                                    <span className="pr-1 shrink-0">/services/</span>
                                    <input
                                        value={data.slug}
                                        onChange={e => setData('slug', e.target.value)}
                                        placeholder="human-resource-management"
                                        className="flex-1 bg-transparent py-2 outline-none"
                                    />
                                </div>
                            </Field>

                            <Field label="Display Order" error={errors.order_number}
                                hint="Lower number = appears first.">
                                <Input
                                    type="number"
                                    min={0}
                                    value={data.order_number}
                                    onChange={e => setData('order_number', e.target.value)}
                                    placeholder="0"
                                />
                            </Field>
                        </div>

                        <Field label="Short Description" error={errors.short_description}
                            hint="Shown on service cards on the homepage. Max 500 chars.">
                            <Textarea
                                value={data.short_description}
                                onChange={e => setData('short_description', e.target.value)}
                                placeholder="Brief summary shown in service listings…"
                                rows={3}
                                maxLength={500}
                            />
                            <p className="text-right text-xs text-muted-foreground">
                                {data.short_description.length}/500
                            </p>
                        </Field>

                        <Field label="Full Description" error={errors.description}>
                            <RichTextEditor
                                value={data.description}
                                onChange={val => setData('description', val)}
                                placeholder="Detailed description shown on the service detail page…"
                                error={errors.description}
                                minHeight={360}
                            />
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
                                placeholder="Reason for status change, review feedback…"
                                rows={3}
                            />
                        </Field>
                    </Section>
                )}
            </div>

            {/* ── Right: sidebar ────────────────────────────────────────── */}
            <div className="space-y-6">

                {/* Publish */}
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

                        <Field label="Icon" error={errors.icon}
                            hint="Emoji or icon class (e.g. 🏢 or fa-users).">
                            <Input
                                value={data.icon}
                                onChange={e => setData('icon', e.target.value)}
                                placeholder="🏢"
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
                            {mode === 'create' ? 'Create' : 'Update'}
                        </Button>
                    </div>
                </Section>

                {/* Featured Image */}
                <Section title="Featured Image">
                    {selectedImage && (
                        <div className="mb-3 relative">
                            <img
                                src={`/storage/${selectedImage.filename}`}
                                alt={selectedImage.alt_text ?? selectedImage.original_name}
                                className="w-full rounded-lg object-cover"
                                style={{ maxHeight: 140 }}
                            />
                            <button
                                type="button"
                                onClick={() => setData('image_id', '')}
                                className="absolute right-2 top-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70"
                            >
                                <X className="h-3 w-3" />
                            </button>
                        </div>
                    )}
                    <div className="max-h-48 overflow-y-auto space-y-1">
                        {media.filter(m => m.mime_type.startsWith('image/')).map(m => (
                            <label key={m.id}
                                className={cn(
                                    'flex cursor-pointer items-center gap-2 rounded-lg border p-2 transition-colors',
                                    data.image_id === String(m.id)
                                        ? 'border-primary bg-primary/5'
                                        : 'hover:bg-muted/50',
                                )}>
                                <input
                                    type="radio"
                                    name="image_id"
                                    value={m.id}
                                    checked={data.image_id === String(m.id)}
                                    onChange={() => setData('image_id', String(m.id))}
                                    className="accent-primary"
                                />
                                <img
                                    src={`/storage/${m.filename}`}
                                    alt={m.alt_text ?? m.original_name}
                                    className="h-8 w-8 rounded object-cover"
                                />
                                <span className="min-w-0 truncate text-xs">{m.original_name}</span>
                            </label>
                        ))}
                        {media.filter(m => m.mime_type.startsWith('image/')).length === 0 && (
                            <p className="text-xs text-muted-foreground">No images uploaded yet.</p>
                        )}
                    </div>
                </Section>

                {/* Categories */}
                <Section title="Categories">
                    {categories.length === 0
                        ? <p className="text-xs text-muted-foreground">No categories yet.</p>
                        : <div className="max-h-48 overflow-y-auto">
                            {renderCategories(categories)}
                        </div>
                    }
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
                                <Checkbox
                                    checked={data.tag_ids.includes(tag.id)}
                                    onCheckedChange={() => toggleId('tag_ids', tag.id)}
                                />
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
