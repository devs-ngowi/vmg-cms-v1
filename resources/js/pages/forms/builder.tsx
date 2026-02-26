import { router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import {
    Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from '@/components/ui/tooltip';
import {
    AlignLeft, ArrowDown, ArrowUp, CalendarDays, CheckSquare,
    ChevronDown, Circle, Eye, Hash, Link2, Loader2,
    Mail, Phone, Plus, Save, Text, Trash2, ToggleLeft,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

// ── Types ─────────────────────────────────────────────────────────────────────

export type FieldType =
    | 'text' | 'email' | 'tel' | 'number' | 'url'
    | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date' | 'file';

export type BuilderField = {
    _key:        string;
    id?:         number;
    label:       string;
    field_type:  FieldType;
    is_required: boolean;
    options:     string;
    placeholder: string;
};

export type FormValues = {
    id?:         number;
    name:        string;
    form_type:   string;
    description: string;
    is_active:   boolean;
    fields:      BuilderField[];
};

export type Props = {
    mode:       'create' | 'edit';
    form?:      FormValues | null;
    fieldTypes: FieldType[];
};

// ── Field type meta ───────────────────────────────────────────────────────────

const fieldMeta: Record<FieldType, {
    label: string;
    icon: React.ReactNode;
    hasOptions: boolean;
    hasPlaceholder: boolean;
}> = {
    text:     { label: 'Short Text',  icon: <Text        className="h-3.5 w-3.5" />, hasOptions: false, hasPlaceholder: true  },
    email:    { label: 'Email',       icon: <Mail        className="h-3.5 w-3.5" />, hasOptions: false, hasPlaceholder: true  },
    tel:      { label: 'Phone',       icon: <Phone       className="h-3.5 w-3.5" />, hasOptions: false, hasPlaceholder: true  },
    number:   { label: 'Number',      icon: <Hash        className="h-3.5 w-3.5" />, hasOptions: false, hasPlaceholder: true  },
    url:      { label: 'URL',         icon: <Link2       className="h-3.5 w-3.5" />, hasOptions: false, hasPlaceholder: true  },
    textarea: { label: 'Long Text',   icon: <AlignLeft   className="h-3.5 w-3.5" />, hasOptions: false, hasPlaceholder: true  },
    select:   { label: 'Dropdown',    icon: <ChevronDown className="h-3.5 w-3.5" />, hasOptions: true,  hasPlaceholder: true  },
    radio:    { label: 'Radio',       icon: <Circle      className="h-3.5 w-3.5" />, hasOptions: true,  hasPlaceholder: false },
    checkbox: { label: 'Checkbox',    icon: <CheckSquare className="h-3.5 w-3.5" />, hasOptions: true,  hasPlaceholder: false },
    date:     { label: 'Date',        icon: <CalendarDays className="h-3.5 w-3.5"/>, hasOptions: false, hasPlaceholder: false },
    file:     { label: 'File Upload', icon: <ToggleLeft  className="h-3.5 w-3.5" />, hasOptions: false, hasPlaceholder: false },
};

function newField(type: FieldType = 'text'): BuilderField {
    return {
        _key:        Math.random().toString(36).slice(2),
        label:       '',
        field_type:  type,
        is_required: false,
        options:     '',
        placeholder: '',
    };
}

// ── Field live preview ────────────────────────────────────────────────────────

function FieldPreview({ field }: { field: BuilderField }) {
    const ph   = field.placeholder || field.label || '…';
    const opts = field.options.split(',').map(o => o.trim()).filter(Boolean);

    switch (field.field_type) {
        case 'textarea':
            return (
                <div className="min-h-[52px] w-full rounded-md border bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
                    {ph}
                </div>
            );
        case 'select':
            return (
                <div className="flex h-8 w-full items-center justify-between rounded-md border bg-muted/30 px-3 text-xs text-muted-foreground">
                    <span>{opts[0] || 'Select an option…'}</span>
                    <ChevronDown className="h-3 w-3" />
                </div>
            );
        case 'radio':
            return (
                <div className="space-y-1.5">
                    {(opts.length ? opts : ['Option A', 'Option B']).slice(0, 4).map(o => (
                        <div key={o} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <div className="h-3.5 w-3.5 rounded-full border border-muted-foreground/50" />
                            {o}
                        </div>
                    ))}
                </div>
            );
        case 'checkbox':
            return (
                <div className="space-y-1.5">
                    {(opts.length ? opts : ['Option A', 'Option B']).slice(0, 4).map(o => (
                        <div key={o} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <div className="h-3.5 w-3.5 rounded border border-muted-foreground/50" />
                            {o}
                        </div>
                    ))}
                </div>
            );
        case 'date':
            return (
                <div className="flex h-8 w-full items-center rounded-md border bg-muted/30 px-3 text-xs text-muted-foreground">
                    dd / mm / yyyy
                </div>
            );
        case 'file':
            return (
                <div className="flex h-8 w-full items-center justify-center rounded-md border border-dashed bg-muted/30 text-xs text-muted-foreground">
                    Choose file…
                </div>
            );
        default:
            return (
                <div className="flex h-8 w-full items-center rounded-md border bg-muted/30 px-3 text-xs text-muted-foreground">
                    {ph}
                </div>
            );
    }
}

// ── Individual field card ─────────────────────────────────────────────────────

function FieldCard({
    field, index, total, onChange, onRemove, onMove,
}: {
    field:    BuilderField;
    index:    number;
    total:    number;
    onChange: (updated: BuilderField) => void;
    onRemove: () => void;
    onMove:   (dir: 'up' | 'down') => void;
}) {
    const [expanded, setExpanded] = useState(!field.label);
    const meta = fieldMeta[field.field_type];

    return (
        <div className={cn(
            'rounded-xl border bg-card transition-shadow',
            expanded ? 'shadow-md ring-1 ring-primary/10' : 'hover:shadow-sm',
        )}>
            {/* Collapsed header */}
            <div
                className="flex cursor-pointer items-center gap-3 px-4 py-3 select-none"
                onClick={() => setExpanded(e => !e)}
            >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {meta.icon}
                </div>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium leading-tight">
                        {field.label || <span className="text-muted-foreground/60 italic">Untitled field</span>}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                        {meta.label}{field.is_required ? ' · Required' : ''}
                    </p>
                </div>

                <div className="flex items-center gap-0.5" onClick={e => e.stopPropagation()}>
                    <TooltipProvider delayDuration={300}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground"
                                    disabled={index === 0}
                                    onClick={() => onMove('up')}
                                >
                                    <ArrowUp className="h-3.5 w-3.5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="top">Move up</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground"
                                    disabled={index === total - 1}
                                    onClick={() => onMove('down')}
                                >
                                    <ArrowDown className="h-3.5 w-3.5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="top">Move down</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <Button
                        variant="ghost" size="icon"
                        className="h-7 w-7 text-muted-foreground hover:text-destructive"
                        onClick={onRemove}
                    >
                        <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                </div>
            </div>

            {/* Expanded editor */}
            {expanded && (
                <div className="grid gap-4 border-t px-4 pb-5 pt-4 sm:grid-cols-2">

                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                        <Label className="text-xs font-medium">
                            Label <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            value={field.label}
                            onChange={e => onChange({ ...field, label: e.target.value })}
                            placeholder="e.g. Full Name"
                            autoFocus
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label className="text-xs font-medium">Field Type</Label>
                        <Select
                            value={field.field_type}
                            onValueChange={v => onChange({ ...field, field_type: v as FieldType })}
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {(Object.entries(fieldMeta) as [FieldType, typeof fieldMeta[FieldType]][]).map(([type, m]) => (
                                    <SelectItem key={type} value={type}>
                                        <span className="flex items-center gap-2">{m.icon} {m.label}</span>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex items-end pb-1">
                        <label className="flex cursor-pointer items-center gap-2.5">
                            <button
                                type="button"
                                role="switch"
                                aria-checked={field.is_required}
                                className={cn(
                                    'relative inline-flex h-5 w-9 shrink-0 rounded-full border-2 transition-colors focus-visible:outline-none',
                                    field.is_required ? 'border-primary bg-primary' : 'border-muted bg-muted',
                                )}
                                onClick={() => onChange({ ...field, is_required: !field.is_required })}
                            >
                                <span className={cn(
                                    'pointer-events-none block h-3.5 w-3.5 rounded-full bg-white shadow-sm transition-transform mt-px',
                                    field.is_required ? 'translate-x-3.5 ml-px' : 'translate-x-px',
                                )} />
                            </button>
                            <span className="text-sm font-medium">Required field</span>
                        </label>
                    </div>

                    {meta.hasPlaceholder && (
                        <div className="flex flex-col gap-1.5 sm:col-span-2">
                            <Label className="text-xs font-medium">
                                Placeholder <span className="text-muted-foreground font-normal">(optional)</span>
                            </Label>
                            <Input
                                value={field.placeholder}
                                onChange={e => onChange({ ...field, placeholder: e.target.value })}
                                placeholder="e.g. Enter your full name…"
                            />
                        </div>
                    )}

                    {meta.hasOptions && (
                        <div className="flex flex-col gap-1.5 sm:col-span-2">
                            <Label className="text-xs font-medium">
                                Options <span className="text-muted-foreground font-normal">(comma-separated)</span>
                            </Label>
                            <Input
                                value={field.options}
                                onChange={e => onChange({ ...field, options: e.target.value })}
                                placeholder="e.g. Option A, Option B, Option C"
                            />
                        </div>
                    )}

                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                        <p className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                            <Eye className="h-3 w-3" /> Live preview
                        </p>
                        <div className="rounded-lg border bg-muted/10 p-3.5">
                            <p className="mb-2 text-sm font-medium">
                                {field.label || 'Field label'}
                                {field.is_required && <span className="ml-0.5 text-destructive">*</span>}
                            </p>
                            <FieldPreview field={field} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// ── Exported builder component ────────────────────────────────────────────────

export default function FormBuilder({ mode, form, fieldTypes }: Props) {
    const isEdit = mode === 'edit' && !!form;

    // ── Local state for all form values (including fields) ─────────────────
    const [name,        setName]        = useState(form?.name        ?? '');
    const [formType,    setFormType]    = useState(form?.form_type   ?? '');
    const [description, setDescription] = useState(form?.description ?? '');
    const [isActive,    setIsActive]    = useState(form?.is_active   ?? true);
    const [processing,  setProcessing]  = useState(false);
    const [errors,      setErrors]      = useState<Record<string, string>>({});

    const [fields, setFields] = useState<BuilderField[]>(
        form?.fields?.map(f => ({
            ...f,
            _key: Math.random().toString(36).slice(2),
        })) ?? [],
    );

    const [addType, setAddType] = useState<FieldType>('text');

    const addField   = () => setFields(prev => [...prev, newField(addType)]);
    const updateField = (i: number, updated: BuilderField) =>
        setFields(prev => prev.map((f, idx) => idx === i ? updated : f));
    const removeField = (i: number) =>
        setFields(prev => prev.filter((_, idx) => idx !== i));
    const moveField   = (i: number, dir: 'up' | 'down') => {
        setFields(prev => {
            const next = [...prev];
            const swap = dir === 'up' ? i - 1 : i + 1;
            [next[i], next[swap]] = [next[swap], next[i]];
            return next;
        });
    };

    // ── Submit — use router directly so ALL state is included ─────────────
    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        const newErrors: Record<string, string> = {};
        if (!name.trim())     newErrors.name      = 'Form name is required.';
        if (!formType.trim()) newErrors.form_type = 'Form type is required.';
        if (Object.keys(newErrors).length) { setErrors(newErrors); return; }

        setProcessing(true);
        setErrors({});

        // Build the complete payload — fields included ✅
        const payload = {
            name,
            form_type:   formType,
            description,
            is_active:   isActive,
            fields: fields.map(({ _key, ...rest }) => rest), // strip _key, keep id if editing
        };

        const options = {
            onError:  (errs: Record<string, string>) => { setErrors(errs); setProcessing(false); },
            onFinish: () => setProcessing(false),
        };

        if (isEdit) {
            // ✅ router.patch sends the payload correctly
            router.patch(`/forms/${form!.id}`, payload, options);
        } else {
            // ✅ router.post sends the payload correctly
            router.post('/forms', payload, options);
        }
    };

    return (
        <form onSubmit={submit} className="grid gap-6 lg:grid-cols-3">

            {/* ── Left column: fields ──────────────────────────────────────── */}
            <div className="space-y-4 lg:col-span-2">

                {fields.length === 0 ? (
                    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-20 text-center">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                            <Plus className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <p className="text-sm font-medium">No fields yet</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                            Pick a field type below and click <strong>Add Field</strong> to start building.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {fields.map((field, i) => (
                            <FieldCard
                                key={field._key}
                                field={field}
                                index={i}
                                total={fields.length}
                                onChange={updated => updateField(i, updated)}
                                onRemove={() => removeField(i)}
                                onMove={dir => moveField(i, dir)}
                            />
                        ))}
                    </div>
                )}

                {/* Add field bar */}
                <div className="flex gap-2 rounded-xl border bg-card p-4 shadow-sm">
                    <Select value={addType} onValueChange={v => setAddType(v as FieldType)}>
                        <SelectTrigger className="flex-1">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {(Object.entries(fieldMeta) as [FieldType, typeof fieldMeta[FieldType]][]).map(([type, m]) => (
                                <SelectItem key={type} value={type}>
                                    <span className="flex items-center gap-2">{m.icon} {m.label}</span>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button type="button" variant="outline" className="shrink-0 gap-2" onClick={addField}>
                        <Plus className="h-4 w-4" />
                        Add Field
                    </Button>
                </div>
            </div>

            {/* ── Right column: settings ───────────────────────────────────── */}
            <div className="space-y-4">
                <div className="rounded-xl border bg-card p-6 shadow-sm space-y-4">
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Form Settings
                    </h2>

                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                        <Label className={cn('text-sm font-medium', errors.name && 'text-destructive')}>
                            Form Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="e.g. Contact Us"
                        />
                        {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                    </div>

                    {/* Type */}
                    <div className="flex flex-col gap-1.5">
                        <Label className={cn('text-sm font-medium', errors.form_type && 'text-destructive')}>
                            Form Type <span className="text-destructive">*</span>
                        </Label>
                        <Select value={formType} onValueChange={setFormType}>
                            <SelectTrigger className={cn(errors.form_type && 'border-destructive')}>
                                <SelectValue placeholder="Select form type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="contact">Contact</SelectItem>
                                <SelectItem value="newsletter">Newsletter</SelectItem>
                                <SelectItem value="job_application">Job Application</SelectItem>
                                <SelectItem value="feedback">Feedback</SelectItem>
                                <SelectItem value="custom">Custom</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.form_type && <p className="text-xs text-destructive">{errors.form_type}</p>}
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-1.5">
                        <Label className="text-sm font-medium">Description</Label>
                        <Textarea
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Internal notes about this form…"
                            rows={3}
                        />
                    </div>

                    {/* Active toggle */}
                    <div className="flex items-center justify-between rounded-lg border bg-muted/20 px-4 py-3">
                        <div>
                            <p className="text-sm font-medium">Accept submissions</p>
                            <p className="text-xs text-muted-foreground">Toggle to activate or pause this form</p>
                        </div>
                        <button
                            type="button"
                            role="switch"
                            aria-checked={isActive}
                            className={cn(
                                'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 transition-colors focus-visible:outline-none',
                                isActive ? 'border-primary bg-primary' : 'border-muted bg-muted',
                            )}
                            onClick={() => setIsActive(v => !v)}
                        >
                            <span className={cn(
                                'pointer-events-none block h-4 w-4 rounded-full bg-white shadow-md transition-transform mt-px',
                                isActive ? 'translate-x-4 ml-0.5' : 'translate-x-0.5',
                            )} />
                        </button>
                    </div>

                    {/* Actions */}
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
                            {isEdit ? 'Save Changes' : 'Create Form'}
                        </Button>
                    </div>
                </div>

                {/* Summary card */}
                <div className="rounded-xl border bg-card p-4 shadow-sm space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Summary
                    </p>
                    <div className="space-y-2">
                        {([
                            ['Total fields',  fields.length],
                            ['Required',      fields.filter(f => f.is_required).length],
                            ['With options',  fields.filter(f => ['select','radio','checkbox'].includes(f.field_type)).length],
                        ] as [string, number][]).map(([label, count]) => (
                            <div key={label} className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">{label}</span>
                                <Badge variant="secondary" className="tabular-nums">{count}</Badge>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </form>
    );
}
