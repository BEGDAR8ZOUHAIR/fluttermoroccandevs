/**
 * Central site configuration: identity, navigation, and outbound links.
 * Everything a maintainer needs to rebrand or repoint the community lives here.
 */

export type SocialIcon = "instagram" | "github" | "linkedin" | "youtube" | "discord" | "gdg";

export interface NavItem {
  label: string;
  href: string;
}

export interface Social {
  label: string;
  href: string;
  icon: SocialIcon;
  handle?: string;
}

export const site = {
  name: "FlutterMoroccanDevs",
  shortName: "FMD",
  tagline: "Empowering Flutter Developers in Morocco 🇲🇦",
  description:
    "FlutterMoroccanDevs is a community hub for Flutter and Dart developers across Morocco — building cross-platform apps, sharing knowledge, and growing local talent to global standards.",
  url: "https://fluttermorocco.dev",
  locale: "en",
  email: "hello@fluttermorocco.dev",
  ogImage: "/og.svg",
  /** Primary community join destination. */
  joinHref: "/contribute",
} as const;

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Podcast", href: "/podcast" },
  { label: "Projects", href: "/projects" },
  { label: "Events", href: "/events" },
  { label: "Contribute", href: "/contribute" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Community",
    items: [
      { label: "About us", href: "/about" },
      { label: "Podcast & articles", href: "/podcast" },
      { label: "Open-source projects", href: "/projects" },
      { label: "Meetups & events", href: "/events" },
    ],
  },
  {
    title: "Get involved",
    items: [
      { label: "Join the community", href: site.joinHref },
      { label: "Contribute", href: "/contribute" },
      { label: "Community guidelines", href: "/guidelines" },
      { label: "Suggest a topic", href: "/contribute#suggest" },
    ],
  },
];

export const socials: Social[] = [
  {
    label: "Instagram",
    handle: "@fluttermorocco",
    href: "https://www.instagram.com/fluttermorocco/",
    icon: "instagram",
  },
  {
    label: "GitHub",
    handle: "fluttermorocco",
    href: "https://github.com/fluttermorocco",
    icon: "github",
  },
  {
    label: "LinkedIn",
    handle: "FlutterMoroccanDevs",
    href: "https://www.linkedin.com/company/fluttermoroccandevs",
    icon: "linkedin",
  },
  {
    label: "YouTube",
    handle: "FlutterMoroccanDevs",
    href: "https://www.youtube.com/@fluttermorocco",
    icon: "youtube",
  },
  {
    label: "GDG Morocco",
    handle: "Local chapters",
    href: "https://gdg.community.dev/",
    icon: "gdg",
  },
];
