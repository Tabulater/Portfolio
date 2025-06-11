'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Image from 'next/image';
import Projects from '@/components/Projects';
import { useState, useEffect } from 'react';
import IntroAnimation from '@/components/IntroAnimation';
import { contactInfo } from '@/data/contact';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { achievements } from '@/data/achievements';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Check if we're coming from the Euclid page
    const skipIntro = sessionStorage.getItem('skipIntro');
    if (skipIntro === 'true') {
      setShowIntro(false);
      sessionStorage.removeItem('skipIntro');
    }
  }, []);

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
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
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
                Hello, I'm Aashrith Raj Tatipamula, a passionate and innovative grade 11 student with a interest in engineering, technology, and solving real-world problems. My journey involves blending creativity with technical expertise, aiming to develop projects that make a meaningful impact. I am particularly fascinated by creating technology solutions, ranging from distributed computing systems to using Arduino. I strive to innovate and constantly learn.
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
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <div className="card p-6 hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{achievement.icon}</span>
                    <h3 className="text-xl font-bold text-[rgb(var(--primary))]">
                      {achievement.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {achievement.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{achievement.date}</span>
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        className="text-[rgb(var(--primary))] hover:text-[rgb(var(--primary))]/80 transition-colors flex items-center gap-2"
                      >
                        Learn More →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="heading-2 mb-6">
              <span className="gradient-text">Contact & Social</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Feel free to reach out through any of these platforms. I'm always open to discussing new projects, 
              creative ideas, or opportunities to be part of your visions.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold text-[rgb(var(--primary))] mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => {
                    const Icon = {
                      email: MdEmail,
                      linkedin: FaLinkedin,
                      github: FaGithub,
                      location: MdLocationOn
                    }[item.iconType];

                    return (
                      <motion.a
                        key={item.label}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-text-secondary hover:text-[rgb(var(--primary))] transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="text-2xl" />
                        <span>{item.label}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold text-[rgb(var(--primary))] mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  <motion.a
                    href="https://github.com/Tabulater"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-text-secondary hover:text-[rgb(var(--primary))] transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub className="text-2xl" />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/aashrith-raj-tatipamula-2b2b2b2b2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-text-secondary hover:text-[rgb(var(--primary))] transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaLinkedin className="text-2xl" />
                    <span>LinkedIn</span>
                  </motion.a>
                  <motion.a
                    href="https://leetcode.com/Tabulater/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-text-secondary hover:text-[rgb(var(--primary))] transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <SiLeetcode className="text-2xl" />
                    <span>LeetCode</span>
                  </motion.a>
                  <motion.a
                    href="https://www.youtube.com/@ActofKnowledge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-text-secondary hover:text-[rgb(var(--primary))] transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="text-2xl" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>YouTube</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 
