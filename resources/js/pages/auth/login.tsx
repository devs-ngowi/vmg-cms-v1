import { Form, Head, usePage } from '@inertiajs/react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { login } from '@/routes';

interface SharedProps {
    flash: {
        status?: string;
        error?: string;
    };
}

export default function Login() {
    const { flash = {} as SharedProps['flash'] } = usePage<SharedProps>().props;

    return (
        <AuthLayout
            title="Log in to your account"
            description="Enter your email and password below to log in"
        >
            <Head title="Log in" />

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

            <Form
                method="post"
                url={login.url()}
                className="flex flex-col gap-6"
                resetOnSuccess={['password']}
            >
                {({ processing, errors }) => (
                    <>
                        {Object.keys(errors).length > 0 && !errors.email && !errors.password && (
                            <div className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200">
                                Something went wrong. Please try again.
                            </div>
                        )}

                        <div className="grid gap-6">
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
                                    className={errors.email ? 'border-red-400 focus-visible:ring-red-400' : ''}
                                />
                                <InputError message={errors.email} />
                            </div>

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
                                    className={errors.password ? 'border-red-400 focus-visible:ring-red-400' : ''}
                                />
                                <InputError message={errors.password} />
                            </div>

                            <Button type="submit" className="mt-4 w-full" disabled={processing}>
                                {processing && <Spinner />}
                                {processing ? 'Logging in…' : 'Log in'}
                            </Button>
                        </div>

                        {/* <div className="text-center text-sm text-muted-foreground">
                            Don&apos;t have an account?{' '}
                            <TextLink href="/register">Sign up</TextLink>
                        </div> */}
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
