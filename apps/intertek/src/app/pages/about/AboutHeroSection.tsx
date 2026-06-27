import { HeroBanner } from '../../components/HeroBanner';
import { ROUTES } from '../../constants/routes';

export function AboutHeroSection() {
  return (
    <HeroBanner
      eyebrow="About"
      title={['Founding story,', 'technical depth,', 'and subsidiary brands']}
      description="Founded in Panama in 2006 by a distinguished board of former flag state inspectors, IACS marine surveyors, maritime attorneys, and naval architects."
      image="/img/IG PHOTOS/marine-inspection-018.jpeg"
      imageAlt="Marine team working on deck"
      primaryLink={{ to: ROUTES.SERVICES, label: 'View services' }}
      secondaryLink={{ to: ROUTES.CONTACT, label: 'Contact office' }}
    />
  );
}
