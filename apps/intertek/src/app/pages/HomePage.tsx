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
    title: 'Intertek Group | Marine Registration, Surveys & Compliance',
    description:
      'Intertek Group delivers ship registration, marine surveys, ISM/ISPS compliance, and naval architecture from Panama, Canada, and the UAE.',
    keywords: 'marine registration, marine surveys, ISM ISPS, naval architecture, ship registration, Panama',
    image: 'https://intertekgroup.org/img/branding/intertek-group-mark.png',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Intertek Group',
        description:
          'Intertek Group delivers ship registration, marine surveys, ISM/ISPS compliance, and naval architecture from Panama, Canada, and the UAE.',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Intertek Group',
        description:
          'Intertek Group delivers ship registration, marine surveys, ISM/ISPS compliance, and naval architecture from Panama, Canada, and the UAE.',
        logo: 'https://intertekgroup.org/img/branding/intertek-group-mark.png',
      },
    ],
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
