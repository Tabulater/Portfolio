export interface Achievement {
  title: string;
  description: string;
  date: string;
  link?: string;
  icon?: string;
}

export const achievements: Achievement[] = [
  {
    title: "Euclid Mathematics Contest",
    description: "Received Certificate of Participation in the prestigious Euclid Mathematics Contest, demonstrating mathematical problem-solving skills.",
    date: "2024",
    icon: "📐",
    link: "/achievements/euclid"
  },
  {
    title: "Blue Ocean Competition Finalist",
    description: "Achieved top 350 placement in the Blue Ocean Competition for the Gaia Cure pitch, demonstrating innovative thinking in healthcare solutions.",
    date: "2024",
    icon: "🏆",
    link: "#"
  },
  {
    title: "Occaus Creative Writing Contest Winner",
    description: "Won the fiction category at Western University's Occaus Creative Writing Contest for 'Glassblower's Ephemera', showcasing creative excellence.",
    date: "2024",
    icon: "✍️",
    link: "#"
  },
  {
    title: "Principal's Honour Roll",
    description: "Recognized twice for academic excellence by being named to the Principal's Honour Roll, demonstrating consistent high achievement.",
    date: "2023-2024",
    icon: "🎓",
    link: "#"
  }
]; 