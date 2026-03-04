import AppLayout from '@/layouts/app-layout';
import { Head, router, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
    Dialog, DialogContent, DialogHeader, DialogTitle,
} from '@/components/ui/dialog';
import type { BreadcrumbItem } from '@/types';
import {
    FileText, Image as ImageIcon, LayoutGrid, List,
    Search, Trash2, Upload, X, Zap,
    ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight,
} from 'lucide-react';
import { useRef, useState, useDeferredValue, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { IconPicker } from '@/components/IconPicker';
//TEST ONE 

// ── Types ─────────────────────────────────────────────────────────────────────

type MediaItem = {
    id:                  number;
    filename:            string;
    original_name:       string;
    mime_type:           string;
    alt_text:            string | null;
    caption:             string | null;
    folder:              string | null;
    url:                 string;
    size_bytes:          number;
    human_size:          string;
    original_size_bytes: number | null;
    was_compressed:      boolean;
    width:               number | null;
    height:              number | null;
    is_image:            boolean;
    is_icon:             boolean;
    icon_class:          string | null;
    uploader:            string | null;
    created_at:          string;
};

type TypeFilter = 'all' | 'images' | 'documents' | 'icons';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Media',     href: '/media' },
];

// ── Page size: 9 items = 3×3 grid, obvious pagination ────────────────────────
const PAGE_SIZE = 9;

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatBytes(bytes: number): string {
    if (bytes >= 1_048_576) return (bytes / 1_048_576).toFixed(1) + ' MB';
    if (bytes >= 1_024)     return Math.round(bytes / 1_024) + ' KB';
    return bytes + ' B';
}

function savings(item: MediaItem): string | null {
    if (!item.was_compressed || !item.original_size_bytes) return null;
    const pct = Math.round((1 - item.size_bytes / item.original_size_bytes) * 100);
    return pct > 0 ? `${pct}% smaller` : null;
}

// ── Category badge ─────────────────────────────────────────────────────────────

function CategoryBadge({ item }: { item: MediaItem }) {
    if (item.is_icon) {
        return (
            <span className="inline-flex items-center gap-1 rounded-full border border-violet-300 bg-violet-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-violet-700 dark:border-violet-700 dark:bg-violet-950/50 dark:text-violet-300">
                <Zap className="h-2.5 w-2.5" />
                Icon
            </span>
        );
    }
    if (item.is_image) {
        return (
            <span className="inline-flex items-center gap-1 rounded-full border border-sky-300 bg-sky-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-700 dark:border-sky-700 dark:bg-sky-950/50 dark:text-sky-300">
                <ImageIcon className="h-2.5 w-2.5" />
                Image
            </span>
        );
    }
    return (
        <span className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700 dark:border-amber-700 dark:bg-amber-950/50 dark:text-amber-300">
            <FileText className="h-2.5 w-2.5" />
            Doc
        </span>
    );
}

// ── Pagination ────────────────────────────────────────────────────────────────

