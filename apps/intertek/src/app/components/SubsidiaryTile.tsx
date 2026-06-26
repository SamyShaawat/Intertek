import { Card } from '@heroui/react';
import type { Subsidiary } from '../pages/data';

export function SubsidiaryTile({ subsidiary }: { subsidiary: Subsidiary }) {
  return (
    <Card className="rounded-[1.75rem] border border-slate-200 bg-white">
      <Card.Content className="p-5">
        <div className="flex h-20 items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
          <img src={subsidiary.logo} alt="" aria-hidden="true" className="h-full w-full object-contain" />
        </div>
        <p className="mt-4 text-sm font-semibold text-[#0b1f3b]">{subsidiary.name}</p>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-red">
          {subsidiary.tagline}
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-600">{subsidiary.description}</p>
      </Card.Content>
    </Card>
  );
}
