// The fixed photograph on the left of every page. Photos live in /public (these reuse the fitness photos).
// Change `src` to use another picture; `focus` is a CSS object-position that picks the crop.

export type StagePhoto = { src: string; alt: string; focus?: string };

export const stage: Record<"home" | "projects" | "experience" | "writing" | "moments" | "fitness" | "contact", StagePhoto> = {
  home: { src: "/fitness/wipro-bengaluru-marathon.jpg", alt: "Sambhav running the last stretch of the Wipro Bengaluru Marathon in a green shirt", focus: "62% 50%" },
  projects: { src: "/fitness/hyrox-bengaluru-2027.jpg", alt: "Sambhav in a cream shirt and glasses, outdoors in the sun", focus: "50% 45%" },
  experience: { src: "/fitness/tcs-world-10k-bengaluru.jpg", alt: "Sambhav with a thumbs up and race bib 15190 after the TCS World 10K Bengaluru", focus: "50% 40%" },
  writing: { src: "/fitness/tata-mumbai-marathon.jpg", alt: "Sambhav in glasses making a hand gesture at his forehead, indoors at night", focus: "50% 45%" },
  moments: { src: "/fitness/tuffman-bengaluru-half-marathon.jpg", alt: "Sambhav holding up his medal among runners in yellow Tuffman shirts", focus: "50% 35%" },
  fitness: { src: "/fitness/ndm.jpg", alt: "The New Delhi Marathon 2026 finisher medal held up in front of running shoes", focus: "50% 58%" },
  contact: { src: "/fitness/hyrox-bengaluru.jpg", alt: "Sambhav with both arms raised in front of the Hyrox Bengaluru results board", focus: "50% 100%" },
};
