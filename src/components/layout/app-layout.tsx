import AppHeader from './app-header';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <AppHeader />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col bg-muted/40 md:py-8 md:gap-8 md:px-40 px-4 py-2">
        {children}
      </main>
    </div>
  );
}
