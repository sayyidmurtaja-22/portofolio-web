import React from 'react';
import { motion } from 'framer-motion';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const SKILL_COLUMNS = [
  {
    id: 'left',
    groups: [
      {
        title: 'Fullstack Web',
        items: [
          { name: 'React', icon: `${DEVICON}/react/react-original.svg` },
          { name: 'Next.js', icon: `${DEVICON}/nextjs/nextjs-original.svg`, invert: true },
          { name: 'NestJS', icon: `${DEVICON}/nestjs/nestjs-original.svg` },
          { name: 'PostgreSQL', icon: `${DEVICON}/postgresql/postgresql-original.svg` },
          { name: 'Handlebars', icon: `${DEVICON}/handlebars/handlebars-original.svg` },
          { name: 'MySQL', icon: `${DEVICON}/mysql/mysql-original.svg` },
        ],
        note: 'My daily stack for products & APIs',
      },
      {
        title: 'CMS & Client Sites',
        items: [
          { name: 'WordPress', icon: `${DEVICON}/wordpress/wordpress-original.svg` },
          { name: 'Elementor' },
          { name: 'Landing Pages' },
          { name: 'SEO' },
          { name: 'Speed' },
        ],
        note: 'Easy-to-manage client websites',
      },
    ],
  },
  {
    id: 'right',
    groups: [
      {
        title: 'AI, Mobile & Backend',
        items: [
          { name: 'Python', icon: `${DEVICON}/python/python-original.svg` },
          { name: 'Flask', icon: `${DEVICON}/flask/flask-original.svg`, invert: true },
          { name: 'Flutter', icon: `${DEVICON}/flutter/flutter-original.svg` },
          { name: 'TensorFlow Lite', icon: `${DEVICON}/tensorflow/tensorflow-original.svg` },
          { name: 'Laravel', icon: `${DEVICON}/laravel/laravel-original.svg` },
        ],
        note: 'AI features, mobile apps & APIs',
      },
      {
        title: 'Web Foundations',
        items: [
          { name: 'HTML', icon: `${DEVICON}/html5/html5-original.svg` },
          { name: 'CSS', icon: `${DEVICON}/css3/css3-original.svg` },
          { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg` },
          { name: 'Tailwind', icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
          { name: 'Maps API' },
          { name: 'cPanel' },
        ],
        note: 'Clean, responsive interfaces',
      },
    ],
  },
];

const SOFT_SKILLS_LINE = 'Beyond code — Problem Solving · Teamwork · Communication · Fast Learning · Time Management';

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const rise = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

function TechPill({ name, icon, invert }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-surface border border-line px-3 py-1.5 font-mono text-[12px] text-muted">
      {icon && <img src={icon} alt="" className={`h-4 w-4 object-contain shrink-0${invert ? ' invert' : ''}`} loading="lazy" />}
      {name}
    </span>
  );
}

function SkillCard({ title, items, note }) {
  return (
    <motion.div
      variants={rise}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="rounded-[12px] bg-[#0F0F0F] border border-line p-5 sm:p-6"
    >
      <h3 className="text-[15px] font-bold text-ink tracking-tight">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((t) => (
          <TechPill key={t.name} name={t.name} icon={t.icon} invert={t.invert} />
        ))}
      </div>
      <p className="mt-3 text-[12.5px] leading-5 text-caption">{note}</p>
    </motion.div>
  );
}

function SoftSkillsBar() {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-4 rounded-[12px] bg-[#0A0A0A] border border-line px-5 py-4">
      <p className="font-mono text-[12px] leading-6 text-muted text-center">{SOFT_SKILLS_LINE}</p>
    </motion.div>
  );
}

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-surface border-y border-line overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-accent/60" aria-hidden="true" />
            <p className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">— Skills</p>
            <span className="h-px w-10 bg-accent/60" aria-hidden="true" />
          </div>
          <h2 className="mt-4 font-head text-[30px] sm:text-[38px] font-bold tracking-[-0.02em] text-ink">Skills & Expertise</h2>
          <p className="mt-3 text-[15px] leading-7 text-muted">Technologies I use to design, build and ship products.</p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {SKILL_COLUMNS.map((col) => (
            <div key={col.id} className="grid gap-4 content-start">
              {col.groups.map((g) => (
                <SkillCard key={g.title} title={g.title} items={g.items} note={g.note} />
              ))}
            </div>
          ))}
        </motion.div>

        <SoftSkillsBar />
      </div>
    </section>
  );
};

export default Skills;
