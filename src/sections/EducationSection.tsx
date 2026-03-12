export default function EducationSection() {
  return (
    <section id="education" className="py-28" style={{background: '#0D1524'}}>
      <div className="max-w-5xl mx-auto px-8">
        <p style={{fontFamily: 'DM Mono, monospace', fontSize: '12px', letterSpacing: '3px', color: '#4F8EF7', textTransform: 'uppercase', marginBottom: '12px'}}>Education</p>
        <h2 style={{fontFamily: '"Playfair Display", serif', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: '16px'}}>Academic Journey</h2>
        <p style={{fontSize: '16px', color: '#7A8CA3', maxWidth: '560px', lineHeight: 1.7, marginBottom: '48px'}}>
          My academic path across Australia and Sweden.
        </p>

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
              <p style={{fontSize: '14px', color: '#7A8CA3', marginBottom: '12px'}}>Bachelor's, Information Technology · 4th Year · Australia</p>
              <span style={{display: 'inline-block', padding: '4px 12px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '99px', fontSize: '12px', color: '#22c55e', marginBottom: '8px'}}>🎓 Currently Enrolled</span>
            </div>
          </div>

          {/* KTH */}
          <div style={{position: 'relative', marginBottom: '48px'}}>
            <div style={{position: 'absolute', left: '-32px', top: '6px', width: '10px', height: '10px', borderRadius: '50%', background: '#4F8EF7', border: '2px solid #0D1524', boxShadow: '0 0 0 3px rgba(79,142,247,0.2)'}} />
            <div style={{padding: '28px', borderRadius: '16px', background: 'rgba(79,142,247,0.04)', border: '1px solid rgba(79,142,247,0.1)'}}>
              <p style={{fontFamily: 'DM Mono, monospace', fontSize: '11px', color: '#4F8EF7', letterSpacing: '1px', marginBottom: '8px'}}>Jan 2025 – May 2025</p>
              <h3 style={{fontFamily: '"Playfair Display", serif', fontSize: '22px', fontWeight: 700, color: 'white', marginBottom: '4px'}}>KTH Royal Institute of Technology</h3>
              <p style={{fontSize: '14px', color: '#7A8CA3', marginBottom: '12px'}}>Bachelor's, Computer Science · Sweden</p>
              <span style={{display: 'inline-block', padding: '4px 12px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '99px', fontSize: '12px', color: '#C9A84C', marginBottom: '16px'}}>✈️ Exchange Program</span>
              <ul style={{listStyle: 'none'}}>
                {[['Software Engineering Fundamentals', '100%'], ['Interaction Programming & Dynamic Web', ''], ['Haptics, Tactile & Tangible Interaction', '']].map(([name, score]) => (
                  <li key={name} style={{fontSize: '14px', color: '#7A8CA3', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between'}}>
                    <span>{name}</span>
                    {score && <span style={{fontFamily: 'DM Mono, monospace', fontSize: '13px', color: '#4F8EF7'}}>{score}</span>}
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
              <p style={{fontSize: '14px', color: '#7A8CA3', marginBottom: '12px'}}>Bachelor's, Information Technology · 2nd Year · Australia</p>
              <span style={{display: 'inline-block', padding: '4px 12px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '99px', fontSize: '12px', color: '#C9A84C', marginBottom: '16px'}}>🎌 Japanese Club — Social Media Marketing</span>
              <ul style={{listStyle: 'none'}}>
                {[['Web Fundamentals', '76%'], ['Programming Fundamentals in Java', '85%'], ['Mobile Application Development', '74%'], ['Databases', ''], ['System Development', ''], ['IT Project Management', ''], ['Web Database Interface', '73%']].map(([name, score]) => (
                  <li key={name} style={{fontSize: '14px', color: '#7A8CA3', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between'}}>
                    <span>{name}</span>
                    {score && <span style={{fontFamily: 'DM Mono, monospace', fontSize: '13px', color: '#4F8EF7'}}>{score}</span>}
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
              <p style={{fontSize: '14px', color: '#7A8CA3', marginBottom: '12px'}}>Diploma of IT · Australia</p>
              <span style={{display: 'inline-block', padding: '4px 12px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '99px', fontSize: '12px', color: '#C9A84C', marginBottom: '16px'}}>🏆 2023 Academic Achievement Award · Peer Mentor</span>
              <ul style={{listStyle: 'none'}}>
                {[['Engineering Practices', '81%'], ['Functions and their Application', ''], ['Intro to Computer Systems & Security', '79%'], ['Fundamentals of C++', '71%'], ['Managing People & Organisations', '75%'], ['Business Statistics', ''], ['Intro to Algorithms & Programming ⭐', 'Award'], ['Foundation of 3D', '85%']].map(([name, score]) => (
                  <li key={name} style={{fontSize: '14px', color: '#7A8CA3', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between'}}>
                    <span>{name}</span>
                    {score && <span style={{fontFamily: 'DM Mono, monospace', fontSize: '13px', color: score === 'Award' ? '#C9A84C' : '#4F8EF7'}}>{score}</span>}
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
