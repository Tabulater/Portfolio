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
    title: "ML Queue Prediction System",
    description: "A comprehensive machine learning research project investigating the application of Neural Networks, Random Forest, and XGBoost algorithms to predict performance metrics in G/G/s queue systems. The project analyzes simulation-generated datasets to forecast queue behavior and system performance, demonstrating how modern ML approaches can provide accurate predictions for complex queue systems and offer insights into system optimization and resource allocation strategies.",
    technologies: ["Python", "TensorFlow/Keras", "Scikit-learn", "XGBoost", "Machine Learning", "Queue Theory", "Neural Networks", "Random Forest"],
    featured: true,
    link: "https://mlqueuingmodels.vercel.app/",
    github: "https://github.com/Tabulater/KingsUniveristyCollege",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmlqueuingmodels.vercel.app%2F?w=1200"
  },
  {
    title: "Thermal Feedback Glove",
    description: "Developed an innovative haptic feedback glove designed to help patients with peripheral neuropathy. Integrated Peltier elements and temperature sensors to provide precise thermal feedback, creating a therapeutic device for sensory rehabilitation.",
    technologies: ["Arduino", "C++", "Embedded Systems", "Thermal Control", "Medical Devices"],
    featured: true,
    link: "#",
    github: "https://github.com/Tabulater/thermal-glove"
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