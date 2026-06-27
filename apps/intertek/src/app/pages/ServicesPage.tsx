import { useSEO } from '../hooks/useSEO';
import { PageWrapper } from '../components/PageWrapper';
import { ServicesGallerySection } from './services/ServicesGallerySection';
import { ServicesHeroSection } from './services/ServicesHeroSection';
import { ServicesMatrixSection } from './services/ServicesMatrixSection';
import { ServicesProcessSection } from './services/ServicesProcessSection';
import { ServicesScopeSection } from './services/ServicesScopeSection';

export function ServicesPage() {
  useSEO({
    title: 'Marine Services',
    description:
      'Intertek Group offers ship registration, consultancy, statutory services, surveys, and inspections with a broad global operating footprint.',
    keywords: 'marine services, ship registration, inspections, surveys, consultancy, statutory services',
  });

  return (
    <div>
      <ServicesHeroSection />
      <PageWrapper>
        <ServicesMatrixSection />
        <ServicesScopeSection />
        <ServicesProcessSection />
        <ServicesGallerySection />
      </PageWrapper>
    </div>
  );
}
