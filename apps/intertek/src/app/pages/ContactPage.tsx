import { useState } from 'react';
import { Button } from '@heroui/react';
import { useSEO } from '../hooks/useSEO';
import { ROUTES } from '../constants/routes';
import { HeroBanner } from '../components/HeroBanner';
import { PageWrapper } from '../components/PageWrapper';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionHeading } from '../components/SectionHeading';
import { SectionKicker } from '../components/SectionKicker';
import { locations, offices, services } from './data';

const SERVICE_OPTIONS = [...services.map((service) => service.title), 'Other'];

type FormData = {
  company: string;
  email: string;
  service: string;
  location: string;
  message: string;
};

const COUNTRY_PHOTOS: { country: string; src: string }[] = [
  { country: 'Panama', src: '/img/IG PHOTOS/marine-inspection-013.jpg' },
  { country: 'UAE', src: '/img/IG PHOTOS/marine-inspection-017.jpg' },
  { country: 'Turkey', src: '/img/IG PHOTOS/marine-inspection-027.jpg' },
  { country: 'Italy', src: '/img/IG PHOTOS/marine-inspection-004.jpg' },
  { country: 'Egypt', src: '/img/IG PHOTOS/marine-inspection-002.jpeg' },
  { country: 'Belgium', src: '/img/IG PHOTOS/marine-inspection-007.jpeg' },
  { country: 'Canada', src: '/img/IG PHOTOS/marine-inspection-009.jpeg' },
  { country: 'Saudi Arabia', src: '/img/IG PHOTOS/marine-inspection-012.jpeg' },
];

export function ContactPage() {
  useSEO({
    title: 'Contact Intertek Group',
    description:
      'Reach Intertek Group offices in Panama City, Mississauga, and Dubai, with surveyor presence across 11 countries.',
    keywords: 'contact Intertek Group, Panama City, Mississauga, Dubai, marine surveyors, office locations',
  });

  const [formData, setFormData] = useState<FormData>({
    company: '',
    email: '',
    service: '',
    location: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <HeroBanner
        eyebrow="Contact"
        title={['Three offices.', 'Eleven surveyor', 'countries.']}
        description="Reach our offices or submit an inquiry — we respond within one business day."
        image="/img/IG PHOTOS/marine-inspection-037.jpeg"
        imageAlt="Surveyor working near vessel hull"
        primaryLink={{ to: ROUTES.SERVICES, label: 'Explore services' }}
        secondaryLink={{ to: ROUTES.ABOUT, label: 'About company' }}
      />

      <PageWrapper>
        <ScrollReveal>
          <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-3">
              <SectionKicker text="Offices" />
              <div className="space-y-3">
                {(
                  [
                    { office: offices[0], photo: '/img/IG PHOTOS/marine-inspection-026.jpg',  coords: '08°58′N  79°32′W' },
                    { office: offices[1], photo: '/img/IG PHOTOS/marine-inspection-009.jpeg', coords: '43°35′N  79°38′W' },
                    { office: offices[2], photo: '/img/IG PHOTOS/marine-inspection-017.jpg',  coords: '25°11′N  55°16′E' },
                  ] as { office: (typeof offices)[0]; photo: string; coords: string }[]
                ).map(({ office, photo, coords }) => (
                  <div
                    key={office.label}
                    className="group flex overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.09]"
                  >
                    {/* Location photo */}
                    <div className="relative w-44 shrink-0 overflow-hidden sm:w-52">
                      <img
                        src={photo}
                        alt={office.city}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-steel/75" />
                      <p className="absolute bottom-3 left-3 font-mono text-[7px] tracking-[0.18em] text-white/35 uppercase">
                        {coords}
                      </p>
                    </div>
                    {/* Info */}
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
              <div className="overflow-hidden rounded-[2.25rem] border border-white/10 shadow-[0_16px_50px_rgba(0,0,0,0.25)]">
                <img
                  src="/img/IG PHOTOS/marine-inspection-037.jpeg"
                  alt="Surveyor near vessel hull"
                  className="aspect-[4/3] w-full object-cover object-[center_20%]"
                  loading="lazy"
                />
              </div>
              <div className="rounded-[2.25rem] border border-brand-navy/10 bg-brand-navy p-6 text-white shadow-[0_20px_70px_rgba(10,28,52,0.16)] sm:p-8">
                <SectionKicker text="Surveyors' locations" light />
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
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

        {/* World presence photo grid */}
        <ScrollReveal>
          <section className="space-y-5">
            <SectionHeading
              eyebrow="Global presence"
              title="Surveyors across 11 countries"
              description="From Panama to the Gulf, our network of qualified surveyors covers every major shipping lane and port of call."
            />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {COUNTRY_PHOTOS.map(({ country, src }) => (
                <div key={country} className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={src}
                    alt={`Marine inspection work — ${country}`}
                    className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
                  <p className="absolute bottom-3 left-4 text-sm font-bold text-white drop-shadow">{country}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <section className="space-y-5">
            {/* 24h guarantee strip */}
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

            {/* Contact form */}
            <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8 lg:p-10">
              <SectionKicker text="Send an inquiry" />
              <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
                Get in touch with our team
              </h2>
              <p className="mt-2 text-sm text-white/50">
                Fill in the form and a specialist will respond within one business day.
              </p>

              {submitted ? (
                <div
                  className="mt-8 flex flex-col items-start gap-3 rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-6 text-emerald-900"
                  role="status"
                  aria-live="polite"
                >
                  <p className="text-lg font-bold">Inquiry received</p>
                  <p className="text-sm">
                    Thank you, <strong>{formData.company}</strong>. We'll be in touch at{' '}
                    <strong>{formData.email}</strong> shortly.
                  </p>
                  <Button
                    type="button"
                    className="mt-2 rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
                    onPress={() => {
                      setSubmitted(false);
                      setFormData({ company: '', email: '', service: '', location: '', message: '' });
                    }}
                  >
                    Submit another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-white/80">
                    <span>Company / Name</span>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Acme Shipping Ltd."
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-brand-blue focus:bg-white/10 focus:ring-4 focus:ring-brand-blue/15"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-semibold text-white/80">
                    <span>Email address</span>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ops@acmeshipping.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-brand-blue focus:bg-white/10 focus:ring-4 focus:ring-brand-blue/15"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-semibold text-white/80">
                    <span>Service required</span>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition focus:border-brand-blue focus:bg-white/10 focus:ring-4 focus:ring-brand-blue/15"
                    >
                      <option value="" disabled>Select a service…</option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </label>

                  <label className="grid gap-2 text-sm font-semibold text-white/80">
                    <span>Port / location</span>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="Panama City, Panama"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-brand-blue focus:bg-white/10 focus:ring-4 focus:ring-brand-blue/15"
                    />
                  </label>

                  <div className="sm:col-span-2">
                    <label className="grid gap-2 text-sm font-semibold text-white/80">
                      <span>Message</span>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Describe your inspection requirements, vessel details, or any other relevant information…"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-brand-blue focus:bg-white/10 focus:ring-4 focus:ring-brand-blue/15"
                      />
                    </label>
                  </div>

                  <div className="sm:col-span-2">
                    <Button
                      type="submit"
                      className="rounded-full bg-brand-navy px-8 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(10,28,52,0.18)] transition-all hover:-translate-y-0.5 hover:bg-brand-blue focus-visible:ring-4 focus-visible:ring-brand-blue/20 focus-visible:outline-none"
                    >
                      Submit inquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </section>
        </ScrollReveal>
      </PageWrapper>
    </div>
  );
}
