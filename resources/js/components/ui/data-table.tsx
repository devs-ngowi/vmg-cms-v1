import { useState, useMemo } from 'react';
import {
    ChevronUp,
    ChevronDown,
    ChevronsUpDown,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Search,
    SlidersHorizontal,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// ── Types ────────────────────────────────────────────────────────────────────

export type ColumnDef<T> = {
    key: keyof T | string;
    header: string;
    sortable?: boolean;
    className?: string;
    cell?: (row: T) => React.ReactNode;
};

type SortDirection = 'asc' | 'desc' | null;

type SortState = {
    key: string;
    direction: SortDirection;
};

type DataTableProps<T extends Record<string, unknown>> = {
    data: T[];
    columns: ColumnDef<T>[];
    /** Slot rendered in the top-right of the toolbar (e.g. an "Add User" button) */
    action?: React.ReactNode;
    /** Placeholder text for the search input */
    searchPlaceholder?: string;
    /** Which keys to include in the global search. Defaults to all string/number columns. */
    searchKeys?: (keyof T)[];
    /** Rows per page options */
    pageSizeOptions?: number[];
    emptyMessage?: string;
    className?: string;
};

// ── Sort icon helper ──────────────────────────────────────────────────────────

function SortIcon({ column, sort }: { column: string; sort: SortState }) {
    if (sort.key !== column) return <ChevronsUpDown className="ml-1.5 inline h-3.5 w-3.5 text-muted-foreground/50" />;
    if (sort.direction === 'asc')  return <ChevronUp   className="ml-1.5 inline h-3.5 w-3.5 text-primary" />;
    return                                <ChevronDown  className="ml-1.5 inline h-3.5 w-3.5 text-primary" />;
}

// ── Component ─────────────────────────────────────────────────────────────────

export function DataTable<T extends Record<string, unknown>>({
    data = [],
    columns,
    action,
    searchPlaceholder = 'Search…',
    searchKeys,
    pageSizeOptions = [10, 25, 50, 100],
    emptyMessage = 'No records found.',
    className,
}: DataTableProps<T>) {
    const [search, setSearch]       = useState('');
    const [sort, setSort]           = useState<SortState>({ key: '', direction: null });
    const [page, setPage]           = useState(1);
    const [pageSize, setPageSize]   = useState(pageSizeOptions[0]);

    // ── Derive searchable keys ────────────────────────────────────────────────
    const keys = useMemo<(keyof T)[]>(
        () => searchKeys ?? (columns.map(c => c.key as keyof T)),
        [searchKeys, columns],
    );

    // ── Filter ────────────────────────────────────────────────────────────────
    const filtered = useMemo(() => {
        if (!search.trim()) return data;
        const q = search.toLowerCase();
        return data.filter(row =>
            keys.some(k => String(row[k] ?? '').toLowerCase().includes(q)),
        );
    }, [data, search, keys]);

    // ── Sort ──────────────────────────────────────────────────────────────────
    const sorted = useMemo(() => {
        if (!sort.key || !sort.direction) return filtered;
        return [...filtered].sort((a, b) => {
            const av = a[sort.key as keyof T];
            const bv = b[sort.key as keyof T];
            const cmp = String(av ?? '').localeCompare(String(bv ?? ''), undefined, { numeric: true });
            return sort.direction === 'asc' ? cmp : -cmp;
        });
    }, [filtered, sort]);

    // ── Paginate ──────────────────────────────────────────────────────────────
    const totalPages  = Math.max(1, Math.ceil(sorted.length / pageSize));
    const safePage    = Math.min(page, totalPages);
    const paginated   = sorted.slice((safePage - 1) * pageSize, safePage * pageSize);

    const handleSort = (key: string, sortable?: boolean) => {
        if (!sortable) return;
        setSort(prev =>
            prev.key === key
                ? { key, direction: prev.direction === 'asc' ? 'desc' : prev.direction === 'desc' ? null : 'asc' }
                : { key, direction: 'asc' },
        );
        setPage(1);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setPage(1);
    };

    return (
        <div className={cn('flex flex-col gap-4', className)}>

            {/* ── Toolbar ─────────────────────────────────────────────────── */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative w-full sm:max-w-xs">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        value={search}
                        onChange={handleSearch}
                        placeholder={searchPlaceholder}
                        className="pl-9"
                    />
                </div>

                <div className="flex items-center gap-2">
                    {/* Future filter button slot */}
                    <Button variant="outline" size="sm" className="gap-1.5 text-muted-foreground">
                        <SlidersHorizontal className="h-3.5 w-3.5" />
                        Filters
                    </Button>
                    {action}
                </div>
            </div>

            {/* ── Table ───────────────────────────────────────────────────── */}
            <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted/40 hover:bg-muted/40">
                            {columns.map(col => (
                                <TableHead
                                    key={String(col.key)}
                                    className={cn(
                                        'whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-muted-foreground',
                                        col.sortable && 'cursor-pointer select-none hover:text-foreground',
                                        col.className,
                                    )}
                                    onClick={() => handleSort(String(col.key), col.sortable)}
                                >
                                    {col.header}
                                    {col.sortable && (
                                        <SortIcon column={String(col.key)} sort={sort} />
                                    )}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {paginated.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="py-16 text-center text-sm text-muted-foreground"
                                >
                                    {emptyMessage}
                                </TableCell>
                            </TableRow>
                        ) : (
                            paginated.map((row, i) => (
                                <TableRow
                                    key={i}
                                    className="transition-colors hover:bg-muted/30"
                                >
                                    {columns.map(col => (
                                        <TableCell
                                            key={String(col.key)}
                                            className={cn('text-sm', col.className)}
                                        >
                                            {col.cell
                                                ? col.cell(row)
                                                : String(row[col.key as keyof T] ?? '—')}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* ── Footer / Pagination ──────────────────────────────────────── */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                {/* Results summary */}
                <p className="text-xs text-muted-foreground">
                    Showing{' '}
                    <span className="font-medium text-foreground">
                        {sorted.length === 0 ? 0 : (safePage - 1) * pageSize + 1}
                    </span>{' '}
                    –{' '}
                    <span className="font-medium text-foreground">
                        {Math.min(safePage * pageSize, sorted.length)}
                    </span>{' '}
                    of{' '}
                    <span className="font-medium text-foreground">{sorted.length}</span>{' '}
                    {sorted.length !== data.length && (
                        <span className="text-muted-foreground">(filtered from {data.length})</span>
                    )}
                </p>

                <div className="flex items-center gap-4">
                    {/* Rows per page */}
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Rows per page</span>
                        <Select
                            value={String(pageSize)}
                            onValueChange={v => { setPageSize(Number(v)); setPage(1); }}
                        >
                            <SelectTrigger className="h-8 w-16 text-xs">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {pageSizeOptions.map(s => (
                                    <SelectItem key={s} value={String(s)} className="text-xs">
                                        {s}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Page controls */}
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8"
                            onClick={() => setPage(1)} disabled={safePage === 1}>
                            <ChevronsLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8"
                            onClick={() => setPage(p => Math.max(1, p - 1))} disabled={safePage === 1}>
                            <ChevronLeft className="h-4 w-4" />
                        </Button>

                        <span className="min-w-[80px] text-center text-xs text-muted-foreground">
                            Page <span className="font-medium text-foreground">{safePage}</span> of{' '}
                            <span className="font-medium text-foreground">{totalPages}</span>
                        </span>

                        <Button variant="ghost" size="icon" className="h-8 w-8"
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={safePage === totalPages}>
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8"
                            onClick={() => setPage(totalPages)} disabled={safePage === totalPages}>
                            <ChevronsRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
