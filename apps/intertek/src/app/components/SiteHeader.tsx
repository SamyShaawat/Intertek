import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const navItems = [
  { path: ROUTES.HOME, label: 'Home' },
  { path: ROUTES.ABOUT, label: 'About' },
  { path: ROUTES.SERVICES, label: 'Services' },
  { path: ROUTES.CONTACT, label: 'Contact' },
] as const;

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
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/97 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-transparent border-transparent shadow-none',
      ].join(' ')}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center">
          <Link to={ROUTES.HOME} className="flex items-center gap-3 shrink-0">
            <div
              className={[
                'flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border p-1.5 transition-colors duration-300',
                isScrolled ? 'border-brand-navy/15 bg-brand-navy/5' : 'border-white/25 bg-white/15',
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
                  'text-[10px] font-semibold uppercase tracking-[0.25em] leading-none transition-colors duration-300',
                  isScrolled ? 'text-slate-400' : 'text-white/60',
                ].join(' ')}
              >
                Intertek Group
              </p>
              <p
                className={[
                  'text-base font-extrabold tracking-tight leading-tight transition-colors duration-300',
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
                  'relative flex items-center px-4 py-5 text-sm font-medium transition-colors duration-300',
                  'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:transition-colors after:duration-300',
                  isScrolled
                    ? active
                      ? 'text-brand-navy after:bg-brand-red'
                      : 'text-slate-500 hover:text-brand-navy after:bg-transparent hover:after:bg-slate-200'
                    : active
                      ? 'text-white after:bg-white'
                      : 'text-white/70 hover:text-white after:bg-transparent hover:after:bg-white/40',
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
                  ? 'bg-brand-blue text-white hover:opacity-90'
                  : 'border border-white/30 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25',
              ].join(' ')}
            >
              Request contact
            </Link>
          </div>

          <button
            type="button"
            className={[
              'h-10 w-10 rounded-full transition-colors duration-300 md:hidden',
              isScrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white hover:bg-white/15',
            ].join(' ')}
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
            aria-controls="site-header-mobile-menu"
            onClick={onToggleMobile}
          >
            <span className="sr-only">{mobileOpen ? 'Close navigation' : 'Open navigation'}</span>
            <span aria-hidden className="text-lg leading-none">
              {mobileOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="site-header-mobile-menu"
          className="border-t border-white/10 bg-[#0b1f3b]/97 backdrop-blur-md md:hidden"
        >
          <div className="mx-auto max-w-[1440px] divide-y divide-white/10 px-4 py-2 sm:px-6 lg:px-8">
            {navItems.map((item) => {
              const active = currentPath === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={active ? 'page' : undefined}
                  onClick={onToggleMobile}
                  className={[
                    'block px-2 py-3.5 text-sm font-medium transition-colors',
                    active ? 'font-semibold text-white' : 'text-white/70 hover:text-white',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to={ROUTES.CONTACT}
              onClick={onToggleMobile}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-brand-blue px-6 py-2.5 text-sm font-semibold text-white"
            >
              Request contact
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
