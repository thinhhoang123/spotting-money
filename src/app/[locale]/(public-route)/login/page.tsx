'use client';
import Typography from '@/components/typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { signIn } from 'next-auth/react';
export default function LoginForm() {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-sm flex flex-col gap-4">
        <div className="mb-4">
          <Typography type="h2" classNames="text-center w-full">
            Login
          </Typography>
          <Typography type="muted" classNames="text-center w-full">
            Enter your email below to login to your account.
          </Typography>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter email" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              placeholder="Enter password"
            />
          </div>
          <Button className="w-full">Sign in</Button>
        </div>
        <Typography type="muted" classNames="text-center w-full">
          OR CONTINUE WITH
        </Typography>
        <Button
          className="w-full"
          variant="outline"
          onClick={() => signIn('github')}
        >
          <GitHubLogoIcon className="mr-2 h-4 w-4" />
          Github
        </Button>
      </div>
    </section>
  );
}
