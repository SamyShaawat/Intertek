export interface MosaicImage {
  src: string;
  alt: string;
  label?: string;
}

interface ImageMosaicProps {
  images: MosaicImage[];
  className?: string;
}

const frameClass =
  'overflow-hidden rounded-[1.75rem] border border-white/10 bg-brand-steel shadow-[0_18px_46px_rgba(0,0,0,0.22)]';

const layoutVariants = [
  'md:col-span-2 xl:col-span-6',
  'xl:col-span-3',
  'xl:col-span-3',
  'md:col-span-2 xl:col-span-4',
  'xl:col-span-4',
  'xl:col-span-4',
] as const;

const aspectVariants = [
  { cls: 'aspect-[16/9]', pos: 'object-[center_24%]' },
  { cls: 'aspect-[4/3]', pos: 'object-center' },
  { cls: 'aspect-[3/4]', pos: 'object-center' },
  { cls: 'aspect-[5/4]', pos: 'object-center' },
  { cls: 'aspect-[4/3]', pos: 'object-[center_20%]' },
  { cls: 'aspect-[4/3]', pos: 'object-center' },
] as const;

export function ImageMosaic({ images, className = '' }: ImageMosaicProps) {
  return (
    <div className={`grid items-start grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12 ${className}`}>
      {images.map((image, index) => {
        const layoutClass = layoutVariants[index % layoutVariants.length];
        const { cls: aspectClass, pos: objectPos } = aspectVariants[index % aspectVariants.length];

        return (
          <figure key={`${image.src}-${index}`} className={`group self-start ${frameClass} ${layoutClass}`}>
            <div className={`relative w-full overflow-hidden ${aspectClass}`}>
              <img
                src={image.src}
                alt={image.alt}
                className={`absolute inset-0 h-full w-full object-cover ${objectPos} transition-transform duration-700 group-hover:scale-[1.03]`}
                loading="lazy"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,15,25,0)_48%,rgba(7,15,25,0.18)_70%,rgba(7,15,25,0.68)_100%)]"
              />
              {image.label ? (
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white sm:p-5">
                  <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/12 bg-white/14 px-3 py-1.5 shadow-[0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur-md">
                    <span className="h-px w-4 shrink-0 bg-brand-red" aria-hidden="true" />
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
