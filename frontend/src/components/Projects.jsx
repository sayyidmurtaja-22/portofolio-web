import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 'marinetech',
    year: '2025',
    type: 'Featured · Corporate Profile',
    title: 'Marine Tech Corporate Profile & Research Hub',
    desc: 'A premium, end-to-end corporate profile and digital research repository built for a marine technology and data science laboratory.',
    stack: 'React · Tailwind CSS · Vercel',
    fullDesc:
      'A premium corporate profile and digital research repository for a marine technology and data science laboratory. Features a modern, ultra-clean UI, a custom academic thesis repository with CRUD capabilities and live preview, and fully responsive layouts across every device.',
    gradient: 'from-[#0C1222] to-[#1A2744]',
    glyph: '◈',
    url: 'https://marinetech-eta.vercel.app/',
  },
  {
    id: 'rag',
    year: '2026',
    type: 'AI Platform',
    title: 'Intelligent Academic Assistant: RAG Chatbot',
    desc: 'Conversational AI over official university documents with grounded answers, real-time chat and automated transcript plus SKAK requests.',
    stack: 'Python · Flask · LlamaIndex · Groq · HuggingFace · SQLite · WebSockets',
    fullDesc:
      'Sophisticated RAG platform: LlamaIndex + Groq LLMs + HuggingFace embeddings for context-aware answers strictly from official docs. SQLite backend with WebSockets for real-time messaging; automates academic transcript and active-student certificate (SKAK) workflows.',
    gradient: 'from-ink to-[#1E293B]',
    glyph: '◧',
  },
  {
    id: 'detect',
    year: '2026',
    type: 'Mobile · On-device ML',
    title: 'Real-Time AI Object Detection App',
    desc: 'Cross-platform Flutter app that detects and counts objects live via camera for smooth, lag-free inference on device.',
    stack: 'Flutter · Dart · TensorFlow Lite · Provider',
    fullDesc:
      'Flutter + Dart with TensorFlow Lite for real-time detection and counting (humans/fish) directly via camera. Optimized image pipelines + Provider state management for smooth inference even on low-end devices.',
    gradient: 'from-slate-800 to-slate-900',
    glyph: '◎',
  },
  {
    id: 'aws',
    year: '2025',
    type: 'Fullstack Dashboard',
    title: 'AWS Weather Monitoring Dashboard',
    desc: 'Real-time monitoring for Automated Weather Stations across Indonesia including temperature, wind, rainfall and battery health.',
    image: '/projects/aws-light.png',
    imageDark: '/projects/aws-dark.png',
    stack: 'Next.js · React · Prisma · MySQL · Recharts',
    fullDesc:
      'Thesis-grade monitoring for AWS stations across Indonesia. Live temperature, wind, rainfall and battery health with Recharts/ECharts, admin controls via Prisma/MySQL, auth via NextAuth. Built for reliability and clarity.',
    url: 'https://www.teknosea.my.id/',
  },
  {
    id: 'bisofer',
    year: '2025',
    type: 'Company Profile',
    title: 'PT Bisofer Saintek: Company Website',
    desc: 'Professional, responsive company profile on WordPress with theme customization aligned to brand, hardened and SEO ready.',
    stack: 'WordPress · Elementor · SEO · Security · Speed',
    fullDesc:
      'Designed and developed a professional responsive profile site for PT Bisofer Saintek with WordPress. Custom theme work to match brand identity plus essential plugins for security, speed optimization and basic SEO, lifting credibility and digital presence.',
    gradient: 'from-[#111111] to-[#3A3A3A]',
    glyph: '▦',
    url: 'https://biosfersaintek.com/',

  },
  {
    id: 'panembangan',
    year: '2025',
    type: 'Tourism Website',
    title: 'Desa Wisata Panembangan',
    desc: 'Tourism site with mobile-first layout, visual destination content and interactive maps for visitors.',
    stack: 'WordPress · Google Maps API · WhatsApp Forms · Mobile-first',
    fullDesc:
      'Fully responsible for UI design and development of a tourism website on WordPress. Highly mobile-friendly layout, engaging destination visuals and interactive map features for accessibility, plus WhatsApp form integration for visitor inquiries.',
    gradient: 'from-[#0F172A] to-[#334155]',
    glyph: '◍',
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="max-w-2xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-ink/60" aria-hidden="true" />
            <p className="text-[11px] font-semibold tracking-[0.22em] text-ink uppercase">Projects</p>
          </div>
          <h2 className="mt-4 text-[30px] sm:text-[38px] font-bold tracking-[-0.02em] text-ink">Selected work. All from my CV.</h2>
          <p className="mt-3 text-[15px] leading-7 text-muted">A marine tech research hub, a RAG chatbot, an on-device vision app, an AWS dashboard and two WordPress client sites. Tap any card for detail.</p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: Math.min(i * 0.06, 0.24), duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-line shadow-soft hover:shadow-card transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-surface border-b border-line">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
                ) : (
                  <div className={`h-full w-full bg-gradient-to-br ${p.gradient} grid place-items-center group-hover:scale-[1.01] transition-transform duration-500`}>
                    <span className="text-4xl text-white/80 font-light">{p.glyph}</span>
                  </div>
                )}
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-ink">{p.type}</p>
                  <p className="text-[11px] font-medium text-caption tabular-nums">{p.year}</p>
                </div>
                <h3 className="mt-2 text-[16px] sm:text-[17px] font-bold leading-snug text-ink">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-muted flex-1">{p.desc}</p>
                {/* Stack as elegant type line, no pills */}
                <p className="mt-4 pt-4 border-t border-line text-[11.5px] leading-5 tracking-wide text-caption font-medium">{p.stack}</p>
                <div className="mt-4 flex items-center gap-4">
                  <button onClick={() => setSelected(p)} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink w-fit link-underline-fade">
                    View Details <span aria-hidden="true">→</span>
                  </button>
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent w-fit link-underline-fade">
                      Visit Live Site <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}

          {/* Sixth cell: CTA card keeps grid balanced on xl */}
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -5 }}
            className="hidden xl:flex flex-col justify-between rounded-2xl bg-ink text-white p-7 hover:bg-black transition-colors"
          >
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-white/50">Next project</p>
              <h3 className="mt-3 text-[22px] font-bold leading-tight tracking-tight">Have something to build?</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">Internships, freelance and collaborations. I reply fast.</p>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold link-underline">Start a conversation <span aria-hidden="true">→</span></span>
          </motion.a>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm" onClick={() => setSelected(null)}>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-elevated"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-white/85 backdrop-blur border-b border-line px-5 py-4">
                <div className="flex items-baseline gap-3 min-w-0">
                  <span className="text-xs font-semibold tracking-[0.14em] uppercase text-ink truncate">{selected.type}</span>
                  <span className="text-xs text-caption tabular-nums shrink-0">{selected.year}</span>
                </div>
                <button onClick={() => setSelected(null)} className="h-9 w-9 grid place-items-center rounded-lg bg-surface hover:bg-line transition-colors text-ink" aria-label="Close">✕</button>
              </div>
              <div className="p-5 sm:p-7">
                {selected.image ? (
                  <div className="grid sm:grid-cols-2 gap-4">
                    <img src={selected.image} alt="Light mode" className="rounded-xl border border-line w-full" />
                    <img src={selected.imageDark} alt="Dark mode" className="rounded-xl border border-line w-full" />
                  </div>
                ) : (
                  <div className={`rounded-xl bg-gradient-to-br ${selected.gradient} p-12 grid place-items-center`}>
                    <span className="text-5xl text-white/80 font-light">{selected.glyph}</span>
                  </div>
                )}
                <h3 className="mt-6 text-xl font-bold text-ink tracking-tight">{selected.title}</h3>
                <p className="mt-1 text-[12px] font-medium tracking-wide text-caption">{selected.stack}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{selected.fullDesc}</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  {selected.url && (
                    <a href={selected.url} target="_blank" rel="noreferrer" className="rounded-lg bg-ink text-white px-6 py-3 text-sm font-medium hover:bg-black transition-colors text-center">
                      Visit Live Site <span className="ml-1" aria-hidden="true">↗</span>
                    </a>
                  )}
                  <a href="#contact" onClick={(e) => { e.preventDefault(); setSelected(null); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 80); }} className="rounded-lg border border-line px-6 py-3 text-sm font-medium hover:bg-surface transition-colors text-center">
                    {selected.url ? 'Discuss a Similar Build' : 'Discuss a similar build'}
                  </a>
                  <button onClick={() => setSelected(null)} className="rounded-lg border border-line px-6 py-3 text-sm font-medium hover:bg-surface transition-colors">Close</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
