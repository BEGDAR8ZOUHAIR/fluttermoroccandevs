export interface Episode {
  slug: string;
  number: number;
  title: string;
  description: string;
  /** ISO date the episode was published. */
  date: string;
  durationSeconds: number;
  hosts: string[];
  guests: string[];
  tags: string[];
  videoUrl: string;
}

export const episodes: Episode[] = [
  {
    slug: "flutter-2026-dart-4-impeller",
    number: 60,
    title: "Flutter in 2026: Dart 4, Impeller everywhere, and what's next",
    description:
      "We unpack the latest Flutter release, what Impeller means for jank-free UI on every platform, and where the Dart language is heading.",
    date: "2026-09-28",
    durationSeconds: 3720,
    hosts: ["Achraf Benali", "Imane Zeroual"],
    guests: ["Yassine Benhima"],
    tags: ["Flutter", "Dart", "Roadmap"],
    videoUrl: "https://www.youtube.com/@fluttermorocco",
  },
  {
    slug: "state-management-showdown-2026",
    number: 59,
    title: "State management showdown: Riverpod vs Bloc vs Signals",
    description:
      "Three community builders defend their favourite state-management approach with real production stories and hard trade-offs.",
    date: "2026-09-14",
    durationSeconds: 4080,
    hosts: ["Imane Zeroual"],
    guests: ["Salma El Amrani", "Omar Idrissi", "Nada Bouzid"],
    tags: ["Architecture", "Riverpod", "Bloc"],
    videoUrl: "https://www.youtube.com/@fluttermorocco",
  },
  {
    slug: "casablanca-to-remote-flutter-role",
    number: 58,
    title: "From Casablanca to a remote Flutter role",
    description:
      "How two Moroccan developers landed international remote Flutter jobs: portfolios, interviews, and the habits that made the difference.",
    date: "2026-08-31",
    durationSeconds: 3360,
    hosts: ["Achraf Benali"],
    guests: ["Hamza Makraz", "Khadija Rami"],
    tags: ["Careers", "Community"],
    videoUrl: "https://www.youtube.com/@fluttermorocco",
  },
  {
    slug: "offline-first-drift-sqlite",
    number: 57,
    title: "Offline-first apps with Drift and SQLite",
    description:
      "A practical tour of local-first Flutter apps: schema migrations, sync strategies, and keeping the UI honest when the network drops.",
    date: "2026-08-17",
    durationSeconds: 3540,
    hosts: ["Imane Zeroual"],
    guests: ["Reda El Figuigui"],
    tags: ["Database", "Drift", "Offline"],
    videoUrl: "https://www.youtube.com/@fluttermorocco",
  },
  {
    slug: "rtl-arabic-darija-localization",
    number: 56,
    title: "RTL, Arabic, and Darija localization done right",
    description:
      "Directionality, fonts, plural rules, and the cultural details that turn a translated app into a native-feeling one for Moroccan users.",
    date: "2026-08-03",
    durationSeconds: 3180,
    hosts: ["Achraf Benali"],
    guests: ["Salma El Amrani", "Yassine Benhima"],
    tags: ["Localization", "RTL", "Darija"],
    videoUrl: "https://www.youtube.com/@fluttermorocco",
  },
  {
    slug: "one-codebase-web-desktop",
    number: 55,
    title: "Shipping one Flutter codebase to web and desktop",
    description:
      "Responsive breakpoints, plugin gaps, and packaging for the stores — what actually breaks when you leave mobile behind.",
    date: "2026-07-20",
    durationSeconds: 3420,
    hosts: ["Imane Zeroual", "Achraf Benali"],
    guests: ["Omar Idrissi"],
    tags: ["Web", "Desktop", "Multiplatform"],
    videoUrl: "https://www.youtube.com/@fluttermorocco",
  },
];

/** Newest first. */
export const episodesByDate: Episode[] = [...episodes].sort((a, b) =>
  a.date < b.date ? 1 : -1,
);
