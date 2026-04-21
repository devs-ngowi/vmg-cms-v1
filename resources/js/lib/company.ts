import { getCompanyFromCookie } from '@/lib/cookie';

type Company = {
    id: number;
    name: string;
    slug: string;
    domain: string;
    database: string;
    logo?: string | null;
    plan?: string | null;
    status?: string | null;
} | null;

/**
 * Read company from localStorage (set by useCompanyStorage hook).
 * Falls back to cookie if localStorage is empty (e.g. on first load).
 */
export function getStoredCompany(): Company {
    try {
        const raw = localStorage.getItem('tenant_company');
        if (raw) return JSON.parse(raw) as Company;
    } catch { /* ignore */ }

    return getCompanyFromCookie();
}

export function getCompanyName(): string {
    return localStorage.getItem('tenant_company_name') ?? '';
}

export function getCompanyDomain(): string {
    return localStorage.getItem('tenant_company_domain') ?? '';
}

export function getCompanySlug(): string {
    return localStorage.getItem('tenant_company_slug') ?? '';
}
