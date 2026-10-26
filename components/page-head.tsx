import type { ReactNode } from "react";
import type { Section } from "@/lib/sections";
import { DoodleSvg } from "@/components/doodles";

/** Tilted doodle frame, number, big title and subtitle shared by every section page. */
export function PageHead({ section, children }: { section: Section; children?: ReactNode }) {
  const { Doodle } = section;
  return (
    <div className="dhead">
      <div className="dpic">
        <DoodleSvg>
          <Doodle />
        </DoodleSvg>
      </div>
      <div>
        <p className="dnum">{section.num}</p>
        <h1 className="dtitle">
          <span>{section.title}</span>
        </h1>
        <p className="dsub">{section.sub}</p>
        {children}
      </div>
    </div>
  );
}
