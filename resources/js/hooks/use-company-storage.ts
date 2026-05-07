import { usePage } from '@inertiajs/react';

// ── Types ─────────────────────────────────────────────────────────────────────
export type Company = {
    id: number;
    name: string;
    slug: string;
    domain: string;
    database: string;
    logo?: string | null;
    plan?: string | null;
    status?: string | null;
} | null;

export type SidebarConfig = {
    logo: string;
    company_name: string;
    brand_color: string;
    enabled_modules: string[];
    show_group_labels: boolean;
} | null;

interface SharedProps {
    company: Company;
    sidebar_config: SidebarConfig;
}

// ── useCompany ────────────────────────────────────────────────────────────────
/**
 * Resolves the current tenant company from:
 *  1. Inertia shared props  (HandleInertiaRequests)
 *  2. localStorage          (saved on login)
 *  3. tenant_company cookie (fallback)
 */
export function useCompany(): Company {
    const { company } = usePage<SharedProps>().props;

    if (company && typeof company === 'object') return company;

    try {
        const raw = localStorage.getItem('tenant_company');
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed?.id) return parsed as Company;
        }
    } catch { /* corrupted */ }

    try {
        const match = document.cookie
            .split('; ')
            .find(row => row.startsWith('tenant_company='));
        if (match) {
            const parsed = JSON.parse(
                decodeURIComponent(match.split('=').slice(1).join('='))
            );
            if (parsed?.id) return parsed as Company;
        }
    } catch { /* corrupted */ }

    return null;
}

// ── useSidebarConfig ──────────────────────────────────────────────────────────
/**
 * Returns per-tenant sidebar configuration from:
 *  1. Inertia shared props (from HandleInertiaRequests → SiteSetting::getSidebarConfig)
 *  2. localStorage fallback (saved on login if needed)
 *  3. Safe defaults
 */
export function useSidebarConfig(): SidebarConfig {
    const { sidebar_config } = usePage<SharedProps>().props;

    if (sidebar_config && typeof sidebar_config === 'object') {
        return sidebar_config;
    }

    // Fallback: build from localStorage company data
    try {
        const raw = localStorage.getItem('tenant_company');
        if (raw) {
            const comp = JSON.parse(raw);
            return {
                logo:               comp.logo        ?? '',
                company_name:       comp.name        ?? '',
                brand_color:        '#1e40af',
                enabled_modules:    [],   // show all when no config
                show_group_labels:  true,
            };
        }
    } catch { /* corrupted */ }

    return {
        logo:             '',
        company_name:     '',
        brand_color:      '#1e40af',
        enabled_modules:  [],
        show_group_labels: true,
    };
}

// ── useCompanyStorage (alias used by app-layout.tsx) ─────────────────────────
export function useCompanyStorage() {
    return {
        company:       useCompany(),
        sidebarConfig: useSidebarConfig(),
    };
}
