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
} from 'lucide-react';
import { useRef, useState, useDeferredValue } from 'react';
import { cn } from '@/lib/utils';

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
    uploader:            string | null;
    created_at:          string;
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Media',     href: '/media' },
];

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

// ── Upload zone ───────────────────────────────────────────────────────────────

function UploadZone({ onUploaded }: { onUploaded: () => void }) {
    const inputRef  = useRef<HTMLInputElement>(null);
    const [drag, setDrag]     = useState(false);
    const [previews, setPreviews] = useState<{ name: string; url: string | null }[]>([]);

    const { data, setData, post, processing, errors, reset } = useForm<{
        files: File[];
        folder: string;
        alt_text: string;
    }>({ files: [], folder: 'uploads', alt_text: '' });

    const addFiles = (incoming: FileList | null) => {
        if (!incoming) return;
        const arr = Array.from(incoming);
        setData('files', [...data.files, ...arr]);
        const newPreviews = arr.map(f => ({
            name: f.name,
            url: f.type.startsWith('image/') ? URL.createObjectURL(f) : null,
        }));
        setPreviews(p => [...p, ...newPreviews]);
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
            onSuccess: () => {
                reset();
                setPreviews([]);
                onUploaded();
            },
        });
    };

    return (
        <form onSubmit={submit} className="rounded-xl border bg-card p-6 shadow-sm space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Upload Files
            </h2>

            {/* Drop zone */}
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
                <p className="mt-1 text-xs text-muted-foreground">
                    JPEG · PNG · WebP · GIF · SVG · PDF
                </p>
                <input
                    ref={inputRef}
                    type="file"
                    multiple
                    accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml,application/pdf"
                    className="hidden"
                    onChange={e => addFiles(e.target.files)}
                />
            </div>

            {errors.upload && (
                <p className="text-xs text-destructive">{errors.upload}</p>
            )}

            {/* Previews */}
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

            {/* Options */}
            <div className="grid gap-3">
                <div className="flex flex-col gap-1">
                    <Label className="text-xs font-medium">Folder</Label>
                    <Input
                        value={data.folder}
                        onChange={e => setData('folder', e.target.value)}
                        placeholder="uploads"
                        className="h-8 text-sm"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <Label className="text-xs font-medium">Alt text <span className="text-muted-foreground">(optional)</span></Label>
                    <Input
                        value={data.alt_text}
                        onChange={e => setData('alt_text', e.target.value)}
                        placeholder="Describe the image…"
                        className="h-8 text-sm"
                    />
                </div>
            </div>

            <Button
                type="submit"
                disabled={processing || data.files.length === 0}
                className="w-full gap-2"
            >
                <Upload className="h-4 w-4" />
                {processing ? 'Uploading…' : `Upload ${data.files.length > 0 ? `(${data.files.length})` : ''}`}
            </Button>
        </form>
    );
}

// ── Edit dialog ───────────────────────────────────────────────────────────────

