import { ExtLink } from "@/components/ext-link";
import { PageHead } from "@/components/page-head";
import { email, postcards } from "@/content/links";
import { sectionMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/sections";

export const metadata = sectionMetadata("contact");

function Card({ stamp, kind, name, handle, go }: { stamp: string; kind: string; name: string; handle: string; go: boolean }) {
  return (
    <>
      <span className="stamp" aria-hidden="true">
        {stamp}
      </span>
      <span className="p-kind">{kind}</span>
      <span className="p-name">{name}</span>
      <span className="p-handle">{handle}</span>
      <span className="p-rules" aria-hidden="true">
        <i />
        <i />
      </span>
      {go && (
        <span className="p-go" aria-hidden="true">
          ↗
        </span>
      )}
    </>
  );
}

export default function ContactPage() {
  return (
    <section className="detail">
      <PageHead section={getSection("contact")} />
      <p className="lead">
        Tell me what you&apos;re building.
        <svg className="plane" viewBox="0 0 120 56" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <path d="M4 48c24-4 40-30 62-30" strokeDasharray="3 6" />
          <path d="M62 18l50-12-14 36-14-12-12 10-2-14z" />
          <path d="M98 30l-26-6" />
        </svg>
      </p>
      <div className="pcards">
        {postcards.map((c) => (
          <ExtLink className="pcard" key={c.name} href={c.href}>
            <Card stamp={c.stamp} kind={c.kind} name={c.name} handle={c.handle} go />
          </ExtLink>
        ))}
        {email ? (
          <a className="pcard" href={`mailto:${email}`}>
            <Card stamp="@" kind="Write to me" name="Email" handle={email} go />
          </a>
        ) : (
          <div className="pcard off">
            <Card stamp="@" kind="Write to me" name="Email" handle="address coming with the domain" go={false} />
          </div>
        )}
      </div>
    </section>
  );
}
