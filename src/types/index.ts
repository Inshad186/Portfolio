export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  architectureOverview: string;
  challenges: string[];
  whatILearned: string[];
  githubUrl: string;
  demoUrl: string;
  accentColor?: string;
  image?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface JourneyItem {
  title: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}