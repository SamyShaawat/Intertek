import { useState } from 'react';
import { Input, Textarea, Select, SelectItem, Button } from '@heroui/react';
import { useSEO } from '../hooks/useSEO';
import { ROUTES } from '../constants/routes';
import { HeroBanner } from '../components/HeroBanner';
import { PageWrapper } from '../components/PageWrapper';
import { SectionKicker } from '../components/SectionKicker';
import { OfficeCard } from '../components/OfficeCard';
import { locations, offices } from './data';

const SERVICE_OPTIONS = [
  "Ships' Registration",
  "Offshore Corporates' Registration",
  'Mortgages Registration',
  'Crew Documentation & Endorsement',
  'Class H&M Services & Consultancy',
  'Statutory Services & Consultancy',
  'Naval Architecture & Consultancy',
  'ISM & ISPS Services and Consultancy',
  'Third Party Marine Surveys',
  'Pre/Post-PSC Inspections',
  'Incident & Near-Miss Response Attendance',
  'MLC Crew Welfare Inspections',
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
        title={["Three offices.", "Eleven surveyor", "countries."]}
        description="Reach our offices or submit an inquiry — we respond within one business day."
        image="/img/IG PHOTOS/marine-inspection-037.jpeg"
        imageAlt="Surveyor working near vessel hull"
        primaryLink={{ to: ROUTES.SERVICES, label: 'Explore services' }}
        secondaryLink={{ to: ROUTES.ABOUT, label: 'About company' }}
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
                className="aspect-[4/3] w-full object-cover object-[center_20%]"
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
              <Button
                type="button"
                radius="full"
                size="sm"
                className="mt-2 bg-emerald-700 font-semibold text-white hover:bg-emerald-800"
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
              <Input
                id="company"
                label="Company / Name"
                placeholder="Acme Shipping Ltd."
                isRequired
                radius="lg"
                value={formData.company}
                onValueChange={(v) => setFormData({ ...formData, company: v })}
                classNames={{
                  inputWrapper: 'bg-slate-50 border border-slate-200 shadow-none hover:border-brand-navy',
                }}
              />

              <Input
                id="email"
                type="email"
                label="Email address"
                placeholder="ops@acmeshipping.com"
                isRequired
                radius="lg"
                value={formData.email}
                onValueChange={(v) => setFormData({ ...formData, email: v })}
                classNames={{
                  inputWrapper: 'bg-slate-50 border border-slate-200 shadow-none hover:border-brand-navy',
                }}
              />

              <Select
                id="service"
                label="Service required"
                placeholder="Select a service…"
                radius="lg"
                selectedKeys={formData.service ? [formData.service] : []}
                onSelectionChange={(keys) =>
                  setFormData({ ...formData, service: Array.from(keys)[0] as string ?? '' })
                }
                classNames={{
                  trigger: 'bg-slate-50 border border-slate-200 shadow-none hover:border-brand-navy',
                }}
              >
                {SERVICE_OPTIONS.map((s) => (
                  <SelectItem key={s}>{s}</SelectItem>
                ))}
              </Select>

              <Input
                id="location"
                label="Port / location"
                placeholder="Panama City, Panama"
                radius="lg"
                value={formData.location}
                onValueChange={(v) => setFormData({ ...formData, location: v })}
                classNames={{
                  inputWrapper: 'bg-slate-50 border border-slate-200 shadow-none hover:border-brand-navy',
                }}
              />

              <div className="sm:col-span-2">
                <Textarea
                  id="message"
                  label="Message"
                  placeholder="Describe your inspection requirements, vessel details, or any other relevant information…"
                  isRequired
                  minRows={5}
                  radius="lg"
                  value={formData.message}
                  onValueChange={(v) => setFormData({ ...formData, message: v })}
                  classNames={{
                    inputWrapper: 'bg-slate-50 border border-slate-200 shadow-none hover:border-brand-navy',
                  }}
                />
              </div>

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  radius="full"
                  size="lg"
                  className="bg-brand-navy px-8 font-semibold text-white shadow-sm hover:-translate-y-0.5 transition-transform"
                  disableRipple
                >
                  Submit inquiry
                </Button>
              </div>
            </form>
          )}
        </section>
      </PageWrapper>
    </div>
  );
}
