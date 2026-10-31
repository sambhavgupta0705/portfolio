"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

function currentTheme(): "light" | "dark" {
  const set = document.documentElement.getAttribute("data-theme");
  if (set === "dark" || set === "light") return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function TopBar() {
  const pathname = usePathname();
  const router = useRouter();
  const onBoard = pathname === "/";

  // Esc = back to the board
  useEffect(() => {
    if (onBoard) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !e.defaultPrevented) router.push("/");
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onBoard, router]);

  function toggle() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <div className="topbar">
      {!onBoard && (
        <Link className="back" href="/">
          ← All sections
        </Link>
      )}
      <button className="toggle" type="button" onClick={toggle} aria-label="Switch between light and dark theme">
        <span className="t-light">Light</span>
        <span className="t-dark">Dark</span>
      </button>
    </div>
  );
}
