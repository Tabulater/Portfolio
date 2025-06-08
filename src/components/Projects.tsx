'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { BiCodeAlt } from 'react-icons/bi';
import { TbCodeDots } from 'react-icons/tb';

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
          <h2 className="heading-2 mb-6">My Projects</h2>
          <p className="text-text-secondary text-lg">
            Here are some of my recent projects that showcase my skills and interests.
          </p>
        </motion.div>

        {/* Redesigned Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="bg-primary/50 rounded-2xl p-8 hover:bg-primary/60 transition-colors shadow-lg border border-secondary/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-video rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BiCodeAlt className="w-8 h-8 text-secondary/50" />
                  </motion.div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-secondary">{featuredProjects[0]?.title}</h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {featuredProjects[0]?.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {featuredProjects[0]?.technologies.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-primary/30 rounded-full text-sm text-text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Redesigned Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {[...featuredProjects.slice(1), ...otherProjects].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            >
              <div className="bg-primary/30 rounded-2xl p-6 hover:bg-primary/40 transition-colors h-full shadow-lg border border-secondary/20">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <TbCodeDots className="w-6 h-6 text-secondary/50" />
                    </motion.div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-secondary">{project.title}</h3>
                  <p className="text-text-secondary">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/30 rounded-full text-sm text-text-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 