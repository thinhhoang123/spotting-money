import { useSession } from 'next-auth/react';

export default function ProtectPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  if (session) return children;
}
