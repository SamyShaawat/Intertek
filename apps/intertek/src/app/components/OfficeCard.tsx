import { Card } from '@heroui/react';
import type { Office } from '../pages/data';

export function OfficeCard({ office }: { office: Office }) {
  return (
    <Card className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white">
      <Card.Content className="flex flex-col p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-1.5">
            <img src="/img/branding/intertek-group-mark.png" alt="" aria-hidden="true" className="h-full w-full object-contain" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-blue">{office.label}</p>
            <h3 className="break-words text-lg font-bold leading-6 text-brand-navy">{office.city}</h3>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-red">{office.country}</p>
          </div>
        </div>
        <div className="mt-4 border-t border-slate-100 pt-4">
          <address className="not-italic text-sm leading-6 text-slate-600 break-words hyphens-auto">
            {office.address}
          </address>
        </div>
        <a
          href={`mailto:${office.email}`}
          className="mt-auto pt-4 self-start text-xs font-semibold text-brand-navy hover:underline"
        >
          {office.email}
        </a>
      </Card.Content>
    </Card>
  );
}
