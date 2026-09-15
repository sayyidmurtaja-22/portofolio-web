import React from 'react';
import { motion } from 'framer-motion';

const CONTACT_ROWS = [
  { k: 'Email', v: 'sayyid.tw@gmail.com', href: 'mailto:sayyid.tw@gmail.com' },
  { k: 'Phone', v: '0882-0034-31868', href: 'tel:+62882003431868' },
  { k: 'LinkedIn', v: 'linkedin.com/in/sayyidmurtaja', href: 'https://www.linkedin.com/in/sayyidmurtaja' },
  { k: 'Web', v: 'murtaja-portofolio.vercel.app', href: 'https://murtaja-portofolio.vercel.app/' },
  { k: 'Loc', v: 'Tangerang, ID · Remote' },
];

function CvDocMock() {
  return (
    <div className="rounded-[10px] bg-white border border-line overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-line">
        <p className="text-[12px] font-medium text-ink">● Resume.pdf — Preview</p>
        <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-caption border border-line rounded-md px-2 py-0.5">PDF · 2 pages</span>
      </div>
      <div className="h-[480px] sm:h-[560px] bg-white">
        <iframe src="/resume.pdf#view=FitH" title="CV Preview" className="w-full h-full bg-white" loading="lazy" />
      </div>
      <div className="flex items-center justify-between px-4 py-2.5 border-t border-line">
        <p className="font-mono text-[10px] text-caption">Page 1 / 2 · Updated Jun 2026</p>
        <a href="/resume.pdf" download className="rounded-md bg-accent text-[#0F0F0F] px-3 py-1.5 text-[11px] font-semibold hover:brightness-110 transition-all">
          Download ⤓
        </a>
      </div>
    </div>
  );
}

const Resume = () => {
  return (
    <section id="resume" className="py-[72px] lg:py-[80px] bg-surface border-y border-line">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 items-stretch">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="rounded-[14px] bg-[#0F0F0F] border border-line p-7">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent">Curriculum Vitae</p>
            <h2 className="mt-3 font-head text-[32px] font-bold tracking-tight text-ink">My Resume</h2>
            <p className="mt-2 text-[14px] leading-6 text-muted">Preview my resume below or download the full PDF version.</p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex h-11 px-7 rounded-lg bg-accent text-[#0F0F0F] text-sm font-semibold items-center justify-center hover:brightness-110 transition-all">
                View PDF <span className="ml-1.5" aria-hidden="true">↗</span>
              </a>
              <a href="/resume.pdf" download className="inline-flex h-11 px-7 rounded-lg bg-card border border-line text-ink text-sm font-medium items-center justify-center hover:border-accent transition-colors">
                Download CV
              </a>
            </div>
            <div className="mt-6">
              <CvDocMock />
            </div>
          </motion.div>

          <motion.div id="contact" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.08 }} className="rounded-[14px] bg-accent p-7 flex flex-col scroll-mt-20">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#0F0F0F]/70">Contact</p>
            <h2 className="mt-3 font-head text-[30px] sm:text-[36px] font-bold tracking-tight text-[#0F0F0F] leading-[1.05]">Let&apos;s Work Together</h2>
            <div className="mt-6 space-y-0 border-t border-[#0F0F0F]/15 flex-1">
              {CONTACT_ROWS.map((row) => (
                <div key={row.k} className="flex items-baseline justify-between gap-4 py-3 border-b border-[#0F0F0F]/15">
                  <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#0F0F0F]/60 shrink-0">{row.k}</span>
                  {row.href ? (
                    <a href={row.href} target={row.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-[13px] font-semibold text-[#0F0F0F] text-right truncate hover:underline">
                      {row.v}
                    </a>
                  ) : (
                    <span className="text-[13px] font-semibold text-[#0F0F0F] text-right">{row.v}</span>
                  )}
                </div>
              ))}
            </div>
            <a href="mailto:sayyid.tw@gmail.com" className="mt-6 inline-flex items-center justify-center h-12 w-full rounded-[10px] bg-[#0F0F0F] text-accent text-sm font-semibold hover:brightness-150 transition-all">
              Send Message <span className="ml-2" aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
