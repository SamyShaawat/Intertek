import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { useSEO } from '../hooks/useSEO';
import { ImageMosaic } from '../components/ImageMosaic';
import { HeroBanner } from '../components/HeroBanner';
import { MetricCard } from '../components/MetricCard';
import { PageWrapper } from '../components/PageWrapper';
import { SectionHeading } from '../components/SectionHeading';
import { SectionKicker } from '../components/SectionKicker';
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
                <SectionKicker text="Operating standard" light />
                <h2 className="max-w-md text-3xl font-black leading-tight tracking-tight">
                  Clean structure, strong photography, and direct content.
                </h2>
                <p className="max-w-md text-sm leading-7 text-white/78">
                  The layout follows the same logic across pages: clear headings, white surfaces, and image-led cards.
                </p>
                <Link
                  to={ROUTES.CODE_OF_PRACTICE}
                  className="inline-flex w-fit rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0b1f3b] shadow-sm"
                >
                  See company profile
                </Link>
              </div>
              <img
                src="/img/IG PHOTOS/marine-inspection-026.jpg"
                alt="Vessel inspection imagery"
                className="h-64 w-full object-cover lg:h-full"
              />
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <SectionHeading
            eyebrow="Featured scenes"
            title="Visual rhythm from real operations"
            description="Photography breaks the page into strong, readable bands."
          />
          <ImageMosaic images={homeImages} />
        </section>

        <section className="grid gap-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[0.9fr_1.1fr] sm:p-8">
          <div className="space-y-4">
            <SectionKicker text="Subsidiary strip" />
            <h2 className="text-3xl font-black tracking-tight text-[#0b1f3b]">Three entities. One operating standard.</h2>
            <p className="max-w-xl text-sm leading-7 text-slate-600">
              Intertek Group stays coherent when every page uses the same sections, spacing, and visual language.
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
