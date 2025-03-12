'use client'

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

export default function Topbar() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const handleScrollAndResize = () => {
      if (!aboutSectionRef.current) return;
      const sectionTop = aboutSectionRef.current.getBoundingClientRect().top;
      setIsVisible(sectionTop <= 0); // Show navbar when #about reaches the top
    };

    window.addEventListener("scroll", handleScrollAndResize);
    window.addEventListener("resize", handleScrollAndResize);

    return () => {
      window.removeEventListener("scroll", handleScrollAndResize);
      window.removeEventListener("resize", handleScrollAndResize);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full bg-gray-100/50 backdrop-blur-md p-4 flex justify-between items-center shadow-md z-50 transition-transform duration-300 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <h1 className="text-xl font-bold">Dhanush</h1>
        <div className="flex gap-4">
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#skill">Skills</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>

    </>
  );
}
