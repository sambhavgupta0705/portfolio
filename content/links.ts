// Edit links, handles and the email address here.

export const site = {
  name: "Sambhav Gupta",
  location: "Bengaluru, India",
  tagline: "Software engineer · Community",
  description:
    "Sambhav Gupta is a software engineer in Bengaluru working on data pipelines, open source and community, and running marathons.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
};

/** Set this to your address when the domain is ready, e.g. "hello@example.com". Empty = placeholder card. */
export const email = "sambhavwork75@gmail.com";

export const githubLogin = "sambhavgupta0705";

export const resumeUrl =
  "https://drive.google.com/file/d/1NvDwaH18HST1lXd5z_nhTdWxq7-BaOkR/view?usp=sharing";

export const links = {
  linkedin: "https://www.linkedin.com/in/sambhavgupta0705/",
  github: "https://github.com/sambhavgupta0705",
  x: "https://x.com/sambhavgupta75",
  instagram: "https://www.instagram.com/sambhavv.mov/",
} as const;

/** Links shown on the board, in order. */
export const socials = [
  { label: "LinkedIn", href: links.linkedin },
  { label: "GitHub", href: links.github },
  { label: "X", href: links.x },
  { label: "Instagram", href: links.instagram },
  { label: "Resume", href: resumeUrl },
];

/** Rows on the Writing page. */
export const writing = [
  {
    title: "Posts and updates on X",
    description: "Short takes on what I'm building and learning",
    side: "@sambhavgupta75",
    href: links.x,
  },
  {
    title: "Posts and updates on LinkedIn",
    description: "Longer notes on work, open source and community",
    side: "sambhavgupta0705",
    href: links.linkedin,
  },
];

/** Row under the fitness grid. */
export const fitnessLink = {
  title: "Workouts and reels",
  description: "Fitness content on Instagram",
  side: "@sambhavv.mov",
  href: links.instagram,
};

/** Postcards on the Contact page. The email card is added from `email` above. */
export const postcards = [
  { stamp: "in", kind: "Best for work", name: "LinkedIn", handle: "sambhavgupta0705", href: links.linkedin },
  { stamp: "X", kind: "Quick thoughts", name: "X", handle: "@sambhavgupta75", href: links.x },
  { stamp: "gh", kind: "See the code", name: "GitHub", handle: "@sambhavgupta0705", href: links.github },
  { stamp: "ig", kind: "Training and life", name: "Instagram", handle: "@sambhavv.mov", href: links.instagram },
];
