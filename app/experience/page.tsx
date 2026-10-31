import { PageHead } from "@/components/page-head";
import { experience } from "@/content/experience";
import { sectionMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/sections";

export const metadata = sectionMetadata("experience");

export default function ExperiencePage() {
  return (
    <>
      <PageHead section={getSection("experience")} />
      <div className="wrap body places">
        {experience.map((place) => (
          <div className="place" key={place.name}>
            <h2 data-reveal>{place.name}</h2>
            <ul className="roles" data-reveal style={{ ["--i" as string]: 1 }}>
              {place.roles.map((r) => (
                <li key={`${r.title}-${r.org ?? ""}-${r.dates}`}>
                  <span className="role">
                    {r.title}
                    {r.org && <small>{r.org}</small>}
                  </span>
                  <span className={`dates${r.current ? " now" : ""}`}>{r.dates}</span>
                </li>
              ))}
            </ul>
            <ul className="hl" data-reveal style={{ ["--i" as string]: 2 }}>
              {place.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
