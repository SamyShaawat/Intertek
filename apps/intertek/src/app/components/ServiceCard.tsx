import type { Service } from '../pages/data';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1557bb]">{service.category}</p>
      <p className="mt-2 break-words text-sm font-semibold leading-6 text-slate-800">{service.title}</p>
    </div>
  );
}
