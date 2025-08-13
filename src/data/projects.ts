export interface Project {
  title: string;
  description: string;
  technologies: string[];
  featured: boolean;
  link: string;
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "ML Queue Prediction System",
    description: "A comprehensive machine learning research project investigating the application of Neural Networks, Random Forest, and XGBoost algorithms to predict performance metrics in G/G/s queue systems. The project analyzes simulation-generated datasets to forecast queue behavior and system performance, demonstrating how modern ML approaches can provide accurate predictions for complex queue systems and offer insights into system optimization and resource allocation strategies.",
    technologies: ["Python", "TensorFlow/Keras", "Scikit-learn", "XGBoost", "Machine Learning", "Queue Theory", "Neural Networks", "Random Forest"],
    featured: true,
    link: "https://mlqueuingmodels.vercel.app/",
    github: "https://github.com/Tabulater/KingsUniveristyCollege",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmlqueuingmodels.vercel.app%2F?w=1200"
  },
  {
    title: "Entertain AI",
    description: "An AI-powered entertainment recommendation platform that analyzes user preferences and behavior to suggest personalized movies, TV shows, music, and games. Features intelligent content discovery, mood-based recommendations, and social sharing capabilities.",
    technologies: ["React", "TypeScript", "AI/ML", "Recommendation Systems", "User Analytics", "Social Features"],
    featured: true,
    link: "https://entertainai.vercel.app/",
    github: "https://github.com/Tabulater/EntertainAI",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fentertainai.vercel.app%2F?w=1200"
  },
  {
    title: "ReLeaf",
    description: "A comprehensive environmental impact tracking platform that provides real-time data on air quality, emissions, and environmental metrics. Integrates with multiple APIs including EPA air quality, Census data, and Open-Meteo for accurate environmental monitoring and reporting.",
    technologies: ["React", "TypeScript", "Environmental APIs", "Data Visualization", "Real-time Data", "EPA Integration"],
    featured: false,
    link: "https://releaflite.vercel.app/",
    github: "https://github.com/Tabulater/ReLeaf",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Freleaflite.vercel.app%2F?w=1200"
  }
]; 