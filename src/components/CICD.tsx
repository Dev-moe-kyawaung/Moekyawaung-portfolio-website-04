import SectionHeader from "./SectionHeader";

const pipeline = [
  { n: "Lint", t: "Detekt · ktlint · Android Lint", dur: "45s" },
  { n: "Build", t: "assembleDebug + config cache", dur: "2m 10s" },
  { n: "Unit", t: "3,200+ JUnit + MockK", dur: "1m 40s" },
  { n: "Screenshot", t: "Paparazzi · 1,100 goldens", dur: "1m 05s" },
  { n: "Instrumented", t: "Espresso + Compose UI · matrix", dur: "3m 20s" },
  { n: "Bundle", t: "R8 + shrinkResources · Play Signing", dur: "1m 15s" },
  { n: "Deploy", t: "Play Console rollout", dur: "40s" },
];

const yamlSnippet = `name: android-ci
on: [push, pull_request]

jobs:
  quality:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        api: [26, 30, 34]
    steps:
      - uses: actions/checkout@v4
      - uses: gradle/actions/setup-gradle@v4
      - run: ./gradlew detekt lintDebug
      - run: ./gradlew testDebugUnitTest
      - run: ./gradlew verifyPaparazziDebug
      - name: Instrumented
        uses: reactivecircus/android-emulator-runner@v2
        with:
          api-level: \${{ matrix.api }}
          script: ./gradlew connectedDebugAndroidTest
      - run: ./gradlew bundleRelease
      - name: Play Console rollout
        uses: r0adkll/upload-google-play@v1
        with:
          track: internal
          releaseFile: app/build/outputs/bundle/release/*.aab`;

export default function CICD() {
  return (
    <section className="relative py-28 sm:py-36 grain">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeader
          label="Delivery"
          number="07"
          title={<>Ship 5× per week.<br /><em className="text-[#c8462e]">Zero rollbacks.</em></>}
          subtitle="Every commit runs through a seven-stage matrix pipeline. This is the production blueprint."
        />

        <div className="mt-20 grid lg:grid-cols-12 gap-6">
          {/* Pipeline */}
          <div className="lg:col-span-5 paper rounded-3xl shadow-soft p-7">
            <div className="flex items-center justify-between border-b border-[#14100b]/15 pb-3">
              <div className="font-mono text-xs">
                <span className="text-[#3a2f22]">workflow</span>
                <span className="mx-2 text-[#c8462e]">·</span>
                <span className="font-bold">android-ci · main</span>
              </div>
              <div className="flex items-center gap-2 chip bg-[#6b7a4f]/15 border-[#6b7a4f] text-[#6b7a4f]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6b7a4f] animate-pulse" />
                Passing
              </div>
            </div>
            <div className="mt-5 space-y-2">
              {pipeline.map((p, i) => (
                <div key={p.n} className="grid grid-cols-12 gap-3 items-center py-2 border-b border-[#14100b]/10 last:border-0">
                  <div className="col-span-1 font-mono text-[10px] text-[#3a2f22]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="col-span-1 text-[#6b7a4f]">✓</div>
                  <div className="col-span-6">
                    <div className="font-serif text-lg leading-tight">{p.n}</div>
                    <div className="text-[11px] text-[#3a2f22]">{p.t}</div>
                  </div>
                  <div className="col-span-4 text-right font-mono text-xs text-[#c8462e]">{p.dur}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-[#14100b]/15 flex items-baseline justify-between">
              <span className="eyebrow">Total</span>
              <span className="font-serif italic text-2xl text-[#c8462e]">10m 55s</span>
            </div>
          </div>

          {/* YAML */}
          <div className="lg:col-span-7 ink-card rounded-3xl overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#faf6ec]/10">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c8462e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#d99a3a]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#6b7a4f]" />
              </div>
              <div className="ml-3 text-[10px] font-mono uppercase tracking-widest text-[#faf6ec]/50">
                .github/workflows/android-ci.yml
              </div>
              <span className="ml-auto text-[10px] font-mono uppercase tracking-widest text-[#d99a3a]">
                YAML · 43 lines
              </span>
            </div>
            <pre className="p-6 text-[12.5px] leading-[1.75] font-mono overflow-x-auto">
              <code
                className="text-[#faf6ec]/80"
                dangerouslySetInnerHTML={{ __html: highlightYaml(yamlSnippet) }}
              />
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function highlightYaml(code: string) {
  return code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/(^|\n)(\s*[\w-]+):/g, `$1$2<span style="color:#c8462e">:</span>`)
    .replace(/(name|on|jobs|runs-on|strategy|matrix|steps|with|uses|run)/g, `<span style="color:#d99a3a">$1</span>`)
    .replace(/("[^"]*")/g, `<span style="color:#e05a3d">$1</span>`)
    .replace(/(#[^\n]*)/g, `<span style="color:#6b7a4f">$1</span>`);
}
