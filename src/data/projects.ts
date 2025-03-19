export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Responsive personal portfolio showcasing skills and projects",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "Skin Diagnosis App",
    description: "Utilizes your phone's camera to analyze skin conditions and provide personalized health recommendations.",
    technologies: ["React Native", "TensorFlow", "Python", "Flask"],
    featured: true,
  },
  {
    title: "Distributed Computing Network for Scientific Research",
    description: "Created a distributed computing network using old PCs to support scientific projects using BOINC",
    technologies: ["Python", "Linux", "BOINC", "System Administration"],
    featured: true,
  },
  {
    title: "Smart Glove for Peripheral Neuropathy",
    description: "Developed a smart glove that helps patients with peripheral neuropathy regain their sense of touch.",
    technologies: ["Arduino", "C++", "Electronics", "Medical Devices"],
    featured: false,
  },
  {
    title: "YouTube Channel",
    description: "Utilize Manim to create educational content for my youtube channel.",
    technologies: ["Python", "Manim", "Video Production", "Content Creation"],
    featured: false,
  }
]; 