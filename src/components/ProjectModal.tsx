import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type{ Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 text-neutral-200"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-2 mb-6">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">{project.category}</span>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-neutral-300 text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Technologies Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-xs font-mono bg-neutral-800 text-emerald-400 border border-neutral-700/80 px-2.5 py-1 rounded-md">
                {tech}
              </span>
            ))}
          </div>

          {/* Detailed Content */}
          <div className="space-y-6 text-sm">
            <div>
              <h4 className="font-semibold text-white mb-1">Problem Statement</h4>
              <p className="text-neutral-400 leading-relaxed">{project.problem}</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Key Features</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Architecture Overview</h4>
              <p className="text-neutral-400 leading-relaxed text-xs">{project.architectureOverview}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800">
                <h4 className="font-semibold text-white text-xs mb-2">Challenges Faced</h4>
                <ul className="list-disc list-inside text-neutral-400 text-xs space-y-1">
                  {project.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800">
                <h4 className="font-semibold text-white text-xs mb-2">Key Takeaways</h4>
                <ul className="list-disc list-inside text-neutral-400 text-xs space-y-1">
                  {project.whatILearned.map((l, i) => (
                    <li key={i}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-neutral-800">

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs transition-colors"
            >
              <FaGithub className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};