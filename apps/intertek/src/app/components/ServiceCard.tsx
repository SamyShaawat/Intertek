import { Chip } from '@heroui/react';
import type { Service, ServiceCategory } from '../pages/data';

const CATEGORY_COLORS: Record<ServiceCategory, { chip: string; dot: string }> = {
  Registration: { chip: 'bg-[#0b1f3b]/8 text-[#0b1f3b] border-[#0b1f3b]/12',  dot: 'bg-[#0b1f3b]' },
  Crew:         { chip: 'bg-amber-50 text-amber-700 border-amber-200',           dot: 'bg-amber-500' },
  Consultancy:  { chip: 'bg-blue-50 text-[#1557bb] border-blue-200',            dot: 'bg-[#1557bb]' },
  Safety:       { chip: 'bg-red-50 text-[#c41230] border-red-200',              dot: 'bg-[#c41230]' },
  Surveys:      { chip: 'bg-emerald-50 text-emerald-700 border-emerald-200',    dot: 'bg-emerald-500' },
  Inspections:  { chip: 'bg-violet-50 text-violet-700 border-violet-200',       dot: 'bg-violet-500' },
};

export function ServiceCard({ service }: { service: Service }) {
  const colors = CATEGORY_COLORS[service.category];
  return (
    <div className="group rounded-[1.5rem] border border-white/70 bg-white/88 p-4 shadow-[0_14px_40px_rgba(10,28,52,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/15 hover:shadow-[0_18px_48px_rgba(10,28,52,0.1)]">
      <Chip
        size="sm"
        variant="soft"
        className={`${colors.chip} h-6 px-2 text-[10px] font-semibold uppercase tracking-[0.22em]`}
      >
        <span className="inline-flex items-center gap-1.5">
          <span className={`inline-block h-1.5 w-1.5 rounded-full ${colors.dot} shrink-0`} />
          {service.category}
        </span>
      </Chip>
      <p className="mt-3 break-words text-sm font-semibold leading-6 text-brand-navy">{service.title}</p>
    </div>
  );
}
