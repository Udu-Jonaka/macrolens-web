"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section id="navbar" className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner">
        {/* Logo */}
        <Link href="/" className="nav-logo">
          {/* TODO: Replace with your MacroLens icon */}
          <img
            src="/icon-placeholder.png"
            alt="MacroLens Logo"
            className="nav-logo-icon"
          />
          <span className="nav-logo-text">
            Macro<span>Lens</span>
          </span>
        </Link>

        {/* Toggle */}
        <div
          className={`nav-toggle ${isOpen ? "active" : ""}`}
          id="nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <div className={`nav-links ${isOpen ? "active" : ""}`} id="nav-links">
          <Link href="/screenshots" onClick={() => setIsOpen(false)}>
            Screenshots
          </Link>
          <Link href="/changelog" onClick={() => setIsOpen(false)}>
            Changelog
          </Link>
        </div>

        {/* CTA */}
        <div className="nav-cta-wrapper">
          <Link
            href="https://github.com/Udu-Jonaka/macrolens-web/releases/download/v1.0.0/macrolens.apk"
            className="nav-cta"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download APK
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
