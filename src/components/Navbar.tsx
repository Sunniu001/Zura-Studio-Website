"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PROJECTS", href: "/projects" },
  { label: "ZURAVERSE", href: "http://zuraverse.xyz/", external: true },
  { label: "MERCH STORE", href: "https://www.hippiealiens.com/", external: true },
];

interface NavbarProps {
  activePath: string;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export default function Navbar({ activePath, theme, setTheme }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="hero-nav">
        <div className="hero-logo">ZURA STUDIO</div>

        <div className="hero-nav-links">
          {NAV_LINKS.map((link) => {
            const isActive = activePath === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                className={isActive ? "active" : ""}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="hero-nav-actions">
          <button
            className="theme-toggle-minimal"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "☾" : "☀"}
          </button>
          <a href="/contact" className={`hero-contact-btn ${activePath === "/contact" ? "active" : ""}`}>
            CONTACT
          </a>
          
          <button 
            className={`hamburger-btn ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}>
        <button 
          className="mobile-menu-close" 
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <div className="mobile-menu-links">
          {NAV_LINKS.map((link) => {
            const isActive = activePath === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                className={isActive ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {link.label}
              </a>
            );
          })}
          <a 
            href="/contact" 
            className={`hero-contact-btn ${activePath === "/contact" ? "active" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </a>
        </div>
      </div>
    </>
  );
}
