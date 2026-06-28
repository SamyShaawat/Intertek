import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionHeading } from '../../components/SectionHeading';

const PROCESS = [
  {
    step: '01',
    title: 'Submit request',
    body: 'Send vessel details, crew needs, or compliance scope through the contact form.',
  },
  {
    step: '02',
    title: 'Specialist assigned',
    body: 'A surveyor, maritime lawyer, or technical specialist is matched to the case.',
  },
  {
    step: '03',
    title: 'Attendance or filing',
    body: 'We attend the vessel, file the documents, or coordinate the endorsement work required.',
  },
  {
    step: '04',
    title: 'Report delivered',
    body: 'You receive the final report, certificate, or registration document on time.',
  },
];

export function ServicesProcessSection() {
  return (
    <ScrollReveal>
      <section className="relative overflow-hidden rounded-[2.25rem] bg-brand-navy px-6 py-12 sm:px-10 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(27,93,191,0.18),transparent_44%),radial-gradient(circle_at_bottom_right,rgba(194,24,58,0.10),transparent_40%)]"
        />
        <div className="relative">
          <SectionHeading
            eyebrow="Crew"
            title="Crew documentation, endorsement, and MLC inspections"
            description="A simple workflow for crew paperwork, endorsement work, welfare checks, and related compliance support."
          />
          <div className="mt-10 grid gap-0 divide-y divide-white/8 lg:grid-cols-4 lg:divide-y-0 lg:divide-x">
            {PROCESS.map(({ step, title, body }) => (
              <div key={step} className="flex gap-5 py-8 lg:flex-col lg:px-8 lg:py-0 first:lg:pl-0 last:lg:pr-0">
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 select-none font-display italic text-4xl leading-none text-red-400/50"
                >
                  {step}
                </span>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/62">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
