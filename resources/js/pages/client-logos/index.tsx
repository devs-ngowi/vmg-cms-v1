import AppLayout from '@/layouts/app-layout';
import { Head, router, useForm } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
    Dialog, DialogContent, DialogHeader, DialogTitle,
} from '@/components/ui/dialog';
import type { BreadcrumbItem } from '@/types';
import {
    Building2, ExternalLink, GripVertical, ImageIcon,
    Pencil, Plus, Power, Trash2, X,
} from 'lucide-react';
import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────

type MediaItem = {
    id:            number;
    filename:      string;
    original_name: string;
    alt_text:      string | null;
    url:           string;
};

type Logo = {
    id:          number;
    name:        string;
    website_url: string | null;
    sort_order:  number;
    is_active:   boolean;
    media:       MediaItem | null;
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard',    href: '/dashboard' },
    { title: 'Client Logos', href: '/client-logos' },
];

// ── Media picker ──────────────────────────────────────────────────────────────

function MediaPicker({
    media,
    selected,
    onSelect,
}: {
    media:    MediaItem[];
    selected: number | null;
    onSelect: (id: number | null) => void;
}) {
    const selectedItem = media.find(m => m.id === selected);

    return (
        <div className="flex flex-col gap-2">
            {/* Selected preview */}
            {selectedItem ? (
                <div className="relative flex items-center gap-3 rounded-lg border bg-muted/20 px-3 py-2">
                    <img
                        src={selectedItem.url}
                        alt={selectedItem.alt_text ?? selectedItem.original_name}
                        className="h-10 w-20 object-contain"
                    />
                    <span className="min-w-0 flex-1 truncate text-xs text-muted-foreground">
                        {selectedItem.original_name}
                    </span>
                    <button type="button" onClick={() => onSelect(null)}>
                        <X className="h-3.5 w-3.5 text-muted-foreground hover:text-destructive" />
                    </button>
                </div>
            ) : (
                <div className="flex h-12 items-center justify-center rounded-lg border border-dashed bg-muted/10 text-xs text-muted-foreground">
                    No image selected
                </div>
            )}

            {/* Grid picker */}
            {media.length > 0 && (
                <div className="max-h-36 overflow-y-auto rounded-lg border bg-muted/10 p-2">
                    <div className="grid grid-cols-4 gap-1.5">
                        {media.map(m => (
                            <button
                                key={m.id}
                                type="button"
                                onClick={() => onSelect(m.id === selected ? null : m.id)}
                                className={cn(
                                    'flex aspect-video items-center justify-center overflow-hidden rounded-md border-2 bg-white p-1 transition-all',
                                    selected === m.id
                                        ? 'border-primary ring-2 ring-primary/20'
                                        : 'border-transparent hover:border-primary/30',
                                )}
                                title={m.original_name}
                            >
                                <img
                                    src={m.url}
                                    alt={m.alt_text ?? m.original_name}
                                    className="h-full w-full object-contain"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {media.length === 0 && (
                <p className="text-xs text-muted-foreground">
                    No images yet.{' '}
                    <a href="/media" className="text-primary hover:underline">Upload in Media Library →</a>
                </p>
            )}
        </div>
    );
}

// ── Add logo form ─────────────────────────────────────────────────────────────

function AddLogoForm({ media }: { media: MediaItem[] }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name:        '',
        media_id:    null as number | null,
        website_url: '',
        is_active:   true,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/client-logos', { onSuccess: () => reset() });
    };

    return (
        <form onSubmit={submit} className="space-y-4">
            <div className="flex flex-col gap-1.5">
                <Label className={cn('text-sm font-medium', errors.name && 'text-destructive')}>
                    Client Name <span className="text-destructive">*</span>
                </Label>
                <Input
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                    placeholder="e.g. Acme Corporation"
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
                <Label className={cn('text-sm font-medium', errors.media_id && 'text-destructive')}>
                    Logo Image <span className="text-destructive">*</span>
                </Label>
                <MediaPicker
                    media={media}
                    selected={data.media_id}
                    onSelect={id => setData('media_id', id)}
                />
                {errors.media_id && <p className="text-xs text-destructive">{errors.media_id}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium">
                    Website URL <span className="text-muted-foreground font-normal">(optional)</span>
                </Label>
                <Input
                    type="url"
                    value={data.website_url}
                    onChange={e => setData('website_url', e.target.value)}
                    placeholder="https://client.com"
                />
                {errors.website_url && <p className="text-xs text-destructive">{errors.website_url}</p>}
            </div>

            {/* Active */}
            <div className="flex items-center justify-between rounded-lg border bg-muted/20 px-3 py-2.5">
                <span className="text-sm font-medium">Show on site</span>
                <button
                    type="button"
                    onClick={() => setData('is_active', !data.is_active)}
                    className={cn(
                        'relative inline-flex h-5 w-9 shrink-0 rounded-full border-2 transition-colors',
                        data.is_active ? 'border-primary bg-primary' : 'border-muted bg-muted',
                    )}
                >
                    <span className={cn(
                        'block h-3.5 w-3.5 rounded-full bg-white shadow transition-transform mt-px',
                        data.is_active ? 'translate-x-3.5 ml-px' : 'translate-x-px',
                    )} />
                </button>
            </div>

            <Button type="submit" disabled={processing} className="w-full gap-2">
                <Plus className="h-4 w-4" />
                {processing ? 'Adding…' : 'Add Logo'}
            </Button>
        </form>
    );
}

// ── Edit dialog ───────────────────────────────────────────────────────────────

function EditDialog({ logo, media, onClose }: {
    logo:    Logo;
    media:   MediaItem[];
    onClose: () => void;
}) {
    const { data, setData, patch, processing, errors } = useForm({
        name:        logo.name,
        media_id:    logo.media?.id ?? null as number | null,
        website_url: logo.website_url ?? '',
        is_active:   logo.is_active,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(`/client-logos/${logo.id}`, { onSuccess: onClose });
    };

    return (
        <DialogContent className="sm:max-w-md">
            <DialogHeader>
                <DialogTitle>Edit Logo — {logo.name}</DialogTitle>
            </DialogHeader>
            <form onSubmit={submit} className="space-y-4">
                <div className="flex flex-col gap-1.5">
                    <Label className="text-sm font-medium">
                        Client Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                        autoFocus
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                    <Label className="text-sm font-medium">Logo Image <span className="text-destructive">*</span></Label>
                    <MediaPicker
                        media={media}
                        selected={data.media_id}
                        onSelect={id => setData('media_id', id)}
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <Label className="text-sm font-medium">Website URL</Label>
                    <Input
                        type="url"
                        value={data.website_url}
                        onChange={e => setData('website_url', e.target.value)}
                        placeholder="https://client.com"
                    />
                </div>

                <div className="flex items-center justify-between rounded-lg border bg-muted/20 px-3 py-2.5">
                    <span className="text-sm font-medium">Show on site</span>
                    <button
                        type="button"
                        onClick={() => setData('is_active', !data.is_active)}
                        className={cn(
                            'relative inline-flex h-5 w-9 shrink-0 rounded-full border-2 transition-colors',
                            data.is_active ? 'border-primary bg-primary' : 'border-muted bg-muted',
                        )}
                    >
                        <span className={cn(
                            'block h-3.5 w-3.5 rounded-full bg-white shadow transition-transform mt-px',
                            data.is_active ? 'translate-x-3.5 ml-px' : 'translate-x-px',
                        )} />
                    </button>
                </div>

                <div className="flex gap-2">
                    <Button type="button" variant="outline" className="flex-1" onClick={onClose}>Cancel</Button>
                    <Button type="submit" disabled={processing} className="flex-1">
                        {processing ? 'Saving…' : 'Save Changes'}
                    </Button>
                </div>
            </form>
        </DialogContent>
    );
}

// ── Draggable logo list ───────────────────────────────────────────────────────

function LogoList({
    logos,
    onReorder,
    onEdit,
    onToggle,
    onDelete,
}: {
    logos:     Logo[];
    onReorder: (ordered: Logo[]) => void;
    onEdit:    (logo: Logo) => void;
    onToggle:  (logo: Logo) => void;
    onDelete:  (logo: Logo) => void;
}) {
    const [items, setItems]       = useState<Logo[]>(logos);
    const [dragging, setDragging] = useState<number | null>(null);
    const dragOver                = useRef<number | null>(null);

    // Sync with server-refreshed props
    if (logos.length !== items.length || logos.some((l, i) => l.id !== items[i]?.id)) {
        setItems(logos);
    }

    const onDragStart = (i: number) => setDragging(i);

    const onDragEnter = (i: number) => {
        if (dragging === null || dragging === i) return;
        const next = [...items];
        const [moved] = next.splice(dragging, 1);
        next.splice(i, 0, moved);
        setDragging(i);
        setItems(next);
    };

    const onDragEnd = () => {
        setDragging(null);
        onReorder(items);
    };

    if (items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
                <Building2 className="mb-3 h-8 w-8 text-muted-foreground/30" />
                <p className="text-sm text-muted-foreground">No logos added yet.</p>
                <p className="text-xs text-muted-foreground/70 mt-1">Use the form to add your first client logo.</p>
            </div>
        );
    }

    return (
        <div className="space-y-2">
            {items.map((logo, i) => (
                <div
                    key={logo.id}
                    draggable
                    onDragStart={() => onDragStart(i)}
                    onDragEnter={() => onDragEnter(i)}
                    onDragEnd={onDragEnd}
                    onDragOver={e => e.preventDefault()}
                    className={cn(
                        'group flex items-center gap-0 overflow-hidden rounded-xl border bg-card shadow-sm transition-all',
                        dragging === i ? 'opacity-50 shadow-lg scale-[1.01]' : 'hover:shadow-md',
                        !logo.is_active && 'opacity-55',
                    )}
                >
                    {/* Drag handle */}
                    <div className="flex cursor-grab items-center justify-center self-stretch px-2.5 text-muted-foreground/30 hover:text-muted-foreground bg-muted/20 border-r active:cursor-grabbing">
                        <GripVertical className="h-4 w-4" />
                    </div>

                    {/* Logo image */}
                    <div className="flex h-14 w-24 shrink-0 items-center justify-center border-r bg-white p-2">
                        {logo.media ? (
                            <img
                                src={logo.media.url}
                                alt={logo.media.alt_text ?? logo.name}
                                className="h-full w-full object-contain"
                            />
                        ) : (
                            <ImageIcon className="h-5 w-5 text-muted-foreground/30" />
                        )}
                    </div>

                    {/* Info */}
                    <div className="flex min-w-0 flex-1 items-center gap-3 px-4">
                        <div className="min-w-0">
                            <p className="truncate text-sm font-medium">{logo.name}</p>
                            {logo.website_url && (
                                <a
                                    href={logo.website_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-xs text-primary hover:underline"
                                    onClick={e => e.stopPropagation()}
                                >
                                    <ExternalLink className="h-3 w-3" />
                                    {logo.website_url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                                </a>
                            )}
                        </div>
                        <Badge
                            variant={logo.is_active ? 'default' : 'secondary'}
                            className="ml-auto shrink-0 text-[10px]"
                        >
                            {logo.is_active ? 'Active' : 'Inactive'}
                        </Badge>
                    </div>

                    {/* Actions */}
                    <div className="flex shrink-0 items-center gap-0.5 border-l px-2">
                        <Button
                            variant="ghost" size="icon" className="h-8 w-8"
                            title={logo.is_active ? 'Deactivate' : 'Activate'}
                            onClick={() => onToggle(logo)}
                        >
                            <Power className={cn('h-4 w-4', logo.is_active ? 'text-emerald-500' : 'text-muted-foreground')} />
                        </Button>
                        <Button
                            variant="ghost" size="icon" className="h-8 w-8"
                            onClick={() => onEdit(logo)}
                        >
                            <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost" size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            onClick={() => onDelete(logo)}
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

// ── Ticker preview ────────────────────────────────────────────────────────────

function TickerPreview({ logos }: { logos: Logo[] }) {
    const active = logos.filter(l => l.is_active && l.media);
    if (active.length === 0) return null;

    return (
        <div className="rounded-xl border bg-card p-4 shadow-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Live Preview — Ticker
            </p>
            <div className="overflow-hidden rounded-lg border bg-white">
                <div className="flex items-center gap-8 px-4 py-3 overflow-x-auto scrollbar-none">
                    {[...active, ...active].map((logo, i) => (
                        <img
                            key={`${logo.id}-${i}`}
                            src={logo.media!.url}
                            alt={logo.name}
                            className="h-8 w-auto max-w-[80px] shrink-0 object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                            title={logo.name}
                        />
                    ))}
                </div>
            </div>
            <p className="mt-2 text-[11px] text-muted-foreground">
                {active.length} active logo{active.length !== 1 ? 's' : ''} — scroll to preview all
            </p>
        </div>
    );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ClientLogosIndex({
    logos,
    media,
}: {
    logos: Logo[];
    media: MediaItem[];
}) {
    const [editTarget, setEditTarget]     = useState<Logo | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<Logo | null>(null);

    const handleReorder = (ordered: Logo[]) => {
        router.post('/client-logos/reorder', {
            order: ordered.map(l => l.id),
        }, { preserveScroll: true });
    };

    const handleToggle = (logo: Logo) => {
        router.patch(`/client-logos/${logo.id}/toggle`, {}, { preserveScroll: true });
    };

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/client-logos/${deleteTarget.id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    const activeCount = logos.filter(l => l.is_active).length;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Client Logos" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Client Logos</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        {logos.length} logo{logos.length !== 1 ? 's' : ''} · {activeCount} active
                        {logos.length > 1 && (
                            <span className="ml-2 text-muted-foreground/70">— drag to reorder</span>
                        )}
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">

                    {/* ── Left: add form ─────────────────────────────────── */}
                    <div className="space-y-4 lg:col-span-1">
                        <div className="rounded-xl border bg-card p-6 shadow-sm">
                            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                Add Logo
                            </h2>
                            <AddLogoForm media={media} />
                        </div>

                        <TickerPreview logos={logos} />
                    </div>

                    {/* ── Right: logo list ───────────────────────────────── */}
                    <div className="lg:col-span-2">
                        <LogoList
                            logos={logos}
                            onReorder={handleReorder}
                            onEdit={setEditTarget}
                            onToggle={handleToggle}
                            onDelete={setDeleteTarget}
                        />
                    </div>
                </div>
            </div>

            {/* Edit dialog */}
            <Dialog open={!!editTarget} onOpenChange={() => setEditTarget(null)}>
                {editTarget && (
                    <EditDialog
                        logo={editTarget}
                        media={media}
                        onClose={() => setEditTarget(null)}
                    />
                )}
            </Dialog>

            {/* Delete confirm */}
            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Remove logo?</AlertDialogTitle>
                        <AlertDialogDescription>
                            <strong>{deleteTarget?.name}</strong>'s logo will be removed from the site.
                            The image in the media library will not be deleted.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={confirmDelete}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                            Remove
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </AppLayout>
    );
}
