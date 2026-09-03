import { openSourceRepos, certCategories } from "../data";
import SectionHeader from "./SectionHeader";

export default function OpenSource() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#e8e0d1] grain">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeader
          label="Public Record"
          number="13"
          title={<>Public code.<br /><em className="text-[#c8462e]">Real proof.</em></>}
          subtitle="I ship in public — 43+ repositories and 82+ verified certifications across nine domains."
        />

        <div className="mt-20 grid lg:grid-cols-12 gap-8">
          {/* Repos */}
          <div className="lg:col-span-7">
            <div className="flex items-end justify-between border-b border-[#14100b] pb-3">
              <h3 className="font-serif text-3xl">GitHub Repositories</h3>
              <a href="https://github.com/moekyawaung-tech" target="_blank" rel="noreferrer" className="font-mono text-xs uppercase tracking-widest hover:text-[#c8462e]">
                View all →
              </a>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-2">
              {openSourceRepos.map((r, i) => (
                <a
                  key={r}
                  href={`https://github.com/moekyawaung-tech/${r}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 px-4 py-3 rounded-full border border-[#14100b]/20 bg-[#faf6ec] hover:border-[#c8462e] hover:bg-[#14100b] hover:text-[#faf6ec] transition-colors"
                >
                  <span className="font-mono text-[10px] opacity-50">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-mono text-xs truncate flex-1">{r}</span>
                  <span className="opacity-40 group-hover:opacity-100">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5">
            <div className="flex items-end justify-between border-b border-[#14100b] pb-3">
              <h3 className="font-serif text-3xl">Certifications</h3>
              <span className="font-mono text-xs uppercase tracking-widest text-[#3a2f22]">82+ · Programming Hub</span>
            </div>
            <div className="mt-6 space-y-3">
              {certCategories.map((c, i) => (
                <div key={c.name} className="group">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-[#3a2f22]">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-lg">{c.icon}</span>
                      <span className="font-serif text-lg">{c.name}</span>
                    </div>
                    <span className="font-serif italic text-xl text-[#c8462e]">×{c.count}</span>
                  </div>
                  <div className="mt-2 h-px bg-[#14100b]/15 relative overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-[#c8462e] group-hover:bg-[#14100b] transition-colors"
                      style={{ width: `${Math.min(100, (c.count / 13) * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
