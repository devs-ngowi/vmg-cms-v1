import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import type { BreadcrumbItem } from '@/types';
import {
    AlertCircle, CheckCircle2, ExternalLink, ImageIcon,
    Loader2, Save, Search, X,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────

type MediaItem = {
    id:            number;
    filename:      string;
    original_name: string;
    alt_text:      string | null;
    url:           string;
};

type SeoData = {
    id:               number;
    meta_title:       string;
    meta_description: string;
    og_image_id:      number | null;
    canonical_url:    string;
    robots:           string;
    og_image:         { id: number; url: string; alt: string } | null;
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'SEO',       href: '/seo' },
];

// ── Character counter ─────────────────────────────────────────────────────────

function CharCount({ value, max, warn }: { value: string; max: number; warn: number }) {
    const len = value.length;
    const over   = len > max;
    const close  = len >= warn;
    const good   = len > 0 && !over && !close;

    return (
        <div className="flex items-center gap-1.5 text-xs">
            <span className={cn(
                'tabular-nums font-medium',
                over  ? 'text-destructive' :
                close ? 'text-amber-500' :
                good  ? 'text-emerald-600' :
                        'text-muted-foreground',
            )}>
                {len}/{max}
            </span>
            {over  && <AlertCircle  className="h-3 w-3 text-destructive" />}
            {good  && <CheckCircle2 className="h-3 w-3 text-emerald-600" />}
        </div>
    );
}

// ── SERP preview ──────────────────────────────────────────────────────────────

function SerpPreview({ title, description, url }: {
    title:       string;
    description: string;
    url:         string;
}) {
    const displayUrl = url || 'https://yoursite.com';
    const displayTitle = title || 'Page Title — Your Site';
    const displayDesc  = description || 'A description of this page will appear here in Google search results.';

    return (
        <div className="rounded-xl border bg-card p-5 shadow-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                <Search className="h-3.5 w-3.5" /> Google Search Preview
            </p>
            <div className="rounded-lg border bg-white p-4 font-sans">
                {/* URL */}
                <div className="flex items-center gap-1 mb-1">
                    <div className="h-4 w-4 rounded-full bg-muted shrink-0" />
                    <p className="text-xs text-slate-500 truncate">{displayUrl}</p>
                    <ExternalLink className="h-3 w-3 text-slate-400 shrink-0 ml-auto" />
                </div>
                {/* Title */}
                <p className={cn(
                    'text-[18px] leading-snug font-medium truncate',
                    title ? 'text-blue-700' : 'text-blue-400',
                )}>
                    {displayTitle}
                </p>
                {/* Description */}
                <p className={cn(
                    'text-sm mt-1 line-clamp-2 leading-relaxed',
                    description ? 'text-slate-600' : 'text-slate-400',
                )}>
                    {displayDesc}
                </p>
            </div>
        </div>
    );
}

// ── OG Card preview ───────────────────────────────────────────────────────────

function OgPreview({ title, description, imageUrl, url }: {
    title:       string;
    description: string;
    imageUrl:    string | null;
    url:         string;
}) {
    const hostname = url ? (() => { try { return new URL(url).hostname; } catch { return url; } })() : 'yoursite.com';

    return (
        <div className="rounded-xl border bg-card p-5 shadow-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Social / OG Preview
            </p>
            <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
                {/* OG Image */}
                <div className="aspect-[1200/630] w-full bg-muted flex items-center justify-center overflow-hidden">
                    {imageUrl
                        ? <img src={imageUrl} alt="OG preview" className="w-full h-full object-cover" />
                        : (
                            <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
                                <ImageIcon className="h-10 w-10" />
                                <p className="text-xs">No OG image selected</p>
                            </div>
                        )
                    }
                </div>
                {/* Card body */}
                <div className="border-t px-4 py-3 bg-slate-50">
                    <p className="text-[11px] uppercase tracking-widest text-slate-400">{hostname}</p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-800 truncate">
                        {title || 'Page Title'}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500 line-clamp-2">
                        {description || 'Page description'}
                    </p>
                </div>
            </div>
        </div>
    );
}

// ── OG Image picker ───────────────────────────────────────────────────────────

