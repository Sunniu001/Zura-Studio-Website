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

// Collective data updated below in component

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
  { label: "HOME", href: "/", active: true },
  { label: "PROJECTS", href: "/projects", active: false },
  { label: "ABOUT", href: "/about", active: false },
  { label: "EXPERTISE", href: "/#expertise", active: false },
  { label: "DNA", href: "/#dna", active: false },
  { label: "COLLABORATE", href: "/#collaborate", active: false },
];

/* ================================================================
   PAGE COMPONENT
================================================================ */
export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [ipSlide, setIpSlide] = useState(0);
  const [cultureTab, setCultureTab] = useState<"culture" | "partners" | "collective">("culture");

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

          <div className="hero-nav-actions">
            <button
              className="theme-toggle-minimal"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label="Toggle theme"
            >
              {theme === "light" ? "☾" : "☀"}
            </button>
            <a href="#contact" className="hero-contact-btn">
              CONTACT
            </a>
          </div>
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
            <a href="/about" className="btn-dna">
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
        <div className="culture-header">
          <h2 className="culture-section-heading">
            The Transmedia Approach
          </h2>
          <p className="culture-section-subtext">
            Zura Studio is a transmedia IP Studio, creating original universes
            through film, interactive experiences, and culture.
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
              <h3 className="paradigm-card-title"><span>World-building</span></h3>
              <p className="paradigm-card-body"><span>Constructing intricate, logically consistent universes from the ground up. We develop comprehensive lore, structural physics, and socio-political frameworks that serve as robust foundations for expansive narratives.</span></p>
            </div>
          </div>

          {/* Card 2 — IP Development (text) */}
          <div className="paradigm-card paradigm-card--text paradigm-card--tr">
            <div className="paradigm-card-content">
              <div className="paradigm-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span>02 / Architecture</span>
              </div>
              <h3 className="paradigm-card-title"><span>IP Development</span></h3>
              <p className="paradigm-card-body"><span>Incubating raw concepts into fully realized intellectual properties. We sculpt characters, narrative arcs, and franchise bibles designed for multi-generational relevance and cross-medium adaptation.</span></p>
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
              <h3 className="paradigm-card-title"><span>Cross-platform</span><br/><span>Storytelling</span></h3>
              <p className="paradigm-card-body"><span>Orchestrating narratives that transcend a single medium. We design interconnected story webs that unfold across film, interactive media, print, and immersive digital platforms, creating a cohesive user journey.</span></p>
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
              <h3 className="paradigm-card-title"><span>Digital Production</span></h3>
              <p className="paradigm-card-body"><span>State-of-the-art execution leveraging real-time engines, advanced CGI, and immersive web technologies to bring cinematic visions to life with uncompromised fidelity.</span></p>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 4 — ORIGINAL ZURA IP SLIDER
      ============================================================ */}
      <section className="ip-section" id="ip">
        <div className="culture-header centered">
          <h2 className="culture-section-heading">Original IP</h2>
          <p className="culture-section-subtext">Exploring narrative frontiers through high-fidelity, original universes built from the ground up.</p>
        </div>
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
                  <p className="ip-tag"><span>{slide.tag}</span></p>
                  <h3 className="ip-title"><span>{slide.title}</span></h3>
                </div>
                <div className="ip-slide-right">
                  <a href="#" className="ip-cta">
                    <span>{slide.cta}</span>
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
          <h2 className="culture-section-heading">The Zura Collective</h2>
          <p className="culture-section-subtext">A growing network of artists, performers, and creators shaping the worlds we build.</p>
        </div>

        {/* Tab Bar */}
        <div className="culture-tabs">
          {(["culture", "partners", "collective"] as const).map((tab) => (
            <button
              key={tab}
              className={`culture-tab ${cultureTab === tab ? "active" : ""}`}
              onClick={() => setCultureTab(tab as any)}
            >
              {tab === "culture" ? "Culture" : tab === "partners" ? "Collaborators" : "Community"}
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        <div className="culture-panels">

          {/* CULTURE */}
          <div className={`culture-panel ${cultureTab === "culture" ? "active" : ""}`}>
            <div className="bento-grid">
              <div className="bento-left">
                <div className="bento-card bento-fill">
                  <div className="bento-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop')" }} />
                  <div className="bento-card-content">
                    <span className="bento-label"><span>Jharkhand AVGC</span></span>
                    <p className="bento-desc"><span>Center of excellence for Animation, Visual Effects, Gaming, and Comics.</span></p>
                  </div>
                </div>
              </div>
              <div className="bento-right">
                <div className="bento-card">
                  <div className="bento-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800&auto=format&fit=crop')" }} />
                  <div className="bento-card-content">
                    <span className="bento-label"><span>Jharkhand Film Academy</span></span>
                    <p className="bento-desc"><span>Nurturing the next generation of cinematic storytellers and performers.</span></p>
                  </div>
                </div>
                <div className="bento-card">
                  <div className="bento-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop')" }} />
                  <div className="bento-card-content">
                    <span className="bento-label"><span>Jharkhand Creative</span></span>
                    <p className="bento-desc"><span>A collaborative hub for regional artists and creative practitioners.</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bento-cta-row">
              <a href="#culture" className="collective-cta">Enter the Collective &nbsp;→</a>
            </div>
          </div>

          {/* COLLABORATORS */}
          <div className={`culture-panel ${cultureTab === "partners" ? "active" : ""}`}>
            <div className="bento-grid">
              <div className="bento-left">
                <div className="bento-card bento-fill">
                  <div className="bento-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop')" }} />
                  <div className="bento-card-content">
                    <span className="bento-label"><span>Mera TV</span></span>
                    <p className="bento-desc"><span>Emerging Indian OTT platform focusing on hyper-local regional content.</span></p>
                  </div>
                </div>
              </div>
              <div className="bento-right">
                <div className="bento-card">
                  <div className="bento-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop')" }} />
                  <div className="bento-card-content">
                    <span className="bento-label"><span>The Rogue Pixxel</span></span>
                    <p className="bento-desc"><span>Core technology partner specializing in real-time digital architecture.</span></p>
                  </div>
                </div>
                <div className="bento-card">
                  <div className="bento-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop')" }} />
                  <div className="bento-card-content">
                    <span className="bento-label"><span>366 Pie</span></span>
                    <p className="bento-desc"><span>Business strategy and management consulting for creative ventures.</span></p>
                  </div>
                </div>
              </div>
              <div className="bento-panoramic">
                <div className="bento-card">
                  <div className="bento-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop')" }} />
                  <div className="bento-card-content">
                    <span className="bento-label"><span>Target Events</span></span>
                    <p className="bento-desc"><span>Specialized event management and large-scale live production partner.</span></p>
                  </div>
                </div>
                <div className="bento-card">
                  <div className="bento-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop')" }} />
                  <div className="bento-card-content">
                    <span className="bento-label"><span>Tribe Tree</span></span>
                    <p className="bento-desc"><span>Sustainability-focused clothing, textile, and handicraft partner.</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bento-cta-row">
              <a href="#partners" className="collective-cta">Enter the Collective &nbsp;→</a>
            </div>
          </div>

          {/* COMMUNITY */}
          <div className={`culture-panel ${cultureTab === "collective" ? "active" : ""}`}>
            <div className="community-grid">
              <div className="bento-card">
                <div className="bento-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop')" }} />
                <div className="bento-card-content">
                  <span className="bento-label"><span>BIT Mesra</span></span>
                  <p className="bento-desc"><span>Premier University partner for academic and research collaboration.</span></p>
                </div>
              </div>
              <div className="bento-card">
                <div className="bento-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200&auto=format&fit=crop')" }} />
                <div className="bento-card-content">
                  <span className="bento-label"><span>Arka Jain</span></span>
                  <p className="bento-desc"><span>College partner fostering local talent and technical education.</span></p>
                </div>
              </div>
              <div className="bento-card">
                <div className="bento-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop')" }} />
                <div className="bento-card-content">
                  <span className="bento-label"><span>Amity University</span></span>
                  <p className="bento-desc"><span>Global educational partner for multi-disciplinary creative growth.</span></p>
                </div>
              </div>
              <div className="bento-card">
                <div className="bento-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop')" }} />
                <div className="bento-card-content">
                  <span className="bento-label"><span>JOCC</span></span>
                  <p className="bento-desc"><span>Jharkhand Open Coffee Club — a vibrant community for entrepreneurs.</span></p>
                </div>
              </div>
              <div className="bento-card">
                <div className="bento-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1525921429624-479b6a29d840?q=80&w=800&auto=format&fit=crop')" }} />
                <div className="bento-card-content">
                  <span className="bento-label"><span>The Circle</span></span>
                  <p className="bento-desc"><span>Community Club for hosting open mics, standups, Live Shows and more.</span></p>
                </div>
              </div>
              <div className="bento-card">
                <div className="bento-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1449247704737-59c72023b2b2?q=80&w=800&auto=format&fit=crop')" }} />
                <div className="bento-card-content">
                  <span className="bento-label"><span>Cyclist.Cafe</span></span>
                  <p className="bento-desc"><span>Coffee cafe for Ranchi's vibrant cyclist community and entrepreneurship building.</span></p>
                </div>
              </div>
              <div className="bento-card">
                <div className="bento-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop')" }} />
                <div className="bento-card-content">
                  <span className="bento-label"><span>Better Planet Together</span></span>
                  <p className="bento-desc"><span>Collective pledge towards sustainability and climate consciousness.</span></p>
                </div>
              </div>
            </div>
            <div className="bento-cta-row">
              <a href="#participate" className="collective-cta">Enter the Collective &nbsp;→</a>
            </div>
          </div>

        </div>


      </section>


      {/* Projects moved to /projects page */}

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
