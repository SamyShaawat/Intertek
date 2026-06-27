import { Chip } from '@heroui/react';
import type { Service, ServiceCategory } from '../data/siteContent';

const CATEGORY_COLORS: Record<ServiceCategory, { chip: string; dot: string }> = {
  Registration: { chip: 'bg-slate-100/12 text-slate-100 border-white/15',          dot: 'bg-slate-200' },
  Crew:         { chip: 'bg-amber-500/12 text-amber-200 border-amber-500/20',       dot: 'bg-amber-200' },
  Consultancy:  { chip: 'bg-sky-500/12 text-sky-200 border-sky-500/20',             dot: 'bg-sky-200' },
  Safety:       { chip: 'bg-rose-500/12 text-rose-200 border-rose-500/20',          dot: 'bg-rose-200' },
  Surveys:      { chip: 'bg-emerald-500/12 text-emerald-200 border-emerald-500/20', dot: 'bg-emerald-200' },
  Inspections:  { chip: 'bg-cyan-500/12 text-cyan-200 border-cyan-500/20',          dot: 'bg-cyan-200' },
};

export function ServiceCard({ service }: { service: Service }) {
  const colors = CATEGORY_COLORS[service.category];
  return (
    <div className="group rounded-[1.5rem] border border-white/10 bg-white/[0.10] p-4 shadow-[0_14px_40px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.14]">
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
      <p className="mt-3 break-words text-sm font-semibold leading-6 text-white/85">{service.title}</p>
    </div>
  );
}
