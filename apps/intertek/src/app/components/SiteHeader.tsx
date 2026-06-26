import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const navItems = [
  { path: ROUTES.HOME, label: 'Home' },
  { path: ROUTES.CODE_OF_PRACTICE, label: 'About' },
  { path: ROUTES.SERVICES, label: 'Services' },
  { path: ROUTES.CONTACT, label: 'Contact' },
] as const;

export function SiteHeader({
  mobileOpen,
  onToggleMobile,
  currentPath,
}: {
  mobileOpen: boolean;
  onToggleMobile: () => void;
  currentPath: string;
  isScrolled: boolean;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-4 py-0 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to={ROUTES.HOME} className="flex items-center gap-3 shrink-0 py-4">
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded p-0.5">
            <img src="/img/branding/intertek-group-mark.png" alt="Intertek Group" className="h-full w-full object-contain" />
          </div>
          <span className="text-[15px] font-bold tracking-tight text-brand-navy">Intertek Group</span>
        </Link>

        {/* Desktop nav — Maersk style: links with bottom border indicator */}
        <nav className="hidden h-full items-stretch gap-0 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = currentPath === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                aria-current={active ? 'page' : undefined}
                className={[
                  'relative flex items-center px-4 py-5 text-sm font-medium transition-colors',
                  'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:transition-colors',
                  active
                    ? 'text-brand-navy after:bg-brand-red'
                    : 'text-slate-500 hover:text-brand-navy after:bg-transparent hover:after:bg-slate-200',
                ].join(' ')}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to={ROUTES.CONTACT}
            className="rounded bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Request contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileOpen}
          onClick={onToggleMobile}
          className="inline-flex h-10 w-10 items-center justify-center rounded text-slate-600 hover:bg-slate-100 md:hidden"
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto max-w-[1440px] divide-y divide-slate-100">
            {navItems.map((item) => {
              const active = currentPath === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={active ? 'page' : undefined}
                  className={[
                    'block px-4 py-3.5 text-sm font-medium transition-colors',
                    active ? 'bg-slate-50 font-semibold text-brand-navy' : 'text-slate-600 hover:bg-slate-50',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="px-4 py-3">
              <Link
                to={ROUTES.CONTACT}
                className="block rounded bg-brand-blue px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Request contact
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
