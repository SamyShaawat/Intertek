import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionHeading } from '../../components/SectionHeading';
import { ImageMosaic } from '../../components/ImageMosaic';
import { servicesImages } from '../../data/siteContent';

export function ServicesGallerySection() {
  return (
    <ScrollReveal delay={0.05}>
      <section className="space-y-5">
        <SectionHeading
          eyebrow="Surveys"
          title="Marine surveys, PSC inspections, and incident response"
          description="Third-party marine surveys, pre- and post-PSC inspections, and near-miss or incident response across 11 countries."
        />
        <ImageMosaic images={servicesImages} />
      </section>
    </ScrollReveal>
  );
}
