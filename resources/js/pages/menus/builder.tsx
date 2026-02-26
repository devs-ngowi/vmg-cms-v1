import AppLayout from '@/layouts/app-layout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
    Dialog, DialogContent, DialogHeader, DialogTitle,
} from '@/components/ui/dialog';
import type { BreadcrumbItem } from '@/types';
import {
    ChevronDown, ChevronRight, ExternalLink, GripVertical, Eye, EyeOff,
    LayoutList, Link2, Loader2, Pencil, Plus, Save, Trash2,
} from 'lucide-react';
import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────

type MenuItemData = {
    id:         number;
    label:      string;
    url:        string;
    target:     '_self' | '_blank';
    sort_order: number;
    parent_id:  number | null;
    is_visible: boolean;  // ✅ NEW
    children:   MenuItemData[];
};

type MenuData = {
    id:        number;
    name:      string;
    location:  string;
    is_active: boolean;
    items:     MenuItemData[];
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function getAllDescendantIds(item: MenuItemData): number[] {
    let ids: number[] = [];
    if (item.children && item.children.length > 0) {
        item.children.forEach(child => {
            ids.push(child.id);
            ids = [...ids, ...getAllDescendantIds(child)];
        });
    }
    return ids;
}

function flattenMenuForParentPicker(
    items: MenuItemData[],
    depth = 0,
    excludeId?: number
): Array<{ id: number; label: string; depth: number }> {
    return items.flatMap(item => {
        const descendants = getAllDescendantIds(item);
        const isExcluded = excludeId && (item.id === excludeId || descendants.includes(excludeId));

        if (isExcluded) return [];

        const result: Array<{ id: number; label: string; depth: number }> = [{
            id: item.id,
            label: item.label,
            depth,
        }];

        if (item.children && item.children.length > 0) {
            result.push(...flattenMenuForParentPicker(item.children, depth + 1, excludeId));
        }

        return result;
    });
}

function moveItemInArray<T>(arr: T[], fromIndex: number, toIndex: number): T[] {
    const newArr = [...arr];
    const [movedItem] = newArr.splice(fromIndex, 1);
    newArr.splice(toIndex, 0, movedItem);
    return newArr;
}

// ── Item form fields ──────────────────────────────────────────────────────────

function ItemFields({
    data, setData, errors, targets, items, excludeId,
}: {
    data:      any;
    setData:   any;
    errors:    any;
    targets:   string[];
    items:     MenuItemData[];
    excludeId?: number;
}) {
    const parentOptions = flattenMenuForParentPicker(items, 0, excludeId);

    return (
        <div className="space-y-4">
            <div className="space-y-1.5">
                <Label className="text-sm font-medium">
                    Label <span className="text-destructive">*</span>
                </Label>
                <Input
                    value={data.label}
                    onChange={e => setData('label', e.target.value)}
                    placeholder="e.g. About Us"
                    autoFocus
                />
                {errors.label && <p className="text-xs text-destructive">{errors.label}</p>}
            </div>

            <div className="space-y-1.5">
                <Label className="text-sm font-medium">
                    URL <span className="text-destructive">*</span>
                </Label>
                <Input
                    value={data.url}
                    onChange={e => setData('url', e.target.value)}
                    placeholder="/about or https://example.com"
                />
                {errors.url && <p className="text-xs text-destructive">{errors.url}</p>}
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                    <Label className="text-sm font-medium">Open in</Label>
                    <Select value={data.target} onValueChange={v => setData('target', v)}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="_self">Same tab</SelectItem>
                            <SelectItem value="_blank">New tab</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-1.5">
                    <Label className="text-sm font-medium">
                        Parent <span className="text-muted-foreground font-normal">(optional)</span>
                    </Label>
                    <Select
                        value={data.parent_id ? String(data.parent_id) : 'none'}
                        onValueChange={v => setData('parent_id', v === 'none' ? null : parseInt(v))}
                    >
                        <SelectTrigger><SelectValue placeholder="Top-level" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="none">Top-level</SelectItem>
                            {parentOptions.map(option => (
                                <SelectItem key={option.id} value={String(option.id)}>
                                    <span style={{ paddingLeft: `${option.depth * 12}px` }}>
                                        {option.label}
                                    </span>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.parent_id && <p className="text-xs text-destructive">{errors.parent_id}</p>}
                </div>
            </div>

            {/* ✅ Visibility toggle in dialog */}
            <div className="flex items-center justify-between rounded-lg border bg-muted/20 px-3 py-2.5">
                <span className="text-sm font-medium">Visible on website</span>
                <button
                    type="button"
                    onClick={() => setData('is_visible', !data.is_visible)}
                    className={cn(
                        'relative inline-flex h-5 w-9 shrink-0 rounded-full border-2 transition-colors',
                        data.is_visible ? 'border-primary bg-primary' : 'border-muted bg-muted',
                    )}
                >
                    <span className={cn(
                        'block h-3.5 w-3.5 rounded-full bg-white shadow transition-transform mt-px',
                        data.is_visible ? 'translate-x-3.5 ml-px' : 'translate-x-px',
                    )} />
                </button>
            </div>
        </div>
    );
}

// ── Add item dialog ───────────────────────────────────────────────────────────

function AddDialog({ menu, targets, onClose }: {
    menu:    MenuData;
    targets: string[];
    onClose: () => void;
}) {
    const { data, setData, post, processing, errors } = useForm({
        label:      '',
        url:        '',
        target:     '_self',
        parent_id:  null as number | null,
        is_visible: true,  // ✅ Default visible
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(`/menus/${menu.id}/items`, { onSuccess: onClose });
    };

    return (
        <DialogContent className="sm:max-w-md">
            <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                    <Plus className="h-4 w-4 text-primary" /> Add Menu Item
                </DialogTitle>
            </DialogHeader>
            <form onSubmit={submit} className="space-y-4">
                <ItemFields data={data} setData={setData} errors={errors}
                    targets={targets} items={menu.items} />
                <div className="flex gap-2 pt-1">
                    <Button type="button" variant="outline" className="flex-1" onClick={onClose}>Cancel</Button>
                    <Button type="submit" disabled={processing} className="flex-1 gap-2">
                        {processing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
                        {processing ? 'Adding…' : 'Add Item'}
                    </Button>
                </div>
            </form>
        </DialogContent>
    );
}

// ── Edit item dialog ──────────────────────────────────────────────────────────

function EditDialog({ menu, item, targets, onClose }: {
    menu:    MenuData;
    item:    MenuItemData;
    targets: string[];
    onClose: () => void;
}) {
    const { data, setData, patch, processing, errors } = useForm({
        label:      item.label,
        url:        item.url,
        target:     item.target,
        parent_id:  item.parent_id,
        is_visible: item.is_visible,  // ✅ Include visibility
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(`/menus/${menu.id}/items/${item.id}`, { onSuccess: onClose });
    };

    return (
        <DialogContent className="sm:max-w-md">
            <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                    <Pencil className="h-4 w-4 text-primary" /> Edit: {item.label}
                </DialogTitle>
            </DialogHeader>
            <form onSubmit={submit} className="space-y-4">
                <ItemFields data={data} setData={setData} errors={errors}
                    targets={targets} items={menu.items} excludeId={item.id} />
                <div className="flex gap-2 pt-1">
                    <Button type="button" variant="outline" className="flex-1" onClick={onClose}>Cancel</Button>
                    <Button type="submit" disabled={processing} className="flex-1 gap-2">
                        {processing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                        {processing ? 'Saving…' : 'Save Changes'}
                    </Button>
                </div>
            </form>
        </DialogContent>
    );
}

// ── Menu item row with drag-and-drop and visibility toggle ──────────────────

function ItemRow({
    item, depth = 0, isLast,
    onEdit, onDelete, onToggleVisibility,
    isDragging, onDragStart, onDragOver, onDrop,
}: {
    item:                 MenuItemData;
    depth?:               number;
    isLast:               boolean;
    onEdit:               (item: MenuItemData) => void;
    onDelete:             (item: MenuItemData) => void;
    onToggleVisibility:   (item: MenuItemData) => void;  // ✅ NEW
    isDragging:           boolean;
    onDragStart:          (e: React.DragEvent, item: MenuItemData) => void;
    onDragOver:           (e: React.DragEvent) => void;
    onDrop:               (e: React.DragEvent, targetId: number) => void;
}) {
    const [expanded, setExpanded] = useState(true);
    const hasChildren = item.children && item.children.length > 0;

    return (
        <div>
            <div
                draggable
                onDragStart={(e) => onDragStart(e, item)}
                onDragOver={onDragOver}
                onDrop={(e) => onDrop(e, item.id)}
                className={cn(
                    'group flex items-center gap-0 overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md',
                    depth > 0 && 'ml-8 border-l-2 border-l-primary/20',
                    isDragging && 'opacity-50 bg-muted/50 ring-2 ring-primary/50',
                    !item.is_visible && 'opacity-60',  // ✅ Dim hidden items
                )}
            >
                {/* Drag handle */}
                <div className="flex cursor-grab items-center justify-center self-stretch px-2.5 text-muted-foreground/30 hover:text-muted-foreground bg-muted/20 border-r active:cursor-grabbing transition-colors">
                    <GripVertical className="h-4 w-4" />
                </div>

                {/* Expand toggle */}
                <button
                    type="button"
                    onClick={() => hasChildren && setExpanded(e => !e)}
                    className={cn(
                        'flex h-10 w-8 shrink-0 items-center justify-center text-muted-foreground/50 transition-colors',
                        hasChildren ? 'hover:text-foreground cursor-pointer' : 'cursor-default',
                    )}
                >
                    {hasChildren
                        ? (expanded
                            ? <ChevronDown  className="h-3.5 w-3.5" />
                            : <ChevronRight className="h-3.5 w-3.5" />)
                        : <Link2 className="h-3 w-3 opacity-30" />
                    }
                </button>

                {/* Label + URL */}
                <div className="flex min-w-0 flex-1 items-center gap-3 px-2 py-2.5">
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{item.label}</p>
                        <p className="truncate text-xs text-muted-foreground">{item.url}</p>
                    </div>
                    {item.target === '_blank' && (
                        <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50" title="Opens in new tab" />
                    )}
                    {hasChildren && (
                        <Badge variant="secondary" className="shrink-0 text-[10px]">
                            {item.children!.length} {item.children!.length === 1 ? 'sub' : 'subs'}
                        </Badge>
                    )}
                    {/* ✅ Hidden badge */}
                    {!item.is_visible && (
                        <Badge variant="outline" className="shrink-0 text-[10px] bg-red-50 text-red-700 border-red-200">
                            Hidden
                        </Badge>
                    )}
                </div>

                {/* Actions */}
                <div className="flex shrink-0 items-center gap-0.5 border-l px-2">
                    {/* ✅ Visibility toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                        onClick={() => onToggleVisibility(item)}
                        title={item.is_visible ? 'Click to hide from website' : 'Click to show on website'}
                    >
                        {item.is_visible ? (
                            <Eye className="h-3.5 w-3.5" />
                        ) : (
                            <EyeOff className="h-3.5 w-3.5" />
                        )}
                    </Button>

                    <Button variant="ghost" size="icon" className="h-8 w-8"
                        onClick={() => onEdit(item)}>
                        <Pencil className="h-3.5 w-3.5" />
                    </Button>
                    <Button variant="ghost" size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                        onClick={() => onDelete(item)}>
                        <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                </div>
            </div>

            {/* Children (recursive) */}
            {hasChildren && expanded && (
                <div className="mt-1.5 space-y-1.5">
                    {item.children!.map((child, i) => (
                        <ItemRow
                            key={child.id}
                            item={child}
                            depth={depth + 1}
                            isLast={i === item.children!.length - 1}
                            onEdit={onEdit}
                            onDelete={onDelete}
                            onToggleVisibility={onToggleVisibility}
                            isDragging={isDragging}
                            onDragStart={onDragStart}
                            onDragOver={onDragOver}
                            onDrop={onDrop}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

// ── Live preview (shows only visible items) ───────────────────────────────────

function MenuPreview({ menu, location }: { menu: MenuData; location: string }) {
    const [hovered, setHovered] = useState<number | null>(null);

    // ✅ Filter visible items only
    const visibleItems = menu.items.filter(item => item.is_visible);

    if (location === 'footer') {
        return (
            <div className="rounded-xl border bg-card p-5 shadow-sm">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Footer Preview
                </p>
                <div className="rounded-lg bg-slate-900 p-6">
                    {visibleItems.length === 0 ? (
                        <p className="text-xs text-slate-500 italic">No visible items</p>
                    ) : (
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                            {visibleItems.map(item => (
                                <div key={item.id}>
                                    <p className="text-sm font-medium text-white">{item.label}</p>
                                    {item.children && item.children.filter(c => c.is_visible).length > 0 && (
                                        <ul className="mt-2 space-y-1">
                                            {item.children.filter(c => c.is_visible).map(child => (
                                                <li key={child.id}>
                                                    <span className="text-xs text-slate-400 hover:text-white cursor-pointer transition-colors">
                                                        {child.label}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-xl border bg-card p-5 shadow-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Navigation Preview
            </p>
            <div className="rounded-lg border bg-white px-4 shadow-sm">
                {visibleItems.length === 0 ? (
                    <div className="flex items-center h-12 text-xs text-slate-500 italic">
                        No visible items
                    </div>
                ) : (
                    <div className="flex items-center gap-1 overflow-x-auto">
                        <div className="mr-4 flex h-12 items-center">
                            <div className="h-6 w-20 rounded bg-muted/50" />
                        </div>
                        {visibleItems.map(item => (
                            <div
                                key={item.id}
                                className="relative"
                                onMouseEnter={() => setHovered(item.id)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <div className={cn(
                                    'flex cursor-pointer items-center gap-1 px-3 py-3.5 text-sm font-medium transition-colors whitespace-nowrap',
                                    hovered === item.id ? 'text-primary' : 'text-slate-700',
                                )}>
                                    {item.label}
                                    {item.children && item.children.filter(c => c.is_visible).length > 0 && (
                                        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                                    )}
                                </div>
                                {item.children && item.children.filter(c => c.is_visible).length > 0 && hovered === item.id && (
                                    <div className="absolute left-0 top-full z-10 min-w-[200px] rounded-lg border bg-white py-1.5 shadow-lg">
                                        {item.children.filter(c => c.is_visible).map(child => (
                                            <div key={child.id} className="px-4 py-2 text-sm text-slate-600 hover:bg-muted/50 cursor-pointer">
                                                {child.label}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

// ── Settings form ─────────────────────────────────────────────────────────────

function MenuSettingsForm({ menu }: { menu: MenuData }) {
    const { data, setData, patch, processing, isDirty } = useForm({
        name:      menu.name,
        is_active: menu.is_active,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(`/menus/${menu.id}`);
    };

    return (
        <form onSubmit={submit} className="rounded-xl border bg-card p-5 shadow-sm space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Menu Settings
            </p>

            <div className="space-y-1.5">
                <Label className="text-sm font-medium">Menu Name</Label>
                <Input value={data.name} onChange={e => setData('name', e.target.value)} />
            </div>

            <div className="flex items-center justify-between rounded-lg border bg-muted/20 px-3 py-2.5">
                <span className="text-sm font-medium">Active</span>
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

            <Button type="submit" disabled={processing || !isDirty} size="sm" className="w-full gap-2">
                {processing ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                Save Settings
            </Button>
        </form>
    );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function MenuBuilder({
    menu: initialMenu,
    location,
    locations,
    targets,
}: {
    menu:      MenuData;
    location:  string;
    locations: Record<string, string>;
    targets:   string[];
}) {
    const [menu, setMenu] = useState<MenuData>(initialMenu);
    const [addOpen, setAddOpen]         = useState(false);
    const [editItem, setEditItem]       = useState<MenuItemData | null>(null);
    const [deleteItem, setDeleteItem]   = useState<MenuItemData | null>(null);
    const [draggedItem, setDraggedItem] = useState<MenuItemData | null>(null);
    const [isSaving, setIsSaving]       = useState(false);
    const dragDataRef = useRef<MenuItemData | null>(null);

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Menus',     href: '#' },
        { title: locations[location] ?? location, href: '#' },
    ];

    const confirmDelete = () => {
        if (!deleteItem) return;
        router.delete(`/menus/${menu.id}/items/${deleteItem.id}`, {
            onFinish: () => setDeleteItem(null),
        });
    };

    // ✅ Toggle visibility immediately in UI
    const handleToggleVisibility = (item: MenuItemData) => {
        // Find and update the item in the menu tree
        const updateItemVisibility = (items: MenuItemData[]): MenuItemData[] => {
            return items.map(i => {
                if (i.id === item.id) {
                    return { ...i, is_visible: !i.is_visible };
                }
                return {
                    ...i,
                    children: updateItemVisibility(i.children || []),
                };
            });
        };

        // Update UI immediately
        const newItems = updateItemVisibility(menu.items);
        setMenu({ ...menu, items: newItems });

        // Save to backend
        router.patch(
            `/menus/${menu.id}/items/${item.id}/toggle-visibility`,
            {},
            {
                onError: () => {
                    // Revert if it fails
                    setMenu(initialMenu);
                },
            }
        );
    };

    const countAllItems = (items: MenuItemData[]): number => {
        return items.reduce((total, item) => {
            let count = 1;
            if (item.children && item.children.length > 0) {
                count += countAllItems(item.children);
            }
            return total + count;
        }, 0);
    };

    const flattenForReorder = (
        items: MenuItemData[],
        parentId: number | null = null
    ): Array<{ id: number; order: number; parent_id: number | null }> => {
        return items.flatMap((item, i) => [
            { id: item.id, order: i, parent_id: parentId },
            ...flattenForReorder(item.children || [], item.id),
        ]);
    };

    const handleDragStart = (e: React.DragEvent, item: MenuItemData) => {
        dragDataRef.current = item;
        setDraggedItem(item);
        e.dataTransfer!.effectAllowed = 'move';
        e.dataTransfer!.setData('text/html', e.currentTarget as any);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer!.dropEffect = 'move';
    };

    const handleDrop = (e: React.DragEvent, targetId: number) => {
        e.preventDefault();
        e.stopPropagation();

        if (!dragDataRef.current || dragDataRef.current.id === targetId) {
            setDraggedItem(null);
            dragDataRef.current = null;
            return;
        }

        const oldMenu = menu;

        const draggedIndex = menu.items.findIndex(i => i.id === dragDataRef.current!.id);
        const targetIndex = menu.items.findIndex(i => i.id === targetId);

        if (draggedIndex !== -1 && targetIndex !== -1) {
            const newItems = moveItemInArray(menu.items, draggedIndex, targetIndex);
            setMenu({ ...menu, items: newItems });
        }

        setIsSaving(true);
        const reorderData = flattenForReorder(menu.items);

        router.post(
            `/menus/${menu.id}/reorder`,
            { items: reorderData },
            {
                onSuccess: () => {
                    setDraggedItem(null);
                    dragDataRef.current = null;
                    setIsSaving(false);
                },
                onError: () => {
                    setMenu(oldMenu);
                    setIsSaving(false);
                },
            }
        );
    };

    const totalItems = countAllItems(menu.items);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={locations[location] ?? 'Menu'} />
            <div className="px-4 py-6 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <LayoutList className="h-5 w-5 text-primary" />
                            <h1 className="text-2xl font-semibold tracking-tight">
                                {locations[location] ?? 'Menu'}
                            </h1>
                            <Badge variant={menu.is_active ? 'default' : 'secondary'} className="text-[10px]">
                                {menu.is_active ? 'Active' : 'Inactive'}
                            </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {totalItems} item{totalItems !== 1 ? 's' : ''} · drag to reorder
                            {isSaving && (
                                <span className="inline-flex items-center gap-1 ml-2">
                                    <Loader2 className="h-3 w-3 animate-spin" /> Saving...
                                </span>
                            )}
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        {Object.entries(locations).map(([loc, label]) => (
                            <Button
                                key={loc}
                                asChild
                                variant={loc === location ? 'default' : 'outline'}
                                size="sm"
                            >
                                <Link href={`/menus/${loc}`}>{label}</Link>
                            </Button>
                        ))}
                        <Button size="sm" className="gap-1.5" onClick={() => setAddOpen(true)}>
                            <Plus className="h-4 w-4" /> Add Item
                        </Button>
                    </div>
                </div>

                <div className="grid gap-6 xl:grid-cols-3">

                    {/* Item tree (2 cols) */}
                    <div className="xl:col-span-2 space-y-4">
                        {menu.items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-20 text-center">
                                <Link2 className="mb-3 h-10 w-10 text-muted-foreground/30" />
                                <p className="text-sm font-medium">No items yet</p>
                                <p className="mt-1 text-xs text-muted-foreground">
                                    Click <strong>Add Item</strong> to build this menu.
                                </p>
                                <Button size="sm" className="mt-4 gap-1.5" onClick={() => setAddOpen(true)}>
                                    <Plus className="h-4 w-4" /> Add Item
                                </Button>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                {menu.items.map((item, i) => (
                                    <ItemRow
                                        key={item.id}
                                        item={item}
                                        isLast={i === menu.items.length - 1}
                                        onEdit={setEditItem}
                                        onDelete={setDeleteItem}
                                        onToggleVisibility={handleToggleVisibility}
                                        isDragging={draggedItem?.id === item.id}
                                        onDragStart={handleDragStart}
                                        onDragOver={handleDragOver}
                                        onDrop={handleDrop}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right sidebar (1 col) */}
                    <div className="space-y-4">
                        <MenuPreview menu={menu} location={location} />
                        <MenuSettingsForm menu={menu} />

                        {/* Help text */}
                        <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
                            <p className="text-xs font-medium text-blue-900">💡 Controls</p>
                            <ul className="mt-2 text-xs text-blue-800 space-y-1">
                                <li>• <GripVertical className="h-3 w-3 inline" /> Drag to reorder</li>
                                <li>• <Eye className="h-3 w-3 inline" /> Toggle visibility</li>
                                <li>• <Pencil className="h-3 w-3 inline" /> Edit item</li>
                                <li>• <Trash2 className="h-3 w-3 inline" /> Delete item</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dialogs */}
            <Dialog open={addOpen} onOpenChange={setAddOpen}>
                <AddDialog menu={menu} targets={targets} onClose={() => setAddOpen(false)} />
            </Dialog>

            <Dialog open={!!editItem} onOpenChange={() => setEditItem(null)}>
                {editItem && (
                    <EditDialog
                        menu={menu} item={editItem} targets={targets}
                        onClose={() => setEditItem(null)}
                    />
                )}
            </Dialog>

            <AlertDialog open={!!deleteItem} onOpenChange={() => setDeleteItem(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete "{deleteItem?.label}"?</AlertDialogTitle>
                        <AlertDialogDescription>
                            {deleteItem && deleteItem.children && deleteItem.children.length > 0
                                ? `This will also delete all ${deleteItem.children.length} sub-item${deleteItem.children.length !== 1 ? 's' : ''} and any nested items.`
                                : 'This item will be permanently deleted.'
                            }
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
