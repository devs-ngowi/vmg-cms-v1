import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    AlertTriangle,
    HelpCircle,
    Lightbulb,
    Loader2,
    MessageSquare,
    Save,
    Star,
    ThumbsUp,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type FeedbackFormData = {
    name:        string;
    email:       string;
    category:    string;
    rating:      number;
    message:     string;
    status:      string;
    admin_notes: string;
};

type DefaultValues = Partial<{
    id:          number;
    name:        string;
    email:       string;
    category:    string;
    rating:      number;
    message:     string;
    status:      string;
    admin_notes: string | null;
}>;

// ── Constants ─────────────────────────────────────────────────────────────────

const CATEGORIES = [
    { value: 'general',    label: 'General Feedback',    icon: MessageSquare },
    { value: 'compliment', label: 'Compliment / Praise', icon: ThumbsUp      },
    { value: 'suggestion', label: 'Suggestion',           icon: Lightbulb     },
    { value: 'complaint',  label: 'Complaint',            icon: AlertTriangle },
    { value: 'other',      label: 'Other',                icon: HelpCircle    },
] as const;

const STAR_LABELS: Record<number, string> = {
    1: 'Poor',
    2: 'Fair',
    3: 'Good',
    4: 'Very Good',
    5: 'Excellent',
};

const STATUS_OPTIONS = [
    { value: 'pending',  label: 'Pending'  },
    { value: 'reviewed', label: 'Reviewed' },
    { value: 'resolved', label: 'Resolved' },
] as const;

// ── Helpers ───────────────────────────────────────────────────────────────────

function Field({
    label, error, hint, required, children,
}: {
    label: string; error?: string; hint?: string; required?: boolean; children: React.ReactNode;
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {title}
            </h2>
            {children}
        </div>
    );
}

// ── Star Rating ───────────────────────────────────────────────────────────────

function StarRatingPicker({ value, onChange, error }: {
    value:    number;
    onChange: (v: number) => void;
    error?:   string;
}) {
    const [hovered, setHovered] = useState(0);

    return (
        <div className="space-y-1.5">
            <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map(star => (
                    <button
                        key={star}
                        type="button"
                        onClick={() => onChange(star)}
                        onMouseEnter={() => setHovered(star)}
                        onMouseLeave={() => setHovered(0)}
                        className="p-1 transition-transform hover:scale-110 focus:outline-none"
                        aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                    >
                        <Star
                            size={26}
                            className={cn(
                                'transition-colors duration-150',
                                (hovered || value) >= star
                                    ? 'fill-amber-400 text-amber-400'
                                    : 'fill-muted text-muted-foreground/30',
                            )}
                        />
                    </button>
                ))}
                {(hovered || value) > 0 && (
                    <span className="ml-1 text-sm font-semibold text-foreground">
                        {STAR_LABELS[hovered || value]}
                    </span>
                )}
            </div>
            {value === 0 && !error && (
                <p className="text-xs text-muted-foreground">Click a star to rate</p>
            )}
            {error && <p className="text-xs text-destructive">{error}</p>}
        </div>
    );
}

// ── Category Picker ───────────────────────────────────────────────────────────

function CategoryPicker({ value, onChange, error }: {
    value:    string;
    onChange: (v: string) => void;
    error?:   string;
}) {
    return (
        <div className="space-y-1.5">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {CATEGORIES.map(({ value: v, label, icon: Icon }) => (
                    <button
                        key={v}
                        type="button"
                        onClick={() => onChange(v)}
                        className={cn(
                            'flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-all text-left',
                            value === v
                                ? 'border-primary bg-primary/5 text-primary'
                                : 'border-border bg-muted/30 text-muted-foreground hover:border-primary/50 hover:text-foreground',
                        )}
                    >
                        <Icon size={14} className={value === v ? 'text-primary' : 'text-muted-foreground'} />
                        {label}
                    </button>
                ))}
            </div>
            {error && <p className="text-xs text-destructive">{error}</p>}
        </div>
    );
}

// ── Main Form ─────────────────────────────────────────────────────────────────

