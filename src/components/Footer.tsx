import { useEffect, useState } from "react";
import { profile } from "../data";

export default function Footer() {
  const [year, setYear] = useState("");
  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date();
      setYear(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Bangkok",
          hour12: false,
        }).format(now)
      );
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative bg-[#14100b] text-[#faf6ec] pt-16 pb-8 grain">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Big signature */}
        <div className="border-t border-[#faf6ec]/20 pt-10">
          <div className="big-word text-[18vw] leading-[0.82] text-[#faf6ec]/10 hover:text-[#c8462e]/40 transition-colors select-none">
            Moe Kyaw Aung
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 40 40" className="star-spin">
                <path d="M20 0 L23 17 L40 20 L23 23 L20 40 L17 23 L0 20 L17 17 Z" fill="#c8462e" />
              </svg>
              <div className="font-serif text-lg">Studio MKA</div>
            </div>
            <p className="mt-4 text-xs opacity-60 leading-relaxed">
              Independent design & engineering studio for Android.
              Kotlin · Compose · Clean Architecture · CI/CD · Firebase.
            </p>
          </div>
          <div>
            <div className="eyebrow text-[#d99a3a]">Navigate</div>
            <ul className="mt-4 space-y-2 font-serif italic">
              {["Index", "About", "Practice", "Works", "Ventures", "Contact"].map((l, i) => (
                <li key={l}>
                  <a href={`#${["hero", "about", "architecture", "apps", "startups", "contact"][i]}`} className="hover:text-[#d99a3a]">
                    → {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow text-[#d99a3a]">Reach</div>
            <ul className="mt-4 space-y-2 text-sm opacity-80 break-all">
              <li><a href={`mailto:${profile.primaryEmail}`} className="hover:text-[#d99a3a] font-mono">{profile.primaryEmail}</a></li>
              <li className="font-mono">{profile.phones[0]}</li>
              <li className="font-serif italic">{profile.location}</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow text-[#d99a3a]">Studio time</div>
            <div className="mt-4 font-serif text-4xl tabular-nums text-[#d99a3a]">{year || "—"}</div>
            <div className="text-xs opacity-60 mt-1">Bangkok · GMT+7</div>
            <div className="mt-3 chip border-[#6b7a4f] text-[#a8c07a]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6b7a4f] inline-block mr-2" />
              Open · Q1 2026
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#faf6ec]/15 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] font-mono uppercase tracking-widest opacity-60">
          <div>© MMXXVI · Moe Kyaw Aung · All rights reserved</div>
          <div className="italic font-serif normal-case tracking-normal opacity-90">"Code with culture. Build with purpose."</div>
          <div>v.26.02 · Built in Bangkok</div>
        </div>
      </div>
    </footer>
  );
}
