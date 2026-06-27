import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionHeading } from '../../components/SectionHeading';

const COUNTRY_PHOTOS: { country: string; src: string }[] = [
  { country: 'Panama', src: '/img/IG PHOTOS/marine-inspection-013.jpg' },
  { country: 'UAE', src: '/img/IG PHOTOS/marine-inspection-017.jpg' },
  { country: 'Turkey', src: '/img/IG PHOTOS/marine-inspection-027.jpg' },
  { country: 'Italy', src: '/img/IG PHOTOS/marine-inspection-004.jpg' },
  { country: 'Egypt', src: '/img/IG PHOTOS/marine-inspection-002.jpeg' },
  { country: 'Belgium', src: '/img/IG PHOTOS/marine-inspection-007.jpeg' },
  { country: 'Canada', src: '/img/IG PHOTOS/marine-inspection-009.jpeg' },
  { country: 'Saudi Arabia', src: '/img/IG PHOTOS/marine-inspection-012.jpeg' },
];

export function ContactPresenceSection() {
  return (
    <ScrollReveal>
      <section className="space-y-5">
        <SectionHeading
          eyebrow="Global presence"
          title="Surveyors across 11 countries"
          description="From Panama to the Gulf, our network of qualified surveyors covers every major shipping lane and port of call."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {COUNTRY_PHOTOS.map(({ country, src }) => (
            <div key={country} className="group relative overflow-hidden rounded-2xl">
              <img
                src={src}
                alt={`Marine inspection work — ${country}`}
                className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
              <p className="absolute bottom-3 left-4 text-sm font-bold text-white drop-shadow">{country}</p>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
