export interface Achievement {
  title: string;
  description: string;
  date: string;
  icon: string;
  link?: string;
}

export const achievements: Achievement[] = [
  {
    title: "Coop Certificate of Completion",
    description: "Successfully completed the Coop program at King's University College, gaining valuable work experience and professional development skills.",
    date: "2025",
    icon: "🎯",
    link: "/achievements/coop"
  },
  {
    title: "Blue Ocean Competition Finalist",
    description: "Achieved top 350 placement in the Blue Ocean Competition for the Gaia Cure pitch, demonstrating innovative thinking in healthcare solutions.",
    date: "2025",
    icon: "🏆",
    link: "/achievements/blue-ocean"
  },
  {
    title: "Occaus Creative Writing Contest Winner",
    description: "Won the fiction category at Western University's Occaus Creative Writing Contest for 'Glassblower's Ephemera', showcasing creative excellence.",
    date: "2025",
    icon: "✍️",
    link: "/achievements/occaus"
  },
  {
    title: "Principal's Honour Roll",
    description: "Achieved 80% or higher in all subjects for the 2022-2023 and 2023-2024 school years, demonstrating academic excellence.",
    date: "2022-2024",
    icon: "🎓",
    link: "/achievements/honour-roll"
  }
]; 