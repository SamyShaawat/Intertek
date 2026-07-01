import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionHeading } from '../../components/SectionHeading';

const COUNTRY_NAMES = ['Panama', 'UAE', 'Turkey', 'Italy', 'Egypt', 'Belgium', 'Canada', 'Saudi Arabia'];

export function ContactPresenceSection() {
  return (
    <ScrollReveal>
      <section className="space-y-5">
        <SectionHeading
          eyebrow="Global presence"
          title="Surveyors across core locations"
          description="From Panama to the Gulf, our network of qualified surveyors covers the main shipping lanes and port calls."
        />
        <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:grid-cols-4">
          {COUNTRY_NAMES.map((country) => (
            <div
              key={country}
              className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-5 text-center text-sm font-semibold text-white/85"
            >
              {country}
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
