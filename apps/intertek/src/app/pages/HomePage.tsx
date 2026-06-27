import { useSEO } from '../hooks/useSEO';
import { PageWrapper } from '../components/PageWrapper';
import { HomeCtaSection } from './home/HomeCtaSection';
import { HomeEditorialQuoteSection } from './home/HomeEditorialQuoteSection';
import { HomeFieldSection } from './home/HomeFieldSection';
import { HomeGroupStructureSection } from './home/HomeGroupStructureSection';
import { HomeHeroSection } from './home/HomeHeroSection';
import { HomeMetricsBand } from './home/HomeMetricsBand';
import { HomeOverviewSection } from './home/HomeOverviewSection';
import { HomeWhyIntertekSection } from './home/HomeWhyIntertekSection';

export function HomePage() {
  useSEO({
    title: 'Marine Registration, Surveys & Compliance',
    description:
      'Intertek Group delivers ship registration, marine surveys, ISM/ISPS compliance, and naval architecture across 11 countries.',
    keywords: 'marine registration, marine surveys, ISM ISPS, naval architecture, ship registration, Panama',
    image: 'https://www.intertekgroup.org/img/IG%20PHOTOS/marine-inspection-026.jpg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Intertek Group',
      description:
        'Intertek Group delivers ship registration, marine surveys, ISM/ISPS compliance, and naval architecture across 11 countries.',
    },
  });

  return (
    <div>
      <HomeHeroSection />
      <HomeMetricsBand />
      <PageWrapper>
        <HomeOverviewSection />
        <HomeEditorialQuoteSection />
        <HomeFieldSection />
        <HomeWhyIntertekSection />
        <HomeGroupStructureSection />
        <HomeCtaSection />
      </PageWrapper>
    </div>
  );
}
