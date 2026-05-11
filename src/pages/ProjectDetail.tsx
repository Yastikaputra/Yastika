import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Monitor, Layers, Calendar } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 text-[var(--color-text-primary)]">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-[var(--color-accent)] underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-24 bg-transparent text-[var(--color-text-primary)] relative z-10">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-12">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </Link>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-[var(--color-accent)] mb-4">{project.category}</p>
          <h1 className="text-5xl md:text-8xl font-display tracking-tighter leading-tight mb-8">
            {project.title.split(' - ')[1] || project.title}
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
            {project.desc}
          </p>
        </motion.div>

        {/* Project Meta Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-b border-blue-50 mb-20"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[var(--color-text-muted)]">
              <Monitor className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest font-bold">Role</span>
            </div>
            <p className="text-lg font-medium">{project.role}</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[var(--color-text-muted)]">
              <Layers className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest font-bold">Tech Stack</span>
            </div>
            <p className="text-lg font-medium">{project.techStack.join(', ')}</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[var(--color-text-muted)]">
              <Calendar className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest font-bold">Year</span>
            </div>
            <p className="text-lg font-medium">{project.year}</p>
          </div>
        </motion.div>

        {/* Main Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-white mb-24 glass-panel border-white/20"
        >
          <img 
            src={project.img} 
            alt={project.title}
            className="w-full h-auto object-cover max-h-[80vh] mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-display mb-6">The Challenge</h3>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              {project.challenge}
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 bg-white/40 glass-panel rounded-3xl border border-white/60"
          >
            <h3 className="text-3xl font-display mb-6 text-[var(--color-accent)]">The Solution</h3>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              {project.solution}
            </p>
          </motion.div>
        </div>

        {/* System Details (if available) */}
        {project.detailImg && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h3 className="text-4xl font-display mb-12 text-center">System Overview</h3>
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl bg-white border border-gray-100 p-8 glass-panel">
              <img 
                src={project.detailImg} 
                alt={`${project.title} Detail`}
                className="w-full h-auto object-contain block mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}

      </div>
    </main>
  );
}
