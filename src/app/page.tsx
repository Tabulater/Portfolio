'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWikipediaW, FaYoutube } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Image from 'next/image';
import Projects from '@/components/Projects';
import { useState, useEffect } from 'react';
import IntroAnimation from '@/components/IntroAnimation';
import { contactInfo } from '@/data/contact';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { achievements } from '@/data/achievements';
import { SplineScene } from '@/components/ui/splite';
import Spline from '@splinetool/react-spline';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [splineError, setSplineError] = useState(false);
  const [splineLoading, setSplineLoading] = useState(true);

  useEffect(() => {
    // Check if we're coming from the Euclid page
    const skipIntro = sessionStorage.getItem('skipIntro');
    if (skipIntro === 'true') {
      setShowIntro(false);
      sessionStorage.removeItem('skipIntro');
    }

    // Set a timeout to fallback if Spline takes too long
    const timeout = setTimeout(() => {
      if (splineLoading) {
        console.log('Spline loading timeout, falling back to gradients');
        setSplineError(true);
        setSplineLoading(false);
      }
    }, 3000); // Reduced timeout to 3 seconds for faster fallback

    return () => clearTimeout(timeout);
  }, [splineLoading]);

  const handleSplineLoad = () => {
    console.log('Spline loaded successfully');
    setSplineLoading(false);
  };

  const handleSplineError = (error: any) => {
    console.error('Spline error:', error);
    setSplineError(true);
    setSplineLoading(false);
  };

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
        {/* Spline 3D Scene as background */}
        <div className="absolute inset-0 z-0">
          {!splineError ? (
            <>
              {splineLoading && (
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary))]/10 via-[rgb(var(--secondary))]/5 to-[rgb(var(--primary))]/10 animate-pulse flex items-center justify-center z-10">
                  <span className="loader"></span>
                </div>
              )}
              <Spline 
                scene="https://21st.dev/serafim/splite/default"
                className="w-full h-full"
                onLoad={handleSplineLoad}
                onError={handleSplineError}
              />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary))]/10 via-[rgb(var(--secondary))]/5 to-[rgb(var(--primary))]/10 animate-pulse"></div>
          )}
        </div>
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
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Get in Touch</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              <a
                href={`mailto:${contactInfo[0].link.replace('mailto:', '')}`}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <MdEmail className="text-xl" />
                Email Me
              </a>
              <a
                href={contactInfo[1].link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center justify-center gap-2"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </a>
              <a
                href={contactInfo[2].link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center justify-center gap-2"
              >
                <FaGithub className="text-xl" />
                GitHub
              </a>
              <a
                href="https://www.youtube.com/@ActofKnowledge"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center justify-center gap-2"
              >
                <FaYoutube className="text-xl text-red-500" />
                YouTube
              </a>
              <a
                href="https://www.appropedia.org/User:Tabulator"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center justify-center gap-2"
              >
                <FaWikipediaW className="text-xl" />
                Appropedia
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 
