import { Card } from '@heroui/react';

export function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <Card className="rounded-[1.75rem] border border-white/70 bg-white/85 shadow-[0_16px_50px_rgba(10,28,52,0.08)] backdrop-blur-xl">
      <Card.Content className="p-6">
        <div className="flex h-full flex-col justify-between gap-5">
          <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-brand-red to-brand-blue" />
          <div>
            <p className="text-4xl font-black tracking-tight text-brand-navy">{value}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{label}</p>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
}
