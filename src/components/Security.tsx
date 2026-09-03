import SectionHeader from "./SectionHeader";

const layers = [
  { t: "Transport", d: "TLS 1.3 · SSL Pinning · Certificate Transparency" },
  { t: "Data at rest", d: "EncryptedSharedPrefs · Keystore · SQLCipher" },
  { t: "Authentication", d: "OAuth2 · Biometrics · Session rotation" },
  { t: "Code protection", d: "R8 · Obfuscation · Anti-tamper" },
  { t: "Runtime", d: "Root / emulator detection · Frida hook guards" },
  { t: "Compliance", d: "OWASP MASVS L2 · GDPR · Play data safety" },
];

const testStrategy = [
  { l: "Unit tests", v: "3,200+", d: "JUnit · MockK · Turbine", pct: 95 },
  { l: "Integration", v: "620+", d: "Robolectric · Room in-memory", pct: 82 },
  { l: "UI tests", v: "480+", d: "Espresso · Compose UI test", pct: 74 },
  { l: "Screenshot", v: "1,100+", d: "Paparazzi · Roborazzi", pct: 88 },
  { l: "E2E", v: "60+", d: "Maestro flows · real devices", pct: 66 },
];

export default function Security() {
  return (
    <section className="relative py-28 sm:py-36 grain">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeader
          label="Hardening"
          number="08"
          title={<>Tested. Hardened.<br /><em className="text-[#c8462e]">Shipped.</em></>}
          subtitle="OWASP MASVS L2, defense-in-depth, and a test pyramid that actually holds weight."
        />

        <div className="mt-20 grid lg:grid-cols-12 gap-6">
          {/* Security layers — vertical stack */}
          <div className="lg:col-span-6 paper rounded-3xl p-8 shadow-soft">
            <div className="flex items-baseline justify-between border-b border-[#14100b]/15 pb-3">
              <div>
                <div className="eyebrow">Compendium A</div>
                <h3 className="font-serif text-2xl mt-1">Six-Layer Defense</h3>
              </div>
              <span className="chip bg-[#c8462e] text-[#faf6ec] border-[#c8462e]">MASVS · L2</span>
            </div>
            <div className="mt-6 space-y-4">
              {layers.map((l, i) => (
                <div key={l.t} className="grid grid-cols-12 gap-3 items-baseline group">
                  <div className="col-span-2 font-serif text-4xl text-[#c8462e]/60 group-hover:text-[#c8462e]">
                    L{i + 1}
                  </div>
                  <div className="col-span-10 pb-4 border-b border-[#14100b]/15 group-hover:border-[#c8462e]/40 transition-colors">
                    <div className="font-serif text-xl">{l.t}</div>
                    <div className="text-sm text-[#3a2f22] mt-0.5">{l.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Test pyramid */}
          <div className="lg:col-span-6 ink-card rounded-3xl p-8">
            <div className="flex items-baseline justify-between border-b border-[#faf6ec]/15 pb-3">
              <div>
                <div className="eyebrow text-[#faf6ec]/60">Compendium B</div>
                <h3 className="font-serif text-2xl mt-1">Testing Pyramid</h3>
              </div>
              <span className="font-serif italic text-[#d99a3a]">5,400+ tests · 92% coverage</span>
            </div>
            <div className="mt-8 space-y-6">
              {testStrategy.map((t) => (
                <div key={t.l}>
                  <div className="flex items-baseline justify-between mb-2">
                    <div>
                      <div className="font-serif text-lg">{t.l}</div>
                      <div className="text-xs opacity-60">{t.d}</div>
                    </div>
                    <div className="font-serif italic text-3xl text-[#d99a3a]">{t.v}</div>
                  </div>
                  <div className="h-[3px] bg-[#faf6ec]/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#c8462e] via-[#d99a3a] to-[#6b7a4f]"
                      style={{ width: `${t.pct}%` }}
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
