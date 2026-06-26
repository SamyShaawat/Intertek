import { useSEO } from '../hooks/useSEO';
import { ROUTES } from '../constants/routes';
import { ImageMosaic } from '../components/ImageMosaic';
import { HeroBanner } from '../components/HeroBanner';
import { PageWrapper } from '../components/PageWrapper';
import { SectionHeading } from '../components/SectionHeading';
import { SectionKicker } from '../components/SectionKicker';
import { ServiceCard } from '../components/ServiceCard';
import { serviceHighlights, services, servicesImages } from './data';

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
        <section className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionKicker text="Service matrix" />
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <img
                src="/img/IG PHOTOS/marine-inspection-011.jpg"
                alt="Marine survey in progress"
                className="aspect-[4/3] w-full object-cover object-[center_20%]"
              />
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <SectionKicker text="Service scope" />
              <div className="mt-4 grid gap-3">
                {serviceHighlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <SectionHeading
            eyebrow="In the field"
            title="Real inspections. Real ships."
            description="Our surveyors operate across 11 countries covering deepsea shipping, offshore vessels, government fleets, and pleasure yachts."
          />
          <ImageMosaic images={servicesImages} />
        </section>
      </PageWrapper>
    </div>
  );
}
