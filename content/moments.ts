// One row per event. Put photos in /public/moments and list the file names in `photos`.
// Example:
//   { title: "Community meetup", date: "Mar 2026", place: "Bengaluru", photos: ["meetup-1.jpg", "meetup-2.jpg"] }

export type Moment = {
  title: string;
  date: string;
  place: string;
  photos?: string[];
};

export const moments: Moment[] = [];
