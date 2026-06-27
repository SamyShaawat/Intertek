import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionKicker } from '../../components/SectionKicker';
import { SubsidiaryTile } from '../../components/SubsidiaryTile';
import { subsidiaries } from '../../data/siteContent';

export function HomeGroupStructureSection() {
  return (
    <ScrollReveal>
      <section className="space-y-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <SectionKicker text="Group structure" />
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Three entities.<br />One operating standard.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/66 sm:text-right">
            Legal Marine Tek, Intertek Maritime Bureau, and Intertek Maritime Middle East — independent entities, unified mandate.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {subsidiaries.map((item) => (
            <SubsidiaryTile key={item.name} subsidiary={item} />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
