import AppLayout from '@/layouts/app-layout';
import { Head, router, useForm } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
    Dialog, DialogContent, DialogHeader, DialogTitle,
} from '@/components/ui/dialog';
import type { BreadcrumbItem } from '@/types';
import {
    CheckCircle2, ImageIcon, MessageSquareQuote,
    Pencil, Plus, Star, Trash2, X,
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

type Testimonial = {
    id:          number;
    client_name: string;
    company:     string | null;
    position:    string | null;
    quote:       string;
    rating:      number | null;
    is_featured: boolean;
    is_approved: boolean;
    image:       { id: number; url: string; alt: string } | null;
    created_at:  string;
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard',    href: '/dashboard' },
    { title: 'Testimonials', href: '/testimonials' },
];

// ── Star rating ───────────────────────────────────────────────────────────────

function StarRating({
    value,
    onChange,
    readonly = false,
}: {
    value:     number | null;
    onChange?: (v: number) => void;
    readonly?: boolean;
}) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map(star => (
                <button
                    key={star}
                    type="button"
                    disabled={readonly}
                    onClick={() => !readonly && onChange?.(star === value ? 0 : star)}
                    onMouseEnter={() => !readonly && setHovered(star)}
                    onMouseLeave={() => !readonly && setHovered(null)}
                    className={cn('transition-colors', !readonly && 'hover:scale-110')}
                >
                    <Star
                        className={cn(
                            'h-4 w-4 transition-colors',
                            (hovered ?? value ?? 0) >= star
                                ? 'fill-amber-400 text-amber-400'
                                : 'fill-none text-muted-foreground/30',
                        )}
                    />
                </button>
            ))}
        </div>
    );
}

// ── Avatar ────────────────────────────────────────────────────────────────────

function Avatar({ testimonial, size = 'md' }: { testimonial: Testimonial; size?: 'sm' | 'md' }) {
    const cls = size === 'sm' ? 'h-8 w-8 text-xs' : 'h-11 w-11 text-sm';
    const initials = testimonial.client_name
        .split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();

    if (testimonial.image) {
        return (
            <img
                src={testimonial.image.url}
                alt={testimonial.image.alt}
                className={cn('rounded-full object-cover shrink-0', cls)}
            />
        );
    }
    return (
        <div className={cn(
            'flex shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary',
            cls,
        )}>
            {initials}
        </div>
    );
}

// ── Image picker ──────────────────────────────────────────────────────────────

