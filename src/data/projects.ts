export interface Project {
  name: string;
  description: string;
  url: string;
  language: string;
  stars: number;
  tags: string[];
  author: string;
}

export const projects: Project[] = [
  {
    name: "souk_pos",
    description:
      "An open-source point-of-sale app helping small Moroccan shops manage inventory, receipts, and daily sales offline.",
    url: "https://github.com/fluttermorocco",
    language: "Dart",
    stars: 312,
    tags: ["Flutter", "App", "Offline-first"],
    author: "FlutterMoroccanDevs",
  },
  {
    name: "flutter_moroccan_ui",
    description:
      "A themeable UI kit of Moroccan-inspired widgets, colors, and patterns for building distinctive Flutter interfaces.",
    url: "https://github.com/fluttermorocco",
    language: "Dart",
    stars: 240,
    tags: ["Flutter", "UI Kit", "Package"],
    author: "Nada Bouzid",
  },
  {
    name: "moroccan_cities",
    description:
      "A typed, up-to-date dataset of Moroccan regions, provinces, and cities with coordinates, ready for pub.dev consumers.",
    url: "https://github.com/fluttermorocco",
    language: "Dart",
    stars: 184,
    tags: ["Dart", "Data", "Package"],
    author: "Omar Idrissi",
  },
  {
    name: "salah_times",
    description:
      "Prayer and iftar times for Moroccan cities with Qibla direction, notifications, and full offline support.",
    url: "https://github.com/fluttermorocco",
    language: "Dart",
    stars: 158,
    tags: ["Flutter", "App", "Offline-first"],
    author: "Reda El Figuigui",
  },
  {
    name: "atlas_maps",
    description:
      "An offline vector-maps widget for Flutter, tuned for low-connectivity regions and small download sizes.",
    url: "https://github.com/fluttermorocco",
    language: "Dart",
    stars: 131,
    tags: ["Flutter", "Maps", "Package"],
    author: "Hamza Makraz",
  },
  {
    name: "darija_l10n",
    description:
      "A gen-l10n bridge that brings Darija strings, pluralization, and RTL helpers to standard Flutter localization.",
    url: "https://github.com/fluttermorocco",
    language: "Dart",
    stars: 96,
    tags: ["Flutter", "Localization", "Darija"],
    author: "Salma El Amrani",
  },
];

/** Highest-starred first. */
export const projectsByStars: Project[] = [...projects].sort((a, b) => b.stars - a.stars);
