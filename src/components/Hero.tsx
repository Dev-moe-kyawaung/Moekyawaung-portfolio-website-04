import { useEffect, useState } from "react";
import { profile, heroStats } from "../data";

const rotator = ["Architect.", "Founder.", "Kotlin Native.", "Ships in Production."];

export default function Hero() {
  const [word, setWord] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setWord((w) => (w + 1) % rotator.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="relative pt-32 sm:pt-40 pb-20 grain overflow-hidden">
      {/* Editorial column rules */}
      <div className="absolute inset-x-0 top-24 bottom-0 pointer-events-none opacity-[0.08]">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 h-full grid grid-cols-12 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-[#14100b] last:border-r-0" />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Top ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#14100b]/20">
          <div className="flex items-center gap-3">
            <span className="chip">Issue N°26 · Vol. VIII</span>
            <span className="hidden sm:inline eyebrow">Portfolio / 2026</span>
          </div>
          <div className="flex items-center gap-3 eyebrow">
            <span className="w-2 h-2 rounded-full bg-[#c8462e]" />
            <span>The Senior Android Edition</span>
          </div>
        </div>

        {/* Magazine cover title */}
        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="eyebrow">A Study in Craft — Kotlin · Compose · Clean Architecture</div>
            <h1 className="mt-6 big-word text-[19vw] sm:text-[15vw] lg:text-[10.5vw] leading-[0.82]">
              <span className="block">The</span>
              <span className="block italic text-[#c8462e]">Architect</span>
              <span className="block">
                who ships{" "}
                <span className="relative inline-block">
                  <span className="italic">at scale.</span>
                </span>
              </span>
            </h1>

            <div className="mt-10 grid sm:grid-cols-12 gap-6 items-end">
              <div className="sm:col-span-7">
                <p className="text-lg leading-[1.55] text-[#241d15]">
                  <span className="font-serif text-3xl float-left mr-2 leading-none pt-1 text-[#c8462e]">M</span>
                  oe Kyaw Aung is a Senior Android Architect &amp; technical
                  founder from Myanmar, currently between Tachileik and Bangkok.
                  Over eight years he has designed, hardened and shipped 43+
                  production apps — from multi-module Kotlin monorepos to
                  on-device ML — used by more than <em>ten million people</em>.
                </p>
              </div>
              <div className="sm:col-span-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-1 ring-[#14100b]/20 shrink-0">
                    <img src={profile.avatar} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="eyebrow">Written &amp; built by</div>
                    <div className="font-serif italic text-lg">Moe Kyaw Aung</div>
                    <div className="text-xs text-[#3a2f22]">Photography · Cloudinary Studio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portrait column */}
          <div className="lg:col-span-4 relative">
            <div className="relative">
              <div className="absolute -top-4 -left-4 chip bg-[#c8462e] text-[#faf6ec] border-[#c8462e] z-10">
                Feature 001
              </div>
              <div className="relative overflow-hidden">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-b from-transparent via-transparent to-[#c8462e]/20" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-[#faf6ec]">
                  <div className="font-mono text-[10px] uppercase tracking-widest">
                    MKA · Portrait / 2026
                  </div>
                  <div className="font-serif italic text-sm">"Code with culture."</div>
                </div>
              </div>
              {/* Floating pill */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 rotate-3 animate-float" style={{ ["--r" as string]: "3deg" }}>
                <div className="paper shadow-soft px-4 py-3 rounded-full flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#c8462e] animate-pulse" />
                  <div>
                    <div className="text-[9px] font-mono uppercase tracking-widest text-[#3a2f22]">Currently</div>
                    <div className="font-serif italic text-sm">{profile.currentlyBuilding}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rotating word */}
            <div className="mt-10 hidden lg:block">
              <div className="eyebrow">Roles</div>
              <div className="mt-2 font-serif text-4xl leading-tight">
                Senior Android{" "}
                <span key={word} className="italic text-[#c8462e] inline-block">
                  {rotator[word]}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar — stats & CTA */}
        <div className="mt-16 pt-8 border-t border-[#14100b]/20 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {heroStats.map((s, i) => (
              <div key={s.l} className="border-l border-[#14100b]/20 pl-4">
                <div className="eyebrow">Fig. 0{i + 1}</div>
                <div className="mt-2 font-serif text-4xl sm:text-5xl">{s.n}</div>
                <div className="text-xs text-[#3a2f22] mt-1">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href="#apps"
              className="group inline-flex items-center justify-between px-6 py-4 bg-[#14100b] text-[#faf6ec] rounded-full font-serif text-lg italic hover:bg-[#c8462e] transition-colors"
            >
              <span>Enter the works</span>
              <span className="w-8 h-8 rounded-full bg-[#faf6ec] text-[#14100b] grid place-items-center group-hover:rotate-45 transition-transform">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-between px-6 py-4 border border-[#14100b] rounded-full font-serif text-lg italic hover:bg-[#14100b] hover:text-[#faf6ec] transition-colors"
            >
              <span>Or say hello</span>
              <span className="w-8 h-8 rounded-full border border-current grid place-items-center group-hover:rotate-45 transition-transform">
                ✳
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
