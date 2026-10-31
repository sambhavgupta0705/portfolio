import Image from "next/image";
import { PageHead } from "@/components/page-head";
import { gallery } from "@/content/gallery";
import { sectionMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/sections";

export const metadata = sectionMetadata("gallery");

export default function GalleryPage() {
  return (
    <>
      <PageHead section={getSection("gallery")} />
      <div className="wrap body">
        <ul className="gal">
          {gallery.map((g, i) => (
            <li key={g.src} data-reveal style={{ ["--i" as string]: i % 3 }}>
              <figure>
                <div className="gal-img" data-tall={i % 3 === 0}>
                  <Image src={g.src} alt={g.alt} fill sizes="(min-width: 900px) 380px, (min-width: 560px) 45vw, 92vw" style={g.focus ? { objectPosition: g.focus } : undefined} />
                </div>
                <figcaption>{g.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
