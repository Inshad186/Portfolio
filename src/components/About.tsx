import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, WHAT_I_BRING } from '../data/portfolioData';
import { CheckCircle2, User } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-16 sm:py-20 bg-neutral-950 overflow-hidden">
      {/* Background ambient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Background & About Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col p-2 sm:p-8 lg:p-10 relative group"
          >
            {/* Top ambient highlight line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-400/50 transition-all duration-500" />

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full shadow-inner backdrop-blur-sm">
                <User className="w-4 h-4" />
                <span>Background</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                About <span className="text-emerald-400">Me</span>
              </h2>

              <div className="text-neutral-300 space-y-4 leading-relaxed text-base sm:text-lg">
                <p>{PERSONAL_INFO.about}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: "What I Bring" Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 group relative bg-gradient-to-b from-neutral-900/90 to-neutral-900/40 border border-neutral-800/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/5 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between overflow-hidden"
          >
            {/* Top ambient highlight line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-400/50 transition-all duration-500" />

            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-800/80">
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  What I Bring
                </h3>

                <span className="text-xs font-mono font-medium px-3 py-1 rounded-lg bg-neutral-800/90 text-neutral-400 border border-neutral-700/60">
                  {WHAT_I_BRING.length} Key Values
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {WHAT_I_BRING.map((item, idx) => (
                  <div key={idx} className="space-y-2.5 group/item">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover/item:scale-110 transition-transform duration-200">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      </div>
                      <h4 className="text-base font-bold text-white group-hover/item:text-emerald-400 transition-colors duration-200">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed pl-8 group-hover/item:text-neutral-300 transition-colors duration-200">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};