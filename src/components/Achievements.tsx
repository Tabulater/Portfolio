'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const achievements = [
  {
    title: "Principal Honour Roll",
    organization: "Mother Teresa Catholic Secondary School",
    description: "Maintained 85% average in all subjects",
    year: "2022-2024",
    category: "Academic Excellence",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "Blue Ocean Competition",
    organization: "GaiaCure Pitch",
    description: "Ranked in top 350 participants with innovative pitch",
    year: "2024",
    category: "Competition",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "Creative Writing Contest",
    organization: "Western University",
    description: "Won first place in Occasus High School Creative Writing Contest for short story 'The Glassblower's Ephemera'",
    year: "2024",
    category: "Writing",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
  }
];

// Achievement component with animated carousel
export default function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextAchievement = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const prevAchievement = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  return (
    <section id="achievements" className="section-padding bg-primary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-16"
        >
          <motion.h2 
            className="heading-2 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Achievements
          </motion.h2>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={achievements[currentIndex].icon} />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{achievements[currentIndex].title}</h3>
                    <p className="text-text-secondary mb-2">{achievements[currentIndex].organization}</p>
                    <p className="text-text-secondary mb-4">{achievements[currentIndex].description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                        {achievements[currentIndex].year}
                      </span>
                      <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                        {achievements[currentIndex].category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
              <motion.button
                onClick={prevAchievement}
                className="p-2 rounded-full bg-secondary/20 text-secondary hover:bg-secondary/30 transition-colors pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={nextAchievement}
                className="p-2 rounded-full bg-secondary/20 text-secondary hover:bg-secondary/30 transition-colors pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          {/* Education Section */}
          <motion.div>
            <motion.h2 
              className="heading-2 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Education
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">High School Diploma</h3>
                  <p className="text-text-secondary mb-2">Mother Teresa Catholic Secondary School</p>
                  <p className="text-text-secondary mb-4">London, Ontario • 2022-2026</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                      STEM Focus
                    </span>
                    <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                      Grade 11
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 