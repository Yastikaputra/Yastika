import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

// --- Shared Layout Components ---

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.dataset.cursor === 'hover'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <motion.div 
      className="custom-cursor hidden md:block"
      style={{ backgroundColor: '#FFFFFF', mixBlendMode: 'difference' }}
      animate={{
        x: position.x - 6,
        y: position.y - 6,
        scale: isHovering ? 3 : 1,
        opacity: 1
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.5 }}
    />
  );
};

const BackgroundBlobs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
    <motion.div 
      animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-300/30 blur-[120px]"
    />
    <motion.div 
      animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-purple-300/30 blur-[120px]"
    />
    <motion.div 
      animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute -bottom-[20%] left-[20%] w-[60%] h-[40%] rounded-full bg-blue-400/20 blur-[120px]"
    />
  </div>
);

const Nav = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center glass-panel"
    >
      <Link to="/" className="text-2xl font-display font-bold text-[var(--color-text-primary)]">Yastika.</Link>
      
      <div className="hidden md:flex gap-8 items-center bg-[var(--color-text-primary)] rounded-full px-8 py-3 border border-[var(--color-border)]">
        <Link to="/" className="text-sm font-bold text-white hover:text-[var(--color-accent)] transition-colors">Home</Link>
        <a href="/#services" className="text-sm font-bold text-white hover:text-[var(--color-accent)] transition-colors">Services</a>
        <a href="/#projects" className="text-sm font-bold text-white hover:text-[var(--color-accent)] transition-colors">Works</a>
        <a href="/#skills" className="text-sm font-bold text-white hover:text-[var(--color-accent)] transition-colors">Experience</a>
        <a href="mailto:yastikaputragustiputu@gmail.com" className="text-sm font-bold text-white hover:text-[var(--color-accent)] transition-colors">Contact</a>
      </div>

      <a href="mailto:yastikaputragustiputu@gmail.com" className="bg-[var(--color-accent)] text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:shadow-[0_8px_30px_rgb(37,99,235,0.2)] transition-all duration-300">
        Contact
      </a>
    </motion.nav>
  );
};

const Footer = () => {
  return (
    <footer id="footer" className="bg-white py-32 border-t border-blue-50 text-[var(--color-text-primary)] relative z-10">
      <div className="container max-w-7xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-[12vw] md:text-[8vw] font-display mb-12 italic lowercase tracking-tight text-[var(--color-text-primary)]">Let's work together</h2>
          
          <a href="mailto:yastikaputragustiputu@gmail.com" className="inline-block bg-[var(--color-accent)] text-white px-12 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform mb-24">
            Send a Message
          </a>
        </motion.div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-24 gap-12 border-t border-blue-50">
          <div className="text-2xl font-display font-bold text-[var(--color-text-primary)]">Yastika.</div>
          
          <div className="flex gap-8">
            <a href="https://github.com/Yastikaputra" target="_blank" rel="noopener noreferrer" className="p-3 border border-blue-100 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-all text-blue-900/50"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/gusti-putu-yastika-putra-718742270" target="_blank" rel="noopener noreferrer" className="p-3 border border-blue-100 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-all text-blue-900/50"><Linkedin className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/yastika07/" target="_blank" rel="noopener noreferrer" className="p-3 border border-blue-100 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-all text-blue-900/50"><Instagram className="w-5 h-5" /></a>
          </div>
          
          <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
            © 2024 Yastika. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Setup ---

export default function App() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="selection:bg-[var(--color-accent)] selection:text-white relative z-0">
      <BackgroundBlobs />
      <CustomCursor />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}
