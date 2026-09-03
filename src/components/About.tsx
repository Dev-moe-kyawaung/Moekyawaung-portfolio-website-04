import { profile, focusAreas, codeSnippet } from "../data";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 grain">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeader
          label="About the Studio"
          number="02"
          title={<>Engineer by trade,<br /><em className="text-[#c8462e]">founder by nature.</em></>}
          subtitle="A short biography, plus how I think about mobile as a craft — not a job."
        />

        <div className="mt-20 grid lg:grid-cols-12 gap-10">
          {/* Left — Editorial biography */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <p className="text-lg leading-[1.7] text-[#241d15]">
                <span className="font-serif text-5xl float-left mr-3 leading-none text-[#c8462e]">I</span>
                grew up in Tachileik on the Myanmar–Thailand border, teaching
                myself Java at eighteen with pirated PDFs and a second-hand
                Android phone. Eight years later I ship Kotlin code for
                startups and enterprises on both sides of that same border.
              </p>
              <p className="text-lg leading-[1.7] text-[#241d15]">
                My work sits at the intersection of{" "}
                <em className="hand-underline">architecture</em>, product
                intuition and craft. I obsess over build times, cold-start
                metrics, module boundaries and typography — usually in the
                same afternoon. Everything here is real, shipped, and
                measurable.
              </p>
            </div>

            {/* Info table */}
            <div className="border-t border-[#14100b]/20">
              {[
                { k: "Full name", v: profile.name, ex: profile.nameMM },
                { k: "Location", v: "Tachileik ↔ Bangkok", ex: "GMT+7" },
                { k: "Practice", v: "Android · AI · Security", ex: "Since 2019" },
                { k: "Currently", v: profile.currentlyBuilding, ex: "AI · TFLite" },
                { k: "Credentials", v: "82+ Certifications", ex: "9 domains" },
                { k: "Status", v: "Available Q1 · 2026", ex: "2 slots" },
              ].map((r) => (
                <div key={r.k} className="grid grid-cols-12 gap-4 py-4 border-b border-[#14100b]/15 items-baseline">
                  <div className="col-span-3 eyebrow">{r.k}</div>
                  <div className="col-span-6 font-serif text-xl">{r.v}</div>
                  <div className="col-span-3 text-right font-mono text-xs text-[#3a2f22]">{r.ex}</div>
                </div>
              ))}
            </div>

            {/* Philosophy pullquote */}
            <div className="relative py-10 px-8 bg-[#c8462e] text-[#faf6ec] rounded-2xl">
              <div className="absolute -top-4 left-8 chip bg-[#faf6ec] text-[#14100b]">Philosophy</div>
              <blockquote className="font-serif text-3xl sm:text-4xl leading-[1.15] italic">
                "{profile.philosophy}"
              </blockquote>
              <div className="mt-4 font-mono text-xs uppercase tracking-[0.25em] opacity-80">— Studio principle N°1</div>
            </div>
          </div>

          {/* Right — Code column */}
          <div className="lg:col-span-5">
            <div className="ink-card rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#faf6ec]/10">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c8462e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#d99a3a]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6b7a4f]" />
                </div>
                <div className="ml-3 text-[10px] font-mono uppercase tracking-widest text-[#faf6ec]/50">
                  MoeKyawAung.kt
                </div>
                <span className="ml-auto text-[10px] font-mono uppercase tracking-widest text-[#d99a3a]">
                  Kotlin · 2.0
                </span>
              </div>
              <pre className="p-6 text-[12.5px] leading-[1.75] font-mono overflow-x-auto">
                <code
                  className="text-[#faf6ec]/80"
                  dangerouslySetInnerHTML={{ __html: highlight(codeSnippet) }}
                />
              </pre>
            </div>

            {/* Focus grid */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {focusAreas.map((f, i) => (
                <div key={f.area} className="paper rounded-2xl p-5 lift">
                  <div className="flex items-start justify-between">
                    <div className="text-2xl">{f.icon}</div>
                    <div className="font-mono text-[10px] text-[#3a2f22]">0{i + 1}</div>
                  </div>
                  <div className="mt-4 font-serif text-lg">{f.area}</div>
                  <div className="mt-1 text-xs text-[#3a2f22] leading-relaxed">{f.stack}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function highlight(code: string) {
  return code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/(class|override|val|fun|listOf|mapOf|to|return)/g, `<span style="color:#d99a3a">$1</span>`)
    .replace(/("[^"]*")/g, `<span style="color:#e05a3d">$1</span>`)
    .replace(/\b(\d[\d_]*)\b/g, `<span style="color:#c8462e">$1</span>`)
    .replace(/(\/\/[^\n]*)/g, `<span style="color:#6b7a4f;font-style:italic">$1</span>`)
    .replace(/(MoeKyawAung|SeniorAndroidArchitect)/g, `<span style="color:#faf6ec;font-weight:600">$1</span>`);
}
