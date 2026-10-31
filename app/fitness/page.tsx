import { ExtLink } from "@/components/ext-link";
import { FitnessProgress } from "@/components/fitness-progress";
import { FitnessView } from "@/components/fitness-view";
import { PageHead } from "@/components/page-head";
import { Photo } from "@/components/photo";
import { fitnessLink } from "@/content/links";
import { races } from "@/content/races";
import { sectionMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/sections";

export const metadata = sectionMetadata("fitness");

export default function FitnessPage() {
  const items = races.map((r) => ({
    ...r,
    photo: <Photo dir="fitness" file={`${r.slug}.jpg`} alt={r.name} focus={r.focus} sizes="(min-width: 900px) 24vw, 90vw" />,
  }));
  return (
    <>
      <PageHead section={getSection("fitness")} />
      <div className="wrap body">
        <FitnessView items={items} />
        <FitnessProgress />
        <div className="rows after">
        <ExtLink className="row" href={fitnessLink.href}>
          <div>
            <h2 className="r-title">{fitnessLink.title}</h2>
            <div className="r-sub">{fitnessLink.description}</div>
          </div>
          <span className="r-side">{fitnessLink.side} ↗</span>
        </ExtLink>
        </div>
      </div>
    </>
  );
}
