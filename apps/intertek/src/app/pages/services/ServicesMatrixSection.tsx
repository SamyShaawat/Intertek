import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionHeading } from '../../components/SectionHeading';
import { ServiceCard } from '../../components/ServiceCard';
import { services } from '../../data/siteContent';

const registrationServices = services.filter((service) => service.category === 'Registration');

export function ServicesMatrixSection() {
  return (
    <ScrollReveal>
      <section className="space-y-6">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Registration"
            title="Ship registration, offshore corporates, and mortgages"
            description="The landing page starts with the core transactional intent: ships' registration, offshore corporates' registration, and mortgage registration."
          />
          <span
            aria-hidden="true"
            className="hidden shrink-0 select-none font-display italic text-[6rem] leading-none text-white/[0.07] lg:block"
          >
            01
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {registrationServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
