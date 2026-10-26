// Edit places, roles and highlights here. Set `current: true` to show the dates in the accent colour.

export type Role = {
  title: string;
  /** Optional line under the title, e.g. the organisation you mentored for. */
  org?: string;
  dates: string;
  current?: boolean;
};

export type Place = {
  name: string;
  roles: Role[];
  highlights: string[];
};

export const experience: Place[] = [
  {
    name: "Goldman Sachs",
    roles: [
      { title: "Engineering Analyst", dates: "July 2025 – Present", current: true },
      { title: "Seasonal Analyst", dates: "Jan 2025 – June 2025" },
    ],
    highlights: [
      "Replaced a legacy data system with an Apache Flink and Kafka pipeline that delivers data downstream in under 2 minutes.",
      "Brought vendor data feeds into the firm's lakehouse, cutting manual trade pre-clearance effort by 45%.",
    ],
  },
  {
    name: "AsyncAPI",
    roles: [
      { title: "Contributor", dates: "July 2023 – April 2024" },
      { title: "Maintainer", dates: "April 2024 – Nov 2025" },
    ],
    highlights: [
      "Reviewed 40+ merge requests and opened 35+ issues to improve the website.",
      "Added caching that cut website load time by 30% and made the UI work on small screens.",
    ],
  },
  {
    name: "Google Summer of Code",
    roles: [
      { title: "Mentor", org: "Postman", dates: "May 2024 – Oct 2024" },
      { title: "Mentor", org: "AsyncAPI Initiative", dates: "May 2025 – Nov 2025" },
    ],
    highlights: [
      "Guided a contributor through a full project cycle, reviewing 10+ pull requests.",
      "Set up GitHub Actions to run tests on every pull request and catch errors before merge.",
    ],
  },
];
