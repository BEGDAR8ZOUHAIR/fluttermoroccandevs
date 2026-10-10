export type EventFormat = "in-person" | "online" | "hybrid";

export interface CommunityEvent {
  title: string;
  city: string;
  venue: string;
  /** ISO 8601 local start time. */
  date: string;
  format: EventFormat;
  description: string;
  organizer: string;
  rsvpUrl: string;
}

export const events: CommunityEvent[] = [
  {
    title: "Flutter Morocco Meetup #12 — Impeller deep dive",
    city: "Casablanca",
    venue: "Technopark Casablanca",
    date: "2026-11-07T18:00:00",
    format: "in-person",
    description:
      "A hands-on evening on jank-free rendering with Impeller, plus lightning talks and a hiring corner.",
    organizer: "FlutterMoroccanDevs · GDG Casablanca",
    rsvpUrl: "https://gdg.community.dev/",
  },
  {
    title: "Flutter & Dart beginner workshop",
    city: "El Jadida",
    venue: "Chouaib Doukkali University",
    date: "2026-11-21T10:00:00",
    format: "in-person",
    description:
      "A full-day, laptop-in-hand introduction to Dart and Flutter for students building their first cross-platform app.",
    organizer: "FlutterMoroccanDevs · GDG El Jadida",
    rsvpUrl: "https://gdg.community.dev/",
  },
  {
    title: "GDG DevFest Rabat 2026",
    city: "Rabat",
    venue: "Mohammed V University, Agdal",
    date: "2026-12-06T09:00:00",
    format: "hybrid",
    description:
      "Morocco's biggest community developer festival, with a dedicated Flutter track streamed online for remote members.",
    organizer: "GDG Rabat",
    rsvpUrl: "https://gdg.community.dev/",
  },
  {
    title: "Flutter Forward Extended Marrakech",
    city: "Marrakech",
    venue: "Cadi Ayyad University",
    date: "2027-01-17T14:00:00",
    format: "in-person",
    description:
      "A viewing party and local discussion of the annual Flutter Forward announcements, with live demos.",
    organizer: "FlutterMoroccanDevs",
    rsvpUrl: "https://gdg.community.dev/",
  },
  {
    title: "Women in Flutter — Agadir",
    city: "Agadir",
    venue: "Ibn Zohr University",
    date: "2026-09-20T15:00:00",
    format: "in-person",
    description:
      "A celebration of women building with Flutter in Morocco, with mentoring sessions and portfolio reviews.",
    organizer: "FlutterMoroccanDevs",
    rsvpUrl: "https://gdg.community.dev/",
  },
  {
    title: "Flutter summer bootcamp",
    city: "Fes",
    venue: "Sidi Mohamed Ben Abdellah University",
    date: "2026-06-14T09:00:00",
    format: "in-person",
    description:
      "A two-day bootcamp that took 80 students from zero to a published first Flutter app.",
    organizer: "GDG Fes",
    rsvpUrl: "https://gdg.community.dev/",
  },
];

/** Chronological ascending — nearest upcoming first. */
export const eventsByDate: CommunityEvent[] = [...events].sort((a, b) =>
  a.date > b.date ? 1 : -1,
);
