import { useSEO } from '../hooks/useSEO';
import { ROUTES } from '../constants/routes';
import { HeroBanner } from '../components/HeroBanner';
import { PageWrapper } from '../components/PageWrapper';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionHeading } from '../components/SectionHeading';
import { SectionKicker } from '../components/SectionKicker';
import { SubsidiaryCard } from '../components/SubsidiaryCard';
import { markets, subsidiaries } from './data';

const TIMELINE = [
  {
    year: '2006',
    event: 'Founded in Panama City by a board of former flag state inspectors, IACS surveyors, maritime attorneys, and naval architects.',
  },
  {
    year: '2011',
    event: 'Expanded survey operations into the Middle East, Gulf, and Eastern Mediterranean.',
  },
  {
    year: '2018',
    event: 'Launched Intertek Maritime Bureau, adding class and naval architecture service lines.',
  },
  {
    year: '2022',
    event: 'Opened North America office in Mississauga, Ontario, extending coverage across the Atlantic and Caribbean.',
  },
];

export function AboutPage() {
  useSEO({
    title: 'About Intertek Group',
    description:
      'Intertek Group was founded in Panama in 2006 and combines maritime law, technical survey work, and compliance services across multiple jurisdictions.',
    keywords: 'Intertek Group, Panama, maritime law, marine surveyors, class, statutory, naval architecture',
  });

  return (
    <div>
      <HeroBanner
        eyebrow="About"
        title={['Founding story,', 'technical depth,', 'and subsidiary brands']}
        description="Founded in Panama in 2006 by a distinguished board of former flag state inspectors, IACS marine surveyors, maritime attorneys, and naval architects."
        image="/img/IG PHOTOS/marine-inspection-018.jpeg"
        imageAlt="Marine team working on deck"
        primaryLink={{ to: ROUTES.SERVICES, label: 'View services' }}
        secondaryLink={{ to: ROUTES.CONTACT, label: 'Contact office' }}
      />

      <PageWrapper>
        <ScrollReveal>
          <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left — text card */}
            <div className="flex flex-col justify-between rounded-[2.25rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-8">
              <div>
                <SectionKicker text="Who we are" />

                <div className="relative mt-5">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-6 -left-2 select-none font-display text-[9rem] italic leading-none text-white/[0.06]"
                  >
                    "
                  </span>
                  <div className="relative space-y-4 text-sm leading-7 text-white/72">
                    <p>
                      Founded in Panama in 2006 by a distinguished board of marine specialists, Intertek Group merges
                      legal, technical, and operational expertise into one group structure.
                    </p>
                    <p>
                      The board brings together former senior flag state inspectors, former IACS marine surveyors,
                      senior maritime attorneys, and senior naval architects.
                    </p>
                    <p>
                      We do not just meet industry standards. We understand how they are made, enforced, and navigated.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    'Former Senior Flag State Inspector',
                    'Former IACS Marine Surveyor',
                    'Senior Maritime Attorney',
                    'Senior Naval Architects',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                {['Panama Flag State', 'IACS Methodology', 'ISM Code', 'MLC 2006', 'SOLAS Compliance', 'ISPS Framework'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — creative 3-image collage */}
            <div className="grid min-h-[480px] grid-cols-[1.55fr_1fr] grid-rows-2 gap-3">
              {/* Main tall image — spans both rows */}
              <div className="row-span-2 overflow-hidden rounded-[2.25rem] shadow-[0_24px_64px_rgba(0,0,0,0.45)]">
                <img
                  src="/img/IG PHOTOS/marine-inspection-021.jpeg"
                  alt="Marine inspection team at work"
                  className="h-full w-full object-cover object-[center_30%]"
                  loading="lazy"
                />
              </div>
              {/* Top-right — profile cover */}
              <div className="overflow-hidden rounded-[2.25rem] shadow-[0_24px_64px_rgba(0,0,0,0.45)]">
                <img
                  src="/img/branding/intertek-group-professional-cover.png"
                  alt="Intertek Group professional cover"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              {/* Bottom-right — field photo */}
              <div className="overflow-hidden rounded-[2.25rem] shadow-[0_24px_64px_rgba(0,0,0,0.45)]">
                <img
                  src="/img/IG PHOTOS/marine-inspection-004.jpg"
                  alt="Marine field inspection"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal>
          <section className="relative overflow-hidden rounded-[2.25rem] bg-brand-navy px-6 py-12 sm:px-10 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(194,24,58,0.12),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(27,93,191,0.15),transparent_40%)]"
            />
            <div className="relative">
              <SectionKicker text="Our history" light />
              <div className="relative mt-10 grid gap-8 lg:grid-cols-4">
                <div
                  aria-hidden="true"
                  className="absolute top-[1.85rem] left-8 right-8 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block"
                />
                {TIMELINE.map(({ year, event }) => (
                  <div key={year} className="relative">
                    <div className="mb-4 flex items-center gap-3 lg:block">
                      <div
                        aria-hidden="true"
                        className="relative z-10 h-4 w-4 shrink-0 rounded-full border-2 border-brand-red bg-brand-navy lg:mb-5"
                      />
                      <p className="font-display italic text-4xl text-red-400 sm:text-5xl">{year}</p>
                    </div>
                    <p className="text-sm leading-6 text-white/55">{event}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <section className="space-y-5">
            <SectionHeading
              eyebrow="Subsidiaries"
              title="Distinct brands, shared standards"
              description="Legal Marine Tek, Intertek Maritime Bureau, and Intertek Maritime Middle East operate under the same quality mandate and leadership team."
            />
            <div className="grid gap-4 lg:grid-cols-3">
              {subsidiaries.map((item) => (
                <SubsidiaryCard key={item.name} subsidiary={item} />
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Market section — enhanced with photo grid */}
        <ScrollReveal>
          <section className="grid gap-5 rounded-[2.25rem] border border-brand-navy/10 bg-brand-navy p-6 text-white shadow-[0_20px_70px_rgba(10,28,52,0.16)] lg:grid-cols-[1fr_1fr] sm:p-8">
            <div className="space-y-4">
              <SectionKicker text="Our market" light />
              <h2 className="text-3xl font-black tracking-tight">Fleet and customer focus</h2>
              <p className="max-w-xl text-sm leading-7 text-white/75">
                Round-the-clock customer care for every vessel category — from global fleet operators to government port authorities.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {markets.map((market) => (
                  <div
                    key={market}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white"
                  >
                    {market}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-brand-red/30 bg-brand-red/10 px-4 py-4 text-sm text-white/80">
                <span className="font-semibold text-white">Surveyor coverage: </span>
                Panama · UAE · Turkey · Italy · Egypt · Syria · Belgium · Algeria · Lebanon · KSA · Canada
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { src: '/img/IG PHOTOS/marine-inspection-006.jpeg', label: 'Deepsea tankers' },
                { src: '/img/IG PHOTOS/marine-inspection-014.jpeg', label: 'Offshore vessels' },
                { src: '/img/IG PHOTOS/marine-inspection-025.jpeg', label: 'Port operations' },
                { src: '/img/IG PHOTOS/marine-inspection-028.jpg', label: 'Survey at anchor' },
              ].map(({ src, label }) => (
                <div key={src} className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={src}
                    alt={label}
                    className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 to-transparent" />
                  <p className="absolute bottom-2 left-3 text-[10px] font-semibold uppercase tracking-widest text-white/75">{label}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </PageWrapper>
    </div>
  );
}
