import { useSEO } from '../hooks/useSEO';
import { PageWrapper } from '../components/PageWrapper';
import { AboutHeroSection } from './about/AboutHeroSection';
import { AboutIntroSection } from './about/AboutIntroSection';
import { AboutMarketsSection } from './about/AboutMarketsSection';
import { AboutSubsidiariesSection } from './about/AboutSubsidiariesSection';

export function AboutPage() {
  useSEO({
    title: 'About Intertek Group | Marine Specialists, Flag State & IACS Expertise',
    description:
      'Founded in Panama in 2006, Intertek Group combines maritime law, survey work, and compliance services across Panama, Canada, and the UAE.',
    keywords: 'Intertek Group, Panama, maritime law, marine surveyors, naval architecture, flag state, IACS',
    image: 'https://intertekgroup.org/img/branding/intertek-group-mark.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'About Intertek Group',
      description:
        'Founded in Panama in 2006, Intertek Group combines maritime law, survey work, and compliance services across Panama, Canada, and the UAE.',
    },
  });

  return (
    <div>
      <AboutHeroSection />
      <PageWrapper>
        <AboutIntroSection />
        <AboutSubsidiariesSection />
        <AboutMarketsSection />
      </PageWrapper>
    </div>
  );
}
