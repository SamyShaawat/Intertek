import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionKicker } from '../../components/SectionKicker';

const TIMELINE = [
  {
    year: '2006',
    event: 'Founded in Panama City by a board of former flag state inspectors, IACS surveyors, maritime attorneys, and naval architects.',
  },
  {
    year: '2011',
    event: 'Expanded survey operations into the Middle East, Gulf, and Eastern Mediterranean.',
  },
  {
    year: '2018',
    event: 'Launched Intertek Maritime Bureau, adding class and naval architecture service lines.',
  },
  {
    year: '2022',
    event: 'Opened North America office in Mississauga, Ontario, extending coverage across the Atlantic and Caribbean.',
  },
];

export function AboutTimelineSection() {
  return (
    <ScrollReveal>
      <section className="relative overflow-hidden rounded-[2.25rem] bg-brand-navy px-6 py-12 sm:px-10 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(194,24,58,0.12),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(27,93,191,0.15),transparent_40%)]"
        />
        <div className="relative">
          <SectionKicker text="Our history" light />
          <div className="relative mt-10 grid gap-8 lg:grid-cols-4">
            <div
              aria-hidden="true"
              className="absolute top-[1.85rem] left-8 right-8 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block"
            />
            {TIMELINE.map(({ year, event }) => (
              <div key={year} className="relative">
                <div className="mb-4 flex items-center gap-3 lg:block">
                  <div
                    aria-hidden="true"
                    className="relative z-10 h-4 w-4 shrink-0 rounded-full border-2 border-brand-red bg-brand-navy lg:mb-5"
                  />
                  <p className="font-display italic text-4xl text-red-400 sm:text-5xl">{year}</p>
                </div>
                <p className="text-sm leading-6 text-white/55">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
