import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CERTS = [
  {
    id: 'unsoed-skl',
    label: 'UNSOED S.Kel',
    badge: 'DEGREE CERTIFIED',
    tier: '01',
    date: 'Aug 2022 — Aug 2026',
    role: 'Bachelor of Marine Science (S.Kel)',
    provider: 'Universitas Jenderal Soedirman',
    place: 'Purwokerto, Indonesia',
    desc: 'Surat Keterangan Lulus (SKL) / Sarjana Kelautan (S.Kel) — Fakultas Perikanan dan Ilmu Kelautan, Program Studi Ilmu Kelautan.',
    cred: 'SK Rektor No. 6330/UN23/PK.04.01/2026 · No: B/1119/UN23.16/PK.05.00/2026',
    file: '/sertif/SKL_Sayyid_Murtaja.pdf',
    points: [
      'Graduated with Sarjana Kelautan (S.Kel) degree from Universitas Jenderal Soedirman (NIM: L1C022044).',
      'Yudisium officially passed on 20 August 2026 with specialization in marine spatial data and oceanographic research.',
      'Document legally verified by Dean of Faculty of Fisheries and Marine Sciences UNSOED.',
    ],
  },
  {
    id: 'geosoftware',
    label: 'Geosoftware',
    badge: 'WEBGIS CERTIFIED',
    tier: '02',
    date: '10 Oct 2025 — 12 Oct 2025',
    role: 'WebGIS Fundamentals with Python: From Scratch to Online Publication',
    provider: 'Geosoftware.ID',
    place: 'Indonesia · Online',
    desc: 'Certificate of Completion (12 JPL / 540 Min) — Building interactive WebGIS applications with Python, Folium, Flask backend, GeoJSON/Shapefile integration, and cloud deployment.',
    cred: 'A.C.1532/WebGIS-Py/X/2025',
    file: '/sertif/Geosoftware.pdf',
    points: [
      'Completed intensive 12 JPL (540 minutes) WebGIS engineering training certified by Geosoftware.ID.',
      'Mastered Python for spatial data, interactive Folium mapping, spatial vector layers (GeoJSON, SHP, CSV), and custom plugins.',
      'Engineered end-to-end WebGIS applications with Flask backend, dynamic data filtering, Bootstrap UI, and cloud deployment via Vercel & GitHub.',
    ],
  },
  {
    id: 'kesatria',
    label: 'Kesatria Academy',
    badge: 'FULLSTACK CERTIFIED',
    tier: '03',
    date: '14 Feb 2026 — 14 Apr 2026',
    role: 'Javascript Mastery: From Zero to Fullstack Hero',
    provider: 'Kesatria Academy & Wiratek',
    place: 'Indonesia · Remote',
    desc: 'Fullstack JavaScript Certification & Transcript — React.js frontend, Node.js/Express.js backend, REST APIs, databases, security and deployment.',
    cred: 'IB6FS126 · Final Score: 85.8 (Memuaskan / Grade B) · Attendance: 97.2%',
    file: '/sertif/sertif.pdf',
    points: [
      'Completed intensive fullstack bootcamp with "Passed / Memuaskan" final grade (Batch 6.1).',
      'Mastered Modern JavaScript (ES6+), React.js UI, Node.js & Express.js architecture, SQL database design, and cloud deployment.',
      'Includes 3-page verified official Certificate of Graduation and Complete Hard-Skills Academic Transcript.',
    ],
  },
  {
    id: 'unsoed-asprak',
    label: 'UNSOED Asprak',
    badge: 'TEACHING CERTIFIED',
    tier: '04',
    date: 'Feb 2026 — Jun 2026',
    role: 'Teaching Assistant (Asisten Praktikum) — Marine Remote Sensing',
    provider: 'Universitas Jenderal Soedirman',
    place: 'Purwokerto, Indonesia',
    desc: 'Official Certificate of Teaching Assistant for Penginderaan Jauh Kelautan (Classes A, B, and C) — Academic Year 2025/2026.',
    cred: 'UNSOED-FPIK-PJK-2026-L1C022044',
    file: '/sertif/sertif-asprak.pdf',
    points: [
      'Appointed as official Teaching Assistant for Penginderaan Jauh Kelautan (Remote Sensing) under Lead Lecturer Ratna Juita Sari.',
      'Guided students in satellite imagery processing, spatial GIS analysis, and oceanographic data modeling across multiple cohorts.',
      'Evaluated practical assignments, lab workflows, and verified digital remote sensing projects.',
    ],
  },
  {
    id: 'gim-intermediate',
    label: 'GIM 3D GIS (Inter)',
    badge: 'GIS CERTIFIED',
    tier: '05',
    date: '27 Jun 2026 — 29 Jun 2026',
    role: 'Intermediate Integrated 3D GIS & Digital Twin',
    provider: 'GIM Learning Club (PT Geo Investama Mandiri)',
    place: 'Yogyakarta, Indonesia · Remote',
    desc: 'Certificate of Training — Building Smart Digital Environments: 3D GIS fundamentals, digital twin architecture, and spatial workflow.',
    cred: 'GIM-ACD644DE',
    file: '/sertif/E-Sertifikat GIM Learning Club_Muhammad Sayyid M2.pdf',
    points: [
      'Mastered 3D GIS and Digital Twin fundamentals, sensor data layers, and comparisons with conventional 2D GIS.',
      'Learned end-to-end 3D geospatial processing workflow from acquisition to smart digital environment visualization.',
      'Completed certified evaluation conducted by PT Geo Investama Mandiri.',
    ],
  },
  {
    id: 'gim-advance',
    label: 'GIM 3D GIS (Adv II)',
    badge: 'ADVANCED GIS CERTIFIED',
    tier: '06',
    date: '11 Jul 2026 — 13 Jul 2026',
    role: 'Advance II Integrated 3D GIS & Digital Twin',
    provider: 'GIM Learning Club (PT Geo Investama Mandiri)',
    place: 'Yogyakarta, Indonesia · Remote',
    desc: 'Advanced Certificate of Training — Building Smart Digital Environments: Digital Twin Ecosystem, 3D GIS, BIM, and spatial asset integration.',
    cred: 'GIM-048D0B0A',
    file: '/sertif/E-Sertifikat GIM Learning Club_Muhammad Sayyid M.pdf',
    points: [
      'Specialized in Digital Twin architecture, BIM and 3D GIS convergence for asset lifecycle management.',
      'Built multi-dimensional spatial web visualization pipelines for smart environment monitoring.',
      'Passed all evaluation criteria and awarded Advance II Certificate of Competence.',
    ],
  },
];

