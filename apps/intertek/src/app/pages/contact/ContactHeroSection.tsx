import { HeroBanner } from '../../components/HeroBanner';
import { ROUTES } from '../../constants/routes';

export function ContactHeroSection() {
  return (
    <HeroBanner
      eyebrow="Contact"
      title={['Three offices.', 'Eleven surveyor', 'countries.']}
      description="Reach our offices or submit an inquiry — we respond within one business day."
      image="/img/IG PHOTOS/marine-inspection-037.jpeg"
      imageAlt="Surveyor working near vessel hull"
      primaryLink={{ to: ROUTES.SERVICES, label: 'Explore services' }}
      secondaryLink={{ to: ROUTES.ABOUT, label: 'About company' }}
    />
  );
}
