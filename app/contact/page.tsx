import { ExtLink } from "@/components/ext-link";
import { PageHead } from "@/components/page-head";
import { email, postcards } from "@/content/links";
import { sectionMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/sections";

export const metadata = sectionMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <PageHead section={getSection("contact")} />
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
