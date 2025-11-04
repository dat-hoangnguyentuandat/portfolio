export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: string;
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "tutien",
    category: "Coding platform",
    title: "TuTien",
    src: "/assets/projects-screenshots/TuTien/project_1.png",
    screenshots: ["project_1.png"],
    skills: {
      frontend: [
        { title: "TypeScript", bg: "black", fg: "white", icon: "TS" },
        { title: "Next.js", bg: "black", fg: "white", icon: "Next.js" },
        { title: "Chakra UI", bg: "black", fg: "white", icon: "Chakra" },
        { title: "React Query", bg: "black", fg: "white", icon: "React Query" },
        { title: "Firebase", bg: "black", fg: "white", icon: "Firebase" },
      ],
      backend: [
        { title: "Node.js", bg: "black", fg: "white", icon: "Node.js" },
        { title: "Express", bg: "black", fg: "white", icon: "Express" },
        { title: "Prisma", bg: "black", fg: "white", icon: "Prisma" },
        { title: "Python", bg: "black", fg: "white", icon: "Python" },
        { title: "PostgreSQL", bg: "black", fg: "white", icon: "PostgreSQL" },
        { title: "Socket.io", bg: "black", fg: "white", icon: "Socket.io" },
      ],
    },
    live: "https://vangioinguyenkhoi.qzz.io",
    github: "https://github.com/dat-hoangnguyentuandat/TuTien",
    content: null,
  },
  {
    id: "metaball",
    category: "Coupon site",
    title: "Metaball",
    src: "/assets/projects-screenshots/Metaball/project_2.png",
    screenshots: ["project_2.png"],
    live: "https://rainbow-gumption-9a9ea2.netlify.app",
    skills: {
      frontend: [
        { title: "JavaScript", bg: "black", fg: "white", icon: "JS" },
        { title: "Next.js", bg: "black", fg: "white", icon: "Next.js" },
        { title: "Chakra UI", bg: "black", fg: "white", icon: "Chakra" },
        { title: "Vue.js", bg: "black", fg: "white", icon: "Vue.js" },
      ],
      backend: [
        { title: "Node.js", bg: "black", fg: "white", icon: "Node.js" },
        { title: "Express", bg: "black", fg: "white", icon: "Express" },
        { title: "Prisma", bg: "black", fg: "white", icon: "Prisma" },
        { title: "PostgreSQL", bg: "black", fg: "white", icon: "PostgreSQL" },
        { title: "Docker", bg: "black", fg: "white", icon: "Docker" },
      ],
    },
    content: null,
  },
  {
    id: "chatbot",
    category: "Anonymous chat",
    title: "Chatbot",
    src: "/assets/projects-screenshots/Chatbot/project_3.png",
    screenshots: ["project_3.png"],
    live: "https://ai-assistant-tdat.netlify.app",
    github:"https://github.com/dat-hoangnguyentuandat/AI-Assistant",
    skills: {
      frontend: [
        { title: "JavaScript", bg: "black", fg: "white", icon: "JS" },
        { title: "Next.js", bg: "black", fg: "white", icon: "Next.js" },
        { title: "Chakra UI", bg: "black", fg: "white", icon: "Chakra" },
      ],
      backend: [
        { title: "Supabase", bg: "black", fg: "white", icon: "Supabase" },
      ],
    },
    content: null,
  },
];

export default projects;
