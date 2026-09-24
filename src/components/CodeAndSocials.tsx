import React from 'react';
import { motion } from 'framer-motion';
import { Code, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/portfolioData';

export const CodeAndSocials: React.FC = () => {
  const cards = [
    { name: "GitHub", href: PERSONAL_INFO.socials.github, icon: FaGithub, desc: "Explore project source code" },
    { name: "LeetCode", href: PERSONAL_INFO.socials.leetcode, icon: Code, desc: "Check solved algorithm challenges" },
    { name: "LinkedIn", href: PERSONAL_INFO.socials.linkedin, icon: FaLinkedin, desc: "Connect professionally" }
  ];

  return (
    <section className="relative py-28 border-b border-neutral-800/60 bg-neutral-950 overflow-hidden">
      {/* Background ambient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
        
        {/* Header Section */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full shadow-inner backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Connect
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Code & <span className="text-emerald-400">Projects</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-sm sm:text-base leading-relaxed"
          >
            I believe the best way to understand a developer's skills is to look at the code behind the projects.
          </motion.p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.name}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative min-h-[200px] bg-gradient-to-b from-neutral-900/90 to-neutral-900/40 border border-neutral-800/90 rounded-3xl p-8 text-left transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/5 hover:border-emerald-500/40 backdrop-blur-sm flex flex-col justify-between overflow-hidden"
              >
                {/* Top ambient highlight line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-400/50 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-200">
                    {card.name}
                  </h3>
                  
                  <p className="text-sm text-neutral-400 mt-2 leading-relaxed group-hover:text-neutral-300 transition-colors duration-200">
                    {card.desc}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
};