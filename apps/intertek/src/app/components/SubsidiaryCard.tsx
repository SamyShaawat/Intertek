import { Card } from '@heroui/react';
import type { Subsidiary } from '../data/siteContent';

export function SubsidiaryCard({ subsidiary }: { subsidiary: Subsidiary }) {
  return (
    <Card className="rounded-[2rem] border border-white/10 bg-white/[0.10] shadow-[0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
      <Card.Content className="p-6">
        <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/14">
          <img
            src={subsidiary.image ?? subsidiary.logo}
            alt=""
            aria-hidden="true"
            className="h-28 w-full object-contain p-4"
            loading="lazy"
          />
        </div>
        <div className="mt-5 flex items-center gap-2">
          <span className="inline-block h-px w-5 bg-brand-red" aria-hidden="true" />
          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-brand-red">
            {subsidiary.tagline}
          </p>
        </div>
        <h3 className="mt-2 text-lg font-bold text-white">{subsidiary.name}</h3>
        <p className="mt-2 text-xs leading-6 text-white/55">{subsidiary.description}</p>
      </Card.Content>
    </Card>
  );
}
