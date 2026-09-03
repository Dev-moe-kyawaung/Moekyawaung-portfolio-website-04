import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Architecture from "./components/Architecture";
import Apps from "./components/Apps";
import Startups from "./components/Startups";
import Stack from "./components/Stack";
import Showreel from "./components/Showreel";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import OpenSource from "./components/OpenSource";
import CICD from "./components/CICD";
import Security from "./components/Security";
import Network from "./components/Network";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [cursor, setCursor] = useState({ x: -100, y: -100, hover: false });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHover = !!target.closest("a, button, [role='button']");
      setCursor({ x: e.clientX, y: e.clientY, hover: isHover });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#f2ede4] text-[#14100b]">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-[#14100b]/10">
        <div
          className="h-full bg-[#c8462e] origin-left"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* Custom cursor (desktop only) */}
      <div
        className="pointer-events-none fixed z-[100] hidden md:block"
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`transition-all duration-200 ${cursor.hover ? "w-14 h-14" : "w-4 h-4"} rounded-full border ${cursor.hover ? "border-[#c8462e] bg-[#c8462e]/10" : "border-[#14100b]"}`}
        />
      </div>

      <Nav />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Architecture />
        <Apps />
        <CICD />
        <Security />
        <Startups />
        <Stack />
        <Showreel />
        <Timeline />
        <Services />
        <Testimonials />
        <OpenSource />
        <Network />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
