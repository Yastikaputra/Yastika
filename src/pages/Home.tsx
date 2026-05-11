/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { 
  Monitor, 
  Smartphone, 
  Package, 
  Fingerprint, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Dribbble,
  ArrowUpRight
} from 'lucide-react';

// --- Components ---

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
};



const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => {
  return (
    <div className="mb-16 text-center">
      {subtitle && <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold mb-4">{subtitle}</p>}
      <h2 className="text-4xl md:text-5xl">{children}</h2>
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 bg-white hero-gradient overflow-hidden">
      {/* Background Large Text */}
      <motion.div 
        style={{ y: textY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="text-[20vw] md:text-[24vw] font-display text-blue-600 opacity-[0.05] whitespace-nowrap">
          Hey, there
        </span>
      </motion.div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border border-[var(--color-border)] px-5 py-2 rounded-full mb-8 flex items-center shadow-sm"
        >
          <span className="pulse-dot"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">Available for new opportunities</span>
        </motion.div>

        {/* Hero Main Content */}
        <div className="relative flex flex-col items-center w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[15vw] md:text-[10vw] font-display text-center leading-[0.8] z-20 text-blue-600"
          >
            Hey, there
          </motion.h1>

          <motion.div 
            style={{ scale: imageScale }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-sm md:max-w-md aspect-[4/5] -mt-8 md:-mt-16 mb-8 group"
          >
            <div className="absolute inset-0 rounded-[2rem] border-2 border-[var(--color-accent)] transform rotate-3 scale-105 opacity-20 group-hover:rotate-0 transition-transform duration-700"></div>
            <img 
              src="/profile.png" 
              alt="Gusti Putu Yastika Putra Profile"
              className="w-full h-full object-cover rounded-[2rem] shadow-[0_45px_100px_-20px_rgba(37,99,235,0.15)] transition-transform duration-700"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1519085115858-aae5b373547c?q=80&w=1000&auto=format&fit=crop";
              }}
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute left-0 bottom-0 max-w-[200px] hidden lg:block"
          >
            <p className="text-[3vw] font-bold leading-none mb-2 text-[var(--color-text-primary)]">I AM YASTIKA</p>
            <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Information Systems Engineer</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute right-0 bottom-0 text-right max-w-[250px] hidden lg:block"
          >
            <p className="text-sm font-medium leading-relaxed text-[var(--color-text-secondary)]">
              Specializing in Software Development, Data Analysis, and UI/UX Design Principles.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      num: "01",
      icon: <Monitor className="w-8 h-8" />,
      title: "System Development",
      desc: "Developing robust and scalable information systems with efficient workflow and document management."
    },
    {
      num: "02",
      icon: <Smartphone className="w-8 h-8" />,
      title: "UI/UX Design",
      desc: "Creating user-friendly, responsive layouts for tourism and blog platforms with focus on visual consistency."
    },
    {
      num: "03",
      icon: <Package className="w-8 h-8" />,
      title: "SEO Specialist",
      desc: "Optimizing search engine visibility through keyword research and effective content structuring."
    },
    {
      num: "04",
      icon: <Fingerprint className="w-8 h-8" />,
      title: "Creative Writer",
      desc: "Expressing ideas effectively through creative content, technical documentation, and professional articles."
    }
  ];

  return (
    <section id="services" className="py-32 bg-white text-[var(--color-text-primary)]">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)] font-bold">Capabilities</p>
          <h2 className="text-5xl md:text-7xl font-display tracking-tight text-[var(--color-text-primary)]">I Can Help You With</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <TiltCard 
              key={idx}
              className="p-10 bg-white/40 glass-panel rounded-[2rem] border border-white/60 flex flex-col gap-8 group hover:bg-[var(--color-accent)] hover:scale-[1.02] transition-all duration-500"
            >
              <div className="flex justify-between items-start">
                <span className="text-3xl font-display text-blue-400 group-hover:text-white transition-colors">{service.num}</span>
                <div className="p-3 bg-white shadow-sm rounded-2xl group-hover:bg-white group-hover:text-[var(--color-accent)] transition-colors text-[var(--color-text-primary)]">
                  {service.icon}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold tracking-tight text-[var(--color-text-primary)] group-hover:text-white transition-colors uppercase">{service.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed group-hover:text-white/80 transition-colors">{service.desc}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsAndVision = () => {
  return (
    <section className="py-32 overflow-hidden bg-white text-[var(--color-text-primary)]">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl mb-12 leading-tight text-[var(--color-text-primary)] font-display">Turning My Vision Into Reality</h2>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-lg">
              Dedicated to creating impactful digital experiences through technical excellence and strategic design thinking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-video w-full bg-blue-50 rounded-[2.5rem] overflow-hidden shadow-[0_45px_100px_-20px_rgba(37,99,235,0.2)] relative group">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" 
                alt="Workspace Background"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                  <ArrowUpRight className="w-10 h-10" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {

  return (
    <section id="projects" className="py-32 bg-white text-[var(--color-text-primary)] overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
           <div className="space-y-4">
             <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)] font-bold">Selected Works</p>
             <h2 className="text-5xl md:text-8xl font-display tracking-tighter text-[var(--color-text-primary)]">Featured Work</h2>
           </div>
           <p className="text-[var(--color-text-secondary)] max-w-sm text-lg leading-relaxed">A selective look at my specialization across development, design, and strategic writing.</p>
        </div>
        
        <div className="flex flex-col gap-40 md:gap-64">
          {projects.map((project, idx) => (
            <div key={idx} className="flex flex-col gap-12 md:gap-24">
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 md:gap-24 items-center`}
              >
                {/* Image Column */}
                <div className="w-full md:w-3/5">
                  <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl group shadow-[0_30px_60px_-15px_rgba(37,99,235,0.1)] hover:shadow-[0_45px_100px_-20px_rgba(37,99,235,0.2)] transition-shadow duration-500">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.2, ease: "circOut" }}
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-contain transition-all duration-700 bg-gray-50/50"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>

                {/* Content Column */}
                <div className="w-full md:w-2/5 space-y-8">
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] font-black">0{idx + 1} — {project.category}</p>
                    <h3 className="text-4xl md:text-6xl font-display tracking-tight leading-none text-[var(--color-text-primary)]">{project.title}</h3>
                  </div>
                  
                  <p className="text-[var(--color-text-secondary)] text-lg md:text-xl leading-relaxed max-w-md">
                    {project.desc}
                  </p>

                  <Link to={`/project/${project.id}`} className="inline-block mt-4">
                    <motion.button 
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 group cursor-none"
                    >
                      <span className="text-sm uppercase tracking-widest font-bold border-b-2 border-[var(--color-text-primary)] pb-1">View Project</span>
                      <div className="w-10 h-10 rounded-full border border-[var(--color-text-primary)] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] group-hover:text-white transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>

              {project.detailImg && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="w-full mt-4"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)] font-bold mb-8">System Detail</p>
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-50 border border-gray-100">
                    <img 
                      src={project.detailImg} 
                      alt={`${project.title} Detail`}
                      className="w-full h-auto object-contain block"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    { year: "2022–Present", role: "Information Systems", tools: ["Python", "PHP", "MySQL", "Trello", "Excel"] },
    { year: "2024–25", role: "Web & SEO", tools: ["On-page SEO", "Keyword Research", "Webflow", "HTML & CSS"] },
    { year: "2023–24", role: "UI/UX Design", tools: ["Figma", "Canva", "Responsive Design", "Visual Consistency"] }
  ];

  return (
    <section id="skills" className="py-32 bg-white text-[var(--color-text-primary)]">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)] font-bold">Timeline</p>
          <h2 className="text-5xl md:text-7xl font-display tracking-tight text-[var(--color-text-primary)]">Experience & Skills</h2>
        </div>
        
        <div className="flex flex-col">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-b border-blue-50 last:border-0 group transition-all duration-500"
            >
              <div className="text-2xl font-display text-blue-200 group-hover:text-[var(--color-text-primary)] transition-colors">{exp.year}</div>
              <div className="text-3xl font-bold uppercase tracking-tighter text-[var(--color-text-primary)]">{exp.role}</div>
              <div className="flex flex-wrap gap-3">
                {exp.tools.map((tool, tIdx) => (
                  <span key={tIdx} className="flex items-center text-sm font-medium bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100 hover:border-[var(--color-accent)] transition-colors">
                    <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full mr-2"></span>
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkstationGallery = () => {
  const photos = [
    "/ws1.png",
    "/ws2.png",
    "/ws3.png",
    "/ws4.png"
  ];

  return (
    <section id="workstation" className="py-32 overflow-hidden bg-white text-[var(--color-text-primary)]">
      <div className="container max-w-7xl mx-auto px-6 mb-16">
        <div className="space-y-4 mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)] font-bold">Environment</p>
          <h2 className="text-5xl md:text-7xl font-display tracking-tight text-[var(--color-text-primary)]">My Workstation</h2>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto hide-scrollbar snap-x px-6">
        {photos.map((photo, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 0.98 }}
            className="flex-shrink-0 w-[400px] h-[500px] snap-center rounded-[2.5rem] overflow-hidden bg-blue-50 shadow-[0_20px_50px_rgba(37,99,235,0.1)]"
          >
            <img 
              src={photo} 
              alt={`Workspace view ${idx + 1}`}
              className="w-full h-full object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <Experience />
      <WorkstationGallery />
    </main>
  );
}

