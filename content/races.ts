// Races in date order. A photo is read from /public/fitness/<slug>.jpg; without it a "photo soon" placeholder shows.

export type Race = {
  slug: string;
  name: string;
  date: string;
  chip: string;
  /** The big text on the card. */
  result: string;
  /** "time" = big orange; "quiet" = small grey; "now" = small, accent colour. */
  tone: "time" | "quiet" | "now";
  /** Where to crop a portrait photo inside the 4:3 card, as a CSS object-position (default "50% 50%"). */
  focus?: string;
  /** Used for the Time / Pace toggle. Leave out when pace makes no sense (e.g. Hyrox). */
  km?: number;
  minutes?: number;
};

export const races: Race[] = [
  { slug: "ndm", name: "NDM", date: "Feb 2026", chip: "Full marathon", result: "3:57", tone: "time", km: 42.195, minutes: 237, focus: "50% 58%" },
  {
    slug: "tuffman-bengaluru-half-marathon",
    name: "Tuffman Bengaluru Half Marathon",
    date: "Feb 2026",
    chip: "Half marathon",
    result: "1:57",
    tone: "time",
    km: 21.0975,
    minutes: 117,
    focus: "50% 32%",
  },
  { slug: "hyrox-bengaluru", name: "Hyrox Bengaluru", date: "Apr 2026", chip: "Hyrox", result: "1:55", tone: "time", focus: "50% 100%" },
  { slug: "tcs-world-10k-bengaluru", name: "TCS World 10K Bengaluru", date: "Apr 2026", chip: "10K", result: "48 min", tone: "time", km: 10, minutes: 48, focus: "50% 45%" },
  {
    slug: "wipro-bengaluru-marathon",
    name: "Wipro Bengaluru Marathon",
    date: "Sep 2026",
    chip: "Full marathon",
    result: "4:16",
    tone: "time",
    km: 42.195,
    minutes: 256,
    focus: "62% 50%",
  },
  {
    slug: "tata-mumbai-marathon",
    name: "Tata Mumbai Marathon (TMM)",
    date: "Jan 2027",
    chip: "Upcoming",
    result: "In training",
    tone: "now",
    focus: "50% 55%",
  },
  {
    slug: "hyrox-bengaluru-2027",
    name: "Hyrox Bengaluru 2027",
    date: "May 2027",
    chip: "Upcoming",
    result: "In training",
    tone: "now",
    focus: "50% 55%",
  },
];
