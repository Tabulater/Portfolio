'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Projects from '@/components/Projects';
import { achievements } from '@/data/achievements';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.a
              href="#"
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Aashrith
            </motion.a>
            <div className="flex gap-6">
              <motion.a
                href="#about"
                className="text-text-secondary hover:text-[rgb(var(--primary))] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.a>
              <motion.a
                href="#projects"
                className="text-text-secondary hover:text-[rgb(var(--primary))] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Projects
              </motion.a>
              <motion.a
                href="#achievements"
                className="text-text-secondary hover:text-[rgb(var(--primary))] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Achievements
              </motion.a>
              <motion.a
                href="#contact"
                className="text-text-secondary hover:text-[rgb(var(--primary))] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary))]/5 to-[rgb(var(--secondary))]/5"></div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Aspiring Mechatronics Engineer</span>
            </h1>
            <p className="text-text-secondary text-xl md:text-2xl mb-12 leading-relaxed">
              Passionate about robotics, automation, and embedded systems. 
              Building innovative solutions that bridge the gap between hardware and software.
            </p>
            <div className="flex justify-center gap-6">
              <motion.a
                href="#projects"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="heading-2 mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              I am a passionate mechatronics engineering student with a strong foundation in robotics, 
              automation, and embedded systems. My journey in engineering has been driven by a desire 
              to create innovative solutions that combine mechanical, electrical, and software components.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-[rgb(var(--primary))] mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Robotics',
                  'Embedded Systems',
                  'Control Systems',
                  'CAD/CAM',
                  'Python',
                  'C++',
                  'Arduino',
                  'Raspberry Pi',
                  'ROS',
                  'Machine Learning',
                  'Computer Vision',
                  'IoT'
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    className="tech-badge"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Achievements Section */}
      <section id="achievements" className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="heading-2 mb-6">
              <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Recognition for my contributions to engineering and technology, 
              demonstrating my commitment to excellence and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <div className="card p-6 hover:scale-[1.02] transition-transform duration-300">
                  <h3 className="text-xl font-bold text-[rgb(var(--primary))] mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-2 mb-6">
              <span className="gradient-text">Get in Touch</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-12">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex justify-center gap-6">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-5 h-5" />
                GitHub
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="w-5 h-5" />
                LinkedIn
              </motion.a>
              <motion.a
                href="https://leetcode.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiLeetcode className="w-5 h-5" />
                LeetCode
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="w-5 h-5" />
                Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 
