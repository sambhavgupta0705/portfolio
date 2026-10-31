// The photo gallery. Add a photo by dropping the file in /public/gallery and adding a line here.
// `src` is a path under /public. `focus` is an optional CSS object-position to choose the crop.

export type GalleryPhoto = { src: string; alt: string; caption: string; focus?: string };

export const gallery: GalleryPhoto[] = [
  { src: "/fitness/wipro-bengaluru-marathon.jpg", alt: "Sambhav running in a green shirt at the Wipro Bengaluru Marathon", caption: "Wipro Bengaluru Marathon, Sep 2026", focus: "62% 50%" },
  { src: "/fitness/ndm.jpg", alt: "The New Delhi Marathon 2026 finisher medal", caption: "New Delhi Marathon, Feb 2026", focus: "50% 58%" },
  { src: "/fitness/tuffman-bengaluru-half-marathon.jpg", alt: "Sambhav holding up his medal among runners in yellow Tuffman shirts", caption: "Tuffman Bengaluru Half Marathon, Feb 2026", focus: "50% 35%" },
  { src: "/fitness/hyrox-bengaluru.jpg", alt: "Sambhav with both arms raised in front of the Hyrox Bengaluru results board", caption: "Hyrox Bengaluru, Apr 2026", focus: "50% 100%" },
  { src: "/fitness/tcs-world-10k-bengaluru.jpg", alt: "Sambhav with a thumbs up and race bib 15190", caption: "TCS World 10K Bengaluru, Apr 2026", focus: "50% 45%" },
  { src: "/fitness/tata-mumbai-marathon.jpg", alt: "Sambhav in glasses, indoors at night", caption: "In training for the Tata Mumbai Marathon", focus: "50% 55%" },
  { src: "/fitness/hyrox-bengaluru-2027.jpg", alt: "Sambhav in a cream shirt and glasses, outdoors in the sun", caption: "In training for Hyrox Bengaluru 2027", focus: "50% 55%" },
];
