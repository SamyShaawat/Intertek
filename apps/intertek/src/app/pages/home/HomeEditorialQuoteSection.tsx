import { ScrollReveal } from '../../components/ScrollReveal';

export function HomeEditorialQuoteSection() {
  return (
    <ScrollReveal>
      <section className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-brand-steel p-8 shadow-[0_20px_70px_rgba(0,0,0,0.22)] sm:p-12 lg:p-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src="/img/branding/intertek-group-ship-brand.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.30]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,19,29,0.30)_0%,rgba(10,19,29,0.48)_45%,rgba(10,19,29,0.84)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.06),transparent_40%)]" />
        </div>
        <div className="relative max-w-3xl">
          <span aria-hidden="true" className="mb-4 block select-none font-display italic text-[5rem] leading-none text-white/8 sm:text-[7rem]">
            "
          </span>
          <blockquote className="max-w-2xl">
            <p className="font-display italic text-3xl leading-snug text-white sm:text-4xl lg:text-[2.8rem]">
              We do not just meet industry standards. We understand how they are made, enforced, and navigated.
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-red" aria-hidden="true" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
                Intertek Group, Panama, 2006
              </p>
            </footer>
          </blockquote>
        </div>
      </section>
    </ScrollReveal>
  );
}
