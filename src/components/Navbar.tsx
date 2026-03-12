"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: t.nav.home[lang], href: "#home" },
    { label: t.nav.about[lang], href: "#about" },
    { label: t.nav.work[lang], href: "#work" },
    { label: t.nav.education[lang], href: "#education" },
    { label: t.nav.experience[lang], href: "#experience" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 py-5 backdrop-blur-lg border-b transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}
        style={{
          background: "rgba(8,12,20,0.85)",
          borderColor: "rgba(79,142,247,0.1)",
        }}
      >
        <div className="max-w-5xl mx-auto px-8 flex items-center justify-between">
          <a
            href="#home"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "22px",
              fontWeight: 700,
              color: "white",
              textDecoration: "none",
            }}
          >
            Kohei<span style={{ color: "#4F8EF7" }}>.</span>
          </a>

          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    color: "#7A8CA3",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                style={{
                  background: "#4F8EF7",
                  color: "white",
                  textDecoration: "none",
                  padding: "8px 20px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {t.nav.contact[lang]}
              </a>
            </li>
            {/* 言語切り替えボタン */}
            <li>
              <button
                onClick={() => setLang(lang === "en" ? "ja" : "en")}
                style={{
                  background: "transparent",
                  border: "1px solid rgba(79,142,247,0.3)",
                  color: "#4F8EF7",
                  padding: "6px 14px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontFamily: "DM Mono, monospace",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {lang === "en" ? "日本語" : "EN"}
              </button>
            </li>
          </ul>

          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1"
            style={{ background: "transparent", border: "none" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="menu"
          >
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "white",
                borderRadius: "2px",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "white",
                borderRadius: "2px",
                transition: "all 0.3s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "white",
                borderRadius: "2px",
                transition: "all 0.3s",
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-8px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed left-0 right-0 z-40 px-8 py-6 flex flex-col gap-5 md:hidden"
          style={{
            top: "65px",
            background: "rgba(8,12,20,0.98)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(79,142,247,0.1)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: "#7A8CA3",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: 500,
              }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              textAlign: "center",
              padding: "12px",
              background: "#4F8EF7",
              color: "white",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
            }}
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.contact[lang]}
          </a>
          <button
            onClick={() => setLang(lang === "en" ? "ja" : "en")}
            style={{
              background: "transparent",
              border: "1px solid rgba(79,142,247,0.3)",
              color: "#4F8EF7",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "14px",
              fontFamily: "DM Mono, monospace",
              cursor: "pointer",
            }}
          >
            {lang === "en" ? "日本語に切り替え" : "Switch to English"}
          </button>
        </div>
      )}
    </>
  );
}
