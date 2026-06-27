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
    title: "World's Premier Marine Specialist",
    description:
      'Intertek Group delivers maritime registration, surveys, statutory support, and naval architecture through specialized entities across 11 countries.',
    keywords: 'marine specialist, ship registration, marine surveys, ISM ISPS, naval architecture, Panama',
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
