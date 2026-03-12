export default function ExperienceSection() {
  return (
    <section id="experience" className="py-28" style={{background: '#080C14'}}>
      <div className="max-w-5xl mx-auto px-8">
        <p style={{fontFamily: 'DM Mono, monospace', fontSize: '12px', letterSpacing: '3px', color: '#4F8EF7', textTransform: 'uppercase', marginBottom: '12px'}}>Experience</p>
        <h2 style={{fontFamily: '"Playfair Display", serif', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: '16px'}}>Work & Leadership</h2>
        <p style={{fontSize: '16px', color: '#7A8CA3', maxWidth: '560px', lineHeight: 1.7, marginBottom: '48px'}}>
          Hands-on industry experience and leadership roles.
        </p>

        {/* eSolutions */}
        <div style={{padding: '32px', borderRadius: '20px', background: 'rgba(79,142,247,0.04)', border: '1px solid rgba(79,142,247,0.15)', marginBottom: '24px'}}>
          <div className="flex items-start gap-4 mb-5">
            <div className="flex items-center justify-center rounded-xl flex-shrink-0" style={{width: '52px', height: '52px', background: 'linear-gradient(135deg, #1B3A6B 0%, #2563EB 100%)', fontSize: '24px'}}>🏢</div>
            <div>
              <h3 style={{fontFamily: '"Playfair Display", serif', fontSize: '22px', color: 'white', marginBottom: '4px'}}>eSolutions</h3>
              <p style={{fontSize: '14px', color: '#7A8CA3'}}>Data Engineer Intern · Jul 2025 – Dec 2025 · 6 months</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            {['Databricks', 'Apache Spark', 'Python', 'ETL', 'SQL', 'API Integration'].map(s => (
              <span key={s} style={{padding: '4px 12px', borderRadius: '99px', fontSize: '12px', fontFamily: 'DM Mono, monospace', background: 'rgba(79,142,247,0.1)', color: '#4F8EF7', border: '1px solid rgba(79,142,247,0.2)'}}>{s}</span>
            ))}
          </div>
          <ul style={{listStyle: 'none', marginBottom: '20px'}}>
            {[
              'Designed and maintained production-grade data ingestion pipelines for Cornerstone and Databricks',
              'Ingested 7M+ rows of structured data across multiple ingestion jobs on Databricks',
              'Implemented API-based ingestion workflows using a newly introduced ingestion library',
              'Collaborated with 3 cross-functional teams to define requirements and validate schemas',
              'Investigated and resolved ingestion failures by analysing logs and API responses',
            ].map(b => (
              <li key={b} style={{fontSize: '15px', color: '#7A8CA3', padding: '6px 0 6px 20px', position: 'relative', lineHeight: 1.6}}>
                <span style={{position: 'absolute', left: 0, color: '#4F8EF7', fontSize: '12px'}}>→</span>
                {b}
              </li>
            ))}
          </ul>
          <div style={{padding: '20px', borderRadius: '12px', background: 'rgba(79,142,247,0.05)', border: '1px solid rgba(79,142,247,0.1)'}}>
            <p style={{fontSize: '11px', fontFamily: 'DM Mono, monospace', color: '#4F8EF7', letterSpacing: '1px', marginBottom: '12px'}}>KEY SKILLS GAINED</p>
            <div className="flex flex-wrap gap-2">
              {['Production Data Pipelines', 'ETL / ELT', 'Data Quality Monitoring', 'Cross-team Collaboration', 'Log Analysis & Debugging', 'API Integration'].map(s => (
                <span key={s} style={{padding: '5px 12px', background: 'rgba(79,142,247,0.08)', border: '1px solid rgba(79,142,247,0.15)', borderRadius: '6px', fontSize: '12px', fontFamily: 'DM Mono, monospace', color: '#4F8EF7'}}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership */}
        <p style={{fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '3px', color: '#4F8EF7', textTransform: 'uppercase', marginBottom: '20px', marginTop: '48px'}}>🌟 Leadership</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: '🎌', title: 'Monash Japanese Club', sub: 'Social Media Marketing · Jul 2024 – Nov 2024',
              bullets: ['Increased Instagram follower engagement by 32% through strategic post timing via Meta Suite', 'Boosted event participation by 23%+ through targeted Instagram campaigns using Canva', 'Co-developed 10+ pieces of content highlighting Japanese cultural traditions'],
            },
            {
              icon: '📚', title: 'Monash College', sub: 'Peer Mentor · Jun 2023 – Dec 2023',
              bullets: ['Improved student GPA by an average of +0.3 through customised 1-on-1 tutoring sessions', 'Increased workshop attendance by 60% by promoting seminars on campus'],
            },
          ].map(card => (
            <div key={card.title} style={{padding: '28px', borderRadius: '16px', background: 'rgba(79,142,247,0.04)', border: '1px solid rgba(79,142,247,0.1)'}}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex items-center justify-center rounded-xl flex-shrink-0" style={{width: '48px', height: '48px', background: 'linear-gradient(135deg, #1B3A6B 0%, #2563EB 100%)', fontSize: '22px'}}>{card.icon}</div>
                <div>
                  <h3 style={{fontFamily: '"Playfair Display", serif', fontSize: '18px', color: 'white', marginBottom: '4px'}}>{card.title}</h3>
                  <p style={{fontSize: '13px', color: '#7A8CA3'}}>{card.sub}</p>
                </div>
              </div>
              <ul style={{listStyle: 'none'}}>
                {card.bullets.map(b => (
                  <li key={b} style={{fontSize: '14px', color: '#7A8CA3', padding: '5px 0 5px 20px', position: 'relative', lineHeight: 1.6}}>
                    <span style={{position: 'absolute', left: 0, color: '#4F8EF7', fontSize: '12px'}}>→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
