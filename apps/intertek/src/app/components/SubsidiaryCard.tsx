import { Card } from '@heroui/react';
import type { Subsidiary } from '../pages/data';

export function SubsidiaryCard({ subsidiary }: { subsidiary: Subsidiary }) {
  return (
    <Card className="rounded-[2rem] border border-slate-200 bg-white">
      <Card.Content className="p-6">
        <div className="flex h-24 items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4">
          <img src={subsidiary.logo} alt="" aria-hidden="true" className="h-full w-full object-contain" />
        </div>
        <div className="mt-5 flex items-center gap-2">
          <span className="inline-block h-px w-5 bg-brand-red" aria-hidden="true" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-red">
            {subsidiary.tagline}
          </p>
        </div>
        <h3 className="mt-2 text-xl font-bold text-[#0b1f3b]">{subsidiary.name}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{subsidiary.description}</p>
      </Card.Content>
    </Card>
  );
}
