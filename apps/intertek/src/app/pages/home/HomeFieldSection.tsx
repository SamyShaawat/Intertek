import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionHeading } from '../../components/SectionHeading';
import { Card } from '@heroui/react';
import { markets, locations } from '../../data/siteContent';

export function HomeFieldSection() {
  return (
    <ScrollReveal delay={0.05}>
      <section className="space-y-5">
        <SectionHeading
          eyebrow="Coverage"
          title="Work across the main routes, ports, and operating regimes."
          description="A simple view of the markets we serve and the locations where the team is active."
        />
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-[2rem] border border-white/10 bg-white/[0.08] shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <Card.Content className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-blue">Market focus</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {markets.map((market) => (
                  <div key={market} className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4 text-sm font-medium text-white/80">
                    {market}
                  </div>
                ))}
              </div>
            </Card.Content>
          </Card>

          <Card className="rounded-[2rem] border border-brand-navy/10 bg-brand-navy shadow-[0_18px_50px_rgba(10,28,52,0.16)]">
            <Card.Content className="p-6 text-white sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/55">Surveyor locations</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {locations.map((location) => (
                  <span
                    key={location}
                    className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-medium text-white/80"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </Card.Content>
          </Card>
        </div>
      </section>
    </ScrollReveal>
  );
}
