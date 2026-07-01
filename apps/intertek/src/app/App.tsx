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
        <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,rgba(79,127,166,0.12),transparent_30%),linear-gradient(180deg,#eef2f5,#dfe7ee)] p-8 text-center">
          <div className="max-w-sm rounded-[2rem] border border-white/80 bg-white/92 p-8 shadow-[0_24px_80px_rgba(10,28,52,0.12)] backdrop-blur-xl">
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

function App() {
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
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#0c1320_0%,#102235_55%,#0a131d_100%)]" />
        <div className="bg-live-sheen absolute inset-0 opacity-70" />
        <div className="bg-live-orb-a absolute -top-28 -right-28 hidden h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(79,127,166,0.34)_0%,rgba(79,127,166,0.12)_40%,transparent_72%)] blur-3xl sm:block lg:-top-40 lg:-right-40 lg:h-[750px] lg:w-[750px]" />
        <div className="bg-live-orb-b absolute -bottom-36 -left-36 hidden h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(194,24,58,0.24)_0%,rgba(194,24,58,0.08)_42%,transparent_72%)] blur-3xl sm:block lg:-bottom-48 lg:-left-48 lg:h-[680px] lg:w-[680px]" />
        <div className="bg-live-orb-c absolute top-1/2 -right-16 hidden h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.03)_48%,transparent_74%)] blur-3xl md:block lg:-right-24 lg:h-[420px] lg:w-[420px]" />
        <div className="absolute -top-28 -right-28 hidden h-[520px] w-[520px] overflow-hidden rounded-full opacity-[0.10] sm:block lg:-top-40 lg:-right-40 lg:h-[750px] lg:w-[750px]">
          <img src="/img/IG PHOTOS/marine-inspection-026.jpg" alt="" className="hero-img-animate h-full w-full object-cover" />
        </div>
        <div className="absolute -bottom-36 -left-36 hidden h-[480px] w-[480px] overflow-hidden rounded-full opacity-[0.09] sm:block lg:-bottom-48 lg:-left-48 lg:h-[680px] lg:w-[680px]">
          <img src="/img/IG PHOTOS/marine-inspection-030.jpeg" alt="" className="hero-img-animate h-full w-full object-cover" />
        </div>
        <div className="absolute top-1/2 -right-16 hidden h-[320px] w-[320px] -translate-y-1/2 overflow-hidden rounded-full opacity-[0.07] md:block lg:-right-24 lg:h-[420px] lg:w-[420px]">
          <img src="/img/IG PHOTOS/marine-inspection-018.jpeg" alt="" className="hero-img-animate h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_45%_at_50%_0%,rgba(79,127,166,0.22),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[radial-gradient(ellipse_60%_80%_at_15%_100%,rgba(192,137,98,0.08),transparent)]" />
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

export default App;
