import { ExtLink } from "@/components/ext-link";
import { PageHead } from "@/components/page-head";
import { Photo } from "@/components/photo";
import { fitnessLink } from "@/content/links";
import { races } from "@/content/races";
import { sectionMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/sections";

export const metadata = sectionMetadata("fitness");

export default function FitnessPage() {
  return (
    <section className="detail">
      <PageHead section={getSection("fitness")} />
      <div className="fgrid">
        {races.map((r) => (
          <article className="fcard" key={r.slug}>
            <Photo dir="fitness" file={`${r.slug}.jpg`} alt={r.name} focus={r.focus} sizes="(min-width: 1000px) 300px, (min-width: 560px) 45vw, 90vw" />
            <div className="fbody">
              <div className="f-meta">
                <span>{r.date}</span>
                <span className="chip">{r.chip}</span>
              </div>
              <h2>{r.name}</h2>
              <div className={`f-time${r.tone === "time" ? "" : " quiet"}${r.tone === "now" ? " now" : ""}`}>{r.result}</div>
            </div>
          </article>
        ))}
      </div>
      <div className="lines fitness-link">
        <ExtLink className="line" href={fitnessLink.href}>
          <div>
            <div className="l-title">{fitnessLink.title}</div>
            <div className="l-sub">{fitnessLink.description}</div>
          </div>
          <span className="l-side">{fitnessLink.side} ↗</span>
        </ExtLink>
      </div>
    </section>
  );
}
