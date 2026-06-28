import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionKicker } from '../../components/SectionKicker';
import { markets } from '../../data/siteContent';

export function AboutMarketsSection() {
  return (
    <ScrollReveal>
      <section className="grid gap-5 rounded-[2.25rem] border border-brand-navy/10 bg-brand-navy p-6 text-white shadow-[0_20px_70px_rgba(10,28,52,0.16)] lg:grid-cols-[1fr_1fr] sm:p-8">
        <div className="space-y-4">
          <SectionKicker text="Our market" light />
          <h2 className="text-3xl font-black tracking-tight">Fleet and customer focus</h2>
          <p className="max-w-xl text-sm leading-7 text-white/75">
            Round-the-clock customer care for every vessel category — from global fleet operators to government port authorities.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {markets.map((market) => (
              <div
                key={market}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white"
              >
                {market}
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-brand-red/30 bg-brand-red/10 px-4 py-4 text-sm text-white/80">
            <span className="font-semibold text-white">Surveyor coverage: </span>
            Panama · UAE · Turkey · Italy · Egypt · Syria · Belgium · Algeria · Lebanon · KSA · Canada
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
          {[
            { src: '/img/IG PHOTOS/marine-inspection-006.jpeg', label: 'Deepsea tankers' },
            { src: '/img/IG PHOTOS/marine-inspection-014.jpeg', label: 'Offshore vessels' },
            { src: '/img/IG PHOTOS/marine-inspection-025.jpeg', label: 'Port operations' },
            { src: '/img/IG PHOTOS/marine-inspection-028.jpg', label: 'Survey at anchor' },
          ].map(({ src, label }) => (
            <div key={src} className="group relative overflow-hidden rounded-2xl">
              <img
                src={src}
                alt={label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div aria-hidden="true" className="aspect-[4/3] w-full" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 to-transparent" />
              <p className="absolute bottom-2 left-3 text-[10px] font-semibold uppercase tracking-widest text-white/75">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
