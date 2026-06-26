interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: 'blue' | 'red';
  as?: 'h1' | 'h2';
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  accent = 'blue',
  as: Tag = 'h2',
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <div
        className={`mb-4 h-1 w-10 rounded-full ${accent === 'red' ? 'bg-brand-red' : 'bg-brand-blue'}`}
        aria-hidden="true"
      />
      <Tag className="text-3xl font-black tracking-tight text-brand-navy md:text-4xl">{title}</Tag>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">{subtitle}</p>
      )}
    </div>
  );
}
