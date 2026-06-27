import type { Subsidiary } from '../data/siteContent';

export function SubsidiaryTile({ subsidiary }: { subsidiary: Subsidiary }) {
  return (
    <div className="group relative flex flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.10] p-6 backdrop-blur-xl transition-all duration-300 hover:border-brand-red/30 hover:bg-white/[0.14]">
      <div className="mb-5 flex h-14 items-center overflow-hidden">
        <img
          src={subsidiary.logo}
          alt={subsidiary.name}
          className="h-full w-auto max-w-[140px] object-contain"
        />
      </div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-red">
        {subsidiary.tagline}
      </p>
      <h3 className="mt-2 text-base font-bold leading-snug text-white">{subsidiary.name}</h3>
      <div className="my-4 h-px w-8 bg-brand-red/40 transition-all duration-500 group-hover:w-full group-hover:bg-brand-red/20" />
      <p className="text-sm leading-6 text-white/60">{subsidiary.description}</p>
    </div>
  );
}
