import { Component, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  override state = { error: null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  override render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center p-8 text-center">
          <div>
            <p className="text-lg font-semibold text-slate-800">Something went wrong.</p>
            <p className="mt-1 text-sm text-slate-500">Please refresh the page.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
import { Footer } from './components/Footer';
import { SiteHeader } from './components/SiteHeader';
import { ROUTES } from './constants/routes';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';

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
  }, [location.pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f1f3f6] text-slate-900 antialiased">
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
            <Route path={ROUTES.CODE_OF_PRACTICE} element={<AboutPage />} />
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