function ImagePicker({
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
        <div className="space-y-2">
            {selectedItem ? (
                <div className="flex items-center gap-3 rounded-lg border bg-muted/20 px-3 py-2">
                    <img
                        src={selectedItem.url}
                        alt={selectedItem.alt_text ?? selectedItem.original_name}
                        className="h-9 w-9 rounded-full object-cover shrink-0"
                    />
                    <span className="min-w-0 flex-1 truncate text-xs text-muted-foreground">
                        {selectedItem.original_name}
                    </span>
                    <button type="button" onClick={() => onSelect(null)}>
                        <X className="h-3.5 w-3.5 text-muted-foreground hover:text-destructive" />
                    </button>
                </div>
            ) : (
                <div className="flex h-10 items-center justify-center rounded-lg border border-dashed bg-muted/10 text-xs text-muted-foreground">
                    No photo selected
                </div>
            )}

            {media.length > 0 && (
                <div className="max-h-32 overflow-y-auto rounded-lg border bg-muted/10 p-2">
                    <div className="flex flex-wrap gap-2">
                        {media.map(m => (
                            <button
                                key={m.id}
                                type="button"
                                onClick={() => onSelect(m.id === selected ? null : m.id)}
                                className={cn(
                                    'h-10 w-10 overflow-hidden rounded-full border-2 transition-all',
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
        </div>
    );
}

// ── Shared form fields ────────────────────────────────────────────────────────

function TestimonialFields({
    data,
    setData,
    errors,
    media,
}: {
    data:    any;
    setData: any;
    errors:  any;
    media:   MediaItem[];
}) {
    return (
        <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                    <Label className={cn('text-sm font-medium', errors.client_name && 'text-destructive')}>
                        Client Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                        value={data.client_name}
                        onChange={e => setData('client_name', e.target.value)}
                        placeholder="Jane Smith"
                    />
                    {errors.client_name && <p className="text-xs text-destructive">{errors.client_name}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                    <Label className="text-sm font-medium">Company</Label>
                    <Input
                        value={data.company}
                        onChange={e => setData('company', e.target.value)}
                        placeholder="Acme Corp"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <Label className="text-sm font-medium">Position / Title</Label>
                    <Input
                        value={data.position}
                        onChange={e => setData('position', e.target.value)}
                        placeholder="CEO"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <Label className="text-sm font-medium">Rating</Label>
                    <div className="flex h-9 items-center">
                        <StarRating
                            value={data.rating}
                            onChange={v => setData('rating', v || null)}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-1.5">
                <Label className={cn('text-sm font-medium', errors.quote && 'text-destructive')}>
                    Quote <span className="text-destructive">*</span>
                </Label>
                <Textarea
                    value={data.quote}
                    onChange={e => setData('quote', e.target.value)}
                    placeholder="What the client said about your services…"
                    rows={4}
                />
                {errors.quote && <p className="text-xs text-destructive">{errors.quote}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium">
                    Photo <span className="text-muted-foreground font-normal">(optional)</span>
                </Label>
                <ImagePicker
                    media={media}
                    selected={data.image_id}
                    onSelect={id => setData('image_id', id)}
                />
            </div>

            <div className="flex gap-6">
                <label className="flex cursor-pointer items-center gap-2">
                    <div
                        className={cn(
                            'relative inline-flex h-5 w-9 shrink-0 rounded-full border-2 transition-colors',
                            data.is_approved ? 'border-primary bg-primary' : 'border-muted bg-muted',
                        )}
                        onClick={() => setData('is_approved', !data.is_approved)}
                    >
                        <span className={cn(
                            'block h-3.5 w-3.5 rounded-full bg-white shadow transition-transform mt-px',
                            data.is_approved ? 'translate-x-3.5 ml-px' : 'translate-x-px',
                        )} />
                    </div>
                    <span className="text-sm font-medium">Approved</span>
                </label>

                <label className="flex cursor-pointer items-center gap-2">
                    <div
                        className={cn(
                            'relative inline-flex h-5 w-9 shrink-0 rounded-full border-2 transition-colors',
                            data.is_featured ? 'border-amber-500 bg-amber-500' : 'border-muted bg-muted',
                        )}
                        onClick={() => setData('is_featured', !data.is_featured)}
                    >
                        <span className={cn(
                            'block h-3.5 w-3.5 rounded-full bg-white shadow transition-transform mt-px',
                            data.is_featured ? 'translate-x-3.5 ml-px' : 'translate-x-px',
                        )} />
                    </div>
                    <span className="text-sm font-medium">Featured</span>
                </label>
            </div>
        </div>
    );
}

// ── Add form ──────────────────────────────────────────────────────────────────

function AddForm({ media }: { media: MediaItem[] }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        client_name: '',
        company:     '',
        position:    '',
        quote:       '',
        rating:      null as number | null,
        image_id:    null as number | null,
        is_approved: true,
        is_featured: false,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/testimonials', { onSuccess: () => reset() });
    };

    return (
        <form onSubmit={submit} className="space-y-4">
            <TestimonialFields data={data} setData={setData} errors={errors} media={media} />
            <Button type="submit" disabled={processing} className="w-full gap-2">
                <Plus className="h-4 w-4" />
                {processing ? 'Adding…' : 'Add Testimonial'}
            </Button>
        </form>
    );
}

// ── Edit dialog ───────────────────────────────────────────────────────────────

function EditDialog({ item, media, onClose }: {
    item:    Testimonial;
    media:   MediaItem[];
    onClose: () => void;
}) {
    const { data, setData, patch, processing, errors } = useForm({
        client_name: item.client_name,
        company:     item.company     ?? '',
        position:    item.position    ?? '',
        quote:       item.quote,
        rating:      item.rating,
        image_id:    item.image?.id   ?? null as number | null,
        is_approved: item.is_approved,
        is_featured: item.is_featured,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(`/testimonials/${item.id}`, { onSuccess: onClose });
    };

    return (
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
                <DialogTitle>Edit — {item.client_name}</DialogTitle>
            </DialogHeader>
            <form onSubmit={submit} className="space-y-4 pb-2">
                <TestimonialFields data={data} setData={setData} errors={errors} media={media} />
                <div className="flex gap-2 pt-2">
                    <Button type="button" variant="outline" className="flex-1" onClick={onClose}>Cancel</Button>
                    <Button type="submit" disabled={processing} className="flex-1">
                        {processing ? 'Saving…' : 'Save Changes'}
                    </Button>
                </div>
            </form>
        </DialogContent>
    );
}

// ── Testimonial card ──────────────────────────────────────────────────────────

function TestimonialCard({
    item,
    onEdit,
    onApprove,
    onFeature,
    onDelete,
}: {
    item:      Testimonial;
    onEdit:    (t: Testimonial) => void;
    onApprove: (t: Testimonial) => void;
    onFeature: (t: Testimonial) => void;
    onDelete:  (t: Testimonial) => void;
}) {
    return (
        <div className={cn(
            'group relative flex flex-col rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md',
            !item.is_approved && 'opacity-60',
            item.is_featured && 'ring-2 ring-amber-400/40 border-amber-200',
        )}>
            {/* Featured star */}
            {item.is_featured && (
                <div className="absolute right-3 top-3">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </div>
            )}

            {/* Quote icon */}
            <MessageSquareQuote className="mb-3 h-6 w-6 text-primary/30" />

            {/* Quote text */}
            <p className="flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-4">
                "{item.quote}"
            </p>

            {/* Rating */}
            {item.rating && (
                <div className="mt-3">
                    <StarRating value={item.rating} readonly />
                </div>
            )}

            {/* Client info */}
            <div className="mt-4 flex items-center gap-3 border-t pt-4">
                <Avatar testimonial={item} />
                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{item.client_name}</p>
                    {(item.position || item.company) && (
                        <p className="truncate text-xs text-muted-foreground">
                            {[item.position, item.company].filter(Boolean).join(' · ')}
                        </p>
                    )}
                </div>
            </div>

            {/* Status badges */}
            <div className="mt-3 flex flex-wrap gap-1.5">
                <Badge
                    variant={item.is_approved ? 'default' : 'secondary'}
                    className="cursor-pointer text-[10px] gap-1"
                    onClick={() => onApprove(item)}
                >
                    <CheckCircle2 className="h-3 w-3" />
                    {item.is_approved ? 'Approved' : 'Pending'}
                </Badge>
                <Badge
                    variant="outline"
                    className={cn(
                        'cursor-pointer text-[10px] gap-1',
                        item.is_featured && 'border-amber-400 text-amber-600 bg-amber-50',
                    )}
                    onClick={() => onFeature(item)}
                >
                    <Star className={cn('h-3 w-3', item.is_featured && 'fill-amber-400')} />
                    {item.is_featured ? 'Featured' : 'Feature'}
                </Badge>
            </div>

            {/* Actions — visible on hover */}
            <div className="absolute right-3 bottom-3 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                <Button
                    variant="ghost" size="icon" className="h-7 w-7"
                    onClick={() => onEdit(item)}
                >
                    <Pencil className="h-3.5 w-3.5" />
                </Button>
                <Button
                    variant="ghost" size="icon"
                    className="h-7 w-7 text-muted-foreground hover:text-destructive"
                    onClick={() => onDelete(item)}
                >
                    <Trash2 className="h-3.5 w-3.5" />
                </Button>
            </div>
        </div>
    );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function TestimonialsIndex({
    testimonials,
    media,
}: {
    testimonials: Testimonial[];
    media:        MediaItem[];
}) {
    const [editTarget, setEditTarget]     = useState<Testimonial | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<Testimonial | null>(null);
    const [filter, setFilter]             = useState<'all' | 'approved' | 'pending' | 'featured'>('all');

    const filtered = testimonials.filter(t => {
        if (filter === 'approved') return  t.is_approved;
        if (filter === 'pending')  return !t.is_approved;
        if (filter === 'featured') return  t.is_featured;
        return true;
    });

    const approve = (t: Testimonial) =>
        router.patch(`/testimonials/${t.id}/approve`, {}, { preserveScroll: true });

    const feature = (t: Testimonial) =>
        router.patch(`/testimonials/${t.id}/feature`, {}, { preserveScroll: true });

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/testimonials/${deleteTarget.id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    const approvedCount = testimonials.filter(t => t.is_approved).length;
    const featuredCount = testimonials.filter(t => t.is_featured).length;
    const pendingCount  = testimonials.filter(t => !t.is_approved).length;

    const filterTabs = [
        { key: 'all',      label: `All (${testimonials.length})` },
        { key: 'approved', label: `Approved (${approvedCount})` },
        { key: 'pending',  label: `Pending (${pendingCount})` },
        { key: 'featured', label: `Featured (${featuredCount})` },
    ] as const;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Testimonials" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold tracking-tight">Testimonials</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        {testimonials.length} total · {approvedCount} approved · {featuredCount} featured
                        {pendingCount > 0 && (
                            <> · <span className="font-medium text-amber-600">{pendingCount} pending review</span></>
                        )}
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-4">

                    {/* ── Add form ──────────────────────────────────────────── */}
                    <div className="lg:col-span-1">
                        <div className="rounded-xl border bg-card p-6 shadow-sm">
                            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                Add Testimonial
                            </h2>
                            <AddForm media={media} />
                        </div>
                    </div>

                    {/* ── List ─────────────────────────────────────────────── */}
                    <div className="lg:col-span-3 space-y-4">

                        {/* Filter tabs */}
                        <div className="flex flex-wrap gap-1.5">
                            {filterTabs.map(tab => (
                                <button
                                    key={tab.key}
                                    onClick={() => setFilter(tab.key)}
                                    className={cn(
                                        'rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors',
                                        filter === tab.key
                                            ? 'bg-primary text-primary-foreground border-primary'
                                            : 'bg-card hover:bg-muted/50 text-muted-foreground',
                                    )}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {filtered.length === 0 ? (
                            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
                                <MessageSquareQuote className="mb-3 h-10 w-10 text-muted-foreground/30" />
                                <p className="text-sm text-muted-foreground">No testimonials here.</p>
                            </div>
                        ) : (
                            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                                {filtered.map(item => (
                                    <TestimonialCard
                                        key={item.id}
                                        item={item}
                                        onEdit={setEditTarget}
                                        onApprove={approve}
                                        onFeature={feature}
                                        onDelete={setDeleteTarget}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Edit dialog */}
            <Dialog open={!!editTarget} onOpenChange={() => setEditTarget(null)}>
                {editTarget && (
                    <EditDialog
                        item={editTarget}
                        media={media}
                        onClose={() => setEditTarget(null)}
                    />
                )}
            </Dialog>

            {/* Delete confirm */}
            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete testimonial?</AlertDialogTitle>
                        <AlertDialogDescription>
                            The testimonial from <strong>{deleteTarget?.client_name}</strong> will be permanently deleted.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={confirmDelete}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </AppLayout>
    );
}
