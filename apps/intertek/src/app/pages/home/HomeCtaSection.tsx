import { Link } from 'react-router-dom';
import { ScrollReveal } from '../../components/ScrollReveal';
import { ROUTES } from '../../constants/routes';

export function HomeCtaSection() {
  return (
    <ScrollReveal>
      <section className="relative min-h-[320px] overflow-hidden rounded-[2.25rem]">
        <img
          src="/img/IG PHOTOS/marine-inspection-024.jpg"
          alt="Port operations at dusk"
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
          loading="lazy"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,28,52,0.93)_0%,rgba(10,28,52,0.58)_100%)]"
        />
        <div className="relative flex min-h-[320px] flex-col items-start justify-center gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12 lg:p-16">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-red">Get started</p>
            <h2 className="mt-3 max-w-md font-display italic text-4xl text-white sm:text-5xl">
              Ready to work with the world's premier marine specialist?
            </h2>
          </div>
          <Link
            to={ROUTES.CONTACT}
            className="inline-flex shrink-0 items-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-navy shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition-all hover:-translate-y-0.5 hover:bg-brand-red hover:text-white"
          >
            Contact the team
          </Link>
        </div>
      </section>
    </ScrollReveal>
  );
}
