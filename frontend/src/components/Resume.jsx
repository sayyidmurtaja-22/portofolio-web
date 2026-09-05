import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section id="resume" className="py-12 sm:py-16 lg:py-20 bg-surface border-y border-line">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-ink/60" aria-hidden="true" />
            <p className="text-[11px] font-semibold tracking-[0.22em] text-ink uppercase">Curriculum Vitae</p>
          </div>
          <h2 className="mt-4 text-[30px] sm:text-[38px] font-bold tracking-[-0.02em] text-ink leading-[1.05]">Full CV. Live and explained.</h2>
          <p className="mt-3 text-[15px] leading-7 text-muted">Everything from my resume, unpacked. Preview on the left, story on the right. Contact, work, education, projects and skills.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex h-11 px-7 rounded-lg bg-ink text-white text-sm font-medium items-center justify-center hover:bg-black transition-colors">
              View PDF <span className="ml-1.5" aria-hidden="true">↗</span>
            </a>
            <a href="/resume.pdf" download className="inline-flex h-11 px-7 rounded-lg border border-line bg-white text-sm font-medium items-center justify-center hover:border-ink transition-colors">Download CV</a>
          </div>
        </motion.div>

        <div className="mt-10 grid lg:grid-cols-12 gap-5 lg:gap-7 items-start">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="rounded-2xl overflow-hidden bg-white border border-line shadow-card">
              <div className="flex items-center justify-between px-4 py-3 border-b border-line bg-white">
                <span className="text-[13px] font-semibold text-ink">Resume Preview</span>
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-caption border border-line px-2 py-1 rounded-md">PDF</span>
              </div>
              <div className="aspect-[3/4] bg-surface p-2">
                <iframe src="/resume.pdf#view=FitH" title="CV Preview" className="w-full h-full rounded-xl border border-line bg-white" loading="lazy" />
              </div>
              <div className="px-4 py-3 flex items-center justify-between border-t border-line gap-3">
                <span className="text-xs text-caption truncate">sayyid.tw@gmail.com · 0882-0034-31868</span>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-xs font-semibold text-ink link-underline-fade shrink-0">Open →</a>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-12 gap-4">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05, duration: 0.5 }} className="col-span-12 rounded-2xl bg-white border border-line p-6 sm:p-7">
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-caption">Summary</p>
              <p className="mt-2.5 text-sm leading-7 text-muted">Fresh graduate focused on web and AI automation. Trained in Fullstack (RevoU/KelasFullstack), JS and Next.js (Kesatria Academy), WebGIS (Geosoftware) and WebGIS 3D (Gim E-Learning), plus internship as Website Developer at Wiratek, an IT and AI consulting company.</p>
              <div className="mt-4 pt-4 border-t border-line grid sm:grid-cols-2 gap-2 text-[12.5px]">
                <p className="text-muted"><span className="text-ink font-medium">Phone</span>: 0882-0034-31868</p>
                <p className="text-muted"><span className="text-ink font-medium">Base</span>: Tangerang, Banten</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08, duration: 0.5 }} className="col-span-12 lg:col-span-7 rounded-2xl bg-ink text-white p-6 sm:p-7">
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-white/50">Work Experience</p>
              <h3 className="mt-2 font-bold text-white text-[16px]">Wiratek Solusi Asia</h3>
              <p className="text-xs text-white/60 mt-0.5">Website Developer Intern · Jun 2026 to Present · Purwokerto</p>
              <ul className="mt-4 space-y-2 text-[13px] leading-6 text-white/80">
                <li className="flex gap-2.5"><span className="mt-2 h-1 w-3 bg-white/40 rounded-[2px] shrink-0" />LMS kesatria.wiratek.id with NestJS, PostgreSQL and Handlebars</li>
                <li className="flex gap-2.5"><span className="mt-2 h-1 w-3 bg-white/40 rounded-[2px] shrink-0" />Frontend + backend learning flows & SSR views</li>
                <li className="flex gap-2.5"><span className="mt-2 h-1 w-3 bg-white/40 rounded-[2px] shrink-0" />DB schemas & REST APIs with the team</li>
              </ul>
              <a href="#experience" onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }} className="mt-5 inline-block text-[13px] font-semibold link-underline">Full timeline →</a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="col-span-12 lg:col-span-5 rounded-2xl bg-white border border-line p-6 sm:p-7">
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-caption">Education</p>
              <h3 className="mt-2 font-bold text-ink leading-snug text-[15px]">Universitas Jenderal Soedirman</h3>
              <p className="text-[13px] text-muted mt-1">Bachelor of Marine Science</p>
              <p className="text-xs text-caption mt-1">Aug 2022 to Aug 2026 · Purwokerto</p>
              <div className="mt-4 pt-4 border-t border-line">
                <p className="text-[11px] tracking-[0.14em] uppercase font-semibold text-caption">Honor</p>
                <p className="mt-1.5 text-[13px] text-ink font-medium leading-6">3rd Place, Rector&apos;s Cup 2024, Futsal</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12, duration: 0.5 }} className="col-span-12 rounded-2xl bg-white border border-line p-6 sm:p-7">
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-caption">Projects in CV</p>
                <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-xs font-semibold text-ink link-underline-fade shrink-0">All work →</a>
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {[
                  { t: 'Marine Tech Research Hub · 2025', d: 'React · Tailwind CSS · Vercel · Corporate profile.' },
                  { t: 'PT Bisofer Saintek · 2025', d: 'WordPress company profile with theme, security and SEO.' },
                  { t: 'Desa Wisata Panembangan · 2025', d: 'Tourism site with mobile-first layout, maps and WA forms.' },
                  { t: 'RAG Academic Chatbot · 2026', d: 'Python · LlamaIndex · Groq · WebSockets.' },
                  { t: 'AI Object Detection · 2026', d: 'Flutter · TensorFlow Lite · Provider.' },
                ].map((p) => (
                  <div key={p.t} className="rounded-xl bg-surface border border-line p-4">
                    <p className="text-[12.5px] font-semibold text-ink leading-snug">{p.t}</p>
                    <p className="text-xs text-muted mt-1 leading-5">{p.d}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.14, duration: 0.5 }} className="col-span-12 rounded-2xl bg-white border border-line p-6 sm:p-7">
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-caption">Organization</p>
              <div className="mt-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-bold text-ink text-[15px]">BEM, Ministry of Student Resource Development</h3>
                <span className="text-xs text-caption shrink-0">Mar 2023 to Dec 2023</span>
              </div>
              <p className="mt-1.5 text-[13px] leading-6 text-muted">PKKMB orientation programs, internal upgrading for FPIK Unsoed, event division staffing.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