function Pagination({
    currentPage,
    totalPages,
    totalItems,
    pageSize,
    onPageChange,
}: {
    currentPage:  number;
    totalPages:   number;
    totalItems:   number;
    pageSize:     number;
    onPageChange: (page: number) => void;
}) {
    if (totalPages <= 1) return null;

    const from = (currentPage - 1) * pageSize + 1;
    const to   = Math.min(currentPage * pageSize, totalItems);

    // Build page numbers with ellipsis
    const pages: (number | '...')[] = [];
    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
        pages.push(1);
        if (currentPage > 3) pages.push('...');
        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
            pages.push(i);
        }
        if (currentPage < totalPages - 2) pages.push('...');
        pages.push(totalPages);
    }

    const btnBase = 'flex h-8 w-8 items-center justify-center rounded-md border text-xs font-medium transition-colors';

    return (
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between border-t pt-4 mt-2">
            <p className="text-xs text-muted-foreground shrink-0">
                Showing <span className="font-medium text-foreground">{from}–{to}</span> of{' '}
                <span className="font-medium text-foreground">{totalItems}</span> items
                {' · '}Page <span className="font-medium text-foreground">{currentPage}</span> of{' '}
                <span className="font-medium text-foreground">{totalPages}</span>
            </p>

            <div className="flex items-center gap-1">
                {/* First */}
                <button
                    onClick={() => onPageChange(1)}
                    disabled={currentPage === 1}
                    aria-label="First page"
                    className={cn(btnBase, currentPage === 1 ? 'opacity-40 cursor-not-allowed text-muted-foreground' : 'hover:bg-muted/50')}
                >
                    <ChevronsLeft className="h-3.5 w-3.5" />
                </button>

                {/* Prev */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                    className={cn(btnBase, currentPage === 1 ? 'opacity-40 cursor-not-allowed text-muted-foreground' : 'hover:bg-muted/50')}
                >
                    <ChevronLeft className="h-3.5 w-3.5" />
                </button>

                {/* Page numbers */}
                {pages.map((p, i) =>
                    p === '...' ? (
                        <span key={`ellipsis-${i}`} className="flex h-8 w-6 items-center justify-center text-xs text-muted-foreground">
                            …
                        </span>
                    ) : (
                        <button
                            key={p}
                            onClick={() => onPageChange(p as number)}
                            aria-label={`Page ${p}`}
                            aria-current={p === currentPage ? 'page' : undefined}
                            className={cn(
                                btnBase,
                                p === currentPage
                                    ? 'bg-primary text-primary-foreground border-primary'
                                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground',
                            )}
                        >
                            {p}
                        </button>
                    )
                )}

                {/* Next */}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                    className={cn(btnBase, currentPage === totalPages ? 'opacity-40 cursor-not-allowed text-muted-foreground' : 'hover:bg-muted/50')}
                >
                    <ChevronRight className="h-3.5 w-3.5" />
                </button>

                {/* Last */}
                <button
                    onClick={() => onPageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    aria-label="Last page"
                    className={cn(btnBase, currentPage === totalPages ? 'opacity-40 cursor-not-allowed text-muted-foreground' : 'hover:bg-muted/50')}
                >
                    <ChevronsRight className="h-3.5 w-3.5" />
                </button>
            </div>
        </div>
    );
}

// ── Upload zone ───────────────────────────────────────────────────────────────

function UploadZone({ onUploaded }: { onUploaded: () => void }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [drag, setDrag]         = useState(false);
    const [previews, setPreviews] = useState<{ name: string; url: string | null }[]>([]);

    const { data, setData, processing, errors, reset } = useForm<{
        files: File[];
        folder: string;
        alt_text: string;
    }>({ files: [], folder: 'uploads', alt_text: '' });

    const addFiles = (incoming: FileList | null) => {
        if (!incoming) return;
        const arr = Array.from(incoming);
        setData('files', [...data.files, ...arr]);
        setPreviews(p => [
            ...p,
            ...arr.map(f => ({
                name: f.name,
                url: f.type.startsWith('image/') ? URL.createObjectURL(f) : null,
            })),
        ]);
    };

    const removeFile = (i: number) => {
        setData('files', data.files.filter((_, idx) => idx !== i));
        setPreviews(p => p.filter((_, idx) => idx !== i));
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (data.files.length === 0) return;

        const fd = new FormData();
        data.files.forEach(f => fd.append('files[]', f));
        fd.append('folder',   data.folder);
        fd.append('alt_text', data.alt_text);

        router.post('/media', fd as any, {
            forceFormData: true,
            onSuccess: () => { reset(); setPreviews([]); onUploaded(); },
        });
    };

    return (
        <form onSubmit={submit} className="rounded-xl border bg-card p-6 shadow-sm space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Upload Files</h2>

            <div
                className={cn(
                    'flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed py-8 transition-colors',
                    drag ? 'border-primary bg-primary/5' : 'border-muted hover:border-primary/50',
                )}
                onClick={() => inputRef.current?.click()}
                onDragOver={e => { e.preventDefault(); setDrag(true); }}
                onDragLeave={() => setDrag(false)}
                onDrop={e => { e.preventDefault(); setDrag(false); addFiles(e.dataTransfer.files); }}
            >
                <Upload className="mb-2 h-8 w-8 text-muted-foreground" />
                <p className="text-sm font-medium">Drag & drop or click to browse</p>
                <p className="mt-1 text-xs text-muted-foreground">JPEG · PNG · WebP · GIF · SVG · PDF</p>
                <input
                    ref={inputRef} type="file" multiple
                    accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml,application/pdf"
                    className="hidden"
                    onChange={e => addFiles(e.target.files)}
                />
            </div>

            {errors.upload && <p className="text-xs text-destructive">{errors.upload}</p>}

            {previews.length > 0 && (
                <div className="max-h-36 overflow-y-auto space-y-1">
                    {previews.map((p, i) => (
                        <div key={i} className="flex items-center gap-2 rounded-md border bg-muted/30 px-3 py-1.5">
                            {p.url
                                ? <img src={p.url} alt="" className="h-8 w-8 rounded object-cover shrink-0" />
                                : <FileText className="h-8 w-8 shrink-0 text-muted-foreground" />
                            }
                            <span className="min-w-0 flex-1 truncate text-xs">{p.name}</span>
                            <button type="button" onClick={() => removeFile(i)}>
                                <X className="h-3.5 w-3.5 text-muted-foreground hover:text-destructive" />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <div className="grid gap-3">
                <div className="flex flex-col gap-1">
                    <Label className="text-xs font-medium">Folder</Label>
                    <Input value={data.folder} onChange={e => setData('folder', e.target.value)} placeholder="uploads" className="h-8 text-sm" />
                </div>
                <div className="flex flex-col gap-1">
                    <Label className="text-xs font-medium">Alt text <span className="text-muted-foreground">(optional)</span></Label>
                    <Input value={data.alt_text} onChange={e => setData('alt_text', e.target.value)} placeholder="Describe the image…" className="h-8 text-sm" />
                </div>
            </div>

            <Button type="submit" disabled={processing || data.files.length === 0} className="w-full gap-2">
                <Upload className="h-4 w-4" />
                {processing ? 'Uploading…' : `Upload${data.files.length > 0 ? ` (${data.files.length})` : ''}`}
            </Button>
        </form>
    );
}

// ── Icon upload zone ──────────────────────────────────────────────────────────

function IconUploadZone({ onUploaded }: { onUploaded: () => void }) {
    const [selectedIcon, setSelectedIcon] = useState('');
    const [saving, setSaving]             = useState(false);

    const handleSave = () => {
        if (!selectedIcon) return;
        setSaving(true);
        router.post(
            '/media',
            { is_icon: true, icon_class: selectedIcon, alt_text: '', folder: 'icons' },
            {
                onSuccess: () => { setSelectedIcon(''); onUploaded(); },
                onFinish:  () => setSaving(false),
            },
        );
    };

    return (
        <div className="rounded-xl border bg-card p-6 shadow-sm space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Add Icon</h2>
            <IconPicker value={selectedIcon} onChange={setSelectedIcon} />
            {selectedIcon && (
                <Button type="button" disabled={saving} className="w-full gap-2" onClick={handleSave}>
                    <Zap className="h-4 w-4" />
                    {saving ? 'Saving…' : 'Save Icon'}
                </Button>
            )}
        </div>
    );
}

// ── Edit dialog ───────────────────────────────────────────────────────────────

function EditDialog({ item, onClose }: { item: MediaItem; onClose: () => void }) {
    const { data, setData, patch, processing } = useForm({
        alt_text:   item.alt_text   ?? '',
        caption:    item.caption    ?? '',
        folder:     item.folder     ?? 'uploads',
        icon_class: item.icon_class ?? '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(`/media/${item.id}`, { onSuccess: onClose });
    };

    return (
        <DialogContent className="sm:max-w-lg">
            <DialogHeader>
                <DialogTitle className="truncate text-sm font-semibold">{item.original_name}</DialogTitle>
            </DialogHeader>

            {item.is_icon && (
                <div className="flex justify-center py-4">
                    <div className="flex items-center justify-center w-24 h-24 bg-primary/10 rounded-lg">
                        <i className={`${item.icon_class} text-6xl text-primary`} />
                    </div>
                </div>
            )}

            {item.is_image && !item.is_icon && (
                <img src={item.url} alt={item.alt_text ?? item.original_name}
                    className="max-h-48 w-full rounded-lg object-contain bg-muted/30" />
            )}

            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                <CategoryBadge item={item} />
                <span>·</span>
                <span>{item.mime_type}</span>
                {!item.is_icon && <><span>·</span><span>{item.human_size}</span></>}
                {item.width && item.height && !item.is_icon && <><span>·</span><span>{item.width} × {item.height}</span></>}
            </div>

            <form onSubmit={submit} className="grid gap-3">
                {item.is_icon && (
                    <div className="flex flex-col gap-1">
                        <Label className="text-sm font-medium">Icon Class</Label>
                        <Input value={data.icon_class} disabled className="bg-muted/40" />
                    </div>
                )}

                <div className="flex flex-col gap-1">
                    <Label className="text-sm font-medium">Alt text</Label>
                    <Input value={data.alt_text} onChange={e => setData('alt_text', e.target.value)}
                        placeholder={item.is_icon ? 'Describe the icon…' : 'Describe the image…'} />
                </div>

                {!item.is_icon && (
                    <div className="flex flex-col gap-1">
                        <Label className="text-sm font-medium">Caption</Label>
                        <Input value={data.caption} onChange={e => setData('caption', e.target.value)} placeholder="Optional caption…" />
                    </div>
                )}

                <div className="flex flex-col gap-1">
                    <Label className="text-sm font-medium">Folder</Label>
                    <Input value={data.folder} onChange={e => setData('folder', e.target.value)} />
                </div>

                <div className="flex gap-2 justify-end pt-1">
                    <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                    <Button type="submit" disabled={processing}>Save</Button>
                </div>
            </form>
        </DialogContent>
    );
}

// ── Media card ────────────────────────────────────────────────────────────────

function MediaCard({ item, view, onEdit, onDelete }: {
    item:     MediaItem;
    view:     'grid' | 'list';
    onEdit:   (item: MediaItem) => void;
    onDelete: (item: MediaItem) => void;
}) {
    const saving = savings(item);

    if (view === 'list') {
        return (
            <div className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3 hover:bg-muted/30 transition-colors group">
                <div className="h-10 w-14 shrink-0 overflow-hidden rounded-md bg-muted flex items-center justify-center">
                    {item.is_icon
                        ? <i className={`${item.icon_class} text-2xl text-primary`} />
                        : item.is_image
                            ? <img src={item.url} alt="" className="h-full w-full object-cover" />
                            : <FileText className="h-5 w-5 text-muted-foreground" />
                    }
                </div>

                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{item.original_name}</p>
                    <div className="mt-1 flex items-center gap-2 flex-wrap">
                        <CategoryBadge item={item} />
                        <span className="text-xs text-muted-foreground">
                            {item.is_icon ? item.icon_class : `${item.human_size}${item.folder ? ` · ${item.folder}` : ''}`}
                        </span>
                    </div>
                </div>

                {saving && (
                    <Badge className="gap-1 text-[10px] py-0.5 bg-emerald-600 text-white border-0 shrink-0">
                        <Zap className="h-3 w-3" />{saving}
                    </Badge>
                )}

                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    <Button variant="ghost" size="sm" className="h-8 text-xs" onClick={() => onEdit(item)}>Edit</Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive" onClick={() => onDelete(item)}>
                        <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="group relative overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow">
            <div className={cn(
                'overflow-hidden',
                item.is_icon ? 'aspect-square bg-primary/5 flex items-center justify-center' : 'aspect-video bg-muted/50',
            )}>
                {item.is_icon
                    ? <i className={`${item.icon_class} text-6xl text-primary`} />
                    : item.is_image
                        ? <img src={item.url} alt={item.alt_text ?? ''} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        : (
                            <div className="flex h-full w-full flex-col items-center justify-center gap-1 text-muted-foreground">
                                <FileText className="h-8 w-8" />
                                <span className="text-xs uppercase">{item.mime_type.split('/')[1]}</span>
                            </div>
                        )
                }
            </div>

            {/* Category badge — top-left */}
            <div className="absolute left-2 top-2 flex flex-col gap-1">
                <CategoryBadge item={item} />
            </div>

            {/* Compression badge — top-right */}
            {saving && (
                <div className="absolute right-2 top-2">
                    <Badge className="gap-1 text-[10px] py-0.5 bg-emerald-600 text-white border-0">
                        <Zap className="h-3 w-3" />{saving}
                    </Badge>
                </div>
            )}

            <div className="p-3">
                <p className="truncate text-xs font-medium">{item.original_name}</p>
                <p className="mt-0.5 text-[11px] text-muted-foreground">{item.is_icon ? item.icon_class : item.human_size}</p>
            </div>

            <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                <Button size="sm" variant="secondary" onClick={() => onEdit(item)}>Edit</Button>
                <Button size="icon" variant="destructive" className="h-8 w-8" onClick={() => onDelete(item)}>
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MediaIndex({ media }: { media: MediaItem[] }) {
    const [view, setView]             = useState<'grid' | 'list'>('grid');
    const [query, setQuery]           = useState('');
    const [typeFilter, setTypeFilter] = useState<TypeFilter>('all');
    const [page, setPage]             = useState(1);
    const [editTarget, setEditTarget]     = useState<MediaItem | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<MediaItem | null>(null);

    const deferredQuery = useDeferredValue(query);

    // Reset page when filter or search changes
    const handleFilterChange = (filter: TypeFilter) => { setTypeFilter(filter); setPage(1); };
    const handleQueryChange  = (q: string)          => { setQuery(q);           setPage(1); };

    // All filtered items (before pagination)
    const filtered = useMemo(() => media.filter(m => {
        if (typeFilter === 'images'    && (!m.is_image || m.is_icon))  return false;
        if (typeFilter === 'documents' && (m.is_image  || m.is_icon))  return false;
        if (typeFilter === 'icons'     && !m.is_icon)                  return false;

        if (deferredQuery) {
            const q = deferredQuery.toLowerCase();
            return (
                m.original_name.toLowerCase().includes(q) ||
                m.folder?.toLowerCase().includes(q)       ||
                m.alt_text?.toLowerCase().includes(q)     ||
                m.icon_class?.toLowerCase().includes(q)
            );
        }
        return true;
    }), [media, typeFilter, deferredQuery]);

    // Pagination
    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const safePage   = Math.min(page, totalPages);
    const paginated  = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/media/${deleteTarget.id}`, { onFinish: () => setDeleteTarget(null) });
    };

    const totalSize  = media.reduce((s, m) => s + m.size_bytes, 0);
    const imageCount = media.filter(m => m.is_image && !m.is_icon).length;
    const iconCount  = media.filter(m => m.is_icon).length;

    const counts: Record<TypeFilter, number> = {
        all:       media.length,
        images:    imageCount,
        documents: media.filter(m => !m.is_image && !m.is_icon).length,
        icons:     iconCount,
    };

    // Filter icon config for UI
    const filterConfig: { key: TypeFilter; label: string; color: string }[] = [
        { key: 'all',       label: 'All',       color: '' },
        { key: 'images',    label: 'Images',    color: 'text-sky-600' },
        { key: 'documents', label: 'Documents', color: 'text-amber-600' },
        { key: 'icons',     label: 'Icons',     color: 'text-violet-600' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Media Library" />

            <div className="px-4 py-6 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Media Library</h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            {media.length} file{media.length !== 1 ? 's' : ''}
                            {' · '}{imageCount} image{imageCount !== 1 ? 's' : ''}
                            {iconCount > 0 && ` · ${iconCount} icon${iconCount !== 1 ? 's' : ''}`}
                            {' · '}{formatBytes(totalSize)} total
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-4">

                    {/* ── Sidebar ──────────────────────────────────────────── */}
                    <div className="space-y-4 lg:col-span-1">
                        <UploadZone onUploaded={() => {}} />
                        <IconUploadZone onUploaded={() => {}} />

                        {/* Type filter */}
                        <div className="rounded-xl border bg-card p-4 shadow-sm space-y-1">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Filter by Type</p>
                            {filterConfig.map(({ key, label, color }) => (
                                <button
                                    key={key}
                                    onClick={() => handleFilterChange(key)}
                                    className={cn(
                                        'w-full rounded-md px-3 py-1.5 text-left text-sm transition-colors flex items-center justify-between',
                                        typeFilter === key
                                            ? 'bg-primary text-primary-foreground'
                                            : 'hover:bg-muted/50 text-muted-foreground',
                                    )}
                                >
                                    <span className={cn(typeFilter !== key && color)}>{label}</span>
                                    <span className={cn(
                                        'text-xs font-medium rounded-full px-1.5 py-0.5 min-w-[1.5rem] text-center',
                                        typeFilter === key
                                            ? 'bg-white/20 text-white'
                                            : 'bg-muted text-muted-foreground',
                                    )}>
                                        {counts[key]}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Legend */}
                        <div className="rounded-xl border bg-card p-4 shadow-sm space-y-2">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Legend</p>
                            <div className="space-y-1.5">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center gap-1 rounded-full border border-sky-300 bg-sky-50 px-2 py-0.5 text-[10px] font-semibold text-sky-700 dark:border-sky-700 dark:bg-sky-950/50 dark:text-sky-300">
                                        <ImageIcon className="h-2.5 w-2.5" />Image
                                    </span>
                                    <span className="text-xs text-muted-foreground">JPEG, PNG, WebP…</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700 dark:border-amber-700 dark:bg-amber-950/50 dark:text-amber-300">
                                        <FileText className="h-2.5 w-2.5" />Doc
                                    </span>
                                    <span className="text-xs text-muted-foreground">PDF, SVG…</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center gap-1 rounded-full border border-violet-300 bg-violet-50 px-2 py-0.5 text-[10px] font-semibold text-violet-700 dark:border-violet-700 dark:bg-violet-950/50 dark:text-violet-300">
                                        <Zap className="h-2.5 w-2.5" />Icon
                                    </span>
                                    <span className="text-xs text-muted-foreground">Remix icons</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Main area ─────────────────────────────────────────── */}
                    <div className="lg:col-span-3 space-y-4">

                        {/* Toolbar */}
                        <div className="flex items-center gap-2">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    value={query}
                                    onChange={e => handleQueryChange(e.target.value)}
                                    placeholder="Search by name, folder, alt text…"
                                    className="pl-9"
                                />
                            </div>
                            <div className="flex rounded-md border">
                                <button
                                    onClick={() => setView('grid')}
                                    className={cn('rounded-l-md px-3 py-2 transition-colors', view === 'grid' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted/50')}
                                    aria-label="Grid view"
                                >
                                    <LayoutGrid className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={() => setView('list')}
                                    className={cn('rounded-r-md px-3 py-2 border-l transition-colors', view === 'list' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted/50')}
                                    aria-label="List view"
                                >
                                    <List className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {/* Media grid / list */}
                        {filtered.length === 0 ? (
                            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
                                <ImageIcon className="mb-3 h-10 w-10 text-muted-foreground/40" />
                                <p className="text-sm text-muted-foreground">
                                    {query ? 'No files match your search.' : 'No files uploaded yet.'}
                                </p>
                            </div>
                        ) : view === 'grid' ? (
                            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                                {paginated.map(item => (
                                    <MediaCard key={item.id} item={item} view="grid" onEdit={setEditTarget} onDelete={setDeleteTarget} />
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-2">
                                {paginated.map(item => (
                                    <MediaCard key={item.id} item={item} view="list" onEdit={setEditTarget} onDelete={setDeleteTarget} />
                                ))}
                            </div>
                        )}

                        {/* Pagination */}
                        <Pagination
                            currentPage={safePage}
                            totalPages={totalPages}
                            totalItems={filtered.length}
                            pageSize={PAGE_SIZE}
                            onPageChange={setPage}
                        />
                    </div>
                </div>
            </div>

            {/* Edit dialog */}
            <Dialog open={!!editTarget} onOpenChange={() => setEditTarget(null)}>
                {editTarget && <EditDialog item={editTarget} onClose={() => setEditTarget(null)} />}
            </Dialog>

            {/* Delete confirm */}
            <AlertDialog open={!!deleteTarget} onOpenChange={() => setDeleteTarget(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete file?</AlertDialogTitle>
                        <AlertDialogDescription>
                            <strong>{deleteTarget?.original_name}</strong> will be permanently deleted
                            from storage and cannot be recovered.
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
