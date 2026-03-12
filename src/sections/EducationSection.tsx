'use client';

import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';

export default function EducationSection() {
  const { lang } = useLang();

  return (
    <section id="education" className="py-28" style={{background: '#0D1524'}}>
      <div className="max-w-5xl mx-auto px-8">
        <p style={{fontFamily: 'DM Mono, monospace', fontSize: '12px', letterSpacing: '3px', color: '#4F8EF7', textTransform: 'uppercase', marginBottom: '12px'}}>{t.education.label[lang]}</p>
        <h2 style={{fontFamily: '"Playfair Display", serif', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: '16px'}}>{t.education.title[lang]}</h2>
        <p style={{fontSize: '16px', color: '#7A8CA3', maxWidth: '560px', lineHeight: 1.7, marginBottom: '48px'}}>{t.education.subtitle[lang]}</p>

        <div style={{position: 'relative', paddingLeft: '28px'}}>
          <div style={{position: 'absolute', left: 0, top: '8px', bottom: 0, width: '1px', background: 'linear-gradient(to bottom, #4F8EF7, transparent)'}} />

          {/* Monash University 4th Year（現在） */}
          <div style={{position: 'relative', marginBottom: '48px'}}>
            <div style={{position: 'absolute', left: '-32px', top: '6px', width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', border: '2px solid #0D1524', boxShadow: '0 0 0 3px rgba(34,197,94,0.2)'}} />
            <div style={{padding: '28px', borderRadius: '16px', background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.2)'}}>
              <div className="flex items-center gap-2 mb-2">
                <span style={{width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block'}} />
                <p style={{fontFamily: 'DM Mono, monospace', fontSize: '11px', color: '#22c55e', letterSpacing: '1px'}}>Mar 2026 – Present</p>
              </div>
              <h3 style={{fontFamily: '"Playfair Display", serif', fontSize: '22px', fontWeight: 700, color: 'white', marginBottom: '4px'}}>Monash University</h3>
              <p style={{fontSize: '14px', color: '#7A8CA3', marginBottom: '12px'}}>{lang === 'en' ? "Bachelor's, Information Technology · 4th Year · Australia" : '情報技術学部・4年生・オーストラリア'}</p>
              <span style={{display: 'inline-block', padding: '4px 12px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '99px', fontSize: '12px', color: '#22c55e'}}>🎓 {t.education.current[lang]}</span>
            </div>
          </div>

          {/* KTH */}
          <div style={{position: 'relative', marginBottom: '48px'}}>
            <div style={{position: 'absolute', left: '-32px', top: '6px', width: '10px', height: '10px', borderRadius: '50%', background: '#4F8EF7', border: '2px solid #0D1524', boxShadow: '0 0 0 3px rgba(79,142,247,0.2)'}} />
            <div style={{padding: '28px', borderRadius: '16px', background: 'rgba(79,142,247,0.04)', border: '1px solid rgba(79,142,247,0.1)'}}>
              <p style={{fontFamily: 'DM Mono, monospace', fontSize: '11px', color: '#4F8EF7', letterSpacing: '1px', marginBottom: '8px'}}>Jan 2025 – May 2025</p>
              <h3 style={{fontFamily: '"Playfair Display", serif', fontSize: '22px', fontWeight: 700, color: 'white', marginBottom: '4px'}}>KTH Royal Institute of Technology</h3>
              <p style={{fontSize: '14px', color: '#7A8CA3', marginBottom: '12px'}}>{lang === 'en' ? "Bachelor's, Computer Science · Sweden" : 'コンピュータサイエンス学部・スウェーデン'}</p>
              <span style={{display: 'inline-block', padding: '4px 12px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '99px', fontSize: '12px', color: '#C9A84C', marginBottom: '16px'}}>✈️ {t.education.exchange[lang]}</span>
              <ul style={{listStyle: 'none'}}>
                {[
                  { en: 'Software Engineering Fundamentals', ja: 'ソフトウェアエンジニアリング基礎', score: '100%' },
                  { en: 'Interaction Programming & Dynamic Web', ja: 'インタラクションプログラミング', score: '' },
                  { en: 'Haptics, Tactile & Tangible Interaction', ja: '触覚・タンジブルインタラクション', score: '' },
                ].map((item) => (
                  <li key={item.en} style={{fontSize: '14px', color: '#7A8CA3', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between'}}>
                    <span>{item[lang]}</span>
                    {item.score && <span style={{fontFamily: 'DM Mono, monospace', fontSize: '13px', color: '#4F8EF7'}}>{item.score}</span>}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {['JavaScript', 'Next.js', 'Python'].map(s => (
                  <span key={s} style={{padding: '4px 12px', background: 'rgba(79,142,247,0.08)', border: '1px solid rgba(79,142,247,0.15)', borderRadius: '6px', fontSize: '12px', fontFamily: 'DM Mono, monospace', color: '#4F8EF7'}}>{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Monash University 2nd Year */}
          <div style={{position: 'relative', marginBottom: '48px'}}>
            <div style={{position: 'absolute', left: '-32px', top: '6px', width: '10px', height: '10px', borderRadius: '50%', background: '#4F8EF7', border: '2px solid #0D1524', boxShadow: '0 0 0 3px rgba(79,142,247,0.2)'}} />
            <div style={{padding: '28px', borderRadius: '16px', background: 'rgba(79,142,247,0.04)', border: '1px solid rgba(79,142,247,0.1)'}}>
              <p style={{fontFamily: 'DM Mono, monospace', fontSize: '11px', color: '#4F8EF7', letterSpacing: '1px', marginBottom: '8px'}}>Feb 2024 – Dec 2024</p>
              <h3 style={{fontFamily: '"Playfair Display", serif', fontSize: '22px', fontWeight: 700, color: 'white', marginBottom: '4px'}}>Monash University</h3>
              <p style={{fontSize: '14px', color: '#7A8CA3', marginBottom: '12px'}}>{lang === 'en' ? "Bachelor's, Information Technology · 2nd Year · Australia" : '情報技術学部・2年生・オーストラリア'}</p>
              <span style={{display: 'inline-block', padding: '4px 12px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '99px', fontSize: '12px', color: '#C9A84C', marginBottom: '16px'}}>🎌 {lang === 'en' ? 'Japanese Club — Social Media Marketing' : '日本語クラブ — SNSマーケティング'}</span>
              <ul style={{listStyle: 'none'}}>
                {[
                  { en: 'Web Fundamentals', ja: 'Web基礎', score: '76%' },
                  { en: 'Programming Fundamentals in Java', ja: 'Javaプログラミング基礎', score: '85%' },
                  { en: 'Mobile Application Development', ja: 'モバイルアプリ開発', score: '74%' },
                  { en: 'Databases', ja: 'データベース', score: '' },
                  { en: 'System Development', ja: 'システム開発', score: '' },
                  { en: 'IT Project Management', ja: 'ITプロジェクトマネジメント', score: '' },
                  { en: 'Web Database Interface', ja: 'WebデータベースI/F', score: '73%' },
                ].map((item) => (
                  <li key={item.en} style={{fontSize: '14px', color: '#7A8CA3', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between'}}>
                    <span>{item[lang]}</span>
                    {item.score && <span style={{fontFamily: 'DM Mono, monospace', fontSize: '13px', color: '#4F8EF7'}}>{item.score}</span>}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {['JavaScript', 'SQL', 'MongoDB', 'Firebase', 'Java'].map(s => (
                  <span key={s} style={{padding: '4px 12px', background: 'rgba(79,142,247,0.08)', border: '1px solid rgba(79,142,247,0.15)', borderRadius: '6px', fontSize: '12px', fontFamily: 'DM Mono, monospace', color: '#4F8EF7'}}>{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Monash College */}
          <div style={{position: 'relative', marginBottom: '48px'}}>
            <div style={{position: 'absolute', left: '-32px', top: '6px', width: '10px', height: '10px', borderRadius: '50%', background: '#4F8EF7', border: '2px solid #0D1524', boxShadow: '0 0 0 3px rgba(79,142,247,0.2)'}} />
            <div style={{padding: '28px', borderRadius: '16px', background: 'rgba(79,142,247,0.04)', border: '1px solid rgba(79,142,247,0.1)'}}>
              <p style={{fontFamily: 'DM Mono, monospace', fontSize: '11px', color: '#4F8EF7', letterSpacing: '1px', marginBottom: '8px'}}>Jun 2023 – Dec 2023</p>
              <h3 style={{fontFamily: '"Playfair Display", serif', fontSize: '22px', fontWeight: 700, color: 'white', marginBottom: '4px'}}>Monash College</h3>
              <p style={{fontSize: '14px', color: '#7A8CA3', marginBottom: '12px'}}>{lang === 'en' ? 'Diploma of IT · Australia' : '情報技術ディプロマ・オーストラリア'}</p>
              <span style={{display: 'inline-block', padding: '4px 12px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '99px', fontSize: '12px', color: '#C9A84C', marginBottom: '16px'}}>🏆 {t.education.award[lang]}</span>
              <ul style={{listStyle: 'none'}}>
                {[
                  { en: 'Engineering Practices', ja: 'エンジニアリング実践', score: '81%' },
                  { en: 'Functions and their Application', ja: '関数とその応用', score: '' },
                  { en: 'Intro to Computer Systems & Security', ja: 'コンピュータシステム・セキュリティ入門', score: '79%' },
                  { en: 'Fundamentals of C++', ja: 'C++基礎', score: '71%' },
                  { en: 'Managing People & Organisations', ja: '組織と人材管理', score: '75%' },
                  { en: 'Business Statistics', ja: 'ビジネス統計', score: '' },
                  { en: 'Intro to Algorithms & Programming ⭐', ja: 'アルゴリズムとプログラミング入門 ⭐', score: lang === 'en' ? 'Award' : '受賞' },
                  { en: 'Foundation of 3D', ja: '3D基礎', score: '85%' },
                ].map((item) => (
                  <li key={item.en} style={{fontSize: '14px', color: '#7A8CA3', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between'}}>
                    <span>{item[lang]}</span>
                    {item.score && <span style={{fontFamily: 'DM Mono, monospace', fontSize: '13px', color: item.score === 'Award' || item.score === '受賞' ? '#C9A84C' : '#4F8EF7'}}>{item.score}</span>}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {['C++', 'Python', 'Algorithms'].map(s => (
                  <span key={s} style={{padding: '4px 12px', background: 'rgba(79,142,247,0.08)', border: '1px solid rgba(79,142,247,0.15)', borderRadius: '6px', fontSize: '12px', fontFamily: 'DM Mono, monospace', color: '#4F8EF7'}}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
