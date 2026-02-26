import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, Save, ImageIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type MediaItem = {
    id: number;
    filename: string;
    original_name: string;
};

type BannerFormData = {
    title: string;
    sub_title: string;
    description: string;
    bg_image_id: string;
    banner_image_id: string;
    btn_one_text: string;
    btn_one_url: string;
    btn_two_text: string;
    btn_two_url: string;
    is_published: boolean;
};

type DefaultValues = {
    id?: number;
    title?: string;
    sub_title?: string;
    description?: string;
    bg_image_id?: number;
    banner_image_id?: number;
    btn_one_text?: string;
    btn_one_url?: string;
    btn_two_text?: string;
    btn_two_url?: string;
    is_published?: boolean;
};

// ── Field wrapper ─────────────────────────────────────────────────────────────

function Field({
    label, error, required, hint, children,
}: {
    label: string;
    error?: string;
    required?: boolean;
    hint?: string;
    children: React.ReactNode;
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

// ── Image Picker ──────────────────────────────────────────────────────────────

function ImagePicker({
    label, value, onChange, media, error, hint, required,
}: {
    label: string;
    value: string;
    onChange: (id: string) => void;
    media: MediaItem[];
    error?: string;
    hint?: string;
    required?: boolean;
}) {
    const [open, setOpen] = useState(false);
    const selected = media.find(m => String(m.id) === String(value));

    return (
        <Field label={label} error={error} hint={hint} required={required}>
            <div className={cn(
                'rounded-lg border-2 border-dashed p-3 transition-colors',
                error ? 'border-destructive/50 bg-destructive/5' : 'border-muted-foreground/25 hover:border-primary/40',
            )}>
                {selected ? (
                    <div className="flex items-center gap-3">
                        <img
                            src={`/storage/${selected.filename}`}
                            className="h-12 w-20 rounded object-cover"
                            alt={selected.original_name}
                        />
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-xs font-medium">{selected.original_name}</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => onChange('')}
                            className="text-muted-foreground hover:text-destructive"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                ) : (
                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="flex w-full flex-col items-center gap-1.5 py-2 text-muted-foreground hover:text-foreground"
                    >
                        <ImageIcon className="h-6 w-6" />
                        <span className="text-xs">Select Image</span>
                    </button>
                )}
            </div>

            {open && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="w-full max-w-lg rounded-xl bg-background p-4 shadow-xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="mb-3 flex items-center justify-between">
                            <p className="font-semibold">Select Image</p>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                        <div className="grid max-h-72 grid-cols-3 gap-2 overflow-y-auto">
                            {media.map(m => (
                                <button
                                    key={m.id}
                                    type="button"
                                    onClick={() => {
                                        onChange(String(m.id));
                                        setOpen(false);
                                    }}
                                    className="group relative overflow-hidden rounded-lg border-2 border-transparent hover:border-primary"
                                >
                                    <img
                                        src={`/storage/${m.filename}`}
                                        className="aspect-video w-full object-cover"
                                        alt={m.original_name}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </Field>
    );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function BannerForm({
    mode,
    media,
    defaultValues = {},
}: {
    mode: 'create' | 'edit';
    media: MediaItem[];
    defaultValues?: DefaultValues;
}) {
    const { data, setData, post, patch, processing, errors } = useForm<BannerFormData>({
        title: defaultValues.title ?? '',
        sub_title: defaultValues.sub_title ?? '',
        description: defaultValues.description ?? '',
        bg_image_id: defaultValues.bg_image_id ? String(defaultValues.bg_image_id) : '',
        banner_image_id: defaultValues.banner_image_id ? String(defaultValues.banner_image_id) : '',
        btn_one_text: defaultValues.btn_one_text ?? '',
        btn_one_url: defaultValues.btn_one_url ?? '',
        btn_two_text: defaultValues.btn_two_text ?? '',
        btn_two_url: defaultValues.btn_two_url ?? '',
        is_published: defaultValues.is_published ?? false,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        mode === 'create'
            ? post('/banners')
            : patch(`/banners/${defaultValues.id}`);
    };

    return (
        <form onSubmit={submit} className="space-y-6">

            {/* ── Banner Content ─────────────────────────────────────────── */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Banner Content
                </h2>

                <div className="grid gap-4">
                    <Field
                        label="Title"
                        required
                        error={errors.title}
                        hint="Main heading displayed on the banner."
                    >
                        <Input
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            placeholder="e.g. Welcome to Our Platform"
                            autoFocus
                        />
                    </Field>

                    <Field
                        label="Sub Title"
                        error={errors.sub_title}
                        hint="Smaller text label displayed above the title."
                    >
                        <Input
                            value={data.sub_title}
                            onChange={e => setData('sub_title', e.target.value)}
                            placeholder="e.g. Featured"
                        />
                    </Field>

                    <Field
                        label="Description"
                        error={errors.description}
                        hint="Additional descriptive text below the title."
                    >
                        <Textarea
                            value={data.description}
                            onChange={e => setData('description', e.target.value)}
                            placeholder="Write a description…"
                            rows={4}
                        />
                    </Field>
                </div>
            </div>

            {/* ── Call-to-Action Buttons ──────────────────────────────────── */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Action Buttons
                </h2>

                <div className="grid gap-4">
                    <div className="grid gap-3 rounded-lg border p-4 bg-muted/30">
                        <p className="text-xs font-semibold text-muted-foreground">Button 1</p>
                        <div className="grid gap-3">
                            <Field label="Text" error={errors.btn_one_text}>
                                <Input
                                    value={data.btn_one_text}
                                    onChange={e => setData('btn_one_text', e.target.value)}
                                    placeholder="Button text"
                                />
                            </Field>
                            <Field label="URL" error={errors.btn_one_url} hint="e.g. /contact or https://example.com">
                                <Input
                                    value={data.btn_one_url}
                                    onChange={e => setData('btn_one_url', e.target.value)}
                                    placeholder="Link destination"
                                />
                            </Field>
                        </div>
                    </div>

                    <div className="grid gap-3 rounded-lg border p-4 bg-muted/30">
                        <p className="text-xs font-semibold text-muted-foreground">Button 2</p>
                        <div className="grid gap-3">
                            <Field label="Text" error={errors.btn_two_text}>
                                <Input
                                    value={data.btn_two_text}
                                    onChange={e => setData('btn_two_text', e.target.value)}
                                    placeholder="Button text"
                                />
                            </Field>
                            <Field label="URL" error={errors.btn_two_url} hint="e.g. /pricing or https://example.com">
                                <Input
                                    value={data.btn_two_url}
                                    onChange={e => setData('btn_two_url', e.target.value)}
                                    placeholder="Link destination"
                                />
                            </Field>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Images ──────────────────────────────────────────────────── */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Media
                </h2>

                <div className="grid gap-4">
                    <ImagePicker
                        label="Background Image"
                        value={data.bg_image_id}
                        onChange={v => setData('bg_image_id', v)}
                        media={media}
                        error={errors.bg_image_id}
                        hint="Used as the banner background."
                    />
                    <ImagePicker
                        label="Banner Image"
                        value={data.banner_image_id}
                        onChange={v => setData('banner_image_id', v)}
                        media={media}
                        error={errors.banner_image_id}
                        hint="Secondary image overlay or section image."
                    />
                </div>
            </div>

            {/* ── Publish Settings ────────────────────────────────────────── */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Publish Settings
                </h2>

                <div className="flex items-center gap-3 rounded-lg border p-4 bg-muted/20">
                    <Checkbox
                        id="is_published"
                        checked={data.is_published}
                        onCheckedChange={val => setData('is_published', val === true)}
                    />
                    <label htmlFor="is_published" className="flex cursor-pointer flex-col gap-1">
                        <Label className="text-sm font-medium cursor-pointer">
                            Publish Banner
                        </Label>
                        <p className="text-xs text-muted-foreground">
                            {data.is_published ? 'Banner is visible and active on the website.' : 'Banner is hidden from the website.'}
                        </p>
                    </label>
                </div>
            </div>

            {/* ── Submit ──────────────────────────────────────────────────── */}
            <div className="flex justify-end gap-3">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => window.history.back()}
                >
                    Cancel
                </Button>
                <Button type="submit" disabled={processing} className="gap-2">
                    {processing
                        ? <Loader2 className="h-4 w-4 animate-spin" />
                        : <Save className="h-4 w-4" />}
                    {mode === 'create' ? 'Create Banner' : 'Save Changes'}
                </Button>
            </div>
        </form>
    );
}
