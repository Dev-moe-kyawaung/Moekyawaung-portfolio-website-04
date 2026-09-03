const line1 = [
  "Kotlin", "Jetpack Compose", "Clean Architecture", "MVVM · MVI",
  "Multi-Module", "Hilt DI", "Coroutines", "Kotlin Flow",
];
const line2 = [
  "Firebase", "Retrofit", "Room", "GitHub Actions",
  "Fastlane", "TFLite", "Claude API", "OWASP MASVS L2",
];

export default function Marquee() {
  return (
    <section className="relative bg-[#14100b] text-[#faf6ec] py-8 overflow-hidden grain">
      <div className="relative flex whitespace-nowrap animate-marquee">
        {[...line1, ...line1, ...line1].map((it, i) => (
          <div key={i} className="flex items-center gap-8 px-6">
            <span className="font-serif italic text-5xl sm:text-6xl">{it}</span>
            <svg width="28" height="28" viewBox="0 0 40 40" className="text-[#c8462e]">
              <path d="M20 0 L23 17 L40 20 L23 23 L20 40 L17 23 L0 20 L17 17 Z" fill="currentColor" />
            </svg>
          </div>
        ))}
      </div>
      <div className="relative flex whitespace-nowrap animate-marquee-r mt-6 opacity-70">
        {[...line2, ...line2, ...line2].map((it, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <span className="font-mono uppercase tracking-[0.15em] text-lg text-[#d99a3a]">{it}</span>
            <span className="text-[#faf6ec]/30">/</span>
          </div>
        ))}
      </div>
    </section>
  );
}
