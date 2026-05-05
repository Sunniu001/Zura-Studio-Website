"use client";

import { useEffect, useState } from "react";

const NAV_LINKS: Array<{ label: string; href: string; active?: boolean; external?: boolean }> = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PROJECTS", href: "/projects" },
  { label: "ZURAVERSE", href: "http://zuraverse.xyz/", external: true },
  { label: "MERCH STORE", href: "https://www.hippiealiens.com/", external: true },
];

export default function ContactPage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <main className="projects-page contact-page-wrapper">
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
          <a href="/contact" className="hero-contact-btn active">
            CONTACT
          </a>
        </div>
      </nav>

      {/* MAP */}
      <section className="contact-map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.1554536648784!2d85.3054146761502!3d23.34638787895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1f74b6a4a69%3A0xc6cb1c7df4fe957c!2sKartik%20Oraon%20Chowk%2C%20Harmu%20Housing%20Colony%2C%20Ranchi%2C%20Jharkhand%20834001!5e0!3m2!1sen!2sin!4v1714902000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Zura Studio Location"
        ></iframe>
      </section>

      {/* CONTENT */}
      <section className="contact-content-section">
        <div className="contact-grid">
          {/* Left Column */}
          <div className="contact-left-col">
            <h1 className="contact-main-heading">CONTACTS</h1>

            <div className="contact-info-block">
              <span className="contact-label">ADDRESS</span>
              <p className="contact-detail-text">
                H/44 HARMU HOUSING COLONY, NIZAM NAGAR, HINDPIRI,<br />
                NEAR KARTIK ORAON CHOWK, RANCHI, JHARKHAND 834001
              </p>
              <button 
                className="directions-btn"
                onClick={() => window.open("https://maps.google.com/?q=Kartik+Oraon+Chowk,+Harmu+Housing+Colony,+Ranchi,+Jharkhand+834001", "_blank")}
              >
                📍 Directions
              </button>
            </div>

            <div className="contact-info-block">
              <span className="contact-label">CALL</span>
              <p className="contact-detail-text highlight-link">
                📞 <a href="tel:+919631187569">+91 96311 87569</a>
              </p>
            </div>

            <div className="contact-info-block">
              <span className="contact-label">FOR ANY QUESTIONS</span>
              <div className="questions-email-box">
                ✉️ <a href="mailto:info@zurastudio.com">info@zurastudio.com</a>
              </div>
            </div>

            {/* MESSAGE FORM */}
            <div className="contact-form-container">
              <span className="contact-label">SEND US A MESSAGE</span>
              {isSubmitted ? (
                <div className="form-success-overlay">
                  <div className="success-checkmark">✓</div>
                  <p className="success-message-text">Thank you! Your message has been sent successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="email"
                      placeholder="your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <textarea
                      placeholder="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="send-msg-btn">
                    Send Message <span>➔</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="contact-right-col">
            <div className="contact-info-block">
              <span className="contact-label">OPENING HOURS</span>
              <p className="contact-detail-text">
                OPEN 6 DAYS A WEEK (MON - SAT)<br />
                FROM 9:00 AM TO 7:00 PM
              </p>
            </div>

            <div className="contact-info-block">
              <span className="contact-label">HR DEPARTMENT</span>
              <p className="contact-detail-text highlight-link">
                ✉️ <a href="mailto:zuraverse@gmail.com">zuraverse@gmail.com</a>
              </p>
            </div>

            <div className="contact-info-block">
              <span className="contact-label">SOCIAL MEDIA</span>
              <div className="social-icon-circles">
                <a href="https://www.instagram.com/zurastudio_/" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="https://x.com/Zuraverse" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/zuraverse" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@zuraverse/" target="_blank" rel="noreferrer" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.483 20.455 12 20.455 12 20.455s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
