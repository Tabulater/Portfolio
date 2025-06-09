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
    title: "Portfolio Website",
    description: "Developed a modern, responsive portfolio website using Next.js and Tailwind CSS. Implemented smooth animations, glass-morphism effects, and a clean, professional design to showcase my projects and skills.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    featured: true,
    link: "https://aashrith-raj.vercel.app",
    github: "https://github.com/Tabulater/Portfolio"
  },
  {
    title: "Smart Home Automation",
    description: "Built a comprehensive home automation system using Arduino and Raspberry Pi. Integrated various sensors for environmental monitoring and implemented a custom web interface for remote control.",
    technologies: ["Arduino", "Raspberry Pi", "Python", "IoT", "Web Development"],
    featured: true,
    link: "#",
    github: "https://github.com/Tabulater/smart-home"
  },
  {
    title: "3D Printer Controller",
    description: "Designed and implemented a custom 3D printer controller using STM32 microcontroller. Developed firmware for precise motor control and temperature regulation, achieving high printing accuracy.",
    technologies: ["STM32", "C", "Embedded Systems", "PID Control"],
    featured: false,
    link: "#",
    github: "https://github.com/Tabulater/3d-printer"
  },
  {
    title: "Quadcopter Flight Controller",
    description: "Built a quadcopter flight controller from scratch using Arduino and MPU6050. Implemented PID control algorithms for stable flight and autonomous hovering capabilities.",
    technologies: ["Arduino", "C++", "PID Control", "Embedded Systems"],
    featured: false,
    link: "#",
    github: "https://github.com/Tabulater/quadcopter"
  },
  {
    title: "Plant Monitoring System",
    description: "Created an IoT-based plant monitoring system with automated watering capabilities. Integrated soil moisture sensors and developed a machine learning model for optimal watering schedules.",
    technologies: ["IoT", "Python", "Machine Learning", "Arduino"],
    featured: false,
    link: "#",
    github: "https://github.com/Tabulater/plant-monitor"
  },
  {
    title: "CNC Machine Controller",
    description: "Developed a custom CNC machine controller using GRBL firmware. Implemented G-code interpreter and stepper motor control for precise movement and cutting operations.",
    technologies: ["GRBL", "C++", "Embedded Systems", "G-code"],
    featured: false,
    link: "#",
    github: "https://github.com/Tabulater/cnc-controller"
  }
]; 