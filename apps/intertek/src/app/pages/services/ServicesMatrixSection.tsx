import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionHeading } from '../../components/SectionHeading';
import { ServiceCard } from '../../components/ServiceCard';
import { services } from '../../data/siteContent';

export function ServicesMatrixSection() {
  return (
    <ScrollReveal>
      <section className="space-y-6">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Service matrix"
            title={`${services.length} specialist services.`}
            description="Every service delivered by former flag state inspectors, IACS surveyors, maritime attorneys, and naval architects."
          />
          <span
            aria-hidden="true"
            className="hidden shrink-0 select-none font-display italic text-[6rem] leading-none text-white/[0.07] lg:block"
          >
            {services.length}
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
