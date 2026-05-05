"use client";

import { useEffect, useState } from "react";

/* ================================================================
   DATA
================================================================ */
const clients = [
  { id: 1, name: "Radio Khanchi", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg" },
  { id: 2, name: "Trekking Tajikistan", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg" },
  { id: 3, name: "Aaliya Construction", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg" },
  { id: 4, name: "MedValley", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg" },
  { id: 5, name: "MOTI Infraheights", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg" },
  { id: 6, name: "NHAI", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg" },
  { id: 7, name: "Flocard", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg" },
  { id: 8, name: "Indian Railways", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg" },
  { id: 9, name: "Del Monte", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg" },
];

// Using client names instead of broken placeholder images — swap src with real logos
const CLIENT_NAMES = [
  "Radio Khanchi", "Trekking Tajikistan", "Aaliya Construction",
  "GCCB", "MedValley", "MOTI Infraheights",
  "NHAI", "Flocard", "Indian Railways", "Del Monte",
];

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

const IP_SLIDES = [
  {
    id: 0,
    tag: "Zura Original IP",
    title: "Hippie Aliens",
    cta: "Watch Episode 1",
    image: "/Images/vid_16_04_2026_8327.jpg",
  },
  {
    id: 1,
    tag: "Zura Original IP",
    title: "Milkyland",
    cta: "Explore World",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: 2,
    tag: "Zura Original IP",
    title: "Daturavad",
    cta: "Discover Story",
    image: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?q=80&w=1800&auto=format&fit=crop",
  },
];

const NAV_LINKS = [
  { label: "HOME", href: "#", active: true },
  { label: "PROJECTS", href: "#projects", active: false },
  { label: "EXPERTISE", href: "#expertise", active: false },
  { label: "DNA", href: "#dna", active: false },
  { label: "COLLABORATE", href: "#collaborate", active: false },
];

/* ================================================================
   PAGE COMPONENT
================================================================ */
export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [ipSlide, setIpSlide] = useState(0);
  const [cultureTab, setCultureTab] = useState<"culture" | "collaborators" | "community">("culture");

  useEffect(() => {
    if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Auto-advance IP slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIpSlide((prev) => (prev + 1) % IP_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [ipSlide]);

  const filtered =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main>
      {/* ============================================================
          SECTION 1 — HERO
      ============================================================ */}
      <section className="hero-section">
        {/* Background video */}
        <video
          className="hero-bg-image"
          src="/Images/final_janizh_e6hrvn.mov"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />

        {/* NAV */}
        <nav className="hero-nav">
          <div className="hero-logo">ZURA STUDIO</div>

          <div className="hero-nav-links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={link.active ? "active" : ""}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="hero-contact-btn">
            CONTACT
          </a>
        </nav>

        {/* HEADLINE + CTAs */}
        <div className="hero-body">
          <h1 className="hero-headline">
            Building expansive worlds across digital, physical, and interactive mediums
          </h1>
          <div className="hero-ctas">
            <a href="#projects" className="btn-explore">
              WATCH EPISODE 1
            </a>
            <a href="#about" className="btn-dna">
              ABOUT US
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>


      {/* ============================================================
          SECTION 3 — PARADIGM / SERVICES
      ============================================================ */}
      <section className="paradigm-section" id="expertise">
        {/* Header */}
        <div className="paradigm-header">
          <h2 className="paradigm-heading">
            The Transmedia<br />Approach
          </h2>
          <p className="paradigm-sub">
            Zura Studio is a transmedia IP Studio, creating original universes
            through film, interactive experiences, and culture
          </p>
        </div>

        {/* Bento Grid */}
        <div className="paradigm-grid">

          {/* Card 1 — World-building (image, large) */}
          <div className="paradigm-card paradigm-card--image paradigm-card--tl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1600&auto=format&fit=crop" alt="World-building" className="paradigm-card-bg" />
            <div className="paradigm-card-overlay" />
            <div className="paradigm-card-content">
              <div className="paradigm-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                <span>01 / Core Paradigm</span>
              </div>
              <h3 className="paradigm-card-title">World-building</h3>
              <p className="paradigm-card-body">Constructing intricate, logically consistent universes from the ground up. We develop comprehensive lore, structural physics, and socio-political frameworks that serve as robust foundations for expansive narratives.</p>
            </div>
          </div>

          {/* Card 2 — IP Development (text) */}
          <div className="paradigm-card paradigm-card--text paradigm-card--tr">
            <div className="paradigm-card-content">
              <div className="paradigm-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span>02 / Architecture</span>
              </div>
              <h3 className="paradigm-card-title">IP Development</h3>
              <p className="paradigm-card-body">Incubating raw concepts into fully realized intellectual properties. We sculpt characters, narrative arcs, and franchise bibles designed for multi-generational relevance and cross-medium adaptation.</p>
              <a href="#projects" className="paradigm-link">VIEW METHODOLOGY →</a>
            </div>
          </div>

          {/* Card 3 — Cross-platform (text) */}
          <div className="paradigm-card paradigm-card--text paradigm-card--bl">
            <div className="paradigm-card-content">
              <div className="paradigm-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <span>03 / Expansion</span>
              </div>
              <h3 className="paradigm-card-title">Cross-platform<br/>Storytelling</h3>
              <p className="paradigm-card-body">Orchestrating narratives that transcend a single medium. We design interconnected story webs that unfold across film, interactive media, print, and immersive digital platforms, creating a cohesive user journey.</p>
            </div>
          </div>

          {/* Card 4 — Digital Production (image, large) */}
          <div className="paradigm-card paradigm-card--image paradigm-card--br">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=1600&auto=format&fit=crop" alt="Digital Production" className="paradigm-card-bg" />
            <div className="paradigm-card-overlay" />
            <div className="paradigm-card-content">
              <div className="paradigm-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"/></svg>
                <span>04 / Execution</span>
              </div>
              <h3 className="paradigm-card-title">Digital Production</h3>
              <p className="paradigm-card-body">State-of-the-art execution leveraging real-time engines, advanced CGI, and immersive web technologies to bring cinematic visions to life with uncompromised fidelity.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 4 — ORIGINAL ZURA IP SLIDER
      ============================================================ */}
      <section className="ip-section" id="ip">
        <h2 className="ip-section-title">Original IP</h2>
        <div className="ip-slider">
          {IP_SLIDES.map((slide, i) => (
            <div
              key={slide.id}
              className={`ip-slide ${i === ipSlide ? "active" : ""}`}
              aria-hidden={i !== ipSlide}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.image} alt={slide.title} className="ip-slide-bg" />
              <div className="ip-slide-overlay" />
              <div className="ip-slide-content">
                <div className="ip-slide-left">
                  <p className="ip-tag">{slide.tag}</p>
                  <h3 className="ip-title">{slide.title}</h3>
                </div>
                <div className="ip-slide-right">
                  <a href="#" className="ip-cta">
                    {slide.cta}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Controls */}
          <button
            className="ip-arrow ip-arrow--prev"
            onClick={() => setIpSlide((ipSlide - 1 + IP_SLIDES.length) % IP_SLIDES.length)}
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            className="ip-arrow ip-arrow--next"
            onClick={() => setIpSlide((ipSlide + 1) % IP_SLIDES.length)}
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

          {/* Dots */}
          <div className="ip-dots">
            {IP_SLIDES.map((_, i) => (
              <button
                key={i}
                className={`ip-dot ${i === ipSlide ? "active" : ""}`}
                onClick={() => setIpSlide(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 — CULTURE / COLLABORATORS / COMMUNITY
      ============================================================ */}
      <section className="culture-section" id="culture">

        {/* Section header */}
        <div className="culture-header">
          <h2 className="culture-section-heading">A Living Creative Ecosystem</h2>
        </div>

        {/* Tab Bar */}
        <div className="culture-tabs">
          {(["culture", "collaborators", "community"] as const).map((tab) => (
            <button
              key={tab}
              className={`culture-tab ${cultureTab === tab ? "active" : ""}`}
              onClick={() => setCultureTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        <div className="culture-panels">

          {/* CULTURE */}
          <div className={`culture-panel ${cultureTab === "culture" ? "active" : ""}`}>
            <div className="culture-panel-inner">
              <div className="culture-panel-text">
                <p className="culture-eyebrow">01 / Culture</p>
                <h3 className="culture-heading">Cultural<br/>Institutions</h3>
                <p className="culture-body">
                  We root our work in the cultural fabric of Jharkhand, collaborating with
                  institutions that champion regional storytelling, performing arts, and creative
                  industries at scale.
                </p>
                <div className="culture-logos-row">
                  <div className="static-logo">Jharkhand Film and Theatre Academy</div>
                  <div className="static-logo">Jharkhand AVGC</div>
                  <div className="static-logo">Jharkhand Creative</div>
                </div>
              </div>
              <div className="culture-panel-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop"
                  alt="Culture"
                  className="culture-img"
                />
              </div>
            </div>
          </div>

          {/* COLLABORATORS */}
          <div className={`culture-panel ${cultureTab === "collaborators" ? "active" : ""}`}>
            <div className="culture-panel-inner">
              <div className="culture-panel-text">
                <p className="culture-eyebrow">02 / Collaborators</p>
                <h3 className="culture-heading">Built With<br/>The Best</h3>
                <p className="culture-body">
                  We partner with platforms and studios that share our obsession with
                  quality storytelling and cross-medium reach — amplifying every universe
                  we create.
                </p>
                <div className="culture-logos-row">
                  <div className="static-logo">Mera TV</div>
                  <div className="static-logo">366 Pie</div>
                </div>
              </div>
              <div className="culture-panel-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="Collaborators"
                  className="culture-img"
                />
              </div>
            </div>
          </div>

          {/* COMMUNITY */}
          <div className={`culture-panel ${cultureTab === "community" ? "active" : ""}`}>
            <div className="culture-panel-inner">
              <div className="culture-panel-text">
                <p className="culture-eyebrow">03 / Community</p>
                <h3 className="culture-heading">Rooted in<br/>Real Places</h3>
                <p className="culture-body">
                  Our communities are shaped by the campuses and collectives that live
                  and breathe creativity every day — co-creators of the worlds we build.
                </p>
                <div className="culture-logos-row">
                  <div className="static-logo">BIT Mesra</div>
                  <div className="static-logo">Arka Jain</div>
                  <div className="static-logo">JOCC</div>
                </div>
              </div>
              <div className="culture-panel-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop"
                  alt="Community"
                  className="culture-img"
                />
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ============================================================
          SECTION 6 — PROJECTS
      ============================================================ */}
      <section className="projects-section" id="projects">
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                {/* Play icon top-right */}
                <div className="project-play">
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="white">
                    <path d="M1 1l10 6L1 13V1z" />
                  </svg>
                </div>

                {/* Title + sound bars */}
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

      {/* ============================================================
          FOOTER
      ============================================================ */}
      <footer className="site-footer">
        <div className="footer-links">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">YouTube</a>
          <a href="#">Contact Us</a>
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
