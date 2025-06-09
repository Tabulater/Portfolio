export interface Achievement {
  title: string;
  description: string;
  date: string;
  link?: string;
  icon?: string;
  image?: string;
}

export const achievements: Achievement[] = [
  {
    title: "Euclid Mathematics Contest",
    description: "Participated in the prestigious Euclid Mathematics Contest, demonstrating strong problem-solving skills and mathematical aptitude.",
    date: "2024",
    icon: "📐",
    link: "/euclid",
    image: "/images/euclid-certificate.jpg"
  },
  {
    title: "Blue Ocean",
    description: "Led a team of 4 to develop a web application that helps users find and book sustainable travel experiences. Implemented user authentication, search functionality, and booking system.",
    date: "2025",
    icon: "🏆",
    link: "https://github.com/Tabulater/Blue-Ocean",
    image: "/images/blue-ocean.png"
  },
  {
    title: "Occasus",
    description: "Developed a web application that helps users track and manage their daily tasks and goals. Implemented user authentication, task management, and progress tracking.",
    date: "2025",
    icon: "✍️",
    link: "https://github.com/Tabulater/Occasus",
    image: "/images/occasus.png"
  },
  {
    title: "Principal's Honour Roll",
    description: "Recognized twice for academic excellence by being named to the Principal's Honour Roll, demonstrating consistent high achievement.",
    date: "2023-2024",
    icon: "🎓",
    link: "#"
  }
]; 