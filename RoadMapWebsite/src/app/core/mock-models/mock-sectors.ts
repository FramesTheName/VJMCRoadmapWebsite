import { CareerSector } from '../models/career-sector';

export const SECTORS: CareerSector[] = [
  {
    "id": 1,
    "name": "Information Security",
    "description": "Design and implement security measures that thwart attacks on computer systems, networks, and data",
    "careers": [
      1,
      2
    ]
  },
  {
    "id": 2,
    "name": "Network and Cloud Technology",
    "description": "Install, configure and administer the networking equipment and network services responsible for the flow of information in and around organizations.",
    "careers": [
      1,
      3
    ]
  },
  {
    "id": 3,
    "name": "Hardware, Services & Infrastructure",
    "description": "Build and maintain the foundations of an organization�s IT environment",
    "careers": [
      2
    ]
  },
  {
    "id": 4,
    "name": "IT Management & Strategy",
    "description": "Drive the strategic use of technology within an enterprise.",
    "careers": [
      2,
      3
    ]
  },
  {
    "id": 5,
    "name": "Storage & Data",
    "description": "Install, safeguard, predict usage, and resolve shortages of electronic storage and data.",
    "careers": []
  },
  {
    "id": 6,
    "name": "Web/Mobile",
    "description": "Manage devices and build compelling end user experiences on web sites, landing pages and mobile platforms.",
    "careers": []
  },
  {
    "id": 7,
    "name": "Training",
    "description": "E.g. Financial",
    "careers": []
  },
  {
    "id": 8,
    "name": "Software Development",
    "description": ".Write code and create software that entertains the masses, offers businesses a competitive edge, or frees people from repetitive and mundane tasks.",
    "careers": []
  }
];
