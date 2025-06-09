export interface Achievement {
  title: string;
  description: string;
  date: string;
  link?: string;
  icon?: string;
}

export const achievements: Achievement[] = [
  {
    title: "OCCAS Regional Science Fair",
    description: "First Place in Engineering Category - Thermal Feedback Glove Project",
    date: "2024",
    link: "https://occas.ca"
  },
  {
    title: "OCCAS Regional Science Fair",
    description: "Best in Show Award - Thermal Feedback Glove Project",
    date: "2024",
    link: "https://occas.ca"
  },
  {
    title: "OCCAS Regional Science Fair",
    description: "Excellence in Innovation Award - Thermal Feedback Glove Project",
    date: "2024",
    link: "https://occas.ca"
  },
  {
    title: "Blue Ocean Competition Finalist",
    description: "Achieved top 350 placement in the Blue Ocean Competition for the Gaia Cure pitch, demonstrating innovative thinking in healthcare solutions.",
    date: "2024",
    icon: "🏆"
  },
  {
    title: "Occaus Creative Writing Contest Winner",
    description: "Won the fiction category at Western University's Occaus Creative Writing Contest for 'Glassblower's Ephemera', showcasing creative excellence.",
    date: "2024",
    icon: "✍️"
  },
  {
    title: "Principal's Honour Roll",
    description: "Recognized twice for academic excellence by being named to the Principal's Honour Roll, demonstrating consistent high achievement.",
    date: "2023-2024",
    icon: "🎓"
  }
]; 