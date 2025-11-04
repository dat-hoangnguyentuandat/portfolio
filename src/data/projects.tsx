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
    id: "codingducks",
    category: "Coding platform",
    title: "Coding Ducks",
    src: "/assets/projects-screenshots/codingducks/project_1.png",
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
    live: "https://www.codingducks.xyz/",
    github: "https://github.com/Naresh-Khatri/Coding-Ducks",
    content: null,
  },
  {
    id: "couponluxury",
    category: "Coupon site",
    title: "Coupon Luxury",
    src: "/assets/projects-screenshots/couponluxury/project_2.png",
    screenshots: ["project_2.png"],
    live: "https://www.couponluxury.com/",
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
    id: "ghostchat",
    category: "Anonymous chat",
    title: "GhostChat",
    src: "/assets/projects-screenshots/ghostchat/project_3.png",
    screenshots: ["project_3.png"],
    live: "https://ghostchat.vercel.app",
    github:"https://github.com/Naresh-Khatri/GhostChat",
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
