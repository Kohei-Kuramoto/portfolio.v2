'use client';

import { useEffect, useState } from 'react';
import { useLang } from '@/lib/LangContext';
import type { Lang } from '@/lib/i18n';

export default function LangModal() {
  const { setLang } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem('lang');
    if (saved) {
      setLang(saved as Lang);
    } else {
      setVisible(true);
    }
  }, []);

  const choose = (l: Lang) => {
    setLang(l);
    sessionStorage.setItem('lang', l);
    setVisible(false);
  };

  const dismiss = () => {
    sessionStorage.setItem('lang', 'en');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      onClick={dismiss}
      style={{position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(8,12,20,0.85)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{background: '#0D1524', border: '1px solid rgba(79,142,247,0.2)', borderRadius: '24px', padding: '48px 40px', maxWidth: '420px', width: '90%', textAlign: 'center', boxShadow: '0 24px 64px rgba(0,0,0,0.5)'}}
      >
        <p style={{fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '3px', color: '#4F8EF7', textTransform: 'uppercase', marginBottom: '16px'}}>Welcome</p>
        <h2 style={{fontFamily: '"Playfair Display", serif', fontSize: '28px', fontWeight: 700, color: 'white', marginBottom: '8px', lineHeight: 1.2}}>
          言語を選択してください
        </h2>
        <p style={{fontSize: '14px', color: '#7A8CA3', marginBottom: '32px'}}>
          Please select your language
        </p>

        <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          <button
            onClick={() => choose('ja')}
            style={{width: '100%', padding: '16px', borderRadius: '12px', background: '#4F8EF7', border: 'none', color: 'white', fontSize: '16px', fontWeight: 600, cursor: 'pointer'}}
          >
            🇯🇵 日本語
          </button>
          <button
            onClick={() => choose('en')}
            style={{width: '100%', padding: '16px', borderRadius: '12px', background: 'transparent', border: '1px solid rgba(79,142,247,0.3)', color: '#E8EDF5', fontSize: '16px', fontWeight: 600, cursor: 'pointer'}}
          >
            🇦🇺 English
          </button>
        </div>

        <p style={{fontSize: '12px', color: '#4F8EF7', marginTop: '20px', fontFamily: 'DM Mono, monospace', opacity: 0.7}}>
          Click outside to continue in English
        </p>
      </div>
    </div>
  );
}
