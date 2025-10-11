import ems1 from "../../assets/images/ems1.jpg";
import ems2 from "../../assets/images/ems2.jpg";
import ems3 from "../../assets/images/ems3.jpg";
import ems4 from "../../assets/images/ems4.jpg";
import ems5 from "../../assets/images/ems5.jpg";
import ems6 from "../../assets/images/ems6.jpg";
import ems7 from "../../assets/images/ems7.jpg";
import sh1 from "../../assets/images/sh1.png";
import sh2 from "../../assets/images/sh2.png";
import sh3 from "../../assets/images/sh3.png";
import sh4 from "../../assets/images/sh4.png";
import sh5 from "../../assets/images/sh5.png";
import sh6 from "../../assets/images/sh6.png";
import sh7 from "../../assets/images/sh7.png";
import sh8 from "../../assets/images/sh8.png";
import sh9 from "../../assets/images/sh9.png";
import sh10 from "../../assets/images/sh10.png";

export const projects = [
  {
    title: "Videowall Processors Control Application",
    description:
      "An Angular Cordova e-commerce solution. Compatible with Apple® iOS®, Google® Android™, and Microsoft® Surface tablets. Simplifies common operational tasks, such as preset selection, window management, and source switching. Supports familiar operational gestures, including drag and drop, swipe, long press cut, copy , paste and tap. Control videowalls from up to 10 devices simultaneously. Audio Source Selection, Prioritize windows by layer, Save and recall presets, Switch sources, Manage video wall layouts, Control multiple video walls etc",
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
    interval: 4000
  },
  {
    title: "Bakery Management System",
    description: "An intuitive and visually polished bakery management system that streamlines day-to-day perations for bakeries. It features modules for inventory tracking, order management, recipe organization cleaning schedules, temperature monitoring, and compliance management all designed and implemented with a warm, user-friendly interface. It blends functionality and delightful design to help bakers focus less on logistics and more on baking joy.",
    images: [sh4, sh1, sh2, sh3, sh5, sh6, sh7, sh8, sh9, sh10],
    tech: ["React", "TypeScript", "radix-ui", "MUI", "TailwindCss", "Vite", "RxJs"], interval: 4010
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop",
    ],
    tech: ["React", "TypeScript", "Firebase", "Material-UI"], interval: 4020
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather application that provides detailed forecasts, interactive maps, and location-based weather alerts.',
    images: ['https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=300&fit=crop'],
    tech: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'], interval: 4015
  }
];