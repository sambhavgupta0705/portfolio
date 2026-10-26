import { ExtLink } from "@/components/ext-link";
import { PageHead } from "@/components/page-head";
import { experience } from "@/content/experience";
import { resumeUrl } from "@/content/links";
import { sectionMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/sections";

export const metadata = sectionMetadata("experience");

export default function ExperiencePage() {
  return (
    <section className="detail">
      <PageHead section={getSection("experience")}>
        <ExtLink className="btn" href={resumeUrl}>
          View resume ↗
        </ExtLink>
      </PageHead>
      <div className="lines">
        {experience.map((place) => (
          <div className="group" key={place.name}>
            <h2 className="l-title">{place.name}</h2>
            <div>
              <ul className="roles">
                {place.roles.map((r) => (
                  <li key={`${r.title}-${r.org ?? ""}-${r.dates}`}>
                    <span className="g-role">
                      {r.title}
                      {r.org && <small>{r.org}</small>}
                    </span>
                    <span className={`l-side${r.current ? " now" : ""}`}>{r.dates}</span>
                  </li>
                ))}
              </ul>
              <ul className="hl">
                {place.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
