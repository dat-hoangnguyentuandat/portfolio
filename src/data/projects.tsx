export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: any;
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

// Empty array since we've removed all projects as requested
const projects: Project[] = [];

export default projects;