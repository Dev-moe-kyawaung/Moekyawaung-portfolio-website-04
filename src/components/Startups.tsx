import { startupExperiments } from "../data";
import SectionHeader from "./SectionHeader";

const growthMetrics = [
  { l: "Total downloads", v: "5.2M+", d: "across shipped apps" },
  { l: "Waitlist", v: "12,000", d: "MoekyawTranslator" },
  { l: "Paying merchants", v: "1,200", d: "POS Ultimate" },
  { l: "MAU peak", v: "410K", d: "Daily Planner" },
];

export default function Startups() {
  return (
    <section id="startups" className="relative py-28 sm:py-36 bg-[#14100b] text-[#faf6ec] grain overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeader
          invert
          label="Ventures"
          number="05"
          title={<>I don't just code —<br /><em className="text-[#d99a3a]">I ship startups.</em></>}
          subtitle="From MVP to revenue. Every experiment below shipped, measured and iterated in public."
        />

        {/* Metric slabs */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-[#faf6ec]/20">
          {growthMetrics.map((g, i) => (
            <div key={g.l} className={`py-8 pr-6 ${i > 0 ? "lg:border-l border-[#faf6ec]/15 lg:pl-6" : ""}`}>
              <div className="eyebrow text-[#d99a3a]">Metric {i + 1}</div>
              <div className="mt-3 font-serif text-6xl leading-none">{g.v}</div>
              <div className="mt-3 text-sm font-serif italic">{g.l}</div>
              <div className="text-[10px] font-mono uppercase tracking-widest opacity-60 mt-1">{g.d}</div>
            </div>
          ))}
        </div>

        {/* Startup catalogue */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startupExperiments.map((s, i) => (
            <article key={s.name} className="border border-[#faf6ec]/15 rounded-2xl p-7 lift hover:border-[#d99a3a]/60">
              <div className="flex items-center justify-between">
                <span className="text-3xl">{s.icon}</span>
                <span
                  className={`text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${
                    s.stage === "Live"
                      ? "border-[#6b7a4f] text-[#a8c07a] bg-[#6b7a4f]/10"
                      : s.stage === "Beta"
                      ? "border-[#d99a3a] text-[#d99a3a] bg-[#d99a3a]/10"
                      : "border-[#c8462e] text-[#e05a3d] bg-[#c8462e]/10"
                  }`}
                >
                  {s.stage}
                </span>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-mono text-xs opacity-40">V.0{i + 1}</span>
                <h3 className="font-serif text-2xl">{s.name}</h3>
              </div>
              <p className="mt-3 text-sm opacity-80 leading-relaxed">{s.desc}</p>
              <div className="mt-6 pt-6 border-t border-[#faf6ec]/10 flex items-baseline justify-between">
                <div>
                  <div className="eyebrow text-[#faf6ec]/50">Growth</div>
                  <div className="font-serif italic text-lg text-[#d99a3a] mt-1">{s.growth}</div>
                </div>
                <button className="font-mono text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-[#d99a3a]">
                  Case study →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* MVP Playbook */}
        <MVPProcess />
      </div>
    </section>
  );
}

function MVPProcess() {
  const steps = [
    { n: "01", t: "Discovery", d: "User interviews · competitor scan · JTBD framework.", w: "1 week" },
    { n: "02", t: "Design", d: "Figma prototype · design system · user flows.", w: "1 week" },
    { n: "03", t: "Build", d: "Kotlin + Compose + Firebase · weekly demos.", w: "4–6 weeks" },
    { n: "04", t: "Ship", d: "Play Console rollout · Remote Config · launch.", w: "1 week" },
    { n: "05", t: "Learn", d: "Amplitude / Firebase A/B · weekly reviews.", w: "Ongoing" },
  ];
  return (
    <div className="mt-28">
      <div className="grid lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8">
          <div className="eyebrow text-[#d99a3a]">MVP Playbook</div>
          <h3 className="mt-3 font-serif text-5xl sm:text-6xl leading-[1.02]">
            Idea → Play Store<br />in <em className="text-[#d99a3a]">eight weeks.</em>
          </h3>
        </div>
        <div className="lg:col-span-4 text-sm opacity-70 leading-relaxed">
          A tight, opinionated process refined over five founding-engineer
          engagements. Fixed price, fixed scope, fixed release date.
        </div>
      </div>

      <div className="mt-14 grid md:grid-cols-5 gap-4 relative">
        <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-[#faf6ec]/20" />
        {steps.map((s) => (
          <div key={s.n} className="relative">
            <div className="w-12 h-12 rounded-full border border-[#d99a3a] bg-[#14100b] text-[#d99a3a] grid place-items-center font-mono text-sm relative z-10">
              {s.n}
            </div>
            <div className="mt-5 font-serif text-2xl">{s.t}</div>
            <div className="mt-2 text-xs opacity-70 leading-relaxed">{s.d}</div>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-[#d99a3a]">{s.w}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
