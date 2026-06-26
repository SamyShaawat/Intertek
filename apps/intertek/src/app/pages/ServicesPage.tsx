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
        title={['Service matrix', 'with image-led', 'sections']}
        description="Direct, readable service cards backed by vessel photography and a strong editorial grid."
        image="/img/IG PHOTOS/marine-inspection-030.jpeg"
        imageAlt="Inspection work on vessel deck"
        primaryLink={{ to: ROUTES.CONTACT, label: 'Request contact' }}
        secondaryLink={{ to: ROUTES.CODE_OF_PRACTICE, label: 'About Intertek' }}
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
                src="/img/IG PHOTOS/marine-inspection-030.jpeg"
                alt="Marine inspection on deck"
                className="h-72 w-full object-cover"
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
            eyebrow="Inspection scenes"
            title="All image types can work if the layout is disciplined"
            description="Use content from the whole image library, but keep the same margins, cropping, and captions."
          />
          <ImageMosaic images={servicesImages} />
        </section>
      </PageWrapper>
    </div>
  );
}
