import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionKicker } from '../../components/SectionKicker';
import { locations, offices } from '../../data/siteContent';

const OFFICE_MAP = [
  { office: offices[0], photo: '/img/IG PHOTOS/marine-inspection-026.jpg', coords: '08°58′N  79°32′W' },
  { office: offices[1], photo: '/img/IG PHOTOS/marine-inspection-009.jpeg', 
    coords: '43°35′N  79°38′W' },
  { office: offices[2], photo: '/img/IG PHOTOS/marine-inspection-017.jpg', coords: '25°11′N  55°16′E' },
] as const;

export function ContactOfficesSection() {
  return (
    <ScrollReveal>
      <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-3">
          <SectionKicker text="Offices" />
          <div className="space-y-3">
            {OFFICE_MAP.map(({ office, photo, coords }) => (
              <div
                key={office.label}
                className="group flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.09] sm:flex-row backdrop-blur-xl"
              >
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden sm:h-auto sm:w-52 sm:aspect-auto">
                  <img
                    src={photo}
                    alt={office.city}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-steel/75" />
                  <p className="absolute bottom-3 left-3 font-mono text-[7px] tracking-[0.18em] text-white/35 uppercase">
                    {coords}
                  </p>
                </div>
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-blue-400">{office.label}</p>
                    <h3 className="mt-1 font-display italic text-2xl leading-tight text-white">{office.city}</h3>
                    <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-red-400">{office.country}</p>
                  </div>
                  <div className="mt-4 border-t border-white/10 pt-3">
                    <address className="not-italic text-xs leading-5 text-white/65">{office.address}</address>
                    <a
                      href={`mailto:${office.email}`}
                      className="mt-2 block text-xs font-semibold text-white/55 transition-colors hover:text-red-400"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 shadow-[0_16px_50px_rgba(0,0,0,0.25)] aspect-[4/3]">
            <img
              src="/img/IG PHOTOS/marine-inspection-037.jpeg"
              alt="Surveyor near vessel hull"
              className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
              loading="lazy"
            />
          </div>
          <div className="rounded-[2.25rem] border border-brand-navy/10 bg-brand-navy p-6 text-white shadow-[0_20px_70px_rgba(10,28,52,0.16)] sm:p-8">
            <SectionKicker text="Surveyors' locations" light />
            <div className="mt-5 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:grid-cols-3">
              {locations.map((location) => (
                <div
                  key={location}
                  className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  {location}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-white px-4 py-4 text-sm font-semibold text-brand-navy shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
              World's premier marine specialist — 24/7
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
