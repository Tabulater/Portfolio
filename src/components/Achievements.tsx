'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { achievements } from '@/data/achievements';

export default function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const nextAchievement = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const prevAchievement = () => {
    setDirection(-1);
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
          
          <div className="flex items-center gap-4">
            {/* Left Arrow */}
            <motion.button
              onClick={prevAchievement}
              className="p-3 rounded-full bg-secondary/20 text-secondary hover:bg-secondary/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Achievement Card */}
            <div className="flex-1 overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: direction * 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{achievements[currentIndex].title}</h3>
                    <p className="text-text-secondary">{achievements[currentIndex].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Arrow */}
            <motion.button
              onClick={nextAchievement}
              className="p-3 rounded-full bg-secondary/20 text-secondary hover:bg-secondary/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
