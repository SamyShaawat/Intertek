import { useSEO } from '../hooks/useSEO';
import { PageWrapper } from '../components/PageWrapper';
import { ServicesGallerySection } from './services/ServicesGallerySection';
import { ServicesHeroSection } from './services/ServicesHeroSection';
import { ServicesMatrixSection } from './services/ServicesMatrixSection';
import { ServicesProcessSection } from './services/ServicesProcessSection';
import { ServicesScopeSection } from './services/ServicesScopeSection';

export function ServicesPage() {
  useSEO({
    title: 'Marine Services | Ship Registration, Surveys & Compliance',
    description:
      'Intertek Group offers ship registration, consultancy, statutory services, surveys, and inspections with global coverage.',
    keywords: 'marine services, ship registration, inspections, surveys, consultancy, statutory services',
    image: 'https://www.intertekgroup.org/img/IG%20PHOTOS/marine-inspection-030.jpeg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Marine Services',
      description:
        'Intertek Group offers ship registration, consultancy, statutory services, surveys, and inspections with global coverage.',
    },
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
