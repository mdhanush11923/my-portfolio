"use client";

import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef, ReactNode } from "react";

interface TiltProps {
  children: ReactNode;
}

export default function TiltComponent({ children }: TiltProps) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 4,
        glare: true,
        "max-glare": 0.5,
      });
    }
  }, []);

  return (
    <div ref={tiltRef} className="thumbnail rounded js-tilt">
      {children}
    </div>
  );
}
