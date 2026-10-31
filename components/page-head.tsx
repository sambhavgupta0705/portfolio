import type { ReactNode } from "react";
import { SectionDoodle } from "@/components/doodles";
import type { Section } from "@/lib/sections";

/** Full-width gold band with the page title and subtitle, shared by every section page. */
export function PageHead({ section, children }: { section: Section; children?: ReactNode }) {
  return (
    <header className="pagehead">
      <div className="wrap pagehead-in">
        <SectionDoodle slug={section.slug} />
        <h1 className="h1 up">{section.title}</h1>
        <p className="sub up" style={{ ["--d" as string]: 1 }}>
          {section.sub}
        </p>
        {children && (
          <div className="up" style={{ ["--d" as string]: 2 }}>
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