function OgImagePicker({ media, selected, onSelect }: {
    media:    MediaItem[];
    selected: number | null;
    onSelect: (id: number | null) => void;
}) {
    const selectedItem = media.find(m => m.id === selected);

    return (
        <div className="space-y-3">
            {selectedItem ? (
                <div className="relative overflow-hidden rounded-lg border">
                    <img
                        src={selectedItem.url}
                        alt={selectedItem.alt_text ?? selectedItem.original_name}
                        className="aspect-[1200/630] w-full object-cover"
                    />
                    <button
                        type="button"
                        onClick={() => onSelect(null)}
                        className="absolute right-2 top-2 rounded-full bg-black/60 p-1 text-white hover:bg-black/80 transition-colors"
                    >
                        <X className="h-3.5 w-3.5" />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-3 py-1.5">
                        <p className="truncate text-xs text-white">{selectedItem.original_name}</p>
                    </div>
                </div>
            ) : (
                <div className="flex aspect-[1200/630] w-full items-center justify-center rounded-lg border border-dashed bg-muted/20">
                    <div className="text-center text-muted-foreground">
                        <ImageIcon className="mx-auto mb-2 h-8 w-8 opacity-40" />
                        <p className="text-xs">No OG image selected</p>
                        <p className="text-[11px] text-muted-foreground/60 mt-0.5">Recommended: 1200 × 630 px</p>
                    </div>
                </div>
            )}

            {/* Grid picker */}
            {media.length > 0 && (
                <div className="max-h-40 overflow-y-auto rounded-lg border bg-muted/10 p-2">
                    <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4">
                        {media.map(m => (
                            <button
                                key={m.id}
                                type="button"
                                onClick={() => onSelect(m.id === selected ? null : m.id)}
                                className={cn(
                                    'aspect-video overflow-hidden rounded-md border-2 transition-all',
                                    selected === m.id
                                        ? 'border-primary ring-2 ring-primary/20'
                                        : 'border-transparent hover:border-primary/30',
                                )}
                                title={m.original_name}
                            >
                                <img src={m.url} alt="" className="h-full w-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {media.length === 0 && (
                <p className="text-xs text-muted-foreground">
                    No images in media library.{' '}
                    <a href="/media" className="text-primary hover:underline">Upload images →</a>
                </p>
            )}
        </div>
    );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SeoIndex({
    seo,
    media,
    robots_options,
}: {
    seo:            SeoData;
    media:          MediaItem[];
    robots_options: string[];
}) {
    const { data, setData, post, processing, isDirty, errors } = useForm({
        meta_title:       seo.meta_title       ?? '',
        meta_description: seo.meta_description ?? '',
        og_image_id:      seo.og_image_id      ?? null as number | null,
        canonical_url:    seo.canonical_url    ?? '',
        robots:           seo.robots           ?? 'index, follow',
    });

    // Live OG image URL for previews
    const ogImageUrl = data.og_image_id
        ? (media.find(m => m.id === data.og_image_id)?.url ?? seo.og_image?.url ?? null)
        : null;

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/seo', { preserveScroll: true });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="SEO Settings" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">SEO Settings</h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Default meta tags and Open Graph settings for the site.
                        </p>
                    </div>
                </div>

                <form onSubmit={submit} className="grid gap-6 xl:grid-cols-5">

                    {/* ── Left: fields ───────────────────────────── (3 cols) */}
                    <div className="space-y-6 xl:col-span-3">

                        {/* Core meta */}
                        <div className="rounded-xl border bg-card p-6 shadow-sm space-y-5">
                            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                Meta Tags
                            </h2>

                            {/* Meta title */}
                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <Label className="text-sm font-medium">Meta Title</Label>
                                    <CharCount value={data.meta_title} max={70} warn={60} />
                                </div>
                                <Input
                                    value={data.meta_title}
                                    onChange={e => setData('meta_title', e.target.value)}
                                    placeholder="Site Name — Tagline"
                                    maxLength={80}
                                />
                                <p className="text-xs text-muted-foreground">
                                    Ideal length: 50–70 characters. Shown in browser tabs and search results.
                                </p>
                                {errors.meta_title && <p className="text-xs text-destructive">{errors.meta_title}</p>}
                            </div>

                            {/* Meta description */}
                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <Label className="text-sm font-medium">Meta Description</Label>
                                    <CharCount value={data.meta_description} max={160} warn={140} />
                                </div>
                                <Textarea
                                    value={data.meta_description}
                                    onChange={e => setData('meta_description', e.target.value)}
                                    placeholder="A concise summary of your site for search engines…"
                                    rows={3}
                                    maxLength={180}
                                />
                                <p className="text-xs text-muted-foreground">
                                    Ideal length: 120–160 characters.
                                </p>
                                {errors.meta_description && <p className="text-xs text-destructive">{errors.meta_description}</p>}
                            </div>
                        </div>

                        {/* Technical */}
                        <div className="rounded-xl border bg-card p-6 shadow-sm space-y-5">
                            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                Technical
                            </h2>

                            {/* Canonical */}
                            <div className="space-y-1.5">
                                <Label className="text-sm font-medium">
                                    Canonical URL{' '}
                                    <span className="text-muted-foreground font-normal">(optional)</span>
                                </Label>
                                <Input
                                    type="url"
                                    value={data.canonical_url}
                                    onChange={e => setData('canonical_url', e.target.value)}
                                    placeholder="https://yoursite.com"
                                />
                                <p className="text-xs text-muted-foreground">
                                    The preferred URL for this site. Leave blank to omit the canonical tag.
                                </p>
                                {errors.canonical_url && <p className="text-xs text-destructive">{errors.canonical_url}</p>}
                            </div>

                            {/* Robots */}
                            <div className="space-y-1.5">
                                <Label className="text-sm font-medium">Robots Directive</Label>
                                <Select
                                    value={data.robots}
                                    onValueChange={v => setData('robots', v)}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {robots_options.map(opt => (
                                            <SelectItem key={opt} value={opt}>
                                                <span className="font-mono text-sm">{opt}</span>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <p className="text-xs text-muted-foreground">
                                    Controls how search engines index and follow links on this site.
                                </p>

                                {/* Robots explainer badges */}
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {[
                                        { directive: 'index',   desc: 'Page added to search results' },
                                        { directive: 'follow',  desc: 'Links on page are crawled' },
                                        { directive: 'noindex', desc: 'Page hidden from search' },
                                        { directive: 'nofollow',desc: 'Links ignored by crawlers' },
                                    ].map(({ directive, desc }) => {
                                        const active = data.robots.includes(directive);
                                        return (
                                            <div
                                                key={directive}
                                                className={cn(
                                                    'flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px]',
                                                    active
                                                        ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                                                        : 'border-muted bg-muted/20 text-muted-foreground line-through opacity-50',
                                                )}
                                            >
                                                <CheckCircle2 className={cn('h-3 w-3', active ? 'text-emerald-500' : 'text-muted-foreground')} />
                                                <code className="font-mono">{directive}</code>
                                                <span className="hidden sm:inline">— {desc}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* OG Image */}
                        <div className="rounded-xl border bg-card p-6 shadow-sm space-y-4">
                            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                Open Graph Image
                            </h2>
                            <p className="text-xs text-muted-foreground">
                                Shown when your site is shared on social platforms. Recommended size: <strong>1200 × 630 px</strong>.
                            </p>
                            <OgImagePicker
                                media={media}
                                selected={data.og_image_id}
                                onSelect={id => setData('og_image_id', id)}
                            />
                        </div>

                        {/* Save */}
                        <div className="flex justify-end">
                            <Button
                                type="submit"
                                disabled={processing || !isDirty}
                                className="gap-2 min-w-[160px]"
                            >
                                {processing
                                    ? <Loader2 className="h-4 w-4 animate-spin" />
                                    : <Save className="h-4 w-4" />
                                }
                                {processing ? 'Saving…' : 'Save SEO Settings'}
                            </Button>
                        </div>
                    </div>

                    {/* ── Right: live previews ────────────────────── (2 cols) */}
                    <div className="space-y-4 xl:col-span-2">
                        <div className="sticky top-6 space-y-4">
                            <SerpPreview
                                title={data.meta_title}
                                description={data.meta_description}
                                url={data.canonical_url}
                            />
                            <OgPreview
                                title={data.meta_title}
                                description={data.meta_description}
                                imageUrl={ogImageUrl}
                                url={data.canonical_url}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
