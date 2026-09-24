import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, User } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  userImageSrc?: string;
}

export const Hero: React.FC<HeroProps> = ({ userImageSrc }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden text-white">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-emerald-400 text-xs font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-green-400" />
              <span>{PERSONAL_INFO.tagline}</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-300">{PERSONAL_INFO.intro}</span>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
              {PERSONAL_INFO.name}
            </h1>

            {/* Role Title */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-200">
              I am a <span className="text-emerald-500">{PERSONAL_INFO.role}</span>
            </h2>

            {/* Subtitle / Headline */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-xl leading-relaxed">
              {PERSONAL_INFO.headline}
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-neutral-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-900/40 transition-all duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-neutral-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-900/40 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.email}
                className="p-2.5 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-neutral-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-900/40 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-emerald-600/30 hover:scale-[1.02]"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-transparent border border-emerald-500/40 hover:border-emerald-400 text-neutral-200 hover:text-white font-medium text-sm transition-all duration-200 hover:bg-emerald-950/30"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Circular Glowing Profile Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Outer Glowing Rings */}
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-emerald-500/30 blur-[1px]" />
              <div className="absolute inset-0 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" />

              {/* Main Avatar Container */}
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full">
                <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 border-2 border-emerald-400/30 relative flex items-center justify-center">
                  {userImageSrc ? (
                    <img
                      src={userImageSrc}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-neutral-500">
                      <User className="w-20 h-20 text-emerald-400/50 mb-2" />
                      <span className="text-xs font-mono text-neutral-400">Add Profile Image</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};