import type { ServiceCategory } from '../pages/data';

export function ServicePill({ title, category }: { title: string; category: ServiceCategory }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c41230]">{category}</p>
      <p className="mt-2 break-words text-sm font-semibold leading-6 text-slate-800">{title}</p>
    </div>
  );
}
