"use client";

import { useEffect } from "react";

/**
 * Reveals [data-reveal] elements once as they enter the viewport. Elements added later (for example
 * after a filter click) are picked up too. Content is visible without script.
 */
export function ScrollEffects() {
  useEffect(() => {
    const seen = new WeakSet<Element>();
    const reveal = (el: Element) => el.classList.add("in");

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const scan = () => {
      document.querySelectorAll("[data-reveal]:not(.in)").forEach((el) => {
        if (!seen.has(el)) {
          seen.add(el);
          io.observe(el);
        }
      });
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);

  return null;
}
