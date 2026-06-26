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

// Duplicated for seamless infinite loop — track translates -50% then resets
const track = [...images, ...images];

export function InspectionFilmstrip() {
  return (
    <div className="border-t-4 border-brand-red overflow-hidden">
      <div className="filmstrip-track flex h-52 sm:h-60 w-max gap-1">
        {track.map((img, i) => (
          <div key={i} className="relative w-64 shrink-0 overflow-hidden rounded-sm sm:w-72">
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
