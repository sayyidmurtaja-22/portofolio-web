import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
};

const ICONS = [
  'react','nextjs','nestjs','python','flask','flutter',
  'postgresql','mysql','javascript','typescript','tailwindcss','wordpress',
  'laravel','html5','css3','tensorflow',
];

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -32]);
  const ySlow = useTransform(scrollY, [0, 500], [0, 18]);
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-70 pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-24 right-0 w-[420px] h-[420px] bg-surface rounded-full blur-3xl opacity-70 pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="min-h-[88vh] flex items-center pt-[72px] pb-8 lg:py-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full py-6 lg:py-10">
            <div className="lg:col-span-7">
              {/* Elegant eyebrow: typography + rule, no badge/pill */}
              <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-4">
                <span className="h-px w-10 sm:w-14 bg-ink/70" aria-hidden="true" />
                <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-ink">
                  Muhammad Sayyid Murtaja <span className="text-caption font-medium tracking-[0.18em]">· Fullstack Developer</span>
                </p>
              </motion.div>

              <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="mt-6 text-[38px] sm:text-[52px] lg:text-[64px] font-extrabold leading-[0.96] tracking-[-0.03em] text-ink text-balance">
                Building the web,
                <br />
                <span className="font-light text-muted">end to end.</span>
              </motion.h1>

              <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="mt-6 max-w-[580px] text-[15px] sm:text-[17px] leading-[1.75] text-muted text-balance">
                Fresh graduate focused on <span className="font-semibold text-ink link-underline">web development</span> and{' '}
                <span className="font-semibold text-ink link-underline">AI automation</span>, currently a Website Developer Intern at{' '}
                <span className="font-semibold text-ink">Wiratek Solusi Asia</span>, shipping an LMS platform with NestJS, PostgreSQL and Handlebars.
              </motion.p>

              <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="mt-4 max-w-[580px] text-[13px] sm:text-sm leading-6 text-caption">
                <p>
                  <span className="text-ink font-medium">RevoU Fullstack</span>
                  <span className="mx-2 text-line">·</span>
                  <span className="text-ink font-medium">Kesatria JS / Next.js</span>
                  <span className="mx-2 text-line">·</span>
                  <span className="text-ink font-medium">WebGIS</span>
                  <span className="mx-2 text-line">·</span>
                  5 shipped projects
                </p>
              </motion.div>

              <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <button onClick={() => go('projects')} className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-ink text-white text-[14px] font-medium hover:bg-black hover:-translate-y-px active:translate-y-0 transition-all shadow-soft">
                  Explore Projects
                  <span className="ml-2" aria-hidden="true">→</span>
                </button>
                <button onClick={() => go('experience')} className="inline-flex items-center justify-center h-12 px-8 rounded-lg border border-line bg-white text-ink text-[14px] font-medium hover:border-ink hover:bg-surface transition-all">
                  View Experience
                </button>
              </motion.div>

              {/* Mature meta row: minimal borders, no pills */}
              <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" className="mt-10 pt-6 border-t border-line max-w-[580px]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 text-[12px] sm:text-[13px] text-caption">
                  <span className="inline-flex items-center gap-2 text-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-medium">Open to internships & freelance</span>
                  </span>
                  <span className="hidden sm:block mx-4 h-4 w-px bg-line" aria-hidden="true" />
                  <span>Tangerang, Indonesia · Remote-ready</span>
                  <a href="/resume.pdf" target="_blank" rel="noreferrer" className="sm:ml-auto text-ink font-semibold link-underline-fade w-fit">
                    Download CV
                  </a>
                </div>
              </motion.div>

              {/* Icon marquee strip */}
              <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible" className="mt-8 max-w-[580px] overflow-hidden">
                <div className="marquee-mask">
                  <div className="flex w-max items-center gap-6 animate-marquee-x">
                    {[...ICONS, ...ICONS, ...ICONS].map((name, i) => (
                      <img
                        key={name + i}
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`}
                        alt=""
                        className="h-5 w-5 sm:h-6 sm:w-6 object-contain opacity-25 hover:opacity-60 transition-opacity duration-300"
                        loading="lazy"
                      />
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
                  className="rounded-2xl overflow-hidden bg-white border border-line shadow-card"
                >
                  <img src="/foto-anda.jpg" alt="Muhammad Sayyid Murtaja" className="w-full aspect-[4/5] object-cover object-top" onError={(e) => (e.currentTarget.src = '/sayyid_murtaja-removebg-preview.png')} loading="eager" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.5 }}
                  className="absolute -bottom-5 left-3 right-3 sm:left-4 sm:right-auto bg-white border border-line rounded-xl shadow-card px-4 py-3 flex items-center gap-3"
                >
                  <span className="h-8 w-8 grid place-items-center rounded-lg bg-surface border border-line text-sm" aria-hidden="true">◧</span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-ink leading-tight truncate">kesatria.wiratek.id · LMS</p>
                    <p className="text-[11px] text-caption">NestJS · PostgreSQL · Handlebars</p>
                  </div>
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
