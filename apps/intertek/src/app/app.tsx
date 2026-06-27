import { Component, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { SiteHeader } from './components/SiteHeader';
import { ROUTES } from './constants/routes';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  override state = { error: null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  override render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,rgba(27,93,191,0.1),transparent_30%),linear-gradient(180deg,#f6f7fb,#eef2f7)] p-8 text-center">
          <div className="max-w-sm rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_80px_rgba(10,28,52,0.12)] backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">Application error</p>
            <p className="mt-3 text-xl font-bold tracking-tight text-brand-navy">Something went wrong.</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">Refresh the page to try again.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function AppShell() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
    setIsScrolled(false);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-100 antialiased">
      {/* Creative image background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#060d1a_0%,#0a1c34_55%,#050b14_100%)]" />
        <div className="absolute -top-40 -right-40 h-[750px] w-[750px] overflow-hidden rounded-full opacity-[0.07]">
          <img src="/img/IG PHOTOS/marine-inspection-026.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute -bottom-48 -left-48 h-[680px] w-[680px] overflow-hidden rounded-full opacity-[0.06]">
          <img src="/img/IG PHOTOS/marine-inspection-030.jpeg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute top-1/2 -right-24 -translate-y-1/2 h-[420px] w-[420px] overflow-hidden rounded-full opacity-[0.04]">
          <img src="/img/IG PHOTOS/marine-inspection-018.jpeg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_45%_at_50%_0%,rgba(27,93,191,0.18),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[radial-gradient(ellipse_60%_80%_at_15%_100%,rgba(194,24,58,0.06),transparent)]" />
      </div>
      <SiteHeader
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen((value) => !value)}
        currentPath={location.pathname}
        isScrolled={isScrolled}
      />

      <main className="relative w-full">
        <ErrorBoundary>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
            <Route path={ROUTES.CONTACT} element={<ContactPage />} />
          </Routes>
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  );
}

export default AppShell;
