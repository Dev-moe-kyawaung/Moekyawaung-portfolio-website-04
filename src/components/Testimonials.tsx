import { useState } from "react";
import { testimonials } from "../data";
import SectionHeader from "./SectionHeader";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <section className="relative py-28 sm:py-36 grain">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeader
          label="Praise"
          number="12"
          title={<>Trusted by <em className="text-[#c8462e]">founders</em><br />&amp; engineering leads.</>}
        />

        <div className="mt-20 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <div className="text-[160px] leading-none font-serif text-[#c8462e]">"</div>
            <blockquote className="-mt-16 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.2] text-[#14100b]">
              {t.quote}
            </blockquote>
            <div className="mt-10 flex items-center gap-4">
              <img src={t.avatar} alt="" className="w-16 h-16 rounded-full object-cover ring-1 ring-[#14100b]/20" />
              <div>
                <div className="font-serif text-xl italic">— {t.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#3a2f22] mt-1">{t.role}</div>
              </div>
              <div className="ml-auto text-[#c8462e] text-xl">★ ★ ★ ★ ★</div>
            </div>
          </div>
          <div className="lg:col-span-4 space-y-2">
            <div className="eyebrow border-b border-[#14100b]/20 pb-3">Voices · {i + 1} / {testimonials.length}</div>
            {testimonials.map((tt, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`w-full text-left flex items-center gap-3 p-3 rounded-2xl border transition-all ${
                  i === idx ? "border-[#c8462e] bg-[#faf6ec]" : "border-[#14100b]/15 hover:border-[#14100b]/40"
                }`}
              >
                <img src={tt.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="font-serif italic">{tt.name}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#3a2f22] truncate">{tt.role}</div>
                </div>
                {i === idx && <span className="w-1.5 h-1.5 rounded-full bg-[#c8462e]" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
