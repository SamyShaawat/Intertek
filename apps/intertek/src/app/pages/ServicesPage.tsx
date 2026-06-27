import { useSEO } from '../hooks/useSEO';
import { ROUTES } from '../constants/routes';
import { HeroBanner } from '../components/HeroBanner';
import { PageWrapper } from '../components/PageWrapper';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionHeading } from '../components/SectionHeading';
import { SectionKicker } from '../components/SectionKicker';
import { ServiceCard } from '../components/ServiceCard';
import { serviceHighlights, services, servicesImages } from './data';

const AI_STRIP = [
  '/img/generated/ai-marine-graphic-03.png',
  '/img/generated/ai-marine-graphic-07.png',
  '/img/generated/ai-marine-graphic-11.png',
  '/img/generated/ai-marine-graphic-15.png',
  '/img/generated/ai-marine-graphic-19.png',
  '/img/generated/ai-marine-graphic-23.png',
  '/img/generated/ai-marine-graphic-27.png',
  '/img/generated/ai-marine-graphic-31.png',
  '/img/generated/ai-marine-graphic-35.png',
  '/img/generated/ai-marine-graphic-39.png',
  '/img/generated/ai-marine-graphic-43.png',
];

const PROCESS = [
  {
    step: '01',
    title: 'Submit Request',
    body: 'Contact our office with vessel details, port of call, and required service scope.',
  },
  {
    step: '02',
    title: 'Specialist Assigned',
    body: 'A qualified surveyor or legal specialist is matched to your case within hours.',
  },
  {
    step: '03',
    title: 'On-Site Attendance',
    body: 'We attend the vessel at port, anchorage, or drydock — anywhere in our 11-country network.',
  },
  {
    step: '04',
    title: 'Report Delivered',
    body: 'Certified documentation, survey reports, or compliance certificates issued within agreed timelines.',
  },
];

export function ServicesPage() {
  useSEO({
    title: 'Marine Services',
    description:
      'Intertek Group offers ship registration, consultancy, statutory services, surveys, and inspections with a broad global operating footprint.',
    keywords: 'marine services, ship registration, inspections, surveys, consultancy, statutory services',
  });

  return (
    <div>
      <HeroBanner
        eyebrow="Services"
        title={['Registration,', 'surveys, and', 'compliance services']}
        description="From ship registration in Panama to third-party surveys and ISM compliance across the Middle East — every service delivered by specialists with flag state and IACS backgrounds."
        image="/img/IG PHOTOS/marine-inspection-030.jpeg"
        imageAlt="Inspection work on vessel deck"
        primaryLink={{ to: ROUTES.CONTACT, label: 'Request contact' }}
        secondaryLink={{ to: ROUTES.ABOUT, label: 'About Intertek' }}
      />

      <PageWrapper>
        {/* Full-width service grid */}
        <ScrollReveal>
          <section className="space-y-6">
            <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Service matrix"
                title={`${services.length} specialist services.`}
                description="Every service delivered by former flag state inspectors, IACS surveyors, maritime attorneys, and naval architects."
              />
              <span
                aria-hidden="true"
                className="hidden shrink-0 select-none font-display italic text-[6rem] leading-none text-white/[0.07] lg:block"
              >
                {services.length}
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Photo + scope highlights */}
        <ScrollReveal>
          <section className="grid gap-5 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2.25rem] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <img
                src="/img/IG PHOTOS/marine-inspection-011.jpg"
                alt="Marine survey in progress"
                className="h-full min-h-[360px] w-full object-cover object-[center_20%]"
                loading="lazy"
              />
            </div>
            <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-8">
              <SectionKicker text="Service scope" />
              <div className="mt-5 space-y-3">
                {serviceHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 transition-colors hover:bg-white/[0.09]"
                  >
                    <span className="inline-block h-px w-5 shrink-0 bg-red-400" aria-hidden="true" />
                    <p className="text-sm font-medium text-white/85">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 4-step process */}
        <ScrollReveal>
          <section className="relative overflow-hidden rounded-[2.25rem] bg-brand-navy px-6 py-12 sm:px-10 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(27,93,191,0.18),transparent_44%),radial-gradient(circle_at_bottom_right,rgba(194,24,58,0.10),transparent_40%)]"
            />
            <div className="relative">
              <SectionKicker text="How we work" light />
              <div className="mt-10 grid gap-0 divide-y divide-white/8 lg:grid-cols-4 lg:divide-y-0 lg:divide-x">
                {PROCESS.map(({ step, title, body }) => (
                  <div key={step} className="flex gap-5 py-8 lg:flex-col lg:px-8 lg:py-0 first:lg:pl-0 last:lg:pr-0">
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 select-none font-display italic text-4xl leading-none text-red-400/50"
                    >
                      {step}
                    </span>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-wider text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/55">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Staggered photo grid */}
        <ScrollReveal delay={0.05}>
          <section className="space-y-5">
            <SectionHeading
              eyebrow="In the field"
              title="Real inspections. Real ships."
              description="Our surveyors operate across 11 countries covering deepsea shipping, offshore vessels, government fleets, and pleasure yachts."
            />
            <div className="grid min-h-[520px] grid-cols-4 grid-rows-[1.2fr_1fr] gap-3">
              {([
                { idx: 0, cols: 'col-span-2' },
                { idx: 1, cols: 'col-span-1' },
                { idx: 2, cols: 'col-span-1' },
                { idx: 3, cols: 'col-span-1' },
                { idx: 4, cols: 'col-span-2' },
                { idx: 5, cols: 'col-span-1' },
              ] as { idx: number; cols: string }[]).map(({ idx, cols }) => {
                const { src, alt } = servicesImages[idx];
                return (
                  <div key={src} className={`${cols} group relative overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)]`}>
                    <img src={src} alt={alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                  </div>
                );
              })}
            </div>
          </section>
        </ScrollReveal>

        {/* AI marine graphics filmstrip */}
        <ScrollReveal>
          <section aria-label="Marine technical illustrations">
            <div className="overflow-hidden rounded-[2.25rem]">
              <div className="filmstrip-track-r flex w-max gap-3 py-1">
                {[...AI_STRIP, ...AI_STRIP].map((src, i) => (
                  <div key={i} className="relative h-64 w-80 shrink-0 overflow-hidden rounded-3xl border border-white/10">
                    <img src={src} alt="" aria-hidden="true" className="h-full w-full object-cover" loading="lazy" />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      </PageWrapper>
    </div>
  );
}
