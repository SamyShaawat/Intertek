import type { Subsidiary } from '../pages/data';

export function SubsidiaryCard({ subsidiary }: { subsidiary: Subsidiary }) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-24 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
        <img src={subsidiary.logo} alt="" aria-hidden="true" className="h-full w-full object-contain" />
      </div>
      <h3 className="mt-6 text-xl font-bold text-[#0b1f3b]">{subsidiary.name}</h3>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#c41230]">{subsidiary.tagline}</p>
      <p className="mt-4 text-sm leading-7 text-slate-600">{subsidiary.description}</p>
    </article>
  );
}
