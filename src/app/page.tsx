'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Image from 'next/image';
import Projects from '@/components/Projects';
import { useState } from 'react';
import IntroAnimation from '@/components/IntroAnimation';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <IntroAnimation onComplete={() => setShowIntro(false)} />;
  }

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
              Aashrith Raj
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
              <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
                <div className="relative w-72 h-72 mx-auto">
                  <Image
                    src="/Profile.png"
                    alt="Profile"
                    width={288}
                    height={288}
                    className="rounded-full border-4 border-white/10 shadow-xl"
                    priority
                    quality={100}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[rgb(var(--primary))] mb-4">Technical Skills</h3>
                  <div className="grid grid-cols-2 gap-4">
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
            {[
              {
                title: "Blue Ocean Competition Finalist",
                description: "Achieved top 350 placement in the Blue Ocean Competition for the Gaia Cure pitch, demonstrating innovative thinking in healthcare solutions."
              },
              {
                title: "OCCAS Creative Writing Contest Winner",
                description: "Won the fiction category at Western University's OCCAS Creative Writing Contest for 'Glassblower's Ephemera', showcasing creative excellence."
              },
              {
                title: "Principal's Honour Roll",
                description: "Recognized twice for academic excellence by being named to the Principal's Honour Roll, demonstrating consistent high achievement."
              }
            ].map((achievement, index) => (
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
            <div className="flex flex-col items-center space-y-4">
              <a
                href="https://www.linkedin.com/in/aashrith-raj-tatipamula/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:napoleonbonaporte42@gmail.com"
                className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email</span>
              </a>
              <a
                href="https://github.com/Tabulater"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 
