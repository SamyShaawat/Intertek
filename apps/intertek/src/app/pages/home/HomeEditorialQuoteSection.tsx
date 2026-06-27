import { ScrollReveal } from '../../components/ScrollReveal';

export function HomeEditorialQuoteSection() {
  return (
    <ScrollReveal>
      <section className="relative min-h-[480px] overflow-hidden rounded-[2.25rem]">
        <img
          src="/img/IG PHOTOS/marine-inspection-020.jpeg"
          alt="Vessel at sea during inspection"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,11,20,0.88)_0%,rgba(5,11,20,0.6)_55%,rgba(5,11,20,0.2)_100%)]"
        />
        <div className="relative flex min-h-[480px] flex-col justify-end p-8 sm:p-12 lg:p-16">
          <span aria-hidden="true" className="mb-4 block select-none font-display italic text-[6rem] leading-none text-white/8 sm:text-[9rem]">"</span>
          <blockquote className="max-w-2xl">
            <p className="font-display italic text-3xl leading-snug text-white sm:text-4xl lg:text-[2.8rem]">
              We do not just meet industry standards. We understand how they are made, enforced, and navigated.
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-red" aria-hidden="true" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
                Intertek Group — Founding Charter, 2006
              </p>
            </footer>
          </blockquote>
        </div>
      </section>
    </ScrollReveal>
  );
}