export default function FeedbackForm({
    mode,
    defaultValues = {},
}: {
    mode:           'create' | 'edit';
    defaultValues?: DefaultValues;
}) {
    const { data, setData, post, patch, processing, errors } = useForm<FeedbackFormData>({
        name:        defaultValues.name        ?? '',
        email:       defaultValues.email       ?? '',
        category:    defaultValues.category    ?? '',
        rating:      defaultValues.rating      ?? 0,
        message:     defaultValues.message     ?? '',
        status:      defaultValues.status      ?? 'pending',
        admin_notes: defaultValues.admin_notes ?? '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        mode === 'create'
            ? post('/feedback')                          // ← was /feedbacks
            : patch(`/feedback/${defaultValues.id}`);   // ← was /feedbacks/{id}
    };

    return (
        <form onSubmit={submit} className="grid gap-6 lg:grid-cols-3">

            {/* ── Left ── */}
            <div className="space-y-6 lg:col-span-2">
                <Section title="Feedback Details">
                    <div className="grid gap-4">

                        {/* Name & Email */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="Full Name" required error={errors.name}>
                                <Input
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    placeholder="e.g. John Doe"
                                    autoFocus
                                />
                            </Field>
                            <Field label="Email Address" required error={errors.email}>
                                <Input
                                    type="email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    placeholder="you@example.com"
                                />
                            </Field>
                        </div>

                        {/* Category */}
                        <Field label="Feedback Type" required error={errors.category}>
                            <CategoryPicker
                                value={data.category}
                                onChange={v => setData('category', v)}
                                error={errors.category}
                            />
                        </Field>

                        {/* Rating */}
                        <Field label="Overall Rating" required>
                            <div className="rounded-lg border bg-muted/20 px-4 py-3">
                                <StarRatingPicker
                                    value={data.rating}
                                    onChange={v => setData('rating', v)}
                                    error={errors.rating}
                                />
                            </div>
                        </Field>

                        {/* Message */}
                        <Field
                            label="Feedback Message"
                            required
                            error={errors.message}
                            hint="Maximum 5,000 characters."
                        >
                            <Textarea
                                value={data.message}
                                onChange={e => setData('message', e.target.value)}
                                placeholder={
                                    data.category === 'compliment' ? 'Tell us what we did well…'
                                    : data.category === 'suggestion' ? 'Share your idea or suggestion…'
                                    : data.category === 'complaint' ? 'Describe the issue you experienced…'
                                    : 'Write your feedback here…'
                                }
                                rows={6}
                                maxLength={5000}
                            />
                            <p className="text-right text-xs text-muted-foreground">
                                {data.message.length} / 5,000
                            </p>
                        </Field>
                    </div>
                </Section>

                {/* Admin Notes — edit only */}
                {mode === 'edit' && (
                    <Section title="Admin Notes">
                        <Field
                            label="Internal Notes"
                            error={errors.admin_notes}
                            hint="Visible only to admins. Not shared with the submitter."
                        >
                            <Textarea
                                value={data.admin_notes}
                                onChange={e => setData('admin_notes', e.target.value)}
                                placeholder="Add internal notes, follow-up actions, etc."
                                rows={4}
                                maxLength={5000}
                            />
                        </Field>
                    </Section>
                )}
            </div>

            {/* ── Right ── */}
            <div className="space-y-6">
                <Section title="Settings">

                    {/* Status — edit only */}
                    {mode === 'edit' && (
                        <div className="mb-4">
                            <Field label="Status" error={errors.status}>
                                <Select
                                    value={data.status}
                                    onValueChange={v => setData('status', v)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {STATUS_OPTIONS.map(opt => (
                                            <SelectItem key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </Field>
                        </div>
                    )}

                    <div className="flex gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            className="flex-1"
                            onClick={() => window.history.back()}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={processing}
                            className="flex-1 gap-2"
                        >
                            {processing
                                ? <Loader2 className="h-4 w-4 animate-spin" />
                                : <Save className="h-4 w-4" />
                            }
                            {mode === 'create' ? 'Submit' : 'Update'}
                        </Button>
                    </div>
                </Section>

                {/* Rating preview */}
                <Section title="Rating Preview">
                    <div className="flex items-center gap-1.5 flex-wrap">
                        {[1, 2, 3, 4, 5].map(s => (
                            <Star
                                key={s}
                                size={20}
                                className={
                                    s <= data.rating
                                        ? 'fill-amber-400 text-amber-400'
                                        : 'fill-muted text-muted-foreground/20'
                                }
                            />
                        ))}
                        {data.rating > 0 && (
                            <span className="ml-1 text-sm font-semibold">
                                {STAR_LABELS[data.rating]}
                            </span>
                        )}
                    </div>
                    {data.rating === 0 && (
                        <p className="text-xs text-muted-foreground mt-1">No rating selected yet.</p>
                    )}
                </Section>
            </div>
        </form>
    );
}
