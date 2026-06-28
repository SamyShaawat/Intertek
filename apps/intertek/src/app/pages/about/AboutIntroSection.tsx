import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionKicker } from '../../components/SectionKicker';

export function AboutIntroSection() {
  return (
    <ScrollReveal>
      <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
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

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-[1.55fr_1fr] lg:grid-rows-2">
          <div className="relative overflow-hidden rounded-[2.25rem] shadow-[0_24px_64px_rgba(0,0,0,0.45)] md:row-span-2">
            <img
              src="/img/IG PHOTOS/marine-inspection-021.jpeg"
              alt="Marine inspection team at work"
              className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
              loading="lazy"
            />
            <div aria-hidden="true" className="aspect-[4/3] w-full md:h-full md:aspect-auto" />
          </div>
          <div className="relative overflow-hidden rounded-[2.25rem] shadow-[0_24px_64px_rgba(0,0,0,0.45)]">
            <img
              src="/img/branding/intertek-group-professional-cover.png"
              alt="Intertek Group professional cover"
              className="absolute inset-0 h-full w-full object-cover object-top"
              loading="lazy"
            />
            <div aria-hidden="true" className="aspect-[4/3] w-full" />
          </div>
          <div className="relative overflow-hidden rounded-[2.25rem] shadow-[0_24px_64px_rgba(0,0,0,0.45)]">
            <img
              src="/img/IG PHOTOS/marine-inspection-004.jpg"
              alt="Marine field inspection"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div aria-hidden="true" className="aspect-[4/3] w-full" />
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
