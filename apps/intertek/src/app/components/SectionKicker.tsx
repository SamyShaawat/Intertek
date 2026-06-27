export function SectionKicker({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <p
      className={[
        'text-[11px] font-semibold uppercase tracking-[0.34em]',
        light ? 'text-white/66' : 'text-brand-blue',
      ].join(' ')}
    >
      {text}
    </p>
  );
}
