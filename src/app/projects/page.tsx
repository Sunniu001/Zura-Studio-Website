"use client";

import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Ananda Ranchi Smart City 3D Walkthrough | Archviz",
    category: "ARCH VISUALIZATION",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop",
    barHeights: [8, 14, 10, 16, 12],
  },
  {
    id: 2,
    title: "Ganga Bridge Sahebganj (NHAI) | Archviz",
    category: "ARCH VISUALIZATION",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1400&auto=format&fit=crop",
    barHeights: [10, 8, 16, 12, 14],
  },
  {
    id: 3,
    title: "Riyasat Resort 3D Walkthrough | Archviz",
    category: "ARCH VISUALIZATION",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop",
    barHeights: [12, 16, 8, 14, 10],
  },
  {
    id: 4,
    title: "Chas To Ramgarh Expressway (NHAI) | Archviz",
    category: "ARCH VISUALIZATION",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1400&auto=format&fit=crop",
    barHeights: [14, 10, 12, 8, 16],
  },
  {
    id: 5,
    title: "Rouge Pixxel Office Walkthrough | Archviz",
    category: "ARCH VISUALIZATION",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop",
    barHeights: [8, 16, 10, 14, 12],
  },
  {
    id: 6,
    title: "Palna Redevelopment Project Walkthrough | Archviz",
    category: "ARCH VISUALIZATION",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1400&auto=format&fit=crop",
    barHeights: [16, 12, 8, 10, 14],
  },
];

const CATEGORIES = ["ALL", "ARCH VISUALIZATION", "FILM PRODUCTION", "PROMOTIONS", "ANIMATION"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const filtered =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="projects-page">
      {/* Simple Nav for the subpage */}
      <nav className="hero-nav" style={{ position: 'relative', background: 'var(--hero-bg)', padding: '2rem 3rem' }}>
        <a href="/" className="hero-logo" style={{ textDecoration: 'none', color: 'var(--hero-fg)' }}>ZURA STUDIO</a>
        <div className="hero-nav-links">
          <a href="/" style={{ color: 'var(--hero-fg)', opacity: 0.7 }}>HOME</a>
          <a href="/projects" className="active" style={{ color: 'var(--hero-fg)' }}>PROJECTS</a>
          <a href="/about" style={{ color: 'var(--hero-fg)', opacity: 0.7 }}>ABOUT</a>
          <a href="/#expertise" style={{ color: 'var(--hero-fg)', opacity: 0.7 }}>EXPERTISE</a>
          <a href="/#dna" style={{ color: 'var(--hero-fg)', opacity: 0.7 }}>DNA</a>
          <a href="/#collaborate" style={{ color: 'var(--hero-fg)', opacity: 0.7 }}>COLLABORATE</a>
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

      <section className="projects-section" style={{ paddingTop: '4rem', background: 'var(--bg)', color: 'var(--fg)' }}>
        <div className="culture-header" style={{ marginBottom: '4rem' }}>
          <h2 className="culture-section-heading">Projects</h2>
          <p className="culture-section-subtext">A showcase of our cinematic world-building and transmedia executions.</p>
        </div>

        <nav className="projects-nav" aria-label="Project categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        <div className="projects-grid">
          {filtered.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                <div className="project-play">
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="white">
                    <path d="M1 1l10 6L1 13V1z" />
                  </svg>
                </div>
                <div className="project-meta">
                  <p className="project-title-text">{project.title}</p>
                  <div className="project-bars">
                    {project.barHeights.map((h, i) => (
                      <div
                        key={i}
                        className="project-bar"
                        style={{ height: `${h}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-links">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
        </div>
        <div className="footer-right">
          <span>ZURASTUDIO © 2025</span>
        </div>
      </footer>
    </main>
  );
}
