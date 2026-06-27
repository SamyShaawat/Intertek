import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionKicker } from '../../components/SectionKicker';

export function ContactGuaranteeSection() {
  return (
    <ScrollReveal delay={0.05}>
      <section className="space-y-5">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-brand-navy/10 bg-brand-navy px-8 py-8 text-white shadow-[0_20px_70px_rgba(10,28,52,0.16)] sm:px-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,93,191,0.3),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(194,24,58,0.12),transparent_40%)]"
          />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <SectionKicker text="Response guarantee" light />
              <p className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                Back to you within{' '}
                <span className="font-display text-5xl italic font-normal text-red-400 sm:text-6xl">
                  24h
                </span>
              </p>
            </div>
            <p className="max-w-xs text-sm leading-7 text-white/70">
              Submit an inquiry and a specialist will respond within one business day — no auto-replies.
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
