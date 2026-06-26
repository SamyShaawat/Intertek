export interface MosaicImage {
  src: string;
  alt: string;
  label?: string;
}

interface ImageMosaicProps {
  images: MosaicImage[];
  className?: string;
}

const tileVariants = [
  'sm:col-span-2 lg:row-span-2',
  'lg:col-span-2',
  '',
  'sm:row-span-2',
  'lg:col-span-2 lg:row-span-2',
  '',
] as const;

const frameVariants = [
  'rounded-[2rem] border border-slate-200 bg-white shadow-sm',
  'rounded-[1.5rem] border border-slate-200 bg-slate-50 shadow-sm',
  'rounded-[1.75rem] border border-white/60 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]',
  'rounded-[2rem] border border-slate-200 bg-[#0b1f3b] p-2 shadow-sm',
  'rounded-[1.5rem] border border-slate-200 bg-white shadow-sm',
  'rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm',
] as const;

const cropVariants = [
  'h-[18rem]',
  'h-[14rem]',
  'h-[12rem]',
  'h-[20rem]',
  'h-[16rem]',
  'h-[13rem]',
] as const;

export function ImageMosaic({ images, className = '' }: ImageMosaicProps) {
  return (
    <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${className}`}>
      {images.map((image, index) => {
        const tileClass = tileVariants[index % tileVariants.length];
        const frameClass = frameVariants[index % frameVariants.length];
        const cropClass = cropVariants[index % cropVariants.length];

        return (
          <figure key={`${image.src}-${index}`} className={`group ${frameClass} overflow-hidden ${tileClass}`}>
            <div className={`relative overflow-hidden ${cropClass}`}>
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {image.label ? (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b1f3b] via-[#0b1f3b]/60 to-transparent p-4 text-sm font-medium text-white">
                  {image.label}
                </figcaption>
              ) : null}
            </div>
          </figure>
        );
      })}
    </div>
  );
}
