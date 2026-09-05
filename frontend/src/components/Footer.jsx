import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <button onClick={() => go('home')} className="flex items-baseline gap-1">
              <span className="text-[20px] font-light text-white/60">sayyid</span>
              <span className="text-[20px] font-bold text-white ml-1">murtaja</span>
            </button>
            <p className="mt-3 text-sm leading-6 text-white/50 max-w-[320px]">Fullstack Developer Intern — web development & AI automation. Based in Tangerang, working remote-ready.</p>
          </div>
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-white/40">Sitemap</p>
              <ul className="mt-3 space-y-2">
                {['About', 'Experience', 'Skills', 'Projects', 'Resume', 'Contact'].map((l) => (
                  <li key={l}><button onClick={() => go(l.toLowerCase())} className="text-white/60 hover:text-white transition-colors">{l}</button></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-white/40">Elsewhere</p>
              <ul className="mt-3 space-y-2">
                <li><a href="https://www.linkedin.com/in/sayyidmurtaja" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="https://www.teknosea.my.id" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">Teknosea</a></li>
                <li><a href="mailto:sayyid.tw@gmail.com" className="text-white/60 hover:text-white transition-colors">Email</a></li>
                <li><a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">Resume PDF</a></li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-3 md:text-right">
            <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-white/40">Contact</p>
            <p className="mt-3 text-sm text-white/70">sayyid.tw@gmail.com</p>
            <p className="text-sm text-white/70">0882-0034-31868</p>
            <button onClick={() => go('contact')} className="mt-4 inline-flex h-10 px-6 rounded-lg bg-white text-ink text-[13px] font-semibold hover:bg-white/90 transition-colors">Get in Touch</button>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">© {year} Muhammad Sayyid Murtaja. All rights reserved.</p>
          <p className="text-xs text-white/30">Tangerang, Indonesia · Built with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
