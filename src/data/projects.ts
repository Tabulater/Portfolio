export interface Project {
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  link: string;
  github?: string;
  live?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Thermal Feedback Glove",
    description: "An innovative haptic feedback system that provides temperature sensations through a wearable glove interface.",
    technologies: ["Arduino", "C++", "3D Printing", "Electronics"],
    featured: true,
    link: "#",
    github: "https://github.com/yourusername/thermal-glove",
    image: "/images/thermal-glove.jpg"
  },
  {
    title: "Smart Home Automation",
    description: "A comprehensive home automation system with voice control and energy optimization features.",
    technologies: ["Python", "Raspberry Pi", "IoT", "MQTT"],
    featured: true,
    link: "#",
    github: "https://github.com/yourusername/smart-home",
    live: "https://smart-home-demo.com",
    image: "/images/smart-home.jpg"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    featured: true,
    link: "https://aashrith-raj.vercel.app",
    github: "https://github.com/Tabulater/Portfolio",
    live: "https://your-portfolio.com",
    image: "/images/portfolio.jpg"
  },
  {
    title: "Emergency Response Drone",
    description: "Designed and built an autonomous drone system for emergency response scenarios. Implemented real-time object detection for locating stranded individuals and integrated thermal imaging for night operations. Successfully tested in local emergency response drills.",
    technologies: ["Computer Vision", "Python", "ROS", "Embedded Systems", "Autonomous Navigation"],
    featured: false,
    link: "#",
    github: "https://github.com/Tabulater/emergency-drone",
    image: "/images/emergency-drone.jpg"
  },
  {
    title: "Smart Prosthetic Hand",
    description: "Developed a low-cost, 3D-printed prosthetic hand with EMG sensors for intuitive control. Implemented machine learning algorithms for gesture recognition and fine motor control. Created an open-source design to make prosthetics more accessible.",
    technologies: ["3D Printing", "Machine Learning", "EMG Sensors", "Arduino", "Python"],
    featured: false,
    link: "#",
    github: "https://github.com/Tabulater/smart-prosthetic",
    image: "/images/smart-prosthetic.jpg"
  },
  {
    title: "Water Quality Monitoring System",
    description: "Built an IoT-based water quality monitoring system for rural communities. Deployed solar-powered sensors to detect contaminants and alert local authorities. Successfully implemented in three communities, helping ensure safe drinking water.",
    technologies: ["IoT", "Solar Power", "Data Analytics", "Cloud Computing", "Embedded Systems"],
    featured: false,
    link: "#",
    github: "https://github.com/Tabulater/water-monitor",
    image: "/images/water-monitor.jpg"
  }
]; 