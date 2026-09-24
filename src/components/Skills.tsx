import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-20 bg-neutral-900/40 overflow-hidden">
      {/* Background ambient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center space-y-4 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full shadow-inner backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Expertise
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Technical <span className="text-emerald-400">Skills</span>
          </motion.h2>
        </div>

        {/* Skills Grid - Scaled to match other sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative min-h-[260px] bg-gradient-to-b from-neutral-900/90 to-neutral-900/40 border border-neutral-800/90 rounded-3xl p-8 sm:p-10 hover:border-emerald-500/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/5 backdrop-blur-sm flex flex-col justify-between overflow-hidden"
            >
              {/* Top ambient highlight line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-400/50 transition-all duration-500" />

              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-800/80">
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 group-hover:text-emerald-400 transition-colors duration-200">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 group-hover:block hidden" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                    </span>
                    {cat.title}
                  </h3>
                  
                  {/* Subtle skill counter badge */}
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-neutral-800/90 text-neutral-400 border border-neutral-700/60">
                    {cat.skills.length} skills
                  </span>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="group/tag relative text-sm font-mono font-medium px-4 py-2.5 rounded-xl bg-neutral-800/60 border border-neutral-700/70 text-neutral-200 hover:text-emerald-300 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-200 cursor-default shadow-sm overflow-hidden"
                    >
                      {/* Subtle shine highlight on tag hover */}
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent -translate-x-full group-hover/tag:translate-x-full transition-transform duration-700 ease-out" />
                      <span className="relative z-10">{skill}</span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};