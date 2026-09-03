import { useState } from "react";
import { profile } from "../data";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#14100b] text-[#faf6ec] grain overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-end border-b border-[#faf6ec]/25 pb-10">
          <div className="lg:col-span-2 eyebrow text-[#faf6ec]/60">§15 · Contact</div>
          <div className="lg:col-span-10">
            <h2 className="big-word text-6xl sm:text-7xl lg:text-8xl">
              Let's build something<br />
              <em className="text-[#d99a3a]">people will love.</em>
            </h2>
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 border border-[#faf6ec]/20 rounded-3xl">
              <div className="eyebrow text-[#d99a3a]">Primary channel</div>
              <div className="mt-3 font-serif text-3xl break-all">{profile.primaryEmail}</div>
              <a
                href={`mailto:${profile.primaryEmail}`}
                className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-[#c8462e] rounded-full font-serif italic hover:bg-[#d99a3a] hover:text-[#14100b] transition-colors"
              >
                Send email <span className="w-6 h-6 rounded-full bg-[#faf6ec] text-[#14100b] grid place-items-center text-xs">→</span>
              </a>
              <p className="mt-4 text-xs opacity-60">Replies within 24 hours · PGP available on request.</p>
            </div>

            <div className="p-8 border border-[#faf6ec]/20 rounded-3xl">
              <div className="eyebrow text-[#d99a3a]">By phone</div>
              {profile.phones.map((p) => (
                <div key={p} className="mt-2 font-mono text-lg">{p}</div>
              ))}
              <p className="mt-3 text-xs opacity-60">Myanmar · Thailand · GMT+7</p>
            </div>

            <div className="p-8 border border-[#faf6ec]/20 rounded-3xl flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden ring-1 ring-[#faf6ec]/20">
                <img src={profile.avatar} alt="" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-serif text-lg italic">{profile.name}</div>
                <div className="text-xs opacity-60">Tachileik 🇲🇲 ↔ Bangkok 🇹🇭 · Remote-first</div>
              </div>
            </div>
          </div>

          <form
            className="lg:col-span-7 p-8 border border-[#faf6ec]/20 rounded-3xl"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
            }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Your name" placeholder="Somchai T." />
              <Field label="Email" placeholder="you@company.com" type="email" />
            </div>
            <div className="mt-6">
              <Field label="Company / role" placeholder="CTO at Cool Startup" />
            </div>
            <div className="mt-6">
              <div className="eyebrow text-[#d99a3a] mb-3">Project type</div>
              <div className="flex flex-wrap gap-2">
                {["MVP", "Audit", "Modularization", "CI/CD", "Fractional CTO", "Full-time"].map((t) => (
                  <label key={t} className="cursor-pointer">
                    <input type="checkbox" className="peer hidden" />
                    <span className="chip peer-checked:bg-[#c8462e] peer-checked:border-[#c8462e] border-[#faf6ec]/40 hover:border-[#d99a3a] hover:text-[#d99a3a]">{t}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <div className="eyebrow text-[#d99a3a] mb-3">Message</div>
              <textarea
                rows={7}
                placeholder="Tell me about the problem you're solving…"
                className="w-full bg-transparent border-b border-[#faf6ec]/30 focus:border-[#d99a3a] focus:outline-none py-3 text-lg font-serif italic placeholder:text-[#faf6ec]/30 resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-8 w-full inline-flex items-center justify-between px-8 py-5 bg-[#c8462e] rounded-full font-serif text-xl italic hover:bg-[#d99a3a] hover:text-[#14100b] transition-colors group"
            >
              <span>{sent ? "✓ Message queued — I'll reply within 24h" : "Send message"}</span>
              <span className="w-10 h-10 rounded-full bg-[#faf6ec] text-[#14100b] grid place-items-center group-hover:rotate-45 transition-transform">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <div className="eyebrow text-[#d99a3a] mb-2">{label}</div>
      <input
        {...rest}
        className="w-full bg-transparent border-b border-[#faf6ec]/30 focus:border-[#d99a3a] focus:outline-none py-2 text-lg font-serif italic placeholder:text-[#faf6ec]/30"
      />
    </div>
  );
}
