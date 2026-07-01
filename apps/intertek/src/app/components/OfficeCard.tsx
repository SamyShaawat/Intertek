import { Card } from '@heroui/react';
import type { Office } from '../data/siteContent';

export function OfficeCard({ office }: { office: Office }) {
  return (
    <Card className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.10] shadow-[0_16px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl">
      <Card.Content className="flex flex-col p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/14 p-1.5">
            <img
              src={office.logo ?? '/img/branding/intertek-group-mark.png'}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-blue">{office.label}</p>
            <h3 className="break-words text-lg font-bold leading-6 text-white">{office.city}</h3>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-red">{office.country}</p>
          </div>
        </div>
        <div className="mt-4 border-t border-white/10 pt-4">
          <address className="not-italic text-sm leading-6 text-white/72 break-words hyphens-auto">
            {office.address}
          </address>
        </div>
        <a
          href={`mailto:${office.email}`}
          className="mt-auto self-start pt-4 text-xs font-semibold text-white/72 transition-colors hover:text-brand-red hover:underline"
        >
          {office.email}
        </a>
      </Card.Content>
    </Card>
  );
}
