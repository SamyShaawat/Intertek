const images = [
  { src: '/img/IG PHOTOS/marine-inspection-002.jpeg', alt: 'Marine inspection' },
  { src: '/img/IG PHOTOS/marine-inspection-004.jpg', alt: 'Vessel survey' },
  { src: '/img/IG PHOTOS/marine-inspection-007.jpeg', alt: 'Deck inspection' },
  { src: '/img/IG PHOTOS/marine-inspection-009.jpeg', alt: 'Hull survey' },
  { src: '/img/IG PHOTOS/marine-inspection-012.jpeg', alt: 'Inspection team' },
  { src: '/img/IG PHOTOS/marine-inspection-016.jpeg', alt: 'Port inspection' },
  { src: '/img/IG PHOTOS/marine-inspection-022.jpeg', alt: 'Cargo survey' },
  { src: '/img/IG PHOTOS/marine-inspection-031.jpeg', alt: 'Surveyors at work' },
];

export function InspectionFilmstrip() {
  return (
    <div className="border-t-4 border-brand-red overflow-x-auto">
      <div className="flex h-48 sm:h-56">
        {images.map((img, i) => (
          <div key={i} className="relative w-44 shrink-0 overflow-hidden md:w-auto md:flex-1">
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
