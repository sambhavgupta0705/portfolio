import type { ReactNode } from "react";
import type { Section } from "@/lib/sections";

/** Title and subtitle shared by every section page. */
export function PageHead({ section, children }: { section: Section; children?: ReactNode }) {
  return (
    <header className="head">
      <h1 className="h1 up">{section.title}</h1>
      <p className="sub up" style={{ ["--d" as string]: 1 }}>{section.sub}</p>
      {children && (
        <div className="up" style={{ ["--d" as string]: 2 }}>
          {children}
        </div>
      )}
    </header>
  );
}
