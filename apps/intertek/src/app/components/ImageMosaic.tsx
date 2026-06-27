export interface MosaicImage {
  src: string;
  alt: string;
  label?: string;
}

interface ImageMosaicProps {
  images: MosaicImage[];
  className?: string;
}

// col-span only — row-span causes empty space below short images
const tileVariants = [
  'sm:col-span-2 lg:col-span-1 xl:col-span-2',
  '',
  '',
  '',
  'sm:col-span-2 lg:col-span-1 xl:col-span-2',
  '',
] as const;

const frameVariants = [
  'rounded-[1.5rem] border border-white/10 bg-brand-navy shadow-[0_16px_40px_rgba(0,0,0,0.25)]',
  'rounded-[1.5rem] border border-white/10 bg-brand-navy shadow-[0_16px_40px_rgba(0,0,0,0.2)]',
  'rounded-[1.5rem] border border-white/10 bg-brand-navy shadow-[0_18px_46px_rgba(0,0,0,0.28)]',
  'rounded-[1.5rem] border border-white/10 bg-brand-steel shadow-[0_18px_46px_rgba(0,0,0,0.32)]',
  'rounded-[1.5rem] border border-white/10 bg-brand-navy shadow-[0_16px_40px_rgba(0,0,0,0.25)]',
  'rounded-[1.5rem] border border-white/10 bg-brand-navy shadow-[0_16px_40px_rgba(0,0,0,0.2)]',
] as const;

// Landscape frames get object-[center_25%] to favour upper portion of scene (where subjects are)
// Portrait frame (index 3) uses object-center — portrait images fit best here
const aspectVariants = [
  { cls: 'aspect-[16/7]',  pos: 'object-[center_25%]' },
  { cls: 'aspect-[4/3]',   pos: 'object-center' },
  { cls: 'aspect-square',  pos: 'object-center' },
  { cls: 'aspect-[3/4]',   pos: 'object-center' },
  { cls: 'aspect-[16/7]',  pos: 'object-[center_25%]' },
  { cls: 'aspect-[4/3]',   pos: 'object-center' },
] as const;

export function ImageMosaic({ images, className = '' }: ImageMosaicProps) {
  return (
    <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${className}`}>
      {images.map((image, index) => {
        const tileClass = tileVariants[index % tileVariants.length];
        const frameClass = frameVariants[index % frameVariants.length];
        const { cls: aspectClass, pos: objectPos } = aspectVariants[index % aspectVariants.length];

        return (
          <figure key={`${image.src}-${index}`} className={`group overflow-hidden ${frameClass} ${tileClass}`}>
            <div className={`relative w-full overflow-hidden ${aspectClass}`}>
              <img
                src={image.src}
                alt={image.alt}
                className={`absolute inset-0 h-full w-full object-cover ${objectPos} transition-transform duration-700 group-hover:scale-[1.03]`}
                loading="lazy"
              />
              {image.label ? (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-steel/90 via-brand-steel/45 to-transparent px-4 pb-4 pt-10 text-sm font-medium text-white">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 backdrop-blur-md">
                    <span className="h-px w-4 bg-brand-red" aria-hidden="true" />
                    {image.label}
                  </span>
                </figcaption>
              ) : null}
            </div>
          </figure>
        );
      })}
    </div>
  );
}
