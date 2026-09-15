import React from 'react';

const LINKS = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

const Footer = () => {
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-[#0A0A0A] border-t border-line">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 py-7 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
        <p className="font-mono text-[12px] text-faint whitespace-nowrap">sayyid murtaja — Fullstack Developer · Tangerang</p>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 lg:mx-auto" aria-label="Footer">
          {LINKS.map((l) => (
            <button key={l} onClick={() => go(l.toLowerCase())} className="font-mono text-[12px] tracking-[0.06em] uppercase text-muted hover:text-ink transition-colors">
              {l}
            </button>
          ))}
        </nav>
        <button onClick={() => go('contact')} className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-white text-[#0F0F0F] text-[13px] font-semibold hover:bg-white/90 transition-colors w-fit shrink-0">
          Get in Touch
        </button>
      </div>
    </footer>
  );
};

export default Footer;
