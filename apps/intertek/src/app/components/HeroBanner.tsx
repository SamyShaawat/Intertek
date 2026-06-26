import { motion } from 'framer-motion';
import { Button } from '@heroui/react';
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
    <section className="relative isolate flex min-h-[580px] flex-col overflow-hidden lg:min-h-[700px]">
      {/* Background photo */}
      {image ? (
        <img
          src={image}
          alt={imageAlt ?? ''}
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
      ) : (
        <div className="absolute inset-0 bg-brand-navy" />
      )}

      {/* Layered gradient: dark at bottom for text legibility, lighter at top */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/50 to-black/10"
        aria-hidden="true"
      />
      {/* Subtle left-side vignette for editorial depth */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"
        aria-hidden="true"
      />

      {/* Content anchored to bottom */}
      <motion.div
        className="relative mt-auto mx-auto w-full max-w-[1440px] px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Eyebrow with accent line */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-brand-red" aria-hidden="true" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
            {eyebrow}
          </p>
        </div>

        {/* Title */}
        <h1 className="max-w-4xl font-display italic text-5xl font-normal leading-[1.02] text-white sm:text-6xl lg:text-[5.5rem]">
          {title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
          {description}
        </p>

        {/* CTAs */}
        {(primaryLink ?? secondaryLink) ? (
          <div className="mt-9 flex flex-wrap gap-3">
            {primaryLink ? (
              <Button
                as={Link as React.ElementType}
                {...{ to: primaryLink.to }}
                radius="sm"
                size="lg"
                disableRipple
                className="bg-brand-red px-7 font-semibold text-white shadow-lg shadow-black/20 hover:opacity-90"
              >
                {primaryLink.label}
              </Button>
            ) : null}
            {secondaryLink ? (
              <Button
                as={Link as React.ElementType}
                {...{ to: secondaryLink.to }}
                variant="bordered"
                radius="sm"
                size="lg"
                disableRipple
                className="border-white/30 bg-white/10 font-semibold text-white backdrop-blur-sm hover:bg-white/20"
              >
                {secondaryLink.label}
              </Button>
            ) : null}
          </div>
        ) : null}
      </motion.div>
    </section>
  );
}
