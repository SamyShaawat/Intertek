import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionHeading } from '../../components/SectionHeading';
import { ImageMosaic } from '../../components/ImageMosaic';
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
        <ImageMosaic images={homeImages} />
      </section>
    </ScrollReveal>
  );
}
