import React from 'react';
import { motion } from 'framer-motion';

const entries = [
  {
    period: 'Jun 2026 to Present',
    place: 'Purwokerto · South Jakarta',
    role: 'Website Developer Intern',
    org: 'Wiratek Solusi Asia',
    note: 'IT consulting: software, AI implementation and blockchain, plus bootcamps.',
    points: [
      'Develop and maintain LMS kesatria.wiratek.id as Fullstack Developer with NestJS, PostgreSQL, Handlebars, JavaScript.',
      'Build frontend + backend features supporting core learning functionalities.',
      'Design database schemas and RESTful APIs with the team (NestJS + PostgreSQL).',
      'Implement server-side rendered views with Handlebars for dynamic, responsive UI.',
    ],
  },
  {
    period: 'Mar 2023 to Dec 2023',
    place: 'Purwokerto',
    role: 'Staff, Ministry of Student Resource Development',
    org: 'Student Executive Board (BEM)',
    note: 'Campus leadership & orientation.',
    points: [
      'Organized PKKMB New Student Orientation 2024, planning and execution for new-student onboarding.',
      'Led “Upgrading Internal BEM FPIK Unsoed” to strengthen capacity & teamwork.',
      'Event Division Staff for PKKMB 2023, orientation activities and logistics.',
    ],
  },
  {
    period: 'Aug 2022 to Aug 2026',
    place: 'Purwokerto',
    role: 'Bachelor of Marine Science',
    org: 'Universitas Jenderal Soedirman',
    note: 'Undergraduate studies + athletics.',
    points: ['Achieved 3rd Place, Unsoed Rector’s Cup 2024, Futsal Category.'],
  },
  {
    period: '2024 to 2026',
    place: 'Indonesia · Remote',
    role: 'Professional Training',
    org: 'RevoU · Kesatria · Geosoftware · Gim',
    note: 'Continuous upskilling alongside studies & internship.',
    points: [
      'Fullstack Website, KelasFullstack / RevoU.',
      'JavaScript and Next.js, Kesatria Academy (Wiratek).',
      'WebGIS at Geosoftware, WebGIS 3D at Gim E-Learning.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="max-w-2xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-ink/60" aria-hidden="true" />
            <p className="text-[11px] font-semibold tracking-[0.22em] text-ink uppercase">Experience</p>
          </div>
          <h2 className="mt-4 text-[30px] sm:text-[38px] font-bold tracking-[-0.02em] text-ink leading-[1.05]">A timeline, not a list.</h2>
          <p className="mt-3 text-[15px] leading-7 text-muted">Work, organization, education and training. Everything from my CV, in order.</p>
        </motion.div>

        <div className="mt-8 relative">
          {/* vertical rule: desktop left rail, mobile inset */}
          <div className="absolute left-[7px] sm:left-[9px] lg:left-[220px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
          <div className="space-y-6 lg:space-y-8">
            {entries.map((e, i) => (
              <motion.article
                key={e.org + i}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: Math.min(i * 0.06, 0.2), duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid lg:grid-cols-[220px_1fr] gap-4 lg:gap-10 pl-8 sm:pl-10 lg:pl-0"
              >
                <span className="absolute left-0 sm:left-[2px] lg:left-[213px] top-2 h-[15px] w-[15px] rounded-full border-[3px] border-ink bg-white shadow-sm" aria-hidden="true" />
                <div className="lg:text-right lg:pr-10 lg:pt-5">
                  <p className="text-[13px] font-semibold text-ink">{e.period}</p>
                  <p className="mt-1 text-[12px] text-caption">{e.place}</p>
                </div>
                <div className="rounded-2xl bg-white border border-line shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all p-5 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5">
                    <h3 className="text-[17px] sm:text-lg font-bold text-ink tracking-tight">{e.org}</h3>
                    <span className="text-[12px] font-medium text-caption shrink-0">{e.role}</span>
                  </div>
                  <p className="mt-1.5 text-[13px] text-caption italic">{e.note}</p>
                  <ul className="mt-4 space-y-2.5">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[13.5px] sm:text-sm leading-6 text-muted">
                        <span className="mt-[9px] h-1 w-4 shrink-0 bg-ink/70 rounded-[2px]" aria-hidden="true" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
