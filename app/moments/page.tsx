import { PageHead } from "@/components/page-head";
import { Photo } from "@/components/photo";
import { moments } from "@/content/moments";
import { sectionMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/sections";

export const metadata = sectionMetadata("moments");

export default function MomentsPage() {
  return (
    <section className="detail">
      <PageHead section={getSection("moments")} />
      <div className="lines">
        {moments.length === 0 ? (
          <div className="line off">
            <div>
              <div className="l-title">Event moments</div>
              <div className="l-sub">Each event gets its own line, with photos</div>
            </div>
            <span className="l-side">Adding soon</span>
          </div>
        ) : (
          moments.map((m) => (
            <div className="line off" key={`${m.title}-${m.date}`}>
              <div>
                <div className="l-title">{m.title}</div>
                <div className="l-sub">{m.place}</div>
              </div>
              <span className="l-side">{m.date}</span>
              {m.photos && m.photos.length > 0 && (
                <div className="mphotos">
                  {m.photos.map((file) => (
                    <Photo key={file} dir="moments" file={file} alt={`${m.title}, ${m.place}`} sizes="(min-width: 760px) 240px, 45vw" />
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
