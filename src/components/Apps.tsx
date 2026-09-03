import { useState } from "react";
import { apps } from "../data";
import SectionHeader from "./SectionHeader";

export default function Apps() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <section id="apps" className="relative py-28 sm:py-36 grain">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeader
          label="Selected Works"
          number="04"
          title={<>Sixteen apps.<br /><em className="text-[#c8462e]">One catalogue.</em></>}
          subtitle="A curated index of shipped Android and web applications. Each entry links to a live repository."
        />

        {/* Editorial table */}
        <div className="mt-16 border-t-2 border-[#14100b]">
          {/* Header row */}
          <div className="hidden md:grid grid-cols-12 gap-4 py-3 border-b border-[#14100b]/25 text-[10px] font-mono uppercase tracking-widest text-[#3a2f22]">
            <div className="col-span-1">N°</div>
            <div className="col-span-3">Title</div>
            <div className="col-span-4">Description</div>
            <div className="col-span-2">Stack</div>
            <div className="col-span-1">Users</div>
            <div className="col-span-1 text-right">Link</div>
          </div>

          {apps.map((a) => (
            <a
              key={a.id}
              href={a.repo}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHover(a.id)}
              onMouseLeave={() => setHover(null)}
              className="group relative grid grid-cols-12 gap-4 py-6 border-b border-[#14100b]/15 items-center transition-colors hover:bg-[#14100b] hover:text-[#faf6ec]"
            >
              {/* Hover preview */}
              {hover === a.id && (
                <div
                  className="hidden lg:block absolute right-24 -top-6 w-52 h-52 rounded-2xl pointer-events-none z-10 shadow-2xl overflow-hidden animate-float"
                  style={{ background: `linear-gradient(135deg, ${a.color.includes("via") ? "#c8462e" : "#c8462e"}, #14100b)` }}
                >
                  <div className={`w-full h-full grid place-items-center text-7xl bg-gradient-to-br ${a.color}`}>
                    {a.emoji}
                  </div>
                </div>
              )}

              <div className="col-span-2 md:col-span-1 font-mono text-lg group-hover:text-[#d99a3a]">
                {String(a.id).padStart(2, "0")}
              </div>
              <div className="col-span-10 md:col-span-3 flex items-center gap-3">
                <span className="text-3xl">{a.emoji}</span>
                <div>
                  <div className="font-serif text-2xl leading-tight">{a.name}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest opacity-60">{a.tag}</div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 text-sm leading-relaxed opacity-90">
                {a.desc}
              </div>
              <div className="col-span-8 md:col-span-2 flex flex-wrap gap-1.5">
                {a.stack.slice(0, 3).map((s) => (
                  <span key={s} className="text-[10px] font-mono px-2 py-0.5 border border-current/30 rounded-full opacity-70">
                    {s}
                  </span>
                ))}
              </div>
              <div className="col-span-3 md:col-span-1 font-serif italic text-xl text-[#c8462e] group-hover:text-[#d99a3a]">
                {a.users}
              </div>
              <div className="col-span-1 md:col-span-1 text-right">
                <span className="inline-block w-10 h-10 border border-current rounded-full grid place-items-center group-hover:rotate-45 group-hover:bg-[#c8462e] group-hover:border-[#c8462e] transition-transform">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="font-mono uppercase tracking-widest text-[#3a2f22]">
            16 entries · Last updated 2026-01
          </div>
          <a href="https://github.com/moekyawaung-tech" target="_blank" rel="noreferrer" className="font-serif italic underline underline-offset-4 hover:text-[#c8462e]">
            Browse all 43 repositories on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
