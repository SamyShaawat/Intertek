import { Separator } from '@heroui/react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const footerLinks = [
  { to: ROUTES.HOME, label: 'Home' },
  { to: ROUTES.CODE_OF_PRACTICE, label: 'About' },
  { to: ROUTES.SERVICES, label: 'Services' },
  { to: ROUTES.CONTACT, label: 'Contact' },
] as const;

const footerStats = [
  { label: 'Countries', value: '11' },
  { label: 'Entities', value: '3' },
  { label: 'Response', value: '24/7' },
] as const;

const footerOffices = [
  { city: 'Panama City', detail: 'Calle 56 Marbella' },
  { city: 'Mississauga', detail: '2386 Poplar Cres, Ontario' },
  { city: 'Dubai', detail: 'Mamzar, Office 117' },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-brand-steel text-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-white/15 bg-white/8 p-1.5">
                <img src="/img/branding/intertek-group-mark.png" alt="" aria-hidden="true" className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">Intertek Group</p>
                <p className="text-sm font-bold text-white">Marine Specialists</p>
              </div>
            </div>
            <p className="text-sm leading-7 text-white/60">
              Maritime registration, survey, consultancy, and compliance services across 11 countries.
            </p>
            <div className="grid grid-cols-3 gap-2">
              {footerStats.map((s) => (
                <div key={s.label} className="rounded-lg border border-white/10 bg-white/5 px-2 py-3 text-center">
                  <p className="text-base font-black text-white">{s.value}</p>
                  <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-white/45">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">Navigation</p>
            <nav aria-label="Footer navigation" className="space-y-1">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/6 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">Contact</p>
            <div className="space-y-3">
              <a href="mailto:legal@intertekgroup.org" className="block text-sm font-medium text-white/70 transition-colors hover:text-white">
                legal@intertekgroup.org
              </a>
              <a href="mailto:aimy@intertekgroup.org" className="block text-sm font-medium text-white/55 transition-colors hover:text-white">
                aimy@intertekgroup.org
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">Offices</p>
            <div className="space-y-4">
              {footerOffices.map((o) => (
                <div key={o.city}>
                  <p className="text-sm font-semibold text-white">{o.city}</p>
                  <p className="mt-0.5 text-xs leading-5 text-white/50">{o.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/8" />

        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-xs text-white/35">© {new Date().getFullYear()} Intertek Group. All rights reserved.</p>
          <p className="text-xs text-white/35">World's Premier Marine Specialist · Since 2006</p>
        </div>
      </div>
    </footer>
  );
}
