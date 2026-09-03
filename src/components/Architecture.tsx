import { architectureDecisions } from "../data";
import SectionHeader from "./SectionHeader";

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-28 sm:py-36 bg-[#e8e0d1] grain">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeader
          label="The Practice"
          number="03"
          title={<>The <em className="text-[#c8462e]">systems</em><br />behind the apps.</>}
          subtitle="Eight opinionated decisions that shape every codebase I touch. All shipped. All measured."
        />

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {architectureDecisions.map((a, i) => (
            <div key={a.title} className="group">
              <div className="flex items-baseline justify-between border-b border-[#14100b]/25 pb-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#3a2f22]">
                  Decision {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl">{a.icon}</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl leading-tight text-[#14100b] group-hover:text-[#c8462e] transition-colors">
                {a.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[#241d15]">{a.desc}</p>
              <div className="mt-6 space-y-1.5">
                {a.metrics.map((m) => (
                  <div key={m.k} className="flex items-baseline justify-between text-xs">
                    <span className="font-mono uppercase tracking-widest text-[#3a2f22]">{m.k}</span>
                    <span className="font-serif italic text-lg text-[#c8462e]">{m.v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <ModuleDiagram />
      </div>
    </section>
  );
}

function ModuleDiagram() {
  const layers = [
    { n: ":app", desc: "Entry point · Navigation graph · DI aggregator", c: "#c8462e" },
    { n: ":feature-*", desc: "home · profile · chat · pos · settings · ...", c: "#4a2545" },
    { n: ":domain", desc: "Use-cases · Entities · Repositories (interfaces)", c: "#6b7a4f" },
    { n: ":data", desc: "Retrofit · Room · Firebase · Mappers · DTOs", c: "#d99a3a" },
    { n: ":core", desc: "Design system · UI kit · Networking · Utils", c: "#14100b" },
  ];
  return (
    <div className="mt-28 paper rounded-3xl shadow-soft overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-4 px-8 py-6 border-b border-[#14100b]/15">
        <div>
          <div className="eyebrow">Appendix A</div>
          <h3 className="mt-1 font-serif text-3xl">Multi-Module Topology</h3>
        </div>
        <div className="flex gap-2 font-mono text-[10px]">
          <span className="chip">42 modules</span>
          <span className="chip">Kotlin 2.0</span>
          <span className="chip">Gradle 8.9</span>
          <span className="chip">Build −68%</span>
        </div>
      </div>
      <div className="p-8 space-y-3">
        {layers.map((l, i) => (
          <div key={l.n} className="grid grid-cols-12 items-center gap-4">
            <div className="col-span-1 font-mono text-xs text-[#3a2f22]">L{i + 1}</div>
            <div
              className="col-span-11 rounded-xl p-5 flex items-center justify-between gap-4 border"
              style={{ borderColor: l.c + "40", background: `linear-gradient(90deg, ${l.c}18, transparent 90%)` }}
            >
              <div className="flex items-center gap-5 flex-1 min-w-0">
                <div className="font-mono text-sm font-bold shrink-0" style={{ color: l.c }}>{l.n}</div>
                <div className="w-px h-6 bg-[#14100b]/15" />
                <div className="text-sm text-[#241d15]">{l.desc}</div>
              </div>
              <div className="hidden md:flex gap-1">
                {Array.from({ length: 8 }).map((_, k) => (
                  <span key={k} className="w-1.5 h-7 rounded-sm" style={{ background: l.c, opacity: 0.12 + k * 0.11 }} />
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="pt-4 mt-4 border-t border-[#14100b]/15 flex items-center justify-between text-xs text-[#3a2f22]">
          <span className="font-mono">↓ Dependencies flow downward only. Enforced by Konsist tests.</span>
          <span className="font-serif italic">Fig. A.1 — Module topology, N = 42</span>
        </div>
      </div>
    </div>
  );
}
