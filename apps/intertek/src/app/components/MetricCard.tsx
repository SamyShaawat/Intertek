import { Card } from '@heroui/react';

export function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <Card className="rounded-xl border border-slate-200 bg-white">
      <Card.Content className="p-6">
        <p className="text-4xl font-black tracking-tight text-brand-navy">{value}</p>
        <div className="mt-2 h-[2px] w-8 rounded-full bg-brand-red" />
        <p className="mt-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{label}</p>
      </Card.Content>
    </Card>
  );
}
