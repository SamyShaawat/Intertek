import { Chip } from '@heroui/react';
import type { ServiceCategory } from '../pages/data';

const CATEGORY_COLORS: Record<ServiceCategory, { chip: string; dot: string }> = {
  Registration: { chip: 'bg-white/10 text-white border-white/15',                   dot: 'bg-white/60' },
  Crew:         { chip: 'bg-amber-500/15 text-amber-300 border-amber-500/20',       dot: 'bg-amber-400' },
  Consultancy:  { chip: 'bg-blue-500/15 text-blue-300 border-blue-500/20',          dot: 'bg-blue-400' },
  Safety:       { chip: 'bg-red-500/15 text-red-400 border-red-500/20',             dot: 'bg-red-400' },
  Surveys:      { chip: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20', dot: 'bg-emerald-400' },
  Inspections:  { chip: 'bg-violet-500/15 text-violet-300 border-violet-500/20',    dot: 'bg-violet-400' },
};

export function ServicePill({ title, category }: { title: string; category: ServiceCategory }) {
  const colors = CATEGORY_COLORS[category];
  return (
    <div className="group rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4 shadow-[0_14px_40px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.10]">
      <Chip
        size="sm"
        variant="soft"
        className={`${colors.chip} h-6 px-2 text-[10px] font-semibold uppercase tracking-[0.22em]`}
      >
        <span className="inline-flex items-center gap-1.5">
          <span className={`inline-block h-1.5 w-1.5 rounded-full ${colors.dot} shrink-0`} />
          {category}
        </span>
      </Chip>
      <p className="mt-3 break-words text-sm font-semibold leading-6 text-white/85">{title}</p>
    </div>
  );
}
