import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionHeading } from '../../components/SectionHeading';
import { homeImages } from '../../data/siteContent';

export function HomeFieldSection() {
  return (
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
                    <span className="inline-block h-px w-4 bg-brand-red" aria-hidden="true" />
                    {label}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </ScrollReveal>
  );
}
