import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const LINKS = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Resume', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const ids = ['home', 'about', 'experience', 'skills', 'projects', 'resume', 'contact'];
      const cur = ids.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 160 && r.bottom >= 160;
      });
      if (cur) setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-[60]" style={{ scaleX }} />
      <motion.header initial={{ y: -12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: 'easeOut' }} className="fixed top-0 inset-x-0 z-50">
        <div className={`transition-all duration-300 ${scrolled ? 'bg-white/85 backdrop-blur-xl border-b border-line shadow-sm' : 'bg-white border-b border-transparent'}`}>
          <nav className="mx-auto max-w-[1280px] flex items-center justify-between px-5 sm:px-6 lg:px-8 h-[72px]">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-baseline gap-1 shrink-0" aria-label="sayyid murtaja home">
              <span className="text-[19px] sm:text-[20px] tracking-tight">
                <span className="font-light text-caption">sayyid</span>
                <span className="font-bold text-ink ml-1">murtaja</span>
              </span>
              <span className="hidden lg:inline-block ml-3 pl-3 border-l border-line text-[11px] tracking-[0.18em] uppercase text-caption font-medium">
                Portfolio
              </span>
            </button>

            <div className="hidden md:flex items-center gap-6 lg:gap-7">
              {LINKS.map((label) => {
                const id = label.toLowerCase();
                const isActive = active === id;
                return (
                  <button
                    key={label}
                    onClick={() => go(id)}
                    className={`relative text-[13px] font-medium tracking-wide transition-colors ${isActive ? 'text-ink' : 'text-caption hover:text-ink'}`}
                  >
                    {label}
                    {isActive && <motion.span layoutId="nav-active" className="absolute -bottom-2 left-0 right-0 h-px bg-ink" />}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <button onClick={() => go('contact')} className="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-lg bg-ink text-white text-[13px] font-medium hover:bg-black transition-colors">
                Get in Touch
              </button>
              <button onClick={() => setOpen((v) => !v)} className="md:hidden h-10 w-10 grid place-items-center rounded-lg border border-line text-ink hover:border-ink transition-colors" aria-label="Toggle menu" aria-expanded={open}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  {open ? <path d="M6 18L18 6M6 6l12 12" /> : <><path d="M4 8h14" /><path d="M4 14h14" /><path d="M4 20h14" /></>}
                </svg>
              </button>
            </div>
          </nav>
        </div>

        <AnimatePresence>
          {open && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 top-[72px] bg-ink/20 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)} />
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="md:hidden absolute top-[72px] inset-x-3 rounded-2xl bg-white border border-line shadow-elevated overflow-hidden">
                <div className="p-2">
                  {LINKS.map((l) => (
                    <button key={l} onClick={() => go(l.toLowerCase())} className={`w-full text-left rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${active === l.toLowerCase() ? 'bg-ink text-white' : 'text-muted hover:text-ink hover:bg-surface'}`}>
                      {l}
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;
