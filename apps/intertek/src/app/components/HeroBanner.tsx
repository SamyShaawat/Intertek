import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function HeroBanner({
  eyebrow,
  title,
  description,
  image,
  staticImage = false,
  imageAlt,
  primaryLink,
  secondaryLink,
}: {
  eyebrow: string;
  title: string[];
  description: string;
  image?: string;
  staticImage?: boolean;
  imageAlt?: string;
  primaryLink?: { to: string; label: string };
  secondaryLink?: { to: string; label: string };
}) {
  return (
    <section className="relative isolate flex min-h-[580px] flex-col overflow-hidden lg:min-h-[720px]">
      {image ? (
        <img
          src={image}
          alt={imageAlt ?? ''}
          className={`absolute inset-0 h-full w-full object-cover object-[center_28%]${staticImage ? '' : ' hero-img-animate'}`}
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
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_34%),linear-gradient(180deg,rgba(4,12,24,0.08)_0%,rgba(4,12,24,0.48)_38%,rgba(4,12,24,0.88)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-brand-steel/90 to-transparent"
        aria-hidden="true"
      />

      <motion.div
        className="relative mt-auto mx-auto w-full max-w-[1440px] px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-brand-red" aria-hidden="true" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/72">
            {eyebrow}
          </p>
        </div>

        <h1 className="max-w-4xl font-display italic text-5xl font-normal leading-[0.98] text-white sm:text-6xl lg:text-[5.6rem]">
          {title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/74 sm:text-lg">
          {description}
        </p>

        {(primaryLink ?? secondaryLink) ? (
          <div className="mt-9 flex flex-wrap gap-3">
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
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/18"
              >
                {secondaryLink.label}
              </Link>
            ) : null}
          </div>
        ) : null}
      </motion.div>
    </section>
  );
}
