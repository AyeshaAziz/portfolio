import ems1 from "../../assets/images/ems1.jpg";
import ems2 from "../../assets/images/ems2.jpg";
import ems3 from "../../assets/images/ems3.jpg";
import ems4 from "../../assets/images/ems4.jpg";
import ems5 from "../../assets/images/ems5.jpg";
import ems6 from "../../assets/images/ems6.jpg";
import ems7 from "../../assets/images/ems7.jpg";
import sh1 from "../../assets/images/sh1.jpeg";
import sh2 from "../../assets/images/sh2.jpeg";
import sh3 from "../../assets/images/sh3.jpeg";
import sh4 from "../../assets/images/sh4.jpeg";
import sh5 from "../../assets/images/sh5.jpeg";
import sh6 from "../../assets/images/sh6.jpeg";
import sh7 from "../../assets/images/sh7.jpeg";
import sh8 from "../../assets/images/sh8.jpeg";
import sh9 from "../../assets/images/sh9.jpeg";
import sh10 from "../../assets/images/sh10.jpeg";
import todo from "../../assets/images/todo.jpg";
import weather from "../../assets/images/weather.jpg";
import playlist from "../../assets/images/playlist.png";
import bookmark from "../../assets/images/bookmark.png";
import pulse from "../../assets/images/pulse.jpeg";
import pulse1 from "../../assets/images/pulse1.jpeg";
import pulse2 from "../../assets/images/pulse2.jpeg";
import pulse3 from "../../assets/images/pulse3.jpeg";
import pulse4 from "../../assets/images/pulse4.jpeg";
import pulse5 from "../../assets/images/pulse5.jpeg";

export interface Project {
  title: string;
  description: string;
  images: string[];
  tech: string[];
  interval: number;
  category: string;
  status?: "ongoing" | "completed";
}

export const projects: Project[] = [
  {
    title: "Videowall Processors Control Application",
    description:
      "An Angular Cordova e-commerce solution. Compatible with Apple iOS, Google Android, and Microsoft Surface tablets. Simplifies common operational tasks, such as preset selection, window management, and source switching. Supports familiar operational gestures, including drag and drop, swipe, long press cut, copy, paste and tap. Control videowalls from up to 10 devices simultaneously.",
    images: [ems1, ems2, ems3, ems4, ems5, ems6, ems7],
    tech: [
      "Angular",
      "Node.js",
      "Cordova",
      "Electron",
      "TypeScript",
      "Sass",
      "RxJS",
      "NgRx",
      "Jasmine",
      "Karma",
      "hammer.js",
    ],
    interval: 4000,
    category: "enterprise",
  },
  {
    title: "Bakery Management System",
    description:
      "A full-stack bakery management system with a public-facing storefront and staff admin dashboard. The storefront offers a product catalog, cart, and checkout with brand storytelling, while the admin dashboard provides inventory management, order processing, recipe organization, cleaning schedules, temperature monitoring, compliance certificates, barcode scanning, and label generation.",
    images: [sh4, sh1, sh2, sh3, sh5, sh6, sh7, sh8, sh9, sh10],
    tech: [
      "React",
      "TypeScript",
      "shadcn/ui",
      "MUI",
      "TailwindCSS",
      "Supabase",
      "React Query",
      "React Router",
      "React Hook Form",
      "Zod",
      "Vite",
    ],
    interval: 4010,
    category: "fullstack",
    status: "ongoing",
  },
  {
    title: "Pulse Analytical Dashboard",
    description:
      "A modern, fully-responsive analytics dashboard built with React. Features real-time animated metrics, interactive charts, customer/product management, dark/light theming, and a spotlight-style global search.",
    images: [pulse, pulse1, pulse2, pulse3, pulse4, pulse5],
    tech: [
      "React",
      "Vite",
      "react-router-dom",
      "framer-motion",
      "recharts",
      "lucide-react",
    ],
    interval: 4000,
    category: "frontend",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    images: [todo],
    tech: ["React", "TypeScript", "Firebase", "Material-UI"],
    interval: 4020,
    category: "frontend",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application that provides detailed forecasts, interactive maps, and location-based weather alerts.",
    images: [weather],
    tech: ["React", "Open-Meteo API", "Chart.js", "CSS3"],
    interval: 4015,
    category: "frontend",
  },
  {
    title: "Featured Playlists App",
    description:
      "A modern, Angular-based web application that lets users browse, filter and explore curated playlists. Built using NgRx for state management and Angular Material for the UI, this project demonstrates end-to-end skills in API integration, component architecture, routing and unit testing.",
    images: [playlist],
    tech: ["Angular", "NgRx", "RxJs", "Angular Material"],
    interval: 4015,
    category: "frontend",
  },
  {
    title: "Bookmarker App",
    description:
      "A responsive bookmarker application that provides standalone features, manages the display, filtering, creation, editing, and deletion of bookmarks. It integrates with the NgRx store to handle state management for bookmarks and uses Angular Material dialogs for CRUD operations.",
    images: [bookmark],
    tech: [
      "Angular",
      "Json Server",
      "NgRx",
      "RxJs",
      "Angular Material",
      "Jasmine-marbles",
      "Typescript",
    ],
    interval: 4015,
    category: "frontend",
  },
];
