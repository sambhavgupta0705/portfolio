"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Reveals [data-reveal] elements once as they enter the viewport. Content is visible without script. */
export function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in)"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
