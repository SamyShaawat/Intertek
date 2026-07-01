import { Link } from 'react-router-dom';
import { Card } from '@heroui/react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionKicker } from '../../components/SectionKicker';
import { ServicePill } from '../../components/ServicePill';
import { ROUTES } from '../../constants/routes';
import { services } from '../../data/siteContent';

export function HomeOverviewSection() {
  return (
    <ScrollReveal>
      <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <Card className="rounded-[2.25rem] border border-white/10 bg-white/[0.10] shadow-[0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <Card.Content className="p-6 sm:p-8">
            <SectionKicker text="What we do" />
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {services.slice(0, 6).map((service) => (
                <ServicePill
                  key={service.title}
                  title={service.title}
                  category={service.category}
                />
              ))}
            </div>
          </Card.Content>
        </Card>

        <div className="overflow-hidden rounded-[2.25rem] border border-brand-navy/10 bg-brand-navy shadow-[0_20px_70px_rgba(10,28,52,0.16)]">
          <div className="grid h-full gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-5 p-6 text-white sm:p-8">
              <SectionKicker text="Our approach" light />
              <h2 className="max-w-md text-3xl font-black leading-tight tracking-tight">
                One coordinated model. Three specialized entities.
              </h2>
              <p className="max-w-md text-sm leading-7 text-white/80">
                From registration in Panama to third-party surveys in the Gulf —
                every service runs under the same oversight standard, with the
                same team accountability.
              </p>
              <Link
                to={ROUTES.ABOUT}
                className="inline-flex w-fit rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-navy shadow-[0_12px_30px_rgba(0,0,0,0.14)] transition-all hover:-translate-y-0.5 hover:bg-brand-red hover:text-white"
              >
                See company profile
              </Link>
            </div>
            <div className="relative min-h-[280px] overflow-hidden lg:h-full">
              <img
                src="/img/generated/ai-marine-graphic-12.png"
                alt="Surveyors conducting vessel inspection"
                className="absolute inset-0 h-full w-full object-cover object-[center_32%]"
              />
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
