import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });
    try {
      const api = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      await axios.post(`${api}/contact`, formData);
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus({ submitting: false, submitted: false, error: null }), 5000);
    } catch {
      setStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-ink/60" aria-hidden="true" />
              <p className="text-[11px] font-semibold tracking-[0.22em] text-ink uppercase">Contact</p>
            </div>
            <h2 className="mt-4 text-[32px] sm:text-[40px] font-bold tracking-[-0.02em] text-ink leading-[1.05]">Let&apos;s work together.</h2>
            <p className="mt-3 text-[15px] leading-7 text-muted max-w-[420px]">Open to internships, freelance and collaborations, especially fullstack web and AI automation builds.</p>
            <div className="mt-8 space-y-0 border-t border-line max-w-[420px]">
              {[
                { k: 'Email', v: 'sayyid.tw@gmail.com', href: 'mailto:sayyid.tw@gmail.com' },
                { k: 'Phone', v: '0882-0034-31868', href: 'tel:+62882003431868' },
                { k: 'LinkedIn', v: 'linkedin.com/in/sayyidmurtaja', href: 'https://www.linkedin.com/in/sayyidmurtaja' },
                { k: 'Website', v: 'teknosea.my.id', href: 'https://www.teknosea.my.id' },
                { k: 'Location', v: 'Tangerang, Banten, remote ready' },
              ].map((row) => (
                <div key={row.k} className="flex items-baseline justify-between gap-4 py-3.5 border-b border-line text-sm">
                  <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-caption shrink-0">{row.k}</span>
                  {row.href ? (
                    <a href={row.href} target={row.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-ink font-medium link-underline-fade text-right truncate">{row.v}</a>
                  ) : (
                    <span className="text-ink font-medium text-right">{row.v}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08, duration: 0.55 }} onSubmit={handleSubmit} className="lg:col-span-7 text-left bg-surface border border-line rounded-2xl p-5 sm:p-8 shadow-soft h-fit">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block text-xs font-semibold text-ink">
                Name
                <input name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm placeholder:text-caption focus:border-ink focus:ring-1 focus:ring-ink focus:outline-none transition" />
              </label>
              <label className="block text-xs font-semibold text-ink">
                Email
                <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@email.com" className="mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm placeholder:text-caption focus:border-ink focus:ring-1 focus:ring-ink focus:outline-none transition" />
              </label>
            </div>
            <label className="block mt-4 text-xs font-semibold text-ink">
              Message
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="Tell me about your project, timeline and goals..." className="mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm placeholder:text-caption focus:border-ink focus:ring-1 focus:ring-ink focus:outline-none resize-none transition" />
            </label>
            <button type="submit" disabled={status.submitting} className="mt-6 w-full h-12 rounded-lg bg-ink text-white text-sm font-medium hover:bg-black transition-colors disabled:opacity-60">
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
            {status.submitted && <p className="mt-3 text-center text-sm text-emerald-600">Message sent. Thank you, I&apos;ll reply soon.</p>}
            {status.error && <p className="mt-3 text-center text-sm text-red-600">{status.error}</p>}
            <p className="mt-4 text-center text-xs text-caption">Prefer email? <a href="mailto:sayyid.tw@gmail.com" className="text-ink font-medium link-underline-fade">sayyid.tw@gmail.com</a></p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