const statusStyle = 'border-accent/30 bg-accent-dim text-accent';
const dotStyle = 'bg-accent';

const Experience = () => {
  const [cert, setCert] = useState(null);

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-bg">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="max-w-2xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent/60" aria-hidden="true" />
            <p className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">· Verified Progress & Certifications</p>
          </div>
          <h2 className="mt-4 font-head text-[30px] sm:text-[40px] font-bold tracking-[-0.02em] text-ink leading-[1.05]">
            Certifications & Academic Progress
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-muted">
            All milestones in this section are officially verified with certificates and academic credentials available for direct inspection.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-card border border-line p-5 sm:p-6">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted">
            Certified Milestones · {CERTS.length} Verified Credentials
          </p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[11px] text-accent font-medium">100% Verified Documents Attached</span>
          </div>
        </motion.div>

        <div className="mt-8 relative">
          <div className="absolute left-[7px] sm:left-[9px] lg:left-[220px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
          <div className="space-y-6 lg:space-y-8">
            {CERTS.map((e, i) => (
              <motion.article
                key={e.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: Math.min(i * 0.06, 0.25), duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid lg:grid-cols-[220px_1fr] gap-4 lg:gap-10 pl-8 sm:pl-10 lg:pl-0"
              >
                <span className={`absolute left-0 sm:left-[2px] lg:left-[213px] top-2 h-[15px] w-[15px] rounded-full border-[3px] border-bg ${dotStyle}`} aria-hidden="true" />
                <div className="lg:text-right lg:pr-10 lg:pt-5">
                  <span className="inline-block font-mono text-[11px] text-caption uppercase tracking-wider mb-1">Stage {e.tier}</span>
                  <p className="font-mono text-[12px] text-ink font-medium">{e.date}</p>
                  <p className="mt-1 text-[12px] text-caption">{e.place}</p>
                </div>
                <div className="rounded-2xl bg-card border border-accent/30 p-5 sm:p-7 transition-all hover:-translate-y-0.5 hover:border-accent/60">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-[17px] sm:text-lg font-bold text-ink tracking-tight">{e.provider}</h3>
                      <p className="mt-1 text-[14px] font-semibold text-accent">{e.role}</p>
                    </div>
                    <span className={`inline-flex items-center gap-1.5 w-fit text-[11px] font-mono tracking-[0.08em] uppercase rounded-md border px-2.5 py-1 shrink-0 ${statusStyle}`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                      {e.badge}
                    </span>
                  </div>
                  
                  <p className="mt-3 text-[13px] leading-6 text-muted">{e.desc}</p>

                  <ul className="mt-4 space-y-2.5">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[13.5px] sm:text-sm leading-6 text-muted">
                        <span className="mt-[9px] h-1 w-4 shrink-0 bg-accent/70 rounded-[2px]" aria-hidden="true" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <button
                        onClick={() => setCert(e)}
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent hover:brightness-125 transition-all link-underline-fade"
                      >
                        <span>View Certificate & Details</span>
                        <span aria-hidden="true">→</span>
                      </button>
                      <p className="mt-1 font-mono text-[11px] text-caption">Credential: {e.cred}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={e.file}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-surface border border-line font-mono text-[11px] text-ink hover:border-accent transition-colors"
                      >
                        <span>PDF</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                      <a
                        href={e.file}
                        download
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-accent text-[#0F0F0F] font-mono text-[11px] font-semibold hover:brightness-110 transition-all"
                      >
                        <span>Download ⤓</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Lightbox / Viewer Modal */}
      <AnimatePresence>
        {cert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-card border border-line shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between gap-4 bg-surface border-b border-line px-5 py-4 shrink-0">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent font-semibold px-2 py-0.5 rounded bg-accent-dim border border-accent/20">
                      {cert.badge}
                    </span>
                    <p className="font-mono text-[12px] text-muted truncate">{cert.provider}</p>
                  </div>
                  <h3 className="mt-1 text-[16px] sm:text-[18px] font-bold text-ink truncate">{cert.role}</h3>
                </div>
                <button
                  onClick={() => setCert(null)}
                  className="font-mono text-[12px] text-muted hover:text-ink transition-colors px-3 py-1.5 rounded-lg border border-line bg-card shrink-0"
                  aria-label="Close modal"
                >
                  ✕ CLOSE
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-5">
                {/* PDF Live Preview Frame & Mobile Fallback */}
                <div className="rounded-xl border border-line overflow-hidden bg-black/40">
                  <div className="flex items-center justify-between px-4 py-2 bg-surface/80 border-b border-line text-[11px] font-mono text-muted">
                    <span className="flex items-center gap-2 truncate">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Document Viewer: {cert.file.split('/').pop()}
                    </span>
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent hover:underline shrink-0 ml-2"
                    >
                      Open in Tab ↗
                    </a>
                  </div>

                  {/* Desktop / Tablet Iframe */}
                  <div className="hidden sm:block h-[420px] sm:h-[520px] bg-white relative">
                    <iframe
                      src={`${cert.file}#view=FitH`}
                      title={cert.role}
                      className="w-full h-full border-0"
                      loading="lazy"
                    />
                  </div>

                  {/* Mobile Preview & Actions Card */}
                  <div className="sm:hidden p-6 bg-surface/90 flex flex-col items-center text-center space-y-4">
                    <div className="h-14 w-14 rounded-2xl bg-accent-dim border border-accent/30 flex items-center justify-center text-accent">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">{cert.badge}</p>
                      <h4 className="mt-1 text-sm font-bold text-ink">{cert.role}</h4>
                      <p className="mt-1 text-xs text-muted max-w-[260px]">
                        Mobile browsers cannot reliably display embedded PDFs inside modal frames. Tap below to view or save the verified document.
                      </p>
                    </div>
                    <div className="w-full flex flex-col gap-2 pt-1">
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full inline-flex items-center justify-center h-10 px-4 rounded-lg bg-accent text-[#0F0F0F] text-xs font-semibold hover:brightness-110 transition-all shadow-sm"
                      >
                        Open Document (PDF) <span className="ml-1" aria-hidden="true">↗</span>
                      </a>
                      <a
                        href={cert.file}
                        download
                        className="w-full inline-flex items-center justify-center h-10 px-4 rounded-lg bg-card border border-line text-ink text-xs font-medium hover:border-accent transition-colors"
                      >
                        Download PDF <span className="ml-1" aria-hidden="true">⤓</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Metadata & Details */}
                <div className="rounded-xl bg-surface border border-line p-5 space-y-3">
                  <div className="grid sm:grid-cols-2 gap-3 text-[13px]">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-caption">Issuer / Organization</p>
                      <p className="mt-0.5 font-semibold text-ink">{cert.provider}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-caption">Period / Date</p>
                      <p className="mt-0.5 font-semibold text-ink">{cert.date}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-caption">Credential & Verification</p>
                    <p className="mt-0.5 font-mono text-[12px] text-accent font-medium">{cert.cred}</p>
                  </div>
                  <p className="text-[13px] leading-6 text-muted pt-2 border-t border-line">{cert.desc}</p>
                </div>

                {/* Quick switcher buttons */}
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-caption mb-2">Switch Certificate</p>
                  <div className="flex flex-wrap gap-2">
                    {CERTS.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setCert(c)}
                        className={`rounded-lg px-3.5 py-2 font-mono text-[11px] border transition-all ${
                          cert.id === c.id
                            ? 'bg-accent text-[#0F0F0F] border-accent font-semibold shadow-sm'
                            : 'bg-surface text-muted border-line hover:text-ink hover:border-accent/50'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center h-11 rounded-lg bg-accent text-[#0F0F0F] text-sm font-semibold hover:brightness-110 transition-all"
                  >
                    View Full PDF Document ↗
                  </a>
                  <a
                    href={cert.file}
                    download
                    className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-surface border border-line text-ink text-sm font-medium hover:border-accent transition-colors"
                  >
                    Download PDF ⤓
                  </a>
                  <button
                    onClick={() => setCert(null)}
                    className="inline-flex items-center justify-center h-11 px-6 rounded-lg border border-line text-muted text-sm font-medium hover:text-ink transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
