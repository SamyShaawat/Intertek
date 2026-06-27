import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionKicker } from '../../components/SectionKicker';

export function HomeWhyIntertekSection() {
  return (
    <ScrollReveal>
      <section className="relative overflow-hidden rounded-[2.25rem] bg-brand-steel px-6 py-14 sm:px-10 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(79,127,166,0.13),transparent)]"
        />
        <div className="relative">
          <SectionKicker text="Why Intertek" light />
          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            {[
              {
                n: '01',
                title: 'Flag State Background',
                body: 'Former senior flag state inspectors and IACS surveyors on the board — the people who wrote the rules, not just applied them.',
              },
              {
                n: '02',
                title: 'Integrated Group Model',
                body: 'Legal, technical, and operational arms in one structure. No handoffs between contractors — one team, one quality standard.',
              },
              {
                n: '03',
                title: '24/7 Global Coverage',
                body: 'Surveyor presence across 11 countries and three time zones. Incident response and PSC attendance without waiting for business hours.',
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="flex gap-5">
                <span aria-hidden="true" className="mt-1 shrink-0 select-none font-display italic text-5xl leading-none text-white/10">
                  {n}
                </span>
                <div>
                  <h3 className="text-base font-black tracking-tight text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/62">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/8 pt-10">
            {[
              { v: 'SOLAS', sub: 'Chapter compliance' },
              { v: 'ISM / ISPS', sub: 'Code implementation' },
              { v: 'MLC 2006', sub: 'Welfare inspections' },
            ].map(({ v, sub }) => (
              <div key={v} className="text-center">
                <p className="font-display italic text-2xl text-white sm:text-3xl">{v}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/35">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
