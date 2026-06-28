import { useSEO } from '../hooks/useSEO';
import { PageWrapper } from '../components/PageWrapper';
import { ServicesGallerySection } from './services/ServicesGallerySection';
import { ServicesHeroSection } from './services/ServicesHeroSection';
import { ServicesMatrixSection } from './services/ServicesMatrixSection';
import { ServicesProcessSection } from './services/ServicesProcessSection';
import { ServicesScopeSection } from './services/ServicesScopeSection';

export function ServicesPage() {
  useSEO({
    title: 'Maritime Services | Ship Registration, Surveys & Compliance | Intertek Group',
    description:
      'Lead generation page for ship registration, offshore corporate registration, mortgages, marine surveys, ISM & ISPS consultancy, statutory services, and crew support.',
    keywords:
      'maritime services, ship registration services, marine surveys, ism isps consultancy, statutory services, naval architecture, crew documentation, mlc inspections',
    image: 'https://www.intertekgroup.org/img/IG%20PHOTOS/marine-inspection-030.jpeg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Maritime Services',
      description:
        'Intertek Group offers ship registration, offshore corporate registration, marine surveys, consultancy, statutory services, and inspections with global coverage.',
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