function EditDialog({ item, onClose }: { item: MediaItem; onClose: () => void }) {
    const { data, setData, patch, processing } = useForm({
        alt_text: item.alt_text ?? '',
        caption:  item.caption  ?? '',
        folder:   item.folder   ?? 'uploads',
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

            <div className="grid gap-4">
                {item.is_image && (
                    <img
                        src={item.url}
                        alt={item.alt_text ?? item.original_name}
                        className="max-h-48 w-full rounded-lg object-contain bg-muted/30"
                    />
                )}

                {/* File meta */}
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span>{item.mime_type}</span>
                    <span>·</span>
                    <span>{item.human_size}</span>
                    {item.width && item.height && (
                        <><span>·</span><span>{item.width} × {item.height}</span></>
                    )}
                    {item.was_compressed && savings(item) && (
                        <Badge variant="secondary" className="gap-1 text-[10px] py-0">
                            <Zap className="h-3 w-3" /> {savings(item)}
                        </Badge>
                    )}
                </div>

                <form onSubmit={submit} className="grid gap-3">
                    <div className="flex flex-col gap-1">
                        <Label className="text-sm font-medium">Alt text</Label>
                        <Input
                            value={data.alt_text}
                            onChange={e => setData('alt_text', e.target.value)}
                            placeholder="Describe the image for screen readers…"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label className="text-sm font-medium">Caption</Label>
                        <Input
                            value={data.caption}
                            onChange={e => setData('caption', e.target.value)}
                            placeholder="Optional caption…"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label className="text-sm font-medium">Folder</Label>
                        <Input
                            value={data.folder}
                            onChange={e => setData('folder', e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 justify-end">
                        <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                        <Button type="submit" disabled={processing}>Save</Button>
                    </div>
                </form>
            </div>
        </DialogContent>
    );
}

// ── Media card ────────────────────────────────────────────────────────────────

function MediaCard({ item, view, onEdit, onDelete }: {
    item: MediaItem;
    view: 'grid' | 'list';
    onEdit: (item: MediaItem) => void;
    onDelete: (item: MediaItem) => void;
}) {
    const saving = savings(item);

    if (view === 'list') {
        return (
            <div className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3 hover:bg-muted/30 transition-colors group">
                <div className="h-10 w-14 shrink-0 overflow-hidden rounded-md bg-muted">
                    {item.is_image
                        ? <img src={item.url} alt={item.alt_text ?? ''} className="h-full w-full object-cover" />
                        : <div className="flex h-full w-full items-center justify-center">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                          </div>
                    }
                </div>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{item.original_name}</p>
                    <p className="text-xs text-muted-foreground">{item.human_size} · {item.mime_type}</p>
                </div>
                {saving && (
                    <Badge variant="secondary" className="hidden sm:flex gap-1 text-[10px]">
                        <Zap className="h-3 w-3" />{saving}
                    </Badge>
                )}
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" className="h-8 text-xs" onClick={() => onEdit(item)}>Edit</Button>
                    <Button
                        variant="ghost" size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                        onClick={() => onDelete(item)}
                    >
                        <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="group relative overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-video bg-muted/50 overflow-hidden">
                {item.is_image
                    ? <img src={item.url} alt={item.alt_text ?? ''} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    : <div className="flex h-full w-full flex-col items-center justify-center gap-1 text-muted-foreground">
                        <FileText className="h-8 w-8" />
                        <span className="text-xs uppercase">{item.mime_type.split('/')[1]}</span>
                      </div>
                }
            </div>

            {saving && (
                <div className="absolute left-2 top-2">
                    <Badge className="gap-1 text-[10px] py-0.5 bg-emerald-600 text-white border-0">
                        <Zap className="h-3 w-3" />{saving}
                    </Badge>
                </div>
            )}

            <div className="p-3">
                <p className="truncate text-xs font-medium">{item.original_name}</p>
                <p className="mt-0.5 text-[11px] text-muted-foreground">{item.human_size}</p>
            </div>

            <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                <Button size="sm" variant="secondary" onClick={() => onEdit(item)}>Edit</Button>
                <Button
                    size="icon"
                    variant="destructive"
                    className="h-8 w-8"
                    onClick={() => onDelete(item)}
                >
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MediaIndex({ media }: { media: MediaItem[] }) {
    const [view, setView]           = useState<'grid' | 'list'>('grid');
    const [query, setQuery]         = useState('');
    const [typeFilter, setTypeFilter] = useState<'all' | 'images' | 'documents'>('all');
    const [editTarget, setEditTarget] = useState<MediaItem | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<MediaItem | null>(null);

    const deferredQuery = useDeferredValue(query);

    const filtered = media.filter(m => {
        if (typeFilter === 'images'    && !m.is_image)  return false;
        if (typeFilter === 'documents' &&  m.is_image)  return false;
        if (deferredQuery) {
            const q = deferredQuery.toLowerCase();
            return m.original_name.toLowerCase().includes(q)
                || m.folder?.toLowerCase().includes(q)
                || m.alt_text?.toLowerCase().includes(q);
        }
        return true;
    });

    const confirmDelete = () => {
        if (!deleteTarget) return;
        router.delete(`/media/${deleteTarget.id}`, {
            onFinish: () => setDeleteTarget(null),
        });
    };

    const totalSize = media.reduce((s, m) => s + m.size_bytes, 0);
    const imageCount = media.filter(m => m.is_image).length;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Media Library" />
            <div className="px-4 py-6 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Media Library</h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            {media.length} file{media.length !== 1 ? 's' : ''} · {imageCount} images · {formatBytes(totalSize)} total
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-4">

                    {/* ── Sidebar: upload + filters ────────────────────────── */}
                    <div className="space-y-4 lg:col-span-1">
                        <UploadZone onUploaded={() => {}} />

                        {/* Filter by type */}
                        <div className="rounded-xl border bg-card p-4 shadow-sm space-y-1">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Filter</p>
                            {(['all', 'images', 'documents'] as const).map(t => (
                                <button
                                    key={t}
                                    onClick={() => setTypeFilter(t)}
                                    className={cn(
                                        'w-full rounded-md px-3 py-1.5 text-left text-sm capitalize transition-colors',
                                        typeFilter === t
                                            ? 'bg-primary text-primary-foreground'
                                            : 'hover:bg-muted/50 text-muted-foreground',
                                    )}
                                >
                                    {t === 'all' ? `All (${media.length})` : t === 'images' ? `Images (${imageCount})` : `Documents (${media.length - imageCount})`}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* ── Main grid ─────────────────────────────────────────── */}
                    <div className="lg:col-span-3 space-y-4">

                        {/* Toolbar */}
                        <div className="flex items-center gap-2">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    value={query}
                                    onChange={e => setQuery(e.target.value)}
                                    placeholder="Search by name, folder, alt text…"
                                    className="pl-9"
                                />
                            </div>
                            <div className="flex rounded-md border">
                                <button
                                    onClick={() => setView('grid')}
                                    className={cn(
                                        'rounded-l-md px-3 py-2 transition-colors',
                                        view === 'grid' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted/50',
                                    )}
                                >
                                    <LayoutGrid className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={() => setView('list')}
                                    className={cn(
                                        'rounded-r-md px-3 py-2 border-l transition-colors',
                                        view === 'list' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted/50',
                                    )}
                                >
                                    <List className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {filtered.length === 0 ? (
                            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
                                <ImageIcon className="mb-3 h-10 w-10 text-muted-foreground/40" />
                                <p className="text-sm text-muted-foreground">
                                    {query ? 'No files match your search.' : 'No files uploaded yet.'}
                                </p>
                            </div>
                        ) : view === 'grid' ? (
                            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                                {filtered.map(item => (
                                    <MediaCard
                                        key={item.id}
                                        item={item}
                                        view="grid"
                                        onEdit={setEditTarget}
                                        onDelete={setDeleteTarget}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-2">
                                {filtered.map(item => (
                                    <MediaCard
                                        key={item.id}
                                        item={item}
                                        view="list"
                                        onEdit={setEditTarget}
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
