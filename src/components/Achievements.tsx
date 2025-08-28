'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { achievements } from '@/data/achievements';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    if (isHovered) return;
    const timer = setTimeout(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev + 1) % achievements.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, isHovered]);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrentIndex(prev => {
      if (dir > 0) return prev === achievements.length - 1 ? 0 : prev + 1;
      return prev === 0 ? achievements.length - 1 : prev - 1;
    });
  };

  const slideVariants = {
    hidden: { x: direction > 0 ? '100%' : '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: { x: direction > 0 ? '-100%' : '100%', opacity: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="achievements" className="py-16">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          Achievements
        </motion.h2>
        
        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-card p-5 rounded-xl border shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <span className="text-2xl">{achievements[currentIndex].icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    {achievements[currentIndex].title}
                  </h3>
                  {achievements[currentIndex].issuer && (
                    <p className="text-sm text-muted-foreground mb-2">
                      {achievements[currentIndex].issuer}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    {achievements[currentIndex].description}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {achievements[currentIndex].date}
                    </span>
                    {achievements[currentIndex].link && (
                      <a
                        href={achievements[currentIndex].link}
                        className="text-xs text-primary hover:underline flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Details <ChevronRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={() => navigate(-1)}
            className="absolute -left-8 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-1.5 rounded-full shadow-md hover:bg-accent transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button 
            onClick={() => navigate(1)}
            className="absolute -right-8 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-1.5 rounded-full shadow-md hover:bg-accent transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="flex justify-center mt-4 gap-1.5">
            {achievements.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex ? 'bg-primary w-6' : 'bg-border'
                }`}
                aria-label={`View achievement ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
