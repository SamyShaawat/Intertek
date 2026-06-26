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
  'rounded-[1.5rem] border border-slate-200 bg-white shadow-sm',
  'rounded-[1.5rem] border border-slate-200 bg-slate-50 shadow-sm',
  'rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]',
  'rounded-[1.5rem] border border-slate-800 bg-[#0b1f3b] shadow-sm',
  'rounded-[1.5rem] border border-slate-200 bg-white shadow-sm',
  'rounded-[1.5rem] border border-slate-200 bg-slate-50 shadow-sm',
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
          <figure key={`${image.src}-${index}`} className={`group ${frameClass} overflow-hidden ${tileClass}`}>
            <div className={`relative w-full overflow-hidden ${aspectClass}`}>
              <img
                src={image.src}
                alt={image.alt}
                className={`absolute inset-0 h-full w-full object-cover ${objectPos} transition-transform duration-500 group-hover:scale-105`}
                loading="lazy"
              />
              {image.label ? (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b1f3b] via-[#0b1f3b]/60 to-transparent px-4 pb-4 pt-8 text-sm font-medium text-white">
                  <span className="flex items-center gap-2">
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
