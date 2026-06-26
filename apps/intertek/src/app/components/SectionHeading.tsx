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
      <h2 className="text-3xl font-black tracking-tight text-brand-navy sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
    </div>
  );
}
