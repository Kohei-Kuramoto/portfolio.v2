'use client';

import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';

const skills = [
  'Python', 'TypeScript', 'JavaScript', 'SQL', 'Java',
  'Databricks', 'Apache Spark', 'ETL Pipeline',
  'Next.js', 'React', 'Node.js', 'Tailwind CSS', 'Prisma',
  'PostgreSQL', 'Firebase', 'MongoDB', 'Supabase',
  'OpenRouter API', 'Gemini API', 'Git', 'Vercel',
];

export default function AboutSection() {
  const { lang } = useLang();

  return (
    <section id="about" className="min-h-screen py-28" style={{background: '#0D1524'}}>
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

          <div>
            <p style={{fontFamily: 'DM Mono, monospace', fontSize: '12px', letterSpacing: '3px', color: '#4F8EF7', textTransform: 'uppercase', marginBottom: '12px'}}>{t.about.label[lang]}</p>
            <h2 style={{fontFamily: '"Playfair Display", serif', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: '24px'}}>{t.about.title[lang]}</h2>
            <p style={{fontSize: '16px', color: '#7A8CA3', lineHeight: 1.8, marginBottom: '16px'}}>{t.about.p1[lang]}</p>
            <p style={{fontSize: '16px', color: '#7A8CA3', lineHeight: 1.8, marginBottom: '16px'}}>{t.about.p2[lang]}</p>
            <p style={{fontSize: '16px', color: '#7A8CA3', lineHeight: 1.8}}>{t.about.p3[lang]}</p>

            <div className="flex flex-wrap gap-2.5 mt-8">
              {skills.map(skill => (
                <span key={skill} className="transition-all duration-200 hover:-translate-y-0.5" style={{padding: '7px 14px', background: 'rgba(79,142,247,0.08)', border: '1px solid rgba(79,142,247,0.15)', borderRadius: '8px', fontSize: '13px', fontFamily: 'DM Mono, monospace', color: '#4F8EF7', cursor: 'default'}}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { key: 'edu',      icon: '🎓', title: t.about.edu[lang],      main: 'Monash University',                      sub: 'B.IT Software Development · Expected Dec 2026' },
              { key: 'exchange', icon: '✈️', title: t.about.exchange[lang], main: 'KTH Royal Institute of Technology',       sub: 'Computer Science · Sweden · 2025' },
              { key: 'exp',      icon: '💼', title: t.about.exp[lang],      main: 'eSolutions — Data Engineer Intern',       sub: 'Jul 2025 – Dec 2025 · 6 months' },
              { key: 'location', icon: '📍', title: t.about.location[lang], main: t.about.locVal[lang],                     sub: t.about.locSub[lang] },
              { key: 'lang',     icon: '🌐', title: t.about.lang[lang],     main: t.about.langVal[lang],                    sub: '' },
            ].map(card => (
              <div key={card.key} style={{padding: '22px', borderRadius: '14px', background: 'rgba(79,142,247,0.04)', border: '1px solid rgba(79,142,247,0.1)'}}>
                <p style={{fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '2px', color: '#4F8EF7', textTransform: 'uppercase', marginBottom: '8px'}}>{card.icon} {card.title}</p>
                <p style={{fontSize: '15px', color: '#E8EDF5', marginBottom: '4px'}}>{card.main}</p>
                {card.sub && <p style={{fontSize: '13px', color: '#7A8CA3'}}>{card.sub}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
