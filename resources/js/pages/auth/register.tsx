import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';

export default function Register() {
    return (
        <AuthLayout
            title="Create an account"
            description="Enter your details below to create your account"
        >
            <Head title="Register" />

            <Form
                method="post"
                url={register.url()}
                className="flex flex-col gap-6"
                resetOnSuccess={['password', 'password_confirmation']}
            >
                {({ processing, errors }) => (
                    <>
                        {Object.keys(errors).length > 0 &&
                            !errors.username &&
                            !errors.full_name &&
                            !errors.email &&
                            !errors.password && (
                                <div className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200">
                                    Registration failed. Please check the form and try again.
                                </div>
                            )}

                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    type="text"
                                    name="username"
                                    required
                                    autoFocus
                                    autoComplete="username"
                                    placeholder="Choose a username"
                                    className={errors.username ? 'border-red-400 focus-visible:ring-red-400' : ''}
                                />
                                <InputError message={errors.username} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="full_name">Full Name</Label>
                                <Input
                                    id="full_name"
                                    type="text"
                                    name="full_name"
                                    required
                                    autoComplete="name"
                                    placeholder="Full name"
                                    className={errors.full_name ? 'border-red-400 focus-visible:ring-red-400' : ''}
                                />
                                <InputError message={errors.full_name} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email">Email address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    autoComplete="email"
                                    placeholder="email@example.com"
                                    className={errors.email ? 'border-red-400 focus-visible:ring-red-400' : ''}
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    required
                                    autoComplete="new-password"
                                    placeholder="Password"
                                    className={errors.password ? 'border-red-400 focus-visible:ring-red-400' : ''}
                                />
                                <InputError message={errors.password} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password_confirmation">Confirm password</Label>
                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    required
                                    autoComplete="new-password"
                                    placeholder="Confirm password"
                                    className={errors.password_confirmation ? 'border-red-400 focus-visible:ring-red-400' : ''}
                                />
                                <InputError message={errors.password_confirmation} />
                            </div>

                            <Button type="submit" className="mt-2 w-full" disabled={processing}>
                                {processing && <Spinner />}
                                {processing ? 'Creating account…' : 'Create account'}
                            </Button>
                        </div>

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
