import AppHeader from './app-header';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <AppHeader />
      <main className="flex flex-1 flex-col min-h-[calc(100vh_-_theme(spacing.16))] bg-muted/40 px-4 py-2 md:py-4 md:px-6 md:gap-8 lg:px-12 2xl:px-48 ">
        {children}
      </main>
    </div>
  );
}
