import { useSEO } from '../hooks/useSEO';
import { PageWrapper } from '../components/PageWrapper';
import { ContactGuaranteeSection } from './contact/ContactGuaranteeSection';
import { ContactHeroSection } from './contact/ContactHeroSection';
import { ContactInquiryFormSection } from './contact/ContactInquiryFormSection';
import { ContactOfficesSection } from './contact/ContactOfficesSection';
import { ContactPresenceSection } from './contact/ContactPresenceSection';

export function ContactPage() {
  useSEO({
    title: 'Contact Intertek Group',
    description:
      'Reach Intertek Group offices in Panama City, Mississauga, and Dubai, with surveyor presence across 11 countries.',
    keywords: 'contact Intertek Group, Panama City, Mississauga, Dubai, marine surveyors, office locations',
  });

  return (
    <div>
      <ContactHeroSection />
      <PageWrapper>
        <ContactOfficesSection />
        <ContactPresenceSection />
        <ContactGuaranteeSection />
        <ContactInquiryFormSection />
      </PageWrapper>
    </div>
  );
}
