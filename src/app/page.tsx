'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Image from 'next/image';
import IntroAnimation from '@/components/IntroAnimation';
import SocialLinks from '@/components/SocialLinks';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [showIntro, setShowIntro] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      section.style.transform = 'scale(0.95)';
      section.style.opacity = '0.8';
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });

      setTimeout(() => {
        section.style.transform = 'scale(1)';
        section.style.opacity = '1';
      }, 1000);

      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative">
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      
      {/* Professional Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed top-0 w-full glass z-50 shadow-lg"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button onClick={() => scrollToSection('home')} className="text-2xl font-bold gradient-text">
              Aashrith Raj
            </button>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-[rgb(var(--primary))] transition-colors ${
                    activeSection === section ? 'text-[rgb(var(--primary))]' : 'text-text-secondary'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center section-padding relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--background-start-rgb))] via-[rgb(var(--background-end-rgb))] to-[rgb(var(--primary))]/10"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-[rgb(var(--primary))]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-[rgb(var(--secondary))]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[rgb(var(--accent))]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.h1 
              className="heading-1 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Aspiring{' '}
              <span className="gradient-text relative inline-block">
                Mechatronics Engineer
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-text-secondary mb-12 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Passionate about robotics, automation, and embedded systems. Currently developing innovative solutions 
              that combine mechanical, electrical, and software engineering principles.
            </motion.p>
            <motion.div 
              className="flex space-x-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button 
                onClick={() => scrollToSection('projects')} 
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <motion.span
                  className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
                  initial={{ x: 0 }}
                >
                  →
                </motion.span>
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('contact')} 
                className="btn-outline group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <SocialLinks />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding glass">
        <div className="container">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="heading-2">
                <span className="gradient-text">About Me</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                I'm a dedicated student with a passion for mechatronics and robotics engineering. My journey in 
                technology began with Arduino projects and has evolved into complex systems involving embedded 
                programming, control systems, and machine learning.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                I specialize in developing innovative solutions that bridge the gap between hardware and software. 
                My projects range from autonomous robots to smart home systems, each demonstrating my ability to 
                integrate mechanical, electrical, and software components effectively.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <span className="tech-badge">Embedded Systems</span>
                <span className="tech-badge">Robotics</span>
                <span className="tech-badge">Control Systems</span>
                <span className="tech-badge">Machine Learning</span>
                <span className="tech-badge">IoT</span>
                <span className="tech-badge">Computer Vision</span>
              </div>
            </motion.div>
            <motion.div 
              className="relative w-72 h-72 mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--primary))]/20 to-[rgb(var(--secondary))]/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <Image
                src="/Profile.png"
                alt="Profile"
                width={288}
                height={288}
                className="relative rounded-full border-4 border-white/10 shadow-xl"
                priority
                quality={100}
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Achievements & Education Section */}
      <Achievements />

      {/* Contact Section */}
      <section id="contact" className="section-padding glass">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h2 
              className="heading-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text">Get In Touch</span>
            </motion.h2>
            <motion.p 
              className="text-text-secondary mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm currently seeking opportunities in mechatronics engineering and robotics. Let's connect and discuss 
              how we can work together to create innovative solutions.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a 
                href="mailto:napoleonbonaporte42@gmail.com" 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Me An Email
              </motion.a>
              <motion.a 
                href="/Resume.pdf" 
                download 
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
