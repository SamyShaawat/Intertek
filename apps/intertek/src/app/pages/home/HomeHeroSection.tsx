import { HeroBanner } from '../../components/HeroBanner';
import { ROUTES } from '../../constants/routes';

export function HomeHeroSection() {
  return (
    <HeroBanner
      eyebrow="Intertek Group"
      title={["World's Premier", 'Marine Specialist']}
      description="From Panama to the Middle East, Intertek Group combines ship registration, crew endorsements, marine surveys, and technical consultancy in one coordinated operating model."
      image="/img/IG PHOTOS/marine-inspection-026.jpg"
      imageAlt="Marine inspection and vessel branding scene"
      imagePosition="center 12%"
      primaryLink={{ to: ROUTES.SERVICES, label: 'Explore services' }}
      secondaryLink={{ to: ROUTES.CONTACT, label: 'Contact team' }}
    />
  );
}
