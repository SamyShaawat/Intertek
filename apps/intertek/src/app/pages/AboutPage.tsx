import { useSEO } from '../hooks/useSEO';
import { ROUTES } from '../constants/routes';
import { ImageMosaic } from '../components/ImageMosaic';
import { HeroBanner } from '../components/HeroBanner';
import { PageWrapper } from '../components/PageWrapper';
import { SectionHeading } from '../components/SectionHeading';
import { SectionKicker } from '../components/SectionKicker';
import { SubsidiaryCard } from '../components/SubsidiaryCard';
import { aboutImages, markets, subsidiaries } from './data';

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
        <section className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[2.25rem] border border-white/70 bg-white/86 p-6 shadow-[0_16px_50px_rgba(10,28,52,0.08)] backdrop-blur-xl sm:p-8">
            <SectionKicker text="Who we are" />
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
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

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                'Former Senior Flag State Inspector',
                'Former IACS Marine Surveyor',
                'Senior Maritime Attorney',
                'Senior Naval Architects',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-brand-navy/8 bg-[linear-gradient(180deg,rgba(27,93,191,0.04),rgba(255,255,255,0.9))] px-4 py-3 text-sm font-medium text-brand-navy">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[2.25rem] border border-brand-navy/10 bg-brand-navy shadow-[0_20px_70px_rgba(10,28,52,0.16)]">
              <img
                src="/img/branding/intertek-group-professional-cover.png"
                alt="Intertek Group professional profile cover"
                className="aspect-video w-full object-contain"
              />
            </div>
            <ImageMosaic images={aboutImages} className="lg:grid-cols-2" />
          </div>
        </section>

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

        <section className="grid gap-5 rounded-[2.25rem] border border-brand-navy/10 bg-brand-navy p-6 text-white shadow-[0_20px_70px_rgba(10,28,52,0.16)] lg:grid-cols-[1fr_1fr] sm:p-8">
          <div className="space-y-3">
            <SectionKicker text="Our market" light />
            <h2 className="text-3xl font-black tracking-tight">Fleet and customer focus</h2>
            <p className="max-w-xl text-sm leading-7 text-white/75">
              Round-the-clock customer care, wherever you are.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {markets.map((market) => (
              <div key={market} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white">
                {market}
              </div>
            ))}
          </div>
        </section>
      </PageWrapper>
    </div>
  );
}
