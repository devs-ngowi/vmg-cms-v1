import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Save, X, ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────

export type MediaItem = {
    id:            number;
    filename:      string;
    original_name: string;
    alt_text:      string | null;
    url:           string;
};

export type SlideValues = {
    id?:         number;
    headline:    string;
    subtext:     string | null;
    btn_label:   string | null;
    btn_url:     string | null;
    media_id:    number | null;
    sort_order:  number;
    is_active:   boolean;
    media?:      MediaItem | null;
};

type Props = {
    mode:       'create' | 'edit';
    slide?:     SlideValues | null;
    media:      MediaItem[];
    nextOrder?: number;
};

// ── Field wrapper ─────────────────────────────────────────────────────────────

function Field({ label, hint, error, required, children }: {
    label: string; hint?: string; error?: string; required?: boolean; children: React.ReactNode;
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

// ── Component ─────────────────────────────────────────────────────────────────

export default function HeroSlideForm({ mode, slide, media, nextOrder = 0 }: Props) {
    const { data, setData, post, patch, processing, errors } = useForm({
        headline:   slide?.headline   ?? '',
        subtext:    slide?.subtext    ?? '',
        btn_label:  slide?.btn_label  ?? '',
        btn_url:    slide?.btn_url    ?? '',
        media_id:   slide?.media_id   ?? null as number | null,
        sort_order: slide?.sort_order ?? nextOrder,
        is_active:  slide?.is_active  ?? true,
    });

    const selectedMedia = media.find(m => m.id === data.media_id) ?? slide?.media ?? null;

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        mode === 'create'
            ? post('/hero-slides')
            : patch(`/hero-slides/${slide!.id}`);
    };

    return (
        <form onSubmit={submit} className="grid gap-6 lg:grid-cols-3">

            {/* ── Left: fields ──────────────────────────────────────────── */}
            <div className="space-y-6 lg:col-span-2">
                <div className="rounded-xl border bg-card p-6 shadow-sm space-y-5">
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Slide Content
                    </h2>

                    <Field label="Headline" required error={errors.headline}>
                        <Input
                            value={data.headline}
                            onChange={e => setData('headline', e.target.value)}
                            placeholder="e.g. Empowering Businesses to Grow"
                            autoFocus
                        />
                    </Field>

                    <Field label="Subtext" error={errors.subtext}>
                        <Textarea
                            value={data.subtext ?? ''}
                            onChange={e => setData('subtext', e.target.value)}
                            placeholder="Supporting text shown below the headline…"
                            rows={3}
                        />
                    </Field>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Button Label" hint="Leave blank to hide the button" error={errors.btn_label}>
                            <Input
                                value={data.btn_label ?? ''}
                                onChange={e => setData('btn_label', e.target.value)}
                                placeholder="e.g. Learn More"
                            />
                        </Field>
                        <Field label="Button URL" error={errors.btn_url}>
                            <Input
                                value={data.btn_url ?? ''}
                                onChange={e => setData('btn_url', e.target.value)}
                                placeholder="e.g. /services"
                            />
                        </Field>
                    </div>
                </div>

                {/* Background image picker */}
                <div className="rounded-xl border bg-card p-6 shadow-sm space-y-4">
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Background Image
                    </h2>

                    {/* Selected preview */}
                    {selectedMedia ? (
                        <div className="relative overflow-hidden rounded-lg border">
                            <img
                                src={selectedMedia.url}
                                alt={selectedMedia.alt_text ?? selectedMedia.original_name}
                                className="h-40 w-full object-cover"
                            />
                            {/* Simulated headline overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center px-6">
                                <p className="text-lg font-bold text-white drop-shadow">
                                    {data.headline || 'Your headline here'}
                                </p>
                                {data.subtext && (
                                    <p className="mt-1 text-sm text-white/80 drop-shadow line-clamp-2">
                                        {data.subtext}
                                    </p>
                                )}
                                {data.btn_label && (
                                    <div className="mt-3 rounded-md bg-white px-4 py-1.5 text-xs font-semibold text-black">
                                        {data.btn_label}
                                    </div>
                                )}
                            </div>
                            <button
                                type="button"
                                onClick={() => setData('media_id', null)}
                                className="absolute right-2 top-2 rounded-full bg-black/60 p-1 text-white hover:bg-black/80 transition-colors"
                            >
                                <X className="h-3.5 w-3.5" />
                            </button>
                        </div>
                    ) : (
                        <div className="flex h-40 w-full flex-col items-center justify-center rounded-lg border border-dashed bg-muted/20 text-muted-foreground">
                            <ImageIcon className="mb-2 h-8 w-8 opacity-40" />
                            <p className="text-xs">No image selected</p>
                        </div>
                    )}

                    {/* Image grid picker */}
                    {media.length > 0 && (
                        <div className="max-h-52 overflow-y-auto">
                            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
                                {media.map(m => (
                                    <button
                                        key={m.id}
                                        type="button"
                                        onClick={() => setData('media_id', m.id === data.media_id ? null : m.id)}
                                        className={cn(
                                            'relative aspect-video overflow-hidden rounded-lg border-2 transition-all',
                                            data.media_id === m.id
                                                ? 'border-primary ring-2 ring-primary/30'
                                                : 'border-transparent hover:border-primary/40',
                                        )}
                                        title={m.original_name}
                                    >
                                        <img
                                            src={m.url}
                                            alt={m.alt_text ?? m.original_name}
                                            className="h-full w-full object-cover"
                                        />
                                        {data.media_id === m.id && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                                                <div className="rounded-full bg-primary p-1">
                                                    <Save className="h-3 w-3 text-primary-foreground" />
                                                </div>
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {media.length === 0 && (
                        <p className="text-xs text-muted-foreground">
                            No images in the media library yet.{' '}
                            <a href="/media" className="text-primary hover:underline">Upload images →</a>
                        </p>
                    )}
                </div>
            </div>

            {/* ── Right: settings ───────────────────────────────────────── */}
            <div className="space-y-4">
                <div className="rounded-xl border bg-card p-6 shadow-sm space-y-5">
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Settings
                    </h2>

                    <Field label="Sort Order" hint="Lower = shown first" error={errors.sort_order}>
                        <Input
                            type="number"
                            min={0}
                            value={data.sort_order}
                            onChange={e => setData('sort_order', parseInt(e.target.value) || 0)}
                        />
                    </Field>

                    {/* Active toggle */}
                    <div className="flex items-center justify-between rounded-lg border bg-muted/20 px-4 py-3">
                        <div>
                            <p className="text-sm font-medium">Active</p>
                            <p className="text-xs text-muted-foreground">Show on site</p>
                        </div>
                        <button
                            type="button"
                            role="switch"
                            aria-checked={data.is_active}
                            onClick={() => setData('is_active', !data.is_active)}
                            className={cn(
                                'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 transition-colors',
                                data.is_active ? 'border-primary bg-primary' : 'border-muted bg-muted',
                            )}
                        >
                            <span className={cn(
                                'pointer-events-none block h-4 w-4 rounded-full bg-white shadow-md transition-transform mt-px',
                                data.is_active ? 'translate-x-4 ml-0.5' : 'translate-x-0.5',
                            )} />
                        </button>
                    </div>

                    <div className="flex gap-2 pt-1">
                        <Button
                            type="button" variant="outline" className="flex-1"
                            onClick={() => window.history.back()}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing} className="flex-1 gap-2">
                            {processing
                                ? <Loader2 className="h-4 w-4 animate-spin" />
                                : <Save className="h-4 w-4" />
                            }
                            {mode === 'create' ? 'Create Slide' : 'Save Changes'}
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    );
}
