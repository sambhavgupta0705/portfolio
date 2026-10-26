import Link from "next/link";
import { DoodleSvg } from "@/components/doodles";
import { ExtLink } from "@/components/ext-link";
import { site, socials } from "@/content/links";
import { sections } from "@/lib/sections";

export default function Board() {
  return (
    <section className="board">
      <header>
        <p className="hello">hi there, I&apos;m</p>
        <h1>
          <span className="name">
            {site.name}
            <svg className="squig" viewBox="0 0 150 9" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <path pathLength={1} d="M2 5 C 14 0, 22 9, 36 4 S 58 0, 72 5 S 96 9, 110 4 S 134 1, 148 5" />
            </svg>
          </span>
        </h1>
        <p className="meta">{site.tagline}</p>
        <nav className="socials" aria-label="Social links">
          {socials.map((s) => (
            <ExtLink key={s.label} href={s.href}>
              {s.label}
              <span className="arr" aria-hidden="true">
                ↗
              </span>
            </ExtLink>
          ))}
        </nav>
      </header>

      <div className="stage">
        <div className="hint" aria-hidden="true">
          have a look around
          <svg viewBox="0 0 40 26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 5c14-5 28-1 31 15" />
            <path d="M26 15l8 6 3-10" />
          </svg>
        </div>
        <nav className="boxes" aria-label="Sections">
          {sections.map(({ slug, title, boxDesc, Doodle }) => (
            <Link key={slug} className="box" href={`/${slug}`}>
              <span className="art">
                <DoodleSvg>
                  <Doodle />
                </DoodleSvg>
              </span>
              <span className="box-name">{title}</span>
              <span className="box-desc">{boxDesc}</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
