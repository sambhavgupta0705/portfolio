import type { ReactNode } from "react";

/** Wraps a doodle in the standard viewBox. Always decorative. */
export function DoodleSvg({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 10 200 130" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

export function ProjectsDoodle() {
  return (
    <g className="doodle">
      <rect className="s" x="30" y="28" width="140" height="96" rx="8" />
      <path d="M30 52h140" />
      <circle className="a" cx="46" cy="40" r="3.6" />
      <circle className="k" cx="59" cy="40" r="3.6" />
      <circle className="k" cx="72" cy="40" r="3.6" />
      <path d="M46 72l12 10-12 10M68 98h26" />
      <path d="M134 68v26M134 82c0 10 14 4 20 4" />
      <circle className="a" cx="134" cy="66" r="5.5" />
      <circle className="s" cx="134" cy="98" r="5.5" />
      <circle className="s" cx="156" cy="86" r="5.5" />
    </g>
  );
}

export function WritingDoodle() {
  return (
    <g className="doodle">
      <rect className="s" x="46" y="26" width="84" height="110" rx="4" />
      <path d="M64 58h48M64 74h48M64 90h30M64 106h40" />
      <path d="M46 44h-6M46 70h-6M46 96h-6M46 122h-6" />
      <path className="a" d="M150 44l14 14-44 50-20 6 6-20z" />
      <path d="M143 51l14 14" />
    </g>
  );
}

export function ExperienceDoodle() {
  return (
    <g className="doodle">
      <path d="M80 56V46a6 6 0 0 1 6-6h28a6 6 0 0 1 6 6v10" />
      <rect className="k" x="48" y="56" width="104" height="72" rx="8" />
      <path d="M48 88h104" />
      <rect className="s" x="92" y="82" width="16" height="13" rx="2" />
      <path d="M168 34v14M161 41h14" />
      <path d="M30 40v8M26 44h8" />
    </g>
  );
}

export function MomentsDoodle() {
  return (
    <g className="doodle">
      <g transform="rotate(-8 80 80)">
        <rect className="s" x="40" y="34" width="70" height="88" />
        <rect className="k" x="48" y="42" width="54" height="56" />
      </g>
      <g transform="rotate(7 125 85)">
        <rect className="s" x="92" y="38" width="70" height="88" />
        <rect className="k" x="100" y="46" width="54" height="56" />
        <circle className="a" cx="118" cy="62" r="6" />
        <path d="M100 102l18-24 12 14 10-10 14 20" />
      </g>
    </g>
  );
}

export function FitnessDoodle() {
  return (
    <g className="doodle">
      <path d="M62 80h76" />
      <rect className="a" x="44" y="54" width="14" height="52" rx="3" />
      <rect className="s" x="30" y="64" width="10" height="32" rx="3" />
      <rect className="a" x="142" y="54" width="14" height="52" rx="3" />
      <rect className="s" x="160" y="64" width="10" height="32" rx="3" />
      <path d="M20 58l-8-6M20 102l-8 6M180 58l8-6M180 102l8 6" />
    </g>
  );
}

export function ContactDoodle() {
  return (
    <g className="doodle">
      <path
        className="s"
        d="M40 40h86a8 8 0 0 1 8 8v36a8 8 0 0 1-8 8H84l-18 16V92H40a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8z"
      />
      <circle className="f" cx="60" cy="66" r="3.4" />
      <circle className="f" cx="82" cy="66" r="3.4" />
      <circle className="f" cx="104" cy="66" r="3.4" />
      <path
        className="a"
        d="M152 76h20a6 6 0 0 1 6 6v18a6 6 0 0 1-6 6h-4v10l-12-10h-4a6 6 0 0 1-6-6V82a6 6 0 0 1 6-6z"
      />
    </g>
  );
}

/** Defines the hand-drawn "rough" filter once for the whole page. */
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
