import { Chip } from '@heroui/react';
import { Link } from 'react-router-dom';

export function HeroBanner({
  eyebrow,
  title,
  description,
  primaryLink,
  secondaryLink,
}: {
  eyebrow: string;
  title: string[];
  description: string;
  image?: string;
  imageAlt?: string;
  primaryLink?: { to: string; label: string };
  secondaryLink?: { to: string; label: string };
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-brand-blue/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-brand-red/10 blur-[100px]" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <Chip size="sm" variant="bordered" className="mb-6 border-white/25 text-white/70">
          {eyebrow}
        </Chip>
        <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
          {title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{description}</p>

        {(primaryLink ?? secondaryLink) ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryLink ? (
              <Link to={primaryLink.to} className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm transition-opacity hover:opacity-90">
                {primaryLink.label}
              </Link>
            ) : null}
            {secondaryLink ? (
              <Link to={secondaryLink.to} className="rounded-lg border border-white/25 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15">
                {secondaryLink.label}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
