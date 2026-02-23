import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Loader2, Save, X } from 'lucide-react';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────

type MediaItem = {
    id:            number;
    filename:      string;
    original_name: string;
    alt_text:      string | null;
    mime_type:     string;
};

type IndustryFormData = {
    name:        string;
    slug:        string;
    description: string;
    media_id:    string;
    sort_order:  string;
    is_active:   boolean;
};

type DefaultValues = Partial<{
    id:          number;
    name:        string;
    slug:        string;
    description: string;
    media_id:    number;
    sort_order:  number;
    is_active:   boolean;
}>;

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

export default function IndustryForm({
    mode,
    media,
    defaultValues = {},
}: {
    mode:           'create' | 'edit';
    media:          MediaItem[];
    defaultValues?: DefaultValues;
}) {
    const { data, setData, post, patch, processing, errors } = useForm<IndustryFormData>({
        name:        defaultValues.name        ?? '',
        slug:        defaultValues.slug        ?? '',
        description: defaultValues.description ?? '',
        media_id:    defaultValues.media_id    ? String(defaultValues.media_id) : '',
        sort_order:  defaultValues.sort_order  !== undefined ? String(defaultValues.sort_order) : '0',
        is_active:   defaultValues.is_active   ?? true,
    });

    const handleNameChange = (val: string) => {
        setData('name', val);
        if (mode === 'create' && !data.slug) {
            setData('slug', val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
        }
    };

    const selectedImage = media.find(m => String(m.id) === data.media_id);
    const imageOnly     = media.filter(m => m.mime_type.startsWith('image/'));

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        mode === 'create' ? post('/industries') : patch(`/industries/${defaultValues.id}`);
    };

    return (
        <form onSubmit={submit} className="grid gap-6 lg:grid-cols-3">

            {/* ── Left: main details ─────────────────────────────────────── */}
            <div className="space-y-6 lg:col-span-2">
                <Section title="Industry Details">
                    <div className="grid gap-4">
                        <Field label="Industry Name" required error={errors.name}>
                            <Input
                                value={data.name}
                                onChange={e => handleNameChange(e.target.value)}
                                placeholder="e.g. Financial Services"
                                autoFocus
                            />
                        </Field>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="URL Slug" required error={errors.slug}
                                hint="Used in the URL: /industries/your-slug">
                                <div className="flex items-center rounded-md border bg-muted/30 px-3 text-sm text-muted-foreground">
                                    <span className="pr-1 shrink-0">/industries/</span>
                                    <input
                                        value={data.slug}
                                        onChange={e => setData('slug', e.target.value)}
                                        placeholder="financial-services"
                                        className="flex-1 bg-transparent py-2 outline-none"
                                    />
                                </div>
                            </Field>

                            <Field label="Display Order" error={errors.sort_order}
                                hint="Lower number appears first.">
                                <Input
                                    type="number"
                                    min={0}
                                    value={data.sort_order}
                                    onChange={e => setData('sort_order', e.target.value)}
                                    placeholder="0"
                                />
                            </Field>
                        </div>

                        <Field label="Description" error={errors.description}
                            hint="Brief description shown on the industry card or detail page.">
                            <Textarea
                                value={data.description}
                                onChange={e => setData('description', e.target.value)}
                                placeholder="Describe this industry…"
                                rows={6}
                                maxLength={2000}
                            />
                            <p className="text-right text-xs text-muted-foreground">
                                {data.description.length}/2000
                            </p>
                        </Field>
                    </div>
                </Section>
            </div>

            {/* ── Right: sidebar ─────────────────────────────────────────── */}
            <div className="space-y-6">

                {/* Settings */}
                <Section title="Settings">
                    <div className="space-y-4">
                        {/* Active toggle */}
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-sm font-medium">Active</p>
                                <p className="text-xs text-muted-foreground">
                                    Show this industry on the website
                                </p>
                            </div>
                            <Switch
                                checked={data.is_active}
                                onCheckedChange={v => setData('is_active', v)}
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex gap-2">
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

                {/* Image picker */}
                <Section title="Industry Image">
                    {selectedImage && (
                        <div className="relative mb-3">
                            <img
                                src={`/storage/${selectedImage.filename}`}
                                alt={selectedImage.alt_text ?? selectedImage.original_name}
                                className="w-full rounded-lg object-cover"
                                style={{ maxHeight: 150 }}
                            />
                            <button
                                type="button"
                                onClick={() => setData('media_id', '')}
                                className="absolute right-2 top-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70"
                            >
                                <X className="h-3 w-3" />
                            </button>
                        </div>
                    )}

                    <div className="max-h-56 overflow-y-auto space-y-1">
                        {imageOnly.length === 0 ? (
                            <p className="text-xs text-muted-foreground">No images uploaded yet.</p>
                        ) : (
                            imageOnly.map(m => (
                                <label
                                    key={m.id}
                                    className={cn(
                                        'flex cursor-pointer items-center gap-2 rounded-lg border p-2 transition-colors',
                                        data.media_id === String(m.id)
                                            ? 'border-primary bg-primary/5'
                                            : 'hover:bg-muted/50',
                                    )}
                                >
                                    <input
                                        type="radio"
                                        name="media_id"
                                        value={m.id}
                                        checked={data.media_id === String(m.id)}
                                        onChange={() => setData('media_id', String(m.id))}
                                        className="accent-primary"
                                    />
                                    <img
                                        src={`/storage/${m.filename}`}
                                        alt={m.alt_text ?? m.original_name}
                                        className="h-8 w-8 rounded object-cover"
                                    />
                                    <span className="min-w-0 truncate text-xs">{m.original_name}</span>
                                </label>
                            ))
                        )}
                    </div>
                </Section>
            </div>
        </form>
    );
}
