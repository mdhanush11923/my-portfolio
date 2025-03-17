"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import initTiltEffect from "@/scripts/tiltAnimation";
import { targetElements, defaultProps } from "@/data/scrollRevealConfig";
import { useEffect } from "react";

export default function HeroPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("@/scripts/scrollReveal").then((module) => {
        module.default(targetElements, defaultProps);
      });
      initTiltEffect();
    }
  }, []);

  return (
    <div>
      <Topbar />
      <div id="top"></div>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
