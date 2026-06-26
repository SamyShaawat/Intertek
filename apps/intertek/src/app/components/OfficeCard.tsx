import type { Office } from '../pages/data';

export function OfficeCard({ office }: { office: Office }) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-1.5">
          <img src="/img/branding/intertek-group-mark.png" alt="" aria-hidden="true" className="h-full w-full object-contain" />
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#1557bb]">{office.label}</p>
          <h3 className="break-words text-lg font-bold leading-6 text-[#0b1f3b]">{office.city}</h3>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c41230]">{office.country}</p>
        </div>
      </div>
      <div className="mt-4 space-y-3 border-t border-slate-200 pt-4">
        <address className="not-italic text-sm leading-6 text-slate-600 break-words hyphens-auto">{office.address}</address>
      </div>
      <a
        href={`mailto:${office.email}`}
        className="mt-auto pt-4 block break-words text-xs font-semibold leading-5 text-[#0b1f3b] hover:underline"
      >
        {office.email}
      </a>
    </article>
  );
}
