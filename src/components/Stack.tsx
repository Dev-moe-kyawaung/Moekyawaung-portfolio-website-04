import { techStack } from "../data";
import SectionHeader from "./SectionHeader";

export default function Stack() {
  return (
    <section className="relative py-28 sm:py-36 grain">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeader
          label="Instrument Panel"
          number="09"
          title={<>Battle-tested<br /><em className="text-[#c8462e]">arsenal.</em></>}
          subtitle="The tools, frameworks, and platforms I use daily to design and ship Android at scale."
        />

        <div className="mt-20 grid lg:grid-cols-2 gap-x-12 gap-y-16">
          {Object.entries(techStack).map(([cat, items], idx) => (
            <div key={cat}>
              <div className="flex items-baseline justify-between border-b border-[#14100b] pb-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-[#3a2f22]">
                    §{String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-3xl">{cat}</h3>
                </div>
                <span className="font-mono text-xs text-[#3a2f22]">{items.length} tools</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {items.map((t) => (
                  <span
                    key={t.n}
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#14100b]/25 bg-[#faf6ec] text-sm hover:border-[#c8462e] hover:bg-[#14100b] hover:text-[#faf6ec] transition-all cursor-default"
                  >
                    <span className="w-2 h-2 rounded-full" style={{ background: t.c }} />
                    {t.n}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
