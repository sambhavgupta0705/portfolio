// Edit the project rows here. `category` drives the tabs on the Projects page.

export type ProjectCategory = "opensource" | "personal";

export type Project = {
  title: string;
  description: string;
  category: ProjectCategory;
  href: string;
  stack?: string[];
};

export const categoryLabel: Record<ProjectCategory, string> = {
  opensource: "Open source",
  personal: "Personal",
};

export const projects: Project[] = [
  {
    title: "AsyncAPI website",
    description: "Added caching and a responsive redesign that cut page load time by about 30%.",
    category: "opensource",
    href: "https://github.com/asyncapi/website",
  },
  {
    title: "AsyncAPI extensions catalog",
    description: "A community catalog of extensions for AsyncAPI documents.",
    category: "opensource",
    href: "https://github.com/asyncapi/extensions-catalog",
  },
  {
    title: "Viber",
    description: "Real-time chat with group messaging, live typing indicators and secure login.",
    category: "personal",
    href: "https://github.com/sambhavgupta0705/Viber",
    stack: ["Node.js", "Socket.io", "React", "MongoDB"],
  },
  {
    title: "Todoist",
    description: "A task manager with a REST API for creating and tracking work.",
    category: "personal",
    href: "https://github.com/sambhavgupta0705/todoist",
    stack: ["Python", "Django", "REST API"],
  },
];

/**
 * Last known lifetime GitHub contributions. Shown only if the live GitHub call
 * fails or GITHUB_TOKEN is not set. Update it now and then.
 */
export const lastKnownContributions = 3482;
