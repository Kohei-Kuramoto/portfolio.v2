'use client';

import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';

export default function ContactSection() {
  const { lang } = useLang();

  return (
    <>
      <section id="contact" className="py-28" style={{background: '#0D1524'}}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p style={{fontFamily: 'DM Mono, monospace', fontSize: '12px', letterSpacing: '3px', color: '#4F8EF7', textTransform: 'uppercase', marginBottom: '12px'}}>{t.contact.label[lang]}</p>
            <h2 style={{fontFamily: '"Playfair Display", serif', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: '16px'}}>{t.contact.title[lang]}</h2>
            <p style={{fontSize: '16px', color: '#7A8CA3', lineHeight: 1.7, marginBottom: '36px'}}>{t.contact.subtitle[lang]}</p>

            <a href="mailto:kohey0428@gmail.com" className="inline-flex items-center gap-3 px-9 py-4 rounded-xl text-white font-medium transition-all duration-200 hover:-translate-y-1" style={{background: '#4F8EF7', textDecoration: 'none', fontSize: '17px', boxShadow: '0 4px 24px rgba(79,142,247,0.2)'}}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              kohey0428@gmail.com
            </a>

            <div className="flex gap-4 justify-center mt-6 flex-wrap">
              <a href="https://github.com/Kohei-Kuramoto" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5" style={{border: '1px solid rgba(79,142,247,0.15)', color: '#7A8CA3', textDecoration: 'none', fontSize: '14px'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/kohei-kuramoto" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5" style={{border: '1px solid rgba(79,142,247,0.15)', color: '#7A8CA3', textDecoration: 'none', fontSize: '14px'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5" style={{border: '1px solid rgba(79,142,247,0.15)', color: '#7A8CA3', textDecoration: 'none', fontSize: '14px'}}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {t.contact.resume[lang]}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center" style={{borderTop: '1px solid rgba(79,142,247,0.1)', background: '#080C14'}}>
        <p style={{fontSize: '13px', color: '#7A8CA3', fontFamily: 'DM Mono, monospace'}}>
          {t.contact.footer[lang]}
        </p>
      </footer>
    </>
  );
}
