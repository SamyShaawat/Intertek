import { heroMetrics } from '../../data/siteContent';

export function HomeMetricsBand() {
  return (
    <section className="relative overflow-hidden bg-brand-navy" aria-label="Key figures">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,93,191,0.22),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(194,24,58,0.14),transparent_32%)]"
      />
      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {heroMetrics.map((metric, i) => (
            <div
              key={metric.label}
              className={[
                'group relative py-12 text-center',
                i % 2 !== 0 ? 'border-l border-white/8' : '',
                i < 2 ? 'border-b border-white/8 lg:border-b-0' : '',
                i !== 0 && i % 2 === 0 ? 'lg:border-l lg:border-white/8' : '',
              ].join(' ')}
            >
              <p className="font-display text-5xl italic font-normal leading-none text-white sm:text-6xl lg:text-7xl">
                {metric.value}
              </p>
              <div
                aria-hidden="true"
                className="mx-auto mt-4 h-px w-8 bg-brand-red transition-all duration-500 group-hover:w-14"
              />
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/50">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
