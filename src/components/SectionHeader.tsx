import type { ReactNode } from "react";

export default function SectionHeader({
  label,
  number,
  title,
  subtitle,
  invert = false,
}: {
  label: string;
  number?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  invert?: boolean;
}) {
  const ink = invert ? "text-[#faf6ec]" : "text-[#14100b]";
  const dim = invert ? "text-[#faf6ec]/60" : "text-[#3a2f22]";
  return (
    <div className="grid lg:grid-cols-12 gap-6 items-end">
      <div className="lg:col-span-2">
        <div className={`eyebrow ${invert ? "text-[#faf6ec]/60" : ""}`}>
          §{number || "—"} · {label}
        </div>
      </div>
      <div className="lg:col-span-7">
        <h2 className={`big-word text-6xl sm:text-7xl lg:text-8xl ${ink}`}>{title}</h2>
      </div>
      <div className="lg:col-span-3">
        {subtitle && <p className={`text-sm leading-relaxed ${dim}`}>{subtitle}</p>}
      </div>
    </div>
  );
}
