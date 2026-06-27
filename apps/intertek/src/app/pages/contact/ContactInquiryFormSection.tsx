import { Button } from '@heroui/react';
import { useState, type FormEvent } from 'react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionKicker } from '../../components/SectionKicker';
import { services } from '../../data/siteContent';

const SERVICE_OPTIONS = [...services.map((service) => service.title), 'Other'];

type FormData = {
  company: string;
  email: string;
  service: string;
  location: string;
  message: string;
};

export function ContactInquiryFormSection() {
  const [formData, setFormData] = useState<FormData>({
    company: '',
    email: '',
    service: '',
    location: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <ScrollReveal>
      <section className="rounded-[2.25rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8 lg:p-10">
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
                className="rounded-2xl border border-white/15 bg-white/[0.10] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/34 focus:border-brand-blue focus:bg-white/14 focus:ring-4 focus:ring-brand-blue/15"
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
                className="rounded-2xl border border-white/15 bg-white/[0.10] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/34 focus:border-brand-blue focus:bg-white/14 focus:ring-4 focus:ring-brand-blue/15"
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
                className="rounded-2xl border border-white/15 bg-white/[0.10] px-4 py-3 text-sm text-white outline-none transition focus:border-brand-blue focus:bg-white/14 focus:ring-4 focus:ring-brand-blue/15"
              >
                <option value="" disabled>
                  Select a service…
                </option>
                {SERVICE_OPTIONS.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
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
                className="rounded-2xl border border-white/15 bg-white/[0.10] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/34 focus:border-brand-blue focus:bg-white/14 focus:ring-4 focus:ring-brand-blue/15"
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
                  className="rounded-2xl border border-white/15 bg-white/[0.10] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/34 focus:border-brand-blue focus:bg-white/14 focus:ring-4 focus:ring-brand-blue/15"
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
      </section>
    </ScrollReveal>
  );
}
