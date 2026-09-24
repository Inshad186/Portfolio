import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Image as ImageIcon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-20 bg-neutral-950 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
      <div className="flex flex-col items-center text-center gap-3 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full shadow-inner backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Portfolio</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight"
        >
          Featured <span className="text-emerald-400">Projects</span>
        </motion.h2>
      </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {PROJECTS.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                // Original card background/padding structure, hover border turned to emerald
                className="group relative flex flex-col justify-between bg-neutral-900/80 border border-neutral-800/90 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/5 backdrop-blur-sm overflow-hidden"
              >
                {/* Image Banner Section (from reference) */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-neutral-800 mb-6 border border-neutral-700/50">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-800 text-neutral-600">
                      <ImageIcon className="w-10 h-10 mb-2" />
                      <span className="text-xs font-mono">Screenshot Placeholder</span>
                    </div>
                  )}

                  {/* Top-Right Category Tag (from reference, Emerald) */}
                  {project.category && (
                    <div className="absolute top-3 right-3 bg-neutral-950/80 backdrop-blur-md border border-emerald-500/20 px-3 py-1 rounded-full text-[11px] font-mono text-emerald-400 font-medium">
                      {project.category}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Reverted to original title style */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-200">
                      {project.title}
                    </h3>

                    {/* Reverted to original description style, line-clamp for neatness */}
                    <p className="text-sm text-neutral-400 leading-relaxed mb-5 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Badges (Pill style from reference, Emerald) */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          // Original tech badge style: background-neutral, text-neutral
                          className="text-xs font-mono bg-neutral-800/80 text-neutral-300 border border-neutral-700/60 px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-neutral-800/80">
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800/70 hover:bg-neutral-700/80 border border-neutral-700/50 py-2.5 rounded-xl transition-all duration-200"
                      >
                        <FaGithub className="w-4 h-4" />
                        <span>Repository</span>
                      </a>
                    </div>

                    {/* View Recruiter Details Modal Button (your original interactive button, Emerald) */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      // original interactive button style
                      className="w-full flex items-center justify-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/30 py-2.5 rounded-xl transition-all duration-200"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>View Recruiter Details</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Recruiter Details Modal (Original) */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};