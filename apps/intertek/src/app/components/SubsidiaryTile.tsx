import { Card } from '@heroui/react';
import type { Subsidiary } from '../pages/data';

export function SubsidiaryTile({ subsidiary }: { subsidiary: Subsidiary }) {
  return (
    <Card className="rounded-[1.75rem] border border-white/70 bg-white/88 shadow-[0_16px_50px_rgba(10,28,52,0.08)] backdrop-blur-xl">
      <Card.Content className="p-5">
        <div className="flex h-20 items-center justify-center overflow-hidden rounded-[1.25rem] border border-brand-navy/8 bg-[linear-gradient(180deg,rgba(27,93,191,0.05),rgba(255,255,255,0.92))] px-4 py-3">
          <img src={subsidiary.logo} alt="" aria-hidden="true" className="h-full w-full object-contain" />
        </div>
        <p className="mt-4 text-sm font-semibold text-brand-navy">{subsidiary.name}</p>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-red">
          {subsidiary.tagline}
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-600">{subsidiary.description}</p>
      </Card.Content>
    </Card>
  );
}
