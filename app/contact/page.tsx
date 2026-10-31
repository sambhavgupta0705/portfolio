import { ExtLink } from "@/components/ext-link";
import { PageHead } from "@/components/page-head";
import { email, postcards, topics } from "@/content/links";
import { sectionMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/sections";

export const metadata = sectionMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <PageHead section={getSection("contact")} />
      <div className="wrap body">
        <h2 className="sec-title" data-reveal>
          Talk to me about…
        </h2>
        <div className="cards topics">
          {topics.map((t, i) => {
            const body = (
              <>
                <strong>{t.title}</strong>
                <span>{t.text}</span>
                {email && (
                  <em className="t-go" aria-hidden="true">
                    Email me ↗
                  </em>
                )}
              </>
            );
            return email ? (
              <a className="card topic" key={t.title} href={`mailto:${email}?subject=${encodeURIComponent(t.subject)}`} data-reveal style={{ ["--i" as string]: i % 3 }}>
                {body}
              </a>
            ) : (
              <div className="card topic" key={t.title} data-reveal style={{ ["--i" as string]: i % 3 }}>
                {body}
              </div>
            );
          })}
        </div>
      </div>
      <div className="wrap body crows">
        {email ? (
          <a className="crow" href={`mailto:${email}`} data-reveal>
            <strong>Email</strong>
            <span>{email}</span>
          </a>
        ) : (
          <div className="crow" data-reveal>
            <strong>Email</strong>
            <span>Address coming with the domain</span>
          </div>
        )}
        {postcards.map((c, i) => (
          <ExtLink className="crow" key={c.name} href={c.href} data-reveal style={{ ["--i" as string]: i + 1 }}>
            <strong>{c.name}</strong>
            <span>{c.handle} ↗</span>
          </ExtLink>
        ))}
      </div>
    </>
  );
}
