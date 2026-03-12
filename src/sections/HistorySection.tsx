export default function HistorySection() {
  return (
    <section id="history" className="py-28" style={{ background: "#0D1524" }}>
      <div className="max-w-5xl mx-auto px-8">
        <p
          style={{
            fontFamily: "DM Mono, monospace",
            fontSize: "12px",
            letterSpacing: "3px",
            color: "#4F8EF7",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          History
        </p>
        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.15,
            marginBottom: "16px",
          }}
        >
          Education & Experience
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#7A8CA3",
            maxWidth: "560px",
            lineHeight: 1.7,
            marginBottom: "48px",
          }}
        >
          My academic journey across three countries and hands-on industry
          experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p
              style={{
                fontFamily: "DM Mono, monospace",
                fontSize: "11px",
                letterSpacing: "3px",
                color: "#4F8EF7",
                textTransform: "uppercase",
                marginBottom: "28px",
              }}
            >
              🎓 Education
            </p>
            <div style={{ position: "relative", paddingLeft: "28px" }}>
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: "8px",
                  bottom: 0,
                  width: "1px",
                  background:
                    "linear-gradient(to bottom, #4F8EF7, transparent)",
                }}
              />

              <div style={{ position: "relative", marginBottom: "40px" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "-32px",
                    top: "6px",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#4F8EF7",
                    border: "2px solid #0D1524",
                    boxShadow: "0 0 0 3px rgba(79,142,247,0.2)",
                  }}
                />
                <p
                  style={{
                    fontFamily: "DM Mono, monospace",
                    fontSize: "11px",
                    color: "#4F8EF7",
                    letterSpacing: "1px",
                    marginBottom: "6px",
                  }}
                >
                  Jan 2025 – May 2025
                </p>
                <h3
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "white",
                    marginBottom: "4px",
                  }}
                >
                  KTH Royal Institute of Technology
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#7A8CA3",
                    marginBottom: "8px",
                  }}
                >
                  Bachelor's, Computer Science · Sweden
                </p>
                <span
                  style={{
                    display: "inline-block",
                    padding: "3px 10px",
                    background: "rgba(201,168,76,0.1)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: "99px",
                    fontSize: "11px",
                    color: "#C9A84C",
                    marginBottom: "10px",
                  }}
                >
                  ✈️ Exchange Program
                </span>
                <ul style={{ listStyle: "none", marginTop: "8px" }}>
                  {[
                    ["Software Engineering Fundamentals", "100%"],
                    ["Interaction Programming & Dynamic Web", ""],
                    ["Haptics, Tactile & Tangible Interaction", ""],
                  ].map(([name, score]) => (
                    <li
                      key={name}
                      style={{
                        fontSize: "13px",
                        color: "#7A8CA3",
                        padding: "4px 0",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>{name}</span>
                      {score && (
                        <span
                          style={{
                            fontFamily: "DM Mono, monospace",
                            fontSize: "12px",
                            color: "#4F8EF7",
                          }}
                        >
                          {score}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["JavaScript", "Next.js", "Python"].map((s) => (
                    <span
                      key={s}
                      style={{
                        padding: "3px 10px",
                        background: "rgba(79,142,247,0.08)",
                        border: "1px solid rgba(79,142,247,0.15)",
                        borderRadius: "6px",
                        fontSize: "11px",
                        fontFamily: "DM Mono, monospace",
                        color: "#4F8EF7",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ position: "relative", marginBottom: "40px" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "-32px",
                    top: "6px",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#4F8EF7",
                    border: "2px solid #0D1524",
                    boxShadow: "0 0 0 3px rgba(79,142,247,0.2)",
                  }}
                />
                <p
                  style={{
                    fontFamily: "DM Mono, monospace",
                    fontSize: "11px",
                    color: "#4F8EF7",
                    letterSpacing: "1px",
                    marginBottom: "6px",
                  }}
                >
                  Feb 2024 – Dec 2026
                </p>
                <h3
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "white",
                    marginBottom: "4px",
                  }}
                >
                  Monash University
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#7A8CA3",
                    marginBottom: "8px",
                  }}
                >
                  Bachelor's, Information Technology · Australia
                </p>
                <span
                  style={{
                    display: "inline-block",
                    padding: "3px 10px",
                    background: "rgba(201,168,76,0.1)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: "99px",
                    fontSize: "11px",
                    color: "#C9A84C",
                    marginBottom: "10px",
                  }}
                >
                  🎌 Japanese Club — Social Media Marketing
                </span>
                <ul style={{ listStyle: "none", marginTop: "8px" }}>
                  {[
                    ["Web Fundamentals", "76%"],
                    ["Programming Fundamentals in Java", "85%"],
                    ["Mobile Application Development", "74%"],
                    ["Databases", ""],
                    ["System Development", ""],
                    ["IT Project Management", ""],
                    ["Web Database Interface", "73%"],
                  ].map(([name, score]) => (
                    <li
                      key={name}
                      style={{
                        fontSize: "13px",
                        color: "#7A8CA3",
                        padding: "4px 0",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>{name}</span>
                      {score && (
                        <span
                          style={{
                            fontFamily: "DM Mono, monospace",
                            fontSize: "12px",
                            color: "#4F8EF7",
                          }}
                        >
                          {score}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["JavaScript", "SQL", "MongoDB", "Firebase", "Java"].map(
                    (s) => (
                      <span
                        key={s}
                        style={{
                          padding: "3px 10px",
                          background: "rgba(79,142,247,0.08)",
                          border: "1px solid rgba(79,142,247,0.15)",
                          borderRadius: "6px",
                          fontSize: "11px",
                          fontFamily: "DM Mono, monospace",
                          color: "#4F8EF7",
                        }}
                      >
                        {s}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div style={{ position: "relative", marginBottom: "40px" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "-32px",
                    top: "6px",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#4F8EF7",
                    border: "2px solid #0D1524",
                    boxShadow: "0 0 0 3px rgba(79,142,247,0.2)",
                  }}
                />
                <p
                  style={{
                    fontFamily: "DM Mono, monospace",
                    fontSize: "11px",
                    color: "#4F8EF7",
                    letterSpacing: "1px",
                    marginBottom: "6px",
                  }}
                >
                  Jun 2023 – Dec 2023
                </p>
                <h3
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "white",
                    marginBottom: "4px",
                  }}
                >
                  Monash College
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#7A8CA3",
                    marginBottom: "8px",
                  }}
                >
                  Diploma of IT · Australia
                </p>
                <span
                  style={{
                    display: "inline-block",
                    padding: "3px 10px",
                    background: "rgba(201,168,76,0.1)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: "99px",
                    fontSize: "11px",
                    color: "#C9A84C",
                    marginBottom: "10px",
                  }}
                >
                  🏆 2023 Academic Achievement Award · Peer Mentor
                </span>
                <ul style={{ listStyle: "none", marginTop: "8px" }}>
                  {[
                    ["Engineering Practices", "81%"],
                    ["Functions and their Application", ""],
                    ["Intro to Computer Systems & Security", "79%"],
                    ["Fundamentals of C++", "71%"],
                    ["Managing People & Organisations", "75%"],
                    ["Business Statistics", ""],
                    ["Intro to Algorithms & Programming ⭐", "Award"],
                    ["Foundation of 3D", "85%"],
                  ].map(([name, score]) => (
                    <li
                      key={name}
                      style={{
                        fontSize: "13px",
                        color: "#7A8CA3",
                        padding: "4px 0",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>{name}</span>
                      {score && (
                        <span
                          style={{
                            fontFamily: "DM Mono, monospace",
                            fontSize: "12px",
                            color: score === "Award" ? "#C9A84C" : "#4F8EF7",
                          }}
                        >
                          {score}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["C++", "Python", "Algorithms"].map((s) => (
                    <span
                      key={s}
                      style={{
                        padding: "3px 10px",
                        background: "rgba(79,142,247,0.08)",
                        border: "1px solid rgba(79,142,247,0.15)",
                        borderRadius: "6px",
                        fontSize: "11px",
                        fontFamily: "DM Mono, monospace",
                        color: "#4F8EF7",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <p
              style={{
                fontFamily: "DM Mono, monospace",
                fontSize: "11px",
                letterSpacing: "3px",
                color: "#4F8EF7",
                textTransform: "uppercase",
                marginBottom: "28px",
              }}
            >
              💼 Work Experience
            </p>

            <div
              style={{
                padding: "28px",
                borderRadius: "16px",
                background: "rgba(79,142,247,0.04)",
                border: "1px solid rgba(79,142,247,0.15)",
                marginBottom: "20px",
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{
                    width: "48px",
                    height: "48px",
                    background:
                      "linear-gradient(135deg, #1B3A6B 0%, #2563EB 100%)",
                    fontSize: "22px",
                  }}
                >
                  🏢
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: "18px",
                      color: "white",
                      marginBottom: "4px",
                    }}
                  >
                    eSolutions
                  </h3>
                  <p style={{ fontSize: "13px", color: "#7A8CA3" }}>
                    Data Engineer Intern · Jul 2025 – Dec 2025 (6 months)
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {[
                  "Databricks",
                  "Apache Spark",
                  "Python",
                  "ETL",
                  "SQL",
                  "API Integration",
                ].map((s) => (
                  <span
                    key={s}
                    style={{
                      padding: "4px 12px",
                      borderRadius: "99px",
                      fontSize: "12px",
                      fontFamily: "DM Mono, monospace",
                      background: "rgba(79,142,247,0.1)",
                      color: "#4F8EF7",
                      border: "1px solid rgba(79,142,247,0.2)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <ul style={{ listStyle: "none" }}>
                {[
                  "Designed and maintained production-grade data ingestion pipelines for Cornerstone and Databricks",
                  "Ingested 7M+ rows of structured data across multiple ingestion jobs on Databricks",
                  "Implemented API-based ingestion workflows using a newly introduced ingestion library",
                  "Collaborated with 3 cross-functional teams to define requirements and validate schemas",
                  "Investigated and resolved ingestion failures by analysing logs and API responses",
                ].map((b) => (
                  <li
                    key={b}
                    style={{
                      fontSize: "14px",
                      color: "#7A8CA3",
                      padding: "5px 0 5px 16px",
                      position: "relative",
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "#4F8EF7",
                        fontSize: "12px",
                      }}
                    >
                      →
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div
                style={{
                  marginTop: "20px",
                  padding: "16px",
                  borderRadius: "10px",
                  background: "rgba(79,142,247,0.05)",
                  border: "1px solid rgba(79,142,247,0.1)",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    fontFamily: "DM Mono, monospace",
                    color: "#4F8EF7",
                    letterSpacing: "1px",
                    marginBottom: "10px",
                  }}
                >
                  KEY SKILLS GAINED
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Production Data Pipelines",
                    "ETL / ELT",
                    "Data Quality Monitoring",
                    "Cross-team Collaboration",
                    "Log Analysis & Debugging",
                    "API Integration",
                  ].map((s) => (
                    <span
                      key={s}
                      style={{
                        padding: "5px 12px",
                        background: "rgba(79,142,247,0.08)",
                        border: "1px solid rgba(79,142,247,0.15)",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontFamily: "DM Mono, monospace",
                        color: "#4F8EF7",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p
              style={{
                fontFamily: "DM Mono, monospace",
                fontSize: "11px",
                letterSpacing: "3px",
                color: "#4F8EF7",
                textTransform: "uppercase",
                marginBottom: "20px",
                marginTop: "40px",
              }}
            >
              🌟 Leadership
            </p>

            {[
              {
                icon: "🎌",
                title: "Monash Japanese Club",
                sub: "Social Media Marketing · Jul 2024 – Nov 2024",
                bullets: [
                  "Increased Instagram follower engagement by 32% through strategic post timing via Meta Suite",
                  "Boosted event participation by 23%+ through targeted Instagram campaigns using Canva",
                  "Co-developed 10+ pieces of content highlighting Japanese cultural traditions",
                ],
              },
              {
                icon: "📚",
                title: "Monash College",
                sub: "Peer Mentor · Jun 2023 – Dec 2023",
                bullets: [
                  "Improved student GPA by an average of +0.3 through customised 1-on-1 tutoring sessions",
                  "Increased workshop attendance by 60% by promoting seminars on campus",
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  padding: "24px",
                  borderRadius: "16px",
                  background: "rgba(79,142,247,0.04)",
                  border: "1px solid rgba(79,142,247,0.1)",
                  marginBottom: "16px",
                }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div
                    className="flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{
                      width: "44px",
                      height: "44px",
                      background:
                        "linear-gradient(135deg, #1B3A6B 0%, #2563EB 100%)",
                      fontSize: "20px",
                    }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: '"Playfair Display", serif',
                        fontSize: "17px",
                        color: "white",
                        marginBottom: "3px",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p style={{ fontSize: "13px", color: "#7A8CA3" }}>
                      {card.sub}
                    </p>
                  </div>
                </div>
                <ul style={{ listStyle: "none" }}>
                  {card.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        fontSize: "14px",
                        color: "#7A8CA3",
                        padding: "4px 0 4px 16px",
                        position: "relative",
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "#4F8EF7",
                          fontSize: "12px",
                        }}
                      >
                        →
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
