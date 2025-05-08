export interface NavItem {
  id: string;
  label: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface ExperienceItem {
  year: string;
  duration: string;
  title: string;
  organization: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}