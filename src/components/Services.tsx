import { services } from "../data";
import SectionHeader from "./SectionHeader";

export default function Services() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#c8462e] text-[#faf6ec] grain">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeader
          invert
          label="Engagements"
          number="11"
          title={<>How I can<br /><em className="text-[#faf6ec]">help you ship.</em></>}
          subtitle="Six engagement models — from surgical architecture audits to full technical co-founding."
        />

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 border-t border-[#faf6ec]/25">
          {services.map((s, i) => (
            <a
              key={s.t}
              href="#contact"
              className={`group py-8 px-6 relative flex flex-col ${
                i % 3 !== 2 ? "lg:border-r border-[#faf6ec]/20" : ""
              } ${i < services.length - 3 ? "border-b border-[#faf6ec]/20" : ""} hover:bg-[#14100b] transition-colors`}
            >
              <div className="flex items-start justify-between">
                <span className="text-4xl">{s.icon}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">
                  Model {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-8 font-serif text-3xl leading-tight">{s.t}</h3>
              <p className="mt-4 text-sm opacity-90 leading-relaxed">{s.d}</p>
              <div className="mt-8 pt-6 border-t border-[#faf6ec]/25 flex items-center justify-between">
                <span className="font-serif italic text-lg">{s.p}</span>
                <span className="w-10 h-10 rounded-full border border-current grid place-items-center group-hover:rotate-45 group-hover:bg-[#faf6ec] group-hover:text-[#c8462e] transition-transform">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
