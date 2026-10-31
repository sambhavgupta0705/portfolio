"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { sections } from "@/lib/sections";

function currentTheme(): "light" | "dark" {
  const set = document.documentElement.getAttribute("data-theme");
  if (set === "dark" || set === "light") return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function TopBar() {
  const pathname = usePathname();
  const router = useRouter();
  const onHome = pathname === "/";
  const [open, setOpen] = useState(false);

  // Esc = back to the board (or close the menu)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape" || e.defaultPrevented) return;
      if (open) setOpen(false);
      else if (!onHome) router.push("/");
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onHome, open, router]);

  function toggleTheme() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <div className="topbar">
      {!onHome && (
        <Link className="back" href="/">
          ← All sections
        </Link>
      )}
      <div className="topbar-right">
        <button className="menu-btn" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen((o) => !o)}>
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className="nav" data-open={open} aria-label="Sections">
          {sections.map((s, i) => (
            <Link
              key={s.slug}
              style={{ ["--d" as string]: i }}
              href={`/${s.slug}`}
              className={s.slug === "contact" ? "act" : undefined}
              aria-current={pathname === `/${s.slug}` ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {s.title}
            </Link>
          ))}
        </nav>
        <button className="toggle" style={{ ["--d" as string]: 6 }} type="button" onClick={toggleTheme} aria-label="Switch between light and dark theme">
          <span className="t-light">Light</span>
          <span className="t-dark">Dark</span>
        </button>
      </div>
    </div>
  );
}
