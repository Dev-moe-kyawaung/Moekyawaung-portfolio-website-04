import { githubAccounts, lovableApps, socials, emailCollection } from "../data";
import SectionHeader from "./SectionHeader";

export default function Network() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#e8e0d1] grain">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeader
          label="Digital Footprint"
          number="14"
          title={<>Presence across<br /><em className="text-[#c8462e]">the wider web.</em></>}
          subtitle="43 GitHub pages · 38 Lovable apps · 20 email endpoints · 16 socials. One engineer, many mediums."
        />

        {/* Socials */}
        <div className="mt-20">
          <SubTitle text="Social Networks" count={socials.length} n="14.1" />
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 p-4 rounded-2xl bg-[#faf6ec] border border-[#14100b]/15 hover:bg-[#14100b] hover:text-[#faf6ec] transition-colors"
              >
                <div className="w-10 h-10 rounded-full grid place-items-center bg-[#c8462e]/10 text-[#c8462e] font-mono text-xs uppercase font-bold">
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-serif text-lg leading-tight">{s.name}</div>
                  <div className="text-[10px] font-mono opacity-60 truncate">{s.url.replace(/^https?:\/\//, "")}</div>
                </div>
                <span className="opacity-40 group-hover:opacity-100">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <SubTitle text="GitHub Page Portfolios" count={githubAccounts.length} n="14.2" />
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {githubAccounts.map((g, i) => (
              <a
                key={g}
                href={g}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 px-3 py-2 rounded-full bg-[#faf6ec] border border-[#14100b]/15 hover:border-[#c8462e] text-[11px] font-mono"
              >
                <span className="text-[#6b7a4f]">●</span>
                <span className="opacity-70 group-hover:opacity-100 group-hover:text-[#c8462e] truncate">
                  {g.replace(/^https?:\/\//, "").replace(".github.io/", "")}
                </span>
                <span className="ml-auto opacity-40">{String(i + 1).padStart(2, "0")}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <SubTitle text="Lovable Web Apps" count={lovableApps.length} n="14.3" />
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {lovableApps.map((l, i) => (
              <a
                key={l + i}
                href={l}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 px-3 py-2 rounded-full bg-[#faf6ec] border border-[#14100b]/15 hover:border-[#4a2545] text-[11px] font-mono"
              >
                <span className="text-[#4a2545]">◆</span>
                <span className="opacity-70 group-hover:opacity-100 group-hover:text-[#4a2545] truncate">
                  {l.replace(/^https?:\/\//, "").replace(".lovable.app/", "").replace(".lovable.app", "")}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <SubTitle text="Email Aliases" count={emailCollection.length} n="14.4" />
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {emailCollection.map((e) => (
              <a
                key={e}
                href={`mailto:${e}`}
                className="group flex items-center gap-2 px-3 py-3 rounded-full bg-[#faf6ec] border border-[#14100b]/15 hover:border-[#c8462e]"
              >
                <span className="text-[#c8462e]">✉</span>
                <span className="font-mono text-xs opacity-80 group-hover:text-[#c8462e] truncate">{e}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SubTitle({ text, count, n }: { text: string; count: number; n: string }) {
  return (
    <div className="flex items-end justify-between border-b border-[#14100b] pb-2">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-[#3a2f22]">§{n}</span>
        <h3 className="font-serif text-2xl">{text}</h3>
      </div>
      <span className="font-mono text-xs text-[#3a2f22]">{count} entries</span>
    </div>
  );
}
