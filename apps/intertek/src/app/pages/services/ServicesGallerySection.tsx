import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionHeading } from '../../components/SectionHeading';
import { Card } from '@heroui/react';

export function ServicesGallerySection() {
  return (
    <ScrollReveal delay={0.05}>
      <section className="space-y-5">
        <SectionHeading
          eyebrow="Surveys"
          title="Marine surveys, PSC inspections, and incident response"
          description="Third-party marine surveys, pre- and post-PSC inspections, and near-miss or incident response across the group’s core locations."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {['Pre-PSC', 'Post-PSC', 'Near-miss', 'Incident response'].map((item) => (
            <Card key={item} className="rounded-[1.75rem] border border-white/10 bg-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
              <Card.Content className="p-5 text-sm font-semibold text-white/82">{item}</Card.Content>
            </Card>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
