import { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { ROUTES } from '../constants/routes';
import { HeroBanner } from '../components/HeroBanner';
import { PageWrapper } from '../components/PageWrapper';
import { SectionKicker } from '../components/SectionKicker';
import { OfficeCard } from '../components/OfficeCard';
import { locations, offices } from './data';

const SERVICE_OPTIONS = [
  'Marine Surveys',
  'Cargo Inspection',
  'Bunker Surveys',
  'P&I Surveys',
  'Condition Surveys',
  'Other',
];

type FormData = {
  company: string;
  email: string;
  service: string;
  location: string;
  message: string;
};

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
        title={['Global office map', 'and surveyor', 'footprint']}
        description="Reach our offices or submit an inquiry — we respond within one business day."
        image="/img/IG PHOTOS/marine-inspection-037.jpeg"
        imageAlt="Surveyor working near vessel hull"
        primaryLink={{ to: ROUTES.SERVICES, label: 'Explore services' }}
        secondaryLink={{ to: ROUTES.CODE_OF_PRACTICE, label: 'About company' }}
      />

      <PageWrapper>
        <section className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionKicker text="Offices" />
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {offices.map((office) => (
                <OfficeCard key={office.label} office={office} />
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <img
                src="/img/IG PHOTOS/marine-inspection-037.jpeg"
                alt="Surveyor near vessel hull"
                className="h-72 w-full object-cover"
              />
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-[#0b1f3b] p-6 text-white shadow-sm sm:p-8">
              <SectionKicker text="Surveyors' locations" light />
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {locations.map((location) => (
                  <div key={location} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white">
                    {location}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-white px-4 py-4 text-sm font-semibold text-[#0b1f3b]">
                World's premier marine specialist - 24/7
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <SectionKicker text="Send an inquiry" />
          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            Get in touch with our team
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Fill in the form and a specialist will respond within one business day.
          </p>

          {submitted ? (
            <div className="mt-8 flex flex-col items-start gap-3 rounded-2xl bg-emerald-50 p-6 text-emerald-800">
              <p className="text-lg font-bold">Inquiry received</p>
              <p className="text-sm">
                Thank you, <strong>{formData.company}</strong>. We'll be in touch at{' '}
                <strong>{formData.email}</strong> shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ company: '', email: '', service: '', location: '', message: '' });
                }}
                className="mt-2 rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
              >
                Submit another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="company" className="text-sm font-semibold text-slate-700">
                  Company / Name <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Acme Shipping Ltd."
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0b1f3b] focus:ring-2 focus:ring-[#0b1f3b]/10"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                  Email address <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ops@acmeshipping.com"
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0b1f3b] focus:ring-2 focus:ring-[#0b1f3b]/10"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="service" className="text-sm font-semibold text-slate-700">
                  Service required
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0b1f3b] focus:ring-2 focus:ring-[#0b1f3b]/10"
                >
                  <option value="">Select a service…</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="location" className="text-sm font-semibold text-slate-700">
                  Port / location
                </label>
                <input
                  id="location"
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Panama City, Panama"
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0b1f3b] focus:ring-2 focus:ring-[#0b1f3b]/10"
                />
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                  Message <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your inspection requirements, vessel details, or any other relevant information…"
                  className="resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0b1f3b] focus:ring-2 focus:ring-[#0b1f3b]/10"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="rounded-full bg-[#0b1f3b] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  Submit inquiry
                </button>
              </div>
            </form>
          )}
        </section>
      </PageWrapper>
    </div>
  );
}
