import { SectionKicker } from './SectionKicker';

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <SectionKicker text={eyebrow} />
      <h2 className="font-display italic text-4xl font-normal leading-[1.05] text-white sm:text-5xl lg:text-[3.1rem]">
        {title}
      </h2>
      <p className="max-w-2xl text-sm leading-7 text-white/62 sm:text-base">{description}</p>
    </div>
  );
}
