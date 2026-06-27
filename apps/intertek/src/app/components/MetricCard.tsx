import { Card } from '@heroui/react';

export function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <Card className="group rounded-[1.75rem] border border-white/70 bg-white/85 shadow-[0_16px_50px_rgba(10,28,52,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,28,52,0.12)]">
      <Card.Content className="p-6 sm:p-7">
        <div className="flex h-full flex-col justify-between gap-8">
          <div className="h-1.5 w-10 rounded-full bg-gradient-to-r from-brand-red to-brand-blue transition-all duration-500 group-hover:w-16" />
          <div>
            <p className="font-display text-5xl italic font-normal leading-none tracking-tight text-brand-navy sm:text-6xl">
              {value}
            </p>
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              {label}
            </p>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
}
