'use client';

import { motion } from 'framer-motion';

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-primary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-16"
        >
          {/* Achievement */}
          <motion.div>
            <motion.h2 
              className="heading-2 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Achievement
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Principal Honour Roll</h3>
                  <p className="text-text-secondary mb-2">Mother Teresa Catholic Secondary School</p>
                  <p className="text-text-secondary mb-4">Maintained 85% average in all subjects</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                      2022-2024
                    </span>
                    <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                      Academic Excellence
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Education */}
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