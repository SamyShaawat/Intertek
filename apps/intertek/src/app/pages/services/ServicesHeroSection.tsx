import { HeroBanner } from '../../components/HeroBanner';
import { ROUTES } from '../../constants/routes';

export function ServicesHeroSection() {
  return (
    <HeroBanner
      eyebrow="Services"
      title={['Registration,', 'surveys, and', 'compliance services']}
      description="From ship registration in Panama to third-party surveys and ISM compliance across the Middle East — every service delivered by specialists with flag state and IACS backgrounds."
      image="/img/IG PHOTOS/marine-inspection-030.jpeg"
      imageAlt="Inspection work on vessel deck"
      primaryLink={{ to: ROUTES.CONTACT, label: 'Request contact' }}
      secondaryLink={{ to: ROUTES.ABOUT, label: 'About Intertek' }}
      animate={false}
    />
  );
}
