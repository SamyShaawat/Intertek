import { useSEO } from '../hooks/useSEO';
import { PageWrapper } from '../components/PageWrapper';
import { AboutHeroSection } from './about/AboutHeroSection';
import { AboutIntroSection } from './about/AboutIntroSection';
import { AboutMarketsSection } from './about/AboutMarketsSection';
import { AboutSubsidiariesSection } from './about/AboutSubsidiariesSection';
import { AboutTimelineSection } from './about/AboutTimelineSection';

export function AboutPage() {
  useSEO({
    title: 'About Intertek Group | Marine Specialists Since 2006',
    description:
      'Founded in Panama in 2006, Intertek Group combines maritime law, survey work, and compliance services across multiple jurisdictions.',
    keywords: 'Intertek Group, Panama, maritime law, marine surveyors, naval architecture, compliance',
    image: 'https://www.intertekgroup.org/img/IG%20PHOTOS/marine-inspection-018.jpeg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'About Intertek Group',
      description:
        'Founded in Panama in 2006, Intertek Group combines maritime law, survey work, and compliance services across multiple jurisdictions.',
    },
  });

  return (
    <div>
      <AboutHeroSection />
      <PageWrapper>
        <AboutIntroSection />
        <AboutTimelineSection />
        <AboutSubsidiariesSection />
        <AboutMarketsSection />
      </PageWrapper>
    </div>
  );
}
