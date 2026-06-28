import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function HeroBanner({
  eyebrow,
  title,
  description,
  image,
  staticImage = false,
  imageAlt,
  imagePosition = 'center 28%',
  primaryLink,
  secondaryLink,
  variant = 'default',
  animate = true,
}: {
  eyebrow: string;
  title: string[];
  description: string;
  image?: string;
  staticImage?: boolean;
  imageAlt?: string;
  imagePosition?: string;
  primaryLink?: { to: string; label: string };
  secondaryLink?: { to: string; label: string };
  variant?: 'default' | 'compact';
  animate?: boolean;
}) {
  const HeroContent = animate ? motion.div : 'div';

  return (
    <section className="relative isolate flex min-h-[520px] flex-col overflow-hidden sm:min-h-[580px] lg:min-h-[720px]">
      {image ? (
        <img
          src={image}
          alt={imageAlt ?? ''}
          className={`absolute inset-0 h-full w-full object-cover${staticImage ? '' : ' hero-img-animate'}`}
          style={{ objectPosition: imagePosition }}
          fetchPriority="high"
        />
      ) : (
        <div className="absolute inset-0 bg-brand-navy" />
      )}

      {/* GPS origin stamp — Panama City founding coordinates */}
      <div aria-hidden="true" className="absolute top-5 right-5 hidden lg:block text-right z-10">
        <p className="font-mono text-[9px] tracking-[0.22em] text-white/30 uppercase">
          08°58′N &nbsp; 79°32′W
        </p>
        <p className="font-mono text-[8px] tracking-[0.18em] text-white/18 mt-0.5 uppercase">
          Panama City — Est. 2006
        </p>
      </div>

      {/* light-sweep shimmer */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none hero-shimmer" />

      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.09),transparent_34%),linear-gradient(180deg,rgba(4,12,24,0.12)_0%,rgba(4,12,24,0.54)_38%,rgba(4,12,24,0.9)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/42 via-black/14 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-brand-steel/94 to-transparent"
        aria-hidden="true"
      />

      <HeroContent
        className={[
          'relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8',
          variant === 'compact'
            ? 'mt-0 pb-10 pt-20 sm:pb-12 sm:pt-24 lg:pb-14 lg:pt-28'
            : 'mt-auto pb-12 pt-20 sm:pb-20 sm:pt-24 lg:pb-24',
        ].join(' ')}
        {...(animate
          ? {
              initial: { opacity: 0, y: 28 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
            }
          : {})}
      >
        <div className={variant === 'compact' ? 'mb-4 flex items-center gap-3 lg:mb-5' : 'mb-6 flex items-center gap-3'}>
          <span className="h-px w-8 bg-brand-red" aria-hidden="true" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/72">
            {eyebrow}
          </p>
        </div>

        <h1
          className={[
            'max-w-4xl font-display italic font-normal leading-[0.98] text-white',
            variant === 'compact' ? 'text-3xl sm:text-5xl lg:text-[4.8rem]' : 'text-4xl sm:text-6xl lg:text-[5.6rem]',
          ].join(' ')}
        >
          {title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className={variant === 'compact' ? 'mt-4 max-w-2xl text-base leading-7 text-white/74 sm:text-lg' : 'mt-6 max-w-2xl text-base leading-7 text-white/74 sm:text-lg'}>
          {description}
        </p>

        {(primaryLink ?? secondaryLink) ? (
          <div className={variant === 'compact' ? 'mt-7 flex flex-wrap gap-3' : 'mt-9 flex flex-wrap gap-3'}>
            {primaryLink ? (
            <Link
              to={primaryLink.to}
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand-navy shadow-[0_18px_40px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-0.5 hover:bg-brand-red hover:text-white"
            >
              {primaryLink.label}
            </Link>
            ) : null}
            {secondaryLink ? (
            <Link
              to={secondaryLink.to}
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/14 px-7 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/22"
            >
              {secondaryLink.label}
            </Link>
            ) : null}
          </div>
        ) : null}
      </HeroContent>
    </section>
  );
}
