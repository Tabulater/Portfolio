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
      const yOffset = -80; // Adjust this value to account for the fixed header
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      // Add zoom effect
      section.style.transform = 'scale(0.95)';
      section.style.opacity = '0.8';
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });

      // Reset zoom effect after animation
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
      
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed top-0 w-full bg-primary/90 backdrop-blur-sm z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button onClick={() => scrollToSection('home')} className="text-2xl font-bold text-secondary">
              Portfolio
            </button>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-secondary transition-colors ${
                    activeSection === section ? 'text-secondary' : 'text-text-secondary'
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
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
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
              Hi, I'm{' '}
              <span className="text-secondary relative inline-block">
                Aashrith
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-secondary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
                <motion.span
                  className="absolute -inset-1 bg-secondary/20 rounded-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.2 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                />
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-text-secondary mb-12"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I'm a Secondary School Student, who is passionate about learning new things and building new projects.
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
                View My Work
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
      <section id="about" className="section-padding bg-primary/50">
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
              <h2 className="heading-2">About Me</h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Hello, I'm Aashrith, a passionate and innovative grade 11 student with a interest in engineering, technology, and solving real-world problems. I've explored areas like autonomous systems and neural networks. My journey involves blending creativity with technical expertise, aiming to develop projects that make a meaningful impact.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                I am particularly fascinated by creating technology solutions, ranging from distributed computing systems to using arduino. I strive to innovate and constantly learn. Through my portfolio, I hope to showcase my projects, skills, and passion for engineering, while continuing to grow and collaborate with like-minded individuals.
              </p>
            </motion.div>
            <motion.div 
              className="relative w-72 h-72 mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl"
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
      <section id="contact" className="section-padding">
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
              Get In Touch
            </motion.h2>
            <motion.p 
              className="text-text-secondary mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm currently open to new opportunities and collaborations.
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