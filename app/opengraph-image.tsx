import { ImageResponse } from "next/og";
import { site } from "@/content/links";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 96, background: "#f4f4f2", color: "#141414" }}>
        <div style={{ fontSize: 32, color: "#74746e" }}>hi there, I&apos;m</div>
        <div style={{ fontSize: 120, fontWeight: 700, letterSpacing: -4, display: "flex", borderBottom: "8px solid #e4570f", alignSelf: "flex-start", paddingBottom: 8 }}>{site.name}</div>
        <div style={{ fontSize: 30, color: "#74746e", marginTop: 36 }}>{site.tagline}</div>
      </div>
    ),
    size,
  );
}
