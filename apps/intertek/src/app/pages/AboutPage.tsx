import { useSEO } from '../hooks/useSEO';
import { PageWrapper } from '../components/PageWrapper';
import { AboutHeroSection } from './about/AboutHeroSection';
import { AboutIntroSection } from './about/AboutIntroSection';
import { AboutMarketsSection } from './about/AboutMarketsSection';
import { AboutSubsidiariesSection } from './about/AboutSubsidiariesSection';
import { AboutTimelineSection } from './about/AboutTimelineSection';

export function AboutPage() {
  useSEO({
    title: 'About Intertek Group',
    description:
      'Intertek Group was founded in Panama in 2006 and combines maritime law, technical survey work, and compliance services across multiple jurisdictions.',
    keywords: 'Intertek Group, Panama, maritime law, marine surveyors, class, statutory, naval architecture',
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
