import type { ComponentType } from "react";
import {
  ContactDoodle,
  ExperienceDoodle,
  FitnessDoodle,
  MomentsDoodle,
  ProjectsDoodle,
  WritingDoodle,
} from "@/components/doodles";

export type SectionSlug = "projects" | "experience" | "writing" | "moments" | "fitness" | "contact";

export type Section = {
  slug: SectionSlug;
  num: string;
  title: string;
  /** Short line on the board box. */
  boxDesc: string;
  /** Subtitle under the page title. */
  sub: string;
  /** Meta description for the route. */
  description: string;
  Doodle: ComponentType;
};

export const sections: Section[] = [
  {
    slug: "projects",
    num: "01.",
    title: "Projects",
    boxDesc: "code and open source",
    sub: "Code, open source and things I've built",
    description: "Open source work on AsyncAPI and personal projects like Viber and Todoist, plus total GitHub contributions.",
    Doodle: ProjectsDoodle,
  },
  {
    slug: "experience",
    num: "02.",
    title: "Experience",
    boxDesc: "where I've worked",
    sub: "Where I've worked and what I've done",
    description: "Work at Goldman Sachs, maintaining AsyncAPI and mentoring for Google Summer of Code.",
    Doodle: ExperienceDoodle,
  },
  {
    slug: "writing",
    num: "03.",
    title: "Writing",
    boxDesc: "posts and updates",
    sub: "Posts and updates, where I share them",
    description: "Where Sambhav Gupta shares posts and updates: X and LinkedIn.",
    Doodle: WritingDoodle,
  },
  {
    slug: "moments",
    num: "04.",
    title: "Moments",
    boxDesc: "events and people",
    sub: "Events I host and the people who show up",
    description: "Events I host and the people who show up.",
    Doodle: MomentsDoodle,
  },
  {
    slug: "fitness",
    num: "05.",
    title: "Fitness",
    boxDesc: "runs and races",
    sub: "Runs, races and the training behind them",
    description: "Marathons, half marathons, 10K and Hyrox: results and what's next.",
    Doodle: FitnessDoodle,
  },
  {
    slug: "contact",
    num: "06.",
    title: "Contact",
    boxDesc: "say hi",
    sub: "Say hi, I read every message",
    description: "Get in touch with Sambhav Gupta on LinkedIn, X, GitHub or Instagram.",
    Doodle: ContactDoodle,
  },
];

export function getSection(slug: SectionSlug): Section {
  const s = sections.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown section: ${slug}`);
  return s;
}
