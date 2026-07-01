import { useSEO } from '../hooks/useSEO';
import { PageWrapper } from '../components/PageWrapper';
import { ContactHeroSection } from './contact/ContactHeroSection';
import { ContactOfficesSection } from './contact/ContactOfficesSection';
import { ContactPresenceSection } from './contact/ContactPresenceSection';

export function ContactPage() {
  useSEO({
    title: 'Contact Intertek Group | Marine Surveyors & Registration Team',
    description:
      'Reach Intertek Group offices in Panama City, Mississauga, and Dubai, with surveyor presence across core locations.',
    keywords: 'contact Intertek Group, Panama City, Mississauga, Dubai, marine surveyors, office locations',
    image: 'https://intertekgroup.org/img/branding/intertek-group-mark.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Contact Intertek Group',
      description:
        'Reach Intertek Group offices in Panama City, Mississauga, and Dubai, with surveyor presence across core locations.',
    },
  });

  return (
    <div>
      <ContactHeroSection />
      <PageWrapper>
        <ContactOfficesSection />
        <ContactPresenceSection />
      </PageWrapper>
    </div>
  );
}
