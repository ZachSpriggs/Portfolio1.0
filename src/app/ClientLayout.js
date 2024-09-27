"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import useDarkMode from "@/app/hooks/darkMode";

export default function ClientLayout({ children }) {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  
  useEffect(() => window.document.scrollingElement?.scrollTo(0,0), []);

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>{children}</main>
      <Contact />
    </div>
  );
}
