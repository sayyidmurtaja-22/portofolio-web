import React from 'react';
import { motion } from 'framer-motion';

const INFO = [
  { k: 'EMAIL', v: 'sayyid.tw@gmail.com' },
  { k: 'BASE', v: 'Tangerang, ID' },
  { k: 'FOCUS', v: 'Fullstack & AI' },
];

const STATS = [
  { k: '6', v: 'Projects' },
  { k: '5+', v: 'Trainings' },
  { k: '2+', v: 'Years' },
];

const About = () => {
  return (
    <section id="about" className="py-[72px] lg:py-[80px] bg-surface border-y border-line">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 w-full max-w-[380px] mx-auto lg:mx-0"
          >
            <div className="relative rounded-[16px] overflow-hidden bg-card border border-accent">
              <img src="/terbaru.JPG" alt="Muhammad Sayyid Murtaja" className="w-full h-auto block" loading="lazy" onError={(e) => (e.currentTarget.src = '/foto-anda.jpg')} />
              <div className="absolute top-0 inset-x-0 flex items-center justify-between px-4 pt-3" aria-hidden="true">
                <span className="font-mono text-[11px] tracking-[0.14em] text-white drop-shadow">TNG — ID</span>
                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-4 pb-4 pt-10">
                <p className="text-[15px] font-bold text-white leading-tight">M. Sayyid Murtaja</p>
                <p className="mt-1 font-mono text-[11px] tracking-[0.08em] uppercase text-accent">Fullstack Developer · 2+ yrs</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-[12px]">
              <span className="inline-flex items-center gap-2 text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="font-medium">Available for work</span>
              </span>
              <span className="text-muted font-mono">2022 — 2026</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent/60" aria-hidden="true" />
              <p className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">— About</p>
            </div>
            <h2 className="mt-4 font-head text-[32px] sm:text-[40px] font-bold tracking-[-0.02em] leading-[1.05] text-ink">
              About Me
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.8] text-muted max-w-[600px]">
              <p>
                I&apos;m <span className="font-semibold text-ink">Muhammad Sayyid Murtaja</span>, a Fullstack Developer focused on{' '}
                <span className="text-ink font-medium">web development and AI automation</span> — from clean interfaces to solid APIs and production deploys.
              </p>
              <p>
                I&apos;ve completed <span className="text-ink font-medium">Javascript Mastery: From Zero to Fullstack Hero (Kesatria Academy)</span>,{' '}
                <span className="text-ink font-medium">WebGIS Fundamentals with Python (Geosoftware.ID)</span>,{' '}
                <span className="text-ink font-medium">Intermediate & Advance II 3D GIS & Digital Twin (GIM Learning Club)</span>, and served as{' '}
                <span className="text-ink font-medium">Teaching Assistant for Marine Remote Sensing</span> at Universitas Jenderal Soedirman. Daily I build with React & Next.js, NestJS, Node.js, and Python.
              </p>
              <p>
                Former Intern at <span className="text-ink font-medium">Wiratek Solusi Asia</span> contributing to the LMS at{' '}
                <span className="text-ink font-medium">kesatria.wiratek.id</span> with NestJS and PostgreSQL. Now open to full-time roles and ready to ship with your team.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-[600px]">
              {INFO.map((c) => (
                <div key={c.k} className="rounded-[10px] bg-[#0F0F0F] border border-line p-4">
                  <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-faint">{c.k}</p>
                  <p className="mt-2 text-[13px] font-bold text-ink leading-snug break-words">{c.v}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-6 sm:gap-8 border-t border-line pt-5 max-w-[600px]">
              {STATS.map((s) => (
                <div key={s.v}>
                  <p className="font-head text-[22px] font-bold text-ink leading-none tracking-tight">{s.k}</p>
                  <p className="mt-1.5 font-mono text-[11px] tracking-[0.08em] uppercase text-caption">{s.v}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-11 px-7 rounded-lg bg-accent text-[#0F0F0F] text-sm font-semibold hover:brightness-110 transition-all w-fit">
                Download CV <span className="ml-1.5" aria-hidden="true">→</span>
              </a>
              <a href="mailto:sayyid.tw@gmail.com" className="text-sm font-medium text-ink link-underline-fade w-fit">
                sayyid.tw@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
