"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const THEME_KEY = "lucas-site-theme";

function getInitialTheme(): Theme {
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === "dark" || stored === "light") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    return getInitialTheme();
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="relative inline-flex h-9 w-16 items-center rounded-full border border-neutral-200/20 bg-neutral-900/45 p-1 transition-colors duration-300 hover:border-primary-300/60"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      <span className="pointer-events-none absolute left-2 text-neutral-400" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
        </svg>
      </span>
      <span className="pointer-events-none absolute right-2 text-neutral-400" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2.5V5" />
          <path d="M12 19V21.5" />
          <path d="M2.5 12H5" />
          <path d="M19 12h2.5" />
          <path d="m5.4 5.4 1.8 1.8" />
          <path d="m16.8 16.8 1.8 1.8" />
          <path d="m18.6 5.4-1.8 1.8" />
          <path d="m7.2 16.8-1.8 1.8" />
        </svg>
      </span>
      <span
        className={`h-7 w-7 rounded-full bg-primary-400 shadow-[0_2px_10px_rgba(0,0,0,0.35)] transition-transform duration-300 ${
          isLight ? "translate-x-7" : "translate-x-0"
        }`}
      />
    </button>
  );
}
