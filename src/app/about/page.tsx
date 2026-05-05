"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "ABOUT", href: "/about", active: true },
  { label: "EXPERTISE", href: "/#expertise" },
  { label: "DNA", href: "/#dna" },
  { label: "COLLABORATE", href: "/#collaborate" },
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
      {/* Navigation */}
      <nav className="hero-nav" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: '2rem 3rem' }}>
        <a href="/" className="hero-logo" style={{ textDecoration: 'none', color: 'var(--hero-fg)' }}>ZURA STUDIO</a>
        <div className="hero-nav-links">
          {NAV_LINKS.map(link => (
            <a 
              key={link.label} 
              href={link.href} 
              className={link.active ? "active" : ""}
              style={{ color: 'var(--hero-fg)', opacity: link.active ? 1 : 0.7 }}
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
            style={{ color: 'var(--hero-fg)' }}
          >
            {theme === "light" ? "☾" : "☀"}
          </button>
        </div>
      </nav>

      {/* SECTION 1 — HERO */}
      <section className="about-hero" style={{ height: '80vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div className="about-hero-bg" style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'grayscale(1) brightness(0.3)'
        }} />
        <div className="about-hero-content" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '1000px', padding: '0 2rem' }}>
          <p className="ip-tag" style={{ color: '#ffffff', marginBottom: '2rem' }}><span>Architects of Imagination</span></p>
          <h1 className="ip-title" style={{ color: '#ffffff', fontSize: 'clamp(3rem, 8vw, 6.5rem)', lineHeight: 1.1 }}>
            <span>We Build Worlds,</span><br/><span>Not Just Content</span>
          </h1>
          <p className="culture-section-subtext" style={{ color: '#ffffff', opacity: 0.8, fontSize: '1.2rem', marginTop: '2rem', maxWidth: '600px', margin: '2rem auto 0' }}>
            Zura Studio develops original narrative universes across film, interactive experiences, and culture.
          </p>
        </div>
      </section>

      {/* SECTION 2 — PHILOSOPHY (CRITICAL) */}
      <section className="philosophy-section" style={{ padding: '12rem 3rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="philosophy-heading">
            Where Technology,<br/>Art and Magic Collide
          </h2>
          <p className="philosophy-body">
            ZURA STUDIO IS A CREATIVE HUB WHERE DESIGN MEETS INNOVATION. WE SPECIALIZE IN DELIVERING HIGH-QUALITY DIGITAL EXPERIENCES THAT BLEND TECHNOLOGY, STORYTELLING, AND AESTHETICS. OUR TEAM IS PASSIONATE ABOUT CRAFTING VISUALS AND STRATEGIES THAT HELP BRANDS STAND OUT AND CONNECT WITH THEIR AUDIENCE.
          </p>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE DO */}
      <section className="capabilities-section" style={{ padding: '0 3rem 12rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="culture-header">
            <h2 className="culture-section-heading"><span>What We Do</span></h2>
          </div>
          <div className="capabilities-grid">
            <div className="capability-item">
              <h3 className="capability-title">Narrative</h3>
              <p className="capability-desc">Crafting cinematic journeys that span across traditional cinema and episodic storytelling, focused on deep lore and mythic structures (films, series, writing).</p>
            </div>
            <div className="capability-item">
              <h3 className="capability-title">Interactive</h3>
              <p className="capability-desc">Building living ecosystems and gameplay mechanics that invite users to not just watch, but inhabit the worlds we create (games, systems).</p>
            </div>
            <div className="capability-item">
              <h3 className="capability-title">Cultural</h3>
              <p className="capability-desc">Bridging the gap between the digital and physical through immersive performances and a vibrant community of regional creators (events, performances, community).</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — TEAM / COLLECTIVE */}
      <section className="team-section" id="team">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="culture-header" style={{ marginBottom: '5rem' }}>
            <h2 className="culture-section-heading" style={{ fontFamily: 'var(--font-serif)', textTransform: 'none', letterSpacing: '0' }}>The Architects</h2>
          </div>
          
          <div className="team-grid">
            {/* ELENA */}
            <div className="team-member">
              <div className="team-portrait-wrap">
                <img src="/team/elena.png" alt="Elena Rostova" className="team-portrait" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Elena Rostova</h3>
                <p className="team-role">Visionary Director</p>
              </div>
            </div>

            {/* JULIAN */}
            <div className="team-member">
              <div className="team-portrait-wrap">
                <img src="/team/julian.png" alt="Julian Vance" className="team-portrait" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Julian Vance</h3>
                <p className="team-role">Lead Technologist</p>
              </div>
            </div>

            {/* SARAH */}
            <div className="team-member">
              <div className="team-portrait-wrap">
                <img src="/team/sarah.png" alt="Sarah Lin" className="team-portrait" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Sarah Lin</h3>
                <p className="team-role">Narrative Architect</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer style={{ padding: '5rem 3rem', background: 'var(--section-bg)', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <p className="muted" style={{ fontSize: '0.8rem', letterSpacing: '0.2em' }}>© 2026 ZURA STUDIO. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
