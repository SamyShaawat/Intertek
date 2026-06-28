import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionKicker } from '../../components/SectionKicker';
import { serviceHighlights } from '../../data/siteContent';

export function ServicesScopeSection() {
  return (
    <ScrollReveal>
      <section className="grid gap-5 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] min-h-[240px] lg:min-h-[360px]">
          <img
            src="/img/IG PHOTOS/marine-inspection-030.jpeg"
            alt="Clear vessel inspection view"
            className="absolute inset-0 h-full w-full object-cover object-[center_34%]"
            loading="lazy"
          />
        </div>
        <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.10] p-6 backdrop-blur-xl sm:p-8">
          <SectionKicker text="Service scope" />
          <div className="mt-5 space-y-3">
            {serviceHighlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.10] px-4 py-3 transition-colors hover:bg-white/[0.14]"
              >
                <span className="inline-block h-px w-5 shrink-0 bg-red-400" aria-hidden="true" />
                <p className="text-sm font-medium text-white/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
