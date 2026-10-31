"use client";

import Link from "next/link";
import { useStageHover } from "@/components/stage";
import { sections } from "@/lib/sections";

/** The six sections as large type. Hovering or focusing one swaps the photograph on the left. */
export function HomeIndex() {
  const setHover = useStageHover();
  return (
    <nav className="index" aria-label="Sections">
      {sections.map((s, i) => (
        <Link
          key={s.slug}
          href={`/${s.slug}`}
          data-reveal
          style={{ ["--i" as string]: i }}
          onMouseEnter={() => setHover(s.slug)}
          onMouseLeave={() => setHover(null)}
          onFocus={() => setHover(s.slug)}
          onBlur={() => setHover(null)}
        >
          <strong>{s.title}</strong>
          <span>{s.boxDesc}</span>
        </Link>
      ))}
    </nav>
  );
}
