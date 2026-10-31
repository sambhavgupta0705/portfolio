import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { ScrollEffects } from "@/components/scroll-effects";
import { TopBar } from "@/components/top-bar";
import { site } from "@/content/links";
import "./globals.css";

const hanken = Hanken_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-hanken", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}, software engineer in Bengaluru`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: { type: "website", siteName: site.name, title: site.name, description: site.description, url: "/" },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1efeb" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a08" },
  ],
};

// Runs before first paint: applies the saved theme (no flash) and marks the page as scripted for reveals.
const bootScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t)}catch(e){}document.documentElement.classList.add('js')`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={hanken.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <noscript>
          <style>{`.js [data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <div className="wrap">
          <TopBar />
        </div>
        <main id="main">{children}</main>
        <ScrollEffects />
        <footer className="sfoot">
          <div>
            <span>© 2026 {site.name}</span>
            <span>{site.location}</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
