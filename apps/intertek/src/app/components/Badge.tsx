import { ReactNode } from 'react';

type BadgeVariant = 'blue' | 'red' | 'steel' | 'success';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  blue: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
  red: 'bg-brand-red/10 text-brand-red border-brand-red/20',
  steel: 'bg-slate-800/60 text-slate-300 border-slate-700/40',
  success: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
};

export function Badge({ children, variant = 'blue', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
