import { races, type Race } from "@/content/races";

const fmtPace = (p: number) => {
  const m = Math.floor(p);
  const s = Math.round((p - m) * 60);
  return s === 60 ? `${m + 1}:00` : `${m}:${String(s).padStart(2, "0")}`;
};
const fmtHours = (min: number) => `${Math.floor(min / 60)}h ${String(min % 60).padStart(2, "0")}m`;

/** "Progress so far": totals and two bar charts, all worked out from content/races.ts. */
export function FitnessProgress() {
  const done = races.filter((r) => r.tone !== "now");
  const upcoming = races.filter((r) => r.tone === "now");
  const withKm = done.filter((r): r is Race & { km: number } => !!r.km);
  const withPace = done.filter((r): r is Race & { km: number; minutes: number } => !!r.km && !!r.minutes);

  const totalKm = withKm.reduce((a, r) => a + r.km, 0);
  const totalMin = done.reduce((a, r) => a + (r.minutes ?? 0), 0);
  const paces = withPace.map((r) => ({ r, p: r.minutes / r.km }));
  const fastest = paces.reduce((a, b) => (b.p < a.p ? b : a));
  const slowest = Math.max(...paces.map((x) => x.p));
  const longest = Math.max(...withKm.map((r) => r.km));

  const stats = [
    { n: String(done.length), l: "races finished" },
    { n: totalKm.toFixed(1), l: "km raced" },
    { n: fmtHours(totalMin), l: "of racing" },
    { n: fmtPace(fastest.p), l: `fastest pace per km, at ${fastest.r.name}` },
  ];

  return (
    <section className="sec prog" aria-labelledby="progress">
      <h2 className="sec-title" id="progress" data-reveal>
        Progress so far
      </h2>

      <div className="tiles">
        {stats.map((s, i) => (
          <div className="tile" key={s.l} data-reveal style={{ ["--i" as string]: i }}>
            <b>{s.n}</b>
            <span>{s.l}</span>
          </div>
        ))}
      </div>

      <div className="charts">
        <div className="chart" data-reveal>
          <h3>Distance raced</h3>
          <ul>
            {withKm.map((r, i) => (
              <li key={r.slug}>
                <span className="c-name">{r.name}</span>
                <div className="c-track">
                  <i className="fill" style={{ width: `${(r.km / longest) * 100}%`, ["--j" as string]: i }} />
                </div>
                <span className="c-val">{r.km.toFixed(1)} km</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="chart" data-reveal style={{ ["--i" as string]: 1 }}>
          <h3>Pace per km</h3>
          <ul>
            {paces.map(({ r, p }, i) => (
              <li key={r.slug}>
                <span className="c-name">{r.name}</span>
                <div className="c-track">
                  <i className={`fill${r === fastest.r ? " best" : ""}`} style={{ width: `${(p / slowest) * 100}%`, ["--j" as string]: i }} />
                </div>
                <span className="c-val">{fmtPace(p)}</span>
              </li>
            ))}
          </ul>
          <p className="c-note">Shorter is faster. Different distances, so read each bar on its own.</p>
        </div>
      </div>

      {upcoming.length > 0 && (
        <div className="ahead" data-reveal>
          <h3>Road ahead</h3>
          <ul>
            {upcoming.map((r) => (
              <li key={r.slug}>
                <strong>{r.name}</strong>
                <span>
                  {r.date} · {r.result}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
