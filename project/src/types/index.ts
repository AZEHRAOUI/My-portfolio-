export interface Experience {
  date: string;
  company: string;
  title: string;
  description?: string;
  achievements: string[];
}


export interface Project {
  title: string;
  description: string;
  category:string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}