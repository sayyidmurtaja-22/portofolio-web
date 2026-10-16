import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
const CONTACT_ROWS = [
  { k: 'Email', v: 'sayyid.tw@gmail.com', href: 'mailto:sayyid.tw@gmail.com' },
  { k: 'Phone', v: '0882-0034-31868', href: 'tel:+62882003431868' },
  { k: 'LinkedIn', v: 'linkedin.com/in/sayyidmurtaja', href: 'https://www.linkedin.com/in/sayyidmurtaja' },
  { k: 'Web', v: 'murtaja-portofolio.vercel.app', href: 'https://murtaja-portofolio.vercel.app/' },
  { k: 'Loc', v: 'Tangerang, ID · Remote' },
];

function CvDocMock() {
  return (
    <div className="rounded-[10px] bg-card border border-line overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-line bg-surface">
        <p className="text-[12px] font-medium text-ink flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Resume.pdf
        </p>
        <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-caption border border-line rounded-md px-2 py-0.5">
          PDF · 2 pages
        </span>
      </div>

      {/* Desktop iframe preview */}
      <div className="hidden sm:block h-[520px] bg-white">
        <iframe
          src="/resume.pdf#view=FitH"
          title="CV Preview"
          className="w-full h-full bg-white border-0"
          loading="lazy"
        />
      </div>

      {/* Mobile Card / Fallback for touch devices where iframe PDF viewing fails */}
      <div className="sm:hidden p-6 bg-surface/60 flex flex-col items-center text-center space-y-4">
        <div className="h-16 w-16 rounded-2xl bg-accent-dim border border-accent/30 flex items-center justify-center text-accent">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div>
          <h4 className="text-sm font-bold text-ink">Curriculum Vitae (PDF)</h4>
          <p className="mt-1 text-xs text-muted max-w-[240px]">
            Mobile browsers restrict embedded PDF viewing. Tap below to view or download directly.
          </p>
        </div>
        <div className="w-full flex flex-col gap-2 pt-1">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center h-10 px-4 rounded-lg bg-accent text-[#0F0F0F] text-xs font-semibold hover:brightness-110 transition-all shadow-sm"
          >
            Open Document (PDF) <span className="ml-1" aria-hidden="true">↗</span>
          </a>
          <a
            href="/resume.pdf"
            download
            className="w-full inline-flex items-center justify-center h-10 px-4 rounded-lg bg-card border border-line text-ink text-xs font-medium hover:border-accent transition-colors"
          >
            Download PDF <span className="ml-1" aria-hidden="true">⤓</span>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-2.5 border-t border-line bg-surface">
        <p className="font-mono text-[10px] text-caption">Page 1 / 2 · Updated Jun 2026</p>
        <a
          href="/resume.pdf"
          download
          className="rounded-md bg-accent text-[#0F0F0F] px-3 py-1.5 text-[11px] font-semibold hover:brightness-110 transition-all"
        >
          Download ⤓
        </a>
      </div>
    </div>
  );
}

const Resume = () => {
  const apiUrl = import.meta.env.VITE_API_URL?.trim();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) {
      setStatus('error');
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!email) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!message) {
      setStatus('error');
      setErrorMessage('Please enter a message.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    if (!apiUrl) {
      setStatus('error');
      setErrorMessage('Please contact sayyid.tw@gmail.com directly.');
      return;
    }

    try {
      const response = await axios.post(
        `${apiUrl}/contact`,
        { name, email, message },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000,
        }
      );
      if (response.data?.success !== true) throw new Error('Message delivery was not confirmed.');
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      const serverMsg =
        err.response?.data?.message && Array.isArray(err.response.data.message)
          ? err.response.data.message.join(', ')
          : err.response?.data?.message || 'Unable to send your message right now.';
      setErrorMessage(serverMsg);
    }
  };

  return (
    <section id="resume" className="py-[72px] lg:py-[80px] bg-surface border-y border-line">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 items-stretch">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="rounded-[14px] bg-[#0F0F0F] border border-line p-7 flex flex-col justify-between">
            <div>
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
            </div>
            <div className="mt-6">
              <CvDocMock />
            </div>
          </motion.div>

          <motion.div id="contact" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.08 }} className="rounded-[14px] bg-accent p-7 flex flex-col scroll-mt-20">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#0F0F0F]/70">Contact</p>
              {isFormOpen && (
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="font-mono text-[11px] font-semibold text-[#0F0F0F]/80 hover:text-[#0F0F0F] px-2 py-0.5 rounded border border-[#0F0F0F]/20 hover:border-[#0F0F0F]/40 transition-colors"
                >
                  ✕ Details
                </button>
              )}
            </div>

            <h2 className="mt-3 font-head text-[30px] sm:text-[36px] font-bold tracking-tight text-[#0F0F0F] leading-[1.05]">
              Let&apos;s Work Together
            </h2>

            <AnimatePresence mode="wait">
              {!isFormOpen ? (
                <motion.div
                  key="contact-details"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col flex-1"
                >
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

                  <div className="mt-6 space-y-2.5">
                    {apiUrl ? (
                    <button
                      type="button"
                      onClick={() => setIsFormOpen(true)}
                      className="inline-flex items-center justify-center h-12 w-full rounded-[10px] bg-[#0F0F0F] text-accent text-sm font-semibold hover:brightness-150 transition-all shadow-md group cursor-pointer"
                    >
                      <span>Send Message</span>
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                    </button>
                    ) : (
                      <a href="mailto:sayyid.tw@gmail.com" className="inline-flex items-center justify-center h-12 w-full rounded-[10px] bg-[#0F0F0F] text-accent text-sm font-semibold hover:brightness-150">Email Me</a>
                    )}
                    <p className="text-center font-mono text-[11px] text-[#0F0F0F]/70">
                      {apiUrl ? 'You can also email sayyid.tw@gmail.com directly.' : 'Opens your email app: sayyid.tw@gmail.com'}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                  className="mt-6 flex flex-col flex-1"
                >
                  {status === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-[#0F0F0F] rounded-[12px] border border-line text-ink my-auto space-y-4"
                    >
                      <div className="h-14 w-14 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent">
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-ink">Message Sent!</h3>
                        <p className="mt-1.5 text-xs text-muted max-w-[280px]">
                          Thank you, I will get back to you shortly.
                        </p>
                      </div>
                      <div className="pt-2 flex flex-col sm:flex-row gap-2 w-full">
                        <button
                          type="button"
                          onClick={() => {
                            setStatus('idle');
                            setIsFormOpen(false);
                          }}
                          className="w-full inline-flex items-center justify-center h-10 px-4 rounded-lg bg-accent text-[#0F0F0F] text-xs font-semibold hover:brightness-110 transition-all"
                        >
                          Back to Contact Info
                        </button>
                        <button
                          type="button"
                          onClick={() => setStatus('idle')}
                          className="w-full inline-flex items-center justify-center h-10 px-4 rounded-lg bg-surface border border-line text-ink text-xs font-medium hover:border-accent transition-colors"
                        >
                          Send Another
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between space-y-3.5">
                      <div className="space-y-3">
                        <div>
                          <label htmlFor="contact-name" className="block font-mono text-[11px] uppercase tracking-wider text-[#0F0F0F]/80 font-medium mb-1">
                            Your Name <span className="text-[#0F0F0F]">*</span>
                          </label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            placeholder="e.g. Alex Morgan"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full h-10 px-3.5 rounded-lg bg-[#0F0F0F] border border-line text-ink text-sm placeholder:text-muted/60 focus:outline-none focus:border-white transition-colors"
                          />
                        </div>

                        <div>
                          <label htmlFor="contact-email" className="block font-mono text-[11px] uppercase tracking-wider text-[#0F0F0F]/80 font-medium mb-1">
                            Email Address <span className="text-[#0F0F0F]">*</span>
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            placeholder="alex@company.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full h-10 px-3.5 rounded-lg bg-[#0F0F0F] border border-line text-ink text-sm placeholder:text-muted/60 focus:outline-none focus:border-white transition-colors"
                          />
                        </div>

                        <div>
                          <label htmlFor="contact-message" className="block font-mono text-[11px] uppercase tracking-wider text-[#0F0F0F]/80 font-medium mb-1">
                            Message <span className="text-[#0F0F0F]">*</span>
                          </label>
                          <textarea
                            id="contact-message"
                            name="message"
                            rows={3}
                            required
                            placeholder="Tell me about your project, idea, or role..."
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded-lg bg-[#0F0F0F] border border-line text-ink text-sm placeholder:text-muted/60 focus:outline-none focus:border-white transition-colors resize-none"
                          />
                        </div>

                        {status === 'error' && (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-3 rounded-lg bg-[#0F0F0F] border border-red-500/40 text-red-400 text-xs space-y-2"
                          >
                            <p className="font-medium flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                              {errorMessage || 'Something went wrong.'}
                            </p>
                            <a
                              href={`mailto:sayyid.tw@gmail.com?subject=Inquiry from Portfolio (${encodeURIComponent(
                                formData.name || 'Visitor'
                              )})&body=${encodeURIComponent(formData.message || '')}`}
                              className="inline-flex items-center gap-1 text-[11px] font-mono text-accent hover:underline"
                            >
                              Send via Email App (sayyid.tw@gmail.com) →
                            </a>
                          </motion.div>
                        )}
                      </div>

                      <div className="pt-2 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setIsFormOpen(false)}
                          className="h-11 px-4 rounded-lg bg-[#0F0F0F]/10 text-[#0F0F0F] border border-[#0F0F0F]/20 text-xs font-semibold hover:bg-[#0F0F0F]/20 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="flex-1 inline-flex items-center justify-center h-11 px-6 rounded-lg bg-[#0F0F0F] text-accent text-sm font-semibold hover:brightness-150 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-md"
                        >
                          {status === 'submitting' ? (
                            <span className="flex items-center gap-2">
                              <svg className="animate-spin h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Sending...
                            </span>
                          ) : (
                            <>
                              Submit Message <span className="ml-1.5" aria-hidden="true">→</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
