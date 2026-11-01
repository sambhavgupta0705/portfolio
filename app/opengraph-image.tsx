import { ImageResponse } from "next/og";
import { site } from "@/content/links";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 96, background: "#0c0a08", color: "#ffffff" }}>
        <div style={{ fontSize: 32, color: "#a39d96" }}>hi there, I&apos;m</div>
        <div style={{ fontSize: 120, fontWeight: 700, letterSpacing: -4, display: "flex", borderBottom: "8px solid #f6c437", alignSelf: "flex-start", paddingBottom: 8 }}>{site.name}</div>
        <div style={{ fontSize: 30, color: "#a39d96", marginTop: 36 }}>{site.tagline}</div>
      </div>
    ),
    size,
  );
}
