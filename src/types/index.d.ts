export interface Skill {
  name: string;
  logo: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: Skill[];
  image?: string;
  link: string;
  demo?: string;
}

export interface Category {
  category: string;
  image: string;
  projects: Project[];
}
