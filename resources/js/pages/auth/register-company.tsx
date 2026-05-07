import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import AuthLayout from '@/layouts/auth-layout';

const PLANS = [
    { value: 'basic',      label: 'Basic' },
    { value: 'pro',        label: 'Pro' },
    { value: 'enterprise', label: 'Enterprise' },
];

export default function RegisterCompany() {
    return (
        <AuthLayout
            title="Register your company"
            description="Create a new company workspace and administrator account"
            wide
        >
            <Head title="Register company" />

            <Form
                method="post"
                url="/register-company"
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        {/* ── Company details ── */}
                        <fieldset className="grid gap-4">
                            <legend className="mb-3 text-xs underline text-center font-semibold uppercase tracking-widest text-muted-foreground">
                                Company details
                            </legend>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="company_name">Company name</Label>
                                    <Input id="company_name" name="company_name" required />
                                    <InputError message={errors.company_name} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="domain">Domain / Host</Label>
                                    <Input
                                        id="domain"
                                        name="domain"
                                        required
                                        placeholder="localhost"
                                    />
                                    <InputError message={errors.domain} />
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="plan">Plan</Label>
                                <Select name="plan" defaultValue="basic">
                                    <SelectTrigger id="plan">
                                        <SelectValue placeholder="Select a plan" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {PLANS.map(({ value, label }) => (
                                            <SelectItem key={value} value={value}>
                                                {label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.plan} />
                            </div>
                        </fieldset>

                        {/* ── Administrator account ── */}
                        <fieldset className="grid gap-4">
                            <legend className="mb-4 text-xs font-semibold underline uppercase tracking-widest text-muted-foreground">
                                Administrator account
                            </legend>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="admin_full_name">Full name</Label>
                                    <Input id="admin_full_name" name="admin_full_name" required />
                                    <InputError message={errors.admin_full_name} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="admin_username">Username</Label>
                                    <Input id="admin_username" name="admin_username" required />
                                    <InputError message={errors.admin_username} />
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="admin_email">Email</Label>
                                <Input id="admin_email" type="email" name="admin_email" required />
                                <InputError message={errors.admin_email} />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="admin_password">Password</Label>
                                    <Input
                                        id="admin_password"
                                        type="password"
                                        name="admin_password"
                                        required
                                    />
                                    <InputError message={errors.admin_password} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="admin_password_confirmation">
                                        Confirm password
                                    </Label>
                                    <Input
                                        id="admin_password_confirmation"
                                        type="password"
                                        name="admin_password_confirmation"
                                        required
                                    />
                                </div>
                            </div>
                        </fieldset>

                        <Button type="submit" className="w-full" disabled={processing}>
                            {processing && <Spinner />}
                            {processing ? 'Creating company…' : 'Register company'}
                        </Button>

                        <div className="text-center text-sm text-muted-foreground">
                            Already have an account?{' '}
                            <TextLink href="/login">Log in</TextLink>
                        </div>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
