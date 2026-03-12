"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "My Work", href: "#work" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
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
            className="font-display text-2xl font-bold text-white tracking-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Kohei<span style={{ color: "#4F8EF7" }}>.</span>
          </a>
          <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium tracking-wide transition-colors duration-200 no-underline"
                  style={{ color: "#7A8CA3" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="text-sm font-medium px-5 py-2 rounded-lg no-underline text-white"
                style={{ background: "#4F8EF7" }}
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1"
            style={{ background: "transparent", border: "none" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="menu"
          >
            <span
              className="block w-6 h-0.5 bg-white rounded transition-all duration-300"
              style={{
                transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 bg-white rounded transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 bg-white rounded transition-all duration-300"
              style={{
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
              className="text-base font-medium no-underline transition-colors"
              style={{ color: "#7A8CA3" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}

          <a
            href="#contact"
            className="text-center py-3 text-white rounded-xl text-sm font-medium no-underline"
            style={{ background: "#4F8EF7" }}
            onClick={() => setMenuOpen(false)}
          >
            Contact Me
          </a>
        </div>
      )}
    </>
  );
}
