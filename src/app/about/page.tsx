"use client";

import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about", active: true },
  { label: "PROJECTS", href: "/projects" },
  { label: "ZURAVERSE", href: "http://zuraverse.xyz/", external: true },
  { label: "MERCH STORE", href: "https://www.hippiealiens.com/", external: true },
];

const TEAM = [
  {
    name: "Abhishek Sagar",
    role: "Founder and Creative Technologist",
    img: "/team/Abhishek.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/asssagar/",
      twitter: "https://x.com/neustarZura",
      instagram: "https://www.instagram.com/neutrino_stardust/"
    }
  },
  {
    name: "Sunniy Khan",
    role: "Co-Founder and CG Generalist",
    img: "/team/Sunniy.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/sunniy-khan-455b7b16a/",
      twitter: "https://x.com/thatBeardedBat",
      instagram: "https://www.instagram.com/baldsurdist"
    }
  },
  {
    name: "Elisha Swer",
    role: "3d artist",
    img: "/team/Elisha.jpg",
    socials: {
      twitter: "https://x.com/elishaswer",
      instagram: "https://www.instagram.com/elishaswer.fbx/"
    }
  },
  {
    name: "Mohit Raj",
    role: "Video Producer",
    img: "/team/Mohit.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/mohit-raj-773b9224b/",
      instagram: "https://www.instagram.com/iam_mohitraj_/"
    }
  },
  {
    name: "Anandini RoyChoudhary",
    role: "HR Lead",
    img: "/team/Anandini.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/anandiniroychoudhury/"
    }
  },
  {
    name: "Suraj Gupta",
    role: "Full Stack Developer",
    img: "/team/Suraj.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/suraj-kumar-058191222/"
    }
  },
  {
    name: "Sawan Chowhan",
    role: "Lead Game Developer",
    img: "/team/Sawan.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/sawan-chouahn-zuraverse-43008b194"
    }
  },
  {
    name: "Neha Mahto",
    role: "Social Media Manager",
    img: "/team/Neha.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/neha-mahto-454172245/"
    }
  }
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
      <Navbar activePath="/about" theme={theme} setTheme={setTheme} />

      {/* SECTION 1 — HERO */}
      <section className="about-hero-new">
        <div className="about-hero-new-content">
          <h1 className="about-hero-title">
            We Build Worlds,<br />Not Just Content
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
                      {member.socials && (
                        <div className="architect-socials">
                          {member.socials.linkedin && (
                            <a href={member.socials.linkedin} target="_blank" rel="noreferrer" className="architect-social-link" aria-label="LinkedIn">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                          )}
                          {member.socials.twitter && (
                            <a href={member.socials.twitter} target="_blank" rel="noreferrer" className="architect-social-link" aria-label="Twitter">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </a>
                          )}
                          {member.socials.instagram && (
                            <a href={member.socials.instagram} target="_blank" rel="noreferrer" className="architect-social-link" aria-label="Instagram">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                          )}
                        </div>
                      )}
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
