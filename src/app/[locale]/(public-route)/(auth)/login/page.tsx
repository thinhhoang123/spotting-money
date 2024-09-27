'use client';
import Typography from '@/components/typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
export default function LoginForm() {
  const t = useTranslations();
  return (
    <div className="w-full max-w-sm flex flex-col gap-4">
      <div className="mb-4">
        <Typography type="h2" classNames="text-center w-full">
          {t('LOGIN')}
        </Typography>
        <Typography type="muted" classNames="text-center w-full">
          {t('LOGIN_SUBTITLE')}
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
        <Button className="w-full"> {t('LOGIN')}</Button>
      </div>
      <Typography type="muted" classNames="text-center">
        {t('CONTINUE_WITH')}
      </Typography>
      <Button
        className="w-full"
        variant="outline"
        onClick={() => signIn('github', { callbackUrl: '/' })}
      >
        <GitHubLogoIcon className="mr-2 h-4 w-4" />
        Github
      </Button>
    </div>
  );
}
