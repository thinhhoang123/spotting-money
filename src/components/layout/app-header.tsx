'use client';
import { CircleUser, Menu } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '../ui/button';
import Typography from '../typography';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Dashboard', href: '#' },
  { label: 'Trackings', href: '/trackings' },
  { label: 'Savings', href: '#' },
  { label: 'Goals', href: '#' },
  { label: 'Settings', href: '#' },
];

export default function AppHeader() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const isActiveItem = (href: string) => pathname.includes(href);
  const renderNavItem = () => {
    return navItems.map((item) => {
      if (session)
        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              'text-muted-foreground transition-colors hover:text-foreground',
              isActiveItem(item.href) && 'text-foreground font-bold'
            )}
          >
            {item.label}
          </Link>
        );
      return null;
    });
  };

  const renderRightNavItem = () => {
    if (session)
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              {session.user?.image ? (
                <Image
                  src={session.user.image}
                  width={32}
                  height={32}
                  alt="user image"
                  className="rounded-full"
                />
              ) : (
                <CircleUser className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    if (pathname.includes('/login'))
      return (
        <Button variant="secondary">
          <Link href="/sign-up">Sign up</Link>
        </Button>
      );
    return (
      <Button variant="secondary">
        <Link href="/login">Login</Link>
      </Button>
    );
  };

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <div className="flex gap-2 items-center">
          <Image src="/logo.svg" width={32} height={32} alt="logo" />
          <div className="text-nowrap">
            <Typography type="h3">Spotting Money</Typography>
          </div>
        </div>
        {renderNavItem()}
      </nav>
      {/* Mobile */}
      {session ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <div className="flex gap-2 items-center">
                  <Image src="/logo.svg" width={32} height={32} alt="logo" />
                  <div className="text-nowrap">
                    <Typography type="h3">Spotting Money</Typography>
                  </div>
                </div>
              </Link>
              {renderNavItem()}
            </nav>
          </SheetContent>
        </Sheet>
      ) : (
        <Image
          src="/logo.svg"
          width={32}
          height={32}
          alt="logo"
          className="md:hidden"
        />
      )}
      {/* Mobile */}
      {renderRightNavItem()}
    </header>
  );
}
