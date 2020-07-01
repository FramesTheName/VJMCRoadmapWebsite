import { CareerSector } from "../models/career-sector";

export const SECTORS: CareerSector[] = [
  {
    id: 1,
    name: "Information Security",
    description:
      "Design and implement security measures that thwart attacks on computer systems, networks, and data",
    careers: [1, 9, 17],
  },
  {
    id: 2,
    name: "Network and Cloud Technology",
    description:
      "Install, configure and administer the networking equipment and network services responsible for the flow of information in and around organizations.",
    careers: [2, 10, 18],
  },
  {
    id: 3,
    name: "Hardware, Services & Infrastructure",
    description:
      "Build and maintain the foundations of an organization's IT environment",
    careers: [3, 11, 19],
  },
  {
    id: 4,
    name: "IT Management & Strategy",
    description: "Drive the strategic use of technology within an enterprise.",
    careers: [4, 12, 20],
  },
  {
    id: 5,
    name: "Storage & Data",
    description:
      "Install, safeguard, predict usage, and resolve shortages of electronic storage and data.",
    careers: [5, 13, 21],
  },
  {
    id: 6,
    name: "Web/Mobile",
    description:
      "Manage devices and build compelling end user experiences on web sites, landing pages and mobile platforms.",
    careers: [6, 14, 16, 22],
  },
  {
    id: 7,
    name: "Training",
    description: "E.g. Financial",
    careers: [7, 15, 23],
  },
  {
    id: 8,
    name: "Software Development",
    description:
      ".Write code and create software that entertains the masses, offers businesses a competitive edge, or frees people from repetitive and mundane tasks.",
    careers: [8, 16, 24],
  },
];
