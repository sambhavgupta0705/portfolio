import { PageHead } from "@/components/page-head";
import { Photo } from "@/components/photo";
import { moments } from "@/content/moments";
import { sectionMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/sections";

export const metadata = sectionMetadata("moments");

export default function MomentsPage() {
  return (
    <>
      <PageHead section={getSection("moments")} />
      <div className="wrap body rows">
        {moments.length === 0 ? (
          <div className="row off up" style={{ ["--d" as string]: 3 }}>
            <div>
              <h2 className="r-title">Event moments</h2>
              <div className="r-sub">Each event gets its own entry, with photos.</div>
            </div>
            <span className="r-side">Adding soon</span>
          </div>
        ) : (
          moments.map((m) => (
            <div className="row off" key={`${m.title}-${m.date}`} data-reveal>
              <div>
                <h2 className="r-title">{m.title}</h2>
                <div className="r-sub">{m.place}</div>
              </div>
              <span className="r-side">{m.date}</span>
              {m.photos && m.photos.length > 0 && (
                <div className="mphotos">
                  {m.photos.map((file) => (
                    <Photo key={file} dir="moments" file={file} alt={`${m.title}, ${m.place}`} sizes="(min-width: 900px) 220px, 45vw" />
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}
