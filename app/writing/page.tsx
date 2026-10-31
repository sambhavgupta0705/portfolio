import { ExtLink } from "@/components/ext-link";
import { PageHead } from "@/components/page-head";
import { writing } from "@/content/links";
import { sectionMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/sections";

export const metadata = sectionMetadata("writing");

export default function WritingPage() {
  return (
    <section>
      <PageHead section={getSection("writing")} />
      <div className="rows" style={{ marginTop: 48 }}>
        {writing.map((w, i) => (
          <ExtLink className="row" key={w.href} href={w.href}>
            <div>
              <h2 className="r-title" data-reveal style={{ ["--i" as string]: i * 2 }}>{w.title}</h2>
              <div className="r-sub" data-reveal style={{ ["--i" as string]: i * 2 + 1 }}>{w.description}</div>
            </div>
            <span className="r-side" data-reveal style={{ ["--i" as string]: i * 2 + 2 }}>{w.side} ↗</span>
          </ExtLink>
        ))}
      </div>
    </section>
  );
}
