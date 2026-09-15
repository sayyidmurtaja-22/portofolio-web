import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
};

const TECH = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true },
  { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
];

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -32]);
  const ySlow = useTransform(scrollY, [0, 500], [0, 18]);
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative bg-bg overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-70 pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-24 right-0 w-[420px] h-[420px] bg-surface rounded-full blur-3xl opacity-70 pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="min-h-[88vh] flex items-center pt-[72px] pb-8 lg:py-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full py-6 lg:py-10">
            <div className="lg:col-span-7">
              {/* Eyebrow mono lime */}
              <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-4">
                <span className="h-px w-10 sm:w-14 bg-accent/60" aria-hidden="true" />
                <p className="font-mono text-[11px] sm:text-xs tracking-[0.18em] uppercase text-accent">
                  — Muhammad Sayyid Murtaja · Fullstack Developer
                </p>
              </motion.div>

              <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="mt-6 font-head text-[38px] sm:text-[52px] lg:text-[68px] font-bold leading-[0.96] tracking-[-0.03em] text-ink text-balance">
                I build modern web apps, end to end.
              </motion.h1>

              <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="mt-5 max-w-[580px] text-[16px] leading-[1.6] text-muted text-balance">
                Fullstack Developer experienced across the web ecosystem — from responsive interfaces to robust APIs and production deployments.
              </motion.p>

              <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="mt-4 max-w-[580px]">
                <p className="font-mono text-[12px] tracking-[0.08em] uppercase leading-6 text-caption">
                  Kesatria Academy Certified · 5+ Verified Credentials · Open to Work
                </p>
              </motion.div>

              <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <button onClick={() => go('projects')} className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-accent text-[#0F0F0F] text-[14px] font-semibold hover:brightness-110 hover:-translate-y-px active:translate-y-0 transition-all">
                  Explore Projects
                  <span className="ml-2" aria-hidden="true">→</span>
                </button>
                <button onClick={() => go('experience')} className="inline-flex items-center justify-center h-12 px-8 rounded-lg border border-line bg-surface text-ink text-[14px] font-medium hover:border-accent transition-all">
                  View Experience
                </button>
              </motion.div>

              {/* Meta row */}
              <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" className="mt-10 pt-6 border-t border-line max-w-[580px]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 text-[12px] sm:text-[13px]">
                  <span className="inline-flex items-center gap-2 text-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="font-medium">Available for work</span>
                  </span>
                  <span className="hidden sm:block mx-4 h-4 w-px bg-line" aria-hidden="true" />
                  <span className="text-muted">Tangerang, Indonesia · Remote Ready</span>
                </div>
              </motion.div>

              {/* Tech pill marquee */}
              <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible" className="mt-8 max-w-[580px] overflow-hidden">
                <div className="marquee-mask">
                  <div className="flex w-max items-center gap-3 animate-marquee-x">
                    {[...TECH, ...TECH, ...TECH].map((t, i) => (
                      <span
                        key={t.name + i}
                        className="whitespace-nowrap rounded-full bg-surface border border-line px-4 py-2 font-mono text-[12px] text-muted inline-flex items-center gap-2"
                      >
                        <img src={t.icon} alt="" className={`h-4 w-4 object-contain shrink-0${t.invert ? ' invert' : ''}`} loading="lazy" />
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div style={{ y }} className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] sm:max-w-[420px]">
                <motion.div style={{ y: ySlow }} className="absolute -inset-4 sm:-inset-6 bg-surface rounded-[28px] -z-10 hidden sm:block" aria-hidden="true" />
                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl overflow-hidden bg-[#1E1E1E] border border-line"
                >
                  <img src="/wisuda.JPG" alt="Muhammad Sayyid Murtaja — graduation photo" className="w-full h-auto block" onError={(e) => (e.currentTarget.src = '/foto-anda.jpg')} loading="eager" />
                  <div className="p-5 text-center border-t border-line">
                    <p className="text-[13px] font-semibold text-ink leading-snug">Muhammad Sayyid Murtaja — Fullstack Developer</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.5 }}
                  className="absolute -bottom-5 left-3 right-3 sm:left-4 sm:right-auto bg-surface border border-line rounded-full px-4 py-2.5 flex items-center gap-2.5 w-fit"
                >
                  <span className="text-accent text-sm" aria-hidden="true">◧</span>
                  <p className="font-mono text-[12px] text-muted whitespace-nowrap">Building Modern Web Apps, End to End</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
