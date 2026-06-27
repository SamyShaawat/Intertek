import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionHeading } from '../../components/SectionHeading';
import { servicesImages } from '../../data/siteContent';

export function ServicesGallerySection() {
  return (
    <ScrollReveal delay={0.05}>
      <section className="space-y-5">
        <SectionHeading
          eyebrow="In the field"
          title="Real inspections. Real ships."
          description="Our surveyors operate across 11 countries covering deepsea shipping, offshore vessels, government fleets, and pleasure yachts."
        />
        <div className="grid min-h-[520px] grid-cols-4 grid-rows-[1.2fr_1fr] gap-3">
          {([
            { idx: 0, cols: 'col-span-2' },
            { idx: 1, cols: 'col-span-1' },
            { idx: 2, cols: 'col-span-1' },
            { idx: 3, cols: 'col-span-1' },
            { idx: 4, cols: 'col-span-2' },
            { idx: 5, cols: 'col-span-1' },
          ] as { idx: number; cols: string }[]).map(({ idx, cols }) => {
            const { src, alt } = servicesImages[idx];
            return (
              <div key={src} className={`${cols} group relative overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)]`}>
                <img src={src} alt={alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
              </div>
            );
          })}
        </div>
      </section>
    </ScrollReveal>
  );
}
