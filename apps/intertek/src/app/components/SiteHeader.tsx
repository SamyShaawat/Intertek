import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const navItems = [
  { path: ROUTES.HOME, label: 'Home' },
  { path: ROUTES.ABOUT, label: 'About' },
  { path: ROUTES.SERVICES, label: 'Services' },
  { path: ROUTES.CONTACT, label: 'Contact' },
] as const;

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  ) : (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function SiteHeader({
  mobileOpen,
  onToggleMobile,
  currentPath,
  isScrolled,
}: {
  mobileOpen: boolean;
  onToggleMobile: () => void;
  currentPath: string;
  isScrolled: boolean;
}) {
  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-white/60 bg-white/82 shadow-[0_10px_40px_rgba(10,28,52,0.08)] backdrop-blur-xl'
          : 'border-transparent bg-transparent shadow-none',
      ].join(' ')}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center">
          <Link to={ROUTES.HOME} className="flex shrink-0 items-center gap-3">
            <div
              className={[
                'flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[1.1rem] border p-2 transition-all duration-300',
                isScrolled
                  ? 'border-brand-navy/10 bg-white shadow-[0_10px_30px_rgba(10,28,52,0.08)]'
                  : 'border-white/25 bg-white/12 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl',
              ].join(' ')}
            >
              <img
                src="/img/branding/intertek-group-mark.png"
                alt="Intertek Group"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <p
                className={[
                  'text-[10px] font-semibold uppercase tracking-[0.28em] leading-none transition-colors duration-300',
                  isScrolled ? 'text-slate-500' : 'text-white/65',
                ].join(' ')}
              >
                Intertek Group
              </p>
              <p
                className={[
                  'text-[1.02rem] font-extrabold tracking-tight leading-tight transition-colors duration-300',
                  isScrolled ? 'text-brand-navy' : 'text-white',
                ].join(' ')}
              >
                Marine Specialists
              </p>
            </div>
          </Link>
        </div>

        <nav className="hidden flex-1 justify-center md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = currentPath === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                aria-current={active ? 'page' : undefined}
                className={[
                  'relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300',
                  isScrolled
                    ? active
                      ? 'bg-brand-navy/5 text-brand-navy ring-1 ring-brand-navy/10'
                      : 'text-slate-500 hover:bg-brand-navy/5 hover:text-brand-navy'
                    : active
                      ? 'bg-white/12 text-white ring-1 ring-white/20 backdrop-blur-xl'
                      : 'text-white/75 hover:bg-white/10 hover:text-white',
                ].join(' ')}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3">
          <div className="hidden md:flex">
            <Link
              to={ROUTES.CONTACT}
              className={[
                'inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300',
                isScrolled
                  ? 'bg-brand-navy text-white shadow-[0_10px_30px_rgba(10,28,52,0.18)] hover:-translate-y-0.5 hover:bg-brand-blue'
                  : 'border border-white/30 bg-white/12 text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl hover:bg-white/20',
              ].join(' ')}
            >
              Request contact
            </Link>
          </div>

          <button
            type="button"
            className={[
              'inline-flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 md:hidden',
              isScrolled ? 'text-slate-700 hover:bg-brand-navy/5' : 'text-white hover:bg-white/10',
            ].join(' ')}
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
            aria-controls="site-header-mobile-menu"
            onClick={onToggleMobile}
          >
            <span className="sr-only">{mobileOpen ? 'Close navigation' : 'Open navigation'}</span>
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="site-header-mobile-menu"
          className="border-t border-white/10 bg-brand-navy/96 backdrop-blur-xl md:hidden"
        >
          <div className="mx-auto max-w-[1440px] px-4 py-3 sm:px-6 lg:px-8">
            {navItems.map((item) => {
              const active = currentPath === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={active ? 'page' : undefined}
                  onClick={onToggleMobile}
                  className={[
                    'block rounded-2xl px-4 py-3 text-sm font-semibold transition-colors',
                    active ? 'bg-white/10 text-white' : 'text-white/75 hover:bg-white/8 hover:text-white',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to={ROUTES.CONTACT}
              onClick={onToggleMobile}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
            >
              Request contact
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
