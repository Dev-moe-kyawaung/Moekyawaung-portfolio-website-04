import { useState } from "react";
import { showreelVideos, galleryImages } from "../data";
import SectionHeader from "./SectionHeader";

export default function Showreel() {
  const [active, setActive] = useState(0);
  return (
    <section id="showreel" className="relative py-28 sm:py-36 bg-[#e8e0d1] grain">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeader
          label="Motion Archive"
          number="06"
          title={<>Showreel<br /><em className="text-[#c8462e]">MMXXVI.</em></>}
          subtitle="Product demos, launch clips, motion and UI kinetics from shipped apps."
        />

        <div className="mt-20 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden bg-[#14100b] shadow-soft">
            <video
              key={active}
              src={showreelVideos[active]}
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video object-cover"
            />
            <div className="absolute top-4 left-4 chip bg-[#c8462e] text-[#faf6ec] border-[#c8462e]">
              Now Playing · Reel {String(active + 1).padStart(2, "0")}
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-[#faf6ec]">
              <div>
                <div className="eyebrow text-[#faf6ec]/70">Selected motion</div>
                <div className="font-serif italic text-2xl mt-1">MKA Studio — {String(active + 1).padStart(2, "0")} / {String(showreelVideos.length).padStart(2, "0")}</div>
              </div>
              <div className="flex items-center gap-2 chip bg-[#14100b] text-[#faf6ec] border-[#faf6ec]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8462e] animate-pulse" />
                Live
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-3 content-start">
            {showreelVideos.map((v, i) => (
              <button
                key={v}
                onClick={() => setActive(i)}
                className={`relative rounded-2xl overflow-hidden transition-all ${
                  i === active ? "ring-2 ring-[#c8462e] scale-[0.98]" : "ring-1 ring-[#14100b]/15 hover:ring-[#14100b]/50"
                }`}
              >
                <video src={v} muted playsInline className="w-full aspect-video object-cover" />
                <div className={`absolute inset-0 grid place-items-center text-sm ${i === active ? "bg-[#14100b]/40 text-[#faf6ec]" : "bg-[#14100b]/20 text-[#faf6ec]/80 hover:bg-[#14100b]/40"}`}>
                  <span className="font-mono text-[10px] uppercase tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Visual archive mosaic */}
        <div className="mt-24">
          <div className="flex items-end justify-between border-b border-[#14100b] pb-4">
            <div>
              <div className="eyebrow">Plates</div>
              <h3 className="mt-1 font-serif text-4xl">Visual Archive</h3>
            </div>
            <span className="font-mono text-xs text-[#3a2f22]">
              {galleryImages.length} plates · MMXXVI Vol. VIII
            </span>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[140px] gap-3">
            {galleryImages.map((g, i) => {
              const spans = [
                "row-span-2 col-span-2",
                "row-span-1 col-span-1",
                "row-span-1 col-span-1",
                "row-span-2 col-span-1",
                "row-span-1 col-span-2",
              ];
              const cls = spans[i % spans.length];
              return (
                <figure key={g} className={`relative rounded-xl overflow-hidden group ${cls}`}>
                  <img src={g} loading="lazy" alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[900ms]" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-[#14100b]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#faf6ec]">
                      Plate {String(i + 1).padStart(3, "0")}
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
