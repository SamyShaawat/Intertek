import { HeroBanner } from '../../components/HeroBanner';
import { ROUTES } from '../../constants/routes';

export function ServicesHeroSection() {
  return (
    <HeroBanner
      eyebrow="Services"
      title={['Maritime services', 'for ships, surveys,', 'and compliance']}
      description="Ship registration, marine surveys, ISM & ISPS consultancy, statutory services, and crew documentation delivered by specialists with flag state and IACS backgrounds."
      image="/img/IG PHOTOS/marine-inspection-030.jpeg"
      imageAlt="Inspection work on vessel deck"
      primaryLink={{ to: ROUTES.CONTACT, label: 'Request contact' }}
      secondaryLink={{ to: ROUTES.ABOUT, label: 'About Intertek' }}
      animate={false}
    />
  );
}
