"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { stage, type StagePhoto } from "@/content/stage";

type Key = keyof typeof stage;
type Ctx = { setHover: (k: Key | null) => void };
const StageContext = createContext<Ctx>({ setHover: () => {} });

/** Lets the home page list change the photograph while a row is hovered or focused. */
export function useStageHover() {
  return useContext(StageContext).setHover;
}

function keyFor(pathname: string): Key {
  const slug = pathname.split("/")[1] as Key | "";
  return slug && slug in stage ? slug : "home";
}

export function StageProvider({ children, photos }: { children: ReactNode; photos: Record<Key, StagePhoto> }) {
  const pathname = usePathname();
  const [hover, setHover] = useState<Key | null>(null);
  const ctx = useMemo(() => ({ setHover }), []);
  const active = hover ?? keyFor(pathname);

  return (
    <StageContext.Provider value={ctx}>
      <div className="shell">
        <aside className="stage">
          <div className="stage-frame">
            {(Object.keys(photos) as Key[]).map((k) => (
              <div className="stage-img" data-on={k === active} key={k}>
                <Image
                  src={photos[k].src}
                  alt={k === active ? photos[k].alt : ""}
                  aria-hidden={k !== active}
                  fill
                  priority={k === "home"}
                  sizes="(min-width: 900px) 47vw, 100vw"
                  style={photos[k].focus ? { objectPosition: photos[k].focus } : undefined}
                />
              </div>
            ))}
          </div>
        </aside>
        {children}
      </div>
    </StageContext.Provider>
  );
}
