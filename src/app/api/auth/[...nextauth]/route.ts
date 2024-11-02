import NextAuth, { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { login, register } from '@/services/auth/auth';
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const res = await login({
          email: credentials.email,
          password: credentials.password,
        });
        if (res.status === 401) {
          console.log(res.statusText);
          return null;
        }
        const user = await res.json();
        return user;
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log('TOKEN', { token });
      // if (user) {
      //   await register({
      //     email: token.email!,
      //     name: token.name!,
      //     password: '123456',
      //   });
      //   return { ...token, ...user };
      // }
      return token;
    },
    async session({ token, session }) {
      session.user = token.user;
      session.access_token = token.access_token;
      console.log('SESSION', { token });
      return session;
    },
  },
};
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
