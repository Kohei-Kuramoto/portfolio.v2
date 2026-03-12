export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-32 pb-20"
      style={{ background: "#080C14" }}
    >
      <div className="max-w-5xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div style={{ animation: "fadeUp 0.9s ease forwards" }}>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
              style={{
                background: "rgba(79,142,247,0.08)",
                border: "1px solid rgba(79,142,247,0.2)",
                color: "#4F8EF7",
                fontFamily: "DM Mono, monospace",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  display: "inline-block",
                }}
              />
              Available for internship
            </div>

            <h1
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "clamp(42px, 5.5vw, 68px)",
                fontWeight: 900,
                lineHeight: 1.08,
                marginBottom: "20px",
                color: "white",
              }}
            >
              Hi, I'm
              <br />
              <span style={{ color: "#4F8EF7" }}>Kohei</span>
              <br />
              Kuramoto.
            </h1>

            <p
              style={{
                fontSize: "17px",
                color: "#7A8CA3",
                lineHeight: 1.75,
                marginBottom: "36px",
                maxWidth: "480px",
              }}
            >
              Data Engineer & Full-Stack Developer based in Melbourne,
              Australia. Passionate about building scalable data pipelines and
              modern web applications.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-medium transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "#4F8EF7",
                  textDecoration: "none",
                  fontSize: "15px",
                }}
              >
                View My Work
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "transparent",
                  color: "#E8EDF5",
                  border: "1px solid rgba(79,142,247,0.2)",
                  textDecoration: "none",
                  fontSize: "15px",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="14 2 14 8 20 8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                My Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center relative">
            <div
              style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(79,142,247,0.08) 0%, transparent 70%)",
              }}
            />
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: "280px",
                height: "280px",
                background: "linear-gradient(135deg, #1B3A6B 0%, #111827 100%)",
                border: "3px solid rgba(79,142,247,0.2)",
                fontSize: "100px",
                animation: "glow 4s ease-in-out infinite",
                position: "relative",
                zIndex: 1,
              }}
            >
              👨‍💻
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{
            color: "#7A8CA3",
            fontSize: "11px",
            fontFamily: "DM Mono, monospace",
            letterSpacing: "2px",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "50px",
              background: "linear-gradient(to bottom, #4F8EF7, transparent)",
            }}
          />
          <span>scroll</span>
        </div>
      </div>
    </section>
  );
}
