import { timeline } from "../data";
import SectionHeader from "./SectionHeader";

export default function Timeline() {
  return (
    <section className="relative py-28 sm:py-36 grain">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeader
          label="Chronicle"
          number="10"
          title={<>From Java rookie to<br /><em className="text-[#c8462e]">Senior Architect.</em></>}
          subtitle="Eight years of shipping Android. This is the record."
        />

        <div className="mt-20 border-t border-[#14100b]">
          {timeline.map((t, i) => (
            <div key={t.year} className="group grid grid-cols-12 gap-4 py-8 border-b border-[#14100b]/15 items-center hover:bg-[#14100b] hover:text-[#faf6ec] transition-colors">
              <div className="col-span-3 md:col-span-2">
                <div className="font-serif text-5xl md:text-6xl group-hover:text-[#d99a3a] transition-colors">
                  {t.year}
                </div>
              </div>
              <div className="col-span-9 md:col-span-6">
                <div className="font-mono text-[10px] uppercase tracking-widest opacity-60">
                  Chapter {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-1 font-serif text-2xl md:text-3xl leading-tight">{t.title}</h3>
              </div>
              <div className="col-span-12 md:col-span-4 text-sm leading-relaxed opacity-90">
                {t.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
