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
    title: "Thermal Feedback Glove",
    description: "Developed an innovative haptic feedback glove designed to help patients with peripheral neuropathy. Integrated Peltier elements and temperature sensors to provide precise thermal feedback, creating a therapeutic device for sensory rehabilitation.",
    technologies: ["Arduino", "C++", "Embedded Systems", "Thermal Control", "Medical Devices"],
    featured: true,
    link: "#",
    github: "https://github.com/Tabulater/thermal-glove"
  },
  {
    title: "Portfolio Website",
    description: "Developed a modern, responsive portfolio website using Next.js and Tailwind CSS. Implemented smooth animations, glass-morphism effects, and a clean, professional design to showcase my projects and skills.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    featured: true,
    link: "https://aashrith-raj.vercel.app",
    github: "https://github.com/Tabulater/Portfolio"
  },
  {
    title: "Emergency Response Drone",
    description: "Designed and built an autonomous drone system for emergency response scenarios. Implemented real-time object detection for locating stranded individuals and integrated thermal imaging for night operations. Successfully tested in local emergency response drills.",
    technologies: ["Computer Vision", "Python", "ROS", "Embedded Systems", "Autonomous Navigation"],
    featured: false,
    link: "#",
    github: "https://github.com/Tabulater/emergency-drone"
  },
  {
    title: "Smart Prosthetic Hand",
    description: "Developed a low-cost, 3D-printed prosthetic hand with EMG sensors for intuitive control. Implemented machine learning algorithms for gesture recognition and fine motor control. Created an open-source design to make prosthetics more accessible.",
    technologies: ["3D Printing", "Machine Learning", "EMG Sensors", "Arduino", "Python"],
    featured: false,
    link: "#",
    github: "https://github.com/Tabulater/smart-prosthetic"
  },
  {
    title: "Water Quality Monitoring System",
    description: "Built an IoT-based water quality monitoring system for rural communities. Deployed solar-powered sensors to detect contaminants and alert local authorities. Successfully implemented in three communities, helping ensure safe drinking water.",
    technologies: ["IoT", "Solar Power", "Data Analytics", "Cloud Computing", "Embedded Systems"],
    featured: false,
    link: "#",
    github: "https://github.com/Tabulater/water-monitor"
  }
]; 