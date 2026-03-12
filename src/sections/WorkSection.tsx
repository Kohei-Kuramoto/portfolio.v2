import Image from 'next/image';

const projects = [
  {
    id: 'habitquest',
    type: 'Personal Project',
    image: '/images/habitquest.png',
    title: 'HabitQuest',
    desc: 'A gamified habit-tracking web app where users level up a character by completing daily habits. Built end-to-end from requirements to deployment.',
    tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Supabase', 'NextAuth.js', 'OpenRouter AI', 'Vercel'],
    demo: 'https://habit-quest-jp.vercel.app',
    github: 'https://github.com/Kohei-Kuramoto/habit_quest',
    warning: null,
  },
  {
    id: 'tracquiz',
    type: 'Team Project · Sweden Exchange',
    image: '/images/tracquiz.png',
    title: 'TracQuiz',
    desc: 'An AI-powered multiplayer quiz game that generates questions from any Spotify playlist link. Built with a Swedish team of 4 during my exchange at KTH.',
    tags: ['React', 'Firebase', 'Gemini API', 'JavaScript'],
    demo: 'https://musicquiz-852ea.web.app/',
    github: null,
    warning: 'Firebase free plan has expired — the demo may be inaccessible.',
  },
  {
    id: 'melulun',
    type: 'Client Project · Team of 2',
    image: '/images/melulun.png',
    title: 'Melulun',
    desc: 'A job and housing finder built for Japanese working holiday makers in Australia. Developed with a partner and delivered to a real client.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Vercel'],
    demo: 'https://melulun.vercel.app/',
    github: null,
    warning: null,
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-28" style={{background: '#080C14'}}>
      <div className="max-w-5xl mx-auto px-8">
        <p style={{fontFamily: 'DM Mono, monospace', fontSize: '12px', letterSpacing: '3px', color: '#4F8EF7', textTransform: 'uppercase', marginBottom: '12px'}}>My Work</p>
        <h2 style={{fontFamily: '"Playfair Display", serif', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: '16px'}}>Projects I've built</h2>
        <p style={{fontSize: '16px', color: '#7A8CA3', maxWidth: '560px', lineHeight: 1.7, marginBottom: '48px'}}>
          A selection of real-world projects — from solo builds to team collaborations and client deliveries.
        </p>

        <div className="flex flex-col gap-8">
          {projects.map((p, i) => (
            <div key={p.id} className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{background: '#0D1524', border: '1px solid rgba(79,142,247,0.15)'}}>

              <div className={`relative ${i % 2 !== 0 ? 'md:order-last' : ''}`} style={{minHeight: '280px'}}>
                <Image src={p.image} alt={p.title} fill style={{objectFit: 'cover'}} />
              </div>

              <div className="p-10 flex flex-col justify-center">
                <p style={{fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '2px', color: '#4F8EF7', textTransform: 'uppercase', marginBottom: '10px'}}>{p.type}</p>
                <h3 style={{fontFamily: '"Playfair Display", serif', fontSize: '28px', fontWeight: 700, color: 'white', marginBottom: '12px'}}>{p.title}</h3>
                <p style={{fontSize: '15px', color: '#7A8CA3', lineHeight: 1.7, marginBottom: '18px'}}>{p.desc}</p>

                {p.warning && (
                  <div className="flex gap-2 p-3 rounded-lg mb-4" style={{background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', fontSize: '13px', color: '#C9A84C'}}>
                    ⚠️ {p.warning}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map(t => (
                    <span key={t} style={{padding: '4px 12px', borderRadius: '99px', fontSize: '12px', fontFamily: 'DM Mono, monospace', background: 'rgba(79,142,247,0.1)', color: '#4F8EF7', border: '1px solid rgba(79,142,247,0.2)'}}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium transition-all duration-200 hover:-translate-y-0.5" style={{background: '#4F8EF7', textDecoration: 'none', fontSize: '13px'}}>
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="15 3 21 3 21 9" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="10" y1="14" x2="21" y2="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5" style={{background: 'transparent', color: '#7A8CA3', border: '1px solid rgba(79,142,247,0.15)', textDecoration: 'none', fontSize: '13px'}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
