import { ExtLink } from "@/components/ext-link";
import { PageHead } from "@/components/page-head";
import { writing } from "@/content/links";
import { sectionMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/sections";

export const metadata = sectionMetadata("writing");

export default function WritingPage() {
  return (
    <section className="detail">
      <PageHead section={getSection("writing")} />
      <div className="lines">
        {writing.map((w) => (
          <ExtLink className="line" key={w.href} href={w.href}>
            <div>
              <div className="l-title">{w.title}</div>
              <div className="l-sub">{w.description}</div>
            </div>
            <span className="l-side">{w.side} ↗</span>
          </ExtLink>
        ))}
      </div>
    </section>
  );
}
