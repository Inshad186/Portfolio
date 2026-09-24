import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FolderCode, Layers, Trophy, Brain } from 'lucide-react';

export const DeveloperIntro: React.FC = () => {
  const stats = [
    { 
      label: "Projects Completed", 
      value: PERSONAL_INFO.projectsCount,
      icon: FolderCode 
    },
    { 
      label: "Primary Stack", 
      value: PERSONAL_INFO.stackText,
      icon: Layers 
    },
    { 
      label: "LeetCode Solved", 
      value: PERSONAL_INFO.leetcodeCount,
      icon: Trophy 
    },
    { 
      label: "Mindset", 
      value: PERSONAL_INFO.learningText,
      icon: Brain 
    }
  ];

  return (
    <section className="relative py-28 border-b border-neutral-800/60 bg-neutral-950 overflow-hidden">
      {/* Background ambient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Turning Ideas Into <span className="text-emerald-400">Web Applications</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 leading-relaxed text-base sm:text-lg"
          >
            I'm a passionate Full-Stack Developer focused on building modern web applications 
            with JavaScript and the MERN stack. I enjoy working across both frontend and backend, 
            from creating responsive interfaces to designing APIs, authentication systems, 
            databases, and real-time features.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.45 }}
                className="group relative bg-gradient-to-b from-neutral-900/90 to-neutral-900/40 border border-neutral-800/90 rounded-3xl p-7 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/5 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                {/* Top ambient highlight line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-400/50 transition-all duration-500" />

                <div className="flex items-center gap-5">
                  {/* Glowing Icon Container */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-neutral-950 shadow-[0_0_20px_rgba(16,185,129,0.5)] group-hover:shadow-[0_0_28px_rgba(16,185,129,0.7)] transition-shadow duration-300">
                      <Icon className="w-7 h-7 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Stat Content */}
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-neutral-400 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};