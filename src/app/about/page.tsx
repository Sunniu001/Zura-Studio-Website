"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about", active: true },
  { label: "PROJECTS", href: "/projects" },
  { label: "ZURAVERSE", href: "http://zuraverse.xyz/", external: true },
  { label: "MERCH STORE", href: "https://www.hippiealiens.com/", external: true },
];

const TEAM = [
  { name: "Abhishek Sagar", role: "Founder and Creative Technologist", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
  { name: "Sunniy Khan", role: "Co-Founder and CG Generalist", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" },
  { name: "Mohit Raj", role: "Video Producer", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" },
  { name: "Hamee", role: "HR Lead", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
  { name: "Suraj Gupta", role: "Full Stack Developer", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
  { name: "Neha Mahto", role: "Social Media Manager", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" },
  { name: "Nitin Jiwal", role: "Project Manager (Event Sales)", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" }
];

export default function AboutPage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <main className="about-page">
      {/* NAV */}
      <nav className="hero-nav">
        <div className="hero-logo">ZURA STUDIO</div>

        <div className="hero-nav-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={link.active ? "active" : ""}
              {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hero-nav-actions">
          <button
            className="theme-toggle-minimal"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "☾" : "☀"}
          </button>
          <a href="/contact" className="hero-contact-btn">
            CONTACT
          </a>
        </div>
      </nav>

      {/* SECTION 1 — HERO */}
      <section className="about-hero-new">
        <div className="about-hero-new-content">
          <h1 className="about-hero-title">
            We Build Worlds,<br/>Not Just Content
          </h1>
          <p className="about-hero-subtext">
            Zura Studio develops original narrative universes across film, interactive experiences, and culture.
          </p>
        </div>
      </section>

      {/* SECTION 2 — PHILOSOPHY */}
      <section className="philosophy-section-new">
        <div className="philosophy-container">
          <div className="philosophy-list-item">
            <span className="philosophy-item-num">01 / PHILOSOPHY</span>
            <h3 className="philosophy-item-title">Storytelling as worldbuilding</h3>
            <p className="philosophy-item-desc">We do not just write scripts; we architect entire universes with deep lore, consistent rules, and interconnected histories that invite exploration.</p>
          </div>
          <div className="philosophy-list-item">
            <span className="philosophy-item-num">02 / PHILOSOPHY</span>
            <h3 className="philosophy-item-title">Culture over content</h3>
            <p className="philosophy-item-desc">We prioritize creating enduring cultural moments and dedicated communities rather than producing disposable, algorithmically-driven content.</p>
          </div>
          <div className="philosophy-list-item">
            <span className="philosophy-item-num">03 / PHILOSOPHY</span>
            <h3 className="philosophy-item-title">Long-term myth creation</h3>
            <p className="philosophy-item-desc">Our narratives are designed to evolve and expand over years, building modern myths that resonate across generations and mediums.</p>
          </div>
          <div className="philosophy-list-item" style={{ borderBottom: 'none' }}>
            <span className="philosophy-item-num">04 / PHILOSOPHY</span>
            <h3 className="philosophy-item-title">Interdisciplinary creation</h3>
            <p className="philosophy-item-desc">By seamlessly blending film, games, and live events, we break down medium barriers to craft truly immersive and participatory experiences.</p>
            <span className="philosophy-item-sub">(FILM + GAMES + PERFORMANCE)</span>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE DO */}
      <section className="whatwedo-section">
        <div className="whatwedo-header">
          <div className="whatwedo-label">WHAT WE DO</div>
        </div>
        <div className="whatwedo-grid">
          <div className="whatwedo-card">
            <h3 className="whatwedo-card-title">Narrative</h3>
            <span className="whatwedo-card-sub">(FILMS, SERIES, WRITING)</span>
            <p className="whatwedo-card-desc">We craft compelling story arcs, deep lore, and character journeys that serve as the narrative anchor for our expansive universes.</p>
          </div>
          <div className="whatwedo-card">
            <h3 className="whatwedo-card-title">Interactive</h3>
            <span className="whatwedo-card-sub">(GAMES, SYSTEMS)</span>
            <p className="whatwedo-card-desc">Building immersive digital environments and responsive systems where audiences transition from spectators to active participants.</p>
          </div>
          <div className="whatwedo-card">
            <h3 className="whatwedo-card-title">Cultural</h3>
            <span className="whatwedo-card-sub">(EVENTS, PERFORMANCES, COMMUNITY)</span>
            <p className="whatwedo-card-desc">Bridging the gap between the screen and reality through live, shared experiences that foster dedicated communities.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE ARCHITECTS */}
      <section className="architects-section" id="team">
        <div className="architects-heading-container">
          <h2 className="architects-heading">The Architects</h2>
          <p className="architects-subheading">A collective of filmmakers, artists, technologists, and performers.</p>
        </div>
        <div className="architects-rotator">
          <div className="filmstrip-border" />
          <div className="architects-section-inner">
            <div className="architects-slider-container">
              <div className="architects-slider">
                {[...TEAM, ...TEAM].map((member, i) => (
                  <div className="architect-card" key={i}>
                    <div className="architect-portrait-wrap">
                      <img src={member.img} alt={member.name} className="architect-portrait" />
                    </div>
                    <div className="architect-info">
                      <h3 className="architect-name">{member.name}</h3>
                      <span className="architect-role">{member.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="filmstrip-border" />
        </div>
      </section>

      {/* ============================================================
          FOOTER
      ============================================================ */}
      <footer className="site-footer">
        <div className="footer-links">
          <a href="https://www.instagram.com/zurastudio_/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/company/zuraverse" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://x.com/Zuraverse" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://www.youtube.com/@zuraverse/" target="_blank" rel="noreferrer">YouTube</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div className="footer-right">
          <span>ZURASTUDIO © 2025</span>
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle colour theme"
          >
            {theme === "light" ? (
              <>Dark Mode <span>☾</span></>
            ) : (
              <>Light Mode <span>☀</span></>
            )}
          </button>
        </div>
      </footer>
    </main>
  );
}
