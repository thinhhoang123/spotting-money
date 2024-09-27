import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { withAuth } from 'next-auth/middleware';
import { NextRequest } from 'next/server';

const publicPages = ['/', '/login', '/sign-up'];

// export default createMiddleware(routing);
const handleI18nRouting = createMiddleware(routing);

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  function onSuccess(req) {
    return handleI18nRouting(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: '/login',
    },
  }
);
export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${['en', 'vi'].join('|')}))?(${publicPages
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i'
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  return isPublicPage ? handleI18nRouting(req) : (authMiddleware as any)(req);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
