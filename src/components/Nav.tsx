import { useEffect, useState } from "react";

const links = [
  { id: "hero", label: "Index", n: "01" },
  { id: "about", label: "About", n: "02" },
  { id: "architecture", label: "Practice", n: "03" },
  { id: "apps", label: "Works", n: "04" },
  { id: "startups", label: "Ventures", n: "05" },
  { id: "showreel", label: "Reel", n: "06" },
  { id: "contact", label: "Contact", n: "07" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const bkk = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Bangkok",
        hour12: false,
      }).format(now);
      setTime(bkk);
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Top status bar */}
      <div className="fixed top-0 inset-x-0 z-50 bg-[#14100b] text-[#faf6ec] text-[11px] font-mono uppercase tracking-[0.25em]">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d99a3a] animate-pulse" />
            <span>Bangkok · {time || "—:—"} GMT+7</span>
            <span className="hidden sm:inline opacity-40">|</span>
            <span className="hidden sm:inline opacity-60">Studio of Moe Kyaw Aung</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline opacity-60">Available Q1 · 2026</span>
            <span className="opacity-40">|</span>
            <span>MMXXVI</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`fixed top-9 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md bg-[#f2ede4]/80 border-b border-[#14100b]/10" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="h-16 flex items-center justify-between">
            <a href="#hero" className="flex items-center gap-3 group">
              <svg width="34" height="34" viewBox="0 0 40 40" className="star-spin">
                <path
                  d="M20 0 L23 17 L40 20 L23 23 L20 40 L17 23 L0 20 L17 17 Z"
                  fill="#c8462e"
                />
              </svg>
              <div className="leading-tight">
                <div className="font-serif text-lg font-semibold text-[#14100b]">Moe Kyaw Aung</div>
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#3a2f22]">
                  Android Architect · Est. 2019
                </div>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className="group relative px-4 py-2 text-sm text-[#14100b]"
                >
                  <span className="font-mono text-[10px] mr-1.5 opacity-40 group-hover:text-[#c8462e] group-hover:opacity-100">
                    {l.n}
                  </span>
                  <span className="font-serif italic">{l.label}</span>
                  <span className="absolute inset-x-4 -bottom-0.5 h-px bg-[#c8462e] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14100b] text-[#faf6ec] text-xs font-mono uppercase tracking-[0.2em] hover:bg-[#c8462e] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#d99a3a]" />
                Start a project
              </a>
              <button
                className="lg:hidden w-10 h-10 grid place-items-center border border-[#14100b] rounded-full"
                onClick={() => setOpen(!open)}
                aria-label="Menu"
              >
                <div className="space-y-1">
                  <span className={`block w-4 h-px bg-[#14100b] transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
                  <span className={`block w-4 h-px bg-[#14100b] transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
                </div>
              </button>
            </div>
          </div>

          {open && (
            <div className="lg:hidden pb-4 grid grid-cols-2 gap-2">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 border border-[#14100b]/15 rounded-full text-sm hover:bg-[#14100b] hover:text-[#faf6ec]"
                >
                  <span className="font-mono text-[10px] mr-2 opacity-60">{l.n}</span>
                  <span className="font-serif italic">{l.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </header>
    </>
  );
}
