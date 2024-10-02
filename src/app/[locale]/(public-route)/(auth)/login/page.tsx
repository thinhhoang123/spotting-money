'use client';
import Typography from '@/components/typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  email: z.string().email().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export default function LoginForm() {
  const t = useTranslations();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: '/',
      redirect: true,
    });
  };

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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter password"
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            {t('LOGIN')}
          </Button>
        </form>
      </Form>

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
