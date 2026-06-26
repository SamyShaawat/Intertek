import { Separator } from '@heroui/react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const footerLinks = [
  { to: ROUTES.HOME, label: 'Home' },
  { to: ROUTES.ABOUT, label: 'About' },
  { to: ROUTES.SERVICES, label: 'Services' },
  { to: ROUTES.CONTACT, label: 'Contact' },
] as const;

const footerStats = [
  { label: 'Countries', value: '11+' },
  { label: 'Years Active', value: '19+' },
  { label: 'Availability', value: '24/7' },
] as const;

const footerOffices = [
  { city: 'Panama City', detail: 'Calle 56 Marbella', flag: '🇵🇦' },
  { city: 'Mississauga', detail: '2386 Poplar Cres, Ontario', flag: '🇨🇦' },
  { city: 'Dubai', detail: 'Mamzar, Office 117', flag: '🇦🇪' },
] as const;

const certs = ['ISM', 'ISPS', 'ISO 9001', 'Panama Registry'] as const;

const MailIcon = () => (
  <svg className="h-3.5 w-3.5 shrink-0 text-brand-red" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-brand-steel text-white">
      {/* Brand-red accent strip */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-brand-red to-transparent" />

      <div className="mx-auto w-full max-w-[1440px] px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 p-2">
                <img
                  src="/img/branding/intertek-group-mark.png"
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">Intertek Group</p>
                <p className="text-base font-extrabold leading-tight text-white">Marine Specialists</p>
              </div>
            </div>

            <p className="max-w-xs text-sm leading-7 text-white/60">
              Maritime registration, survey, consultancy, and compliance — trusted across 11 countries since 2006.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-2">
              {footerStats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center rounded-full border border-white/15 bg-white/8 px-5 py-2.5"
                >
                  <span className="text-lg font-black leading-none text-white">{s.value}</span>
                  <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-widest text-white/45">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">Navigation</p>
            <nav aria-label="Footer navigation" className="space-y-0.5">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center rounded-full px-4 py-2.5 text-sm font-medium text-white/70 transition-all hover:bg-white/8 hover:pl-6 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">Contact</p>
            <div className="space-y-3">
              <a
                href="mailto:legal@intertekgroup.org"
                className="flex items-center gap-2.5 rounded-full border border-white/12 bg-white/6 px-4 py-2.5 text-sm font-medium text-white/80 transition-all hover:border-brand-red/40 hover:bg-brand-red/10 hover:text-white"
              >
                <MailIcon />
                legal@intertekgroup.org
              </a>
              <a
                href="mailto:aimy@intertekgroup.org"
                className="flex items-center gap-2.5 rounded-full border border-white/12 bg-white/6 px-4 py-2.5 text-sm font-medium text-white/80 transition-all hover:border-brand-red/40 hover:bg-brand-red/10 hover:text-white"
              >
                <MailIcon />
                aimy@intertekgroup.org
              </a>
            </div>
          </div>

          {/* Offices */}
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">Offices</p>
            <div className="space-y-4">
              {footerOffices.map((o) => (
                <div key={o.city} className="flex items-start gap-3">
                  <span className="mt-0.5 text-base leading-none">{o.flag}</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{o.city}</p>
                    <p className="mt-0.5 text-xs leading-5 text-white/50">{o.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/8" />

        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-white/35">© {new Date().getFullYear()} Intertek Group. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {certs.map((cert) => (
              <span
                key={cert}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/40"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
