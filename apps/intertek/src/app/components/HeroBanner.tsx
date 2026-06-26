import { Link } from 'react-router-dom';

export function HeroBanner({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
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
    <section className="relative isolate flex min-h-[560px] flex-col overflow-hidden lg:min-h-[680px]">
      {/* Background */}
      {image ? (
        <img
          src={image}
          alt={imageAlt ?? ''}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
      ) : (
        <div className="absolute inset-0 bg-brand-navy" />
      )}

      {/* Gradient overlay — heavier at bottom so content is legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/15" aria-hidden="true" />

      {/* Content — anchored to bottom of hero */}
      <div className="relative mt-auto mx-auto w-full max-w-[1440px] px-4 pb-14 sm:px-6 sm:pb-18 lg:px-8 lg:pb-24">
        <p className="mb-5 w-fit rounded-full border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/70">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-display italic text-5xl font-normal leading-none text-white sm:text-6xl lg:text-[5.5rem]">
          {title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">{description}</p>

        {(primaryLink ?? secondaryLink) ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryLink ? (
              <Link
                to={primaryLink.to}
                className="rounded-lg bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
              >
                {primaryLink.label}
              </Link>
            ) : null}
            {secondaryLink ? (
              <Link
                to={secondaryLink.to}
                className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                {secondaryLink.label}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
