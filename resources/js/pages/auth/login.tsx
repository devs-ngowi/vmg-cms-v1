import { Head, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';

// ── All auth-related localStorage keys ───────────────────────────────────────
export const TENANT_STORAGE_KEYS = [
    'tenant_company',
    'tenant_company_name',
    'tenant_company_slug',
    'tenant_company_domain',
    'tenant_company_database',
    'tenant_company_logo',
    'tenant_company_plan',
    'tenant_company_status',
    'api_token',
    'auth_user',
] as const;

export function clearAuthStorage(): void {
    TENANT_STORAGE_KEYS.forEach(key => localStorage.removeItem(key));
}

// ── Types ─────────────────────────────────────────────────────────────────────
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

interface SharedProps {
    flash: { status?: string; error?: string };
    company: Company;
}

// ── XSRF token helper ─────────────────────────────────────────────────────────
function getXsrfToken(): string {
    const match = document.cookie
        .split('; ')
        .find(row => row.startsWith('XSRF-TOKEN='));
    if (!match) return '';
    try {
        return decodeURIComponent(match.split('=').slice(1).join('='));
    } catch {
        return '';
    }
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function Login() {
    const { flash = {}, company = null } = usePage<SharedProps>().props;

    const [email,      setEmail]      = useState('');
    const [password,   setPassword]   = useState('');
    const [processing, setProcessing] = useState(false);
    const [errors,     setErrors]     = useState<{
        email?:    string;
        password?: string;
        general?:  string;
    }>({});

    // ── Clear ALL stale auth data the moment the login page mounts ────────────
    // This fires regardless of how the user got here (logout button, manual nav, etc.)
    useEffect(() => {
        clearAuthStorage();
    }, []);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setProcessing(true);
        setErrors({});

        try {
            // ── 1. Refresh CSRF cookie ────────────────────────────────────
            await fetch('/sanctum/csrf-cookie', {
                method:      'GET',
                credentials: 'include',
            });

            // ── 2. POST to /login ─────────────────────────────────────────
            const response = await fetch('/login', {
                method:      'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept':       'application/json',
                    'X-XSRF-TOKEN': getXsrfToken(),
                },
                body: JSON.stringify({ email, password }),
            });

            const json = await response.json();

            // ── 3. Handle errors ──────────────────────────────────────────
            if (!response.ok) {
                setErrors({
                    email:    json.errors?.email    ?? undefined,
                    password: json.errors?.password ?? undefined,
                    general:  !json.errors           ? json.message : undefined,
                });
                return;
            }

            // ── 4. Destructure response ───────────────────────────────────
            const { user, company: comp, token } = (json.data ?? {}) as {
                user?:    Record<string, unknown>;
                company?: Company;
                token?:   string;
            };

            console.debug('[Login] server response data:', json.data);

            // ── 5. Save fresh data to localStorage ────────────────────────
            // clearAuthStorage() already ran on mount; this is a safety clear
            // in case of re-submit without a page reload
            clearAuthStorage();

            if (comp && typeof comp === 'object') {
                localStorage.setItem('tenant_company',          JSON.stringify(comp));
                localStorage.setItem('tenant_company_name',     String(comp.name     ?? ''));
                localStorage.setItem('tenant_company_slug',     String(comp.slug     ?? ''));
                localStorage.setItem('tenant_company_domain',   String(comp.domain   ?? ''));
                localStorage.setItem('tenant_company_database', String(comp.database ?? ''));
                localStorage.setItem('tenant_company_logo',     String(comp.logo     ?? ''));
                localStorage.setItem('tenant_company_plan',     String(comp.plan     ?? ''));
                localStorage.setItem('tenant_company_status',   String(comp.status   ?? ''));
            } else {
                console.warn('[Login] No company data in response — check DomainTenantFinder', json.data);
            }

            if (token) {
                localStorage.setItem('api_token', token);
            }

            if (user) {
                localStorage.setItem('auth_user', JSON.stringify(user));
            }

            // ── 6. Hard redirect — web session is now active ──────────────
            window.location.href = json.data?.redirect ?? '/dashboard';

        } catch (err) {
            console.error('[Login] Network/parse error:', err);
            setErrors({ general: 'Network error. Please try again.' });
        } finally {
            setProcessing(false);
        }
    }

    return (
        <AuthLayout
            title={company ? `Log in to ${company.name}` : 'Log in to your account'}
            description={
                company
                    ? `Enter your email and password below to log in to ${company.name}`
                    : 'Enter your email and password below to log in'
            }
        >
            <Head title={company ? `${company.name} Login` : 'Log in'} />

            {/* Company badge */}
            {company && (
                <div className="mb-4 rounded-md bg-blue-50 px-4 py-3 text-center text-sm font-medium text-blue-700 ring-1 ring-blue-200">
                    Company: <span className="font-semibold">{company.name}</span>
                </div>
            )}

            {/* Flash messages */}
            {flash.status && (
                <div className="mb-4 rounded-md bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700 ring-1 ring-green-200">
                    {flash.status}
                </div>
            )}

            {flash.error && (
                <div className="mb-4 rounded-md bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-700 ring-1 ring-red-200">
                    {flash.error}
                </div>
            )}

            {/* General error */}
            {errors.general && (
                <div className="mb-4 rounded-md bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-700 ring-1 ring-red-200">
                    {errors.general}
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid gap-6">

                    {/* Email */}
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email address</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            required
                            autoFocus
                            autoComplete="email"
                            placeholder="email@example.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className={errors.email ? 'border-red-400 focus-visible:ring-red-400' : ''}
                        />
                        <InputError message={errors.email} />
                    </div>

                    {/* Password */}
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <TextLink href="/forgot-password" className="ml-auto text-sm">
                                Forgot password?
                            </TextLink>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            required
                            autoComplete="current-password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className={errors.password ? 'border-red-400 focus-visible:ring-red-400' : ''}
                        />
                        <InputError message={errors.password} />
                    </div>

                    <Button type="submit" className="mt-4 w-full" disabled={processing}>
                        {processing && <Spinner />}
                        {processing ? 'Logging in…' : 'Log in'}
                    </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                    Don&apos;t have a company account?{' '}
                    <TextLink href="/register-company">Register your company</TextLink>
                </div>
            </form>
        </AuthLayout>
    );
}
