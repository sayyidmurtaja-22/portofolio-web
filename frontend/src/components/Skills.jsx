import React from 'react';
import { motion } from 'framer-motion';

const stackRow = ['React', 'Next.js', 'NestJS', 'PostgreSQL', 'Handlebars', 'Flask', 'Flutter', 'WordPress', 'Tailwind CSS', 'MySQL', 'Python', 'JavaScript'];

const bento = [
  {
    title: 'Fullstack Web',
    desc: 'Daily drivers for product work including LMS, dashboards and APIs.',
    items: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Handlebars', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    title: 'CMS & Client Sites',
    desc: 'WordPress builds that clients can actually manage.',
    items: [
      { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
      { name: 'Elementor', note: 'Page builder' },
      { name: 'Landing Pages', note: 'CRO layouts' },
      { name: 'UI/UX Principles', note: 'Systems' },
    ],
  },
  {
    title: 'AI, Mobile & Backend',
    desc: 'RAG chatbots, on-device vision, REST services.',
    items: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'LlamaIndex + Groq', note: 'RAG stack' },
      { name: 'TensorFlow Lite', note: 'On-device' },
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    ],
  },
  {
    title: 'Web Foundations & Ops',
    desc: 'Responsive first, integrated, shippable.',
    items: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Google Maps API', note: 'Maps' },
      { name: 'cPanel Hosting', note: 'Deploy' },
    ],
  },
];

const soft = ['Analytical & Problem Solving', 'Fast Learner & Adaptability', 'Team Collaboration', 'Project & Time Management', 'Client Communication'];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const item = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-surface border-y border-line overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-ink/60" aria-hidden="true" />
            <p className="text-[11px] font-semibold tracking-[0.22em] text-ink uppercase">Skills</p>
            <span className="h-px w-10 bg-ink/60" aria-hidden="true" />
          </div>
          <h2 className="mt-4 text-[30px] sm:text-[38px] font-bold tracking-[-0.02em] text-ink">Technical bento, built from my CV.</h2>
          <p className="mt-3 text-[15px] leading-7 text-muted">Every hard skill from my resume, grouped the way I actually work. Plus the soft skills that ship projects.</p>
        </motion.div>

        {/* Tech marquee: text + rules, no pills */}
        <div className="mt-6 marquee-mask overflow-hidden border-y border-line py-3" aria-hidden="true">
          <div className="animate-marquee-x flex w-max items-center gap-8 pr-8">
            {[...stackRow, ...stackRow].map((t, i) => (
              <span key={t + i} className="flex items-center gap-8 text-[13px] font-medium tracking-[0.14em] uppercase text-muted whitespace-nowrap">
                {t}
                <span className="h-1 w-1 bg-line rounded-[1px]" />
              </span>
            ))}
          </div>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {bento.map((group) => (
            <motion.div
              key={group.title}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="rounded-2xl bg-white border border-line p-5 sm:p-6 flex flex-col hover:shadow-card transition-shadow"
            >
              <h3 className="text-[15px] font-bold text-ink tracking-tight">{group.title}</h3>
              <p className="mt-1 text-[12.5px] leading-5 text-caption">{group.desc}</p>
              <div className="my-4 h-px bg-line" aria-hidden="true" />
              <ul className="grid grid-cols-2 gap-2.5 flex-1">
                {group.items.map((s) => (
                  <li key={s.name} className="rounded-lg bg-surface border border-line px-2.5 py-2.5 flex items-center gap-2 min-h-[52px]">
                    {s.icon ? (
                      <img src={s.icon} alt="" className="h-5 w-5 object-contain shrink-0" loading="lazy" />
                    ) : (
                      <span className="h-5 w-5 grid place-items-center rounded-md bg-ink text-white text-[10px] font-bold shrink-0" aria-hidden="true">
                        {s.name.charAt(0)}
                      </span>
                    )}
                    <span className="min-w-0">
                      <span className="block text-[12px] font-semibold text-ink leading-tight truncate">{s.name}</span>
                      {s.note && <span className="block text-[10.5px] text-caption leading-tight truncate">{s.note}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft skills: elegant underline list, no pills */}
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-4 rounded-2xl bg-ink text-white p-5 sm:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="lg:max-w-[240px] shrink-0">
              <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-white/50">How I work</p>
              <h3 className="mt-2 text-lg font-bold tracking-tight">Soft skills</h3>
              <p className="mt-1 text-[13px] text-white/60 leading-6">Straight from the CV. The habits behind the builds.</p>
            </div>
            <div className="h-px lg:h-auto lg:w-px lg:self-stretch bg-white/10" aria-hidden="true" />
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 flex-1">
              {soft.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-baseline gap-3 text-[13.5px] text-white/85"
                >
                  <span className="text-white/40 font-mono text-xs">0{i + 1}</span>
                  <span className="link-underline decoration-white/30">{s}</span>
                </motion.li>
              ))}
              <li className="text-[13.5px] text-white/85 flex items-baseline gap-3">
                <span className="text-white/40 font-mono text-xs">06</span>
                <span>WhatsApp Form & Maps integrations for clients</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
