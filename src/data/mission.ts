export interface Stat {
  value: string;
  label: string;
  icon: "users" | "calendar" | "git-branch" | "map-pin" | "headphones";
}

export const stats: Stat[] = [
  { value: "2,400+", label: "Active members", icon: "users" },
  { value: "45+", label: "Workshops held", icon: "calendar" },
  { value: "32", label: "Open-source projects", icon: "git-branch" },
  { value: "8", label: "Moroccan cities", icon: "map-pin" },
  { value: "60+", label: "Podcast episodes", icon: "headphones" },
];

export interface Pillar {
  title: string;
  description: string;
  icon: "book-open" | "git-branch" | "globe" | "heart-handshake";
}

export const pillars: Pillar[] = [
  {
    title: "Knowledge exchange",
    description:
      "Podcasts, articles, and workshops in Darija, French, and English where beginners and seniors learn from each other.",
    icon: "book-open",
  },
  {
    title: "Open source by default",
    description:
      "We ship real Flutter apps and pub.dev packages together, so every contribution becomes a portfolio piece.",
    icon: "git-branch",
  },
  {
    title: "Local talent, global standards",
    description:
      "Bridging Moroccan universities and cities with international engineering practices and remote opportunities.",
    icon: "globe",
  },
  {
    title: "An inclusive community",
    description:
      "A welcoming space across all Moroccan cities — from Casablanca to El Jadida, Rabat, Marrakech, and beyond.",
    icon: "heart-handshake",
  },
];
