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
      <div className={`w-10 h-1 rounded-full mb-4 ${accent === 'red' ? 'bg-brand-red' : 'bg-brand-blue'}`} aria-hidden="true" />
      <Tag className="text-3xl md:text-4xl font-black text-white tracking-tight">{title}</Tag>
      {subtitle && (
        <p className="text-slate-400 mt-2 text-sm md:text-base max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
