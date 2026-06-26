import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { useSEO } from '../hooks/useSEO';
import { ImageMosaic } from '../components/ImageMosaic';
import { HeroBanner } from '../components/HeroBanner';
import { MetricCard } from '../components/MetricCard';
import { PageWrapper } from '../components/PageWrapper';
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
        imageAlt="Marine inspection and vessel branding scene"
        primaryLink={{ to: ROUTES.SERVICES, label: 'Explore services' }}
        secondaryLink={{ to: ROUTES.CONTACT, label: 'Contact team' }}
      />

      <InspectionFilmstrip />

      <PageWrapper>
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {heroMetrics.map((metric) => (
            <MetricCard key={metric.label} value={metric.value} label={metric.label} />
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionKicker text="What we do" />
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {services.slice(0, 6).map((service) => (
                <ServicePill key={service.title} title={service.title} category={service.category} />
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#0b1f3b] shadow-sm">
            <div className="grid h-full gap-0 lg:grid-cols-[0.92fr_1.08fr]">
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
                  className="inline-flex w-fit rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0b1f3b] shadow-sm"
                >
                  See company profile
                </Link>
              </div>
              <img
                src="/img/IG PHOTOS/marine-inspection-015.jpg"
                alt="Surveyors conducting vessel inspection"
                className="h-64 w-full object-cover lg:h-full"
              />
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <SectionHeading
            eyebrow="In the field"
            title="Real ships. Real surveyors. Real work."
            description="Our inspection record spans vessel types and operating regimes — from deepsea tankers in Panama to workboats across the Gulf."
          />
          <ImageMosaic images={homeImages} />
        </section>

        <section className="grid gap-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[0.9fr_1.1fr] sm:p-8">
          <div className="space-y-4">
            <SectionKicker text="Group structure" />
            <h2 className="text-3xl font-black tracking-tight text-[#0b1f3b]">Three entities. One operating standard.</h2>
            <p className="max-w-xl text-sm leading-7 text-slate-600">
              Legal Marine Tek, Intertek Maritime Bureau, and Intertek Maritime Middle East operate independently — bound by the same quality mandate and leadership team.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {subsidiaries.map((item) => (
              <SubsidiaryTile key={item.name} subsidiary={item} />
            ))}
          </div>
        </section>
      </PageWrapper>
    </div>
  );
}
