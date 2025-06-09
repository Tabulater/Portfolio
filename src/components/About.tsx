'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a passionate mechatronics engineering student with a strong foundation in robotics, 
            automation, and embedded systems. My journey in engineering has been driven by a desire 
            to create innovative solutions that combine mechanical, electrical, and software components.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative w-72 h-72 mx-auto">
                <Image
                  src="/Profile.png"
                  alt="Profile"
                  width={288}
                  height={288}
                  className="rounded-full border-4 border-primary/20 shadow-xl"
                  priority
                  quality={100}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Technical Skills</h3>
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
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-center"
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
  );
};

export default About; 