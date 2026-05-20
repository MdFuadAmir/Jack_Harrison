import img1 from "../assets/project1.png";
import img2 from "../assets/project2.png";
import img3 from "../assets/project3.png";
import img4 from "../assets/project4.png";
import img5 from "../assets/project5.png";
import img6 from "../assets/project6.png";

export const projectData = [
  {
    id: 1,
    title: "ApexDrive - Premium Car Rental SaaS",
    subtitle:
      "A luxury vehicle rental system with dynamic management dashboards.",
    category: "Full Stack",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    clientName: "ApexDrive Corp, Germany",
    duration: "2 Months",
    projectType: "Commercial SaaS",
    completionDate: "April 2026",
    liveUrl: "https://md-fuad-amir.web.app",
    githubClient: "https://github.com/username/apexdrive-client",
    githubServer: "https://github.com/username/apexdrive-server",
    featuredImage: img1,
    features: [
      "Advanced multi-criteria car search & real-time filter system.",
      "Secure user authentication with JWT & role-based dashboard.",
      "Interactive booking management calendar using TanStack Query.",
      "Dynamic cost calculation based on days with coupon system.",
    ],
    description:
      "ApexDrive is a premium car rental application engineered to provide a high-end luxury user experience. It features full CRUD functionalities on bookings, responsive design utilizing Tailwind CSS, and optimized global state management using React Context and Axios intercepters.",
  },
  {
    id: 2,
    title: "ZenithSpace - Luxury Interior Portfolio",
    subtitle:
      "A minimal and aesthetic interior design portfolio with CMS dashboard.",
    category: "Full Stack",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Firebase", "Node.js"],
    clientName: "ZenithSpace Studio",
    duration: "1.5 Months",
    projectType: "Creative Agency Portfolio",
    completionDate: "March 2026",
    liveUrl: "https://grace-wilson.vercel.app",
    githubClient: "https://github.com/username/zenithspace-client",
    githubServer: "https://github.com/username/zenithspace-server",
    featuredImage: img2,

    features: [
      "Stunning fluid 3D-like animations powered by Framer Motion.",
      "Fully customized Light/Dark theme switching optimized with Tailwind.",
      "Full-stack admin dashboard to live-edit showcases, blogs, and logos.",
      "Advanced client testimonial system with horizontal scroll-snap grids.",
    ],
    description:
      "A luxury theme-based architecture and interior design platform. This project integrates React Hook Form for seamless user inquiries and couples a micro-animation system to build trust and brand authenticity for high-ticket clients.",
  },
  {
    id: 3,
    title: "DevPulse - Tech Blogging & Forum Platform",
    subtitle:
      "An engaging community space for developer blogs, articles, and code snippets.",
    category: "Full Stack",
    tags: ["MongoDB", "Express", "React", "Node.js", "Axios"],
    clientName: "Open Source Community",
    duration: "1 Month",
    projectType: "Community Platform",
    completionDate: "February 2026",
    liveUrl: "https://ryan-mitchell.vercel.app",
    githubClient: "https://github.com/username/devpulse-client",
    githubServer: "https://github.com/username/devpulse-server",
    featuredImage: img3,

    features: [
      "Interactive code block syntax highlighting setup.",
      "Upvote, downvote, and dynamic commenting infrastructure.",
      "Real-time notifications powered by optimized Express backend routes.",
      "User profiling with stats tracker (Total blogs, reads, points).",
    ],
    description:
      "DevPulse brings full stack performance to community hubs. Utilizing TanStack Query for cache invalidation and instant layout rendering, it ensures developers can seamlessly communicate, share codes, and maintain a lightweight profile.",
  },
  {
    id: 4,
    title: "LuxeVibe - Minimalist E-Commerce Shop",
    subtitle:
      "Premium storefront focusing on modern apparel, checkout workflows, and metrics.",
    category: "Frontend",
    tags: ["React", "Tailwind CSS", "Framer Motion", "TanStack Query"],
    clientName: "LuxeVibe Brand Ltd",
    duration: "3 Weeks",
    projectType: "E-Commerce Frontend",
    completionDate: "January 2026",
    liveUrl: "https://ella-thompson.vercel.app ",
    githubClient: "https://github.com/username/luxevibe-frontend",
    githubServer: null,
    featuredImage: img4,

    features: [
      "Fluid animated cart sliding sheet and custom interactive product views.",
      "Advanced product filtration based on color palettes, sizing, and pricing.",
      "Persisted client local storage sync for maintaining offline carts.",
      "Skeleton states matching luxury layouts while loading network requests.",
    ],
    description:
      "A state-of-the-art e-commerce frontend built with performance and smoothness as topmost priorities. Eliminates UI jank completely by pre-fetching data hooks and streamlining responsive layout flows.",
  },
  {
    id: 5,
    title: "NovaTask - Team Project Management Tool",
    subtitle:
      "A Kanban board tracking system engineered for remote tech startups.",
    category: "Full Stack",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    clientName: "NovaHQ Inc, USA",
    duration: "2 Months",
    projectType: "SaaS Productivity Tool",
    completionDate: "November 2025",
    liveUrl: "https://james-carter-ivory.vercel.app",
    githubClient: "https://github.com/username/novatask-client",
    githubServer: "https://github.com/username/novatask-server",
    featuredImage: img5,

    features: [
      "Drag-and-drop functional Kanban boards for dynamic task stages.",
      "Real-time team activity logs and instant task member assignment.",
      "Comprehensive milestone tracking utilizing multi-tier data points.",
      "Secure password encryption and enterprise-level route protections.",
    ],
    description:
      "NovaTask bridges task workflows and team alignments. Engineered strictly on scalable Express structures and structured Mongoose models to allow deep nested task creations without server lagging bottlenecks.",
  },
  {
    id: 6,
    title: "EcoStay - Green Hotel Booking Dashboard",
    subtitle:
      "Eco-friendly reservation system featuring complex metrics, and graphs.",
    category: "Full Stack",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Axios"],
    clientName: "EcoStay Hospitality Group",
    duration: "1.5 Months",
    projectType: "Internal ERP Platform",
    completionDate: "September 2025",
    liveUrl: "https://adrian-cole.vercel.app/",
    githubClient: "https://github.com/username/ecostay-client",
    githubServer: "https://github.com/username/ecostay-server",
    featuredImage: img6,

    features: [
      "Comprehensive earnings & booking charts using standard React graphs.",
      "Live status indicator tags for active, checked-out, and canceled stays.",
      "Server-side paginated queries to handle massive historical client entry lists.",
      "Automated PDF booking slip receipt generator system.",
    ],
    description:
      "An administrative workspace and customer booking app combo built to support high-traffic operations. Ensures clean layout responsiveness and maintains optimal security audits on sensitive organizational financial logs.",
  },
];
