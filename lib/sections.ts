export type SectionSlug = "projects" | "fitness" | "gallery" | "writing" | "experience" | "contact";

export type Section = {
  slug: SectionSlug;
  title: string;
  /** Short line shown next to the name on the home page. */
  boxDesc: string;
  /** Subtitle under the page title. */
  sub: string;
  /** Meta description for the route. */
  description: string;
};

export const sections: Section[] = [
  {
    slug: "projects",
    title: "Projects",
    boxDesc: "code and open source",
    sub: "Code, open source and things I've built",
    description: "Open source work on AsyncAPI and personal projects like Viber, Todoist and Runwrap, plus total GitHub contributions.",
  },
  {
    slug: "fitness",
    title: "Fitness",
    boxDesc: "runs and races",
    sub: "Runs, races and the training behind them",
    description: "Marathons, half marathons, 10K and Hyrox: results and what's next.",
  },
  {
    slug: "gallery",
    title: "Photo gallery",
    boxDesc: "races, training and people",
    sub: "Races, training and the people along the way",
    description: "Photos from races, training and community events.",
  },
  {
    slug: "writing",
    title: "Writing",
    boxDesc: "posts and updates",
    sub: "Posts and updates, where I share them",
    description: "Where Sambhav Gupta shares posts and updates: X and LinkedIn.",
  },
  {
    slug: "experience",
    title: "Experience",
    boxDesc: "where I've worked",
    sub: "Where I've worked and what I've done",
    description: "Work at Goldman Sachs, maintaining AsyncAPI and mentoring for Google Summer of Code.",
  },
  {
    slug: "contact",
    title: "Contact",
    boxDesc: "say hi",
    sub: "Say hi, I read every message.",
    description: "Get in touch with Sambhav Gupta by email, LinkedIn, X, GitHub or Instagram.",
  },
];

export function getSection(slug: SectionSlug): Section {
  const s = sections.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown section: ${slug}`);
  return s;
}
