"use client";

import { useEffect } from "react";

const FontAwesomeScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/84cf9287ed.js";
    script.crossOrigin = "anonymous";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
};

export default FontAwesomeScript;
