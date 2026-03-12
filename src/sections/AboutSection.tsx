const skills = [
  "Python",
  "TypeScript",
  "JavaScript",
  "SQL",
  "Java",
  "Databricks",
  "Apache Spark",
  "ETL Pipeline",
  "Next.js",
  "React",
  "Node.js",
  "Tailwind CSS",
  "Prisma",
  "PostgreSQL",
  "Firebase",
  "MongoDB",
  "Supabase",
  "OpenRouter API",
  "Gemini API",
  "Git",
  "Vercel",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen py-28"
      style={{ background: "#0D1524" }}
    >
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div>
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
              About Me
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.15,
                marginBottom: "24px",
              }}
            >
              Who I am
            </h2>

            <p
              style={{
                fontSize: "16px",
                color: "#7A8CA3",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              I'm a 4th-year Information Technology student at Monash
              University, specialising in Software Development. As an Australian
              permanent resident originally from Japan, I bring a cross-cultural
              perspective to every project I work on.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#7A8CA3",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              During my Data Engineer internship at eSolutions, I built
              production-grade data ingestion pipelines processing over 7
              million rows on Databricks. I also completed an exchange program
              at KTH Royal Institute of Technology in Sweden, where I
              collaborated with an international team to ship a full-stack
              AI-powered web app.
            </p>
            <p style={{ fontSize: "16px", color: "#7A8CA3", lineHeight: 1.8 }}>
              My strength is my eagerness to learn — I thrive in fast-paced
              environments where I can pick up new technologies quickly and
              apply them to real products.
            </p>

            <div className="flex flex-wrap gap-2.5 mt-8">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    padding: "7px 14px",
                    background: "rgba(79,142,247,0.08)",
                    border: "1px solid rgba(79,142,247,0.15)",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontFamily: "DM Mono, monospace",
                    color: "#4F8EF7",
                    cursor: "default",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                icon: "🎓",
                title: "Education",
                main: "Monash University",
                sub: "B.IT Software Development · Expected Dec 2026",
              },
              {
                icon: "✈️",
                title: "Exchange Program",
                main: "KTH Royal Institute of Technology",
                sub: "Computer Science · Sweden · 2025",
              },
              {
                icon: "💼",
                title: "Experience",
                main: "eSolutions — Data Engineer Intern",
                sub: "Jul 2025 – Dec 2025 · 6 months",
              },
              {
                icon: "📍",
                title: "Location",
                main: "Melbourne, Australia",
                sub: "Australian Permanent Resident",
              },
              {
                icon: "🌐",
                title: "Languages",
                main: "Japanese (Native) · English (Fluent)",
                sub: "",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  padding: "22px",
                  borderRadius: "14px",
                  background: "rgba(79,142,247,0.04)",
                  border: "1px solid rgba(79,142,247,0.1)",
                }}
              >
                <p
                  style={{
                    fontFamily: "DM Mono, monospace",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    color: "#4F8EF7",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  {card.icon} {card.title}
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#E8EDF5",
                    marginBottom: "4px",
                  }}
                >
                  {card.main}
                </p>
                {card.sub && (
                  <p style={{ fontSize: "13px", color: "#7A8CA3" }}>
                    {card.sub}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
