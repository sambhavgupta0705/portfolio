"use client";

import { useState, type ReactNode } from "react";
import type { Race } from "@/content/races";

export type FitnessItem = Race & { photo: ReactNode };

function pace(minutes: number, km: number): string {
  const perKm = minutes / km;
  const m = Math.floor(perKm);
  const s = Math.round((perKm - m) * 60);
  return s === 60 ? `${m + 1}:00` : `${m}:${String(s).padStart(2, "0")}`;
}

/** Race cards with a Time / Pace switch. Pace is worked out from the finish time and the distance. */
export function FitnessView({ items }: { items: FitnessItem[] }) {
  const [mode, setMode] = useState<"time" | "pace">("time");

  return (
    <>
      <div className="seg up" style={{ ["--d" as string]: 3 }} role="group" aria-label="Show results as">
        <button type="button" aria-pressed={mode === "time"} onClick={() => setMode("time")}>
          Finish time
        </button>
        <button type="button" aria-pressed={mode === "pace"} onClick={() => setMode("pace")}>
          Pace per km
        </button>
      </div>
      <div className="fgrid">
        {items.map((r, i) => {
          const showPace = mode === "pace" && r.tone === "time" && r.km && r.minutes;
          return (
            <article className="fcard" key={r.slug} data-reveal style={{ ["--i" as string]: i % 2 }}>
              {r.photo}
              <h2>{r.name}</h2>
              {showPace ? (
                <p className="f-time">
                  {pace(r.minutes!, r.km!)}
                  <small>/km</small>
                </p>
              ) : (
                <p className={`f-time${r.tone === "time" ? "" : " quiet"}${r.tone === "now" ? " now" : ""}`}>{r.result}</p>
              )}
              <p className="f-meta">
                {r.date} · {r.chip}
              </p>
            </article>
          );
        })}
      </div>
    </>
  );
}
