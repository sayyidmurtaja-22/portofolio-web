import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-surface border-y border-line">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl overflow-hidden bg-white border border-line shadow-card">
              <img src="/foto-anda.jpg" alt="Muhammad Sayyid Murtaja" className="w-full aspect-[4/5] object-cover object-top" loading="lazy" onError={(e) => (e.currentTarget.src = '/sayyid_murtaja-removebg-preview.png')} />
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-[15px] font-semibold text-ink">Muhammad Sayyid Murtaja</p>
                <p className="mt-1 text-[11px] tracking-[0.18em] uppercase text-caption font-medium">Fullstack Developer Intern</p>
              </div>
              <div className="text-right text-[12px] leading-5 text-caption shrink-0">
                <p>Tangerang, Banten</p>
                <a href="https://www.teknosea.my.id" target="_blank" rel="noreferrer" className="text-ink font-medium link-underline-fade">teknosea.my.id</a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-ink/60" aria-hidden="true" />
              <p className="text-[11px] font-semibold tracking-[0.22em] text-ink uppercase">About</p>
            </div>
            <h2 className="mt-4 text-[30px] sm:text-[38px] font-bold tracking-[-0.02em] leading-[1.05] text-ink text-balance">
              Between design <span className="font-light text-muted">and engineering.</span>
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.8] text-muted max-w-[600px]">
              <p>
                I&apos;m <span className="font-semibold text-ink">Muhammad Sayyid Murtaja</span>, a fresh graduate with a strong interest in{' '}
                <span className="text-ink font-medium">web development and AI automation</span>. I started with UI details, spacing, typography, how an interaction should feel, then followed that curiosity into systems, APIs and data.
              </p>
              <p>
                Training-wise I&apos;ve completed <span className="text-ink font-medium">Fullstack Website (KelasFullstack / RevoU)</span>,{' '}
                <span className="text-ink font-medium">JavaScript & Next.js (Kesatria Academy)</span>, <span className="text-ink font-medium">WebGIS (Geosoftware)</span> and{' '}
                <span className="text-ink font-medium">WebGIS 3D (Gim E-Learning)</span>. Day to day I build with React & Next.js on the frontend and NestJS, Laravel and Flask on the backend, plus WordPress/Elementor for fast, client-ready sites.
              </p>
              <p>
                Currently interning as <span className="text-ink font-medium">Website Developer at Wiratek Solusi Asia</span>, maintaining the LMS at{' '}
                <span className="text-ink font-medium">kesatria.wiratek.id</span>. Outside code I led orientation programs in BEM and earned{' '}
                <span className="text-ink font-medium">3rd Place, Unsoed Rector&apos;s Cup 2024 (Futsal)</span>.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[600px]">
              <div className="rounded-xl bg-white border border-line p-4">
                <p className="text-[11px] tracking-[0.16em] uppercase font-semibold text-caption">Contact</p>
                <p className="mt-2 text-[13px] text-ink font-medium">sayyid.tw@gmail.com</p>
                <p className="text-[13px] text-muted">0882-0034-31868</p>
              </div>
              <div className="rounded-xl bg-white border border-line p-4">
                <p className="text-[11px] tracking-[0.16em] uppercase font-semibold text-caption">Elsewhere</p>
                <p className="mt-2 text-[13px]">
                  <a href="https://www.linkedin.com/in/sayyidmurtaja" target="_blank" rel="noreferrer" className="text-ink font-medium link-underline-fade">LinkedIn / sayyidmurtaja</a>
                </p>
                <p className="text-[13px]">
                  <a href="https://www.teknosea.my.id" target="_blank" rel="noreferrer" className="text-ink font-medium link-underline-fade">teknosea.my.id</a>
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 sm:gap-8 border-t border-line pt-4">
              {[
                { k: '5', v: 'CV projects shipped' },
                { k: '5+', v: 'Trainings & bootcamps' },
                { k: 'Jun 2026', v: 'Intern at Wiratek' },
              ].map((s) => (
                <div key={s.v}>
                  <p className="text-xl font-bold text-ink leading-none tracking-tight">{s.k}</p>
                  <p className="mt-1.5 text-xs text-caption">{s.v}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
