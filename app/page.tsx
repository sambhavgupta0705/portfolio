import Image from "next/image";
import Link from "next/link";
import { Sparkle, Squiggle } from "@/components/doodles";
import { ExtLink } from "@/components/ext-link";
import { highlights } from "@/content/highlights";
import { email, site, socials } from "@/content/links";
import { showcase } from "@/content/showcase";
import { sections } from "@/lib/sections";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-in">
          <h1>
            <span className="name">
              <span>Sambhav</span>
              <span>Gupta</span>
              <Squiggle />
              <Sparkle />
            </span>
          </h1>
          <div className="hero-text">
            <p className="caps">
              {site.tagline}
              <br />
              {site.location}
            </p>
            <div className="stack">
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
          </div>
        </div>
      </section>

      <section className="sec wrap" aria-labelledby="stuff">
        <h2 className="sec-title" id="stuff" data-reveal>
          Cool stuff I&apos;ve made and done
        </h2>
        <div className="showcase">
          {showcase.map((it, i) => {
            const inner = (
              <>
                <div className={`show-media${it.panel ? ` ${it.panel}` : ""}`}>
                  {it.image ? (
                    <Image src={it.image.src} alt={it.image.alt} fill sizes="(min-width: 760px) 600px, 92vw" style={it.image.focus ? { objectPosition: it.image.focus } : undefined} />
                  ) : (
                    <span className="show-word" aria-hidden="true">
                      {it.wordmark}
                    </span>
                  )}
                </div>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
                <span className="show-cta">
                  {it.cta} <span aria-hidden="true">↗</span>
                </span>
              </>
            );
            return it.href.startsWith("/") ? (
              <Link key={it.title} className="show" href={it.href} data-reveal style={{ ["--i" as string]: i % 2 }}>
                {inner}
              </Link>
            ) : (
              <ExtLink key={it.title} className="show" href={it.href} data-reveal style={{ ["--i" as string]: i % 2 }}>
                {inner}
              </ExtLink>
            );
          })}
        </div>
      </section>

      <section className="sec wrap" aria-labelledby="numbers">
        <h2 className="sec-title" id="numbers" data-reveal>
          Cool achievements so far
        </h2>
        <div className="cards">
          {highlights.map((h, i) => (
            <div className="card" key={h.figure} data-reveal style={{ ["--i" as string]: i }}>
              <b>{h.figure}</b>
              <span>{h.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sec wrap" aria-labelledby="around">
        <h2 className="sec-title" id="around" data-reveal>
          Have a look around
        </h2>
        <nav className="index" aria-label="Sections">
          {sections.map((s, i) => (
            <Link key={s.slug} href={`/${s.slug}`} data-reveal style={{ ["--i" as string]: i }}>
              <strong>{s.title}</strong>
              <span>{s.boxDesc}</span>
            </Link>
          ))}
        </nav>
      </section>

      <section className="sec wrap" aria-labelledby="hello">
        <h2 className="sec-title" id="hello" data-reveal>
          Have anything cool in mind?
        </h2>
        <div className="hello" data-reveal>
          <p className="hello-line">
            Want to organize a run? Hit me up at{" "}
            {email ? (
              <a className="link hello-mail" href={`mailto:${email}`}>
                {email}
              </a>
            ) : (
              <Link className="link hello-mail" href="/contact">
                the contact page
              </Link>
            )}
            .
          </p>
        </div>
      </section>
    </>
  );
}
