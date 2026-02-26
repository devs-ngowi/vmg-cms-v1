// components/IconPicker.tsx

"use client";

import React, { useState, useMemo, useEffect } from "react";
import { REMIXICON_LIBRARY, searchIcons, getIconName } from "@/lib/icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";


const REMIXICON_CDN =
    "https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css";

function useRemixiconCSS() {
    useEffect(() => {
        const linkId = "remixicon-css";
        if (document.getElementById(linkId)) return; // already loaded

        const link = document.createElement("link");
        link.id   = linkId;
        link.rel  = "stylesheet";
        link.href = REMIXICON_CDN;
        document.head.appendChild(link);
    }, []);
}

// ── Types ─────────────────────────────────────────────────────────────────────

interface IconPickerProps {
    value:     string;
    onChange:  (icon: string) => void;
    onSave?:   () => void;
}

// ── Component ─────────────────────────────────────────────────────────────────

export function IconPicker({ value, onChange, onSave }: IconPickerProps) {
    useRemixiconCSS(); // ✅ Auto-inject Remixicon font

    const [open, setOpen]   = useState(false);
    const [query, setQuery] = useState("");

    const filtered = useMemo(() => searchIcons(query), [query]);

    const handleSelect = (icon: string) => {
        onChange(icon);
        setOpen(false);
        onSave?.();
    };

    return (
        <div className="space-y-2">

            {/* ── Selected icon preview ──────────────────────────────────── */}
            <div className="flex items-center gap-3 rounded-lg border bg-muted/30 p-3">
                {value ? (
                    <>
                        {/* Icon preview box */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                            <i className={`${value} text-lg text-primary`} />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium">{value}</p>
                            <p className="text-xs text-muted-foreground">
                                {getIconName(value)}
                            </p>
                        </div>

                        {/* Clear */}
                        <button
                            type="button"
                            onClick={() => onChange("")}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                            aria-label="Clear icon"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </>
                ) : (
                    <>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted">
                            <span className="text-xs text-muted-foreground">—</span>
                        </div>
                        <p className="text-sm text-muted-foreground">No icon selected</p>
                    </>
                )}
            </div>

            {/* ── Open picker button ─────────────────────────────────────── */}
            <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => setOpen(true)}
            >
                Browse Icons
            </Button>

            {/* ── Picker dialog ──────────────────────────────────────────── */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Select Icon</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4">

                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                placeholder="Search icons…"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                className="pl-9"
                                autoFocus
                            />
                        </div>

                        {/* Grid */}
                        <ScrollArea className="h-96 rounded-lg border">
                            <div className="grid grid-cols-6 gap-1 p-3">
                                {filtered.length === 0 ? (
                                    <div className="col-span-6 flex items-center justify-center py-8 text-sm text-muted-foreground">
                                        No icons found
                                    </div>
                                ) : (
                                    filtered.map(icon => (
                                        <button
                                            key={icon}
                                            type="button"
                                            onClick={() => handleSelect(icon)}
                                            title={icon}
                                            className={cn(
                                                "flex flex-col items-center justify-center gap-1.5 rounded-lg p-3 transition-all",
                                                "hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                                                value === icon && "ring-2 ring-primary bg-primary/5",
                                            )}
                                        >
                                            {/* ✅ Icon glyph — requires Remixicon CSS */}
                                            <i className={`${icon} text-xl text-foreground`} />

                                            {/* Short name label */}
                                            <span className="w-full truncate text-center text-[10px] leading-tight text-muted-foreground">
                                                {getIconName(icon)}
                                            </span>
                                        </button>
                                    ))
                                )}
                            </div>
                        </ScrollArea>

                        {/* Footer */}
                        <p className="text-xs text-muted-foreground">
                            Showing {filtered.length} of {REMIXICON_LIBRARY.length} icons
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
