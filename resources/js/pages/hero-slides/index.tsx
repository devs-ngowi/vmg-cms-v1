import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import type { BreadcrumbItem } from '@/types';
import {
    GripVertical, ImageIcon, Pencil, Plus, Power, Trash2,
} from 'lucide-react';
import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────

type Slide = {
    id:         number;
    headline:   string;
    subtext:    string | null;
    btn_label:  string | null;
    btn_url:    string | null;
    sort_order: number;
    is_active:  boolean;
    media:      { id: number; filename: string; alt_text: string | null; url: string } | null;
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard',   href: '/dashboard' },
    { title: 'Hero Slides', href: '/hero-slides' },
];

// ── Drag-to-reorder list ──────────────────────────────────────────────────────

function SortableList({
    slides,
    onReorder,
    onToggle,
    onDelete,
}: {
    slides:    Slide[];
    onReorder: (ordered: Slide[]) => void;
    onToggle:  (slide: Slide) => void;
    onDelete:  (slide: Slide) => void;
}) {
    const [items, setItems]       = useState<Slide[]>(slides);
    const [dragging, setDragging] = useState<number | null>(null);
    const dragOver                = useRef<number | null>(null);

    // Keep in sync when parent refreshes (Inertia reload)
    if (slides.length !== items.length || slides.some((s, i) => s.id !== items[i]?.id)) {
        setItems(slides);
    }

    const onDragStart = (index: number) => setDragging(index);

    const onDragEnter = (index: number) => {
        dragOver.current = index;
        if (dragging === null || dragging === index) return;
        const next = [...items];
        const [moved] = next.splice(dragging, 1);
        next.splice(index, 0, moved);
        setDragging(index);
        setItems(next);
    };

    const onDragEnd = () => {
        setDragging(null);
        dragOver.current = null;
        onReorder(items);
    };

    return (
        <div className="space-y-3">
            {items.map((slide, index) => (
                <div
                    key={slide.id}
                    draggable
                    onDragStart={() => onDragStart(index)}
                    onDragEnter={() => onDragEnter(index)}
                    onDragEnd={onDragEnd}
                    onDragOver={e => e.preventDefault()}
                    className={cn(
                        'group flex items-stretch gap-0 overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-150',
                        dragging === index ? 'opacity-50 shadow-lg scale-[1.01]' : 'hover:shadow-md',
                        !slide.is_active && 'opacity-60',
                    )}
                >
                    {/* Drag handle */}
                    <div className="flex cursor-grab items-center justify-center px-3 text-muted-foreground/40 hover:text-muted-foreground active:cursor-grabbing bg-muted/20 border-r">
                        <GripVertical className="h-5 w-5" />
                    </div>

                    {/* Thumbnail */}
                    <div className="relative w-32 shrink-0 overflow-hidden bg-muted sm:w-44">
                        {slide.media ? (
                            <>
                                <img
                                    src={slide.media.url}
                                    alt={slide.media.alt_text ?? slide.headline}
                                    className="h-full w-full object-cover"
                                    style={{ minHeight: 80 }}
                                />
                                {/* Mini overlay preview */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 px-2 text-center opacity-0 transition-opacity group-hover:opacity-100">
                                    <p className="line-clamp-2 text-[10px] font-bold text-white drop-shadow">
                                        {slide.headline}
                                    </p>
                                </div>
                            </>
                        ) : (
                            <div className="flex h-full min-h-[80px] w-full items-center justify-center">
                                <ImageIcon className="h-6 w-6 text-muted-foreground/30" />
                            </div>
                        )}
                        {/* Position badge */}
                        <div className="absolute left-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-black/60 text-[10px] font-bold text-white">
                            {index + 1}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 px-4 py-3">
                        <div className="flex flex-wrap items-center gap-2">
                            <p className="truncate font-medium">{slide.headline}</p>
                            <Badge variant={slide.is_active ? 'default' : 'secondary'} className="text-[10px]">
                                {slide.is_active ? 'Active' : 'Inactive'}
                            </Badge>
                        </div>
                        {slide.subtext && (
                            <p className="truncate text-xs text-muted-foreground">{slide.subtext}</p>
                        )}
                        {slide.btn_label && (
                            <p className="text-xs text-muted-foreground/70">
                                Button: <span className="text-primary">{slide.btn_label}</span>
                                {slide.btn_url && <> → {slide.btn_url}</>}
                            </p>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex shrink-0 items-center gap-1 border-l px-3">
                        <Button
                            variant="ghost" size="icon" className="h-8 w-8"
                            title={slide.is_active ? 'Deactivate' : 'Activate'}
                            onClick={() => onToggle(slide)}
                        >
                            <Power className={cn(
                                'h-4 w-4',
                                slide.is_active ? 'text-emerald-500' : 'text-muted-foreground',
                            )} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                            <Link href={`/hero-slides/${slide.id}/edit`} title="Edit">
                                <Pencil className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button
                            variant="ghost" size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            title="Delete"
                            onClick={() => onDelete(slide)}
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HeroSlidesIndex({ slides }: { slides: Slide[] }) {
    const [deleteTarget, setDeleteTarget] = useState<Slide | null>(null);

    const handleReorder = (ordered: Slide[]) => {
        router.post('/hero-slides/reorder', {
            order: ordered.map(s => s.id),
        }, { preserveScroll: true });
    };

    const handleToggle = (slide: Slide) => {
        router.patch(`/hero-slides/${slide.id}/toggle`, {}, { preserveScroll: true });
    };

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/hero-slides/${deleteTarget.id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    const activeCount = slides.filter(s => s.is_active).length;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Hero Slides" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Hero Slides</h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            {slides.length} slide{slides.length !== 1 ? 's' : ''} · {activeCount} active
                            {slides.length > 1 && (
                                <span className="ml-2 text-muted-foreground/70">— drag to reorder</span>
                            )}
                        </p>
                    </div>
                    <Button asChild size="sm" className="gap-1.5">
                        <Link href="/hero-slides/create">
                            <Plus className="h-4 w-4" />
                            New Slide
                        </Link>
                    </Button>
                </div>

                {slides.length === 0 ? (
                    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-20 text-center">
                        <ImageIcon className="mb-3 h-10 w-10 text-muted-foreground/30" />
                        <p className="text-sm font-medium">No slides yet</p>
                        <p className="mt-1 text-xs text-muted-foreground">Create your first hero slide to get started.</p>
                        <Button asChild size="sm" className="mt-4 gap-1.5">
                            <Link href="/hero-slides/create">
                                <Plus className="h-4 w-4" /> New Slide
                            </Link>
                        </Button>
                    </div>
                ) : (
                    <SortableList
                        slides={slides}
                        onReorder={handleReorder}
                        onToggle={handleToggle}
                        onDelete={setDeleteTarget}
                    />
                )}
            </div>

            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete slide?</AlertDialogTitle>
                        <AlertDialogDescription>
                            <strong>{deleteTarget?.headline}</strong> will be permanently deleted.
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
