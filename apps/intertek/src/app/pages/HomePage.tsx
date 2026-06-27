import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { useSEO } from '../hooks/useSEO';
import { HeroBanner } from '../components/HeroBanner';
import { PageWrapper } from '../components/PageWrapper';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionHeading } from '../components/SectionHeading';
import { SectionKicker } from '../components/SectionKicker';
import { InspectionFilmstrip } from '../components/InspectionFilmstrip';
import { ServicePill } from '../components/ServicePill';
import { SubsidiaryTile } from '../components/SubsidiaryTile';
import { heroMetrics, homeImages, services, subsidiaries } from './data';


export function HomePage() {
  useSEO({
    title: "World's Premier Marine Specialist",
    description:
      'Intertek Group delivers maritime registration, surveys, statutory support, and naval architecture through specialized entities across 11 countries.',
    keywords: 'marine specialist, ship registration, marine surveys, ISM ISPS, naval architecture, Panama',
  });

  return (
    <div>
      <HeroBanner
        eyebrow="Intertek Group"
        title={["World's Premier", 'Marine Specialist']}
        description="From Panama to the Middle East, Intertek Group combines ship registration, crew endorsements, marine surveys, and technical consultancy in one coordinated operating model."
        image="/img/IG PHOTOS/marine-inspection-026.jpg"
        staticImage
        imageAlt="Marine inspection and vessel branding scene"
        primaryLink={{ to: ROUTES.SERVICES, label: 'Explore services' }}
        secondaryLink={{ to: ROUTES.CONTACT, label: 'Contact team' }}
      />

      <InspectionFilmstrip />

      {/* Metrics band */}
      <section className="relative overflow-hidden bg-brand-navy" aria-label="Key figures">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,93,191,0.22),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(194,24,58,0.14),transparent_32%)]"
        />
        <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {heroMetrics.map((metric, i) => (
              <div
                key={metric.label}
                className={[
                  'group relative py-12 text-center',
                  i % 2 !== 0 ? 'border-l border-white/8' : '',
                  i < 2 ? 'border-b border-white/8 lg:border-b-0' : '',
                  i !== 0 && i % 2 === 0 ? 'lg:border-l lg:border-white/8' : '',
                ].join(' ')}
              >
                <p className="font-display text-5xl italic font-normal leading-none text-white sm:text-6xl lg:text-7xl">
                  {metric.value}
                </p>
                <div
                  aria-hidden="true"
                  className="mx-auto mt-4 h-px w-8 bg-brand-red transition-all duration-500 group-hover:w-14"
                />
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/50">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <PageWrapper>
        <ScrollReveal>
          <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8">
              <SectionKicker text="What we do" />
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {services.slice(0, 6).map((service) => (
                  <ServicePill key={service.title} title={service.title} category={service.category} />
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2.25rem] border border-brand-navy/10 bg-brand-navy shadow-[0_20px_70px_rgba(10,28,52,0.16)]">
              <div className="grid h-full gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-5 p-6 text-white sm:p-8">
                  <SectionKicker text="Our approach" light />
                  <h2 className="max-w-md text-3xl font-black leading-tight tracking-tight">
                    One coordinated model. Three specialized entities.
                  </h2>
                  <p className="max-w-md text-sm leading-7 text-white/78">
                    From registration in Panama to third-party surveys in the Gulf — every service runs under the same oversight standard, with the same team accountability.
                  </p>
                  <Link
                    to={ROUTES.ABOUT}
                    className="inline-flex w-fit rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-navy shadow-[0_12px_30px_rgba(0,0,0,0.14)] transition-all hover:-translate-y-0.5 hover:bg-brand-red hover:text-white"
                  >
                    See company profile
                  </Link>
                </div>
                <img
                  src="/img/IG PHOTOS/marine-inspection-015.jpg"
                  alt="Surveyors conducting vessel inspection"
                  className="h-64 w-full object-cover object-[center_32%] lg:h-full"
                />
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Editorial full-bleed pull quote */}
        <ScrollReveal>
          <section className="relative min-h-[480px] overflow-hidden rounded-[2.25rem]">
            <img
              src="/img/IG PHOTOS/marine-inspection-020.jpeg"
              alt="Vessel at sea during inspection"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,11,20,0.88)_0%,rgba(5,11,20,0.6)_55%,rgba(5,11,20,0.2)_100%)]"
            />
            <div className="relative flex min-h-[480px] flex-col justify-end p-8 sm:p-12 lg:p-16">
              <span aria-hidden="true" className="mb-4 block select-none font-display italic text-[6rem] leading-none text-white/8 sm:text-[9rem]">"</span>
              <blockquote className="max-w-2xl">
                <p className="font-display italic text-3xl leading-snug text-white sm:text-4xl lg:text-[2.8rem]">
                  We do not just meet industry standards. We understand how they are made, enforced, and navigated.
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-brand-red" aria-hidden="true" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
                    Intertek Group — Founding Charter, 2006
                  </p>
                </footer>
              </blockquote>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <section className="space-y-5">
            <SectionHeading
              eyebrow="In the field"
              title="Real ships. Real surveyors. Real work."
              description="Our inspection record spans vessel types and operating regimes — from deepsea tankers in Panama to workboats across the Gulf."
            />
            <div className="grid min-h-[560px] grid-cols-4 grid-rows-[1.2fr_1fr] gap-3">
              {([
                { idx: 0, cols: 'col-span-2' },
                { idx: 1, cols: 'col-span-1' },
                { idx: 2, cols: 'col-span-1' },
                { idx: 3, cols: 'col-span-1' },
                { idx: 4, cols: 'col-span-2' },
                { idx: 5, cols: 'col-span-1' },
              ] as { idx: number; cols: string }[]).map(({ idx, cols }) => {
                const { src, alt, label } = homeImages[idx];
                return (
                  <div key={src} className={`${cols} group relative overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)]`}>
                    <img src={src} alt={alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
                    {label && (
                      <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-brand-navy/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                        <span className="inline-block h-px w-4 bg-red-400" aria-hidden="true" />
                        {label}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </ScrollReveal>

        {/* Why Intertek — editorial 3-pillar dark strip */}
        <ScrollReveal>
          <section className="relative overflow-hidden rounded-[2.25rem] bg-brand-steel px-6 py-14 sm:px-10 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(27,93,191,0.13),transparent)]"
            />
            <div className="relative">
              <SectionKicker text="Why Intertek" light />
              <div className="mt-10 grid gap-10 lg:grid-cols-3">
                {[
                  {
                    n: '01',
                    title: 'Flag State Background',
                    body: 'Former senior flag state inspectors and IACS surveyors on the board — the people who wrote the rules, not just applied them.',
                  },
                  {
                    n: '02',
                    title: 'Integrated Group Model',
                    body: 'Legal, technical, and operational arms in one structure. No handoffs between contractors — one team, one quality standard.',
                  },
                  {
                    n: '03',
                    title: '24/7 Global Coverage',
                    body: 'Surveyor presence across 11 countries and three time zones. Incident response and PSC attendance without waiting for business hours.',
                  },
                ].map(({ n, title, body }) => (
                  <div key={n} className="flex gap-5">
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 select-none font-display italic text-5xl leading-none text-white/10"
                    >
                      {n}
                    </span>
                    <div>
                      <h3 className="text-base font-black tracking-tight text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/55">{body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Standards reference row */}
              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/8 pt-10">
                {[
                  { v: 'SOLAS', sub: 'Chapter compliance' },
                  { v: 'ISM / ISPS', sub: 'Code implementation' },
                  { v: 'MLC 2006', sub: 'Welfare inspections' },
                ].map(({ v, sub }) => (
                  <div key={v} className="text-center">
                    <p className="font-display italic text-2xl text-white sm:text-3xl">{v}</p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/35">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="space-y-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-3">
                <SectionKicker text="Group structure" />
                <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                  Three entities.<br />One operating standard.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-white/60 sm:text-right">
                Legal Marine Tek, Intertek Maritime Bureau, and Intertek Maritime Middle East — independent entities, unified mandate.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {subsidiaries.map((item) => (
                <SubsidiaryTile key={item.name} subsidiary={item} />
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Final photo CTA */}
        <ScrollReveal>
          <section className="relative min-h-[320px] overflow-hidden rounded-[2.25rem]">
            <img
              src="/img/IG PHOTOS/marine-inspection-024.jpg"
              alt="Port operations at dusk"
              className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
              loading="lazy"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,28,52,0.93)_0%,rgba(10,28,52,0.58)_100%)]"
            />
            <div className="relative flex min-h-[320px] flex-col items-start justify-center gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12 lg:p-16">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-400">Get started</p>
                <h2 className="mt-3 max-w-md font-display italic text-4xl text-white sm:text-5xl">
                  Ready to work with the world's premier marine specialist?
                </h2>
              </div>
              <Link
                to={ROUTES.CONTACT}
                className="inline-flex shrink-0 items-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-navy shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition-all hover:-translate-y-0.5 hover:bg-brand-red hover:text-white"
              >
                Contact the team
              </Link>
            </div>
          </section>
        </ScrollReveal>
      </PageWrapper>
    </div>
  );
}
