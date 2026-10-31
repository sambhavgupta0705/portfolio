// "Cool stuff" cards on the home page. Use `image` (a path under /public) for a photo card,
// or `panel` ("gold" | "ink") with `wordmark` for a bold typographic card.

export type ShowcaseItem = {
  title: string;
  text: string;
  /** Link label, e.g. "Open site". */
  cta: string;
  /** Internal path (starts with /) or full URL. */
  href: string;
  image?: { src: string; alt: string; focus?: string };
  panel?: "gold" | "ink";
  wordmark?: string;
};

export const showcase: ShowcaseItem[] = [
  {
    title: "Marathons",
    text: "Two full marathons in 2026: 3:57 at the New Delhi Marathon and 4:16 at the Wipro Bengaluru Marathon.",
    cta: "See the races",
    href: "/fitness",
    image: { src: "/fitness/wipro-bengaluru-marathon.jpg", alt: "Sambhav running at the Wipro Bengaluru Marathon in a green shirt", focus: "62% 50%" },
  },
  {
    title: "Runwrap",
    text: "A Strava recap of your running activity. Built and live.",
    cta: "Open the site",
    href: "https://runwrap.vercel.app",
    panel: "gold",
    wordmark: "Runwrap",
  },
  {
    title: "Hyrox Bengaluru",
    text: "Finished in 1:55 in April 2026, and training for the 2027 edition in May.",
    cta: "See the progress",
    href: "/fitness",
    image: { src: "/fitness/hyrox-bengaluru.jpg", alt: "Sambhav with both arms raised in front of the Hyrox Bengaluru results board", focus: "50% 100%" },
  },
  {
    title: "AsyncAPI",
    text: "Maintained the website and the Extensions Catalog for the open source AsyncAPI project.",
    cta: "See the projects",
    href: "/projects",
    panel: "ink",
    wordmark: "AsyncAPI",
  },
];
