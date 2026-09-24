import React from 'react';
import { ArrowUp, Code } from 'lucide-react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="text-center sm:text-left">
          <div className="text-lg font-bold text-white tracking-tight">
            {PERSONAL_INFO.brandName}<span className="text-emerald-400">.</span>
          </div>
          <p className="text-xs text-neutral-400 mt-1">{PERSONAL_INFO.shortRole}</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-400 hover:text-white transition-colors"
            aria-label="LeetCode"
          >
            <Code className="w-4 h-4" />
          </a>
        </div>

        {/* Back To Top & Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-neutral-500">
            © 2026 {PERSONAL_INFO.brandName}. Built with React & TypeScript.
          </span>

          <button
            onClick={scrollToTop}
            className="p-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg text-neutral-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};