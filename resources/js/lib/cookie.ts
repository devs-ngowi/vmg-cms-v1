export function getCookie(name: string): string | null {
    if (typeof document === 'undefined') return null;

    const match = document.cookie
        .split('; ')
        .find(row => row.startsWith(name + '='));

    if (!match) return null;

    try {
        return decodeURIComponent(match.split('=').slice(1).join('='));
    } catch {
        return null;
    }
}

export function getCompanyFromCookie() {
    try {
        const raw = getCookie('tenant_company');
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}
