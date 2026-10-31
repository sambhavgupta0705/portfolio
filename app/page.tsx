import Link from "next/link";
import { ExtLink } from "@/components/ext-link";
import { HomeIndex } from "@/components/home-index";
import { highlights } from "@/content/highlights";
import { email, site, socials } from "@/content/links";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>
          <span>Sambhav</span>
          <span>Gupta</span>
        </h1>
        <div className="hero-text">
          <p>Software engineer in Bengaluru building data pipelines at Goldman Sachs. Open source maintainer, marathon runner.</p>
          <Link className="btn" href="/projects">
            See my projects <span className="arr" aria-hidden="true">↗</span>
          </Link>
          <nav className="socials" aria-label="Social links">
            {socials.map((s) => (
              <ExtLink key={s.label} className="link" href={s.href}>
                {s.label} ↗
              </ExtLink>
            ))}
          </nav>
        </div>
      </section>

      <section className="sec" aria-labelledby="numbers">
        <h2 className="sec-title" id="numbers" data-reveal>
          What the work changed
        </h2>
        <div className="figs">
          {highlights.map((h, i) => (
            <div className="fig" key={h.figure} data-reveal style={{ ["--i" as string]: i }}>
              <b>{h.figure}</b>
              <span>{h.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sec" aria-labelledby="around">
        <h2 className="sec-title" id="around" data-reveal>
          Have a look around
        </h2>
        <HomeIndex />
      </section>

      <section className="sec" aria-labelledby="hello">
        <h2 className="sec-title" id="hello" data-reveal>
          Tell me what you&apos;re building
        </h2>
        <div className="hello" data-reveal>
          {email ? (
            <a className="hello-mail link" href={`mailto:${email}`}>
              {email}
            </a>
          ) : (
            <Link className="hello-mail link" href="/contact">
              Say hello
            </Link>
          )}
          <p className="r-meta">{site.location}</p>
        </div>
      </section>
    </>
  );
}
