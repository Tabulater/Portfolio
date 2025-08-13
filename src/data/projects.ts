export interface Project {
  title: string;
  description: string;
  technologies: string[];
  featured: boolean;
  link: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "Entertain AI",
    description: "An AI-powered entertainment recommendation platform that analyzes user preferences and behavior to suggest personalized movies, TV shows, music, and games. Features intelligent content discovery, mood-based recommendations, and social sharing capabilities.",
    technologies: ["React", "TypeScript", "AI/ML", "Recommendation Systems", "User Analytics", "Social Features"],
    featured: true,
    link: "https://entertain-ai.vercel.app/",
    github: "https://github.com/Tabulater/EntertainAI",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fentertain-ai.vercel.app%2F?w=1200"
  },
  {
    title: "ReLeaf",
    description: "A comprehensive environmental impact tracking platform that provides real-time data on air quality, emissions, and environmental metrics. Integrates with multiple APIs including EPA air quality, Census data, and Open-Meteo for accurate environmental monitoring and reporting.",
    technologies: ["React", "TypeScript", "Environmental APIs", "Data Visualization", "Real-time Data", "EPA Integration"],
    featured: true,
    link: "https://releaflite.vercel.app/",
    github: "https://github.com/Tabulater/ReLeaf",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Freleaflite.vercel.app%2F?w=1200"
  }
]; 