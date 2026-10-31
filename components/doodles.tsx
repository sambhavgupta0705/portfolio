import type { SectionSlug } from "@/lib/sections";

/** Defines the hand-drawn "rough" wobble filter once for the whole page. */
export function RoughFilter() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="2.4" />
      </filter>
    </svg>
  );
}

const P = { pathLength: 1 } as const;

/** One minimalist line doodle per section. Decorative, so hidden from assistive tech. */
export function SectionDoodle({ slug }: { slug: SectionSlug }) {
  return (
    <svg className="doodle band-doodle" viewBox="0 0 120 100" aria-hidden="true" focusable="false">
      {slug === "projects" && (
        <>
          <path {...P} d="M38 30 L16 50 L38 70" />
          <path {...P} d="M82 30 L104 50 L82 70" />
          <path {...P} d="M68 22 L52 78" />
        </>
      )}
      {slug === "experience" && (
        <>
          <path {...P} d="M44 36 V28 a4 4 0 0 1 4-4 h24 a4 4 0 0 1 4 4 V36" />
          <rect {...P} x="16" y="36" width="88" height="50" rx="6" />
          <path {...P} d="M16 60 H104" />
          <rect {...P} x="53" y="55" width="14" height="10" rx="2" />
        </>
      )}
      {slug === "writing" && (
        <>
          <path {...P} d="M84 14 L104 34 L44 94 L20 98 L26 74 Z" />
          <path {...P} d="M74 24 L94 44" />
        </>
      )}
      {slug === "gallery" && (
        <>
          <rect {...P} x="20" y="12" width="80" height="76" rx="3" />
          <rect {...P} x="29" y="21" width="62" height="46" />
          <circle {...P} cx="46" cy="36" r="6" />
          <path {...P} d="M29 67 L52 46 L66 58 L76 50 L91 64" />
        </>
      )}
      {slug === "fitness" && (
        <>
          <path {...P} d="M34 50 H86" />
          <rect {...P} x="22" y="30" width="12" height="40" rx="3" />
          <rect {...P} x="86" y="30" width="12" height="40" rx="3" />
          <path {...P} d="M12 40 V60 M108 40 V60" />
        </>
      )}
      {slug === "contact" && (
        <>
          <path {...P} d="M22 20 h76 a8 8 0 0 1 8 8 v34 a8 8 0 0 1 -8 8 H58 L40 90 V70 H22 a8 8 0 0 1 -8 -8 V28 a8 8 0 0 1 8 -8 z" />
          <circle {...P} cx="42" cy="45" r="2.5" />
          <circle {...P} cx="60" cy="45" r="2.5" />
          <circle {...P} cx="78" cy="45" r="2.5" />
        </>
      )}
    </svg>
  );
}

/** Hand-drawn underline for the name on the home page. */
export function Squiggle() {
  return (
    <svg className="doodle squig" viewBox="0 0 150 9" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path {...P} d="M2 5 C 14 0, 22 9, 36 4 S 58 0, 72 5 S 96 9, 110 4 S 134 1, 148 5" />
    </svg>
  );
}

/** A small sparkle next to the name. */
export function Sparkle() {
  return (
    <svg className="doodle sparkle" viewBox="-14 -14 28 28" aria-hidden="true" focusable="false">
      <path {...P} d="M0 -11 V11 M-11 0 H11 M-7 -7 L7 7 M-7 7 L7 -7" />
    </svg>
  );
}
