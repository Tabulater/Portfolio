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
    title: "Autonomous Robot Navigation System",
    description: "Developed a sophisticated autonomous navigation system using ROS (Robot Operating System) and computer vision. Implemented SLAM algorithms for real-time mapping and path planning, achieving 95% accuracy in obstacle avoidance.",
    technologies: ["ROS", "Python", "OpenCV", "C++", "SLAM", "Computer Vision"],
    featured: true,
    link: "#",
    github: "https://github.com/yourusername/robot-navigation"
  },
  {
    title: "Smart Home Automation Hub",
    description: "Engineered a centralized home automation system using Arduino and Raspberry Pi. Integrated various sensors and actuators for environmental monitoring and control, with a custom web interface for remote access.",
    technologies: ["Arduino", "Raspberry Pi", "Python", "IoT", "Web Development"],
    featured: true,
    link: "#",
    github: "https://github.com/yourusername/smart-home"
  },
  {
    title: "3D Printer Controller",
    description: "Designed and implemented a custom 3D printer controller using STM32 microcontroller. Developed firmware for precise motor control and temperature regulation, achieving 0.1mm printing accuracy.",
    technologies: ["STM32", "C", "Embedded Systems", "PID Control"],
    featured: false,
    link: "#",
    github: "https://github.com/yourusername/3d-printer"
  },
  {
    title: "Quadcopter Flight Controller",
    description: "Built a quadcopter flight controller from scratch using Arduino and MPU6050. Implemented PID control algorithms for stable flight and autonomous hovering capabilities.",
    technologies: ["Arduino", "C++", "PID Control", "Embedded Systems"],
    featured: false,
    link: "#",
    github: "https://github.com/yourusername/quadcopter"
  },
  {
    title: "Automated Plant Monitoring System",
    description: "Created an IoT-based plant monitoring system with automated watering capabilities. Integrated soil moisture sensors and developed a machine learning model for optimal watering schedules.",
    technologies: ["IoT", "Python", "Machine Learning", "Arduino"],
    featured: false,
    link: "#",
    github: "https://github.com/yourusername/plant-monitor"
  },
  {
    title: "CNC Machine Controller",
    description: "Developed a custom CNC machine controller using GRBL firmware. Implemented G-code interpreter and stepper motor control for precise movement and cutting operations.",
    technologies: ["GRBL", "C++", "Embedded Systems", "G-code"],
    featured: false,
    link: "#",
    github: "https://github.com/yourusername/cnc-controller"
  }
]; 