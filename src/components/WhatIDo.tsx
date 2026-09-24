import React from 'react';
import { motion } from 'framer-motion';
import { WHAT_I_DO } from '../data/portfolioData';

export const WhatIDo: React.FC = () => {
  return (
    <section className="relative py-20 bg-neutral-900/40 overflow-hidden">
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
            Capabilities
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            What I <span className='text-emerald-400'>Do</span>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHAT_I_DO.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative min-h-[260px] bg-gradient-to-b from-neutral-900/90 to-neutral-900/40 border border-neutral-800/90 rounded-3xl p-8 sm:p-10 hover:border-emerald-500/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/5 backdrop-blur-sm flex flex-col justify-between overflow-hidden"
            >
              {/* Top ambient highlight line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-400/50 transition-all duration-500" />

              <div>
                {/* Index Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-emerald-400/80 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
                    0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-emerald-400 transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-200">
                  {service.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};