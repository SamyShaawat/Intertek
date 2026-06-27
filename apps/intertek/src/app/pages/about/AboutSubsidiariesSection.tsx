import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionHeading } from '../../components/SectionHeading';
import { SubsidiaryCard } from '../../components/SubsidiaryCard';
import { subsidiaries } from '../../data/siteContent';

export function AboutSubsidiariesSection() {
  return (
    <ScrollReveal delay={0.05}>
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
    </ScrollReveal>
  );
}
