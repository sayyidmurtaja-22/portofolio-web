import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    id: 'marinetech',
    tag: 'Featured Project',
    tagDark: true,
    image: '/projects/martech.png',
    fallbackBg: 'bg-[#1a1a1a]',
    title: 'Marine Tech',
    fullTitle: 'Marine Tech Corporate Profile & Research Hub',
    desc: 'A premium, end-to-end corporate profile and digital research repository built for a marine technology and data science laboratory.',
    stack: 'React · Tailwind CSS · Vercel',
    url: 'https://marinetech-eta.vercel.app/',
  },
  {
    id: 'aws',
    tag: 'Fullstack · Dashboard',
    image: '/projects/aws.png',
    fallbackBg: 'bg-[#181818]',
    title: 'AWS Weather',
    fullTitle: 'AWS Weather Monitoring Dashboard',
    desc: 'Real-time monitoring for Automated Weather Stations across Indonesia including temperature, wind, rainfall and battery health.',
    stack: 'Next.js · React · Prisma · MySQL · Recharts',
    url: 'https://www.teknosea.my.id/',
  },
  {
    id: 'bisofer',
    tag: 'Client Work · 2025',
    image: '/projects/pt-biosfer.png',
    fallbackBg: 'bg-[#181818]',
    title: 'PT Bisofer',
    fullTitle: 'PT Bisofer Saintek: Company Website',
    desc: 'Professional, responsive company profile on WordPress with custom branding, speed optimizations, and robust SEO structure.',
    stack: 'WordPress · Elementor · SEO · Speed',
    url: 'https://biosfersaintek.com/',
  },
  {
    id: 'rag',
    tag: 'AI Project · 2026',
    fallbackBg: 'bg-[#1A1E1C]',
    title: 'Intelligent Academic',
    fullTitle: 'Intelligent Academic Assistant: RAG Chatbot',
    desc: 'Conversational AI over official university documents with grounded answers, real-time chat and automated transcript plus SKAK requests.',
    stack: 'Python · Flask · LlamaIndex · Groq · WebSockets',
    url: null,
  },
  {
    id: 'detect',
    tag: 'Mobile · AI',
    fallbackBg: 'bg-[#1F1D1A]',
    title: 'Real-Time AI',
    fullTitle: 'Real-Time AI Object Detection App',
    desc: 'Cross-platform Flutter app that detects and counts objects live via camera for smooth, lag-free inference on mobile hardware.',
    stack: 'Flutter · Dart · TensorFlow Lite · Provider',
    url: null,
  },
  {
    id: 'panembangan',
    tag: 'Client Work · 2025',
    fallbackBg: 'bg-[#1B1B1F]',
    title: 'Desa Wisata',
    fullTitle: 'Desa Wisata Panembangan',
    desc: 'Tourism destination web portal featuring mobile-first visual layouts, interactive route maps, and integrated reservation flows.',
    stack: 'WordPress · Maps API · WhatsApp Forms',
    url: null,
  },
];

function ProjectCard({ project, index }) {
  const isFeatured = project.tagDark;
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: Math.min(index * 0.06, 0.24), duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="group flex flex-col overflow-hidden rounded-[14px] bg-card border border-line hover:border-accent/50 transition-all duration-300"
    >
      {/* Visual Header / Image Container */}
      <div className={`relative h-[210px] sm:h-[230px] w-full overflow-hidden ${project.fallbackBg} border-b border-line`}>
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.fullTitle}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-grid-subtle opacity-40 flex items-center justify-center p-6">
            <span className="font-head text-4xl text-ink/20 font-bold tracking-tight">
              {project.title}
            </span>
          </div>
        )}

        {/* Floating Tag & Title inside visual area */}
        <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none">
          <div className="flex items-center justify-between">
            <span
              className={`font-mono text-[10px] tracking-[0.14em] uppercase px-2.5 py-1 rounded-md border ${
                isFeatured
                  ? 'bg-accent text-[#0F0F0F] border-accent font-bold'
                  : 'bg-black/60 backdrop-blur text-accent border-accent/30'
              }`}
            >
              {project.tag}
            </span>
            {project.url && (
              <span className="h-7 w-7 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center text-white/80 group-hover:text-accent group-hover:border-accent/40 transition-colors">
                ↗
              </span>
            )}
          </div>
          <div>
            <p className="font-head text-[22px] sm:text-[24px] font-bold text-white drop-shadow-md tracking-tight leading-tight">
              {project.title}
            </p>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-[16px] sm:text-[17px] font-bold leading-snug text-ink">{project.fullTitle}</h3>
        <p className="mt-2.5 text-[13px] leading-6 text-muted flex-1">{project.desc}</p>
        
        <div className="mt-4 pt-3 border-t border-line flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[11px] leading-5 text-accent/90">{project.stack}</p>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-accent hover:brightness-125 transition-all link-underline-fade"
            >
              Live Demo <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-bg">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="max-w-2xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent/60" aria-hidden="true" />
            <p className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">— Projects</p>
          </div>
          <h2 className="mt-4 font-head text-[30px] sm:text-[40px] font-bold tracking-[-0.02em] text-ink">Featured Projects</h2>
          <p className="mt-3 text-[15px] leading-7 text-muted">A selection of projects in fullstack development, AI and CMS — built to solve real problems.</p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
