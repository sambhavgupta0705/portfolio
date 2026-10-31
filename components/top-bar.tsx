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

/**
 * The bar is hidden at the top of every page so the first screen is all yellow.
 * It slides in when you scroll down and then back up. The scroll state lives on <html data-nav>
 * ("top" | "down" | "up" | "short") so the footer can follow it with plain CSS.
 */
export function TopBar() {
  const pathname = usePathname();
  const router = useRouter();
  const onHome = pathname === "/";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      let next = root.dataset.nav ?? "top";
      // a page too short to scroll can never reveal the bar, so show it outright
      if (root.scrollHeight <= window.innerHeight + 24) next = "short";
      else if (y < 24) next = "top";
      else if (y < last - 4) next = "up";
      else if (y > last + 4) next = "down";
      if (next !== root.dataset.nav) root.dataset.nav = next;
      last = y;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(onScroll);
    ro.observe(document.body);
    return () => {
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [pathname]);

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
    <header className="topbar">
      <div className="wrap topbar-in">
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
                href={`/${s.slug}`}
                style={{ ["--d" as string]: i }}
                className={s.slug === "contact" ? "act" : undefined}
                aria-current={pathname === `/${s.slug}` ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {s.title}
              </Link>
            ))}
          </nav>
          <button className="toggle" type="button" onClick={toggleTheme} aria-label="Switch between light and dark theme">
            <span className="t-light">Light</span>
            <span className="t-dark">Dark</span>
          </button>
        </div>
      </div>
    </header>
  );
}
