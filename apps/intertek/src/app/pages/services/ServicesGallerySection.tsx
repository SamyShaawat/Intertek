import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionHeading } from '../../components/SectionHeading';
import { ImageMosaic } from '../../components/ImageMosaic';
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
        <ImageMosaic images={servicesImages} />
      </section>
    </ScrollReveal>
  );
}
