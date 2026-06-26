import type { Subsidiary } from '../pages/data';

export function SubsidiaryTile({ subsidiary }: { subsidiary: Subsidiary }) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
      <div className="flex h-20 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-4 py-3">
        <img src={subsidiary.logo} alt="" aria-hidden="true" className="h-full w-full object-contain" />
      </div>
      <p className="mt-4 text-sm font-semibold text-[#0b1f3b]">{subsidiary.name}</p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c41230]">{subsidiary.tagline}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600">{subsidiary.description}</p>
    </div>
  );
}
