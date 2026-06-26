import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: string;
}

export function Card({ children, className = '', hover = false, padding = 'p-5 md:p-6' }: CardProps) {
  return (
    <div
      className={`
        rounded-[1.75rem] border border-white/70 bg-white/82 shadow-[0_18px_60px_rgba(10,28,52,0.08)] backdrop-blur-xl ${padding}
        ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/15 hover:shadow-[0_22px_70px_rgba(10,28,52,0.12)]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
