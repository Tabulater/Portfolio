'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { BiCodeAlt, BiLinkExternal } from 'react-icons/bi';
import { TbCodeDots } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="heading-2 mb-6">
            <span className="gradient-text">Engineering Projects</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            A showcase of my technical projects, demonstrating my passion for mechatronics, 
            robotics, and software development. Each project represents a unique challenge 
            and learning opportunity in the field of engineering.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="card p-8 hover:scale-[1.02] transition-transform duration-300">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-video rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary))]/50 to-[rgb(var(--secondary))]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary))]/20 to-[rgb(var(--secondary))]/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-[rgb(var(--primary))]/20 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BiCodeAlt className="w-8 h-8 text-[rgb(var(--primary))]" />
                  </motion.div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[rgb(var(--primary))] mb-2">
                    {featuredProjects[0]?.title}
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    {featuredProjects[0]?.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {featuredProjects[0]?.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={featuredProjects[0]?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <BiLinkExternal className="w-5 h-5" />
                  </motion.a>
                  {featuredProjects[0]?.github && (
                    <motion.a
                      href={featuredProjects[0]?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="w-5 h-5" />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {[...featuredProjects.slice(1), ...otherProjects].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            >
              <div className="card p-6 hover:scale-[1.02] transition-transform duration-300 h-full">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary))]/50 to-[rgb(var(--secondary))]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary))]/20 to-[rgb(var(--secondary))]/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-[rgb(var(--primary))]/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <TbCodeDots className="w-6 h-6 text-[rgb(var(--primary))]" />
                    </motion.div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-[rgb(var(--primary))] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                      <BiLinkExternal className="w-5 h-5" />
                    </motion.a>
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="w-5 h-5" />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 